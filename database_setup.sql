-- ============================================================
-- บันทึก Log Book สำหรับนักศึกษา - Database Setup
-- Supabase SQL Script
-- ============================================================

-- ============================================================
-- 1. สร้างตาราง Students (นักศึกษา)
-- ============================================================
CREATE TABLE IF NOT EXISTS students (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    student_id VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    department VARCHAR(100),
    advisor VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 2. สร้างตาราง Teachers (อาจารย์)
-- ============================================================
CREATE TABLE IF NOT EXISTS teachers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    teacher_id VARCHAR(20) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(20),
    department VARCHAR(100),
    position VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 3. สร้างตาราง Log Books (บันทึก Log)
-- ============================================================
CREATE TABLE IF NOT EXISTS log_books (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id UUID REFERENCES students(id) ON DELETE CASCADE,
    teacher_id UUID REFERENCES teachers(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    log_date DATE NOT NULL,
    start_time TIME,
    end_time TIME,
    activity_type VARCHAR(50), -- e.g., 'internship', 'project', 'training'
    location VARCHAR(255),
    status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
    feedback TEXT,
    hours_logged DECIMAL(5,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 4. สร้างตาราง Approvals (อนุมัติบันทึก)
-- ============================================================
CREATE TABLE IF NOT EXISTS approvals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    log_book_id UUID REFERENCES log_books(id) ON DELETE CASCADE,
    teacher_id UUID REFERENCES teachers(id) ON DELETE CASCADE,
    approval_status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
    comment TEXT,
    approved_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 5. สร้างตาราง Attachments (ไฟล์แนบ)
-- ============================================================
CREATE TABLE IF NOT EXISTS attachments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    log_book_id UUID REFERENCES log_books(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    file_url TEXT NOT NULL,
    file_type VARCHAR(50),
    file_size INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 6. สร้างตาราง Notifications (การแจ้งเตือน)
-- ============================================================
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    type VARCHAR(50), -- info, warning, success, error
    related_log_book_id UUID REFERENCES log_books(id) ON DELETE CASCADE,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 7. สร้างตาราง Settings (การตั้งค่า)
-- ============================================================
CREATE TABLE IF NOT EXISTS settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    notification_enabled BOOLEAN DEFAULT TRUE,
    dark_mode_enabled BOOLEAN DEFAULT FALSE,
    language VARCHAR(10) DEFAULT 'th',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- 8. Enable Row Level Security (RLS)
-- ============================================================

-- RLS for students table
ALTER TABLE students ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own student data" ON students
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own student data" ON students
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Teachers can view all students" ON students
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM teachers WHERE teachers.user_id = auth.uid()
        )
    );

-- RLS for teachers table
ALTER TABLE teachers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own teacher data" ON teachers
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own teacher data" ON teachers
    FOR UPDATE USING (auth.uid() = user_id);

-- RLS for log_books table
ALTER TABLE log_books ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view own log books" ON log_books
    FOR SELECT USING (
        student_id IN (
            SELECT id FROM students WHERE students.user_id = auth.uid()
        )
    );

CREATE POLICY "Students can create log books" ON log_books
    FOR INSERT WITH CHECK (
        student_id IN (
            SELECT id FROM students WHERE students.user_id = auth.uid()
        )
    );

CREATE POLICY "Students can update own log books" ON log_books
    FOR UPDATE USING (
        student_id IN (
            SELECT id FROM students WHERE students.user_id = auth.uid()
        )
    );

CREATE POLICY "Teachers can view all log books" ON log_books
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM teachers WHERE teachers.user_id = auth.uid()
        )
    );

-- RLS for approvals table
ALTER TABLE approvals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Teachers can view approvals" ON approvals
    FOR SELECT USING (
        teacher_id IN (
            SELECT id FROM teachers WHERE teachers.user_id = auth.uid()
        )
    );

CREATE POLICY "Teachers can create approvals" ON approvals
    FOR INSERT WITH CHECK (
        teacher_id IN (
            SELECT id FROM teachers WHERE teachers.user_id = auth.uid()
        )
    );

CREATE POLICY "Teachers can update approvals" ON approvals
    FOR UPDATE USING (
        teacher_id IN (
            SELECT id FROM teachers WHERE teachers.user_id = auth.uid()
        )
    );

-- RLS for attachments table
ALTER TABLE attachments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view attachments" ON attachments
    FOR SELECT USING (
        log_book_id IN (
            SELECT id FROM log_books WHERE 
            student_id IN (SELECT id FROM students WHERE students.user_id = auth.uid())
        )
        OR
        EXISTS (
            SELECT 1 FROM teachers WHERE teachers.user_id = auth.uid()
        )
    );

-- RLS for notifications table
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own notifications" ON notifications
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own notifications" ON notifications
    FOR UPDATE USING (auth.uid() = user_id);

-- RLS for settings table
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own settings" ON settings
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own settings" ON settings
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own settings" ON settings
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================================
-- 9. สร้าง Indexes เพื่อ Query Performance
-- ============================================================

-- Students indexes
CREATE INDEX idx_students_user_id ON students(user_id);
CREATE INDEX idx_students_email ON students(email);
CREATE INDEX idx_students_student_id ON students(student_id);

-- Teachers indexes
CREATE INDEX idx_teachers_user_id ON teachers(user_id);
CREATE INDEX idx_teachers_email ON teachers(email);
CREATE INDEX idx_teachers_teacher_id ON teachers(teacher_id);

-- Log books indexes
CREATE INDEX idx_log_books_student_id ON log_books(student_id);
CREATE INDEX idx_log_books_teacher_id ON log_books(teacher_id);
CREATE INDEX idx_log_books_status ON log_books(status);
CREATE INDEX idx_log_books_log_date ON log_books(log_date);

-- Approvals indexes
CREATE INDEX idx_approvals_log_book_id ON approvals(log_book_id);
CREATE INDEX idx_approvals_teacher_id ON approvals(teacher_id);
CREATE INDEX idx_approvals_status ON approvals(approval_status);

-- Attachments indexes
CREATE INDEX idx_attachments_log_book_id ON attachments(log_book_id);

-- Notifications indexes
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);

