-- =====================================================================
-- pk Database Setup (combined)
-- =====================================================================
-- รันใน Supabase Dashboard → SQL Editor → New query → Run (▶)
-- ⚙️ idempotent — รันซ้ำได้ปลอดภัย
--
-- Tables:
--   1. shared_transactions  (แชร์ๆ — public + PIN gate)
--   2. clinic_shopping      (รายการรอจัดซื้อ — Alex login only)
-- =====================================================================


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  1. SHARED TRANSACTIONS — Alex+Jojo expense tracker              ║
-- ╚═══════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS shared_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL CHECK (type IN ('expense', 'deposit')),
  amount NUMERIC(12, 2) NOT NULL CHECK (amount > 0),
  category TEXT,
  payer TEXT,
  description TEXT,
  date DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  created_by TEXT,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

UPDATE shared_transactions SET payer = 'jojo' WHERE payer = 'partner';

ALTER TABLE shared_transactions DROP CONSTRAINT IF EXISTS shared_transactions_payer_check;
ALTER TABLE shared_transactions
  ADD CONSTRAINT shared_transactions_payer_check
  CHECK (payer IN ('alex', 'jojo') OR payer IS NULL);

CREATE INDEX IF NOT EXISTS idx_shared_trans_date ON shared_transactions(date DESC);
CREATE INDEX IF NOT EXISTS idx_shared_trans_type ON shared_transactions(type);
CREATE INDEX IF NOT EXISTS idx_shared_trans_category ON shared_transactions(category);


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  2. CLINIC SHOPPING LIST — รายการรอจัดซื้อในคลินิก               ║
-- ╚═══════════════════════════════════════════════════════════════════╝

CREATE TABLE IF NOT EXISTS clinic_shopping (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  quantity NUMERIC(10, 2),
  unit TEXT,                                  -- ขวด, กล่อง, ห่อ, ชิ้น
  category TEXT NOT NULL DEFAULT 'other'
    CHECK (category IN ('medicine', 'consumable', 'equipment', 'other')),
  price NUMERIC(12, 2),                       -- ราคาต่อหน่วย (optional)
  is_completed BOOLEAN NOT NULL DEFAULT FALSE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_clinic_shop_completed ON clinic_shopping(is_completed);
CREATE INDEX IF NOT EXISTS idx_clinic_shop_category ON clinic_shopping(category);
CREATE INDEX IF NOT EXISTS idx_clinic_shop_created ON clinic_shopping(created_at DESC);


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  3. SHARED TRIGGER — auto-update updated_at column                ║
-- ╚═══════════════════════════════════════════════════════════════════╝

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE 'plpgsql';

DROP TRIGGER IF EXISTS update_shared_transactions_updated_at ON shared_transactions;
CREATE TRIGGER update_shared_transactions_updated_at
  BEFORE UPDATE ON shared_transactions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_clinic_shopping_updated_at ON clinic_shopping;
CREATE TRIGGER update_clinic_shopping_updated_at
  BEFORE UPDATE ON clinic_shopping
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  4. RLS POLICIES                                                  ║
-- ╚═══════════════════════════════════════════════════════════════════╝

-- shared_transactions: PUBLIC access (PIN gate is at app layer)
ALTER TABLE shared_transactions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Couple access only" ON shared_transactions;
DROP POLICY IF EXISTS "Public access" ON shared_transactions;
CREATE POLICY "Public access"
  ON shared_transactions
  FOR ALL TO anon, authenticated
  USING (true) WITH CHECK (true);

-- clinic_shopping: Authenticated users only (Alex via Google login)
ALTER TABLE clinic_shopping ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Authenticated users only" ON clinic_shopping;
CREATE POLICY "Authenticated users only"
  ON clinic_shopping
  FOR ALL TO authenticated
  USING (auth.email() = 'carnitab@gmail.com')
  WITH CHECK (auth.email() = 'carnitab@gmail.com');


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  5. PERMISSIONS                                                   ║
-- ╚═══════════════════════════════════════════════════════════════════╝

GRANT ALL ON shared_transactions TO anon, authenticated;
GRANT ALL ON clinic_shopping TO authenticated;


-- ╔═══════════════════════════════════════════════════════════════════╗
-- ║  6. VERIFY — รัน query นี้เพื่อเช็คว่า setup สำเร็จไหม           ║
-- ╚═══════════════════════════════════════════════════════════════════╝

-- SELECT 'shared_transactions' AS table_name, count(*) AS rows FROM shared_transactions
-- UNION ALL
-- SELECT 'clinic_shopping' AS table_name, count(*) AS rows FROM clinic_shopping;
