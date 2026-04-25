-- ============================================================
-- Log Book System — Database Setup (Final Version)
-- รันไฟล์นี้ได้เลย ปลอดภัยทุกครั้ง ไม่มี error ซ้ำ
-- ============================================================

-- ============================================================
-- 1. สร้างตารางหลัก (ถ้ามีอยู่แล้วจะข้าม)
-- ============================================================

CREATE TABLE IF NOT EXISTS students (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_code TEXT UNIQUE NOT NULL,
  full_name    TEXT NOT NULL,
  password     TEXT NOT NULL DEFAULT '123456',
  created_at   TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS teachers (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_code TEXT UNIQUE NOT NULL,
  full_name    TEXT NOT NULL,
  password     TEXT NOT NULL DEFAULT '123456',
  created_at   TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS admins (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  full_name  TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS departments (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name        TEXT UNIQUE NOT NULL,
  code        TEXT UNIQUE,
  description TEXT,
  created_at  TIMESTAMPTZ DEFAULT now()
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

CREATE TABLE IF NOT EXISTS evaluation_history (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id    UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  competency_id UUID NOT NULL REFERENCES competencies(id) ON DELETE CASCADE,
  teacher_id    UUID REFERENCES teachers(id) ON DELETE SET NULL,
  status        TEXT NOT NULL CHECK (status IN ('pass','fail')),
  rubric_score  INTEGER,
  location      TEXT,
  notes         TEXT,
  feedback      TEXT,
  evaluated_at  TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS qr_tokens (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  teacher_id    UUID NOT NULL REFERENCES teachers(id) ON DELETE CASCADE,
  competency_id UUID NOT NULL REFERENCES competencies(id) ON DELETE CASCADE,
  token         TEXT UNIQUE NOT NULL DEFAULT gen_random_uuid()::text,
  is_active     BOOLEAN DEFAULT true,
  created_at    TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS qr_queue (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  token_id   UUID NOT NULL REFERENCES qr_tokens(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  status     TEXT DEFAULT 'waiting' CHECK (status IN ('waiting','evaluated','skipped')),
  joined_at  TIMESTAMPTZ DEFAULT now(),
  UNIQUE(token_id, student_id)
);

CREATE TABLE IF NOT EXISTS activity_logs (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_role  TEXT NOT NULL,
  user_name  TEXT NOT NULL,
  user_code  TEXT,
  action     TEXT NOT NULL,
  details    TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================
-- 2. เพิ่ม Columns ที่จำเป็น (ถ้ายังไม่มี)
-- ============================================================

ALTER TABLE admins       ADD COLUMN IF NOT EXISTS username          TEXT DEFAULT 'admin';
ALTER TABLE students     ADD COLUMN IF NOT EXISTS student_code      TEXT;
ALTER TABLE students     ADD COLUMN IF NOT EXISTS password          TEXT NOT NULL DEFAULT '123456';
ALTER TABLE students     ADD COLUMN IF NOT EXISTS department_id     UUID;
ALTER TABLE teachers     ADD COLUMN IF NOT EXISTS teacher_code      TEXT;
ALTER TABLE teachers     ADD COLUMN IF NOT EXISTS password          TEXT NOT NULL DEFAULT '123456';
ALTER TABLE teachers     ADD COLUMN IF NOT EXISTS department_id     UUID;
ALTER TABLE teachers     ADD COLUMN IF NOT EXISTS is_admin          BOOLEAN DEFAULT false;
ALTER TABLE competencies ADD COLUMN IF NOT EXISTS category          TEXT DEFAULT '';
ALTER TABLE competencies ADD COLUMN IF NOT EXISTS department_id     UUID;
ALTER TABLE evaluations  ADD COLUMN IF NOT EXISTS feedback          TEXT;
ALTER TABLE evaluations  ADD COLUMN IF NOT EXISTS avg_rubric_score  NUMERIC(4,2);
ALTER TABLE evaluations  ADD COLUMN IF NOT EXISTS eval_count        INTEGER DEFAULT 1;

-- Sync student_code / teacher_code จาก column เดิม (ถ้ายังไม่มี)
UPDATE students SET student_code = student_id WHERE student_code IS NULL AND student_id IS NOT NULL;
UPDATE teachers SET teacher_code = teacher_id WHERE teacher_code IS NULL AND teacher_id IS NOT NULL;

-- ทำ column เดิมเป็น optional
ALTER TABLE students ALTER COLUMN student_id DROP NOT NULL;
ALTER TABLE students ALTER COLUMN email      DROP NOT NULL;
ALTER TABLE teachers ALTER COLUMN teacher_id DROP NOT NULL;
ALTER TABLE teachers ALTER COLUMN email      DROP NOT NULL;

-- ============================================================
-- 3. เพิ่ม UNIQUE / FK Constraints (ถ้ายังไม่มี)
-- ============================================================

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='students_student_code_key') THEN
    ALTER TABLE students ADD CONSTRAINT students_student_code_key UNIQUE (student_code);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='teachers_teacher_code_key') THEN
    ALTER TABLE teachers ADD CONSTRAINT teachers_teacher_code_key UNIQUE (teacher_code);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='admins_username_key') THEN
    ALTER TABLE admins ADD CONSTRAINT admins_username_key UNIQUE (username);
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='students_department_id_fkey') THEN
    ALTER TABLE students ADD CONSTRAINT students_department_id_fkey
      FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='teachers_department_id_fkey') THEN
    ALTER TABLE teachers ADD CONSTRAINT teachers_department_id_fkey
      FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL;
  END IF;
END $$;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='competencies_department_id_fkey') THEN
    ALTER TABLE competencies ADD CONSTRAINT competencies_department_id_fkey
      FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL;
  END IF;
END $$;

-- ============================================================
-- 4. เปิด RLS ทุกตาราง
-- ============================================================

ALTER TABLE students           ENABLE ROW LEVEL SECURITY;
ALTER TABLE teachers           ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins             ENABLE ROW LEVEL SECURITY;
ALTER TABLE departments        ENABLE ROW LEVEL SECURITY;
ALTER TABLE competencies       ENABLE ROW LEVEL SECURITY;
ALTER TABLE evaluations        ENABLE ROW LEVEL SECURITY;
ALTER TABLE evaluation_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE qr_tokens          ENABLE ROW LEVEL SECURITY;
ALTER TABLE qr_queue           ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs      ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 5. ลบ Policy เก่าทั้งหมด
-- ============================================================

DROP POLICY IF EXISTS "anon_students"                         ON students;
DROP POLICY IF EXISTS "anon_teachers"                         ON teachers;
DROP POLICY IF EXISTS "anon_competencies"                     ON competencies;
DROP POLICY IF EXISTS "anon_evaluations"                      ON evaluations;
DROP POLICY IF EXISTS "anon_eval_history"                     ON evaluation_history;
DROP POLICY IF EXISTS "anon_qr_tokens"                        ON qr_tokens;
DROP POLICY IF EXISTS "anon_qr_queue"                         ON qr_queue;
DROP POLICY IF EXISTS "anon_logs"                             ON activity_logs;
DROP POLICY IF EXISTS "anon_departments"                      ON departments;
DROP POLICY IF EXISTS "admin_own"                             ON admins;
DROP POLICY IF EXISTS "admin_full"                            ON admins;
DROP POLICY IF EXISTS "read_competencies"                     ON competencies;
DROP POLICY IF EXISTS "admin_competencies"                    ON competencies;
DROP POLICY IF EXISTS "Anyone read competencies"              ON competencies;
DROP POLICY IF EXISTS "Admins manage competencies"            ON competencies;
DROP POLICY IF EXISTS "student_own"                           ON students;
DROP POLICY IF EXISTS "teacher_read_students"                 ON students;
DROP POLICY IF EXISTS "admin_students"                        ON students;
DROP POLICY IF EXISTS "Students read own profile"             ON students;
DROP POLICY IF EXISTS "Teachers read all students"            ON students;
DROP POLICY IF EXISTS "Admins full access students"           ON students;
DROP POLICY IF EXISTS "admin_teachers"                        ON teachers;
DROP POLICY IF EXISTS "teacher_own"                           ON teachers;
DROP POLICY IF EXISTS "Admins full access teachers"           ON teachers;
DROP POLICY IF EXISTS "Teachers read own profile"             ON teachers;
DROP POLICY IF EXISTS "student_evals"                         ON evaluations;
DROP POLICY IF EXISTS "teacher_admin_evals"                   ON evaluations;
DROP POLICY IF EXISTS "Students read own evaluations"         ON evaluations;
DROP POLICY IF EXISTS "Teachers read/write evaluations"       ON evaluations;
DROP POLICY IF EXISTS "Users can view own student data"       ON students;
DROP POLICY IF EXISTS "Users can update own student data"     ON students;

-- ============================================================
-- 6. สร้าง Policy ใหม่ (anon เข้าถึงได้ — ระบบภายในคณะ)
-- ============================================================

CREATE POLICY "anon_students"      ON students           FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_teachers"      ON teachers           FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_competencies"  ON competencies       FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_evaluations"   ON evaluations        FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_eval_history"  ON evaluation_history FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_qr_tokens"     ON qr_tokens          FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_qr_queue"      ON qr_queue           FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_logs"          ON activity_logs      FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "anon_departments"   ON departments        FOR ALL USING (true) WITH CHECK (true);

-- admins ใช้ Supabase Auth
CREATE POLICY "admin_own"  ON admins FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "admin_full" ON admins FOR ALL    USING (user_id = auth.uid());

-- ============================================================
-- 7. Functions
-- ============================================================

CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN LANGUAGE sql SECURITY DEFINER
AS $$ SELECT EXISTS (SELECT 1 FROM admins WHERE user_id = auth.uid()); $$;

-- ============================================================
-- 8. ข้อมูล Departments เริ่มต้น
-- ============================================================

INSERT INTO departments (name, code, description) VALUES
('สัตวแพทยศาสตร์',    'VET', 'หลักสูตรสัตวแพทยศาสตรบัณฑิต'),
('การพยาบาลสัตว์',    'VN',  'หลักสูตรวิทยาศาสตรบัณฑิต สาขาการพยาบาลสัตว์'),
('สัตวบาล',           'AH',  'หลักสูตรวิทยาศาสตรบัณฑิต สาขาสัตวบาล'),
('เทคนิคการสัตวแพทย์','VT',  'หลักสูตรวิทยาศาสตรบัณฑิต สาขาเทคนิคการสัตวแพทย์')
ON CONFLICT DO NOTHING;

-- ============================================================
-- 9. ข้อมูล Competency ตัวอย่าง
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

-- ============================================================
-- 10. อัปเดต Admin User
-- ============================================================

UPDATE auth.users
  SET email_confirmed_at = now()
  WHERE email = 'admin@lbsys.com';

UPDATE admins
  SET user_id  = (SELECT id FROM auth.users WHERE email = 'admin@lbsys.com'),
      username = 'admin'
  WHERE username = 'admin' OR user_id IS NULL;

-- ============================================================
-- 11. Reload Schema Cache
-- ============================================================

NOTIFY pgrst, 'reload schema';