-- Settings indexes
CREATE INDEX idx_settings_user_id ON settings(user_id);

-- ============================================================
-- 10. ข้อมูลตัวอย่างสำหรับทดสอบ (ไม่จำเป็น - สามารถลบได้)
-- ============================================================

-- หมายเหตุ: ต้องสร้าง Auth users ใน Supabase Authentication ก่อน
-- จากนั้นจึงแทนที่ UUID ด้านล่างด้วย user_id จริง

-- INSERT INTO students (user_id, student_id, full_name, email, phone, department, advisor)
-- VALUES (
--     '550e8400-e29b-41d4-a716-446655440000', -- แทนที่ด้วย UUID ของ student@example.com
--     'STU001',
--     'นายปิติพัฒน์ นักศึกษา',
--     'student@example.com',
--     '0801234567',
--     'วิทยาการคอมพิวเตอร์',
--     'ดร.อาจารย์ ศรีสุพัฒน์'
-- );

-- INSERT INTO teachers (user_id, teacher_id, full_name, email, phone, department, position)
-- VALUES (
--     '550e8400-e29b-41d4-a716-446655440001', -- แทนที่ด้วย UUID ของ teacher@example.com
--     'T001',
--     'ดร.อาจารย์ ศรีสุพัฒน์',
--     'teacher@example.com',
--     '0802345678',
--     'วิทยาการคอมพิวเตอร์',
--     'อาจารย์'
-- );

-- ============================================================
-- 11. สร้าง Functions สำหรับ Auto Update Updated_at
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for auto update updated_at
CREATE TRIGGER trigger_update_students_updated_at
BEFORE UPDATE ON students
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_update_teachers_updated_at
BEFORE UPDATE ON teachers
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_update_log_books_updated_at
BEFORE UPDATE ON log_books
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_update_approvals_updated_at
BEFORE UPDATE ON approvals
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trigger_update_settings_updated_at
BEFORE UPDATE ON settings
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- 12. สร้าง Views สำหรับ Dashboard
-- ============================================================

-- View สำหรับแสดงสถิตินักศึกษา
CREATE OR REPLACE VIEW student_statistics AS
SELECT 
    s.id,
    s.student_id,
    s.full_name,
    COUNT(lb.id) as total_logs,
    SUM(CASE WHEN lb.status = 'approved' THEN 1 ELSE 0 END) as approved_logs,
    SUM(CASE WHEN lb.status = 'pending' THEN 1 ELSE 0 END) as pending_logs,
    SUM(CASE WHEN lb.status = 'rejected' THEN 1 ELSE 0 END) as rejected_logs,
    SUM(lb.hours_logged) as total_hours
FROM students s
LEFT JOIN log_books lb ON s.id = lb.student_id
GROUP BY s.id, s.student_id, s.full_name;

-- View สำหรับแสดง Log Books ที่รอการอนุมัติ
CREATE OR REPLACE VIEW pending_approvals AS
SELECT 
    lb.id,
    lb.title,
    s.student_id,
    s.full_name as student_name,
    lb.log_date,
    lb.status,
    COUNT(a.id) as approval_count
FROM log_books lb
JOIN students s ON lb.student_id = s.id
LEFT JOIN approvals a ON lb.id = a.log_book_id
WHERE lb.status = 'pending'
GROUP BY lb.id, lb.title, s.student_id, s.full_name, lb.log_date, lb.status;

-- ============================================================
-- 13. Storage Bucket สำหรับ File Uploads (ถ้าใช้ Supabase Storage)
-- ============================================================

-- หมายเหตุ: ใช้ Supabase Dashboard เพื่อสร้าง Storage bucket
-- ไป Storage → New bucket → ตั้งชื่อว่า "logbook-attachments"

-- ============================================================
-- Script เสร็จสิ้น!
-- ============================================================
-- 
-- ขั้นตอนต่อไป:
-- 1. สร้าง Auth Users ใน Supabase Authentication
-- 2. แทนที่ UUID ในส่วน INSERT DATA ด้วยค่าจริง
-- 3. ทดสอบการเข้าสู่ระบบ
-- 4. ตรวจสอบ RLS policies ว่าทำงานได้ถูกต้อง
-- ============================================================
