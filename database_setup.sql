-- ============================================================
-- Log Book System — Database Setup v2 (FIX)
-- รันไฟล์นี้แทนไฟล์เก่า — จะลบ Policy ที่ซ้ำออกให้อัตโนมัติ
-- ============================================================

-- 1. สร้างตาราง (ถ้ามีอยู่แล้วจะข้าม)
CREATE TABLE IF NOT EXISTS students (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  student_code TEXT UNIQUE NOT NULL,
  full_name    TEXT NOT NULL,
  year         INTEGER DEFAULT 1,
  created_at   TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS teachers (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  teacher_code TEXT UNIQUE NOT NULL,
  full_name    TEXT NOT NULL,
  created_at   TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS admins (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  username   TEXT UNIQUE NOT NULL DEFAULT 'admin',
  full_name  TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS competencies (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name            TEXT NOT NULL,
  description     TEXT,
  type            TEXT NOT NULL CHECK (type IN ('mandatory','elective')),
  rubric_criteria JSONB DEFAULT '[
    {"score":1,"label":"ทำไม่ได้"},
    {"score":2,"label":"ทำได้โดยมีผู้ช่วย"},
    {"score":3,"label":"ทำได้โดยมีผู้ดูแล"},
    {"score":4,"label":"ทำได้อิสระ"},
    {"score":5,"label":"ทำได้และสอนผู้อื่น"}
  ]'::jsonb,
  passing_score   INTEGER DEFAULT 3,
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS evaluations (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id    UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  competency_id UUID NOT NULL REFERENCES competencies(id) ON DELETE CASCADE,
  teacher_id    UUID REFERENCES teachers(id) ON DELETE SET NULL,
  status        TEXT NOT NULL CHECK (status IN ('pass','fail')),
  rubric_score  INTEGER,
  location      TEXT,
  notes         TEXT,
  evaluated_at  TIMESTAMPTZ DEFAULT now(),
  UNIQUE (student_id, competency_id)
);

-- ============================================================
-- 2. เปิด RLS
-- ============================================================
ALTER TABLE students     ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers     ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins       ENABLE ROW LEVEL SECURITY;
ALTER TABLE competencies ENABLE ROW LEVEL SECURITY;
ALTER TABLE evaluations  ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 3. ลบ Policy เก่าทั้งหมดก่อน (ป้องกัน error "already exists")
-- ============================================================
DROP POLICY IF EXISTS "read_competencies"              ON competencies;
DROP POLICY IF EXISTS "admin_competencies"             ON competencies;
DROP POLICY IF EXISTS "Anyone read competencies"       ON competencies;
DROP POLICY IF EXISTS "Admins manage competencies"     ON competencies;

DROP POLICY IF EXISTS "student_own"                    ON students;
DROP POLICY IF EXISTS "teacher_read_students"          ON students;
DROP POLICY IF EXISTS "admin_students"                 ON students;
DROP POLICY IF EXISTS "Students read own profile"      ON students;
DROP POLICY IF EXISTS "Teachers read all students"     ON students;
DROP POLICY IF EXISTS "Admins full access students"    ON students;

DROP POLICY IF EXISTS "admin_teachers"                 ON teachers;
DROP POLICY IF EXISTS "teacher_own"                    ON teachers;
DROP POLICY IF EXISTS "Admins full access teachers"    ON teachers;
DROP POLICY IF EXISTS "Teachers read own profile"      ON teachers;

DROP POLICY IF EXISTS "student_evals"                  ON evaluations;
DROP POLICY IF EXISTS "teacher_admin_evals"            ON evaluations;
DROP POLICY IF EXISTS "Students read own evaluations"  ON evaluations;
DROP POLICY IF EXISTS "Teachers read/write evaluations" ON evaluations;

DROP POLICY IF EXISTS "admin_own"                      ON admins;
DROP POLICY IF EXISTS "admin_full"                     ON admins;

-- ============================================================
-- 4. สร้าง Policy ใหม่
-- ============================================================
CREATE POLICY "read_competencies" ON competencies
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "admin_competencies" ON competencies
  FOR ALL USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "student_own" ON students
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "teacher_read_students" ON students
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM teachers WHERE user_id = auth.uid())
    OR EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid())
  );

CREATE POLICY "admin_students" ON students
  FOR ALL USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "admin_teachers" ON teachers
  FOR ALL USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

CREATE POLICY "teacher_own" ON teachers
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "student_evals" ON evaluations
  FOR SELECT USING (
    student_id IN (SELECT id FROM students WHERE user_id = auth.uid())
  );

CREATE POLICY "teacher_admin_evals" ON evaluations
  FOR ALL USING (
    EXISTS (SELECT 1 FROM teachers WHERE user_id = auth.uid())
    OR EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid())
  );

CREATE POLICY "admin_own" ON admins
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "admin_full" ON admins
  FOR ALL USING (EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()));

-- ============================================================
-- 5. ข้อมูลตัวอย่าง Competency (ถ้ามีอยู่แล้วจะข้าม)
-- ============================================================
INSERT INTO competencies (name, description, type) VALUES
('การสอดเข็ม IV Catheter เข้าหลอดเลือดขาหน้าสุนัข',
 'การใส่สายน้ำเกลือเข้าหลอดเลือดดำบริเวณขาหน้าของสุนัข', 'mandatory'),
('การตรวจร่างกายสุนัขเบื้องต้น',
 'การตรวจวัดสัญญาณชีพและประเมินสภาพทั่วไป', 'mandatory'),
('การเจาะเลือดสุนัข',
 'การเก็บตัวอย่างเลือดจากหลอดเลือดดำของสุนัข', 'mandatory'),
('การให้ยาชาเฉพาะที่',
 'การฉีดยาชาบริเวณผิวหนังก่อนทำหัตถการ', 'mandatory'),
('การตรวจอุจจาระ',
 'การส่งตรวจและอ่านผลตรวจอุจจาระเพื่อหาพยาธิ', 'elective'),
('การตรวจปัสสาวะด้วย dipstick',
 'การตรวจปัสสาวะเบื้องต้นด้วยแถบทดสอบ', 'elective')
ON CONFLICT DO NOTHING;
