/* ============================================================
   SURGERY HANDBOOK DATA
   Source: Tobias & Johnston, Veterinary Surgery: Small Animal, 2nd Ed
   Personal clinical reference for Alex
============================================================ */

window.SURGERY_ENTRIES = [

  /* ============================================================
     UROGENITAL — Reproductive
  ============================================================ */
  {
    id: 'ovariohysterectomy',
    titleEn: 'Ovariohysterectomy (OHE) / Spay',
    titleTh: 'OHE — ทำหมันเพศเมีย',
    type: 'surgery',
    system: 'urogenital',
    species: ['dog', 'cat'],
    tags: ['OHE', 'spay', 'ovariohysterectomy', 'ovariectomy', 'pyometra', 'mammary tumor prevention', 'pedicle ligation', 'broad ligament', 'uterine body', 'estrus'],
    aliases: ['spay', 'OHE', 'ทำหมัน', 'ผ่าตัดทำหมันตัวเมีย'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Ovaries/Uterus',
    sections: {
      indications: `
        <ul>
          <li><strong>Routine elective sterilization</strong> ✨ — most common indication
            <ul>
              <li>Ideal timing: before 1st estrus → 99% reduction in mammary tumor risk ✨</li>
              <li>Before 2nd estrus → 92% reduction</li>
              <li>Pediatric spay (8-16 weeks) safe in shelter setting</li>
            </ul>
          </li>
          <li><strong>Pyometra ✗</strong> — therapeutic emergency OHE</li>
          <li>Mucometra / hydrometra</li>
          <li>Uterine neoplasia (rare in dog/cat — mostly benign leiomyoma)</li>
          <li>Severe vaginal hyperplasia (estrogen-driven; spay eliminates)</li>
          <li>Dystocia — concurrent with C-section</li>
          <li>Ovarian neoplasia / cysts</li>
          <li>Estrogen toxicity from ovarian remnant or tumor</li>
          <li>Behavioral/management:
            <ul>
              <li>Eliminating estrus cycles</li>
              <li>Reducing roaming behavior</li>
              <li>Pseudopregnancy prevention</li>
            </ul>
          </li>
          <li>Diabetes mellitus (intact diabetic — progesterone antagonizes insulin)</li>
        </ul>
        <p><strong>Ovariectomy (OE) — alternative ✨:</strong></p>
        <ul>
          <li>Removes ovaries only (not uterus)</li>
          <li>Equivalent outcomes for elective spay (Europe favors OE)</li>
          <li>Smaller incision, faster, less bleeding</li>
          <li>Stump pyometra extremely rare if no estrogen source</li>
          <li>NOT appropriate for: pyometra, uterine pathology</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hemodynamic instability not yet stabilized (acute pyometra → resuscitate first)</li>
          <li>Severe untreated coagulopathy</li>
          <li>Significant uncontrolled comorbidity (uncompensated cardiac dz, severe metabolic derangement)</li>
          <li>During estrus (relative — markedly increased vascularity, friable tissue, more bleeding) ⚠️
            <ul>
              <li>Postpone elective surgery 6-8 weeks if possible</li>
              <li>Emergency lepto/pyometra: proceed regardless</li>
            </ul>
          </li>
          <li>Late pregnancy (relative — discuss with owner; ethically complex)</li>
          <li>Working / breeding-aged dogs intended for breeding</li>
          <li>Pediatric in giant breeds — controversial; some evidence early spay before growth plate closure increases OSA, CCL rupture, hemangiosarcoma risk</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup:</strong></p>
        <ul>
          <li>Signalment + history (heat cycles, breeding history, prior surgeries)</li>
          <li>PE (cardiac auscultation, hydration, BCS)</li>
          <li>CBC + biochem panel</li>
          <li>UA</li>
          <li>If pyometra: + thoracic radiograph, abdominal US, electrolytes, BG</li>
          <li>Coag if breed predisposed (vWD — Doberman, Scottie, etc.)</li>
          <li>Pre-anesthetic ECG if older or cardiac concerns</li>
        </ul>

        <p><strong>2. Patient prep:</strong></p>
        <ul>
          <li>NPO: 8-12h adult dogs/cats (don't withhold &gt; 12h — prone to GERD/regurgitation)</li>
          <li>Pediatric (&lt; 4 mo): NPO 4-6h only (hypoglycemia risk)</li>
          <li>Water until 2h pre-op</li>
          <li>Empty bladder pre-op (gentle expression or just clip after voiding)</li>
          <li>IV catheter (cephalic typical)</li>
          <li>Pre-warm OR + recovery</li>
        </ul>

        <p><strong>3. Anesthesia plan ✨:</strong></p>
        <ul>
          <li><strong>Premedication:</strong>
            <ul>
              <li>Healthy young: methadone 0.2-0.3 mg/kg + dexmedetomidine 5-10 mcg/kg IM</li>
              <li>Or hydromorphone 0.05-0.1 mg/kg + acepromazine 0.01-0.03 mg/kg IM</li>
              <li>Cat: butorphanol 0.2-0.4 mg/kg + dexmedetomidine 5-10 mcg/kg + midazolam 0.2 mg/kg IM ("kitty magic")</li>
            </ul>
          </li>
          <li><strong>Induction:</strong>
            <ul>
              <li>Propofol 4-6 mg/kg IV titrated to effect</li>
              <li>Or alfaxalone 1-2 mg/kg IV</li>
              <li>Mask induction not recommended in healthy young (stress, environmental contamination)</li>
            </ul>
          </li>
          <li><strong>Maintenance:</strong>
            <ul>
              <li>Isoflurane or sevoflurane in 100% O2</li>
              <li>Endotracheal intubation; cuff inflated</li>
              <li>Mechanical ventilation if procedure &gt; 30 min</li>
            </ul>
          </li>
          <li><strong>IV fluids:</strong> LRS or other balanced crystalloid 5 mL/kg/h (lower than older 10 mL/kg/h recommendation — reduce edema/dilution)</li>
          <li><strong>Monitoring:</strong>
            <ul>
              <li>SpO2, ECG, BP (NIBP min)</li>
              <li>EtCO2 + temperature</li>
              <li>Heart rate, respiratory rate</li>
              <li>Anesthetic depth (jaw tone, eye position, palpebral)</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Surgical site prep:</strong></p>
        <ul>
          <li>Clip ventral abdomen: xiphoid → pubis; lateral to last nipple line</li>
          <li>Aseptic prep: chlorhexidine scrub × 3 cycles → final alcohol/chlorhexidine solution wipe</li>
          <li>Drape: 4 corner towels + fenestrated drape, or single fenestrated drape</li>
          <li>Position: dorsal recumbency; secure with V-trough or sandbags</li>
        </ul>
      `,
      technique: `
        <p><strong>Step-by-step technique ✨:</strong></p>

        <p><strong>1. Skin incision:</strong></p>
        <ul>
          <li>Ventral midline incision, just caudal to umbilicus</li>
          <li>Length: depends on size + accessibility
            <ul>
              <li>Small dog/cat: 3-5 cm</li>
              <li>Medium dog: 5-8 cm</li>
              <li>Large dog: 8-12 cm</li>
              <li>Pyometra/giant breed: longer for adequate exposure</li>
            </ul>
          </li>
          <li>Cat: incision 1/3 cranial, 2/3 caudal to umbilicus (uterus more caudal)</li>
          <li>Dog: incision 1/3 caudal, 2/3 cranial (uterus more cranial)</li>
        </ul>

        <p><strong>2. SC dissection + linea alba:</strong></p>
        <ul>
          <li>Sharp dissection through SC tissue to expose linea alba</li>
          <li>Identify external rectus sheath fascia</li>
          <li>Tent linea alba with thumb forceps + stab incision with #11 or #15 blade</li>
          <li>Extend with Mayo scissors (avoid bladder, omentum, intestines)</li>
        </ul>

        <p><strong>3. Locate uterine horn:</strong></p>
        <ul>
          <li><strong>Spay hook (Snook hook) ✨</strong>: insert against R abdominal wall (away from spleen on L), sweep dorsally then ventrally, lift to expose horn
            <ul>
              <li>Hook may catch bladder or descending colon — release + reattempt if not horn</li>
              <li>Uterine horn: pale pink, smooth, tubular, contains vascular pattern</li>
            </ul>
          </li>
          <li>Or finger sweep for direct retrieval (large patients, cat)</li>
          <li>Trace horn cranially to ovary</li>
        </ul>

        <p><strong>4. Ovarian pedicle ligation ✨:</strong></p>
        <ul>
          <li>Identify ovary at end of horn (within ovarian bursa, surrounded by fat)</li>
          <li>Strum/break suspensory ligament:
            <ul>
              <li>Caudolateral traction with index finger placed under ligament</li>
              <li>"Strum" or break with controlled force</li>
              <li>Avoid excessive force — can tear pedicle</li>
            </ul>
          </li>
          <li>Make window in broad ligament (mesovarium/mesometrium) avoiding ovarian vessels</li>
          <li><strong>Triple-clamp technique:</strong>
            <ul>
              <li>Place 3 hemostats across pedicle (most proximal, middle, distal)</li>
              <li>Most proximal = future ligature site</li>
              <li>Middle = guard against pedicle slippage</li>
              <li>Distal = where you'll cut</li>
            </ul>
          </li>
          <li><strong>Ligation options:</strong>
            <ul>
              <li>Single encircling ligature with miller's knot (small/young)</li>
              <li>Double ligature (encircling + transfixing) for larger/older</li>
              <li>Modified Miller's knot — secure, low slip</li>
            </ul>
          </li>
          <li>Suture: 2-0 or 3-0 PDS (absorbable monofilament)</li>
          <li>Ligature placed around groove from most-proximal hemostat → tighten as hemostat removed</li>
          <li>Cut between middle and distal hemostats</li>
          <li>Inspect pedicle stump: gently grasp + lower into abdomen, verify no bleeding</li>
          <li>If bleeding: replace hemostat, re-ligate; consider 4×4 gauze pack pressure</li>
          <li>Repeat for contralateral ovary</li>
        </ul>

        <p><strong>5. Broad ligament:</strong></p>
        <ul>
          <li>If avascular: tear bluntly with finger</li>
          <li>If vascular (older, pyometra, obese): clamp + ligate
            <ul>
              <li>Significant vessels in ovariectomized older dogs / pyometra</li>
            </ul>
          </li>
        </ul>

        <p><strong>6. Uterine body ligation ✨:</strong></p>
        <ul>
          <li>Trace both horns down to bifurcation, then to uterine body</li>
          <li>Identify uterine arteries on either side of body</li>
          <li>Triple-clamp uterine body cranial to cervix
            <ul>
              <li>Clamp at level just cranial to cervix (cervix feels firm, fibrotic)</li>
              <li>Avoid leaving long uterine stump (stump pyometra risk)</li>
            </ul>
          </li>
          <li><strong>Ligation:</strong>
            <ul>
              <li>Encircling ligature around grove from proximal-most clamp</li>
              <li>+ Transfixing ligature distal to first (figure-of-8 around uterine arteries)</li>
              <li>Cat / small dog: single secure encircling may suffice</li>
              <li>Pyometra: always 2 ligatures + careful exteriorization</li>
            </ul>
          </li>
          <li>Cut between middle and distal hemostat</li>
          <li>Inspect stump for hemorrhage; gently lower into abdomen</li>
        </ul>

        <p><strong>7. Pyometra-specific notes ✗:</strong></p>
        <ul>
          <li>Uterus often massively distended, friable</li>
          <li>Avoid spillage — cover incision edges with moistened laparotomy pads</li>
          <li>Don't squeeze or compress uterus</li>
          <li>Lavage abdomen with warm saline if any spillage</li>
          <li>Submit uterine contents for culture if not previously done</li>
        </ul>

        <p><strong>8. Lavage + closure:</strong></p>
        <ul>
          <li>Lavage abdomen with warm sterile saline if indicated (pyometra, contamination)</li>
          <li>Inspect abdomen for hemorrhage, ensure all sponges removed (count!)</li>
          <li><strong>Linea alba (body wall):</strong>
            <ul>
              <li>Suture: PDS — 0 (medium-large dog), 2-0 (small dog/cat), 3-0 (cat/pediatric)</li>
              <li>Pattern: simple continuous (faster) or simple interrupted (more secure for high-motion)</li>
              <li>Bites: 5-10 mm from edge, 5-10 mm apart</li>
              <li>Include external rectus sheath (strongest holding layer)</li>
              <li>Don't strangulate tissue</li>
            </ul>
          </li>
          <li><strong>SC layer:</strong>
            <ul>
              <li>3-0 PDS or Monocryl simple continuous</li>
              <li>Eliminates dead space</li>
            </ul>
          </li>
          <li><strong>Skin:</strong>
            <ul>
              <li>3-0 nylon or skin staples interrupted</li>
              <li>Or 4-0 Monocryl intradermal continuous (cosmetic, no removal)</li>
              <li>Cat: intradermal preferred (cats remove sutures)</li>
            </ul>
          </li>
          <li>Apply antiseptic spray (cyanoacrylate optional for sealed appearance)</li>
        </ul>
      `,
      drugs: `
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li><strong>Clean elective OHE:</strong> antibiotics NOT routinely indicated ✨
            <ul>
              <li>SSI rate &lt; 5% without prophylaxis in young healthy</li>
              <li>Aseptic technique > antibiotics for clean surgery</li>
            </ul>
          </li>
          <li><strong>Pyometra / contaminated:</strong>
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction → repeat q90 min during surgery</li>
              <li>Continue post-op: amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 7-14 days</li>
              <li>Adjust per culture results from uterine contents</li>
            </ul>
          </li>
          <li>Diabetic / immunocompromised: consider single dose cefazolin</li>
        </ul>

        <p><strong>Analgesia (multimodal) ✨:</strong></p>
        <ul>
          <li><strong>Pre-op (premed):</strong>
            <ul>
              <li>Methadone 0.2-0.3 mg/kg IM (dog); 0.1-0.2 mg/kg (cat)</li>
              <li>Or hydromorphone 0.05-0.1 mg/kg IM</li>
              <li>Or buprenorphine 0.02 mg/kg IM (longer acting; less profound)</li>
            </ul>
          </li>
          <li><strong>Intra-op:</strong>
            <ul>
              <li>Pre-incisional local block: bupivacaine 1.5 mg/kg + lidocaine 4 mg/kg (mix; do not exceed totals)</li>
              <li>Splash 1-2 mg/kg lidocaine on each ovarian pedicle pre-clamping (helps reduce visceral pain)</li>
              <li>Fentanyl 2-5 mcg/kg/h CRI for prolonged or pyometra cases</li>
            </ul>
          </li>
          <li><strong>NSAID at recovery (if normotensive + normohydrated):</strong>
            <ul>
              <li>Carprofen 4.4 mg/kg SC (dog only)</li>
              <li>Or meloxicam 0.2 mg/kg SC initial dose, then 0.1 mg/kg PO daily × 5-7 d</li>
              <li>Cat: meloxicam 0.05-0.1 mg/kg SC single dose, then 0.025 mg/kg PO daily × 3-5 d (cautious — cat NSAID sensitivity)</li>
              <li>Or robenacoxib 1-2 mg/kg PO/SC daily × 3 d (cat)</li>
            </ul>
          </li>
          <li><strong>Continued post-op:</strong>
            <ul>
              <li>NSAID × 5-7 days</li>
              <li>± Tramadol 2-5 mg/kg PO q8-12h (variable efficacy in dog)</li>
              <li>± Gabapentin 10 mg/kg PO q8h × 5-7 d (adjunct)</li>
              <li>Buprenorphine 0.01-0.02 mg/kg buccal q8h (cat — particularly effective)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Anti-emetic:</strong></p>
        <ul>
          <li>Maropitant 1 mg/kg SC at premed time (also reduces inhalant requirement, visceral pain)</li>
          <li>Reduces post-op nausea / vomiting</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h):</strong></p>
        <ul>
          <li>Recovery in warm, quiet area</li>
          <li>Monitor TPR, MM, CRT, mentation q15-30 min initially</li>
          <li>Maintain body temperature (Bair hugger, warm blankets)</li>
          <li>Pain assessment q1-2h (Glasgow CMPS-SF or feline scale)</li>
          <li>Continue IV fluids until eating/drinking normally</li>
          <li>Offer water 2-4h post-op once swallow reflex normal</li>
          <li>Offer small meal 6-12h post-op (if no anti-emetic concerns)</li>
          <li>Discharge same day for healthy uncomplicated</li>
          <li>Pyometra / sick patient: hospitalize 24-48h minimum</li>
        </ul>

        <p><strong>Discharge instructions ✨:</strong></p>
        <ul>
          <li><strong>E-collar essential</strong> — until skin sutures removed (10-14 days) ✨
            <ul>
              <li>"Pet must wear cone always — even sleeping"</li>
              <li>Buster collar / inflatable / soft alternatives if intolerant</li>
            </ul>
          </li>
          <li><strong>Strict rest 10-14 days:</strong>
            <ul>
              <li>No running, jumping, stairs (controlled if needed)</li>
              <li>Leash walks only for elimination (5-10 min)</li>
              <li>Crate confinement when unsupervised</li>
              <li>No baths/swimming until sutures out</li>
            </ul>
          </li>
          <li>Check incision daily: redness, swelling, discharge, dehiscence</li>
          <li>Continue pain medications as prescribed (NSAID 5-7 d)</li>
          <li>Diet: regular within 24h if eating; smaller portions × 2-3 days</li>
          <li>Watch for: depression, anorexia, vomiting, distended abdomen, pale gums (warning signs)</li>
        </ul>

        <p><strong>Follow-up:</strong></p>
        <ul>
          <li>Suture removal: 10-14 days post-op (skin)</li>
          <li>Pyometra: recheck CBC + UA at 1-2 weeks</li>
          <li>Long-term: discuss weight management (post-spay weight gain common — ~ 30% reduction in caloric needs)</li>
        </ul>
      `,
      complications: `
        <p><strong>Intra-operative ✗:</strong></p>
        <ul>
          <li><strong>Hemorrhage from ovarian pedicle</strong> — most common serious complication ✗
            <ul>
              <li>Pedicle slipped / inadequately ligated</li>
              <li>Look for: dropping BP, ↑HR, blood in abdomen on lavage</li>
              <li>Address: extend incision, identify bleeder, re-ligate</li>
              <li>"Snowstorm" technique — pack with sponges, find dry, ligate above</li>
            </ul>
          </li>
          <li>Hemorrhage from broad ligament vessels (older, pyometra patient)</li>
          <li>Hemorrhage from uterine artery (uterine body ligation)</li>
          <li><strong>Inadvertent ureter ligation</strong> ✗ — devastating
            <ul>
              <li>Ureter close to ovarian pedicle deep in retroperitoneum</li>
              <li>Risk: too-deep clamping, blind dissection</li>
              <li>Avoid: identify ureter or stay close to ovary on pedicle</li>
              <li>Recognition: hydronephrosis post-op</li>
            </ul>
          </li>
          <li>Splenic laceration (L-side spay hook misplacement)</li>
          <li>Bladder laceration (caudal incision too close, full bladder)</li>
          <li>Uterine rupture (pyometra — friable wall)</li>
          <li>Cardiopulmonary arrest under anesthesia (rare in healthy)</li>
        </ul>

        <p><strong>Early post-op (0-7 days):</strong></p>
        <ul>
          <li><strong>Delayed hemorrhage</strong> — pedicle slipping or coagulopathy</li>
          <li>Wound dehiscence (poor closure, self-trauma without E-collar)</li>
          <li>Seroma (especially obese, large incision)</li>
          <li>Suture reaction</li>
          <li>SSI / wound infection</li>
          <li>Vomiting / aspiration risk (delayed recovery)</li>
          <li>Rebound pain (inadequate analgesia)</li>
        </ul>

        <p><strong>Late (weeks-months-years):</strong></p>
        <ul>
          <li><strong>Ovarian remnant syndrome ✨</strong>:
            <ul>
              <li>Incomplete ovarian removal → continued estrus signs</li>
              <li>Owner reports: heat behavior, vulvar swelling weeks-months later</li>
              <li>Diagnose: AMH, LH stimulation, vaginal cytology during apparent heat</li>
              <li>Tx: re-exploration, find + remove remnant (usually at original pedicle site)</li>
            </ul>
          </li>
          <li><strong>Stump pyometra ✗</strong> — if uterine stump + estrogen source remain
            <ul>
              <li>Long uterine stump + ovarian remnant → recurrent infection</li>
              <li>Mass on caudal abdomen, recurrent UTI, vaginal discharge</li>
              <li>Tx: surgical removal + remove ovarian remnant</li>
            </ul>
          </li>
          <li>Stump granuloma / suture reaction (intermittent fever, sterile)</li>
          <li><strong>Urinary incontinence (USMI) ✨</strong>:
            <ul>
              <li>~ 5-20% of spayed bitches develop estrogen-responsive incontinence</li>
              <li>Higher risk: large breeds (Boxer, Doberman, GSD), spay before 1st heat (debated), obese</li>
              <li>Tx: PPA (phenylpropanolamine 1-2 mg/kg PO q8-12h) or DES (diethylstilbestrol)</li>
              <li>Surgical: colposuspension, urethropexy if refractory</li>
            </ul>
          </li>
          <li>Adhesions (rare in routine OHE)</li>
          <li>Vaginitis (related to USMI)</li>
          <li>Ureteral obstruction from inadvertent ligation (delayed signs)</li>
          <li>Coat changes (some breeds — undercoat puffier post-spay)</li>
          <li>Weight gain (without dietary adjustment)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Routine elective OHE: excellent</strong> ✓
            <ul>
              <li>Mortality &lt; 0.05% in healthy young patients</li>
              <li>Full recovery 10-14 days</li>
              <li>Return to normal activity 2 weeks</li>
            </ul>
          </li>
          <li><strong>Pyometra OHE:</strong>
            <ul>
              <li>Closed pyometra: mortality 5-10% with prompt Tx</li>
              <li>Open pyometra (drainage): better, mortality 3-5%</li>
              <li>Septic / DIC at presentation: mortality 20-30% ✗</li>
              <li>Survivors: full recovery typically</li>
            </ul>
          </li>
          <li><strong>Long-term benefits:</strong>
            <ul>
              <li>Mammary tumor risk: 99% reduction if before 1st estrus, 92% before 2nd</li>
              <li>Eliminates pyometra risk</li>
              <li>Eliminates ovarian/uterine neoplasia</li>
              <li>Eliminates dystocia, pseudopregnancy</li>
              <li>Reduces roaming, behavioral issues related to estrus</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>USMI in 5-20% (mostly manageable with PPA)</li>
              <li>Weight gain risk → adjust caloric intake by ~ 25-30%</li>
              <li>Possible ↑ risk OSA, HSA, CCL rupture in giant breeds spayed too early (controversial)</li>
              <li>Spaying timing for giant breeds: many now recommend after physeal closure (12-18 months)</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>OHE = most common procedure in small animal practice</strong> — rapid + low mortality in healthy patients<br><br>**E-collar + strict rest 10-14 days** = essential for owner compliance ✨<br><br>⚠️ **Pyometra = surgical emergency** — stabilize first (fluids, antibiotics), then OHE. Prognosis depends on systemic status at presentation</div>
      `,
    },
  },

  /* ============================================================
     SOFT TISSUE — Abdominal
  ============================================================ */
  {
    id: 'splenectomy',
    titleEn: 'Splenectomy (Total)',
    titleTh: 'ตัดม้าม',
    type: 'surgery',
    system: 'soft-tissue',
    species: ['dog', 'cat'],
    tags: ['splenectomy', 'splenic mass', 'hemoabdomen', 'HSA', 'splenic torsion', 'GDV', 'hilar ligation', 'splenic vessels', 'arrhythmia', 'transfusion'],
    aliases: ['splenectomy', 'spleen removal', 'ตัดม้าม', 'ผ่าตัดม้าม'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Spleen',
    sections: {
      indications: `
        <ul>
          <li><strong>Splenic mass ✨</strong> — most common indication
            <ul>
              <li>Hemangiosarcoma (HSA) — ~ 50% of splenic masses (largest indication)</li>
              <li>Hematoma / nodular hyperplasia (benign — but indistinguishable from HSA on imaging)</li>
              <li>Hemangioma (benign vascular)</li>
              <li>Other neoplasia: lymphoma, leiomyosarcoma, fibrosarcoma</li>
              <li>"<strong>Two-thirds rule</strong>": 2/3 of splenic masses are malignant; 2/3 of malignant are HSA</li>
            </ul>
          </li>
          <li><strong>Hemoabdomen from splenic rupture ✗</strong> — emergency
            <ul>
              <li>Spontaneous rupture of splenic mass (HSA most common)</li>
              <li>Trauma (rare; usually capsular tear, not requiring splenectomy)</li>
            </ul>
          </li>
          <li><strong>Splenic torsion ✗</strong>:
            <ul>
              <li>Isolated (usually large/deep-chested breeds: GSD, Great Dane)</li>
              <li>Concurrent with GDV (always splenectomize during GDV correction)</li>
              <li>Spleen typically necrotic, congested, dark</li>
            </ul>
          </li>
          <li>Severe immune-mediated thrombocytopenia (ITP) refractory to medical Tx — rare salvage</li>
          <li>Mast cell tumor (cat splenic — highly successful Tx, MST 1-2+ yr ✓)</li>
          <li>Severe abscessation (rare)</li>
          <li>Splenic rupture from coagulopathy after stabilization</li>
          <li>Diagnostic for histopath when imaging inconclusive (mass requires definitive diagnosis)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Coagulopathy not yet addressed (FFP, vitamin K, platelet support first)</li>
          <li>Severe hypovolemia uncorrected — stabilize first
            <ul>
              <li>Don't delay surgery extensively in active hemoabdomen — concurrent fluid resuscitation + surgery often necessary</li>
            </ul>
          </li>
          <li>Untreatable underlying disease where survival benefit unlikely</li>
          <li>Concurrent severe metastatic disease (palliation considerations)</li>
          <li>Severe DIC without FFP support</li>
          <li>Patients where splenic preservation possible (partial splenectomy in localized disease — debated)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup:</strong></p>
        <ul>
          <li>Emergency cases (hemoabdomen): rapid stabilization while preparing OR
            <ul>
              <li>FAST scan confirms abdominal effusion</li>
              <li>Abdominocentesis: hemorrhagic fluid, doesn't clot, PCV similar to peripheral</li>
              <li>Begin fluid resuscitation immediately</li>
            </ul>
          </li>
          <li>CBC: regenerative anemia (or pre-regenerative if very acute), schistocytes, thrombocytopenia (DIC)</li>
          <li>Biochem: hypoalbuminemia, mild ↑ liver enzymes</li>
          <li>Coag panel ✨: PT, aPTT, fibrinogen, D-dimers (DIC frequent in HSA)</li>
          <li>Type + cross-match (transfusion likely)</li>
          <li>Lactate (hypoperfusion marker)</li>
          <li>BG (small breed, hypoglycemia risk)</li>
        </ul>

        <p><strong>2. Imaging:</strong></p>
        <ul>
          <li>Abdominal US: splenic mass, free fluid, hepatic mets evaluation</li>
          <li>Thoracic radiograph (3-view) ✨: pulmonary mets check pre-op
            <ul>
              <li>~ 30-50% of HSA have pulmonary mets at diagnosis</li>
              <li>Important prognostic info before owner commits to surgery</li>
            </ul>
          </li>
          <li>Echocardiogram if any suspicion of cardiac HSA (right atrial mass — separate primary)</li>
          <li>CT for staging if non-emergency / specialty</li>
        </ul>

        <p><strong>3. Stabilization (emergency):</strong></p>
        <ul>
          <li>IV fluid resuscitation: LRS 20 mL/kg bolus, repeat as needed</li>
          <li>Blood products:
            <ul>
              <li>Whole blood or pRBC if PCV &lt; 20% or ongoing hemorrhage</li>
              <li>FFP if coagulopathy / hypoalbuminemia</li>
              <li>Type before transfusion (cat ALWAYS; dog first transfusion safer but cross-match for IMHA)</li>
            </ul>
          </li>
          <li>Yunnan Baiyao 1 cap/10 kg PO q12h (anti-bleeding herbal; mixed evidence; some clinicians use)</li>
          <li>Light abdominal pressure wrap (don't compress chest excursion)</li>
          <li>Pain management: hydromorphone 0.05-0.1 mg/kg IV or methadone 0.1-0.2 mg/kg IV</li>
        </ul>

        <p><strong>4. Patient prep:</strong></p>
        <ul>
          <li>NPO: emergency may not allow long fasting; aspiration precautions</li>
          <li>Wide ventral abdominal clip + prep (xiphoid → pubis, flank to flank)</li>
          <li>Have suction available</li>
          <li>Have additional fluids, blood products in OR</li>
          <li>Have hemostatic agents available (e.g., gelatin sponge, oxidized cellulose)</li>
        </ul>

        <p><strong>5. Anesthesia plan:</strong></p>
        <ul>
          <li><strong>Premed (cautious):</strong>
            <ul>
              <li>Methadone 0.1-0.2 mg/kg IV (avoid acepromazine — vasodilation in hypovolemic)</li>
              <li>Or fentanyl 2-5 mcg/kg IV</li>
              <li>Avoid alpha-2 agonists in unstable patient (bradycardia, vasoconstriction masks shock)</li>
            </ul>
          </li>
          <li><strong>Induction (low-dose, titrated):</strong>
            <ul>
              <li>Propofol 2-4 mg/kg IV slow (lower than usual — hypovolemia)</li>
              <li>Or etomidate 1-2 mg/kg IV (cardiovascular sparing — preferred in unstable)</li>
              <li>Or ketamine 5 mg/kg + diazepam 0.25 mg/kg IV (CV stable)</li>
            </ul>
          </li>
          <li><strong>Maintenance:</strong> isoflurane (lower MAC than usual; titrate to BP)</li>
          <li><strong>Fluid plan:</strong> aggressive — LRS 10-20 mL/kg/h until BP stabilized, then maintenance</li>
          <li>Have blood products warmed and ready in OR</li>
          <li><strong>Monitor:</strong> ECG ✨ (arrhythmia risk during/after splenectomy — see complications), SpO2, BP (direct preferred), EtCO2, temp</li>
          <li>Anti-arrhythmics ready (lidocaine 2 mg/kg IV bolus)</li>
        </ul>
      `,
      technique: `
        <p><strong>Step-by-step technique ✨:</strong></p>

        <p><strong>1. Approach:</strong></p>
        <ul>
          <li>Ventral midline laparotomy</li>
          <li>Incision: xiphoid to pubis (full exploratory length needed)</li>
          <li>Stab incision through linea + extend with Mayo scissors</li>
          <li>Note: can place self-retaining retractor (Balfour) for exposure</li>
        </ul>

        <p><strong>2. Initial exploration:</strong></p>
        <ul>
          <li>Locate spleen (left cranial abdomen, deep to greater omentum)</li>
          <li>Assess for: rupture, mass location, hemoabdomen extent</li>
          <li>Suction free blood; estimate volume (most cases 200-2000+ mL)</li>
          <li>Quick exploration: liver, mesentery, peritoneum for mets/hemorrhage source</li>
          <li>Carefully exteriorize spleen (handle gently — friable mass may rupture further)</li>
          <li>Pack abdomen with moistened laparotomy pads for exposure</li>
        </ul>

        <p><strong>3. Hilar ligation ✨ — main vessels:</strong></p>
        <ul>
          <li><strong>Anatomy:</strong>
            <ul>
              <li>Splenic artery + vein course along splenic hilus</li>
              <li>Branches to spleen (multiple) + branches to stomach (short gastric vessels)</li>
              <li>Splenic vessels arise from celiac axis</li>
            </ul>
          </li>
          <li><strong>Technique options:</strong>
            <ul>
              <li><strong>Individual hilar vessel ligation:</strong>
                <ul>
                  <li>Identify each splenic vessel branching to spleen</li>
                  <li>Window between branches in mesosplenic ligament</li>
                  <li>Triple-clamp + double ligation each vessel (2-0 or 0 PDS)</li>
                  <li>Cut between distal clamps</li>
                  <li>Preserve short gastric vessels (gastric blood supply)</li>
                  <li>Methodical, slower but definitive</li>
                </ul>
              </li>
              <li><strong>En masse hilar ligation:</strong>
                <ul>
                  <li>Faster — appropriate for emergency or large spleen</li>
                  <li>Place several large hemostats across mesosplenic vessels en bloc</li>
                  <li>Multiple encircling ligatures distal to clamps</li>
                  <li>Cut spleen free</li>
                  <li>Less control of individual vessels — slight ↑ bleeding risk</li>
                </ul>
              </li>
              <li><strong>Vessel-sealing devices (preferred when available) ✨:</strong>
                <ul>
                  <li>LigaSure, Enseal, Harmonic scalpel</li>
                  <li>Seal vessels up to 7 mm (depending on device)</li>
                  <li>Significantly faster + less bleeding</li>
                  <li>Cost-effective for high-volume soft tissue surgery</li>
                </ul>
              </li>
              <li><strong>Stapling devices:</strong>
                <ul>
                  <li>TA stapler with 3.5 mm vascular cartridge across hilus</li>
                  <li>Fast; useful in massive spleen / unstable patient</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Important: <strong>preserve short gastric vessels</strong> ✨ (greater curvature of stomach blood supply)
            <ul>
              <li>Risk of gastric necrosis if all gastric branches ligated</li>
              <li>Stay close to splenic capsule for ligation</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Splenic removal:</strong></p>
        <ul>
          <li>Once all hilar vessels ligated → spleen separates</li>
          <li>Submit entire spleen + ALL nodules separately for histopath</li>
          <li>Open spleen on back table — examine cut surface (may help diagnose)</li>
          <li>Document size, mass location, color (pre-fixation photo helpful)</li>
        </ul>

        <p><strong>5. Inspection + lavage:</strong></p>
        <ul>
          <li>Verify hemostasis at each pedicle stump</li>
          <li>Inspect: liver lobes (HSA mets common!), mesentery, peritoneum, pancreas (greater curvature of stomach)</li>
          <li>Biopsy any suspicious lesions (liver if abnormal — HSA mets confirmation)</li>
          <li>Lavage abdomen with warm saline 100-200 mL/kg until effluent clear</li>
          <li>Suction out lavage fluid completely</li>
          <li>Sponge count!</li>
        </ul>

        <p><strong>6. Closure:</strong></p>
        <ul>
          <li>Linea alba: 0 or 2-0 PDS simple continuous (faster) or interrupted</li>
          <li>SC: 3-0 PDS continuous</li>
          <li>Skin: 3-0 nylon interrupted or staples</li>
          <li>Apply antiseptic spray</li>
        </ul>
      `,
      drugs: `
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Splenectomy = clean surgery — prophylactic antibiotic typically not required</li>
          <li>If contamination, abscessation, or torsion with necrosis:
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction + q90 min during surgery</li>
              <li>Continue post-op cefazolin or amoxicillin-clavulanate × 7-10 days</li>
            </ul>
          </li>
          <li>Splenectomy patients: long-term ↑ risk of severe bacterial sepsis (overwhelming post-splenectomy infection — OPSI)
            <ul>
              <li>Counsel owner on prompt veterinary attention for any febrile illness</li>
              <li>No vaccination protocol typically (unlike humans)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Analgesia (multimodal) ✨:</strong></p>
        <ul>
          <li><strong>Pre-op (premed):</strong>
            <ul>
              <li>Methadone 0.1-0.2 mg/kg IV (or 0.2-0.3 mg/kg IM)</li>
              <li>Or hydromorphone 0.05-0.1 mg/kg IV</li>
              <li>Or fentanyl 2-5 mcg/kg IV bolus</li>
            </ul>
          </li>
          <li><strong>Intra-op:</strong>
            <ul>
              <li>Pre-incisional bupivacaine 1.5 mg/kg + lidocaine 4 mg/kg local block</li>
              <li>Fentanyl CRI 2-5 mcg/kg/h (cat: 1-3 mcg/kg/h)</li>
              <li>Or ketamine CRI 0.6 mg/kg/h after 0.5 mg/kg loading bolus</li>
              <li>Or lidocaine CRI 25-50 mcg/kg/min (dog only — cat sensitive ✗)</li>
              <li>± Intraperitoneal lavage with bupivacaine 1-2 mg/kg in saline (anesthesia field block)</li>
            </ul>
          </li>
          <li><strong>NSAID at recovery (only if normotensive + normohydrated + no AKI):</strong>
            <ul>
              <li>Carprofen 4.4 mg/kg SC (dog)</li>
              <li>Or meloxicam 0.2 mg/kg SC initial, then PO daily × 5-7 d</li>
              <li>Caution if any concurrent renal compromise from shock</li>
            </ul>
          </li>
          <li><strong>Continued post-op:</strong>
            <ul>
              <li>NSAID × 5-7 d</li>
              <li>± Tramadol 2-5 mg/kg PO q8-12h</li>
              <li>± Gabapentin 10 mg/kg PO q8h × 5-7 d</li>
              <li>Buprenorphine 0.01-0.02 mg/kg buccal q8h × 24-48h post-op (cat especially)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Anti-arrhythmic (ECG-guided):</strong></p>
        <ul>
          <li>Ventricular arrhythmias common during/after splenectomy ✨</li>
          <li>Treat if: VPCs &gt; 20/min, R-on-T, sustained V-tach, hemodynamic compromise</li>
          <li><strong>Lidocaine ✨</strong>:
            <ul>
              <li>Dog: 2 mg/kg slow IV bolus → CRI 25-75 mcg/kg/min</li>
              <li>Cat: avoid (toxic) ✗ — use procainamide if needed</li>
            </ul>
          </li>
          <li>Procainamide 6-10 mg/kg IV slow then 25-40 mcg/kg/min CRI (refractory)</li>
          <li>Continue 24-72h post-op or until arrhythmia resolves</li>
        </ul>

        <p><strong>Anti-emetic:</strong></p>
        <ul>
          <li>Maropitant 1 mg/kg SC at premed (visceral pain modulation + anti-nausea)</li>
        </ul>

        <p><strong>Blood products:</strong></p>
        <ul>
          <li>Have blood products ready: pRBC 10-15 mL/kg if HCT &lt; 20% or active hemorrhage</li>
          <li>FFP 10-15 mL/kg for coagulopathy</li>
          <li>Whole blood 20 mL/kg for combined needs (anemia + coag)</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h):</strong></p>
        <ul>
          <li>ICU monitoring 24-48h ✨:
            <ul>
              <li>Continuous ECG (arrhythmia surveillance — peak risk 12-24h post)</li>
              <li>BP q1-2h</li>
              <li>HR, RR, MM, CRT, mentation q1-2h</li>
              <li>Temperature q4h</li>
              <li>SpO2 monitoring</li>
            </ul>
          </li>
          <li>HCT/TS check at 4, 12, 24h post-op (re-bleeding surveillance)</li>
          <li>Lactate trend (perfusion improvement)</li>
          <li>I/O monitoring (urine output goal &gt; 1-2 mL/kg/h)</li>
          <li>Continue IV fluids — taper as eating/drinking</li>
          <li>Continue analgesia (CRI initially → transition to oral)</li>
        </ul>

        <p><strong>Activity + return to function:</strong></p>
        <ul>
          <li>Return to drinking 2-6h, eating 12-24h post-op (offer small meal)</li>
          <li>Brief leash walks for elimination 12-24h post-op</li>
          <li>Strict rest 10-14 days</li>
          <li>Discharge: 24-72h depending on stability</li>
        </ul>

        <p><strong>Discharge instructions:</strong></p>
        <ul>
          <li>E-collar until skin sutures out (10-14 days)</li>
          <li>Strict rest 10-14 days (no running, jumping, stairs, swimming)</li>
          <li>Daily incision check</li>
          <li>NSAID × 5-7 days</li>
          <li>Watch for: lethargy, pale gums, weakness, distended abdomen (re-bleeding warning), dyspnea, vomiting</li>
          <li>Report immediately if any of above</li>
        </ul>

        <p><strong>Follow-up ✨:</strong></p>
        <ul>
          <li>Recheck 7-10 days for incision + suture removal at 14 days</li>
          <li>HCT recheck at 1-2 weeks</li>
          <li><strong>Histopathology results review essential</strong> ✨ — guides next steps:
            <ul>
              <li>Hematoma / nodular hyperplasia: cure ✓</li>
              <li>Hemangioma: cure ✓</li>
              <li>HSA: discuss adjuvant chemotherapy (doxorubicin) ASAP</li>
              <li>Other neoplasia: tumor-specific Tx</li>
            </ul>
          </li>
          <li>If HSA: thoracic radiograph q3 months for mets surveillance</li>
          <li>Lifelong: monitor for sepsis if febrile illness (OPSI risk)</li>
        </ul>
      `,
      complications: `
        <p><strong>Intra-operative ✗:</strong></p>
        <ul>
          <li>Hemorrhage from hilar pedicle — most common ✗
            <ul>
              <li>Address: pack with sponges, identify, re-ligate</li>
              <li>Vessel-sealing devices reduce risk</li>
            </ul>
          </li>
          <li>Splenic mass rupture during manipulation (HSA) — increases bleeding</li>
          <li><strong>Ventricular arrhythmias ✗</strong>:
            <ul>
              <li>VPCs, V-tach common during splenic manipulation</li>
              <li>Mechanism: catecholamine release, hypoxia, electrolyte shifts, mechanical irritation</li>
              <li>Lidocaine if hemodynamic compromise (dog only)</li>
            </ul>
          </li>
          <li>Inadvertent ligation of short gastric vessels → gastric necrosis ✗</li>
          <li>Pancreatic injury (close anatomic proximity)</li>
          <li>Hypotension (hypovolemia, anesthetic, blood loss)</li>
          <li>Hypothermia (long surgery, large abdominal exposure)</li>
        </ul>

        <p><strong>Early post-op (0-7 days):</strong></p>
        <ul>
          <li><strong>Re-bleeding from pedicle ✗</strong>:
            <ul>
              <li>HCT drop, pale gums, weakness, distended abdomen</li>
              <li>FAST scan + abdominocentesis confirms</li>
              <li>May need re-exploration</li>
            </ul>
          </li>
          <li>Persistent ventricular arrhythmias (often 24-72h post-op)</li>
          <li>Wound dehiscence / SSI</li>
          <li>Aspiration pneumonia (severe vomiting recovery)</li>
          <li>Pancreatitis (manipulation of greater curvature)</li>
          <li>Gastric necrosis (rare; from over-aggressive vessel ligation)</li>
          <li>Acute kidney injury (hypoperfusion from shock)</li>
          <li>DIC progression</li>
          <li>Sepsis (rare; contaminated case)</li>
        </ul>

        <p><strong>Late (weeks-months):</strong></p>
        <ul>
          <li><strong>Tumor recurrence / metastasis ✗</strong> — main long-term concern (HSA)
            <ul>
              <li>Pulmonary mets most common (~ 50-90% of HSA at diagnosis or develops within 6 mo)</li>
              <li>Hepatic mets, mesenteric, CNS</li>
              <li>Re-presentation with new hemoabdomen, dyspnea, neurologic signs</li>
            </ul>
          </li>
          <li>OPSI (overwhelming post-splenectomy infection) — uncommon in dog/cat (vs humans), but possible
            <ul>
              <li>Severe bacterial sepsis from encapsulated organisms</li>
              <li>Counsel owner on prompt vet attention for febrile illness</li>
            </ul>
          </li>
          <li>Persistent thrombocytopenia (BM disease, IMHA)</li>
          <li>Concurrent disease progression (HSA-related)</li>
          <li>Adhesions (uncommon)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Benign mass (hematoma, hemangioma, NRH):</strong>
            <ul>
              <li>Excellent prognosis — surgical cure ✓</li>
              <li>Long-term survival = unaffected dog</li>
              <li>~ 40% of splenic masses turn out benign</li>
            </ul>
          </li>
          <li><strong>HSA (~ 50% of splenic masses) ✗:</strong>
            <ul>
              <li>Surgery alone: MST 1-3 months ✗</li>
              <li>Surgery + doxorubicin chemotherapy: MST 5-9 months</li>
              <li>1-year survival ~ 10%, 2-year &lt; 5%</li>
              <li>Most aggressive cancer in dog</li>
            </ul>
          </li>
          <li><strong>Splenic torsion (isolated):</strong>
            <ul>
              <li>Excellent if recognized + treated promptly: &gt; 90% survival</li>
              <li>Concurrent GDV: more guarded</li>
            </ul>
          </li>
          <li><strong>Splenic MCT (cat):</strong>
            <ul>
              <li>Surprisingly good — MST 1-2+ years ✓</li>
            </ul>
          </li>
          <li><strong>Lymphoma:</strong>
            <ul>
              <li>Splenectomy alone insufficient — needs chemotherapy</li>
              <li>Outcomes per chemo response (CHOP, etc.)</li>
            </ul>
          </li>
          <li><strong>Surgical mortality:</strong>
            <ul>
              <li>Stable patient: &lt; 5%</li>
              <li>Acute hemoabdomen: 5-15%</li>
              <li>Severe shock + DIC: 20-30%</li>
            </ul>
          </li>
          <li><strong>Negative prognostic factors:</strong>
            <ul>
              <li>Hemoabdomen at presentation</li>
              <li>HSA histology + concurrent mets</li>
              <li>DIC, severe coagulopathy</li>
              <li>Concurrent severe illness</li>
              <li>Older patient with comorbidities</li>
              <li>Right atrial mass (cardiac HSA — different primary)</li>
            </ul>
          </li>
        </ul>
        <div class="callout">⚠️ <strong>Acute hemoabdomen + older large breed = HSA emergency</strong> ✗ — splenectomy + histopath; doxo adjuvant<br><br>💡 **Vessel-sealing device** (LigaSure) makes surgery faster + safer ✨<br><br>**ECG monitoring 24-72h post-op** essential — ventricular arrhythmias common. **Histopath = critical** for prognosis + adjuvant Tx planning</div>
      `,
    },
  },

  /* ============================================================
     UROGENITAL — Urinary
  ============================================================ */
  {
    id: 'cystotomy',
    titleEn: 'Cystotomy (Bladder Surgery)',
    titleTh: 'ผ่าตัดกระเพาะปัสสาวะ',
    type: 'surgery',
    system: 'urogenital',
    species: ['dog', 'cat'],
    tags: ['cystotomy', 'urolith removal', 'bladder stones', 'cystic calculi', 'struvite', 'oxalate', 'urate', 'bladder mass', 'TCC', 'biopsy', 'urethral catheter'],
    aliases: ['cystotomy', 'bladder surgery', 'urolith removal', 'ผ่าตัดเอานิ่ว', 'นิ่วกระเพาะ'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Bladder',
    sections: {
      indications: `
        <ul>
          <li><strong>Urolith removal ✨</strong> — most common indication
            <ul>
              <li>Cystic calculi causing clinical signs (hematuria, dysuria, pollakiuria)</li>
              <li>Stones not amenable to medical dissolution</li>
              <li>Urethral obstruction relief (combined with retropulsion to bladder)</li>
              <li>Common stone types:
                <ul>
                  <li>Struvite (Mg-NH4-PO4): often female dog, infection-related</li>
                  <li>Calcium oxalate: male dog, breed predisposed (Bichon, Schnauzer, Shih Tzu)</li>
                  <li>Urate: Dalmatian, English Bulldog (UAT defect), portosystemic shunt</li>
                  <li>Cystine: rare; metabolic disorder</li>
                  <li>Silica: large dogs on dry foods</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Bladder mass / neoplasia diagnosis or removal:</strong>
            <ul>
              <li>TCC biopsy (avoid catheter / cysto FNA — seeding risk ✗)</li>
              <li>Polypoid cystitis</li>
              <li>Bladder leiomyoma / fibroma (rare)</li>
              <li>Apical / dome tumors potentially resectable (partial cystectomy)</li>
            </ul>
          </li>
          <li>Foreign body in bladder (rare)</li>
          <li>Severe traumatic bladder rupture repair</li>
          <li>Ectopic ureter repair (specialty)</li>
          <li>Patent urachus / urachal diverticulum</li>
          <li>Refractory severe hematuria of unclear cause (diagnostic)</li>
          <li>Cystoscopic procedures unavailable / contraindicated</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Coagulopathy uncorrected</li>
          <li>Severe metabolic derangement (hyperK, severe uremia from obstruction) — stabilize first
            <ul>
              <li>Decompress bladder via cystocentesis or urethral catheter first</li>
              <li>Address hyperkalemia (Ca gluconate, fluid diuresis)</li>
              <li>Surgery once K &lt; 6.5, hemodynamically stable</li>
            </ul>
          </li>
          <li>Sepsis from severe pyelonephritis untreated</li>
          <li>Untreatable underlying disease</li>
          <li>TCC with extensive trigone involvement (not surgically resectable; medical Tx + stent)</li>
          <li>Suspected TCC where seeding risk during surgery outweighs benefit (case-by-case)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup:</strong></p>
        <ul>
          <li>Urinalysis + urine culture ✨ (essential)
            <ul>
              <li>Crystalluria (suggests stone composition)</li>
              <li>Bacteriuria (drives antibiotic choice)</li>
              <li>pH (struvite alkaline, oxalate neutral-acidic)</li>
              <li>Hematuria, pyuria</li>
            </ul>
          </li>
          <li>CBC + biochem (renal function, electrolytes)</li>
          <li>Imaging:
            <ul>
              <li>Abdominal radiograph: identify radiopaque stones (struvite, oxalate, cystine, silica)</li>
              <li>Abdominal ultrasound ✨: identify all stones (radiolucent like urate too), bladder wall, masses, urethral involvement</li>
              <li>Contrast cystography or pneumocystogram if mass suspected</li>
            </ul>
          </li>
          <li>If TCC suspected: BRAF urine PCR (CADET BRAF), abdominal US, thoracic radiograph</li>
          <li>If urethral obstruction: address first (catheterization, retropulsion)</li>
          <li>Coag panel if bleeding tendency</li>
        </ul>

        <p><strong>2. Patient prep:</strong></p>
        <ul>
          <li>Pre-emptive urinary catheterization (if obstructed)</li>
          <li>Empty bladder pre-op (manual expression cautiously, or catheter)</li>
          <li>NPO 8-12h (less if pediatric or systemically ill)</li>
          <li>IV catheter, fluid plan (LRS or balanced; if hyperK present, use 0.9% NaCl initially)</li>
          <li>Antibiotic prophylaxis based on culture or empirical choice</li>
        </ul>

        <p><strong>3. Anesthesia plan:</strong></p>
        <ul>
          <li><strong>Premed:</strong>
            <ul>
              <li>Methadone 0.2-0.3 mg/kg + dexmed 5 mcg/kg IM (if stable)</li>
              <li>Avoid alpha-2 if compromised</li>
              <li>Methadone alone if cardiac concerns</li>
            </ul>
          </li>
          <li><strong>Induction:</strong>
            <ul>
              <li>Propofol 4-6 mg/kg IV titrated</li>
              <li>Or alfaxalone 1-2 mg/kg IV</li>
              <li>Etomidate 1-2 mg/kg IV if cardiovascularly compromised</li>
            </ul>
          </li>
          <li><strong>Maintenance:</strong> isoflurane / sevoflurane in O2</li>
          <li><strong>IV fluids:</strong> LRS 5-10 mL/kg/h; cautious if cardiac/renal compromise</li>
          <li><strong>Local block:</strong> epidural morphine 0.1 mg/kg + bupivacaine 0.1 mL/kg if hindlimb / urogenital surgery (specialty)</li>
          <li>Monitoring: standard (SpO2, BP, ECG, EtCO2, temp)</li>
        </ul>

        <p><strong>4. Surgical site prep:</strong></p>
        <ul>
          <li>Position: dorsal recumbency</li>
          <li>Clip ventral abdomen: cranial to umbilicus → pubis</li>
          <li>Aseptic prep with chlorhexidine</li>
          <li>Drape: 4 corner + fenestrated (ventral abdomen)</li>
          <li>Pre-place soft urinary catheter if not already (used during retrograde flush)
            <ul>
              <li>Tomcat catheter (cat male)</li>
              <li>Foley 5-12 Fr (most patients)</li>
              <li>Sterile, lubricated</li>
              <li>Connect to closed collection system</li>
            </ul>
          </li>
        </ul>
      `,
      technique: `
        <p><strong>Step-by-step technique ✨:</strong></p>

        <p><strong>1. Approach:</strong></p>
        <ul>
          <li>Caudal ventral midline incision (caudal half of abdomen)</li>
          <li>From umbilicus → pubis (length per patient size)</li>
          <li>Stab linea alba + extend with Mayo scissors</li>
          <li>Note: in male dog, prepuce + preputial muscles must be reflected laterally — paramedian skin incision around prepuce or curvilinear incision</li>
        </ul>

        <p><strong>2. Bladder exposure:</strong></p>
        <ul>
          <li>Identify bladder (pyriform, caudal abdomen, dorsal to ventral abdominal wall)</li>
          <li>Place stay sutures (3-0 PDS) at apex bilaterally for handling — preserves dorsal/ventral orientation
            <ul>
              <li>Avoid grasping bladder with thumb forceps directly (trauma)</li>
            </ul>
          </li>
          <li>Pack abdomen with moistened laparotomy pads to isolate bladder + prevent urine spillage</li>
          <li>Empty bladder via cystocentesis if distended (22g needle, syringe)</li>
        </ul>

        <p><strong>3. Cystotomy incision ✨:</strong></p>
        <ul>
          <li><strong>Location: ventral midline of bladder</strong>, in apex (away from trigone)
            <ul>
              <li>Avoid trigone (ureteral openings, urethra)</li>
              <li>Avoid major blood vessels at neck</li>
              <li>Apex relatively avascular</li>
            </ul>
          </li>
          <li>Stab incision with #11 or #15 blade (avoid bladder lumen/contents trauma)</li>
          <li>Extend with Metzenbaum scissors to required length
            <ul>
              <li>Just long enough to retrieve all stones / complete procedure</li>
              <li>Smaller incision = faster healing, less leakage</li>
            </ul>
          </li>
        </ul>

        <p><strong>4. Urolith removal ✨:</strong></p>
        <ul>
          <li>Manually retrieve visible stones with thumb forceps or spoon</li>
          <li>Submit stones for quantitative analysis ✨ (Minnesota Urolith Center, others)
            <ul>
              <li>Drives long-term prevention (diet, supplementation)</li>
            </ul>
          </li>
          <li><strong>Retrograde flushing ✨</strong> — critical for complete clearance:
            <ul>
              <li>Have assistant flush sterile saline through urethral catheter retrograde</li>
              <li>Flushes stones from urethra back into bladder</li>
              <li>Especially important for male dogs (penile urethra trapping)</li>
              <li>Repeat until no more stones flushed</li>
            </ul>
          </li>
          <li><strong>Antegrade flushing</strong>:
            <ul>
              <li>Pass urinary catheter from bladder forward into urethra</li>
              <li>Flush sterile saline forward</li>
              <li>Confirms urethral patency</li>
            </ul>
          </li>
          <li>Inspect bladder lumen thoroughly — palpate for residual stones</li>
          <li>Examine bladder mucosa for masses, ulcers</li>
          <li>Take biopsy of any abnormal areas (~ 1 cm sample, full thickness)</li>
        </ul>

        <p><strong>5. Post-removal radiograph (intraoperative):</strong></p>
        <ul>
          <li>If portable radiograph available — confirm complete stone removal before closure ✨</li>
          <li>Significantly reduces residual stone rates (which cause persistent signs)</li>
          <li>Or post-op radiograph in recovery</li>
        </ul>

        <p><strong>6. Bladder closure:</strong></p>
        <ul>
          <li><strong>Single-layer or 2-layer closure</strong>:
            <ul>
              <li>Most cases: single-layer simple continuous appositional, full-thickness or partial-thickness</li>
              <li>2-layer (mucosa + seromuscular) for compromised bladder (severe cystitis, neoplasia, tension)</li>
            </ul>
          </li>
          <li>Suture: 3-0 or 4-0 PDS / Maxon (monofilament absorbable, prevents stone nidus)
            <ul>
              <li>NEVER use multifilament absorbable in urinary tract (silk, vicryl) — promotes stone formation</li>
              <li>NEVER use non-absorbable in bladder lumen</li>
            </ul>
          </li>
          <li>Pattern options:
            <ul>
              <li>Simple continuous appositional (most common)</li>
              <li>Cushing pattern (inverting)</li>
              <li>Modified Connell pattern (inverting)</li>
              <li>Halsted (interrupted partial-thickness)</li>
            </ul>
          </li>
          <li>Bites: include muscularis + submucosa (holding layer); avoid penetrating mucosa with knot exposure</li>
          <li>Test bladder integrity: fill with sterile saline via catheter, observe for leaks
            <ul>
              <li>Place reinforcing sutures at any leak sites</li>
            </ul>
          </li>
        </ul>

        <p><strong>7. Lavage + closure:</strong></p>
        <ul>
          <li>Lavage abdomen if any urine spillage (warm saline)</li>
          <li>Sponge count!</li>
          <li>Linea alba: 0 / 2-0 PDS simple continuous or interrupted</li>
          <li>SC: 3-0 PDS continuous</li>
          <li>Skin: 3-0 nylon interrupted or staples</li>
        </ul>

        <p><strong>8. Foley catheter consideration:</strong></p>
        <ul>
          <li><strong>Indications for indwelling Foley post-op:</strong>
            <ul>
              <li>Compromised bladder repair</li>
              <li>Risk of urinary obstruction</li>
              <li>Severe cystitis</li>
              <li>Uncontrolled hemorrhage from bladder</li>
              <li>Need for accurate urine output measurement</li>
            </ul>
          </li>
          <li>Maintain 24-72h with closed collection system</li>
          <li>Increased UTI risk with prolonged catheterization → balance benefit vs risk</li>
        </ul>
      `,
      drugs: `
        <p><strong>Antibiotics ✨:</strong></p>
        <ul>
          <li>Cystotomy = clean-contaminated to contaminated surgery</li>
          <li><strong>Pre-op based on culture:</strong>
            <ul>
              <li>If urine culture positive: appropriate antibiotic per susceptibility</li>
              <li>If pending / negative: empirical broad-spectrum</li>
            </ul>
          </li>
          <li><strong>Empirical choices:</strong>
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction → q90 min during surgery</li>
              <li>Or ampicillin-sulbactam 30 mg/kg IV at induction</li>
              <li>Continue post-op:
                <ul>
                  <li>Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 7-14 days</li>
                  <li>Or based on culture</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Recheck UC at 1 week post-op + 1 month post-op (resolution confirmation)</li>
          <li>If complicated UTI or pyelonephritis: longer course (4-6 weeks) per guidelines</li>
        </ul>

        <p><strong>Analgesia (multimodal) ✨:</strong></p>
        <ul>
          <li><strong>Pre-op (premed):</strong>
            <ul>
              <li>Methadone 0.2-0.3 mg/kg IM (dog); 0.1-0.2 mg/kg (cat)</li>
              <li>Or hydromorphone</li>
              <li>± Maropitant 1 mg/kg SC (visceral pain)</li>
            </ul>
          </li>
          <li><strong>Intra-op:</strong>
            <ul>
              <li>Pre-incisional bupivacaine 1.5 mg/kg + lidocaine 4 mg/kg local block</li>
              <li>Epidural morphine 0.1 mg/kg + bupivacaine 0.5% 0.1 mL/kg (excellent for caudal procedures, lasts 12-24h)</li>
              <li>Fentanyl CRI 2-5 mcg/kg/h (dog), 1-3 (cat) for prolonged cases</li>
            </ul>
          </li>
          <li><strong>NSAID:</strong>
            <ul>
              <li>Carprofen 4.4 mg/kg SC (dog) at recovery</li>
              <li>Meloxicam 0.2 mg/kg SC (dog), 0.05-0.1 mg/kg (cat single dose)</li>
              <li>CAUTIOUS if any renal compromise (urolith → AKI possible)</li>
              <li>Continue PO × 5-7 days (dog), 3 days (cat)</li>
            </ul>
          </li>
          <li><strong>Continued post-op:</strong>
            <ul>
              <li>NSAID × 5-7 d (dog) or 3 d (cat)</li>
              <li>Tramadol 2-5 mg/kg PO q8-12h (dog) or 1-2 mg/kg q12h (cat)</li>
              <li>Buprenorphine 0.01-0.02 mg/kg buccal q8-12h (especially cat)</li>
              <li>Gabapentin 10 mg/kg PO q8-12h × 5-7 d (visceral pain adjunct)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Diet (long-term, stone-specific):</strong></p>
        <ul>
          <li><strong>Struvite:</strong> Hill's c/d, Royal Canin Urinary SO; stones often dissolve medically</li>
          <li><strong>Calcium oxalate:</strong> Hill's u/d, Royal Canin Urinary SO + potassium citrate</li>
          <li><strong>Urate:</strong> Hill's u/d (low purine, alkalinizing); allopurinol 10-20 mg/kg PO q12h</li>
          <li><strong>Cystine:</strong> alkalinizing diet + tiopronin or 2-MPG</li>
          <li>Encourage water intake (canned food, pet fountain, multiple water sources)</li>
          <li>Recheck UA + urolith ultrasound q3-6 mo lifelong (high recurrence rates) ✨</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h):</strong></p>
        <ul>
          <li>Recovery in warm quiet area</li>
          <li>Monitor TPR, mentation q1-2h initially</li>
          <li>Continue IV fluids until eating/drinking + urinating freely</li>
          <li>Confirm urination within 8-12h post-op (or palpate bladder, US confirm)
            <ul>
              <li>If unable to urinate: catheterize + investigate (obstruction, urethral spasm, AKI)</li>
            </ul>
          </li>
          <li>Hematuria for 1-3 days post-op normal — should clear</li>
          <li>Persistent severe hematuria → re-evaluate (bladder hemorrhage, missed stone)</li>
        </ul>

        <p><strong>Discharge instructions:</strong></p>
        <ul>
          <li>E-collar until skin sutures removed (10-14 days)</li>
          <li>Strict rest 10-14 days (no jumping, running, swimming)</li>
          <li>Daily incision check</li>
          <li>Continue antibiotics as prescribed (full course)</li>
          <li>Continue NSAID + analgesia</li>
          <li>Increased water intake — wet food, fountains, multiple bowls</li>
          <li>Watch for: dysuria, stranguria, anuria (re-obstruction), excessive hematuria, lethargy, vomiting</li>
          <li>Frequent walks (encourage urination)</li>
        </ul>

        <p><strong>Follow-up ✨:</strong></p>
        <ul>
          <li>Recheck 7-10 days for incision + suture removal at 14 days</li>
          <li>UA + urine culture at 7-10 days post-op (UTI clearance)</li>
          <li>Urine culture at 4 weeks (definitive cure)</li>
          <li>Urolith analysis result review essential ✨ — drives prevention plan</li>
          <li>Diet implementation per stone type</li>
          <li>Recheck abdominal radiograph or US at 3 mo + then q3-6 mo lifelong</li>
          <li>Long-term: monitor for recurrence (~ 50% recur in 1-3 years without dietary management)</li>
        </ul>
      `,
      complications: `
        <p><strong>Intra-operative:</strong></p>
        <ul>
          <li>Inadvertent ureteral injury (close to trigone — avoid trigone area)</li>
          <li>Urethral injury during stone retrieval / flushing</li>
          <li>Bladder mucosal trauma (sutures penetrating lumen)</li>
          <li>Hemorrhage from bladder vessels (uncommon)</li>
          <li>Inadvertent bowel injury (close approach if obese / distended)</li>
          <li>Anesthetic complications</li>
        </ul>

        <p><strong>Early post-op (0-7 days):</strong></p>
        <ul>
          <li><strong>Urine leakage / uroabdomen ✗</strong>:
            <ul>
              <li>Inadequate closure or compromised tissue</li>
              <li>Signs: progressive abdominal distension, vomiting, depression, ↑ BUN/Cr</li>
              <li>Diagnosis: abdominocentesis (Cr in fluid &gt; 2× serum)</li>
              <li>Tx: re-exploration + repair, peritoneal lavage</li>
            </ul>
          </li>
          <li>Persistent hematuria (mass? missed stone? coagulopathy?)</li>
          <li>Urinary tract obstruction (urethral spasm post-catheterization, edema)</li>
          <li>UTI persistence (failed antibiotic, contaminated case)</li>
          <li>Wound dehiscence / SSI</li>
          <li>Adhesion formation (rare)</li>
          <li>Bladder atony post-extended distension</li>
        </ul>

        <p><strong>Late (weeks-months-years):</strong></p>
        <ul>
          <li><strong>Stone recurrence ✨</strong>:
            <ul>
              <li>Common: ~ 50% within 1-3 years without proper prevention</li>
              <li>Higher recurrence: oxalate (50%), urate (40%), cysteine (50%)</li>
              <li>Lower: struvite (with diet + UTI control)</li>
              <li>Prevention: diet, hydration, UTI control</li>
            </ul>
          </li>
          <li>Missed stones (high if no intra-op radiograph)
            <ul>
              <li>Persistent hematuria, dysuria post-op</li>
              <li>Recheck imaging at 4-6 weeks if signs persist</li>
            </ul>
          </li>
          <li>Recurrent UTI (often related to anatomic / underlying issues)</li>
          <li>Bladder fibrosis / decreased compliance (chronic inflammation)</li>
          <li>Adhesions causing partial obstruction</li>
          <li>If TCC: progression of disease (regardless of surgery)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Routine cystotomy for uroliths: excellent</strong> ✓
            <ul>
              <li>Mortality &lt; 1% in healthy patients</li>
              <li>Recovery 10-14 days</li>
              <li>Resolution of clinical signs typical</li>
            </ul>
          </li>
          <li><strong>Long-term outcomes per stone type ✨:</strong>
            <ul>
              <li>Struvite + dietary management + UTI control: low recurrence ~ 10%</li>
              <li>Calcium oxalate: ~ 50% recurrence within 3 years (despite prevention)</li>
              <li>Urate (Dalmatian) + allopurinol + diet: 30-40% recurrence</li>
              <li>Cystine: ~ 50% recurrence</li>
            </ul>
          </li>
          <li><strong>Bladder mass / TCC outcome:</strong>
            <ul>
              <li>Apical TCC + complete partial cystectomy: better — MST 18+ mo possible</li>
              <li>Trigonal TCC: not surgically curable; medical Tx + stent</li>
              <li>Benign mass (polyp, leiomyoma) + complete excision: cure ✓</li>
            </ul>
          </li>
          <li><strong>Bladder rupture repair:</strong>
            <ul>
              <li>Acute traumatic: good if early Tx (&gt; 80% survival)</li>
              <li>Delayed (peritonitis): more guarded</li>
            </ul>
          </li>
          <li><strong>Recovery timeline:</strong>
            <ul>
              <li>Bladder healing: 14-21 days for tensile strength</li>
              <li>Mucosal integrity: 5-7 days</li>
              <li>Return to full activity: 3-4 weeks</li>
            </ul>
          </li>
          <li><strong>Negative prognostic factors:</strong>
            <ul>
              <li>Trigonal involvement (resectability)</li>
              <li>Severe concurrent renal disease</li>
              <li>Stone composition with high recurrence</li>
              <li>Inadequate prevention strategy / owner compliance</li>
              <li>Concurrent severe comorbidity</li>
              <li>Uroabdomen complications</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Always retrograde flush + intra-op radiograph</strong> ✨ — significantly reduces missed stone rate<br><br>**Submit stones for quantitative analysis** — drives long-term prevention plan<br><br>⚠️ **Avoid trigone** (ureteral openings, urethra). **Monofilament absorbable suture only** (PDS, Maxon) — multifilament + non-absorbable = stone nidus risk</div>
      `,
    },
  },

  /* ============================================================
     ORTHOPEDIC — Joint
  ============================================================ */
  {
    id: 'femoral-head-ostectomy',
    titleEn: 'Femoral Head Ostectomy (FHO)',
    titleTh: 'ตัดหัวกระดูกต้นขา',
    type: 'surgery',
    system: 'orthopedic',
    species: ['dog', 'cat'],
    tags: ['FHO', 'femoral head ostectomy', 'hip dysplasia', 'Legg-Calvé-Perthes', 'femoral head fracture', 'coxofemoral luxation', 'salvage procedure', 'pseudoarthrosis', 'physical rehabilitation'],
    aliases: ['FHO', 'femoral head ostectomy', 'femoral head and neck excision', 'FHNE', 'ตัดหัวข้อสะโพก'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Hip',
    sections: {
      indications: `
        <p><strong>Salvage procedure for refractory hip pain — creates pseudoarthrosis ✨</strong></p>
        <ul>
          <li><strong>Femoral head/neck fracture not amenable to internal fixation</strong>
            <ul>
              <li>Comminuted Salter-Harris I/II proximal physeal fracture</li>
              <li>Slipped capital femoral epiphysis (cat especially)</li>
              <li>Failed prior fixation</li>
            </ul>
          </li>
          <li><strong>Coxofemoral luxation refractory to closed/open reduction ✨</strong>
            <ul>
              <li>Recurrent luxation despite stabilization attempts</li>
              <li>Chronic luxation (&gt; 3-5 days; femoral head fibrotic)</li>
            </ul>
          </li>
          <li><strong>Severe hip dysplasia with refractory pain</strong>
            <ul>
              <li>End-stage osteoarthritis</li>
              <li>Failed conservative management (NSAIDs, weight loss, rehab)</li>
              <li>Total hip replacement (THR) not feasible / affordable</li>
              <li>Generally smaller dogs &lt; 20-25 kg (better outcomes than larger)</li>
            </ul>
          </li>
          <li><strong>Legg-Calvé-Perthes disease ✨</strong> (avascular necrosis of femoral head)
            <ul>
              <li>Small breed dogs (Toy Poodle, Yorkie, Cairn Terrier, etc.)</li>
              <li>Typical age 4-12 months</li>
              <li>FHO is treatment of choice — excellent outcomes</li>
            </ul>
          </li>
          <li>Septic coxofemoral arthritis refractory to medical Tx</li>
          <li>Acetabular fracture not surgically reconstructable</li>
          <li>Neoplasia of femoral head/neck (palliative)</li>
          <li>Owner cannot afford / decline THR for cases that would benefit from it</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Patient candidate for total hip replacement (THR) — superior functional outcome typically
            <ul>
              <li>Especially large breed dogs (&gt; 20-25 kg)</li>
              <li>Working dogs requiring full athletic performance</li>
              <li>Discuss as superior alternative when financially feasible</li>
            </ul>
          </li>
          <li>Concurrent severe orthopedic disease in same limb (CCL rupture, fractures)
            <ul>
              <li>Address concurrent issues; FHO will not help if problem isn't hip</li>
            </ul>
          </li>
          <li>Severe contralateral hip disease — both hips can't be done simultaneously
            <ul>
              <li>Stage bilateral FHOs 6-12 weeks apart (ipsilateral healing first)</li>
            </ul>
          </li>
          <li>Severe muscle atrophy / contracture (&gt; 6 mo chronic disuse) — guarded outcome</li>
          <li>Nerve injury affecting affected limb (poor function regardless)</li>
          <li>Owner unable to provide post-op rehabilitation (~ 8-12 weeks of strict program ✨)</li>
          <li>Obesity uncontrolled — significantly worsens outcomes</li>
          <li>Sciatic nerve neoplasia / dysfunction</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup:</strong></p>
        <ul>
          <li>Detailed orthopedic exam:
            <ul>
              <li>Lameness assessment (degree, weight-bearing)</li>
              <li>Hip ROM, pain on extension/flexion</li>
              <li>Ortolani sign (laxity test for dysplasia)</li>
              <li>Muscle atrophy comparison (thigh circumference)</li>
              <li>Sciatic nerve function (deep pain, withdrawal, etc.)</li>
            </ul>
          </li>
          <li><strong>Radiographs ✨:</strong>
            <ul>
              <li>Standard ventrodorsal extended-leg pelvis</li>
              <li>VD frog-leg (lateral view of femoral heads)</li>
              <li>Lateral hip</li>
              <li>Document: dysplasia (Norberg angle), DJD, fracture, luxation, Perthes</li>
              <li>Compare contralateral hip</li>
            </ul>
          </li>
          <li>Pre-anesthetic CBC, biochem (especially older patients)</li>
          <li>Coag panel if breed predisposed (vWD)</li>
          <li>Discuss alternatives with owner: conservative Tx, THR, FHO trade-offs</li>
        </ul>

        <p><strong>2. Owner counseling ✨:</strong></p>
        <ul>
          <li><strong>Set realistic expectations:</strong>
            <ul>
              <li>FHO creates a "pseudoarthrosis" (false joint) of fibrous tissue</li>
              <li>Goal: pain-free function, NOT athletic performance</li>
              <li>Smaller dogs/cats: often near-normal function ✓</li>
              <li>Large dogs: more limited, expected mild lifelong limp</li>
              <li>Recovery: 8-12 weeks intensive rehab, full benefit at 6 months</li>
              <li>Lifelong some weight management essential</li>
            </ul>
          </li>
          <li>Compare to THR (better functional outcome but more expensive, specialty)</li>
          <li>Cost: significant rehab commitment (PT, hydrotherapy ideally)</li>
          <li>Some atrophy of thigh muscles may persist</li>
        </ul>

        <p><strong>3. Patient prep:</strong></p>
        <ul>
          <li>NPO 8-12h</li>
          <li>IV catheter (cephalic typically)</li>
          <li>Prep affected hindlimb extensively:
            <ul>
              <li>Clip from midline to hock; dorsal to ventral midline</li>
              <li>Hanging-leg prep technique (sterile drape entire limb)</li>
              <li>3-cycle chlorhexidine scrub</li>
            </ul>
          </li>
          <li>Pre-warm OR + recovery (orthopedic surgery long, hypothermia risk)</li>
        </ul>

        <p><strong>4. Anesthesia plan ✨:</strong></p>
        <ul>
          <li><strong>Premed:</strong>
            <ul>
              <li>Methadone 0.3 mg/kg + dexmed 5-10 mcg/kg IM (younger, healthier)</li>
              <li>Methadone alone if cardiovascular concerns</li>
              <li>± Acepromazine 0.01-0.02 mg/kg if anxious + stable</li>
            </ul>
          </li>
          <li><strong>Induction:</strong>
            <ul>
              <li>Propofol 4-6 mg/kg IV titrated</li>
              <li>Or alfaxalone 1-2 mg/kg IV</li>
              <li>Older / debilitated: etomidate or co-induction with midaz</li>
            </ul>
          </li>
          <li><strong>Maintenance:</strong> isoflurane / sevoflurane in 100% O2</li>
          <li><strong>IV fluids:</strong> LRS 5-10 mL/kg/h (long surgery; replacement)</li>
          <li><strong>Locoregional ✨ — strongly recommended:</strong>
            <ul>
              <li><strong>Epidural ✨</strong> — preservative-free morphine 0.1 mg/kg + bupivacaine 0.5% 0.1-0.2 mL/kg
                <ul>
                  <li>Lumbosacral approach</li>
                  <li>Provides 12-24h analgesia</li>
                  <li>Significantly reduces inhalant requirement + post-op pain</li>
                </ul>
              </li>
              <li>Or sciatic + femoral nerve blocks (specialty technique)</li>
            </ul>
          </li>
          <li><strong>Monitoring:</strong> SpO2, ECG, BP (NIBP), EtCO2, temp; arterial line for prolonged cases</li>
          <li>Maintain MAP &gt; 65 mmHg for tissue perfusion + bleeding control</li>
        </ul>
      `,
      technique: `
        <p><strong>Step-by-step craniolateral approach to hip ✨:</strong></p>

        <p><strong>1. Positioning:</strong></p>
        <ul>
          <li>Lateral recumbency, affected limb up</li>
          <li>Surgical limb draped freely (hanging-leg prep) — allows manipulation</li>
          <li>Down limb cushioned</li>
          <li>Towel rolls for stability</li>
        </ul>

        <p><strong>2. Skin incision:</strong></p>
        <ul>
          <li>Curvilinear incision over greater trochanter</li>
          <li>Length: 8-15 cm depending on patient size</li>
          <li>Centered over greater trochanter, extending cranial + distal</li>
        </ul>

        <p><strong>3. Subcutaneous + tensor fasciae latae:</strong></p>
        <ul>
          <li>Sharp dissection through SC tissue</li>
          <li>Identify junction between tensor fasciae latae (cranial) + biceps femoris (caudal)</li>
          <li>Incise fascia along this avascular line — key landmark for craniolateral approach</li>
        </ul>

        <p><strong>4. Deep dissection:</strong></p>
        <ul>
          <li>Reflect tensor fascia latae cranially, biceps femoris caudally</li>
          <li>Expose: deep gluteal muscle (over greater trochanter), middle gluteal (cranial)</li>
          <li>Identify greater trochanter as landmark</li>
          <li>Optional: partial tenotomy of deep gluteal insertion (for better exposure in large dogs)
            <ul>
              <li>Reflect deep gluteal cranially</li>
              <li>Repair at closure</li>
            </ul>
          </li>
        </ul>

        <p><strong>5. Joint capsule incision:</strong></p>
        <ul>
          <li>Identify joint capsule (deep to gluteals, surrounds femoral head)</li>
          <li>T-incision through capsule:
            <ul>
              <li>Longitudinal limb along femoral neck axis</li>
              <li>Transverse limb at acetabular rim</li>
            </ul>
          </li>
          <li>Reflect capsule flaps for exposure</li>
        </ul>

        <p><strong>6. Femoral head dislocation:</strong></p>
        <ul>
          <li>External rotation + adduction of limb to dislocate femoral head from acetabulum
            <ul>
              <li>Have assistant hold limb in this position</li>
            </ul>
          </li>
          <li>Cut round ligament with curved scissors or osteotome (if intact)</li>
          <li>Femoral head now exposed for ostectomy</li>
        </ul>

        <p><strong>7. Femoral head + neck ostectomy ✨ — critical step:</strong></p>
        <ul>
          <li><strong>Cut location ✨:</strong>
            <ul>
              <li>Cut along axis from medial-proximal to lateral-distal</li>
              <li>Begin: medial aspect of femoral neck just distal to femoral head</li>
              <li>Angle: ~ 45° to long axis of femur</li>
              <li>Exit point: distal to greater trochanter on lateral cortex (not into greater trochanter)</li>
              <li>Goal: complete neck removal, smooth surface, no remnants</li>
            </ul>
          </li>
          <li><strong>Technique options:</strong>
            <ul>
              <li><strong>Oscillating saw ✨</strong> — preferred (precise, fast, less damage)</li>
              <li>Osteotome + mallet (older technique; risk of cracking)</li>
              <li>Bone-cutting forceps (smaller patients)</li>
              <li>Gigli wire saw (rare)</li>
            </ul>
          </li>
          <li><strong>Common errors ✗:</strong>
            <ul>
              <li>Leaving caudal neck remnant (most common ✗) — bone-on-bone contact = pain!</li>
              <li>Cutting into trochanter (gluteal insertion compromise)</li>
              <li>Cut too proximal (acetabular impingement)</li>
              <li>Verify smooth contour by palpation + visualization</li>
            </ul>
          </li>
          <li>Remove femoral head + send for histopath if pathology suspected (Perthes, neoplasia)</li>
          <li>Inspect cut surface — smooth, no spike or remnant</li>
          <li>Bone rongeurs to remove any remnants or sharp edges</li>
        </ul>

        <p><strong>8. Soft tissue interposition (controversial — often omitted in modern practice):</strong></p>
        <ul>
          <li>Some surgeons interpose joint capsule or biceps femoris muscle flap between cut bone + acetabulum
            <ul>
              <li>Theory: reduces bone-on-bone contact, smoother pseudoarthrosis</li>
              <li>Evidence mixed — may not significantly improve outcomes</li>
            </ul>
          </li>
          <li>Modern practice often: capsule closure only, no interposition</li>
          <li>If interposing: capsule sutured to gluteal muscle dorsally to span gap</li>
        </ul>

        <p><strong>9. Lavage + closure:</strong></p>
        <ul>
          <li>Lavage with warm saline; remove bone debris</li>
          <li>Inspect for hemorrhage; address (electrocautery for bleeding muscle vessels)</li>
          <li><strong>Closure:</strong>
            <ul>
              <li>Joint capsule remnants: 2-0 or 3-0 PDS interrupted (if enough tissue)</li>
              <li>Deep gluteal repair if tenotomized: 0 PDS interrupted</li>
              <li>Tensor fasciae latae fascia: 2-0 PDS continuous (key holding layer)</li>
              <li>SC: 3-0 PDS continuous</li>
              <li>Skin: 3-0 nylon interrupted or staples</li>
            </ul>
          </li>
          <li>Range of motion check before closure complete (full ROM expected)</li>
        </ul>

        <p><strong>10. Post-op imaging:</strong></p>
        <ul>
          <li>Lateral hip radiograph immediately post-op
            <ul>
              <li>Verify clean cut, no remnant, no impingement</li>
              <li>Compare to pre-op</li>
            </ul>
          </li>
          <li>Document cut location, alignment</li>
        </ul>
      `,
      drugs: `
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Orthopedic surgery = clean (low SSI rate without prophylaxis ~ 5%)</li>
          <li>Standard prophylaxis recommended:
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction → q90 min during surgery</li>
              <li>Generally NOT continued post-op for routine clean orthopedic</li>
            </ul>
          </li>
          <li>If septic arthritis pre-existing or contamination:
            <ul>
              <li>Cefazolin or amoxicillin-clavulanate IV intra-op</li>
              <li>Continue PO post-op 7-14 days based on culture</li>
            </ul>
          </li>
        </ul>

        <p><strong>Analgesia (multimodal — critical for orthopedic) ✨:</strong></p>
        <ul>
          <li><strong>Pre-op (premed):</strong>
            <ul>
              <li>Methadone 0.3 mg/kg IM (full mu agonist preferred)</li>
              <li>Or hydromorphone 0.1 mg/kg IM</li>
              <li>Maropitant 1 mg/kg SC</li>
            </ul>
          </li>
          <li><strong>Intra-op:</strong>
            <ul>
              <li><strong>Epidural ✨</strong> — preservative-free morphine 0.1 mg/kg + bupivacaine 0.5% 0.1-0.2 mL/kg (LS approach) — gold standard for hindlimb orthopedic</li>
              <li>Or sciatic + femoral nerve blocks: bupivacaine 0.5% 0.1-0.3 mL/kg per nerve (specialty)</li>
              <li>Local infiltration of incision: bupivacaine 1.5 mg/kg + lidocaine 4 mg/kg (mix)</li>
              <li>Fentanyl CRI 5-10 mcg/kg/h if needed (long surgery)</li>
              <li>Ketamine CRI 0.6 mg/kg/h (post 0.5 mg/kg loading bolus) — wind-up prevention</li>
            </ul>
          </li>
          <li><strong>NSAID (post-op, with appropriate caution):</strong>
            <ul>
              <li>Carprofen 4.4 mg/kg SC at recovery (dog)</li>
              <li>Or meloxicam 0.2 mg/kg SC initial, 0.1 mg/kg PO daily × 7-14 days</li>
              <li>Or robenacoxib 1-2 mg/kg PO/SC daily (cat 3-7 days, dog longer)</li>
              <li>Continue 14-21 days post-op for orthopedic pain control</li>
              <li>Caution: not in patients with CKD, GI ulcer history, on steroids</li>
            </ul>
          </li>
          <li><strong>Continued post-op:</strong>
            <ul>
              <li>NSAID × 14-21 days</li>
              <li>Tramadol 2-5 mg/kg PO q8h × 7-14 days (dog) — variable efficacy</li>
              <li>Gabapentin 10-20 mg/kg PO q8h × 14-21 days (good for orthopedic) ✨</li>
              <li>Amantadine 3-5 mg/kg PO q24h (chronic pain modulation)</li>
              <li>Paracetamol/acetaminophen 10-15 mg/kg PO q12h (DOG ONLY ✗ NEVER cat)</li>
              <li>Buprenorphine 0.01-0.02 mg/kg buccal q8h × 3-5 days (especially cat)</li>
            </ul>
          </li>
        </ul>

        <p><strong>Adjunct (chronic):</strong></p>
        <ul>
          <li>Joint supplements: glucosamine + chondroitin + omega-3 fatty acids</li>
          <li>Adequan (PSGAGs) 4.4 mg/kg IM q3-5 days × 8 doses</li>
          <li>Consider monoclonal anti-NGF antibody (Librela/Solensia) for chronic pain</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h):</strong></p>
        <ul>
          <li>Recovery in warm padded area</li>
          <li>Monitor pain — ortho cases often need higher analgesic requirements</li>
          <li>Encourage early ambulation within 12-24h ✨ (critical for FHO outcome — no delay!)
            <ul>
              <li>Even toe-touching/partial weight-bearing within first day</li>
              <li>Ice pack to surgical site q4-6h × 24-48h (10-15 min, with barrier)</li>
            </ul>
          </li>
          <li>Continue IV fluids until eating</li>
          <li>Hospitalize 24-48h typically</li>
        </ul>

        <p><strong>Discharge instructions ✨ — owner education essential:</strong></p>
        <ul>
          <li><strong>Early active use is mandatory ✨</strong> — different from most orthopedic surgeries!
            <ul>
              <li>Limb must be used early to develop functional pseudoarthrosis</li>
              <li>NO strict cage rest (atrophy + non-functional joint)</li>
              <li>5-10 minute leash walks 4-6 times daily starting day 1-2</li>
              <li>Encourage limb use, not protection</li>
            </ul>
          </li>
          <li><strong>Activity progression:</strong>
            <ul>
              <li>Week 1: short frequent leash walks, gentle PROM 3-4×/day</li>
              <li>Week 2-4: increase walk duration gradually (10-20 min)</li>
              <li>Week 4-8: light exercise increasing</li>
              <li>Week 8+: gradual return to normal activity</li>
            </ul>
          </li>
          <li>E-collar until skin sutures removed (10-14 days)</li>
          <li>Daily incision check</li>
          <li>NSAID + pain medications per schedule</li>
          <li>Watch for: severe pain, refusal to walk, swelling, discharge, dehiscence</li>
        </ul>

        <p><strong>Physical rehabilitation ✨ ✨ — outcome-determining:</strong></p>
        <ul>
          <li><strong>PROM (passive range of motion) ✨</strong>:
            <ul>
              <li>3-5 sets × 15-20 reps, 3-4× daily starting day 2</li>
              <li>Hip flexion + extension</li>
              <li>Gentle, painless range</li>
              <li>Owner-performed at home</li>
            </ul>
          </li>
          <li><strong>Hot/cold therapy:</strong>
            <ul>
              <li>Cold pack first 48-72h (reduce swelling)</li>
              <li>Warm pack thereafter (relax muscles before exercise)</li>
            </ul>
          </li>
          <li><strong>Hydrotherapy ✨ — gold standard if available:</strong>
            <ul>
              <li>Underwater treadmill 2-3× weekly starting week 2</li>
              <li>Buoyancy reduces weight-bearing strain</li>
              <li>Builds muscle without joint stress</li>
              <li>Significantly improves outcomes</li>
            </ul>
          </li>
          <li>Stair climbing controlled (week 4+)</li>
          <li>Sit-to-stand exercises (strengthens hindquarters)</li>
          <li>Slow leash walks gradually increasing duration</li>
          <li>Massage to thigh muscles (combat atrophy)</li>
          <li>Specialty rehab clinic referral ideal</li>
        </ul>

        <p><strong>Follow-up:</strong></p>
        <ul>
          <li>Recheck 7-10 days for incision + suture removal at 14 days</li>
          <li>Recheck at 4 weeks for orthopedic exam, ROM, weight-bearing</li>
          <li>Recheck at 8 weeks (significant functional improvement expected)</li>
          <li>Recheck at 6 months (final functional assessment)</li>
          <li>Radiograph optional — pseudoarthrosis appearance, soft tissue assessment</li>
        </ul>

        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Lifelong weight management (obesity worsens outcome significantly)</li>
          <li>Maintain muscle mass (regular exercise)</li>
          <li>Joint supplements long-term reasonable</li>
          <li>NSAID PRN for occasional flare-ups</li>
          <li>Most return to near-normal function in small dogs/cats by 4-6 months ✨</li>
        </ul>
      `,
      complications: `
        <p><strong>Intra-operative:</strong></p>
        <ul>
          <li>Sciatic nerve injury (rare with proper technique — nerve courses caudal)</li>
          <li>Femoral head fracture during dislocation (rare, usually pre-existing)</li>
          <li>Hemorrhage (gluteal artery branches; usually controllable)</li>
          <li>Inadequate ostectomy ✗ — incomplete neck removal (most common technical error)</li>
          <li>Greater trochanter fracture (cut into trochanter)</li>
          <li>Acetabular damage (unlikely with care)</li>
          <li>Anesthetic complications</li>
        </ul>

        <p><strong>Early post-op (0-4 weeks):</strong></p>
        <ul>
          <li>Persistent severe pain — assess for:
            <ul>
              <li>Femoral neck remnant ✗ (re-radiograph — most common cause)</li>
              <li>Sciatic neuropraxia (resolves in days-weeks)</li>
              <li>Inadequate analgesia plan</li>
            </ul>
          </li>
          <li>Refusal to bear weight (delays pseudoarthrosis development)</li>
          <li>Wound dehiscence / SSI</li>
          <li>Seroma at surgical site</li>
          <li>Hematoma</li>
          <li>Persistent lameness (early stage normal — expect improvement over weeks)</li>
        </ul>

        <p><strong>Late (months-years):</strong></p>
        <ul>
          <li><strong>Persistent lameness ✗</strong> — major late complication
            <ul>
              <li>Worse in larger dogs</li>
              <li>Causes: inadequate ostectomy, incomplete rehab, obesity, concurrent disease</li>
              <li>Rate: ~ 10-30% have residual lameness depending on size + rehab</li>
            </ul>
          </li>
          <li><strong>Muscle atrophy</strong> — some always present; severity varies</li>
          <li>Reduced limb use / lifelong limp (especially large dogs)</li>
          <li>Decreased range of motion (variable)</li>
          <li>Joint instability/clunking sensation (rare)</li>
          <li>Bone proliferation at cut site (uncommon)</li>
          <li>Need for revision surgery (rare; for remnant or impingement)</li>
          <li>Concurrent contralateral disease progression</li>
          <li>Cosmetic asymmetry (limb shortening 1-2 cm typical)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Smaller dogs (&lt; 20 kg) + cats: excellent</strong> ✓ ✨
            <ul>
              <li>~ 90-95% achieve good-excellent function</li>
              <li>Often near-normal function by 4-6 months</li>
              <li>Minimal residual lameness</li>
              <li>Especially good for: Legg-Perthes patients, cats, small breed Perthes/dysplasia</li>
            </ul>
          </li>
          <li><strong>Medium dogs (20-30 kg): good</strong>
            <ul>
              <li>~ 70-80% achieve acceptable function</li>
              <li>Some residual lameness common</li>
              <li>Functional, not athletic</li>
            </ul>
          </li>
          <li><strong>Large dogs (&gt; 30 kg): variable / guarded</strong>
            <ul>
              <li>~ 50-70% achieve acceptable function</li>
              <li>Lifelong limp common</li>
              <li>THR typically superior choice if affordable</li>
              <li>Better than no treatment for refractory pain</li>
            </ul>
          </li>
          <li><strong>Time to maximum benefit:</strong>
            <ul>
              <li>4 weeks: significant improvement</li>
              <li>2-3 months: good function</li>
              <li>4-6 months: maximum benefit reached</li>
              <li>Patient needs full rehab program</li>
            </ul>
          </li>
          <li><strong>Pain relief:</strong>
            <ul>
              <li>Most patients pain-free by 6-12 weeks ✓</li>
              <li>Eliminates need for chronic NSAIDs in most</li>
            </ul>
          </li>
          <li><strong>Bilateral FHOs:</strong>
            <ul>
              <li>Stage 8-12 weeks apart (one limb fully recovered)</li>
              <li>Outcomes good if patient is small-medium</li>
            </ul>
          </li>
          <li><strong>Negative prognostic factors:</strong>
            <ul>
              <li>Body weight &gt; 25 kg</li>
              <li>Obesity uncontrolled</li>
              <li>Inadequate rehabilitation</li>
              <li>Femoral neck remnant ✗</li>
              <li>Concurrent severe orthopedic disease</li>
              <li>Chronic disuse atrophy pre-op (&gt; 6 mo)</li>
              <li>Owner unable to commit to rehab program</li>
              <li>Poor surgical technique</li>
            </ul>
          </li>
          <li><strong>Comparison to THR:</strong>
            <ul>
              <li>THR: better functional outcome, full athletic return possible</li>
              <li>FHO: salvage; aim for pain-free function, not athletic</li>
              <li>FHO ~ 1/10 cost of THR; appropriate for small dogs/cats</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>FHO = "salvage procedure"</strong> — creates fibrous pseudoarthrosis; goal is pain-free function not athletic performance ✨<br><br>**Small dogs/cats: excellent outcomes ✓**. Larger dogs: THR better if feasible<br><br>⚠️ <strong>Early active use mandatory ✨</strong> — opposite of most orthopedic post-op! Strict rest = poor outcome. **Hydrotherapy + rehab determine outcome**</div>
      `,
    },
  },

  /* ============================================================
     UROGENITAL — Male reproductive
  ============================================================ */
  {
    id: 'castration-orchiectomy',
    titleEn: 'Castration / Orchiectomy',
    titleTh: 'ทำหมันเพศผู้ — ตัดอัณฑะ',
    type: 'surgery',
    system: 'urogenital',
    species: ['dog', 'cat'],
    tags: ['castration', 'orchiectomy', 'neuter', 'cryptorchid', 'testicular tumor', 'BPH', 'prostatic disease', 'perineal hernia', 'sertoli cell tumor', 'open castration', 'closed castration'],
    aliases: ['castration', 'neuter', 'orchiectomy', 'ทำหมัน', 'ตอน', 'ผ่าตัดทำหมันตัวผู้'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Testes & Scrotum',
    sections: {
      indications: `
        <ul>
          <li><strong>Routine elective sterilization</strong> ✨ — most common indication
            <ul>
              <li>Population control</li>
              <li>Prevent unwanted breeding</li>
              <li>Behavioral modification (roaming, mounting, urine marking, inter-male aggression)</li>
            </ul>
          </li>
          <li><strong>Cryptorchidism ✗</strong> — abdominal/inguinal retained testicle
            <ul>
              <li>13.6× ↑ risk of Sertoli cell tumor in retained testicle</li>
              <li>Always remove BOTH testicles (even descended one is genetically affected)</li>
              <li>Hereditary — should not breed</li>
            </ul>
          </li>
          <li><strong>Testicular neoplasia:</strong>
            <ul>
              <li>Sertoli cell tumor → estrogen-secreting → bone marrow suppression, feminization, alopecia ✗</li>
              <li>Seminoma — usually benign behavior</li>
              <li>Interstitial (Leydig) cell tumor — usually benign</li>
            </ul>
          </li>
          <li><strong>Prostatic disease:</strong>
            <ul>
              <li>BPH (benign prostatic hyperplasia) — castration cures within 4-6 weeks</li>
              <li>Bacterial prostatitis (adjunct to antibiotics)</li>
              <li>Prostatic cysts</li>
              <li>NOT effective: prostatic adenocarcinoma (often castration-resistant; some reports of progression after castration)</li>
            </ul>
          </li>
          <li>Perineal hernia (concurrent with herniorrhaphy — reduces tenesmus, recurrence)</li>
          <li>Perianal adenoma (testosterone-dependent — regresses post-castration in 90%)</li>
          <li>Testicular trauma, torsion, severe orchitis</li>
          <li>Inguinal/scrotal hernia (occasional indication)</li>
          <li>Cat — spraying, fight wounds, FIV transmission risk reduction ✨</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hemodynamic instability not yet stabilized</li>
          <li>Severe untreated coagulopathy</li>
          <li>Significant uncompensated comorbidity</li>
          <li>Intended for breeding (relative)</li>
          <li>Working dogs — controversial; possible link with delayed neutering and reduced orthopedic disease in giant breeds (CCL, OSA, HSA in some studies) ⚠️
            <ul>
              <li>Some now recommend delaying castration in giant breeds until skeletal maturity (12-18 mo)</li>
              <li>Discuss with owner; case-by-case decision</li>
            </ul>
          </li>
          <li>Severe scrotal/perineal infection (treat first, then surgery in clean field)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup:</strong></p>
        <ul>
          <li>Signalment + history</li>
          <li>PE — palpate <strong>BOTH</strong> testicles in scrotum ✨
            <ul>
              <li>Cryptorchid? Locate retained testicle (inguinal vs abdominal)</li>
              <li>If &gt; 6 mo old and not descended → permanently retained</li>
              <li>Pre-op US helpful to localize abdominal cryptorchid</li>
            </ul>
          </li>
          <li>BCS, hydration, cardiac auscultation</li>
          <li>If young + healthy: minimal bloodwork (PCV/TS) often sufficient</li>
          <li>If &gt; 6 yr or systemic dz: CBC + biochem panel, UA</li>
          <li>If suspect tumor (testicular asymmetry, feminization signs): CBC ✗ <em>(check for pancytopenia from estrogen toxicity)</em>, abdominal US, thoracic rads</li>
        </ul>
        <p><strong>2. Anesthesia plan:</strong></p>
        <ul>
          <li>Healthy young: standard balanced protocol</li>
          <li>Cat scrotal castration: can be done under deep injectable (TKX or alfaxalone) without intubation in some clinics — but intubation safer ✨</li>
          <li>Sertoli cell tumor patient: ↑ anesthetic risk if pancytopenic — transfusion may be needed pre-op</li>
        </ul>
        <p><strong>3. Site prep:</strong></p>
        <ul>
          <li>Dog pre-scrotal: clip ventral abdomen + scrotum margin, scrub pre-scrotal area only</li>
          <li>Cat scrotal: pluck hair from scrotum (no clipper — minimizes irritation), brief scrub</li>
          <li>Cryptorchid abdominal: clip + prep entire ventral abdomen as for laparotomy</li>
          <li>Empty bladder by manual expression after induction</li>
        </ul>
      `,
      technique: `
        <p><strong>A. Dog — Pre-scrotal castration (standard):</strong></p>
        <ol>
          <li>Dorsal recumbency. Push testicle cranially with non-dominant hand to advance into pre-scrotal area</li>
          <li>Skin incision on ventral midline pre-scrotal, length = 1.5-2× testicle width</li>
          <li>Incise SQ + spermatic fascia, exteriorize testicle</li>
          <li><strong>Open castration ✨:</strong>
            <ul>
              <li>Incise tunica vaginalis → testicle pops out</li>
              <li>Identify spermatic cord components (vas deferens + vascular plexus)</li>
              <li>Triple-clamp spermatic cord; ligate proximally with absorbable suture (3-0 or 2-0 PDS/Monocryl)</li>
              <li>Transfix ligature on vascular cord (figure-8 or surgeon's knot through vessel) ✨</li>
              <li>Transect distal to ligature; check for hemorrhage before releasing back into incision</li>
            </ul>
          </li>
          <li><strong>Closed castration:</strong>
            <ul>
              <li>Don't open tunica — ligate entire cord (testicle + tunic) en-bloc</li>
              <li>Faster but slightly less secure ligature on large dogs</li>
              <li>Acceptable for small/medium dogs &lt; 25 kg</li>
            </ul>
          </li>
          <li>Repeat for opposite testicle (same incision, push 2nd testicle to incision)</li>
          <li>Close SQ + skin in 2-3 layers (intradermal cosmetic preferred)</li>
        </ol>
        <p><strong>B. Cat — Scrotal castration:</strong></p>
        <ol>
          <li>Two small parallel scrotal incisions (one per testicle)</li>
          <li>Exteriorize testicle through tunic</li>
          <li><strong>Two methods to ligate:</strong>
            <ul>
              <li>Self-ties: knot the cord on itself (figure-8) — no suture, fast ✨</li>
              <li>Suture ligature: 3-0 PDS standard</li>
            </ul>
          </li>
          <li>Transect, allow incision to heal by second intention (no skin sutures)</li>
        </ol>
        <p><strong>C. Cryptorchid castration:</strong></p>
        <ol>
          <li>Inguinal: small incision over inguinal canal, exteriorize, standard ligation</li>
          <li>Abdominal: ventral midline laparotomy, locate testicle (often near caudal pole of kidney or in inguinal area), trace from vas deferens at bladder neck if hard to find ✨</li>
          <li>Always remove descended testicle too (genetic carrier) — separate pre-scrotal incision</li>
        </ol>
        <p><strong>Critical principles:</strong></p>
        <ul>
          <li>SECURE ligature on spermatic cord = #1 priority (slip = fatal hemorrhage) ✗</li>
          <li>Transfix on vascular pedicle ≥ 2-3 mm from cut end</li>
          <li>Always check stump for hemorrhage before releasing back</li>
          <li>Atraumatic handling of testicle — squeezing can rupture tunic</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication (dog):</strong></p>
        <ul>
          <li>Acepromazine 0.01-0.03 mg/kg IM <em>(avoid in giant breeds, sighthounds → hypotension)</em></li>
          <li>+ Methadone 0.2-0.4 mg/kg IM <em>or</em> Butorphanol 0.2-0.4 mg/kg IM</li>
          <li>Alternative: Dexmedetomidine 5-10 mcg/kg IM + opioid</li>
        </ul>
        <p><strong>Pre-medication (cat):</strong></p>
        <ul>
          <li>"Kitty magic": Ketamine 5 mg/kg + Dexmedetomidine 10-20 mcg/kg + Butorphanol 0.2-0.4 mg/kg, all IM ✨
            <ul>
              <li>Often sufficient for scrotal castration alone (no induction needed)</li>
              <li>Reverse with atipamezole post-op</li>
            </ul>
          </li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV slowly to effect</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
          <li>Maintenance: Isoflurane / sevoflurane to effect</li>
        </ul>
        <p><strong>Local block ✨:</strong></p>
        <ul>
          <li>Intratesticular lidocaine 2% — 0.5-1 mL per testicle (small dog/cat) up to 1-2 mL (large dog) — NOT to exceed 4 mg/kg total
            <ul>
              <li>Inject directly into testicle parenchyma, slow injection</li>
              <li>Reduces MAC of inhalant by ~ 20% ✓</li>
              <li>Smoother, less reactive emergence</li>
            </ul>
          </li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li><strong>Routine clean elective: NOT indicated</strong> ✓</li>
          <li>Cryptorchid abdominal (laparotomy): Cefazolin 22 mg/kg IV at induction, repeat q90 min</li>
          <li>Concurrent infection / contamination: Cefazolin same dose</li>
        </ul>
        <p><strong>Analgesia:</strong></p>
        <ul>
          <li>NSAID — start day of surgery if no contraindication:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 5-7 d</li>
              <li>Meloxicam 0.1-0.2 mg/kg SC then 0.05-0.1 mg/kg PO q24h × 3-5 d</li>
            </ul>
          </li>
          <li>Cat NSAID: Robenacoxib 1-2 mg/kg SC/PO q24h × 3 d (max 6 d) <em>or</em> Meloxicam single SC dose 0.2 mg/kg only ⚠️</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h):</strong></p>
        <ul>
          <li>Recovery monitoring — usual post-anesthesia (temperature, vitals q15min until awake)</li>
          <li>Check incision for bleeding, scrotal swelling</li>
          <li>Discharge same day in healthy patients ✨</li>
        </ul>
        <p><strong>Home care (Day 1-14):</strong></p>
        <ul>
          <li>E-collar — strict 10-14 days <em>(licking = #1 cause of dehiscence/swelling)</em> ✗</li>
          <li>Restricted activity — leash walks only, no running/jumping × 14 days</li>
          <li>Keep incision clean + dry (no swimming, no bathing × 10-14 d)</li>
          <li>Cold compress to scrotum 5-10 min q4-6h × 1-2 d (minimizes scrotal hematoma)</li>
          <li>NSAID + monitor for vomiting, anorexia → stop if GI signs</li>
          <li>Suture removal day 10-14 (if non-absorbable used)</li>
        </ul>
        <p><strong>Owner discharge instructions:</strong></p>
        <ul>
          <li>Expect mild scrotal swelling × 3-5 days (resolves)</li>
          <li>Persistent swelling, drainage, fever → recheck</li>
          <li>Behavioral changes from castration → 4-8 weeks for full effect (not immediate)</li>
          <li>Caloric requirement decreases ~ 20-30% post-castration → adjust diet to prevent obesity ✨</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hemorrhage from spermatic cord ✗</strong> — most serious
            <ul>
              <li>Slipped ligature → intra-abdominal bleeding (cord retracts cranially)</li>
              <li>Signs: pale MM, tachycardia, abdominal distension, weak pulses post-op</li>
              <li>Tx: emergency ventral midline laparotomy → find cord stump + re-ligate</li>
              <li>Prevention: transfixing ligature, check stump before release ✨</li>
            </ul>
          </li>
          <li><strong>Scrotal hematoma:</strong>
            <ul>
              <li>Common — minor swelling, resolves in 5-10 d</li>
              <li>Severe: large painful swelling — may need drain, sometimes scrotal ablation</li>
              <li>Prevention: meticulous hemostasis, cold compress, no rough activity</li>
            </ul>
          </li>
          <li>Surgical site infection (uncommon — &lt; 5% in clean cases)</li>
          <li>Dehiscence — usually from licking or excessive activity</li>
          <li>Sperm granuloma — sterile inflammation around cord stump (palpable lump, self-limiting)</li>
          <li><strong>Ovarian remnant equivalent: not applicable</strong>, but missed testicle in cryptorchid case = continued endocrine signs ✗
            <ul>
              <li>Diagnose: testosterone, AMH, hCG stimulation test</li>
              <li>Tx: re-explore</li>
            </ul>
          </li>
          <li>Eunuchoid syndrome (rare — large breed dogs castrated very young, may have epiphyseal closure delay)</li>
          <li>Urethral injury (extremely rare — only with poor technique or anatomy distortion)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Routine elective: excellent</strong> ✓
            <ul>
              <li>Mortality &lt; 0.05% in healthy young</li>
              <li>Full recovery 10-14 d</li>
              <li>Behavioral changes: 60-80% of dogs show ↓ roaming, marking, mounting (variable individual response)</li>
            </ul>
          </li>
          <li><strong>BPH ✓:</strong> 80-95% resolution within 4-6 weeks of castration</li>
          <li><strong>Cryptorchid castration:</strong> excellent if abdominal testicle benign; if Sertoli tumor with estrogen toxicity → may need transfusion + supportive care, slower recovery</li>
          <li><strong>Testicular neoplasia:</strong>
            <ul>
              <li>Sertoli cell tumor: 90-95% cured with bilateral castration if no metastasis (uncommon)</li>
              <li>Seminoma, Leydig: similar excellent outcome</li>
              <li>Bone marrow recovery from estrogen toxicity: 4-12 weeks (some don't recover)</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>Caloric needs ↓ 20-30% → weight gain risk → adjust diet</li>
              <li>Possible ↑ risk of OSA, HSA, CCL rupture in giant breeds neutered too early (controversial — Vizsla, Goldens debate)</li>
              <li>Possible ↑ risk USMI in neutered males (very rare vs females)</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Castration = bread-and-butter of small animal practice</strong> — fast, low-mortality, big QOL gains for owners<br><br>**Intratesticular lidocaine block** ✨ = single biggest improvement to anesthesia smoothness — ใช้ทุกตัวเลย<br><br>⚠️ **ทุกครั้งต้อง confirm ทั้ง 2 ลูกในถุง** ก่อนวางยา — เจอ cryptorchid กลางทาง = แผนเปลี่ยน + เวลาเพิ่ม</div>
      `,
    },
  },

  /* ============================================================
     UROGENITAL — Cesarean section
  ============================================================ */
  {
    id: 'cesarean-section',
    titleEn: 'Cesarean Section (± Concurrent OHE)',
    titleTh: 'ผ่าคลอด ± ทำหมันร่วม',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'urogenital',
    tags: ['cesarean section', 'C-section', 'dystocia', 'hysterotomy', 'en-bloc', 'fetal resuscitation', 'oxytocin', 'uterine inertia', 'fetal-maternal mismatch'],
    aliases: ['C-section', 'cesarean', 'ผ่าคลอด', 'hysterotomy', 'ผ่าตัดคลอด'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Cesarean Section',
    sections: {
      indications: `
        <ul>
          <li><strong>Dystocia ✗</strong> — primary indication
            <ul>
              <li>Primary uterine inertia (no progression despite normal anatomy + ferguson reflex)</li>
              <li>Secondary uterine inertia (fatigue after prolonged labor)</li>
              <li>Fetal-maternal mismatch (puppy too big — common in small/toy breed) ✨</li>
              <li>Malpresentation/malposition that can't be corrected manually</li>
              <li>Fetal monstrosity / hydrocephalus</li>
              <li>Maternal pelvic abnormality (prior fracture, congenital)</li>
              <li>Failure of medical management (oxytocin × 2 doses + Ca gluconate without progress)</li>
            </ul>
          </li>
          <li><strong>Elective C-section ✨:</strong>
            <ul>
              <li>Brachycephalic breeds (English Bulldog, French Bulldog, Boston Terrier) — frequently elective</li>
              <li>Schedule based on progesterone tracking + fetal maturity (gestation day 62-63 from LH surge)</li>
              <li>Singleton pregnancy (lacks fetal cortisol trigger — postdates risk)</li>
            </ul>
          </li>
          <li><strong>Fetal distress:</strong>
            <ul>
              <li>Fetal HR &lt; 180 bpm in dog (normal 220-240+) ✗</li>
              <li>Fetal HR &lt; 200 bpm in cat (normal 220+)</li>
              <li>Green/black vulvar discharge (placental separation) without delivery in 30-60 min</li>
            </ul>
          </li>
          <li>Severe systemic illness in queen/bitch threatening pregnancy</li>
          <li>Concurrent OHE indication (owner doesn't want future breeding — combine procedures) ✨</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Dead bitch/queen → just deliver pups via post-mortem c-section if neonates viable</li>
          <li>Severe coagulopathy not corrected</li>
          <li>Owner unable to provide neonatal care post-op (large litter, brachycephalic puppies needing close monitoring) ⚠️</li>
          <li>NOT really a contraindication, but consider: delaying further = ↑ fetal mortality. Decision = balance maternal anesthesia risk vs fetal viability</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Triage rapidly:</strong></p>
        <ul>
          <li>How long in stage 2 labor?
            <ul>
              <li>&gt; 4-6 h without delivery = surgical decision</li>
              <li>&gt; 30 min hard straining without progress = surgical</li>
              <li>&gt; 2 h between puppies = check, often need surgical</li>
            </ul>
          </li>
          <li>Vaginal exam — feel for fetus in canal, cervix dilation, presentation</li>
          <li>Abdominal palpation — count, position</li>
          <li>Vaginal cytology / discharge color</li>
        </ul>
        <p><strong>2. Workup (rapid):</strong></p>
        <ul>
          <li>PCV/TS, BG, ionized Ca, electrolytes ✨ (hypocalcemia common in dystocia)</li>
          <li>Quick CBC if time + concern</li>
          <li>Fetal ultrasound — count + HR ✨
            <ul>
              <li>HR &gt; 220 = good</li>
              <li>HR 180-220 = stressed but viable</li>
              <li>HR &lt; 180 = severe distress, urgent</li>
              <li>No HR = dead</li>
            </ul>
          </li>
          <li>Radiograph — count puppies (skull/spine ossification visible day 45+)</li>
        </ul>
        <p><strong>3. Medical attempt first (if appropriate):</strong></p>
        <ul>
          <li>Only if: cervix dilated, no obstruction, fetus normally positioned, viable HR</li>
          <li>Calcium gluconate 10% — 0.5-1.5 mL/kg slow IV (over 5-10 min, monitor HR)</li>
          <li>Oxytocin 0.5-2 IU/dog IM (or 0.25-1 IU/kg, max 5 IU dog, 0.5-1 IU cat) — repeat q30min × 2 max</li>
          <li>If no puppy delivered after 2 doses → STOP, go to surgery ✗</li>
        </ul>
        <p><strong>4. Pre-op for C-section:</strong></p>
        <ul>
          <li>IV catheter, fluids (LRS 5-10 mL/kg/h or higher if dehydrated)</li>
          <li>Pre-oxygenate × 5 min before induction (large gravid uterus = ↓ FRC, rapid desat)</li>
          <li>Clip + initial scrub of ventral abdomen <strong>BEFORE induction</strong> (minimize anesthesia time before delivery) ✨</li>
          <li>Have neonatal resuscitation team + supplies ready (warm towels, suction bulbs, clamps, naloxone, doxapram, IV epi for newborns)</li>
        </ul>
      `,
      technique: `
        <p><strong>Anesthesia first — rapid induction technique:</strong></p>
        <ol>
          <li>Pre-oxygenate 5 min</li>
          <li>Induce with propofol or alfaxalone IV to effect (lowest dose possible)</li>
          <li>Intubate immediately, isoflurane low</li>
          <li>Lidocaine line block at incision site (2-4 mg/kg total, dilute) ✨</li>
          <li>Place in dorsal recumbency, surgical scrub final, drape — speed essential before fetal hypoxia from anesthetics</li>
        </ol>
        <p><strong>A. Standard hysterotomy (most common):</strong></p>
        <ol>
          <li>Ventral midline incision — caudal abdomen, big enough to exteriorize uterus</li>
          <li>Exteriorize uterus carefully — pack off with moistened laparotomy sponges</li>
          <li>Incise uterine body on dorsal/ventral midline (avoid placental sites)</li>
          <li>Milk first puppy out of horn through incision</li>
          <li>Clamp + cut umbilical cord ~ 2-3 cm from puppy → hand off immediately to assistant for resuscitation ✨</li>
          <li>Pull placenta gently — if doesn't release easily, leave (will pass post-op; pulling = bleeding)</li>
          <li>Continue: milk each puppy from horns toward incision; check both horns thoroughly (don't leave one!) ✗</li>
          <li>After all puppies delivered: oxytocin 5-10 IU IM into uterine wall → uterine involution + ↓ bleeding</li>
          <li>Close uterus 2 layers:
            <ul>
              <li>Layer 1: Cushing or Lembert pattern with 3-0 PDS (inverting, mucosa-to-mucosa)</li>
              <li>Layer 2: Lembert pattern with 3-0 PDS (serosa-to-serosa, seromuscular)</li>
            </ul>
          </li>
          <li>Lavage abdomen with warm saline, count sponges, close abdomen routine</li>
        </ol>
        <p><strong>B. En-bloc resection (alternative — if doing concurrent OHE):</strong></p>
        <ol>
          <li>Quickly clamp uterine body + ovarian pedicles (essentially OHE technique)</li>
          <li>Remove entire intact uterus with puppies inside → hand to neonatal team</li>
          <li>Team opens uterus on table, delivers + resuscitates puppies</li>
          <li>Surgeon completes ligatures/closure in clean field — <strong>much faster + cleaner</strong> ✨</li>
          <li>Critical: must have well-trained neonatal team — once uterus is out, the clock is ticking</li>
          <li>Best for: planned C-section + OHE, brachycephalic with strong neonatal team</li>
        </ol>
        <p><strong>Neonatal resuscitation (parallel team):</strong></p>
        <ul>
          <li>Wipe/dry vigorously with warm towel (stimulate)</li>
          <li>Clear airway: bulb suction nose + mouth, gentle</li>
          <li>If apneic: doxapram 1-2 drops sublingual <em>(controversial — increases CMRO2)</em></li>
          <li>If opioid-suppressed: naloxone 0.04 mg/kg IM/SL</li>
          <li>If bradycardic: warmth + stimulation usually sufficient; if severe: epi 0.01 mg/kg dilute IV/IT</li>
          <li>Tie umbilical cord with suture or hemostat-crush</li>
          <li>Place in warm box (32-34°C ambient for first day)</li>
          <li>Once vigorous → place with mom (after she's awake + stable)</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication — MINIMIZE drugs that cross placenta ✨:</strong></p>
        <ul>
          <li><strong>AVOID:</strong>
            <ul>
              <li>Acepromazine ✗ — long-lasting, hypotension, neonatal depression</li>
              <li>Xylazine ✗ — severe neonatal depression</li>
              <li>Dexmedetomidine — controversial; some use low dose, others avoid</li>
              <li>Ketamine — controversial in dystocia (can be used but causes neonatal depression)</li>
            </ul>
          </li>
          <li><strong>Acceptable / preferred:</strong>
            <ul>
              <li>Pre-oxygenation × 5 min ✓</li>
              <li>Opioid only if needed: butorphanol 0.2 mg/kg IM (mild, short-acting) <em>or</em> can omit pre-med entirely if patient calm</li>
            </ul>
          </li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li><strong>Propofol 2-4 mg/kg IV slow to effect</strong> — gold standard ✨</li>
          <li>Or Alfaxalone 1-2 mg/kg IV — also good, fast metabolism</li>
          <li>Both cross placenta but rapidly redistributed/metabolized</li>
          <li>Use minimum dose to allow intubation</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane 1-1.5% (lowest possible to maintain plane)</li>
          <li>Lidocaine line block at incision site = ↓ inhalant requirement ✨</li>
          <li>Local + regional > systemic for maternal/fetal welfare</li>
        </ul>
        <p><strong>After delivery (mom can have full analgesia):</strong></p>
        <ul>
          <li>Methadone 0.1-0.2 mg/kg IV/IM <em>or</em> hydromorphone 0.05-0.1 mg/kg IV</li>
          <li>NSAID — debated:
            <ul>
              <li>Some give carprofen 4 mg/kg SC after delivery <em>(crosses to milk minimally, short course OK)</em></li>
              <li>Others avoid × 3-5 d to be safe with neonatal renal development</li>
              <li>Robenacoxib in cats: 1 dose post-op probably safe</li>
            </ul>
          </li>
        </ul>
        <p><strong>Oxytocin — uterine involution:</strong></p>
        <ul>
          <li>5-10 IU IM into uterine wall after all puppies out ✨ — promotes involution + hemostasis</li>
          <li>Or 0.5-1 IU/kg IV/IM systemic post-op</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Cefazolin 22 mg/kg IV at induction (clean-contaminated procedure)</li>
          <li>Continue post-op only if contamination, prolonged labor, retained placenta — typically 5-7 d cephalexin 22 mg/kg PO q12h</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Mom):</strong></p>
        <ul>
          <li>Recovery in quiet warm area</li>
          <li>Monitor for bleeding (vaginal discharge), pallor, weakness</li>
          <li>Reunite with puppies once awake + ambulatory + stable (usually 1-2 h post-op) ✨</li>
          <li>Watch first nursing — most do well, but some won't accept pups initially (sedated, painful)</li>
          <li>Maintain warm environment for puppies</li>
        </ul>
        <p><strong>Immediate (Neonates):</strong></p>
        <ul>
          <li>Warm box 32-34°C × 24 h</li>
          <li>Verify all nursing within first 6 h ✨ (colostrum window critical)</li>
          <li>If mom not producing milk well: oxytocin 0.5-2 IU IM to mom OR supplemental milk replacer</li>
          <li>Weigh puppies at birth → q12h × 7 d (must gain 5-10% body weight per day)</li>
        </ul>
        <p><strong>Home care:</strong></p>
        <ul>
          <li>Quiet whelping box, warm</li>
          <li>Mom's incision care: e-collar tricky with nursing — alternative is loose t-shirt over incision</li>
          <li>Mom's appetite usually returns &lt; 24 h</li>
          <li>Lochia (vaginal discharge) — green-brown × 3-7 d normal, becomes serosanguinous, then clear → resolves by 3 weeks</li>
          <li>Watch for: anorexia, fever, foul vaginal discharge → metritis ✗</li>
          <li>Suture removal day 10-14</li>
        </ul>
        <p><strong>If concurrent OHE: same as routine OHE post-op</strong> + neonatal care above</p>
      `,
      complications: `
        <ul>
          <li><strong>Maternal complications:</strong>
            <ul>
              <li>Hemorrhage (uterine wall, placental site bleeding) ✗ — manage with oxytocin, additional sutures, OHE if uncontrolled</li>
              <li>Anesthetic death (rare with proper protocol) — &lt; 1% in healthy patients</li>
              <li>Retained placenta → metritis, septicemia (need US monitoring + antibiotics ± OHE)</li>
              <li>Acute metritis (1-7 d post-op): fever, foul discharge, anorexia → emergency Tx (fluids, broad-spectrum, possibly OHE)</li>
              <li>Endometritis (subacute)</li>
              <li>Mastitis ✗ — separate complication; rare but serious</li>
              <li>Eclampsia (puerperal hypocalcemia) — 1-3 weeks post-whelping in nursing bitch:
                <ul>
                  <li>Tremors, hyperthermia, restlessness → seizures</li>
                  <li>Tx: Ca gluconate 10% slow IV (0.5-1.5 mL/kg over 10 min, monitor HR)</li>
                  <li>Often need to stop nursing temporarily + supplement puppies</li>
                </ul>
              </li>
              <li>Wound dehiscence (puppies climbing, t-shirt failure)</li>
              <li>Failure of milk letdown — oxytocin 0.5-2 IU IM, calm environment</li>
              <li>Maternal rejection of puppies (rare with C-section vs natural delivery)</li>
            </ul>
          </li>
          <li><strong>Neonatal complications:</strong>
            <ul>
              <li>Stillborn (depends on duration of dystocia) — 5-25%</li>
              <li>Neonatal mortality 1-7 d: 5-15%</li>
              <li>Hypoxic ischemic encephalopathy (severely distressed pups)</li>
              <li>Failure to thrive — supplemental feed, tube feed if needed</li>
              <li>Aspiration if poor airway clearance during resuscitation</li>
            </ul>
          </li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Maternal outcome ✓:</strong>
            <ul>
              <li>Mortality &lt; 1% in elective + healthy</li>
              <li>Mortality 1-3% in dystocia C-section</li>
              <li>Higher if: prolonged labor &gt; 24 h, septic, dead fetuses retained &gt; 24 h</li>
              <li>Recovery: full activity in 2 weeks (with concurrent OHE: similar)</li>
              <li>Subsequent pregnancies possible if uterus preserved (no clear ↑ risk for next dystocia per se)</li>
            </ul>
          </li>
          <li><strong>Neonatal outcome:</strong>
            <ul>
              <li>Live birth rate: 85-95% in elective C-section</li>
              <li>70-85% in dystocia (depends on duration)</li>
              <li>&lt; 50% if &gt; 24 h dystocia or all fetuses showing distress ✗</li>
              <li>1-week neonatal mortality after C-section: 5-15% (higher than vaginal delivery — selection bias from sicker patients)</li>
            </ul>
          </li>
          <li><strong>Brachycephalic breeds:</strong>
            <ul>
              <li>Elective C-section common (English Bulldog 80%+ delivered surgically)</li>
              <li>Better outcomes than emergency dystocia C-section</li>
              <li>Schedule day 62-63 from LH surge / day 64-65 from end of estrus</li>
            </ul>
          </li>
          <li><strong>Concurrent OHE:</strong>
            <ul>
              <li>No increase in maternal mortality</li>
              <li>Excellent option if owner doesn't want future breeding</li>
              <li>Don't have to manage subsequent heat cycles</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>C-section = team sport</strong> — surgeon + anesthetist + neonatal team must coordinate<br><br>**Elective &gt; emergency** — เจอ brachycephalic หรือ singleton แนะนำ schedule ✨ จะดีกว่ารอให้ dystocia แล้วค่อยมาฉุกเฉิน<br><br>⚠️ **Time matters** — ทุกชั่วโมง dystocia เพิ่ม fetal mortality ~5-10% — ตัดสินใจให้เร็ว, อย่ารอ oxytocin หลายรอบ</div>
      `,
    },
  },

  /* ============================================================
     HEAD-NECK — Pinna
  ============================================================ */
  {
    id: 'aural-hematoma-repair',
    titleEn: 'Aural Hematoma Repair',
    titleTh: 'ผ่าตัดเลือดคั่งใต้หนังหู',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'head-neck',
    tags: ['aural hematoma', 'pinnal hematoma', 'auricular hematoma', 'otitis externa', 'allergic dermatitis', 'cauliflower ear', 'mattress sutures', 'teat cannula', 'CO2 laser'],
    aliases: ['aural hematoma', 'หูบวมเลือด', 'เลือดคั่งหู', 'pinnal hematoma'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Pinna',
    sections: {
      indications: `
        <ul>
          <li><strong>Aural (pinnal) hematoma ✗</strong> — accumulation of blood between auricular cartilage layers
            <ul>
              <li>Pathogenesis: shear forces (head shaking, scratching) → rupture of cartilage capillaries</li>
              <li>Almost always SECONDARY — find underlying cause ✨</li>
              <li>#1 cause: <strong>otitis externa</strong> (bacterial, yeast, ear mites)</li>
              <li>#2 cause: allergic dermatitis (atopy, food allergy) → otitis → shaking</li>
              <li>Other: foreign body, neoplasia, immune-mediated, trauma</li>
            </ul>
          </li>
          <li>Acute hematoma — surgical repair within 1-2 weeks for best cosmetic outcome ✓</li>
          <li>Recurrent / chronic hematoma after failed medical Tx</li>
          <li>Bilateral hematomas (often in dogs with severe atopy)</li>
        </ul>
        <p><strong>When to consider medical management instead ✨:</strong></p>
        <ul>
          <li>Very small hematoma (&lt; 25% pinna) — try aspiration + intralesional dexamethasone first</li>
          <li>Owner declines surgery / cost</li>
          <li>High anesthetic risk patient</li>
          <li>Cat (often resolves with treatment of otitis alone)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Untreated underlying otitis externa → will recur ✗ (treat ear infection BEFORE or CONCURRENTLY with hematoma surgery)</li>
          <li>Severe systemic illness preventing safe anesthesia</li>
          <li>Coagulopathy (rare cause of pinnal hemorrhage)</li>
          <li>Cosmetic concerns: warn owner about cauliflower ear (some scarring/thickening inevitable)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup — find underlying cause ✨:</strong></p>
        <ul>
          <li>Otoscopic exam BOTH ears
            <ul>
              <li>Hyperemia, exudate, foreign body, mass</li>
              <li>Tympanic membrane intact?</li>
            </ul>
          </li>
          <li>Ear cytology (ALWAYS) — bacteria, yeast (Malassezia), ear mites</li>
          <li>Culture if recurrent / antibiotic-resistant infection</li>
          <li>Allergy workup if recurrent bilateral disease (intradermal, serum allergy testing, food trial)</li>
          <li>Skin scrape if dermatitis</li>
          <li>Standard pre-anesthesia: PE, age-appropriate bloodwork</li>
        </ul>
        <p><strong>2. Treat underlying disease:</strong></p>
        <ul>
          <li>Topical otic Tx based on cytology (otic with antibiotic + antifungal + steroid)</li>
          <li>Common combinations: enrofloxacin + clotrimazole + dexamethasone, or commercial products (Mometamax, Otomax, etc.)</li>
          <li>Systemic NSAID for inflammation/pain</li>
          <li>If allergic: address atopy (Apoquel, Cytopoint, cyclosporine, ± immunotherapy)</li>
        </ul>
        <p><strong>3. Site prep:</strong></p>
        <ul>
          <li>Clip hair from concave AND convex surfaces of pinna</li>
          <li>Gentle scrub (avoid auditory canal during surgical scrub)</li>
          <li>Plug ear canal with cotton ball (prevent fluid from entering)</li>
          <li>Position with hematoma side up</li>
        </ul>
      `,
      technique: `
        <p><strong>A. Linear incision + through-and-through mattress sutures (most common) ✨:</strong></p>
        <ol>
          <li>S-shaped or linear incision on CONCAVE surface, parallel to long axis of pinna</li>
          <li>Length: extends through length of hematoma</li>
          <li>Drain hematoma, evacuate fibrin clots, lavage with sterile saline</li>
          <li>Place series of through-and-through full-thickness mattress sutures across the pinna
            <ul>
              <li>Suture: 2-0 or 3-0 nonabsorbable (nylon, polypropylene) <em>or</em> absorbable (PDS)</li>
              <li>Pattern: parallel to incision, both sides of incision and across the entire flap</li>
              <li>Spacing: 0.5-1 cm apart, 4-6 mm from incision edge</li>
              <li>Tie loosely on convex surface — too tight = avascular necrosis ✗</li>
            </ul>
          </li>
          <li>Leave incision OPEN for drainage <em>(not closed!)</em> ✨ — allows continued drainage 2-3 weeks</li>
          <li>Bandage ear up over head (seal-wrap fashion) — 2-3 days only, then unbandage to allow drainage and air exposure</li>
        </ol>
        <p><strong>B. Multiple punch biopsy holes + sutures (alternative):</strong></p>
        <ol>
          <li>4-6 mm dermal punch biopsies through pinna over hematoma area</li>
          <li>Drain through holes</li>
          <li>Place mattress sutures around holes for compression</li>
          <li>Easier than long incision, similar outcome</li>
        </ol>
        <p><strong>C. Teat cannula / drain (older technique):</strong></p>
        <ol>
          <li>Insert teat cannula into hematoma cavity</li>
          <li>Suture to pinna for retention</li>
          <li>Drains over 2-3 weeks</li>
          <li>Pros: simple, no sutures across pinna</li>
          <li>Cons: cosmetic outcome poorer, prone to displacement</li>
        </ol>
        <p><strong>D. CO2 laser ablation:</strong></p>
        <ol>
          <li>Multiple small holes through cartilage with CO2 laser</li>
          <li>Promotes drainage + adhesion of layers</li>
          <li>Fewer sutures needed</li>
          <li>Equipment-dependent</li>
        </ol>
        <p><strong>E. Medical management (intralesional steroid):</strong></p>
        <ol>
          <li>Aspirate hematoma fully with 18-20 g needle + syringe</li>
          <li>Inject dexamethasone (4 mg/mL) ~ 0.5-1 mL into cavity</li>
          <li>Or methylprednisolone acetate (depo)</li>
          <li>Repeat weekly × 3-4 sessions</li>
          <li>~ 50-70% success in mild-moderate cases ✓</li>
          <li>Best for small hematoma, owner declines surgery, cat</li>
        </ol>
        <p><strong>Critical principles:</strong></p>
        <ul>
          <li>TREAT underlying otitis = MORE important than which surgical technique chosen ✨</li>
          <li>Sutures must go through-and-through to compress both leaves of pinna against cartilage</li>
          <li>Don't tie too tight (avascular necrosis)</li>
          <li>Allow drainage — closing incision = re-accumulation</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication (standard balanced anesthesia):</strong></p>
        <ul>
          <li>Acepromazine 0.01-0.03 mg/kg IM + Methadone 0.2-0.4 mg/kg IM (dog)</li>
          <li>Dexmedetomidine 5 mcg/kg IM + butorphanol 0.2 mg/kg IM (dog/cat)</li>
          <li>Cat: Ketamine + dexmed + butorphanol "kitty magic" or similar</li>
        </ul>
        <p><strong>Local block ✨:</strong></p>
        <ul>
          <li>Auriculopalpebral + great auricular nerve block</li>
          <li>Lidocaine 2% — 1-2 mL infiltrated at base of pinna</li>
          <li>Reduces inhalant requirement, smoother recovery</li>
        </ul>
        <p><strong>Induction + maintenance:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV to effect</li>
          <li>Isoflurane / sevoflurane</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Concurrent otitis externa with bacterial component:
            <ul>
              <li>Topical otic with antibiotic ongoing</li>
              <li>Systemic usually NOT needed unless cellulitis or rod-shaped bacteria</li>
              <li>If systemic: Cephalexin 22 mg/kg PO q12h × 7-14 d, or Amoxicillin-clavulanate 12.5 mg/kg PO q12h</li>
              <li>Pseudomonas: based on culture (fluoroquinolone, ticarcillin)</li>
            </ul>
          </li>
        </ul>
        <p><strong>Analgesia:</strong></p>
        <ul>
          <li>NSAID — start day of surgery:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 5-7 d (dog)</li>
              <li>Meloxicam dog: 0.1 mg/kg SC then 0.05 mg/kg PO q24h × 3-5 d</li>
              <li>Cat: robenacoxib 1-2 mg/kg SC × 3 d</li>
            </ul>
          </li>
          <li>± Tramadol (not great evidence in dogs but sometimes used as adjunct)</li>
        </ul>
        <p><strong>Allergic dermatitis (root cause therapy) ✨:</strong></p>
        <ul>
          <li>Apoquel (oclacitinib) 0.4-0.6 mg/kg PO q12h × 14 d, then q24h</li>
          <li>Cytopoint (lokivetmab) 2 mg/kg SC q4-8 weeks</li>
          <li>Cyclosporine 5 mg/kg PO q24h (slower onset 4-6 weeks)</li>
          <li>Glucocorticoids — short course only, avoid chronic</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3):</strong></p>
        <ul>
          <li>Bandage pinna up over head × 2-3 days then unbandage to allow drainage</li>
          <li>E-collar — STRICT × 14-21 days ✗ <em>(scratching = #1 cause of failure)</em></li>
          <li>Continue otitis treatment</li>
          <li>NSAID + monitor for GI upset</li>
        </ul>
        <p><strong>Day 4-21:</strong></p>
        <ul>
          <li>Continue e-collar</li>
          <li>Allow drainage from incision (will look messy — this is normal/desired)</li>
          <li>Daily gentle cleaning of pinna with saline-moistened gauze</li>
          <li>Recheck in 7 days — assess drainage, suture status, otitis improvement</li>
          <li>Recheck in 14-21 days — remove sutures (if non-absorbable)</li>
          <li>Some redness, scab — expected; if frank suppuration → wound infection</li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>CONTINUE allergic dermatitis management indefinitely ✨</li>
          <li>Routine ear cleaning (epi-otic, dilute vinegar, etc.) weekly to monthly depending on baseline disease</li>
          <li>Final cosmetic appearance: usually some pinna thickening / mild "cauliflower" — warn owner</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Re-accumulation ✗</strong> — most common complication
            <ul>
              <li>Causes: incomplete drainage, sutures too loose / too few, premature closure of incision, ongoing otitis/scratching</li>
              <li>Tx: re-open, redrain, more sutures, address otitis</li>
            </ul>
          </li>
          <li><strong>Cauliflower ear (pinnal scarring/thickening)</strong>:
            <ul>
              <li>Some degree of thickening is universal — fibrosis between cartilage layers</li>
              <li>Severity ~ duration of hematoma before treatment + surgical technique</li>
              <li>Cosmetic only — no functional impact</li>
              <li>Warn owner pre-op</li>
            </ul>
          </li>
          <li>Wound infection (uncommon — &lt; 5%)</li>
          <li>Suture reaction / dehiscence</li>
          <li>Avascular necrosis of pinna (sutures tied too tight) ✗ — partial pinnal sloughing</li>
          <li>Recurrence after sutures removed (if otitis not controlled)</li>
          <li>Bilateral disease (often allergic) — both ears need treatment</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Surgical repair with concurrent otitis Tx ✓:</strong>
            <ul>
              <li>Resolution: 80-95% with proper technique + underlying disease control</li>
              <li>Cosmetic outcome: variable — most have some pinnal thickening</li>
              <li>Time to full healing: 3-6 weeks</li>
            </ul>
          </li>
          <li><strong>Surgery WITHOUT addressing underlying otitis ✗:</strong>
            <ul>
              <li>Recurrence rate: 30-50% within months</li>
              <li>Why technique alone doesn't work — root cause must be controlled</li>
            </ul>
          </li>
          <li><strong>Medical management (steroid injection):</strong>
            <ul>
              <li>50-70% resolution for small/early hematoma</li>
              <li>Cosmetic outcome often better than surgery</li>
              <li>Best in cats and small hematomas</li>
            </ul>
          </li>
          <li><strong>Long-term (allergic patients):</strong>
            <ul>
              <li>Otitis externa: chronic disease — needs lifelong management</li>
              <li>~ 10-20% develop hematoma in OTHER ear over time if atopy not well controlled</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Aural hematoma = symptom, not the disease</strong> — ปัญหาจริงคือ otitis/allergy ที่ทำให้เกาหู<br><br>**ทุก case → cytology + treat ear infection** ก่อน/พร้อมผ่าตัด ✨ ไม่อย่างนั้น recurrence แน่นอน<br><br>⚠️ **Cosmetic warning** — บอก owner ก่อนผ่าตัดเลยว่าหูจะหนาขึ้นบ้าง — cauliflower ear เป็นสิ่งที่หลีกเลี่ยงไม่ได้ 100%</div>
      `,
    },
  },

  /* ============================================================
     ONCOLOGIC — General principles
  ============================================================ */
  {
    id: 'mass-excision-principles',
    titleEn: 'Cutaneous & Subcutaneous Mass Excision (General Principles)',
    titleTh: 'ผ่าตัดก้อนผิวหนัง — หลักการทั่วไป',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'oncologic',
    tags: ['mass excision', 'cutaneous mass', 'subcutaneous mass', 'surgical margins', 'mast cell tumor', 'soft tissue sarcoma', 'lipoma', 'sebaceous cyst', 'histopathology', 'wide excision', 'marginal excision'],
    aliases: ['mass removal', 'tumor removal', 'lump removal', 'ตัดก้อน', 'ผ่าก้อน', 'mass excision'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Surgical Oncology Principles',
    sections: {
      indications: `
        <ul>
          <li><strong>Cutaneous / subcutaneous masses</strong> requiring removal:
            <ul>
              <li>Suspected malignancy → diagnostic + therapeutic excision</li>
              <li>Confirmed malignancy → curative-intent surgery</li>
              <li>Symptomatic benign mass (interferes with movement, ulcerated, pruritic, infected)</li>
              <li>Cosmetic / owner preference (with appropriate caveats)</li>
            </ul>
          </li>
          <li><strong>Specific tumor types — surgery is curative:</strong>
            <ul>
              <li>Mast cell tumor (low/intermediate grade with adequate margins) ✓</li>
              <li>Soft tissue sarcoma (low-grade) — surgery + RT often curative</li>
              <li>Cutaneous lymphoma (rare — surgery rarely first-line)</li>
              <li>Squamous cell carcinoma (early)</li>
              <li>Melanoma (cutaneous — usually benign; oral/digit aggressive)</li>
              <li>Histiocytoma (often regress spontaneously)</li>
              <li>Sebaceous gland tumors</li>
              <li>Perianal adenoma</li>
              <li>Trichoepithelioma</li>
              <li>Lipoma — only if causing functional issue</li>
            </ul>
          </li>
          <li><strong>FNA cytology BEFORE surgery — ALWAYS ✨</strong>
            <ul>
              <li>Influences pre-op planning (margins, staging)</li>
              <li>FNA cost &lt; surgery cost — never skip</li>
              <li>Especially critical: any mass &gt; 1 cm, any rapidly growing mass, any mass on extremity (limb-sparing planning)</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Disseminated metastatic disease where surgery doesn't change outcome (palliative consideration)</li>
          <li>Unfit for general anesthesia (consider sedation + local for small superficial lesions)</li>
          <li>Inadequate staging — never operate on a malignant mass without staging the patient
            <ul>
              <li>3-view thoracic radiographs</li>
              <li>Abdominal US for malignant tumors</li>
              <li>Regional lymph node aspirate (always, even if non-palpable!)</li>
              <li>CBC, biochem, UA, coagulation profile if HSA/hepatic suspected</li>
            </ul>
          </li>
          <li>Mass too large for primary closure WITHOUT pre-surgical planning (reconstruction techniques: skin flaps, grafts) ⚠️</li>
          <li>Owner financial constraints — discuss honestly before partial surgery</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. FNA cytology — get the diagnosis FIRST ✨:</strong></p>
        <ul>
          <li>Aspirate every mass &gt; 1 cm (and many smaller)</li>
          <li>Multiple sites if heterogeneous</li>
          <li>Wait 1-3 d for cytology results before scheduling surgery (unless urgent)</li>
          <li>If non-diagnostic: incisional or punch biopsy before excision</li>
        </ul>
        <p><strong>2. Staging based on cytology result:</strong></p>
        <table style="width:100%; border-collapse:collapse; margin-top:0.5em;">
          <tr><th style="text-align:left; padding:4px 8px; border-bottom:1px solid var(--border);">Tumor type</th><th style="text-align:left; padding:4px 8px; border-bottom:1px solid var(--border);">Staging needed</th></tr>
          <tr><td style="padding:4px 8px;">MCT</td><td style="padding:4px 8px;">CBC, biochem, UA, 3-view thoracic rads, abd US, FNA regional LN, FNA spleen if abnormal</td></tr>
          <tr><td style="padding:4px 8px;">STS</td><td style="padding:4px 8px;">CBC, biochem, 3-view thoracic rads (low met rate but check)</td></tr>
          <tr><td style="padding:4px 8px;">Carcinoma (any)</td><td style="padding:4px 8px;">3-view rads, abd US, regional LN aspirate</td></tr>
          <tr><td style="padding:4px 8px;">Melanoma (oral/digit)</td><td style="padding:4px 8px;">Full staging — high met potential</td></tr>
          <tr><td style="padding:4px 8px;">Lipoma</td><td style="padding:4px 8px;">Confirm cytology only; surgery only if symptomatic</td></tr>
          <tr><td style="padding:4px 8px;">Histiocytoma</td><td style="padding:4px 8px;">Often regresses — observe 2-3 mo first</td></tr>
        </table>
        <p><strong>3. Pre-op planning (CRITICAL) ✨:</strong></p>
        <ul>
          <li>Map margins on patient with marker BEFORE incision</li>
          <li>Plan closure orientation (parallel to skin tension lines)</li>
          <li>Anticipate need for skin flap / grafting (large masses on extremity)</li>
          <li>Prepare adequate-size surgical site (clip wide!)</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical margins concept ✨:</strong></p>
        <table style="width:100%; border-collapse:collapse; margin-top:0.5em;">
          <tr><th style="text-align:left; padding:4px 8px; border-bottom:1px solid var(--border);">Tumor type</th><th style="text-align:left; padding:4px 8px; border-bottom:1px solid var(--border);">Lateral margin</th><th style="text-align:left; padding:4px 8px; border-bottom:1px solid var(--border);">Deep margin</th></tr>
          <tr><td style="padding:4px 8px;">MCT (low/intermed grade)</td><td style="padding:4px 8px;">2 cm</td><td style="padding:4px 8px;">1 fascial plane</td></tr>
          <tr><td style="padding:4px 8px;">MCT (high grade)</td><td style="padding:4px 8px;">3 cm</td><td style="padding:4px 8px;">1-2 fascial planes</td></tr>
          <tr><td style="padding:4px 8px;">STS (low-intermed grade)</td><td style="padding:4px 8px;">3 cm</td><td style="padding:4px 8px;">1 fascial plane</td></tr>
          <tr><td style="padding:4px 8px;">STS (high grade)</td><td style="padding:4px 8px;">3-5 cm</td><td style="padding:4px 8px;">1-2 fascial planes</td></tr>
          <tr><td style="padding:4px 8px;">Cutaneous SCC, carcinoma</td><td style="padding:4px 8px;">1-2 cm</td><td style="padding:4px 8px;">1 fascial plane</td></tr>
          <tr><td style="padding:4px 8px;">Benign (lipoma, cyst)</td><td style="padding:4px 8px;">Marginal (just outside capsule)</td><td style="padding:4px 8px;">Marginal</td></tr>
          <tr><td style="padding:4px 8px;">Histiocytoma</td><td style="padding:4px 8px;">Marginal (after observation)</td><td style="padding:4px 8px;">Marginal</td></tr>
        </table>
        <p><strong>General excision technique:</strong></p>
        <ol>
          <li>Mark margins with sterile marker (centered on mass)</li>
          <li>Plan elliptical incision parallel to skin tension lines (3:1 length:width ratio for primary closure)</li>
          <li>Incise skin with #10 blade firmly (single stroke when possible)</li>
          <li>Continue dissection through SQ to deep margin (predetermined fascial plane)</li>
          <li>DO NOT cut into tumor pseudocapsule ✗ <em>(seeds tumor cells)</em></li>
          <li>Atraumatic handling — DO NOT squeeze tumor ("don't milk the tumor") ✗
            <ul>
              <li>MCT: histamine release, anaphylaxis-like reaction during surgery</li>
              <li>Any tumor: shedding cells into wound bed</li>
            </ul>
          </li>
          <li>Hemostasis throughout (tumor bed bleeding obscures margins)</li>
          <li>Lavage with saline (not water — tumor cells swell + lyse with hypotonic, but evidence is mixed; saline standard)</li>
          <li>Close in layers based on tension:
            <ul>
              <li>SQ: 3-0 PDS or Monocryl, simple continuous</li>
              <li>Skin: simple interrupted or intradermal cosmetic with 3-0 nylon or Monocryl</li>
              <li>Tension-relieving sutures if closure tight (walking sutures, mattress)</li>
            </ul>
          </li>
        </ol>
        <p><strong>SUBMIT EXCISED TISSUE TO HISTOPATH — ALWAYS ✨:</strong></p>
        <ul>
          <li>Orient with sutures (e.g., 1 suture cranial, 2 sutures lateral) — communicate to pathologist</li>
          <li>Ink margins with India ink or surgical marker before fixation (helps pathologist assess)</li>
          <li>Place in 10% formalin (10× tissue volume)</li>
          <li>Submit with detailed history + concerning features</li>
          <li>Request: tumor type, grade, margins (complete vs marginal vs incomplete), mitotic index, immunohistochemistry if needed</li>
        </ul>
        <p><strong>Reconstruction options if primary closure not possible:</strong></p>
        <ul>
          <li>Local subdermal plexus flap (advancement, rotation, transposition)</li>
          <li>Axial pattern flap (caudal superficial epigastric, thoracodorsal, etc.) for larger defects</li>
          <li>Free skin graft (mesh graft) if no flap option</li>
          <li>Second intention healing (small wounds, distal limb)</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Standard balanced protocol</li>
          <li><strong>Mast cell tumor — special considerations ✨:</strong>
            <ul>
              <li>Pre-treat with diphenhydramine 2-4 mg/kg IM 30 min pre-op (H1 blocker)</li>
              <li>Famotidine 0.5-1 mg/kg IV/SC pre-op (H2 blocker)</li>
              <li>Reduces histamine release-related complications during tumor manipulation</li>
              <li>Avoid morphine/meperidine (histamine release) — use methadone, hydromorphone, fentanyl</li>
            </ul>
          </li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV or alfaxalone 1-2 mg/kg IV</li>
          <li>Avoid thiopental in MCT (histamine release)</li>
        </ul>
        <p><strong>Local block:</strong></p>
        <ul>
          <li>Ring block with lidocaine + bupivacaine around incision (NOT through tumor) — ↓ MAC, smoother recovery</li>
          <li>Lidocaine 4 mg/kg + bupivacaine 1-2 mg/kg max</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Clean elective small mass: NOT routinely indicated</li>
          <li>Large mass / extensive surgery / immunocompromised: Cefazolin 22 mg/kg IV at induction, repeat q90 min</li>
          <li>Post-op antibiotics: only if contamination, infection, or significant tissue handling — Cephalexin 22 mg/kg PO q12h × 5-7 d</li>
        </ul>
        <p><strong>Analgesia:</strong></p>
        <ul>
          <li>NSAID — start day of surgery:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 5-7 d</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h × 3-5 d</li>
            </ul>
          </li>
          <li>± Tramadol 2-5 mg/kg PO q8-12h adjunct (controversial efficacy in dogs)</li>
          <li>Larger surgeries: Methadone 0.1-0.2 mg/kg IV/IM q4h × 24 h, then transition to PO NSAID</li>
        </ul>
        <p><strong>MCT systemic Tx (post-op based on grade/stage):</strong></p>
        <ul>
          <li>Toceranib (Palladia) 2.7-3.25 mg/kg PO 3×/wk — for high-grade or metastatic MCT</li>
          <li>Vinblastine, prednisolone CCNU — chemo protocols based on oncologist consult</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3):</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Incision check — bleeding, swelling, dehiscence</li>
          <li>Cold compress if significant edema (first 24 h)</li>
          <li>E-collar — STRICT 10-14 d (or until sutures removed) ✗</li>
          <li>NSAID + monitor</li>
        </ul>
        <p><strong>Day 4-14:</strong></p>
        <ul>
          <li>Restricted activity — no running, jumping, swimming × 14 d</li>
          <li>Keep incision dry × 10-14 d</li>
          <li>Daily incision check by owner — photos can help</li>
          <li>Suture removal day 10-14</li>
        </ul>
        <p><strong>Histopath review (CRITICAL VISIT) ✨:</strong></p>
        <ul>
          <li>Schedule recheck specifically to discuss histopath</li>
          <li>Assess: tumor type, grade, margins (clean vs dirty), mitotic index</li>
          <li>Decision tree based on result:
            <ul>
              <li><strong>Complete margins + low/intermed grade:</strong> recheck schedule (q3 mo × 1-2 yr) ✓</li>
              <li><strong>Incomplete margins:</strong> options are re-excise wider, RT, or (some grade I MCT or low-grade STS) close monitoring</li>
              <li><strong>High-grade tumors:</strong> oncologist referral for adjuvant chemo</li>
              <li><strong>Metastasis on staging:</strong> palliative care discussion vs aggressive Tx</li>
            </ul>
          </li>
        </ul>
        <p><strong>Long-term monitoring:</strong></p>
        <ul>
          <li>Recheck schedule based on tumor type:
            <ul>
              <li>Low-risk benign: annual</li>
              <li>MCT grade I/II: q3 mo × 1 yr, then q6 mo</li>
              <li>STS: q3-6 mo × 2-3 yr (recurrence risk)</li>
              <li>Carcinoma: q3 mo × 1 yr, with imaging recheck</li>
            </ul>
          </li>
          <li>Owner education: monitor for new lumps, take photos, palpate monthly</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Incomplete margins ✗</strong> — most common "complication"
            <ul>
              <li>Causes: tumor extends beyond visible/palpable mass, infiltrative growth pattern</li>
              <li>Tx options:
                <ul>
                  <li>Re-excision (wider margins, redo within 2-4 weeks)</li>
                  <li>Radiation therapy</li>
                  <li>Active surveillance (low-grade tumors with minor "dirty" margins, owner discussion)</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Local recurrence:</strong>
            <ul>
              <li>Usually appears within 6-24 months</li>
              <li>Associated with incomplete margins, high grade, or aggressive subtype</li>
              <li>Treatment: aggressive re-excision, RT, chemo</li>
            </ul>
          </li>
          <li>Seroma — fluid collection in dead space; usually self-resolves; aspirate if uncomfortable</li>
          <li>Wound dehiscence — tension, infection, licking, poor closure technique</li>
          <li>Infection — usually superficial, treat with cephalosporin</li>
          <li>Skin necrosis (large advancement flap, axial flap that fails) — debride, allow to heal by 2nd intention or repeat reconstruction</li>
          <li>Hemorrhage — usually intraoperative; large vessel ligation if tumor next to neurovascular bundle</li>
          <li>Distant metastasis (already present at surgery, manifests later)</li>
          <li><strong>MCT-specific:</strong>
            <ul>
              <li>Histamine-release reaction during surgery (hypotension, bradycardia, GI ulceration) ✗</li>
              <li>Pre-op H1/H2 blockade essential</li>
              <li>Tumor manipulation = release event</li>
            </ul>
          </li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Outcomes vary HUGELY by tumor type — not generalizable. Examples ✨:</strong></li>
          <li><strong>Lipoma (benign):</strong>
            <ul>
              <li>Cured by excision ✓</li>
              <li>Recurrence 0-5%</li>
              <li>May develop additional lipomas elsewhere</li>
            </ul>
          </li>
          <li><strong>Mast cell tumor:</strong>
            <ul>
              <li>Grade I (low): 90-95% cure with complete margins ✓</li>
              <li>Grade II (intermed): 75-85% cure with complete margins, MST &gt; 4 yr</li>
              <li>Grade III (high): high met rate, MST 6-12 mo even with surgery + chemo ✗</li>
              <li>Patnaik vs Kiupel grading — Kiupel 2-tier (low/high) more clinically useful</li>
              <li>Stage I (single tumor, no LN met): much better than stage II+</li>
            </ul>
          </li>
          <li><strong>Soft tissue sarcoma:</strong>
            <ul>
              <li>Low grade with complete margins: 80-90% cure rate</li>
              <li>Intermediate grade: 50-70%</li>
              <li>High grade: high local recurrence + ~ 40% met rate, MST 1-3 yr with multimodal Tx</li>
              <li>Local recurrence is more common problem than mets</li>
            </ul>
          </li>
          <li><strong>Cutaneous SCC:</strong>
            <ul>
              <li>Sun-induced (white cats): excellent if early, locally recurrent if incomplete</li>
              <li>Digital SCC: more aggressive, higher met rate</li>
            </ul>
          </li>
          <li><strong>Histiocytoma:</strong> often spontaneously regress 1-3 mo, surgery curative if needed ✓</li>
          <li><strong>Sebaceous adenoma / cyst:</strong> excellent ✓</li>
          <li><strong>Perianal adenoma (intact male):</strong> castration alone may resolve; excision + castration curative</li>
        </ul>
        <div class="callout">💡 <strong>FNA before surgery — every time</strong> ✨ — เปลี่ยน plan ทั้งหมด: margins, staging, even decision to operate vs not<br><br>**Margins matter more than skill** — บาง tumor (high-grade MCT, STS) ต้องตัดแคบไม่ได้แม้ง่ายดาย เก่งแค่ไหนก็ recurrent<br><br>⚠️ **Don't do "lumpectomy without diagnosis"** — ตัด lipoma คิดว่าง่าย ปรากฏเป็น MCT grade II margin ไม่พอ → กลับมาแก้ยากกว่าเดิม<br><br>✗ **MCT ก่อนผ่าตัด ต้อง pre-medicate** ด้วย diphenhydramine + famotidine กัน histamine reaction</div>
      `,
    },
  },

  /* ============================================================
     SOFT TISSUE — Anal sac
  ============================================================ */
  {
    id: 'anal-sacculectomy',
    titleEn: 'Anal Sacculectomy',
    titleTh: 'ผ่าตัดเอาต่อมข้างทวารหนัก',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'soft-tissue',
    tags: ['anal sacculectomy', 'anal sac removal', 'apocrine adenocarcinoma', 'AGASACA', 'anal sacculitis', 'anal sac abscess', 'caudal rectal nerve', 'fecal incontinence', 'paraneoplastic hypercalcemia'],
    aliases: ['anal sac removal', 'anal sacculectomy', 'ผ่าต่อมข้างก้น', 'AGASACA'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Anal Sacs',
    sections: {
      indications: `
        <ul>
          <li><strong>Chronic / recurrent anal sacculitis ✗</strong> — failure of medical management
            <ul>
              <li>Repeated impaction despite expression + dietary management</li>
              <li>Recurrent infection</li>
              <li>Significant owner inconvenience / animal discomfort</li>
            </ul>
          </li>
          <li><strong>Anal sac abscess (recurrent or non-resolving)</strong>
            <ul>
              <li>Single abscess: usually drain + medical Tx first</li>
              <li>Recurrent: surgical removal indicated</li>
            </ul>
          </li>
          <li><strong>Anal sac neoplasia ✗ — UNCONDITIONAL surgery</strong>
            <ul>
              <li>Apocrine gland adenocarcinoma of anal sac (AGASACA) — malignant, invasive, mets to sublumbar LN ✨</li>
              <li>Often presents as: firm mass at 4 or 8 o'clock position rectally, paraneoplastic hypercalcemia, sublumbar lymphadenomegaly</li>
              <li>Adenoma (rare in anal sac — most are carcinoma)</li>
              <li>SUSPECTED MASS = REMOVE ✨ (cytology often non-diagnostic; histopath after excision)</li>
            </ul>
          </li>
          <li>Persistent fistula formation</li>
          <li>Owner request after multiple bouts (informed consent re: complications)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Acute active sac inflammation/abscess — drain + treat first, surgery in 4-6 weeks when tissue healed</li>
          <li>Severe systemic illness</li>
          <li>Coagulopathy</li>
          <li>Significant fecal incontinence already present (procedure may worsen) ⚠️</li>
          <li>Owner doesn't understand permanent risk of incontinence (informed consent crucial)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup:</strong></p>
        <ul>
          <li>PE — including digital rectal exam ✨
            <ul>
              <li>Palpate sacs at 4 + 8 o'clock</li>
              <li>Mass? Size, fixation, asymmetry</li>
              <li>Sublumbar lymphadenopathy?</li>
            </ul>
          </li>
          <li>If MASS or asymmetry suspected:
            <ul>
              <li><strong>Ionized calcium ✨</strong> — paraneoplastic hypercalcemia in 25-50% of AGASACA</li>
              <li>FNA cytology of mass + sublumbar LN</li>
              <li>3-view thoracic radiographs (mets uncommon to lung but check)</li>
              <li>Abdominal US — sublumbar LN, hepatic mets, sometimes spleen</li>
              <li>CT abdomen/pelvis (gold standard for AGASACA staging — assess sublumbar LN size + invasion)</li>
            </ul>
          </li>
          <li>Standard pre-anesthesia: CBC, biochem, UA</li>
          <li>Coagulation profile if suspected systemic disease</li>
        </ul>
        <p><strong>2. Pre-op preparation:</strong></p>
        <ul>
          <li>Withhold food 12 h, water 2 h pre-op (standard)</li>
          <li>Manual fecal evacuation prior to anesthesia (or warm enema night before — controversial; some surgeons skip)</li>
          <li>Empty bladder after induction</li>
        </ul>
        <p><strong>3. Anesthesia plan:</strong></p>
        <ul>
          <li>Standard balanced protocol</li>
          <li>Position: ventral recumbency (sternal) with pelvis elevated, tail tied over back ✨</li>
          <li>Or perineal stand: dorsal recumbency with hindquarters elevated 45°</li>
          <li>Epidural anesthesia HIGHLY recommended for analgesia + ↓ MAC ✨</li>
        </ul>
      `,
      technique: `
        <p><strong>Critical anatomy ✨:</strong></p>
        <ul>
          <li>Anal sacs at 4 + 8 o'clock between internal + external anal sphincters</li>
          <li>Caudal rectal nerve (branch of pudendal) runs DORSOLATERAL to sac — nerve damage = fecal incontinence ✗</li>
          <li>Each sac drains via duct that opens at mucocutaneous junction</li>
          <li>Identify duct opening before/during surgery (landmark)</li>
        </ul>
        <p><strong>A. Closed technique (preferred for healthy sac, neoplasia):</strong></p>
        <ol>
          <li>Place purse-string suture around anus (with stay sutures) to keep clean operative field</li>
          <li>Insert lubricated index finger into sac via duct OR insert blunt hemostat / Foley catheter into sac to define structure ✨</li>
          <li>Some surgeons inject sac with paraffin wax or methylcellulose to firm up structure → easier dissection</li>
          <li>Curvilinear skin incision over sac at 4 or 8 o'clock, length ~ 2-3 cm</li>
          <li>Blunt + sharp dissection around sac, hugging the sac wall closely <em>(avoid rectal mucosa medially, caudal rectal nerve dorsolaterally)</em></li>
          <li>Free sac circumferentially to its duct</li>
          <li>Ligate duct close to anus with absorbable suture (3-0 PDS), transect</li>
          <li>Remove sac intact</li>
          <li>Lavage wound, hemostasis</li>
          <li>Close in 2-3 layers:
            <ul>
              <li>Deep: 3-0 PDS interrupted (re-approximate sphincter muscle)</li>
              <li>SQ: 4-0 PDS continuous</li>
              <li>Skin: 4-0 nylon or absorbable intradermal</li>
            </ul>
          </li>
          <li>Repeat opposite side if bilateral disease</li>
          <li>Remove purse-string suture ✗ <em>(don't forget!)</em></li>
        </ol>
        <p><strong>B. Open technique (used for abscess, very large sac, ruptured tumor):</strong></p>
        <ol>
          <li>Insert grooved director or scalpel into sac via duct opening</li>
          <li>Incise sac open from duct opening through skin → exposes sac mucosa</li>
          <li>Dissect around sac mucosa from inside-out</li>
          <li>Excise sac wall completely with associated skin</li>
          <li>Close as above</li>
          <li>Pros: better for friable / abscessed sac; ensures complete removal</li>
          <li>Cons: more tissue disruption, slightly higher complication rate</li>
        </ol>
        <p><strong>C. AGASACA-specific:</strong></p>
        <ol>
          <li>Approach as closed technique but WIDER margins around mass (1-2 cm if possible)</li>
          <li>Avoid rupturing capsule if possible (seeds tumor)</li>
          <li>If sublumbar LN enlarged: discuss with owner about staged ventral midline laparotomy for sublumbar LN extirpation (pre or post anal sac surgery, often as second procedure)</li>
          <li>Submit to histopath — request margins, mitotic index, IHC if needed</li>
        </ol>
        <p><strong>Critical principles:</strong></p>
        <ul>
          <li>STAY CLOSE TO SAC WALL ✨ — avoids damaging caudal rectal nerve</li>
          <li>Identify + protect external anal sphincter musculature</li>
          <li>Hemostasis meticulous (bleeding obscures critical structures)</li>
          <li>Reapproximate sphincter musculature carefully on closure (continence preservation)</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Acepromazine 0.01-0.03 mg/kg IM + Methadone 0.3-0.5 mg/kg IM (perineal surgery painful — opioid important) ✨</li>
          <li>Or Dexmedetomidine 5 mcg/kg IM + opioid</li>
        </ul>
        <p><strong>Epidural ✨ (highly recommended):</strong></p>
        <ul>
          <li>Place after induction, before surgical prep</li>
          <li>Lumbosacral epidural with:
            <ul>
              <li>Bupivacaine 0.5% — 1 mL/4.5-7 kg (max 1 mg/kg) <strong>+</strong></li>
              <li>Preservative-free morphine 0.1 mg/kg</li>
            </ul>
          </li>
          <li>Provides 18-24 h post-op analgesia ✓</li>
          <li>Watch for: urinary retention, hindlimb weakness 4-6 h post-op</li>
        </ul>
        <p><strong>Induction + maintenance:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV or alfaxalone 1-2 mg/kg IV</li>
          <li>Isoflurane / sevoflurane to effect</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li><strong>Always indicated</strong> ✨ <em>(perineal area heavily contaminated)</em>:
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction, repeat q90 min</li>
              <li>+ Metronidazole 10-15 mg/kg IV (anaerobic coverage) — many add this perioperatively</li>
            </ul>
          </li>
          <li>Post-op: Cephalexin 22 mg/kg PO q12h × 7-10 d <strong>+</strong> Metronidazole 10-15 mg/kg PO q12h × 7 d</li>
          <li>Or Amoxicillin-clavulanate 12.5 mg/kg PO q12h × 7-10 d (covers anaerobes too)</li>
        </ul>
        <p><strong>Stool softeners (CRITICAL) ✨:</strong></p>
        <ul>
          <li>Lactulose 0.5-1 mL/kg PO q8-12h × 5-7 d <em>(prevents painful straining + tearing of fresh sutures)</em></li>
          <li>Or Docusate sodium 50-200 mg PO q12-24h</li>
          <li>Adjust to achieve soft (not liquid) stool</li>
        </ul>
        <p><strong>Analgesia:</strong></p>
        <ul>
          <li>NSAID — start day of surgery + continue × 5-7 d:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h</li>
            </ul>
          </li>
          <li>Opioid post-op × 24-48 h:
            <ul>
              <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24 h</li>
              <li>Then transition to PO buprenorphine 0.02 mg/kg PO/buccal q8h × 2-3 d</li>
              <li>Or transmucosal buprenorphine in cats</li>
            </ul>
          </li>
          <li>± Gabapentin 5-10 mg/kg PO q8-12h × 5-7 d (adjunct, neuropathic pain coverage)</li>
        </ul>
        <p><strong>AGASACA-specific (post-surgery):</strong></p>
        <ul>
          <li>If hypercalcemia: usually resolves within days of removal of secreting tumor</li>
          <li>If persistent / severe: bisphosphonates (pamidronate 1-2 mg/kg IV q3-4 wk), fluids, calcitonin</li>
          <li>Adjuvant chemo: carboplatin, mitoxantrone, melphalan — discuss with oncologist</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-48h):</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Watch for fecal incontinence as epidural wears off (4-6 h, may persist 24-48 h transiently)</li>
          <li>Urinary retention (epidural side effect) — express bladder if not urinating</li>
          <li>Cold compress to perineum × 24 h</li>
          <li>E-collar — STRICT × 14 d ✗</li>
          <li>Pain management as above</li>
        </ul>
        <p><strong>Day 2-7:</strong></p>
        <ul>
          <li>Stool softeners — KEY! ✨ avoid hard stool tearing sutures</li>
          <li>Antibiotics</li>
          <li>NSAID + opioid → NSAID alone</li>
          <li>Soft food diet × 2 weeks</li>
          <li>Daily incision check — perineal area difficult to keep clean
            <ul>
              <li>Gentle wipe with damp cloth after defecation</li>
              <li>Watch for swelling, drainage, dehiscence</li>
            </ul>
          </li>
          <li>Restricted activity — leash walks only</li>
        </ul>
        <p><strong>Day 8-21:</strong></p>
        <ul>
          <li>Continue stool softener as needed</li>
          <li>Suture removal day 10-14 (if non-absorbable)</li>
          <li>Recheck for fecal continence assessment ✨
            <ul>
              <li>Owner reports?</li>
              <li>Resting tone on rectal exam?</li>
              <li>If transient incontinence — usually improves over 4-8 weeks</li>
              <li>If permanent — counseling, management</li>
            </ul>
          </li>
        </ul>
        <p><strong>Histopath review:</strong></p>
        <ul>
          <li>If benign sacculitis: routine recheck only</li>
          <li>If AGASACA: oncologist referral, staging completion, adjuvant Tx discussion ✨</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Fecal incontinence ✗</strong> — most feared complication
            <ul>
              <li>Caudal rectal nerve damage (dorsolateral to sac)</li>
              <li>External anal sphincter damage</li>
              <li>Rate: ~ 10-15% transient (resolves in 4-8 weeks), 1-3% permanent in skilled hands</li>
              <li>Higher rate with: bilateral surgery, AGASACA (deeper dissection), open technique on infected tissue</li>
              <li>Permanent incontinence: management with diet, scheduled feeding, sometimes adult diapers</li>
              <li>Prevention: stay close to sac wall, gentle dissection ✨</li>
            </ul>
          </li>
          <li><strong>Wound infection / dehiscence:</strong>
            <ul>
              <li>Common-ish in this contaminated area</li>
              <li>Tx: open + lavage, antibiotics, may need second-intention healing</li>
            </ul>
          </li>
          <li>Recurrence (rare with complete sac removal):
            <ul>
              <li>If small piece of sac left → continued discharge / fistula</li>
              <li>Tx: revision surgery</li>
            </ul>
          </li>
          <li>Rectoperineal fistula (very rare — full-thickness rectal injury)</li>
          <li>Perianal hernia (chronic tenesmus / weakened pelvic diaphragm)</li>
          <li>Tenesmus / dyschezia post-op (pain) — analgesia + softener manage</li>
          <li>Urinary retention from epidural (transient, 12-48 h)</li>
          <li>Hindlimb weakness from epidural (transient, hours)</li>
          <li><strong>AGASACA-specific:</strong>
            <ul>
              <li>Local recurrence ~ 30%</li>
              <li>Distant metastasis (sublumbar LN at presentation 50-80%, lung 5-10%)</li>
              <li>Hypercalcemic crisis pre-op or persistent post-op</li>
            </ul>
          </li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Benign sacculitis / chronic impaction ✓:</strong>
            <ul>
              <li>Excellent outcome — &gt; 95% cure of original problem</li>
              <li>Continence preserved in 97-99% with skilled surgery</li>
              <li>Recovery 2-3 weeks</li>
            </ul>
          </li>
          <li><strong>Anal sac abscess (after drainage + medical Tx, then elective sacculectomy):</strong>
            <ul>
              <li>Excellent — eliminates recurrent abscess problem</li>
              <li>Slightly higher complication rate due to inflammation</li>
            </ul>
          </li>
          <li><strong>AGASACA (apocrine gland adenocarcinoma) ✗:</strong>
            <ul>
              <li>Local control with surgery: ~ 50-70% (margins often dirty due to anatomy)</li>
              <li>Sublumbar LN metastasis at presentation: 50-80%</li>
              <li>If LN extirpation feasible: improves prognosis</li>
              <li>Distant mets (lung, liver, bone): 10-20% at presentation, more later</li>
              <li><strong>MST ranges:</strong>
                <ul>
                  <li>Surgery alone (no LN met): 18-24 months</li>
                  <li>Surgery + LN extirpation + chemo: 18-30 months</li>
                  <li>LN met present: 6-12 months (LN extirpation can help)</li>
                  <li>Distant mets: 6-9 months</li>
                </ul>
              </li>
              <li>Adjuvant chemo: carboplatin, melphalan — modest improvement in MST</li>
              <li>Hypercalcemia resolves with surgery in 90%+ if no residual tumor</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>No more anal sac expression needed</li>
              <li>Most dogs have no functional change — defecation normal</li>
              <li>Some get mild change in stool consistency — usually self-resolving</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Anal sac mass = always suspect AGASACA</strong> ✗ — เจอ mass = ผ่าออก + biopsy + check ionized Ca + sublumbar LN<br><br>**Stool softener × 5-7 d** ✨ = สำคัญที่สุด post-op อย่าให้อึแข็งฉีก suture<br><br>⚠️ **Counsel owner about incontinence risk** ก่อนผ่าตัด — 10-15% transient, 1-3% permanent — เป็น informed consent ที่ละเลยไม่ได้</div>
      `,
    },
  },

  /* ============================================================
     SOFT TISSUE — Gastric (emergency)
  ============================================================ */
  {
    id: 'gdv-correction',
    titleEn: 'Gastric Dilatation-Volvulus (GDV) Correction + Gastropexy',
    titleTh: 'แก้ไข GDV + Gastropexy',
    type: 'surgery',
    species: ['dog'],
    system: 'soft-tissue',
    tags: ['GDV', 'gastric dilatation volvulus', 'bloat', 'gastropexy', 'incisional gastropexy', 'belt-loop gastropexy', 'gastric necrosis', 'lactate', 'ventricular arrhythmia', 'derotation', 'splenectomy'],
    aliases: ['GDV', 'bloat', 'gastric torsion', 'ท้องบิด', 'กระเพาะบิด', 'ผ่าตัดท้องบิด'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Stomach (GDV)',
    sections: {
      indications: `
        <ul>
          <li><strong>Acute GDV ✗</strong> — true surgical emergency
            <ul>
              <li>Gastric distension + 180-360° rotation around mesenteric axis</li>
              <li>Compromises blood flow → gastric wall necrosis</li>
              <li>Caval compression → obstructive shock</li>
              <li>Mortality if untreated: 100% within hours</li>
              <li>Mortality with prompt surgery: 15-30% ✨</li>
            </ul>
          </li>
          <li><strong>Classic signalment:</strong>
            <ul>
              <li>Large/giant breed dogs (Great Dane, GSD, Std Poodle, Weimaraner, Setters, Bloodhound, Akita)</li>
              <li>Deep-chested conformation</li>
              <li>Middle-aged to older (mean 7 yr)</li>
              <li>1st-degree relative with GDV (genetic component)</li>
              <li>Eating once daily, eating quickly, raised bowls (controversial), stress</li>
            </ul>
          </li>
          <li><strong>Prophylactic gastropexy ✨:</strong>
            <ul>
              <li>At-risk breeds at time of OHE/neuter</li>
              <li>After previous simple gastric dilatation (no volvulus)</li>
              <li>Concurrent with other elective laparotomy</li>
              <li>Laparoscopic option in younger dogs</li>
              <li>Reduces GDV recurrence/incidence from 50-80% → 2-5% ✓</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>NONE absolute</strong> — GDV is life-threatening; surgery indicated unless owner declines</li>
          <li>Relative considerations:
            <ul>
              <li>Pre-op cardiac arrest</li>
              <li>Severe DIC (poor prognosis discussion with owner)</li>
              <li>Lactate &gt; 9-10 mmol/L despite resuscitation → grim prognosis (informed discussion) ⚠️</li>
              <li>Owner financial limitations — discuss honestly before surgery</li>
            </ul>
          </li>
          <li>Aged debilitated patient with multiple comorbidities — case-by-case</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Stabilization FIRST (5-15 min) ✨ — surgery does NOT come before resuscitation:</strong></p>
        <ul>
          <li><strong>Two large-bore IV catheters</strong> in cephalic veins (saphenous = compromised by caval syndrome)
            <ul>
              <li>14-16 g in giant breeds, 16-18 g in large</li>
            </ul>
          </li>
          <li><strong>Shock fluid resuscitation:</strong>
            <ul>
              <li>Crystalloids: 20-30 mL/kg IV bolus over 15 min, reassess, repeat to total 60-90 mL/kg/h until perfusion</li>
              <li>± Hypertonic saline 7.5% — 4-5 mL/kg over 5-10 min (rapid volume expansion in giant breeds) ✨</li>
              <li>± Colloid (hetastarch 5-10 mL/kg) if hypoproteinemia or persistent shock</li>
            </ul>
          </li>
          <li><strong>Gastric decompression — concurrent with fluids:</strong>
            <ul>
              <li>Orogastric tube (OG tube) attempt first — if can pass, decompress immediately ✨</li>
              <li>If OG tube fails → percutaneous trochar gastrocentesis with 16-18 g IV catheter, 2-3 sites caudal to last rib on right side (where gas-distended stomach is most superficial)</li>
              <li>Listen/feel for gas escape</li>
              <li>Reduces shock dramatically</li>
            </ul>
          </li>
        </ul>
        <p><strong>2. Diagnostics (rapid):</strong></p>
        <ul>
          <li>Right lateral abdominal radiograph — <strong>gold standard ✨</strong>
            <ul>
              <li>"Double bubble" / "Popeye sign" / "compartmentalization"</li>
              <li>Pylorus displaced cranially + dorsally (gas-filled, separated from gastric body by tissue band)</li>
              <li>Free gas = perforation (rare, dire)</li>
            </ul>
          </li>
          <li>CBC, biochem, electrolytes, BG</li>
          <li><strong>Lactate ✨</strong> — major prognostic marker:
            <ul>
              <li>&lt; 6 mmol/L: 99% survive</li>
              <li>6-9: 60-80% survive</li>
              <li>&gt; 9: 30-60% survive (especially if doesn't fall with fluids)</li>
              <li>↓ &gt; 50% after fluids = good prognosis</li>
            </ul>
          </li>
          <li>Coagulation panel (PT/aPTT) — DIC common</li>
          <li>Blood typing/crossmatch — anticipate transfusion</li>
          <li>Continuous ECG monitoring — VPCs in 40-60% pre-op ✗</li>
        </ul>
        <p><strong>3. Pre-op meds:</strong></p>
        <ul>
          <li>Antibiotics: Cefazolin 22 mg/kg IV at induction</li>
          <li>± lidocaine CRI starting pre-op if multiple VPCs (see drugs section)</li>
          <li>Gastric protectants: Omeprazole 1 mg/kg IV q12h start now</li>
          <li>Antiemetic: Maropitant 1 mg/kg IV (anti-emetic + visceral analgesia)</li>
        </ul>
        <p><strong>4. Anesthesia plan ✨:</strong></p>
        <ul>
          <li>Critical patient — ASA IV-V — minimize cardio-depressants</li>
          <li>Pre-oxygenate × 5 min</li>
          <li>Etomidate 1-2 mg/kg IV (cardio-stable) <em>or</em> careful low-dose propofol 1-2 mg/kg IV titrated</li>
          <li>Avoid: thiopental, ketamine boluses (can worsen tachyarrhythmias), high-dose alpha-2 agonists</li>
          <li>Maintenance: Isoflurane LOW; supplement with fentanyl CRI (5-10 mcg/kg/h)</li>
          <li>Lidocaine CRI 30-50 mcg/kg/min ongoing (anti-arrhythmic + analgesic) ✨</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence:</strong></p>
        <ol>
          <li><strong>Ventral midline laparotomy</strong> — extensive (xiphoid to pubis if needed)</li>
          <li><strong>Decompress stomach if not already done</strong>:
            <ul>
              <li>If OG tube placed: continue decompression</li>
              <li>If not: place OG tube now (anesthetist passes), suction gastric content</li>
            </ul>
          </li>
          <li><strong>Derotate stomach ✨</strong>:
            <ul>
              <li>Most common rotation: clockwise (when viewed from caudal) — pylorus moves from right to left and ventrally, then to right side</li>
              <li>To derotate: <em>"counterclockwise from surgeon's perspective"</em></li>
              <li>Gently elevate pylorus from left → cranially → right (its normal position)</li>
              <li>Greater curvature should now be on left (normal anatomy)</li>
              <li>If OG tube was passing freely → confirms successful derotation</li>
            </ul>
          </li>
          <li><strong>Assess gastric viability ✨</strong> — most critical decision:
            <ul>
              <li>Color: pink/red = viable; gray/green/black = necrotic ✗</li>
              <li>Wall thickness: thin/friable = compromised</li>
              <li>Peristalsis when stimulated = good</li>
              <li>Bleeding when cut = good (no bleeding = dead tissue)</li>
              <li>Pulse in gastroepiploic vessels = perfused</li>
              <li>Most affected area: greater curvature, fundus (watershed)</li>
              <li>Wait 5-10 min after derotation — perfusion may improve</li>
            </ul>
          </li>
          <li><strong>If gastric necrosis:</strong>
            <ul>
              <li>Partial gastrectomy of necrotic area (full-thickness, 2-cm margin into healthy tissue)</li>
              <li>Close: 2-layer with 3-0 or 2-0 PDS — Cushing then Lembert (inverting)</li>
              <li>Mortality with gastrectomy: 35-65% ✗ vs 15-25% without</li>
              <li>Some recommend invagination of marginally-viable small areas instead of full-thickness resection</li>
            </ul>
          </li>
          <li><strong>Assess spleen:</strong>
            <ul>
              <li>Often congested + displaced — usually returns to normal after derotation</li>
              <li>If splenic torsion (rare concurrent), splenic infarction, or non-viable: <strong>splenectomy</strong> indicated</li>
              <li>Some advocate splenectomy if any concern (controversial — adds time but prevents post-op splenic torsion)</li>
            </ul>
          </li>
          <li><strong>GASTROPEXY (mandatory ✨)</strong> — prevents recurrence from 50-80% → 2-5%
            <ul>
              <li><strong>Incisional gastropexy (most common):</strong>
                <ol>
                  <li>5-cm seromuscular incision in pyloric antrum (NOT through mucosa)</li>
                  <li>5-cm incision in right body wall transversus abdominis muscle, just caudal to last rib</li>
                  <li>Suture stomach to body wall: 2 simple continuous lines (cranial + caudal margins) with 2-0 PDS</li>
                  <li>Creates permanent adhesion as muscle layers heal together</li>
                </ol>
              </li>
              <li><strong>Belt-loop gastropexy:</strong>
                <ul>
                  <li>U-shaped flap of pyloric antrum threaded through tunnel in transverse abdominis</li>
                  <li>More complex but very secure</li>
                </ul>
              </li>
              <li><strong>Circumcostal gastropexy:</strong>
                <ul>
                  <li>Flap of pyloric antrum wrapped around 11th or 12th rib</li>
                  <li>Strongest but more invasive; requires careful rib elevation</li>
                </ul>
              </li>
              <li><strong>Tube gastropexy:</strong>
                <ul>
                  <li>Foley catheter through stomach + body wall</li>
                  <li>Provides feeding access + adhesion</li>
                  <li>Use when need post-op gastric decompression / feeding</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Lavage abdomen with warm saline (especially if any spillage)</li>
          <li>Close abdomen routine 3-layer</li>
        </ol>
        <p><strong>Critical decisions during surgery:</strong></p>
        <ul>
          <li>"Doubt = necrose" — don't leave compromised tissue ✨</li>
          <li>Gastrectomy + viable margin > Gastrectomy + marginal margin</li>
          <li>Document area assessed + decisions for owner discussion</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-op stabilization (concurrent with diagnostics):</strong></p>
        <ul>
          <li>Crystalloid LRS or Plasmalyte 20-30 mL/kg IV bolus, reassess q5-15 min</li>
          <li>Hypertonic saline 7.5%: 4-5 mL/kg over 5-10 min (giant breeds, rapid resus) ✨</li>
          <li>Hetastarch 5-10 mL/kg if persistent hypotension</li>
          <li>± Fresh frozen plasma 10-15 mL/kg if DIC / coagulopathy</li>
        </ul>
        <p><strong>Pre-medication (minimal):</strong></p>
        <ul>
          <li>Methadone 0.2-0.4 mg/kg IV (cardio-stable opioid) ✨</li>
          <li>Hydromorphone 0.05-0.1 mg/kg IV (alternative)</li>
          <li>AVOID: acepromazine (hypotension), full alpha-2 dose (bradycardia)</li>
        </ul>
        <p><strong>Induction (CARDIO-STABLE):</strong></p>
        <ul>
          <li><strong>Etomidate 1-2 mg/kg IV</strong> — best cardiovascular stability ✓
            <ul>
              <li>Causes adrenal suppression (transient — single dose OK)</li>
              <li>Ideal for unstable GDV patient</li>
            </ul>
          </li>
          <li>Or low-dose propofol 1-2 mg/kg IV titrated to effect</li>
          <li>± Fentanyl 2-5 mcg/kg IV co-induction (reduces propofol dose)</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane LOW (1-1.2%) supplemented with:
            <ul>
              <li>Fentanyl CRI 5-15 mcg/kg/h ✨</li>
              <li>Lidocaine CRI 30-50 mcg/kg/min (anti-arrhythmic + analgesia + GI motility)</li>
              <li>± Ketamine CRI 0.6 mg/kg/h (NMDA antagonist, opioid-sparing)</li>
            </ul>
          </li>
          <li>Continue intra-op fluids 5-10 mL/kg/h, adjust to BP</li>
        </ul>
        <p><strong>Lidocaine for VPCs ✨ (specific GDV protocol):</strong></p>
        <ul>
          <li>Indications: rapid VPCs &gt; 180/min, R-on-T phenomenon, multiform VPCs, runs of V-tach, hemodynamic compromise</li>
          <li>Loading: 2 mg/kg IV slow (over 1-2 min); can repeat once if needed (max 4 mg/kg total)</li>
          <li>CRI: 50 mcg/kg/min, titrate 25-80 mcg/kg/min</li>
          <li>Continue 12-48 h post-op; wean off when arrhythmia resolves</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Cefazolin 22 mg/kg IV at induction, repeat q90 min during surgery</li>
          <li>If gastrectomy / contamination: extended spectrum:
            <ul>
              <li>Cefoxitin 30 mg/kg IV q6h <strong>+</strong> Metronidazole 15 mg/kg IV q12h</li>
              <li>Or Amoxicillin-clavulanate IV (if available) + metronidazole</li>
            </ul>
          </li>
          <li>Continue 5-7 d post-op</li>
        </ul>
        <p><strong>Gastric protectants:</strong></p>
        <ul>
          <li>Omeprazole 1 mg/kg IV q12h × 5-7 d, transition to PO</li>
          <li>± Sucralfate 0.5-1 g PO q8h (if mucosal injury)</li>
        </ul>
        <p><strong>Antiemetic:</strong></p>
        <ul>
          <li>Maropitant 1 mg/kg IV/SC q24h × 5 d</li>
          <li>± Ondansetron 0.5-1 mg/kg IV q8-12h if persistent vomiting</li>
        </ul>
        <p><strong>Post-op analgesia:</strong></p>
        <ul>
          <li>Continue fentanyl CRI 12-24 h post-op</li>
          <li>Then methadone 0.2 mg/kg IV q6h × 24-48 h</li>
          <li>Transition to NSAID once eating + stable renal function (carprofen 2 mg/kg PO q12h, day 3-5 onward)</li>
          <li>± Gabapentin 5-10 mg/kg PO q8-12h adjunct</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h) — ICU monitoring ✨:</strong></p>
        <ul>
          <li>Continuous ECG — VPCs common (40-60%) and may increase in first 24-48 h ✗</li>
          <li>Direct or oscillometric BP q1-2h</li>
          <li>Pulse oximetry, capnography</li>
          <li>Lactate q4-6h (trend should fall) — rising lactate post-op = ominous</li>
          <li>Urine output (ideally place urinary catheter) — target 1-2 mL/kg/h</li>
          <li>PCV/TS, glucose, electrolytes q6-12h × 24-48h</li>
          <li>Fluids: crystalloids 4-6 mL/kg/h, adjust to perfusion + UOP</li>
        </ul>
        <p><strong>Day 1-3:</strong></p>
        <ul>
          <li>Watch for SECONDARY decompensation:
            <ul>
              <li>Septic peritonitis (gastric perforation/dehiscence) — fever, leukopenia, abdominal pain ✗</li>
              <li>Worsening DIC</li>
              <li>Acute renal injury</li>
              <li>Splenic infarction (delayed)</li>
              <li>Aspiration pneumonia</li>
            </ul>
          </li>
          <li>Begin nutrition early ✨:
            <ul>
              <li>Day 1: small amounts of water 6-12 h post-op if no vomiting</li>
              <li>Day 1-2: small bland meals (4-6× small portions/day)</li>
              <li>Day 3+: regular diet small meals frequently</li>
              <li>If gastrectomy: extra slow refeeding, check for vomiting</li>
            </ul>
          </li>
          <li>Continue antibiotics, gastric protectants, antiemetics</li>
          <li>Pain control transition opioid → NSAID once stable</li>
          <li>Encourage gentle ambulation when stable</li>
        </ul>
        <p><strong>Day 4-14 (home care):</strong></p>
        <ul>
          <li>Continue oral antibiotics × 5-7 d total</li>
          <li>Omeprazole 1 mg/kg PO q24h × 14 d</li>
          <li>NSAID × 7-10 d if no GI symptoms</li>
          <li>E-collar 14 d, restricted activity</li>
          <li>Suture removal day 10-14</li>
          <li>Diet: 3-4 small meals/day rest of life ✨</li>
        </ul>
        <p><strong>Long-term — owner education ✨:</strong></p>
        <ul>
          <li>3-4 small meals/day instead of 1 large meal</li>
          <li>Avoid exercise 1 h before/after meals</li>
          <li>Floor-level bowls (raised bowls increase risk)</li>
          <li>Slow-feed bowls if eats fast</li>
          <li>Watch for: distended abdomen, retching unproductively, restlessness → ER immediately (gastropexy prevents volvulus, NOT dilatation)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Ventricular arrhythmias ✗ (40-60%)</strong>:
            <ul>
              <li>Onset 24-72 h post-op (delayed peak)</li>
              <li>Reperfusion injury, myocardial ischemia, electrolyte disturbance, sepsis</li>
              <li>Tx: lidocaine bolus + CRI</li>
              <li>If refractory: procainamide, sotalol, amiodarone</li>
              <li>Monitor for 48-72 h minimum</li>
            </ul>
          </li>
          <li><strong>Gastric necrosis / perforation ✗</strong>:
            <ul>
              <li>Found at surgery → resect (35-65% mortality)</li>
              <li>Delayed perforation if marginal tissue not resected → septic peritonitis day 2-5 (high mortality)</li>
            </ul>
          </li>
          <li><strong>Septic peritonitis</strong>:
            <ul>
              <li>From gastric dehiscence, perforation, contamination</li>
              <li>Mortality 50-70%</li>
              <li>Tx: emergency re-laparotomy, lavage, source control, IV antibiotics, nutrition</li>
            </ul>
          </li>
          <li><strong>DIC</strong> (more common in delayed presentation):
            <ul>
              <li>Schistocytes, thrombocytopenia, prolonged PT/aPTT, elevated D-dimer</li>
              <li>Tx: FFP, supportive, treat underlying cause</li>
            </ul>
          </li>
          <li><strong>Acute kidney injury</strong> from hypoperfusion / shock</li>
          <li><strong>Aspiration pneumonia</strong> (vomiting, regurgitation under anesthesia)</li>
          <li><strong>Splenic infarction / torsion</strong> — delayed presentation:
            <ul>
              <li>Days-weeks post-op</li>
              <li>Lethargy, vomiting, abdominal mass</li>
              <li>Tx: splenectomy</li>
            </ul>
          </li>
          <li><strong>GDV recurrence</strong> (gastropexy failure):
            <ul>
              <li>Without gastropexy: 50-80% recurrence</li>
              <li>With proper gastropexy: 2-5% recurrence ✓</li>
              <li>Recurrence usually = simple dilatation (not volvulus) due to adhesion</li>
            </ul>
          </li>
          <li>Wound dehiscence, infection, ileus, prolonged ICU stay</li>
          <li>Pulmonary thromboembolism (rare but reported)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Overall survival:</strong>
            <ul>
              <li>Survival to discharge: 70-85%</li>
              <li>Mortality 15-30% in modern emergency practice ✨</li>
              <li>Of survivors: most return to normal QOL</li>
            </ul>
          </li>
          <li><strong>Prognostic factors (poor prognosis ✗):</strong>
            <ul>
              <li>Lactate &gt; 9 mmol/L not falling with fluids</li>
              <li>Need for gastrectomy (mortality 35-65%)</li>
              <li>Need for splenectomy (mortality 30-40%)</li>
              <li>DIC pre-op</li>
              <li>Cardiac arrhythmia not responsive to treatment</li>
              <li>Prolonged time from onset to surgery (&gt; 6 h)</li>
              <li>Pre-existing cardiac disease</li>
            </ul>
          </li>
          <li><strong>Prognostic factors (good prognosis ✓):</strong>
            <ul>
              <li>Lactate &lt; 6 mmol/L pre-op (99% survive)</li>
              <li>Lactate fall &gt; 50% with fluid resus</li>
              <li>Surgery within 4-6 h of onset</li>
              <li>No gastric necrosis</li>
              <li>No coexistent cardiac disease</li>
              <li>Younger age</li>
            </ul>
          </li>
          <li><strong>Long-term (after recovery):</strong>
            <ul>
              <li>Most return to normal activity within 4-6 weeks</li>
              <li>Recurrence with gastropexy 2-5% (vs 50-80% without)</li>
              <li>Lifestyle changes (small frequent meals) — lifelong recommendation</li>
              <li>QOL: excellent</li>
            </ul>
          </li>
          <li><strong>Prophylactic gastropexy ✓:</strong>
            <ul>
              <li>Mortality &lt; 0.5% (elective procedure in healthy dog)</li>
              <li>Lifetime GDV risk reduced from 25-30% in at-risk breeds → &lt; 5%</li>
              <li>Cost-benefit favorable in Great Dane, GSD, Std Poodle</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>GDV = surgical emergency แต่ surgery มาทีหลัง resuscitation ✨</strong> — fluid bolus + decompress ก่อนเลย<br><br>**Lactate = poor man's prognostication tool** — &lt; 6 = 99% survive; &gt; 9 ที่ไม่ลด = สถานการณ์เลว<br><br>⚠️ **VPCs 24-72 h post-op = ปกติ** — ICU monitoring 48-72 h, lidocaine CRI พร้อมใช้<br><br>✗ **อย่าลืมทำ gastropexy** — ไม่ทำ = recurrence 50-80% ภายในไม่กี่เดือน. ทำ = 2-5%</div>
      `,
    },
  },

  /* ============================================================
     SOFT TISSUE — Enterotomy
  ============================================================ */
  {
    id: 'enterotomy-fb-removal',
    titleEn: 'Enterotomy (Foreign Body Removal)',
    titleTh: 'ผ่าลำไส้เอาสิ่งแปลกปลอม',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'soft-tissue',
    tags: ['enterotomy', 'foreign body', 'GI obstruction', 'linear foreign body', 'leak test', 'antimesenteric', 'omentalize', 'septic peritonitis', 'dehiscence'],
    aliases: ['intestinal foreign body removal', 'FB removal', 'enterotomy', 'ผ่าลำไส้', 'ผ่าเอาก้าง', 'ผ่าเอาเชือก'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Small Intestine',
    sections: {
      indications: `
        <ul>
          <li><strong>Discrete intestinal foreign body ✗</strong>:
            <ul>
              <li>Bone, toy, rock, fabric, peach pit, corn cob</li>
              <li>Causing partial or complete obstruction</li>
              <li>Failed to pass with fluid therapy / GI motility (typically 24-48 h trial)</li>
              <li>Severe clinical signs (vomiting, anorexia, abdominal pain) regardless of imaging</li>
            </ul>
          </li>
          <li><strong>Linear foreign body ✗</strong> — common in cats (string, thread, ribbon, fishing line):
            <ul>
              <li>Plication of intestine on a "string"</li>
              <li>Often anchored under tongue (cat ✨ — always check) or at pylorus</li>
              <li>Can perforate intestine at multiple points along course (mesenteric border)</li>
              <li><strong>NEVER pull from anchor point</strong> — will tear intestine ✗</li>
              <li>Often requires multiple enterotomies along the length</li>
            </ul>
          </li>
          <li><strong>Intestinal biopsy</strong>:
            <ul>
              <li>Diagnostic for IBD, lymphoma, infiltrative disease</li>
              <li>Multiple full-thickness biopsies (duodenum, jejunum, ileum + LN)</li>
              <li>Same enterotomy technique on antimesenteric border</li>
            </ul>
          </li>
          <li>Intestinal mass that is non-resectable but warrants biopsy</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Devitalized intestine at FB site → enterectomy + anastomosis required (NOT enterotomy)</li>
          <li>Septic peritonitis already present → still indicated, but more complex</li>
          <li>Hemodynamically unstable patient — stabilize before going to surgery</li>
          <li>Coagulopathy not corrected (FFP available)</li>
          <li>Disseminated metastatic neoplasia where surgery doesn't help</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Confirm diagnosis + assess viability ✨:</strong></p>
        <ul>
          <li>Abdominal radiographs (3-view if possible):
            <ul>
              <li>Mechanical obstruction signs: gas + fluid stacking, dilated loops &gt; 2× height of L5</li>
              <li>Visible FB if radio-opaque</li>
              <li>"Plicated" appearance with "comma-shaped" gas pockets = linear FB ✨</li>
              <li>Free abdominal gas = perforation ✗</li>
            </ul>
          </li>
          <li>Abdominal ultrasound (if available):
            <ul>
              <li>Confirm FB, location, viability of bowel wall</li>
              <li>Assess for free fluid, peritoneal effusion</li>
              <li>Layered bowel wall = viable; loss of layering = compromised</li>
            </ul>
          </li>
          <li>If suspect linear FB in cat: <strong>always lift tongue</strong> ✨ — check for thread/string anchor</li>
        </ul>
        <p><strong>2. Workup:</strong></p>
        <ul>
          <li>CBC ± biochem panel</li>
          <li>Electrolytes (vomiting → hypochloremic, hypokalemic metabolic alkalosis classic)</li>
          <li>Lactate (perfusion marker, prognostic)</li>
          <li>BG (puppies/kittens hypoglycemic from anorexia)</li>
          <li>PCV/TS</li>
          <li>Coag panel if duration &gt; 48 h or sepsis suspected</li>
          <li>Abdominal effusion if present: cytology + glucose (peritoneal fluid glucose &gt; 20 mg/dL lower than serum = septic peritonitis)</li>
        </ul>
        <p><strong>3. Pre-op stabilization:</strong></p>
        <ul>
          <li>IV fluids — correct dehydration over 4-12 h before surgery if not unstable
            <ul>
              <li>LRS or Plasmalyte initially</li>
              <li>K+ supplementation if hypokalemic</li>
              <li>Goal: euvolemic, normonatremic, normokalemic before induction</li>
            </ul>
          </li>
          <li>Anti-emetic: maropitant 1 mg/kg SC/IV q24h</li>
          <li>Pre-op antibiotics: Cefoxitin 30 mg/kg IV at induction (anaerobic + gram negative coverage) <em>or</em> Cefazolin 22 mg/kg IV</li>
          <li>Analgesia: methadone 0.2-0.4 mg/kg IV at induction</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical approach:</strong></p>
        <ol>
          <li>Ventral midline laparotomy — adequate length (umbilicus ± cranial/caudal extension)</li>
          <li>Systematic abdominal exploration ✨ — don't just go to FB:
            <ul>
              <li>Liver, gallbladder, spleen, kidneys, urinary bladder</li>
              <li>Stomach, full GI tract from cardia to anus</li>
              <li>Mesenteric lymph nodes</li>
              <li>Look for: additional FB, perforations, masses, plication (linear FB)</li>
            </ul>
          </li>
          <li>Identify FB location:
            <ul>
              <li>Palpate stomach + entire intestinal tract</li>
              <li>FB often at narrowest points: pylorus, duodenum, ileocolic junction</li>
              <li>Check for plication (linear FB)</li>
            </ul>
          </li>
          <li>Isolate FB-containing segment with moistened laparotomy sponges</li>
          <li>Pack off from rest of abdomen to prevent contamination</li>
          <li>Have assistant occlude lumen proximal + distal with fingers (or atraumatic Doyen forceps)</li>
        </ol>
        <p><strong>Enterotomy technique ✨:</strong></p>
        <ol>
          <li><strong>Incision location:</strong>
            <ul>
              <li>ANTIMESENTERIC border (opposite side from mesentery — better blood supply, less critical)</li>
              <li>DISTAL to FB (downstream side — healthier tissue, more pliable for closure) ✨</li>
              <li>Length: just long enough to extract FB (avoid creating large defect)</li>
            </ul>
          </li>
          <li>Stab incision with #11 blade through serosa, muscularis, submucosa, mucosa</li>
          <li>Extend with Metzenbaum scissors as needed</li>
          <li>Milk FB out toward incision; remove gently</li>
          <li>Inspect + debride any non-viable mucosal edges</li>
          <li>Lavage lumen with saline if contaminated</li>
        </ol>
        <p><strong>Closure:</strong></p>
        <ul>
          <li><strong>Single-layer simple interrupted appositional pattern (preferred ✨):</strong>
            <ul>
              <li>Suture: 4-0 PDS or Monocryl in cats/small dogs; 3-0 in large dogs</li>
              <li>Full-thickness bites including submucosa (KEY layer for strength)</li>
              <li>2-3 mm tissue bites, 2-3 mm apart</li>
              <li>Apposed (not inverted, not everted) — apposition heals best in intestine ✓</li>
              <li>Tie just snug (don't strangulate) — submucosa not visible from outside if too tight</li>
            </ul>
          </li>
          <li>Alternative: simple continuous (acceptable, faster, equivalent leak rates in studies)</li>
        </ul>
        <p><strong>Leak test ✨ — MANDATORY:</strong></p>
        <ul>
          <li>Occlude bowel proximal + distal with fingers</li>
          <li>Inject saline into lumen via 22 g needle (10-20 mL)</li>
          <li>Observe closure — any leak = additional sutures</li>
          <li>Document negative leak test in medical record</li>
        </ul>
        <p><strong>Omentalization ✨:</strong></p>
        <ul>
          <li>Wrap suture line with omentum (free tag)</li>
          <li>Secure with 1-2 sutures of 4-0 PDS</li>
          <li>Provides angiogenesis + lymphatic drainage — reduces dehiscence risk ✓</li>
        </ul>
        <p><strong>Linear FB special technique:</strong></p>
        <ol>
          <li>Cut anchor point first (under tongue if cat) — releases tension</li>
          <li>Trace string from anchor to wherever it goes</li>
          <li>Multiple enterotomies along the plicated segment to retrieve string in pieces (1-3 enterotomies typical)</li>
          <li>Each enterotomy closed individually as above</li>
          <li>Each gets leak test + omentalization</li>
          <li>If perforations: convert to enterectomy at perforation sites</li>
        </ol>
        <p><strong>Final steps:</strong></p>
        <ul>
          <li>Lavage abdomen thoroughly with warm saline (especially if any spill)</li>
          <li>Suction excess fluid</li>
          <li>Count sponges + instruments</li>
          <li>Close abdomen 3-layer routine</li>
          <li>Glove change + new instruments before closing if contaminated ✨</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.2-0.4 mg/kg IV (or IM if no IV) ✨</li>
          <li>Or hydromorphone 0.05-0.1 mg/kg IV</li>
          <li>Maropitant 1 mg/kg IV/SC at pre-med (visceral analgesia + anti-emetic) ✓</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV to effect, or alfaxalone 1-2 mg/kg IV</li>
          <li>RSI consideration if regurgitation risk: pre-oxygenate, rapid induction, prompt intubation, suction ready</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 5-10 mcg/kg/h intra-op (opioid-sparing inhalant)</li>
          <li>Lidocaine CRI 25-50 mcg/kg/min (analgesia + GI motility — controversial benefit)</li>
        </ul>
        <p><strong>Antibiotics ✨:</strong></p>
        <ul>
          <li>Pre-op (at induction):
            <ul>
              <li><strong>Clean bowel: Cefazolin 22 mg/kg IV</strong>, repeat q90 min</li>
              <li><strong>Contaminated / linear FB / perforated: Cefoxitin 30 mg/kg IV</strong> (covers anaerobes + gram negs)</li>
              <li>Or Cefazolin + Metronidazole 15 mg/kg IV</li>
            </ul>
          </li>
          <li>Post-op:
            <ul>
              <li>Simple enterotomy without contamination: discontinue post-op</li>
              <li>Contamination present: continue 5-7 d
                <ul>
                  <li>Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h, OR</li>
                  <li>Cefoxitin 30 mg/kg IV q6-8h while in hospital → cephalexin + metronidazole PO at home</li>
                </ul>
              </li>
              <li>Septic peritonitis: broader spectrum + duration (Imipenem, Tazocin per culture/sensitivity)</li>
            </ul>
          </li>
        </ul>
        <p><strong>Anti-emetics:</strong></p>
        <ul>
          <li>Maropitant 1 mg/kg SC/IV q24h × 3-5 d ✓</li>
          <li>± Ondansetron 0.5-1 mg/kg IV q8-12h if persistent vomiting</li>
          <li>Metoclopramide CRI 1-2 mg/kg/d for ileus + anti-emetic (controversial efficacy)</li>
        </ul>
        <p><strong>Gastric protectants:</strong></p>
        <ul>
          <li>Omeprazole 1 mg/kg IV q12h × 3-5 d, then PO q24h × 7-10 d</li>
        </ul>
        <p><strong>Analgesia:</strong></p>
        <ul>
          <li>Continue fentanyl CRI 12-24 h post-op</li>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q6-8h × 24-48 h</li>
          <li>Buprenorphine 0.02 mg/kg IV/IM/transmucosal q8h × 2-3 d</li>
          <li>NSAID: avoid initially (renal hypoperfusion risk in dehydrated patient) — start once eating + drinking + stable BUN/creatinine
            <ul>
              <li>Carprofen 2 mg/kg PO q12h × 5-7 d (typically day 2-3 onward)</li>
              <li>Avoid in cats with FB; use robenacoxib 1-2 mg/kg PO/SC q24h × 3-6 d</li>
            </ul>
          </li>
        </ul>
        <p><strong>Nutrition support:</strong></p>
        <ul>
          <li>If anorexic &gt; 3-5 d: consider esophagostomy / nasogastric feeding tube
            <ul>
              <li>NG tube: easy placement, works for 5-7 d</li>
              <li>Esophagostomy: longer-term, allows full diet</li>
              <li>Liquid critical care diet: 1/3 RER day 1, 2/3 RER day 2, full RER day 3</li>
            </ul>
          </li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24 h):</strong></p>
        <ul>
          <li>Recovery monitoring — temp, vitals, MM, CRT, BP</li>
          <li>Continue IV fluids 3-5 mL/kg/h, adjust to perfusion + UOP</li>
          <li>Pain control as above</li>
          <li>Anti-emetics</li>
          <li>NPO × 6-12 h, then small amount of water</li>
        </ul>
        <p><strong>Day 1-3 (KEY surveillance period ✨):</strong></p>
        <ul>
          <li><strong>Watch for septic peritonitis ✗</strong> — most common life-threatening complication:
            <ul>
              <li>Onset typically day 3-5 (dehiscence peak)</li>
              <li>Signs: depression, fever, anorexia, vomiting, abdominal pain, leukopenia OR severe leukocytosis with left shift, hypoalbuminemia, hypoglycemia</li>
              <li>If suspect: abdominal US (free fluid? — aspirate + cytology + glucose), CBC, biochem</li>
              <li>Septic abdominal fluid → emergency re-laparotomy ✗</li>
            </ul>
          </li>
          <li>Begin re-feeding gradually:
            <ul>
              <li>Day 1 PM: small amount water, then bland food in small portions if no vomiting</li>
              <li>Day 2: bland diet 4-6 small meals (boiled chicken + rice, prescription GI diet)</li>
              <li>Day 3+: continue small frequent, transition to maintenance over 3-5 d</li>
            </ul>
          </li>
          <li>Encourage early ambulation</li>
          <li>Daily PE — abdominal pain, T°, appetite, fecal output</li>
          <li>Recheck CBC at 48-72 h if any concern</li>
        </ul>
        <p><strong>Day 4-14:</strong></p>
        <ul>
          <li>Continue oral antibiotics (if indicated)</li>
          <li>Pain control transition NSAID</li>
          <li>E-collar 14 d, restricted activity</li>
          <li>Suture removal day 10-14</li>
          <li>Bland diet × 5-7 d, transition to regular</li>
          <li>Recheck day 7-10 — incision check, exam</li>
        </ul>
        <p><strong>Owner education:</strong></p>
        <ul>
          <li>Watch for: vomiting beyond day 1, anorexia, lethargy, fever, abdominal distension → ER visit</li>
          <li>Prevention: remove access to known foreign body items, cat-proof string/thread/yarn</li>
          <li>Repeat offenders: dietary modification, environmental management</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Septic peritonitis from dehiscence ✗</strong> — most serious
            <ul>
              <li>Incidence: 5-15% (higher with linear FB, devitalized tissue, hypoalbuminemia, pre-op peritonitis)</li>
              <li>Onset peak: day 3-5 (when collagen lysis &gt; collagen synthesis)</li>
              <li>Risk factors: hypoalbuminemia &lt; 2.5 g/dL, septic peritonitis pre-op, mechanical compromise of suture, infection</li>
              <li>Tx: emergency relaparotomy, lavage, source control (resection if needed), open abdominal drainage (or closed-suction drain), aggressive antibiotics, nutrition, supportive ICU care</li>
              <li>Mortality 30-60% if dehiscence develops ✗</li>
            </ul>
          </li>
          <li><strong>Persistent ileus:</strong>
            <ul>
              <li>Common 24-72 h post-op</li>
              <li>Tx: prokinetics (metoclopramide CRI 1-2 mg/kg/d, cisapride 0.5 mg/kg PO q8h), enteral feeding if no obstruction</li>
            </ul>
          </li>
          <li>Vomiting — often resolves with antiemetic + small frequent feeds</li>
          <li>Wound infection / dehiscence (abdominal wall)</li>
          <li>Adhesions (long-term, may cause future obstruction — rare)</li>
          <li>Stricture at enterotomy site (rare with proper technique)</li>
          <li>Short bowel syndrome — only if multiple enterectomies needed (not typical from single enterotomy)</li>
          <li>Recurrent FB ingestion (behavioral / pica)</li>
          <li>Missed second FB (from inadequate exploration) ✗</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Simple discrete FB enterotomy in stable patient ✓:</strong>
            <ul>
              <li>Survival 90-95%</li>
              <li>Recovery 10-14 d</li>
              <li>Return to normal diet/activity in 2-3 weeks</li>
            </ul>
          </li>
          <li><strong>Linear FB (cat or dog):</strong>
            <ul>
              <li>Survival 70-85% (multiple enterotomies, sometimes enterectomy)</li>
              <li>Higher complication rate (more suture lines, longer surgery)</li>
              <li>Cat with tongue-anchored linear FB caught early: better than chronic chronic plication</li>
            </ul>
          </li>
          <li><strong>FB with septic peritonitis at presentation ✗:</strong>
            <ul>
              <li>Survival 50-70%</li>
              <li>Requires ICU, longer hospitalization, higher cost</li>
              <li>May require enterectomy (devitalized segments)</li>
            </ul>
          </li>
          <li><strong>FB with dehiscence post-op ✗:</strong>
            <ul>
              <li>Survival 30-50%</li>
              <li>Most common preventable cause of mortality from this surgery</li>
              <li>Risk factors must be identified pre-op + addressed (albumin, nutrition)</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>Most patients have NO long-term sequelae from single enterotomy</li>
              <li>Recurrent FB ingestion 10-20% in dogs (behavioral / pica)</li>
              <li>Adhesion risk from omentalization is low; rare cause of late-onset obstruction</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>FB enterotomy = simple in concept, easy to mess up</strong> ✨ — เคล็ดลับคือ DISTAL incision + leak test + omentalization<br><br>**Albumin &lt; 2.5 = high dehiscence risk** — ถ้าเจอต้องแก้ก่อน หรือใช้ closed-suction drain หลังผ่า<br><br>⚠️ **Cat linear FB = always check under tongue** ก่อนผ่าตัด — ตัด anchor ก่อนเข้าท้อง<br><br>✗ **Day 3-5 post-op = peak dehiscence window** — recheck PE + CBC ระยะนี้ทุก case</div>
      `,
    },
  },

  /* ============================================================
     SOFT TISSUE — Enterectomy
  ============================================================ */
  {
    id: 'enterectomy-anastomosis',
    titleEn: 'Enterectomy with Anastomosis',
    titleTh: 'ตัดลำไส้ + ต่อ end-to-end',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'soft-tissue',
    tags: ['enterectomy', 'anastomosis', 'intestinal resection', 'intussusception', 'devitalized intestine', 'mesenteric volvulus', 'short bowel syndrome', 'end-to-end', 'linear stapler'],
    aliases: ['intestinal resection', 'enterectomy', 'bowel resection', 'ตัดต่อลำไส้', 'ผ่าตัดลำไส้เน่า'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Small Intestine',
    sections: {
      indications: `
        <ul>
          <li><strong>Devitalized / necrotic intestine ✗</strong>:
            <ul>
              <li>Linear FB with multiple perforations</li>
              <li>Strangulating obstruction (mesenteric volvulus, hernia incarceration)</li>
              <li>Prolonged FB obstruction with vascular compromise</li>
              <li>Mesenteric vascular thrombosis</li>
            </ul>
          </li>
          <li><strong>Intussusception</strong> not reducible:
            <ul>
              <li>Common in puppies (parasites, viral enteritis, foreign body)</li>
              <li>Manual reduction possible if early — if reduction fails or tissue compromised, resection</li>
              <li>± enteroplication to prevent recurrence (controversial)</li>
            </ul>
          </li>
          <li><strong>Intestinal neoplasia:</strong>
            <ul>
              <li>Adenocarcinoma (most common malignant in dogs)</li>
              <li>Lymphoma (focal mass form — surgery + chemo)</li>
              <li>GIST (gastrointestinal stromal tumor)</li>
              <li>Leiomyoma / leiomyosarcoma</li>
              <li>MCT in cats (intestinal form)</li>
            </ul>
          </li>
          <li>Severe inflammatory disease with stricture (rare)</li>
          <li>Mesenteric volvulus (rare, often fatal)</li>
          <li>Inguinal hernia with strangulated bowel</li>
          <li>Trauma — penetrating wound, bite injury, necrosis</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hemodynamically unstable patient → stabilize first</li>
          <li>Disseminated metastatic disease (consider palliative options vs aggressive resection)</li>
          <li>Massive resection threatening short bowel syndrome
            <ul>
              <li>&gt; 70-80% of small intestine = high risk SBS</li>
              <li>Discuss with owner — long-term medical management challenges ⚠️</li>
            </ul>
          </li>
          <li>Severely cachectic patient — high dehiscence risk</li>
          <li>Untreated coagulopathy</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Diagnosis + planning:</strong></p>
        <ul>
          <li>Imaging:
            <ul>
              <li>Abdominal radiographs — obstruction signs, mass effect, free gas</li>
              <li>Abdominal US ✨ — assess intestinal viability:
                <ul>
                  <li>Layered wall = viable</li>
                  <li>Loss of layering, hyperechoic mucosa, ↓ peristalsis = compromised</li>
                  <li>Identify mass, intussusception, vascular flow (Doppler)</li>
                </ul>
              </li>
              <li>3-view thoracic radiographs if neoplasia suspected (staging)</li>
            </ul>
          </li>
          <li>FNA / biopsy of mass if accessible (guides surgical planning + adjuvant Tx)</li>
        </ul>
        <p><strong>2. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, electrolytes</li>
          <li><strong>Albumin ✨</strong> — &lt; 2.5 g/dL = high dehiscence risk (consider plasma transfusion pre-op)</li>
          <li>Coag panel (PT/aPTT) — sepsis risk = DIC</li>
          <li>Lactate (perfusion marker, prognostic)</li>
          <li>Blood typing + crossmatch — anticipate possible transfusion</li>
          <li>Abdominal effusion if present: cytology + glucose ✨ (peritoneal glucose &lt; serum by &gt; 20 mg/dL = septic peritonitis)</li>
          <li>UA</li>
        </ul>
        <p><strong>3. Pre-op stabilization:</strong></p>
        <ul>
          <li>IV fluids — correct dehydration, electrolytes</li>
          <li>Plasma 10-20 mL/kg if albumin &lt; 2.0 g/dL or coagulopathy</li>
          <li>Pre-op antibiotics: Cefoxitin 30 mg/kg IV at induction (covers anaerobes + gram-neg) ✨</li>
          <li>Or Cefazolin 22 mg/kg IV + Metronidazole 15 mg/kg IV</li>
          <li>Methadone 0.2-0.4 mg/kg IV pre-med</li>
          <li>Maropitant 1 mg/kg IV — anti-emetic + visceral analgesia</li>
          <li>Type O- (universal) blood available if intra-op bleeding anticipated</li>
        </ul>
        <p><strong>4. Surgical planning:</strong></p>
        <ul>
          <li>Estimate length to be resected (preserve length when possible)</li>
          <li>Plan anastomosis technique (hand-sewn vs stapled)</li>
          <li>Consider concurrent biopsies (mesenteric LN, liver) if neoplasia suspected</li>
          <li>Plan for omentalization, possible drain placement</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence:</strong></p>
        <ol>
          <li>Ventral midline laparotomy — generous exposure</li>
          <li>Systematic abdominal exploration</li>
          <li>Identify lesion, devitalized segment, or mass</li>
          <li>Pack off with moistened laparotomy sponges</li>
          <li><strong>Determine resection margins ✨</strong>:
            <ul>
              <li>Healthy bowel: pink, peristalsis, palpable pulse in mesenteric vessels, bleeds when stuck with needle</li>
              <li>Dead bowel: gray/black, friable, no peristalsis, no pulse, no bleeding</li>
              <li>"Doubtful" zone: borderline — better to extend resection than leave</li>
              <li>For tumor: 4-8 cm grossly normal margin (depends on tumor type)</li>
            </ul>
          </li>
          <li>Place atraumatic Doyen forceps (or Penrose drain ligated as soft clamp) proximal + distal to resection zone:
            <ul>
              <li>Crushing forceps on segment to be removed (within resection)</li>
              <li>Atraumatic on segment to remain</li>
            </ul>
          </li>
          <li><strong>Mesenteric ligation:</strong>
            <ul>
              <li>Identify mesenteric vessels supplying segment</li>
              <li>Ligate with absorbable suture (3-0 or 4-0 PDS) close to bowel wall</li>
              <li>Or use vessel sealing device (LigaSure, Harmonic)</li>
              <li>Clear mesentery from bowel wall at resection points (1-2 mm of cleaned bowel for sutures)</li>
            </ul>
          </li>
          <li><strong>Transect bowel ✨</strong>:
            <ul>
              <li>Transect at slight oblique angle (60° to long axis) — creates wider lumen for anastomosis ✨</li>
              <li>Small lumen-side longer (mesenteric) = wider stoma</li>
              <li>If gross size mismatch (&gt; 30% diameter difference): see special techniques below</li>
            </ul>
          </li>
          <li>Suction luminal contents</li>
          <li>Lavage cut ends with saline</li>
        </ol>
        <p><strong>Anastomosis — hand-sewn end-to-end (most common):</strong></p>
        <ol>
          <li><strong>Single-layer simple interrupted appositional ✓</strong>:
            <ul>
              <li>Suture: 4-0 PDS or Monocryl in small/medium dog/cat; 3-0 in large</li>
              <li>Full-thickness bites (catch submucosa = strength layer)</li>
              <li>Place first 2 stay sutures: mesenteric border + antimesenteric border (12 + 6 o'clock if you orient bowel)</li>
              <li>Tie just snug — don't crush tissue</li>
              <li>Continue with simple interrupted sutures around circumference</li>
              <li>3-4 mm tissue bites, 3 mm apart — usually 8-12 sutures total</li>
              <li>Most critical: mesenteric corner (highest dehiscence rate) ✨</li>
            </ul>
          </li>
          <li><strong>Single-layer simple continuous (alternative)</strong>:
            <ul>
              <li>Two continuous lines (ventral half + dorsal half), tied at mesenteric + antimesenteric</li>
              <li>Faster than interrupted</li>
              <li>Equivalent leak rates in studies</li>
            </ul>
          </li>
          <li><strong>Stapled functional end-to-end (advanced):</strong>
            <ul>
              <li>Linear cutter stapler (GIA-style) creates side-to-side anastomosis</li>
              <li>Open ends closed with TA stapler or hand-sewn</li>
              <li>Faster, less suture line, but $$$ + technique-sensitive</li>
              <li>Used in oncology / busy hospitals</li>
            </ul>
          </li>
        </ol>
        <p><strong>Mesenteric defect closure:</strong></p>
        <ul>
          <li>Close gap in mesentery with simple continuous 4-0 PDS</li>
          <li>Avoid catching mesenteric vessels</li>
          <li>Important: prevents internal hernia of intestine through gap ✨</li>
        </ul>
        <p><strong>Lumen size mismatch (oral &gt; aboral by &gt; 30%):</strong></p>
        <ul>
          <li>Spatulate antimesenteric border of smaller end (fish-mouth incision)</li>
          <li>Or angulate transection more obliquely on smaller side</li>
          <li>Or end-to-side anastomosis (rare)</li>
        </ul>
        <p><strong>Leak test ✨ — MANDATORY:</strong></p>
        <ul>
          <li>Occlude proximal + distal to anastomosis</li>
          <li>Inject 10-20 mL saline into lumen</li>
          <li>Any leak → place additional suture(s)</li>
          <li>Document negative leak test</li>
        </ul>
        <p><strong>Omentalization (CRITICAL ✨):</strong></p>
        <ul>
          <li>Wrap omentum around anastomosis circumferentially</li>
          <li>Secure with 1-3 sutures of 4-0 PDS</li>
          <li>Provides angiogenesis, lymphatic drainage, infection containment</li>
          <li>Reduces dehiscence rate ✓</li>
        </ul>
        <p><strong>Final steps:</strong></p>
        <ul>
          <li>Lavage abdomen with warm saline (especially if pre-existing peritonitis)</li>
          <li>Suction excess fluid</li>
          <li>If septic peritonitis pre-op: consider closed-suction drain (Jackson-Pratt) or open peritoneal drainage</li>
          <li>Glove change + new instruments before closing if contaminated ✨</li>
          <li>Close abdomen 3-layer routine</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.2-0.4 mg/kg IV</li>
          <li>Or Hydromorphone 0.05-0.1 mg/kg IV</li>
          <li>Maropitant 1 mg/kg IV ✓</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Etomidate 1-2 mg/kg IV (cardio-stable, sick patient) ✨</li>
          <li>Or Propofol 2-4 mg/kg IV titrated</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 5-15 mcg/kg/h ✓</li>
          <li>Lidocaine CRI 25-50 mcg/kg/min ✓</li>
          <li>± Ketamine CRI 0.6 mg/kg/h (NMDA antagonist, anti-hyperalgesia)</li>
        </ul>
        <p><strong>Antibiotics ✨ (extended spectrum mandatory):</strong></p>
        <ul>
          <li>Pre-op (at induction):
            <ul>
              <li>Cefoxitin 30 mg/kg IV (best single drug — covers anaerobes + gram-neg)</li>
              <li>Or Cefazolin 22 mg/kg IV + Metronidazole 15 mg/kg IV</li>
              <li>Repeat q90 min during surgery</li>
            </ul>
          </li>
          <li>Post-op (5-7 d minimum):
            <ul>
              <li>Cefoxitin 30 mg/kg IV q6-8h while in hospital, OR</li>
              <li>Amoxicillin-clavulanate 12.5-25 mg/kg IV/PO q12h</li>
              <li>Transition to PO when eating: Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 7 d total, OR Cephalexin + Metronidazole</li>
            </ul>
          </li>
          <li>Septic peritonitis: broader spectrum based on culture (Imipenem, Tazocin, fluoroquinolone + metronidazole)</li>
        </ul>
        <p><strong>Anti-emetics ✨:</strong></p>
        <ul>
          <li>Maropitant 1 mg/kg SC/IV q24h × 3-7 d</li>
          <li>± Ondansetron 0.5-1 mg/kg IV q8-12h if persistent vomiting</li>
          <li>Metoclopramide CRI 1-2 mg/kg/d (ileus + anti-emetic, controversial efficacy)</li>
        </ul>
        <p><strong>Gastric protection:</strong></p>
        <ul>
          <li>Omeprazole 1 mg/kg IV q12h × 3-5 d, then PO q24h × 7-14 d</li>
        </ul>
        <p><strong>Analgesia:</strong></p>
        <ul>
          <li>Continue fentanyl CRI 12-24 h post-op</li>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q6-8h × 24-48 h</li>
          <li>Buprenorphine 0.02 mg/kg IV/buccal q8h × 2-3 d</li>
          <li>NSAID delayed to day 3+ once eating + stable BUN/creat:
            <ul>
              <li>Carprofen 2 mg/kg PO q12h × 5-7 d</li>
              <li>Cat: robenacoxib 1-2 mg/kg PO/SC q24h × 3-6 d</li>
            </ul>
          </li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h adjunct</li>
        </ul>
        <p><strong>Nutrition support ✨ — KEY for healing:</strong></p>
        <ul>
          <li>Hypoalbuminemic / cachectic patients NEED early enteral nutrition</li>
          <li>Esophagostomy tube (preferred for &gt; 5-7 d feeding) — place at time of surgery</li>
          <li>NG tube for short-term (5-7 d)</li>
          <li>Start at 1/3 RER day 1 → 2/3 day 2 → full RER day 3</li>
          <li>Prescription GI / convalescence diet (Hill's a/d, Royal Canin recovery)</li>
          <li>Avoid total parenteral nutrition unless enteral impossible (gut atrophy, expense, complications)</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24 h) — ICU monitoring:</strong></p>
        <ul>
          <li>Continuous monitoring of vitals, BP, ECG</li>
          <li>IV fluids — adjust to perfusion + UOP</li>
          <li>Pain control as above</li>
          <li>NPO × 6-12 h then small water</li>
          <li>Monitor for: vomiting, regurgitation, abdominal pain</li>
        </ul>
        <p><strong>Day 1-5 (CRITICAL surveillance period ✨):</strong></p>
        <ul>
          <li><strong>Day 3-5 = peak dehiscence window</strong> ✗
            <ul>
              <li>Daily PE — abdominal palpation, T°, MM, demeanor, appetite</li>
              <li>CBC at 48-72 h: leukopenia OR severe leukocytosis with left shift = warning</li>
              <li>Hypoalbuminemia worsening, hypoglycemia, lactate rising = sepsis</li>
              <li>If suspect: abdominal US for free fluid, cytology of any effusion + glucose</li>
              <li>Septic peritonitis confirmed → emergency relaparotomy ✗</li>
            </ul>
          </li>
          <li>Continue antibiotics, gastric protection, anti-emetics</li>
          <li>Initiate enteral nutrition ASAP:
            <ul>
              <li>Day 1-2: small frequent meals (every 2-3 h, 1-2 tablespoons each)</li>
              <li>Day 3+: gradually increase volume + space out</li>
              <li>If anorexic: feeding tube usage</li>
            </ul>
          </li>
          <li>Encourage gentle ambulation when stable</li>
          <li>Monitor for ileus — vomiting + abdominal distension despite anti-emetics</li>
        </ul>
        <p><strong>Day 6-14:</strong></p>
        <ul>
          <li>Transition to oral antibiotics</li>
          <li>Discharge usually day 3-7 if stable</li>
          <li>Bland GI diet × 2 weeks, gradual transition</li>
          <li>E-collar 14 d, restricted activity</li>
          <li>Suture removal day 10-14</li>
          <li>Recheck day 7-10 — incision check, exam</li>
        </ul>
        <p><strong>Long-term considerations:</strong></p>
        <ul>
          <li>If &gt; 50% small intestine resected: monitor for short bowel syndrome (chronic diarrhea, weight loss) ⚠️
            <ul>
              <li>Prescription low-residue diet</li>
              <li>Probiotics</li>
              <li>± Adjunctive vitamin B12 (cobalamin) if ileum resected</li>
              <li>Slow transit diet long-term</li>
            </ul>
          </li>
          <li>Adjuvant chemo if neoplasia (carboplatin, doxorubicin, etc. per oncologist)</li>
          <li>Stricture at anastomosis: rare, may require dilation or revision</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Dehiscence + septic peritonitis ✗</strong> — most serious
            <ul>
              <li>Incidence: ~ 7-15% overall, up to 25% with pre-existing peritonitis</li>
              <li>Risk factors: hypoalbuminemia &lt; 2.5 g/dL, septic peritonitis at presentation, FB cause, mechanical compromise, prolonged surgery, surgeon inexperience</li>
              <li>Onset peak day 3-5 post-op</li>
              <li>Tx: emergency relaparotomy, lavage, source control (often re-resection), open peritoneal drainage or closed-suction drain, ICU care</li>
              <li>Mortality of dehiscence with peritonitis: 50-60% ✗</li>
            </ul>
          </li>
          <li><strong>Persistent ileus / functional obstruction:</strong>
            <ul>
              <li>Common 24-72 h post-op</li>
              <li>Tx: prokinetics, enteral feeding (if anatomically intact)</li>
            </ul>
          </li>
          <li><strong>Stricture at anastomosis:</strong>
            <ul>
              <li>Late complication (weeks to months)</li>
              <li>Causes recurrent obstruction signs</li>
              <li>Tx: balloon dilation or revision surgery</li>
            </ul>
          </li>
          <li><strong>Short bowel syndrome:</strong>
            <ul>
              <li>If &gt; 70-80% small intestine resected</li>
              <li>Signs: chronic diarrhea, malabsorption, weight loss</li>
              <li>Management: small frequent meals, low-residue diet, B12 supplementation if ileum resected, probiotics</li>
            </ul>
          </li>
          <li><strong>Internal hernia</strong> through unclosed mesenteric defect → strangulating obstruction</li>
          <li>Wound infection / dehiscence (abdominal wall)</li>
          <li>Adhesions — may cause future obstruction</li>
          <li>Hemorrhage from missed mesenteric vessel</li>
          <li>Anastomotic leak without overt peritonitis (small subclinical leaks → fistula formation, abscess)</li>
          <li>Recurrent disease — neoplasia, intussusception, FB ingestion</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Stable patient, healthy bowel margins ✓:</strong>
            <ul>
              <li>Survival 80-90%</li>
              <li>Recovery 14-21 d</li>
              <li>Return to normal activity 3-4 weeks</li>
            </ul>
          </li>
          <li><strong>Pre-existing septic peritonitis ✗:</strong>
            <ul>
              <li>Survival 50-70%</li>
              <li>Higher dehiscence rate (up to 25%)</li>
              <li>Longer hospital stay, more expensive</li>
            </ul>
          </li>
          <li><strong>Intussusception (puppies/kittens):</strong>
            <ul>
              <li>Survival 80-90% if treated promptly</li>
              <li>Recurrence ~ 10-20% — enteroplication may help (controversial)</li>
              <li>Treat underlying cause (parasites, viral, FB)</li>
            </ul>
          </li>
          <li><strong>Neoplasia (depends heavily on type):</strong>
            <ul>
              <li>Adenocarcinoma: high local recurrence + mets, MST 6-12 mo with surgery + chemo</li>
              <li>GIST: MST 1-2 yr with surgery; better with imatinib (toceranib in dogs)</li>
              <li>Lymphoma (focal): MST &gt; 6-12 mo with surgery + multiagent chemo</li>
              <li>Leiomyoma (benign): excellent if completely excised</li>
              <li>Cat intestinal MCT: variable; surgery + chemo may help</li>
            </ul>
          </li>
          <li><strong>Mesenteric volvulus ✗:</strong>
            <ul>
              <li>Survival often &lt; 50% — usually advanced ischemia at presentation</li>
              <li>Massive resection may be needed → short bowel syndrome</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>Most surviving short-term recover fully</li>
              <li>Short bowel syndrome if extensive resection — manageable with diet/supplements</li>
              <li>QOL good if appropriate dietary management</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Margin viability is the surgeon's #1 decision</strong> ✨ — "When in doubt, resect more" — leaving compromised tissue = dehiscence<br><br>**Hypoalbuminemia &lt; 2.5 = transfuse plasma pre-op** + use closed-suction drain หลังผ่า. Albumin = predictor of healing<br><br>⚠️ **Day 3-5 = peak dehiscence window** — owners must understand discharge instructions + recheck timing<br><br>✗ **&gt; 70% small bowel resection = short bowel syndrome** — quality of life discussion before surgery</div>
      `,
    },
  },

  /* ============================================================
     UROGENITAL — PU (cat)
  ============================================================ */
  {
    id: 'perineal-urethrostomy-cat',
    titleEn: 'Perineal Urethrostomy (PU) — Cat',
    titleTh: 'เปิดท่อปัสสาวะแบบ PU (แมว)',
    type: 'surgery',
    species: ['cat'],
    system: 'urogenital',
    tags: ['perineal urethrostomy', 'PU', 'FLUTD', 'recurrent urethral obstruction', 'feline lower urinary tract disease', 'urethral stricture', 'pelvic urethra', 'caudal pelvic urethra'],
    aliases: ['PU surgery', 'perineal urethrostomy', 'ผ่าเปิดท่อปัสสาวะแมว', 'ตอนแมวแบบ PU'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Urethra',
    sections: {
      indications: `
        <ul>
          <li><strong>Recurrent urethral obstruction (FLUTD/FIC) ✗</strong> — primary indication
            <ul>
              <li>Multiple obstructive episodes despite environmental + dietary management</li>
              <li>Common discussion: after 2-3 episodes ✨</li>
              <li>Owner unable to detect/respond to obstructions promptly</li>
              <li>Distance from emergency care</li>
            </ul>
          </li>
          <li><strong>Urethral stricture (distal urethra)</strong>:
            <ul>
              <li>Post-traumatic (catheter, trauma)</li>
              <li>Post-inflammatory (chronic urethritis)</li>
              <li>Tumor (rare in cat distal urethra — adenocarcinoma)</li>
            </ul>
          </li>
          <li><strong>Distal urethral trauma:</strong>
            <ul>
              <li>Pelvic fracture with urethral disruption (distal portion)</li>
              <li>Bite wound to perineum</li>
              <li>Iatrogenic trauma from prior catheterization</li>
            </ul>
          </li>
          <li>Distal urethral neoplasia (rare in cat — TCC, SCC, adenocarcinoma)</li>
          <li>Penis trauma where preservation not possible</li>
          <li>Refractory FIC with severe behavioral component (in select cases — controversial)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Stricture / disease in PROXIMAL urethra ✗</strong> — PU only addresses distal portion; proximal stricture won't resolve
            <ul>
              <li>Pre-op contrast urethrogram OR cystoscopy to localize</li>
              <li>Proximal stricture may need different procedure (subtotal cystectomy + urethral revision)</li>
            </ul>
          </li>
          <li>Hemodynamically unstable / hyperkalemic blocked cat — MUST stabilize first
            <ul>
              <li>K+ &gt; 6.0 = urgent decompression (cath relief or cystocentesis)</li>
              <li>Don't operate on hyperkalemic patient ✗</li>
            </ul>
          </li>
          <li>Coagulopathy (rare in FLUTD)</li>
          <li>Severe systemic illness (azotemia not yet improved with fluids)</li>
          <li>Active periurethral / perineal infection — drain + treat first</li>
          <li>Owner unable to manage post-op care (e-collar compliance, paper litter, monitoring)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Stabilize first — most PU patients arrive with active obstruction ✨:</strong></p>
        <ul>
          <li>IV catheter, IV fluids (LRS or Plasmalyte 60-90 mL/kg/h initial bolus, then maintenance ± diuresis)</li>
          <li>Treat hyperkalemia if K+ &gt; 6.0:
            <ul>
              <li>Calcium gluconate 10% — 0.5-1 mL/kg slow IV (cardioprotection, monitor ECG)</li>
              <li>Insulin 0.25 IU/kg IV + dextrose 0.5 g/kg IV bolus → CRI of dextrose to prevent hypoglycemia</li>
              <li>Or Terbutaline 0.01 mg/kg IM/IV (β-agonist drives K intracellular)</li>
            </ul>
          </li>
          <li>Decompressive cystocentesis if cath fails or hyperkalemia severe (controversial — leak risk, but provides diagnostic sample + relief)</li>
          <li>Place urinary catheter to relieve obstruction (3.5 fr open-ended tomcat or 5 fr red rubber)</li>
          <li>Maintain catheter 24-72 h pre-op for diuresis + recovery from acute kidney injury</li>
        </ul>
        <p><strong>2. Workup BEFORE PU surgery:</strong></p>
        <ul>
          <li>CBC, biochem (BUN, creat, K, Cl, Na, phosphorus), UA</li>
          <li>Urine culture + sensitivity ✨ — PU patients often develop bacterial UTI</li>
          <li>Abdominal radiographs (uroliths? bladder size? free fluid?)</li>
          <li>Abdominal US:
            <ul>
              <li>Bladder wall thickness</li>
              <li>Uroliths in bladder/proximal urethra</li>
              <li>Pelvic urethra anatomy (often hard to image distally)</li>
            </ul>
          </li>
          <li><strong>Contrast urethrogram (positive contrast retrograde) ✨</strong>:
            <ul>
              <li>Identifies location of stricture</li>
              <li>Confirms PROXIMAL urethra is patent</li>
              <li>Critical for ensuring PU will solve the problem</li>
              <li>Performed under sedation</li>
            </ul>
          </li>
          <li>± Cystoscopy if available (gold standard for urethral evaluation)</li>
          <li>Standard pre-anesthesia: ECG, BP</li>
        </ul>
        <p><strong>3. Pre-op preparation:</strong></p>
        <ul>
          <li>Confirm K+ normalized, acid-base improved, hydrated</li>
          <li>Pre-op antibiotics: Cefazolin 22 mg/kg IV at induction (or based on culture)</li>
          <li>Maintain urinary catheter through induction, remove during prep</li>
          <li>Position: ventral recumbency (sternal) with pelvis elevated, hindlimbs hung over edge of table, tail tied over back ✨</li>
          <li>Place purse-string suture around anus to keep operative field clean</li>
          <li>Surgical clip + scrub of perineum, scrotal area</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence (standard cat PU — Wilson and Harrison method modified):</strong></p>
        <ol>
          <li><strong>Skin incision</strong>:
            <ul>
              <li>Elliptical incision around prepuce + scrotum (cat is usually already castrated; if not, castrate concurrently)</li>
              <li>Extends from cranial pubis to caudally toward anus, ~ 4-5 cm long</li>
            </ul>
          </li>
          <li><strong>Dissect penis from surrounding tissue</strong>:
            <ul>
              <li>Identify penis ventral to ischium</li>
              <li>Sharp + blunt dissection along penis to release from ventral pelvic floor (ischiocavernosus muscles, pudendal vessels)</li>
              <li>Ligate paired ischiocavernosus muscles + dorsal vessels of penis with 4-0 PDS or absorbable</li>
              <li>Continue dissection cranially toward pelvis until pelvic urethra reached</li>
            </ul>
          </li>
          <li><strong>Identify pelvic urethra ✨</strong> (KEY STEP):
            <ul>
              <li>Pelvic urethra is wider than distal — aim to expose enough that 8 fr catheter passes easily</li>
              <li>Catheter test: insert 8 fr red rubber catheter — if passes through stoma site easily = adequate</li>
              <li>If too distal (in penile urethra) → stenosis ✗</li>
              <li>Most common error: not dissecting cranially enough → stoma in narrow distal urethra</li>
            </ul>
          </li>
          <li><strong>Open urethra:</strong>
            <ul>
              <li>Longitudinal incision along ventral midline of pelvic urethra, length 1-1.5 cm</li>
              <li>Confirm with catheter — should pass freely into bladder</li>
            </ul>
          </li>
          <li><strong>Suture urethral mucosa to skin ✨ (CRITICAL):</strong>
            <ul>
              <li>Suture: 4-0 PDS or 4-0 nylon (monofilament, minimally reactive)</li>
              <li>Pattern: simple interrupted</li>
              <li>Start with DORSAL (12 o'clock) sutures — most important for preventing stricture</li>
              <li>3-4 sutures dorsally, 3-4 sutures laterally on each side</li>
              <li>Mucosa-to-skin direct apposition</li>
              <li>Ventral half: can suture or leave open to heal by 2nd intention (some surgeons; controversial)</li>
              <li>Final stoma diameter: should easily admit 8 fr catheter</li>
            </ul>
          </li>
          <li><strong>Excise distal penis:</strong>
            <ul>
              <li>Once urethra-skin suturing complete, transect distal penis below stoma</li>
              <li>Submit for histopath if mass / chronic inflammation</li>
            </ul>
          </li>
          <li><strong>Close skin defect (if elliptical incision wider than stoma):</strong>
            <ul>
              <li>Routine SQ + skin closure cranial to stoma</li>
              <li>If significant tension, may need advancement flap</li>
            </ul>
          </li>
          <li>Remove purse-string suture from anus ✨ <em>(don't forget!)</em></li>
        </ol>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li><strong>Position dictates outcome</strong> — must reach pelvic urethra (wider) not penile urethra (narrow)</li>
          <li>Catheter test BEFORE final sutures — confirm 8 fr passes</li>
          <li>Dorsal sutures most critical — most stenosis comes from dorsal contraction</li>
          <li>Atraumatic tissue handling — friable urethral mucosa</li>
          <li>No tension on suture line</li>
          <li>Place urinary catheter for 1-3 d post-op (controversial — some surgeons no cath, others cath × 24-48 h)</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-op stabilization (if blocked cat presenting):</strong></p>
        <ul>
          <li>LRS or Plasmalyte 60-90 mL/kg over 1-2 h initial, then maintenance + 50% × 24-48 h</li>
          <li>Hyperkalemia management (see preOp section)</li>
          <li>Pain control: buprenorphine 0.02 mg/kg IV/IM/transmucosal q8h</li>
          <li>Antibiotics if cath in place &gt; 24 h: Amoxicillin-clavulanate 12.5 mg/kg PO q12h</li>
        </ul>
        <p><strong>Pre-medication for surgery:</strong></p>
        <ul>
          <li>Methadone 0.2-0.4 mg/kg IM/IV ✨</li>
          <li>Or Hydromorphone 0.05-0.1 mg/kg IV</li>
          <li>± Dexmedetomidine 1-3 mcg/kg IV (low dose, only if cardiovascularly stable)</li>
          <li>Maropitant 1 mg/kg SC (visceral analgesia + anti-emetic) ✓</li>
        </ul>
        <p><strong>Epidural ✨ (HIGHLY recommended for perineal surgery):</strong></p>
        <ul>
          <li>Lumbosacral epidural after induction</li>
          <li>Bupivacaine 0.5% — 1 mL/4.5 kg (max 1 mg/kg)</li>
          <li>+ Preservative-free morphine 0.1 mg/kg</li>
          <li>Or Hydromorphone 0.05 mg/kg preservative-free</li>
          <li>Provides 18-24 h post-op analgesia ✓</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 4-6 mg/kg IV titrated to effect, OR</li>
          <li>Alfaxalone 2-3 mg/kg IV titrated</li>
          <li>Avoid in azotemic / unstable patient: high-dose ketamine, dexmedetomidine boluses</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>± Fentanyl CRI 5-10 mcg/kg/h</li>
          <li>± Lidocaine CRI 25-50 mcg/kg/min — <strong>cat: use cautiously</strong> (sensitivity, lower max doses)</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Pre-op (at induction):
            <ul>
              <li>Cefazolin 22 mg/kg IV, repeat q90 min</li>
              <li>If positive culture pre-op: based on sensitivity (usually amoxicillin-clav or fluoroquinolone)</li>
            </ul>
          </li>
          <li>Post-op:
            <ul>
              <li>Amoxicillin-clavulanate 12.5-22 mg/kg PO q12h × 7-10 d</li>
              <li>Or based on pre-op culture</li>
            </ul>
          </li>
          <li>UTI is lifelong concern — recurrent infections likely require culture-driven therapy throughout cat's life ✨</li>
        </ul>
        <p><strong>Analgesia (perineal surgery is painful — multimodal essential ✨):</strong></p>
        <ul>
          <li>Continue opioid post-op:
            <ul>
              <li>Methadone 0.1-0.2 mg/kg IV/IM q6h × 24 h</li>
              <li>Buprenorphine 0.02 mg/kg IV/transmucosal q8h × 3-5 d ✨</li>
              <li>Or Buprenorphine SR 0.12 mg/kg SC (single injection × 72 h)</li>
            </ul>
          </li>
          <li>NSAID — start day 1-2 once renal function confirmed:
            <ul>
              <li>Robenacoxib 1-2 mg/kg PO/SC q24h × 3-6 d (max)</li>
              <li>Or Meloxicam 0.05 mg/kg PO q24h (chronic use controversial in cats; short course OK)</li>
              <li><strong>Avoid NSAID in cat with elevated BUN/creat post-block ✗</strong></li>
            </ul>
          </li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 7-14 d ✨ — excellent adjunct in cats (anxiolytic + analgesic)</li>
          <li>± Tramadol 1-4 mg/kg PO q12h (variable efficacy, often used)</li>
        </ul>
        <p><strong>Anti-anxiety / behavioral:</strong></p>
        <ul>
          <li>Gabapentin (above) helps</li>
          <li>Trazodone 50-100 mg/cat PO q12h × 1-2 weeks (reduces stress during recovery)</li>
          <li>Pheromone diffusers (Feliway) at home</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-48h) — hospitalize:</strong></p>
        <ul>
          <li>Recovery in quiet, warm cage</li>
          <li>Watch for: hemorrhage from stoma, urine production (catheter or natural), signs of obstruction</li>
          <li>If urinary catheter placed: maintain × 24-48 h, secure with sutures to prepuce remnant area
            <ul>
              <li>Then remove + ensure cat urinates voluntarily before discharge ✨</li>
              <li>Some surgeons skip catheter (if technique sound)</li>
            </ul>
          </li>
          <li>E-collar — ALWAYS, immediately ✗ (cat licking = stenosis, infection)</li>
          <li>Continue IV fluids until eating + drinking</li>
          <li>Pain control as above</li>
          <li>Confirm cat voids urine through new stoma — record stream + volume</li>
        </ul>
        <p><strong>Day 1-7:</strong></p>
        <ul>
          <li>Discharge typically day 2-3 once eating, urinating freely, stable</li>
          <li>Continue antibiotics, pain control</li>
          <li>E-collar 100% of time × 14-21 d ✗</li>
          <li><strong>SHREDDED PAPER LITTER × 14 d</strong> ✨ — NOT clay/clumping (granules can stick to fresh stoma → infection, irritation)</li>
          <li>Daily wound check by owner — photos help</li>
          <li>Restricted activity</li>
        </ul>
        <p><strong>Day 7-21:</strong></p>
        <ul>
          <li>Recheck day 10-14:
            <ul>
              <li>Stoma assessment — should accommodate at least 8 fr catheter</li>
              <li>Suture removal if non-absorbable</li>
              <li>Assess for stenosis (most common at 4-6 weeks post-op)</li>
            </ul>
          </li>
          <li>Continue paper litter through suture removal</li>
          <li>Then transition to standard low-dust litter (avoid scented, clumping initially)</li>
        </ul>
        <p><strong>Long-term management (lifelong) ✨:</strong></p>
        <ul>
          <li><strong>UTI surveillance:</strong>
            <ul>
              <li>Bacteria can ascend more easily through wider stoma</li>
              <li>Urinalysis q3-6 mo or with any signs (lethargy, hematuria, pollakiuria)</li>
              <li>Culture if pyuria/bacteriuria — many infections are subclinical</li>
              <li>Treat infections promptly, often based on culture</li>
            </ul>
          </li>
          <li><strong>Continue FLUTD management:</strong>
            <ul>
              <li>Wet/canned diet for hydration</li>
              <li>Multiple water sources, fountains</li>
              <li>Stress reduction (resources for multi-cat home)</li>
              <li>Consider urinary diet (Hill's c/d, Royal Canin urinary, Purina UR)</li>
              <li>Pheromones (Feliway)</li>
              <li>Environmental enrichment</li>
            </ul>
          </li>
          <li>PU does NOT eliminate FLUTD — it eliminates obstruction from FLUTD ✨</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Stenosis / stricture ✗</strong> — most common complication
            <ul>
              <li>Incidence: 5-15%</li>
              <li>Causes: stoma made too distal (penile urethra not pelvic), tension on suture line, infection, licking, contraction during healing</li>
              <li>Onset: usually 4-12 weeks post-op</li>
              <li>Signs: dysuria, stranguria, recurrent obstruction</li>
              <li>Tx: revision PU (more cranial, wider opening) ± stenting</li>
            </ul>
          </li>
          <li><strong>Recurrent UTI ✗</strong> — lifelong risk
            <ul>
              <li>30-50% of PU cats develop UTI in lifetime (vs 5-10% in normal cats)</li>
              <li>Many subclinical — surveillance important</li>
              <li>Treatment: culture-driven antibiotics</li>
              <li>Recurrent / multidrug-resistant: longer courses, intermittent prophylaxis (controversial)</li>
            </ul>
          </li>
          <li><strong>Urine leakage / SQ urine accumulation:</strong>
            <ul>
              <li>From dehiscence of suture line</li>
              <li>Cellulitis, urine scald</li>
              <li>Tx: drain, antibiotics, may need revision</li>
            </ul>
          </li>
          <li>Hemorrhage from urethral mucosa (immediate post-op — usually self-limiting)</li>
          <li>Wound dehiscence at distal closure (perineal area)</li>
          <li>Fecal incontinence (rare — only with very aggressive dissection damaging caudal rectal nerve)</li>
          <li>Persistent dysuria from FIC component (PU doesn't fix FIC, just obstruction)</li>
          <li>Excessive perineal scarring</li>
          <li>Pyelonephritis (ascending infection from chronic UTI)</li>
          <li>Bladder atony (from chronic distension pre-op) — usually improves with catheterization + bethanechol</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Properly performed PU ✓:</strong>
            <ul>
              <li>Resolution of obstructive episodes: 90-95%</li>
              <li>Stenosis rate: 5-15% (lower with experienced surgeon, careful pelvic urethra exposure)</li>
              <li>Quality of life excellent post-recovery</li>
              <li>Lifelong UTI surveillance needed</li>
            </ul>
          </li>
          <li><strong>Mortality:</strong>
            <ul>
              <li>Healthy stable cat: &lt; 1%</li>
              <li>Acute obstruction with significant azotemia/hyperkalemia (operated too soon): 5-15%</li>
              <li>Most deaths preventable with proper stabilization first ✨</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>Cats are essentially "open" to the urinary environment — UTI risk is lifelong</li>
              <li>Most cats live normally with proper management</li>
              <li>Continued FLUTD signs possible (FIC component) — manage with dietary + environmental changes</li>
            </ul>
          </li>
          <li><strong>When PU fails (stenosis):</strong>
            <ul>
              <li>Revision PU possible (more cranial)</li>
              <li>Subtotal cystectomy + cystostomy in extreme cases (rare)</li>
              <li>Trans-pelvic urethrostomy (very advanced, specialty referral)</li>
            </ul>
          </li>
          <li><strong>Comparison with medical management alone:</strong>
            <ul>
              <li>Recurrent obstruction without PU: 40-50% reblock within 1 yr, even with optimal medical Tx</li>
              <li>PU prevents obstruction permanently in 90%+ ✓</li>
              <li>Trade-off: lifelong UTI risk vs acute obstruction risk</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>PU = "salvage from recurrent obstruction"</strong> — bypasses narrow distal urethra, exposes wider pelvic urethra<br><br>**Pelvic urethra exposure = whole game** ✨ — must dissect cranially enough or stoma will stenose. **Catheter test confirms position**<br><br>⚠️ **Stabilize hyperkalemic blocked cat FIRST** — operating on K+ &gt; 6.5 = anesthetic death. Cath relief + 24-72 h fluids before surgery<br><br>✗ **Lifelong UTI surveillance** — 30-50% develop infections, many subclinical. Annual+ urinalysis non-negotiable</div>
      `,
    },
  },

  /* ============================================================
     UROGENITAL — Urethral obstruction relief
  ============================================================ */
  {
    id: 'urethral-obstruction-relief',
    titleEn: 'Urethral Obstruction Relief (Emergency Catheterization / Cystotomy)',
    titleTh: 'แก้ไขท่อปัสสาวะอุดตัน — ฉุกเฉิน',
    type: 'surgery',
    species: ['cat', 'dog'],
    system: 'urogenital',
    tags: ['blocked cat', 'urethral obstruction', 'urolith', 'urethral plug', 'hyperkalemia', 'post-obstructive diuresis', 'retropulsion', 'cystocentesis', 'cystotomy', 'urethrolithiasis'],
    aliases: ['blocked cat', 'urethral obstruction', 'แมวฉี่ไม่ออก', 'หินอุดท่อ', 'ปัสสาวะไม่ออก'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Urethra (Obstruction)',
    sections: {
      indications: `
        <ul>
          <li><strong>Acute urethral obstruction ✗</strong> — true emergency
            <ul>
              <li>Cat: most often urethral plug (mucoid material + struvite crystals + cells), male intact or neutered, age 2-8 yr</li>
              <li>Dog: usually urolith (struvite, calcium oxalate, urate, cystine) lodged in os penis area or ischial arch</li>
              <li>Less common: urethral stricture, neoplasia, blood clots, prostatic disease (intact male dog)</li>
            </ul>
          </li>
          <li><strong>Clinical presentation ✗:</strong>
            <ul>
              <li>Pollakiuria, stranguria with NO urine production</li>
              <li>Vocalizing, abdominal pain, vomiting (uremia)</li>
              <li>Lethargy → collapse if delayed</li>
              <li>Distended firm bladder on PE</li>
              <li>Hyperkalemic bradyarrhythmia</li>
            </ul>
          </li>
          <li><strong>Confirmed obstruction:</strong>
            <ul>
              <li>Inability to pass catheter</li>
              <li>Distended bladder despite straining</li>
              <li>Imaging confirms urolith</li>
            </ul>
          </li>
          <li><strong>Cystotomy indicated for ✨:</strong>
            <ul>
              <li>Multiple uroliths can't be retropulsed</li>
              <li>Urolith in bladder unable to be voided</li>
              <li>Persistent obstruction despite catheter attempts</li>
              <li>Bladder rupture from severe distension</li>
              <li>Bladder neoplasia obstructing trigone</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>NONE absolute</strong> — relief of obstruction = life-saving
          <li>Relative considerations:
            <ul>
              <li>Catheter relief: hyperkalemia + arrhythmia → stabilize FIRST (5-10 min) then relieve</li>
              <li>Cystotomy: hemodynamic instability → relieve first (cath or cystocentesis), stabilize, then surgical</li>
              <li>Cystocentesis: large distended bladder = higher leak risk; some advise against pre-op cysto in critical cats (controversial — most clinicians use cysto in selected cases) ⚠️</li>
            </ul>
          </li>
        </ul>
      `,
      preOp: `
        <p><strong>1. RAPID triage on arrival ✨ — minutes matter:</strong></p>
        <ul>
          <li>Brief PE: bladder size, MM, HR, hydration, mentation</li>
          <li>IMMEDIATE ECG ✨ — looking for hyperkalemic changes:
            <ul>
              <li>Bradycardia (HR &lt; 120 in cat)</li>
              <li>Tall peaked T-waves</li>
              <li>Wide / absent P-waves</li>
              <li>Wide QRS / sine wave morphology = critical, cardiac arrest imminent ✗</li>
            </ul>
          </li>
          <li>STAT: K+, BUN, creat, BG (point-of-care if available)</li>
        </ul>
        <p><strong>2. Stabilize hyperkalemia (if K+ &gt; 6.0 or ECG changes) ✨:</strong></p>
        <ul>
          <li><strong>Calcium gluconate 10%</strong> — 0.5-1.5 mL/kg slow IV over 10-15 min, monitor ECG
            <ul>
              <li>Stabilizes myocardium (does NOT lower K+) — bridge while other Tx works</li>
              <li>Effect: 30-60 min</li>
              <li>If bradyarrhythmia, peaked T waves resolve = working</li>
            </ul>
          </li>
          <li><strong>IV fluids:</strong>
            <ul>
              <li>0.9% NaCl 30-50 mL/kg over 30-60 min initial (no K+ in fluid)</li>
              <li>LRS or Plasmalyte fine after K+ drops &lt; 5.5 (low K content unimportant once renal function returning)</li>
              <li>Volume expansion + dilutes K+ + restores renal perfusion</li>
            </ul>
          </li>
          <li><strong>Insulin + dextrose</strong> (drives K+ intracellular):
            <ul>
              <li>Regular insulin 0.25 IU/kg IV bolus</li>
              <li>+ Dextrose 0.5 g/kg IV bolus</li>
              <li>+ Dextrose CRI 2.5-5% in fluids × 4-6 h to prevent hypoglycemia</li>
              <li>Effect onset 15-30 min, lasts 4-6 h</li>
            </ul>
          </li>
          <li><strong>Or Terbutaline</strong> 0.01 mg/kg IM/IV (β-agonist, drives K+ intracellular) — alternative if insulin unavailable</li>
          <li>± Sodium bicarbonate 1-2 mEq/kg IV slow (if severe acidosis, controversial)</li>
        </ul>
        <p><strong>3. Decompressive cystocentesis (if severe distension or imminent rupture):</strong></p>
        <ul>
          <li>22 g needle through ventral abdominal wall (clip + asepsis)</li>
          <li>Aim for caudoventral bladder wall</li>
          <li>Withdraw enough urine to relieve pressure (~ 50% of estimated volume)</li>
          <li>Submit sample for UA + culture ✨</li>
          <li>Risk: leak, but with distended bladder the wall is thinned and risk of puncture leak is similar to risk of spontaneous rupture</li>
          <li>Controversy: "decompressive cystocentesis is contraindicated" school vs "it relieves pressure + provides sample" school — most ER clinicians use it in select cases</li>
        </ul>
        <p><strong>4. Workup:</strong></p>
        <ul>
          <li>CBC, biochem (BUN/creat usually elevated — post-renal azotemia), electrolytes, BG</li>
          <li>Acid-base — typically metabolic acidosis</li>
          <li>UA + culture — even if not for surgery, guides post-op antibiotics</li>
          <li>Abdominal radiographs ± US:
            <ul>
              <li>Identify uroliths (radio-opaque struvite, calcium oxalate; radiolucent urate, cystine — need contrast or US)</li>
              <li>Bladder size, free fluid (rupture)</li>
              <li>Number + size of stones (helps choose retrieval method)</li>
            </ul>
          </li>
          <li>If bladder rupture suspected: abdominal effusion fluid creat &gt; serum creat × 2 = uroabdomen ✗</li>
        </ul>
      `,
      technique: `
        <p><strong>A. Urinary catheter placement (cat — first attempt) ✨:</strong></p>
        <ol>
          <li>Sedate / anesthetize once stable: propofol 2-4 mg/kg IV titrated, or alfaxalone 2-3 mg/kg IV</li>
          <li>Position: dorsal recumbency or lateral, hindlimbs cleaned</li>
          <li>Extrude penis, clean preputial area</li>
          <li>Lubricate 3.5 fr open-ended tomcat catheter (or 5 fr red rubber)</li>
          <li>Pass catheter into urethra; gentle pressure</li>
          <li>If meets obstruction (urethral plug typical):
            <ul>
              <li>Withdraw, flush with sterile saline (5-10 mL syringe)</li>
              <li>Re-advance with gentle pressure</li>
              <li>If urolith felt: <strong>retropulsion</strong> — flush vigorously with saline (10-20 mL bolus) while applying counter-pressure rectally to urethra (occlude, push stone back into bladder) ✨</li>
              <li>Alternate: hydropulsion under sedation, may take multiple attempts</li>
            </ul>
          </li>
          <li>Once catheter passes into bladder:
            <ul>
              <li>Flush bladder with sterile saline until effluent clear</li>
              <li>Replace tomcat with indwelling 3.5-5 fr red rubber (more comfortable for indwelling)</li>
              <li>Suture catheter to prepuce remnant or skin to keep in place</li>
              <li>Connect to closed collection system</li>
              <li>Maintain × 24-72 h (controversy: 24 vs 48 vs 72 h)</li>
            </ul>
          </li>
        </ol>
        <p><strong>B. Urinary catheter placement (dog):</strong></p>
        <ul>
          <li>Smaller catheter than expected (8-12 fr in medium dog, 5-8 fr small dog)</li>
          <li>Common stuck location: os penis (caudal aspect of os penis where it begins)</li>
          <li>Other location: ischial arch (just caudal to scrotum)</li>
          <li>Retropulsion technique:
            <ol>
              <li>Insert catheter to point of obstruction</li>
              <li>Vigorous flush with sterile saline (20-50 mL) to push stone back into bladder</li>
              <li>If successful: stone now in bladder → cystotomy to remove</li>
              <li>If unsuccessful and stone &lt; size of urethra at narrowest: re-attempt</li>
              <li>If stuck: surgical urethrotomy at site of obstruction (rare in modern practice — usually cystotomy after retropulsion)</li>
            </ol>
          </li>
        </ul>
        <p><strong>C. Cystotomy (after retropulsion to remove stones from bladder) ✨:</strong></p>
        <ol>
          <li>General anesthesia, dorsal recumbency</li>
          <li>Ventral midline laparotomy, caudal abdomen</li>
          <li>Identify bladder, isolate with moistened laparotomy sponges</li>
          <li>Place 2 stay sutures in bladder apex (4-0 PDS)</li>
          <li>Aspirate bladder content with syringe + needle (avoid spillage)</li>
          <li>Stab incision in ventral bladder body (avoid trigone, ureters)</li>
          <li>Extend incision with Metzenbaum scissors or scalpel</li>
          <li>Remove stones manually + suction</li>
          <li><strong>Crucial: ensure urethra is clear ✨</strong>:
            <ul>
              <li>Pass urinary catheter retrograde from urethra into bladder via natural opening</li>
              <li>Pass catheter from cystotomy down into urethra ("bidirectional check")</li>
              <li>Confirm full patency before closing</li>
            </ul>
          </li>
          <li>Submit stones for stone analysis ✨ (mineral type guides prevention)</li>
          <li>Submit bladder mucosa biopsy if neoplasia/severe inflammation suspected</li>
          <li>Close bladder:
            <ul>
              <li>Single layer simple continuous appositional with 4-0 PDS (avoid mucosa-penetrating sutures — may serve as nidus for stone formation, controversial)</li>
              <li>Or 2-layer: simple continuous + Cushing inverting</li>
              <li>Leak test: fill bladder with saline via catheter → check for leaks → additional sutures if needed</li>
            </ul>
          </li>
          <li>Lavage abdomen, close routinely</li>
        </ol>
        <p><strong>D. Surgical urethrotomy (rarely needed):</strong></p>
        <ol>
          <li>Indications: stone irretrievably stuck despite retropulsion, urethral disruption</li>
          <li>Approach: ventral incision over palpable obstruction</li>
          <li>Incise urethra over stone, remove</li>
          <li>Close urethra primarily with 4-0 PDS simple interrupted (or leave to heal by 2nd intention if at scrotal/perineal location)</li>
          <li>Place urinary catheter for 5-7 d to bypass repair</li>
          <li>Cat: better to convert to PU at this point (definitive vs urethrotomy)</li>
        </ol>
      `,
      drugs: `
        <p><strong>Pre-op stabilization (acute hyperkalemic blocked patient) ✨:</strong></p>
        <ul>
          <li><strong>Calcium gluconate 10%</strong> 0.5-1.5 mL/kg slow IV over 10-15 min ✓
            <ul>
              <li>Cardioprotection — start FIRST if K+ &gt; 6.5 or ECG changes</li>
              <li>Monitor ECG for HR drop</li>
            </ul>
          </li>
          <li><strong>Fluids — 0.9% NaCl</strong> 30-50 mL/kg over 30-60 min initial</li>
          <li><strong>Insulin + dextrose:</strong>
            <ul>
              <li>Regular insulin 0.25 IU/kg IV bolus + Dextrose 0.5 g/kg IV bolus</li>
              <li>Dextrose CRI 2.5-5% × 4-6 h</li>
            </ul>
          </li>
          <li>± Terbutaline 0.01 mg/kg IM (alternative)</li>
          <li>± Sodium bicarbonate 1-2 mEq/kg IV slow (if severe acidosis &lt; 7.10, controversial)</li>
        </ul>
        <p><strong>Sedation for catheterization (cat):</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV titrated to effect (preferred — short duration, reversible) ✓</li>
          <li>Or Alfaxalone 2-3 mg/kg IV titrated</li>
          <li>Avoid: high-dose ketamine (renal excretion — accumulates in azotemic cat), high-dose dexmedetomidine</li>
          <li>Buprenorphine 0.02 mg/kg IV/IM beforehand for analgesia</li>
        </ul>
        <p><strong>Analgesia / anti-spasm:</strong></p>
        <ul>
          <li><strong>Buprenorphine</strong> 0.02 mg/kg IV/IM/transmucosal q8h ✓</li>
          <li><strong>Prazosin</strong> 0.25-0.5 mg/cat PO q12-24h × 7-14 d ✨ — α-1 antagonist, relaxes urethral smooth muscle:
            <ul>
              <li>Reduces post-cath urethral spasm</li>
              <li>May reduce reblock rate (controversial evidence)</li>
              <li>Standard in many ER protocols</li>
            </ul>
          </li>
          <li><strong>Gabapentin</strong> 5-10 mg/kg PO q8-12h × 7-14 d (anxiolysis, analgesia) ✨</li>
          <li>± Acepromazine 0.025-0.05 mg/kg SC for stress (controversial — ↓ urethral tone but hypotension risk)</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li><strong>Catheter in place &gt; 24 h:</strong>
            <ul>
              <li>Ampicillin 22 mg/kg IV q8h or Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h while indwelling</li>
              <li>Continue × 7-10 d after cath removal</li>
              <li>Or guided by culture results</li>
            </ul>
          </li>
          <li><strong>Cystotomy:</strong>
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction, repeat q90 min</li>
              <li>Post-op: Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 7-14 d</li>
              <li>Adjust based on culture</li>
            </ul>
          </li>
        </ul>
        <p><strong>NSAIDs ✗ — AVOID until renal function recovered:</strong></p>
        <ul>
          <li>Wait until BUN/creat normalizing AND patient hydrated AND eating</li>
          <li>Typically not safe to start until day 2-3 post-relief</li>
          <li>Once stable: meloxicam (cat) 0.05 mg/kg PO q24h × 3 d, robenacoxib 1-2 mg/kg q24h × 3 d</li>
        </ul>
        <p><strong>For cystotomy (cat or dog) — see also enterotomy/general principles ✨</strong></p>
      `,
      postOp: `
        <p><strong>Immediate post-relief (catheter in place):</strong></p>
        <ul>
          <li>ICU monitoring × 24-72 h</li>
          <li>Continuous ECG until K+ normalized</li>
          <li>IV fluids — must MATCH urine output ✨ <strong>"post-obstructive diuresis"</strong>:
            <ul>
              <li>UOP often 2-4 mL/kg/h × 24-48 h (vs normal 1-2)</li>
              <li>Significant fluid + electrolyte losses</li>
              <li>Match losses + maintenance: typically 80-150 mL/kg/d crystalloid</li>
              <li>Add KCl to fluids once K+ &lt; 5.5 (10-20 mEq/L) — many cats become hypokalemic during diuresis</li>
            </ul>
          </li>
          <li>Daily: BUN/creat, K+, electrolytes</li>
          <li>UA daily while cath in (look for sediment improvement)</li>
          <li>Pain control as above</li>
          <li>Maintain quiet environment</li>
          <li>Closed collection system, hygiene of cath site</li>
        </ul>
        <p><strong>Catheter removal (typically day 2-3):</strong></p>
        <ul>
          <li>Remove when:
            <ul>
              <li>Hyperkalemia, azotemia resolved</li>
              <li>Patient stable, eating, drinking</li>
              <li>Urine sediment improving (less debris)</li>
              <li>Cat appears comfortable</li>
            </ul>
          </li>
          <li>Some clinicians: minimum 24 h, others maximum 72 h (longer = ↑ UTI risk)</li>
          <li>After removal: monitor × 12-24 h to ensure spontaneous urination
            <ul>
              <li>If reblocks: replace catheter, consider PU</li>
            </ul>
          </li>
        </ul>
        <p><strong>Discharge home (day 2-5):</strong></p>
        <ul>
          <li>Continue antibiotics × 7-14 d</li>
          <li>Continue prazosin × 7-14 d ✨</li>
          <li>Continue gabapentin × 7-14 d</li>
          <li>NSAID if renal function normal × 3-5 d</li>
          <li><strong>Diet change ✨</strong>:
            <ul>
              <li>Wet/canned food only (high water content)</li>
              <li>Or prescription urinary diet (Hill's c/d, Royal Canin urinary, Purina UR)</li>
              <li>Multiple water sources, fountains</li>
            </ul>
          </li>
          <li>Stress reduction:
            <ul>
              <li>Pheromones (Feliway), enrichment, hiding spots</li>
              <li>Multi-cat household: separate resources (1 litterbox per cat + 1 extra)</li>
              <li>Trazodone 50-100 mg/cat PO q12h × 1-2 weeks if anxious</li>
            </ul>
          </li>
        </ul>
        <p><strong>Cystotomy post-op (after stone removal):</strong></p>
        <ul>
          <li>NPO × 6-12 h, then small water + food</li>
          <li>E-collar 14 d</li>
          <li>Restricted activity 14 d</li>
          <li>Antibiotics 7-14 d</li>
          <li>Suture removal day 10-14</li>
          <li>Stone analysis result (typically 1-2 weeks) → diet recommendation:
            <ul>
              <li>Struvite (cat) — urinary diet, increase water</li>
              <li>Calcium oxalate — urinary diet, alkalinizing, monitor ionized Ca</li>
              <li>Urate — low-purine diet (Yorkie, Dalmatian)</li>
              <li>Cystine — alkalinizing, low-protein, methionine restriction (rare)</li>
            </ul>
          </li>
          <li>Follow-up imaging (US or rads) at 3-6 mo to detect recurrence</li>
        </ul>
        <p><strong>Discuss PU surgery if:</strong></p>
        <ul>
          <li>2-3 episodes of obstruction (cat)</li>
          <li>Severe initial obstruction with extensive trauma</li>
          <li>Owner unable to monitor closely</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Re-obstruction ✗</strong>:
            <ul>
              <li>Cat: 25-40% reblock within 1 yr if no PU done; 10-15% in first 30 d post-cath</li>
              <li>Dog: depends on stone type + dietary management; high if no diet change</li>
              <li>Tx: re-cath, eventually PU surgery (cat) or repeat cystotomy + better diet (dog)</li>
            </ul>
          </li>
          <li><strong>Bladder rupture</strong>:
            <ul>
              <li>From severe distension or iatrogenic during catheterization</li>
              <li>Uroabdomen — abdominal effusion creat &gt; 2× serum</li>
              <li>Tx: emergency surgery, repair, lavage</li>
            </ul>
          </li>
          <li><strong>Acute kidney injury</strong>:
            <ul>
              <li>From back-pressure + ischemia</li>
              <li>Most resolve with fluid therapy</li>
              <li>Rare progression to chronic kidney disease</li>
            </ul>
          </li>
          <li><strong>Hyperkalemic cardiac arrest ✗</strong>:
            <ul>
              <li>Highest risk during induction of anesthesia in unstable patient</li>
              <li>PREVENT: stabilize K+ &lt; 6.0 BEFORE inducing anesthesia ✨</li>
            </ul>
          </li>
          <li><strong>Urethral trauma from catheterization</strong>:
            <ul>
              <li>Mucosal damage, false passage, perforation (rare)</li>
              <li>Predisposes to stricture later</li>
            </ul>
          </li>
          <li>UTI from catheter (10-30% within 48 h of catheterization)</li>
          <li>Hypokalemia during post-obstructive diuresis (must supplement K+)</li>
          <li>Persistent hematuria post-relief (irritated mucosa — usually resolves 3-7 d)</li>
          <li>Urethral stricture (late, weeks-months after trauma)</li>
          <li>Peritonitis from iatrogenic bladder rupture or cystotomy dehiscence</li>
          <li>Persistent dysuria from FIC/idiopathic cystitis (ongoing condition not "fixed" by relief)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Acute relief outcome ✓:</strong>
            <ul>
              <li>Survival to discharge: 90-95% with prompt relief + stabilization</li>
              <li>Mortality 5-10% in severe cases (bradyarrhythmia, severe AKI, bladder rupture)</li>
              <li>Length of stay: 2-5 d typical</li>
            </ul>
          </li>
          <li><strong>Long-term — cat ✨:</strong>
            <ul>
              <li>Without PU: 25-40% reblock within 1 yr</li>
              <li>40-50% reblock at some point in life</li>
              <li>With dietary management + stress reduction: lower</li>
              <li>With PU surgery after 2-3 episodes: &gt; 90% never reblock (but lifelong UTI risk)</li>
            </ul>
          </li>
          <li><strong>Long-term — dog (cystotomy + dietary management):</strong>
            <ul>
              <li>Struvite (most): 80-90% prevention with urinary diet + UTI control</li>
              <li>Calcium oxalate: 30-50% recur within 3 yr (harder to prevent dietetically)</li>
              <li>Urate: high recurrence in Dalmatian without lifelong allopurinol + low-purine diet</li>
            </ul>
          </li>
          <li><strong>Quality of life:</strong>
            <ul>
              <li>Most cats/dogs return to normal activity within 1-2 weeks</li>
              <li>Lifelong management (diet, hydration, stress) — manageable</li>
              <li>Owner education + commitment determines long-term success</li>
            </ul>
          </li>
          <li><strong>Cost-benefit (cat with recurrent obstructions):</strong>
            <ul>
              <li>3rd episode of relief = often costs more than PU surgery</li>
              <li>Discuss PU early in recurrent disease ✨</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Stabilize hyperkalemia first, ALWAYS</strong> ✨ — calcium gluconate + fluids + insulin/dextrose ก่อน induction anesthesia<br><br>**Post-obstructive diuresis 24-48 h** = ภาวะที่ทุกคนลืม. ต้อง match fluid output, monitor K+ (มัก hypoKemic ตอนหลัง)<br><br>⚠️ **Decompressive cystocentesis** = controversial — risk vs benefit case-by-case, but มี nephrologist ใช้กันทั่วไปในเคส severe<br><br>✗ **2-3 episodes of cat reblock = discuss PU** — ค่าใช้จ่ายซ้ำๆ + animal welfare > one-time PU procedure</div>
      `,
    },
  },

  /* ============================================================
     ORTHOPEDIC — CCL extracapsular
  ============================================================ */
  {
    id: 'ccl-extracapsular-lateral-suture',
    titleEn: 'CCL Repair — Extracapsular (Lateral Suture / Fabello-Tibial)',
    titleTh: 'ผ่าตัดเอ็นไขว้หน้า — Extracapsular (Lateral suture)',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'orthopedic',
    tags: ['CCL rupture', 'cranial cruciate ligament', 'lateral suture', 'extracapsular', 'fabello-tibial', 'meniscal release', 'cranial drawer', 'tibial thrust', 'medial parapatellar arthrotomy', 'monofilament nylon'],
    aliases: ['CCL repair', 'lateral suture', 'extracapsular stabilization', 'ผ่าเอ็นไขว้', 'ACL repair'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Stifle (CCL)',
    sections: {
      indications: `
        <ul>
          <li><strong>Cranial cruciate ligament (CCL) rupture ✗</strong> — primary indication
            <ul>
              <li>Complete or partial rupture with instability</li>
              <li>Most common orthopedic disease in dogs (5x more common than CCL injury in humans)</li>
              <li>Mean age 4-7 yr; predisposed breeds: Lab, Rottweiler, Newfoundland, Mastiff, Boxer</li>
              <li>Female + spayed = ↑ risk</li>
              <li>Bilateral within 1-2 yr in 40-60% of cases ✨</li>
            </ul>
          </li>
          <li><strong>Best candidates for extracapsular technique ✨:</strong>
            <ul>
              <li>Small breed dogs &lt; 15-20 kg ✓</li>
              <li>Older dogs (lower-demand activity)</li>
              <li>Cats (CCL rupture rare in cats; extracapsular usually adequate)</li>
              <li>Cost-conscious owners (alternative to TPLO/TTA for large dogs)</li>
              <li>Concurrent medical conditions limiting more invasive surgery</li>
            </ul>
          </li>
          <li><strong>Less ideal candidates (consider TPLO/TTA instead):</strong>
            <ul>
              <li>Active medium-large dogs (failure rate higher)</li>
              <li>Working / sport dogs</li>
              <li>Very steep tibial plateau angle (TPA &gt; 30°)</li>
              <li>Recurrent failures of extracapsular</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Active joint infection (must clear first)</li>
          <li>Severe pre-existing osteoarthritis (procedure helps but limited benefit; manage medically as alternative)</li>
          <li>Untreated meniscal damage — must address simultaneously ✨</li>
          <li>Coagulopathy</li>
          <li>Skin infection / dermatitis over surgical site</li>
          <li>Owner unable to provide 8-12 weeks restricted activity post-op (essential for outcome)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Diagnosis ✨:</strong></p>
        <ul>
          <li><strong>Physical exam tests:</strong>
            <ul>
              <li><strong>Cranial drawer test</strong> — translation of tibia cranial relative to femur (positive = CCL rupture)
                <ul>
                  <li>Stand patient or lateral recumbency</li>
                  <li>Stabilize femur, push tibia cranial</li>
                  <li>&gt; 1-2 mm = significant; "thunk" feel</li>
                  <li>Sedation often needed for accurate exam (muscle relaxation) ✨</li>
                </ul>
              </li>
              <li><strong>Tibial compression test (tibial thrust)</strong> — flex hock while stifle held fixed; positive = tibia translates cranial
                <ul>
                  <li>More sensitive in chronic / partial rupture</li>
                  <li>Mimics weight-bearing forces</li>
                </ul>
              </li>
              <li><strong>Sit test ✨</strong> — patient sits with affected leg held out laterally (avoiding flexion/internal rotation)</li>
              <li>Medial buttress — palpable thickening on medial joint line (chronic disease)</li>
              <li>Joint effusion, lameness, decreased ROM</li>
            </ul>
          </li>
          <li><strong>Imaging:</strong>
            <ul>
              <li>Radiographs (lateral + craniocaudal) ✨:
                <ul>
                  <li>Joint effusion (loss of infrapatellar fat pad)</li>
                  <li>Caudal subluxation of femur</li>
                  <li>Osteophytes (chronic disease — femoral condyles, patella, tibial plateau)</li>
                  <li>Cranial displacement of fabella (positive drawer view)</li>
                  <li>Steep tibial plateau angle (measure if planning TPLO option)</li>
                </ul>
              </li>
              <li>MRI / arthroscopy: gold standard for ligament + meniscal evaluation but rarely available</li>
            </ul>
          </li>
        </ul>
        <p><strong>2. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA (age-appropriate)</li>
          <li>Coag panel if breed-related concerns</li>
          <li>Discuss bilateral disease — examine other limb</li>
          <li>Address obesity if present (improves outcome significantly) ✨</li>
        </ul>
        <p><strong>3. Pre-op planning:</strong></p>
        <ul>
          <li>Approach: medial parapatellar (most common) vs lateral parapatellar</li>
          <li>Suture material decision: heavy monofilament nylon, Securos system, FiberWire, etc.</li>
          <li>Determine number + placement of sutures</li>
          <li>Plan for meniscal evaluation ± release / removal</li>
          <li>Discuss expected recovery + restrictions with owner</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence:</strong></p>
        <ol>
          <li>Anesthesia, lateral recumbency with affected limb up</li>
          <li>Wide clip + scrub from ileum to hock; hanging leg prep (pendant)</li>
          <li>Standard stifle drape, free leg drape</li>
        </ol>
        <p><strong>Step 1 — Joint exploration (medial parapatellar arthrotomy) ✨:</strong></p>
        <ol>
          <li>Skin incision: from distal patella to proximal tibial tuberosity, parallel to patellar tendon, lateral to midline</li>
          <li>Subcutaneous + fascial incision</li>
          <li>Medial parapatellar fascial incision — preserves patellar retinaculum</li>
          <li>Luxate patella laterally (or open lateral parapatellar if preferred)</li>
          <li>Exposure: visualize trochlear groove, condyles, CCL stump, menisci</li>
        </ol>
        <p><strong>Step 2 — CCL evaluation:</strong></p>
        <ul>
          <li>Confirm rupture (complete vs partial vs intact)</li>
          <li>Remove ruptured CCL stump (debride for clarity, prevent impingement)</li>
          <li>Inspect caudal cruciate ligament (rare concurrent injury)</li>
        </ul>
        <p><strong>Step 3 — Meniscal evaluation ✨ (CRITICAL — don't miss):</strong></p>
        <ul>
          <li>Probe BOTH menisci, especially medial (more often torn)</li>
          <li>Caudal pole of medial meniscus = most common tear location ("bucket-handle" tear)</li>
          <li>Use Hohmann retractor / spay hook to lift meniscus</li>
          <li><strong>If torn:</strong>
            <ul>
              <li>Partial meniscectomy of damaged portion</li>
              <li>Preserve healthy peripheral rim</li>
              <li>Submit for histopath if diagnostic question</li>
            </ul>
          </li>
          <li><strong>Meniscal release (controversial) ✨:</strong>
            <ul>
              <li>If meniscus intact but unstable joint → release caudal pole of medial meniscus prophylactically</li>
              <li>Indications: TPLO/TTA cases, some recommend for extracapsular too</li>
              <li>Reduces "post-liminary meniscal tear" rate (10-15% without release)</li>
              <li>Done by transecting meniscotibial ligament caudally</li>
              <li>Drawback: alters joint mechanics, may ↑ OA</li>
              <li>Decision case-by-case</li>
            </ul>
          </li>
        </ul>
        <p><strong>Step 4 — Joint lavage + closure of arthrotomy:</strong></p>
        <ul>
          <li>Lavage joint with warm saline</li>
          <li>Close joint capsule with 3-0 or 2-0 PDS continuous (avoid retinaculum tightening)</li>
          <li>Arthrotomy closure may serve as additional restraint</li>
        </ul>
        <p><strong>Step 5 — Place lateral suture (extracapsular stabilization) ✨:</strong></p>
        <ol>
          <li><strong>Identify landmarks:</strong>
            <ul>
              <li>Lateral fabella — palpable as bony prominence caudolateral to femoral condyle</li>
              <li>Tibial tuberosity / proximal tibia — drill site location</li>
            </ul>
          </li>
          <li><strong>Suture material choice:</strong>
            <ul>
              <li>Heavy monofilament nylon 40-80 lb test (Securos, fishing line, leader line) — most common</li>
              <li>Or FiberWire, FiberTape (more expensive)</li>
              <li>Size based on patient: 40-50 lb &lt; 20 kg, 60-80 lb &gt; 20 kg</li>
            </ul>
          </li>
          <li><strong>Tibial tunnel:</strong>
            <ul>
              <li>Drill bone tunnel through tibial tuberosity (caudal to insertion of patellar tendon)</li>
              <li>2.0-3.5 mm drill bit depending on patient size</li>
              <li>Pass suture through tunnel</li>
            </ul>
          </li>
          <li><strong>Around lateral fabella:</strong>
            <ul>
              <li>Pass suture around lateral fabella (distal to proximal direction)</li>
              <li>Use Aiken or curved hemostat to thread suture beneath fabello-femoral ligament</li>
              <li>Confirm suture is engaging fabella firmly (not just soft tissue)</li>
            </ul>
          </li>
          <li><strong>Tension + secure:</strong>
            <ul>
              <li>With stifle in 135° (slight flexion = neutral position), eliminate cranial drawer
                <ul>
                  <li>Have assistant hold stifle stable</li>
                  <li>Tension suture until cranial drawer eliminated (don't overtension — internal rotation)</li>
                </ul>
              </li>
              <li>Tie with 4-5 throws of square knots, or use crimping system (Securos)</li>
              <li>Cut excess suture, ensure no sharp ends protruding</li>
            </ul>
          </li>
          <li><strong>Confirm stability:</strong>
            <ul>
              <li>Re-test cranial drawer — should be eliminated or minimal</li>
              <li>Test ROM — full flexion + extension without restriction</li>
              <li>No internal rotation (suture too tight)</li>
            </ul>
          </li>
        </ol>
        <p><strong>Step 6 — Closure:</strong></p>
        <ul>
          <li>Close subcutaneous fascia, SQ, and skin in routine layers</li>
          <li>Often consider short-term external coaptation (modified Robert Jones × 24-48 h) for swelling control</li>
          <li>Or simply soft padded bandage</li>
        </ul>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>"Internal stabilization is temporary" — extracapsular suture provides stability until periarticular fibrosis develops (8-12 weeks). Suture WILL fail/stretch eventually — depends on fibrosis for long-term function</li>
          <li>Tibial tunnel placement: caudal to tibial crest, not in articular surface</li>
          <li>Fabellar engagement: must be around bone, not just soft tissue</li>
          <li>Tension: enough to eliminate drawer in normal stance, NOT cranking (too tight = excessive internal rotation, accelerated OA)</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.2-0.4 mg/kg IM/IV ✨</li>
          <li>± Acepromazine 0.01-0.03 mg/kg IM (if not at-risk breed)</li>
          <li>Or Dexmedetomidine 3-5 mcg/kg IM + opioid</li>
          <li>Maropitant 1 mg/kg SC (anti-emetic)</li>
        </ul>
        <p><strong>Loco-regional analgesia ✨ — cornerstone of stifle surgery:</strong></p>
        <ul>
          <li><strong>Epidural</strong> (preferred):
            <ul>
              <li>Lumbosacral approach</li>
              <li>Bupivacaine 0.5% — 1 mL/4.5 kg (max 1 mg/kg)</li>
              <li>+ Preservative-free morphine 0.1 mg/kg</li>
              <li>18-24 h post-op analgesia</li>
            </ul>
          </li>
          <li><strong>Femoral + sciatic nerve blocks</strong> (alternative ✨):
            <ul>
              <li>Bupivacaine 0.25-0.5% — 0.1 mL/kg per nerve</li>
              <li>± Dexmedetomidine 0.5 mcg/kg as adjuvant</li>
              <li>Selective sensory block, preserves motor</li>
              <li>12-18 h analgesia</li>
            </ul>
          </li>
          <li><strong>Intra-articular:</strong>
            <ul>
              <li>Bupivacaine 0.25-0.5% — 0.1 mL/kg into joint at end of surgery (some debate about chondrotoxicity with chronic use, single dose acceptable)</li>
              <li>± Morphine 0.1 mg/kg (intra-articular has good analgesia from peripheral opioid receptors)</li>
            </ul>
          </li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
          <li>Maintenance: Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 2-5 mcg/kg/h intra-op (if no epidural)</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Cefazolin 22 mg/kg IV at induction, repeat q90 min during surgery</li>
          <li>Post-op:
            <ul>
              <li>Routine elective without complications: discontinue (no clear benefit beyond perioperative)</li>
              <li>Some surgeons: Cephalexin 22 mg/kg PO q12h × 5-7 d</li>
              <li>If implant in place + concurrent contamination: extended course</li>
            </ul>
          </li>
        </ul>
        <p><strong>Analgesia post-op:</strong></p>
        <ul>
          <li>Continue opioid post-op:
            <ul>
              <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24 h</li>
              <li>Then Buprenorphine 0.02 mg/kg q8h × 2-3 d</li>
              <li>Or Tramadol 2-5 mg/kg PO q8-12h (variable efficacy)</li>
            </ul>
          </li>
          <li>NSAID — start day 1, continue × 7-14 d:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h</li>
              <li>Robenacoxib (cat) 1-2 mg/kg PO/SC q24h × 3-6 d</li>
            </ul>
          </li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 7-14 d ✨ — neuropathic pain coverage, improves comfort</li>
          <li>± Amantadine 3-5 mg/kg PO q12-24h (NMDA antagonist, chronic pain — for chronic OA cases)</li>
        </ul>
        <p><strong>Joint health (long-term ✨):</strong></p>
        <ul>
          <li>Glucosamine + chondroitin: dose per product (Cosequin, Dasuquin, Glycoflex)</li>
          <li>Adequan IM (PSGAG): 4.4 mg/kg IM 2× weekly × 4 weeks, then maintenance</li>
          <li>Omega-3 fatty acids: 50-100 mg/kg/d EPA+DHA</li>
          <li>Weight management — single biggest modifiable factor</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3):</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Cold compress to surgical site (5-10 min q4-6h × 24-48 h)</li>
          <li>Soft padded bandage for swelling control × 24-48 h</li>
          <li>Strict cage rest</li>
          <li>Pain control as above</li>
          <li>Most discharge same day or day 1</li>
        </ul>
        <p><strong>Week 1-2:</strong></p>
        <ul>
          <li>Strict cage rest / leash walks for elimination only (5 min, 3-4× daily)</li>
          <li>NO running, jumping, stairs, off-leash, other dogs</li>
          <li>Cold compress 2-3× daily × first week</li>
          <li>Begin <strong>passive range of motion (PROM) ✨</strong> after sutures removed (day 10-14):
            <ul>
              <li>Slow flexion + extension to comfort, 10-15 reps 2-3× daily</li>
              <li>NO forced movement</li>
              <li>NOT PROM if surgical site still painful</li>
            </ul>
          </li>
          <li>Suture removal day 10-14</li>
        </ul>
        <p><strong>Week 3-4:</strong></p>
        <ul>
          <li>Continue strict rest</li>
          <li>Increase leash walks to 10-15 min, 3-4× daily (slow, controlled)</li>
          <li>Continue PROM</li>
          <li>Begin <strong>weight shifting exercises</strong>:
            <ul>
              <li>Sit-stand transitions 10-15 reps</li>
              <li>Stand on uneven surface (cushion)</li>
              <li>Walking on inclines (gentle)</li>
            </ul>
          </li>
        </ul>
        <p><strong>Week 5-8:</strong></p>
        <ul>
          <li>Increase leash walks 20-30 min</li>
          <li>Add hill walking (gentle slopes)</li>
          <li>Cavaletti exercises (low poles)</li>
          <li>Underwater treadmill / hydrotherapy ✨ if available — excellent at this stage</li>
          <li>Continue strict no off-leash / no other dogs</li>
        </ul>
        <p><strong>Week 8-12:</strong></p>
        <ul>
          <li>Increase activity gradually</li>
          <li>Recheck radiographs at week 8-12 (assess joint effusion, OA progression)</li>
          <li>If recovery on track: introduce off-leash in small enclosed area</li>
          <li>Begin trotting on leash</li>
        </ul>
        <p><strong>Week 12+ (return to function):</strong></p>
        <ul>
          <li>Gradual return to normal activity</li>
          <li>Most dogs at 80-90% function by week 12-16</li>
          <li>Full athletic activity by 4-6 months ✓</li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Ongoing joint supplements (Adequan, Glucosamine)</li>
          <li>NSAID intermittently for OA flares</li>
          <li>Weight management lifelong ✨</li>
          <li>Watch for contralateral CCL rupture (40-60% within 1-2 yr) — owner education</li>
          <li>Annual recheck for OA progression</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Late meniscal tear ("post-liminary tear") ✗</strong>:
            <ul>
              <li>Incidence: 10-15% within first year</li>
              <li>Clinical: improvement followed by re-onset of lameness 4-8 weeks post-op</li>
              <li>Tx: arthroscopy or arthrotomy + meniscectomy</li>
              <li>Prevention: meniscal release at original surgery (controversial)</li>
            </ul>
          </li>
          <li><strong>Suture failure / loosening:</strong>
            <ul>
              <li>Occurs over time (typical — relies on fibrosis for long-term stability)</li>
              <li>If early: implant infection, excessive activity, technical issue</li>
              <li>Tx: revision surgery, consider TPLO/TTA in larger dogs</li>
            </ul>
          </li>
          <li><strong>Surgical site infection:</strong>
            <ul>
              <li>2-5% rate</li>
              <li>Implant infection more challenging (biofilm)</li>
              <li>Tx: culture, antibiotics, possible implant removal</li>
            </ul>
          </li>
          <li><strong>Persistent lameness:</strong>
            <ul>
              <li>Causes: missed meniscal tear, inadequate stabilization, advanced OA, alternative diagnosis</li>
              <li>Workup: MRI, second-look arthroscopy, advanced imaging</li>
            </ul>
          </li>
          <li>Internal rotation of tibia (suture too tight)</li>
          <li>Patellar tendon irritation if tunnel placement poor</li>
          <li>Fabellar fracture (rare — heavy suture cutting through bone)</li>
          <li>Progressive osteoarthritis (regardless of technique — CCL disease = OA disease)</li>
          <li>Contralateral CCL rupture (40-60% within 1-2 yr) — counsel owner</li>
          <li>Wound dehiscence, seroma, hematoma</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Small breed dogs (&lt; 15-20 kg) ✓:</strong>
            <ul>
              <li>Good-to-excellent return to function: 80-90%</li>
              <li>Most return to normal activity by 12-16 weeks</li>
              <li>OA progression slower than untreated</li>
              <li>Comparable outcomes to TPLO in this size range</li>
            </ul>
          </li>
          <li><strong>Medium-large dogs (20-40 kg):</strong>
            <ul>
              <li>Acceptable return to function: 60-75%</li>
              <li>Higher rate of progression of OA</li>
              <li>TPLO/TTA superior outcomes — extracapsular as alternative if cost-limited</li>
              <li>Active/working dogs: TPLO recommended over extracapsular</li>
            </ul>
          </li>
          <li><strong>Giant breeds (&gt; 40 kg):</strong>
            <ul>
              <li>TPLO/TTA strongly preferred</li>
              <li>Extracapsular: limited use — high failure rate</li>
            </ul>
          </li>
          <li><strong>Cats:</strong>
            <ul>
              <li>CCL rupture rare in cats — often from trauma</li>
              <li>Conservative management often successful</li>
              <li>Extracapsular: good outcomes when surgery indicated</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>OA progresses regardless of technique (CCL disease = chronic joint disease)</li>
              <li>Suture loosens/fails over time → fibrosis provides long-term stability</li>
              <li>Bilateral disease: 40-60% develop contralateral CCL rupture within 1-2 yr</li>
              <li>QOL excellent with appropriate post-op care + weight management</li>
            </ul>
          </li>
          <li><strong>Comparison with conservative management ✨:</strong>
            <ul>
              <li>Without surgery: ~ 50% of small dogs do reasonably well; ~ 20% of large dogs</li>
              <li>Surgery accelerates recovery + improves long-term outcomes</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Extracapsular = "good enough" technique for small dogs + cost-conscious larger dogs</strong> ✓<br><br>**Meniscal evaluation = essential** — เจอ meniscal tear แล้วไม่ตัดออก = post-op ลามต่อ. **Meniscal release** = controversial แต่ลด post-liminary tear<br><br>⚠️ **40-60% bilateral CCL rupture within 1-2 yr** — counsel owner from day 1<br><br>✗ **Strict 8-week rest = essential** — fibrosis ที่เกิดในช่วงนี้ = long-term stability. Owner ที่ละเลยขั้นตอนนี้ = ผ่าซ้ำ</div>
      `,
    },
  },

  /* ============================================================
     ORTHOPEDIC — TPLO
  ============================================================ */
  {
    id: 'tplo',
    titleEn: 'Tibial Plateau Leveling Osteotomy (TPLO)',
    titleTh: 'ผ่าตัดปรับมุมพื้นผิว tibia (TPLO)',
    type: 'surgery',
    species: ['dog'],
    system: 'orthopedic',
    tags: ['TPLO', 'tibial plateau leveling osteotomy', 'CCL rupture', 'tibial plateau angle', 'TPA', 'Slocum', 'biplanar osteotomy', 'locking compression plate', 'meniscal release', 'caudal cruciate'],
    aliases: ['TPLO', 'tibial plateau leveling', 'ผ่าตัด TPLO', 'ปรับมุม tibia'],
    source: 'Tobias & Johnston Vol 1 · Ch. on TPLO (Stifle)',
    sections: {
      indications: `
        <ul>
          <li><strong>CCL rupture in medium-large dogs ✗ — gold standard procedure</strong>
            <ul>
              <li>Active dogs &gt; 15-20 kg (best results)</li>
              <li>Working / sport dogs (police, agility, hunting)</li>
              <li>Younger dogs (better return to athletic function)</li>
              <li>Owner desires fastest, most reliable return to full function</li>
            </ul>
          </li>
          <li><strong>Partial CCL tear with progression:</strong>
            <ul>
              <li>TPLO addresses biomechanics — works even with partial tear</li>
              <li>Can prevent complete rupture by removing the cranial tibial thrust force</li>
            </ul>
          </li>
          <li><strong>Failed extracapsular repair:</strong>
            <ul>
              <li>TPLO as salvage for failed lateral suture</li>
              <li>Addresses underlying biomechanical instability</li>
            </ul>
          </li>
          <li><strong>Steep tibial plateau angle (TPA) ✨:</strong>
            <ul>
              <li>Normal TPA: 23-28° (typical small/medium breeds)</li>
              <li>Steep TPA &gt; 30° = ↑ shear force on CCL → predisposed to rupture</li>
              <li>TPLO target: 5-7° post-op</li>
              <li>If TPA &gt; 30°: TPLO superior to TTA (TTA needs different geometry)</li>
            </ul>
          </li>
          <li>Bilateral CCL surgery (often staged 4-6 weeks apart)</li>
          <li>Concurrent procedures: meniscectomy, meniscal release, caudal cruciate evaluation</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Skeletal immaturity (open growth plates) — wait until physeal closure (typically 10-14 mo)</li>
          <li>Active joint infection (treat first)</li>
          <li>Severe deformity / malalignment requiring corrective osteotomy first</li>
          <li>Patient unsuitable for general anesthesia</li>
          <li>Concurrent orthopedic disease that takes priority (e.g., severe coxofemoral dysplasia)</li>
          <li>Owner unable to provide 8-12 weeks restricted activity</li>
          <li>Coagulopathy (osteotomy = bleeding)</li>
          <li>Very small dogs (&lt; 7-10 kg) — technically possible but extracapsular often equivalent + simpler</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Diagnosis (same as CCL rupture in general):</strong></p>
        <ul>
          <li>Cranial drawer test, tibial thrust test, sit test (see CCL extracapsular entry)</li>
          <li>Joint effusion, lameness, meniscal click</li>
          <li>Sedated PE for accurate exam</li>
        </ul>
        <p><strong>2. Imaging — DETAILED required for TPLO planning ✨:</strong></p>
        <ul>
          <li><strong>Lateral stifle radiograph (specific positioning):</strong>
            <ul>
              <li>True lateral, fully extended stifle (135° = neutral, slightly less for measurement)</li>
              <li>Hock + femur perfectly superimposed (femoral condyles, tibial plateau)</li>
              <li>Quality matters — poor positioning = inaccurate TPA measurement</li>
            </ul>
          </li>
          <li><strong>Tibial plateau angle (TPA) measurement ✨:</strong>
            <ul>
              <li>Method (Slocum):
                <ol>
                  <li>Draw line connecting cranial + caudal limits of medial tibial condyle</li>
                  <li>Draw line through center of intercondylar eminence + center of talus</li>
                  <li>Angle between these two lines = TPA</li>
                </ol>
              </li>
              <li>Normal range: 23-28°</li>
              <li>Plan rotation to achieve post-op TPA 5-7°</li>
            </ul>
          </li>
          <li>Cranio-caudal stifle radiograph — assess varus/valgus, joint space</li>
          <li>3-view of opposite stifle (bilateral disease likely)</li>
          <li>Hip radiographs if breed/age indicates</li>
          <li>Pelvic / spinal radiographs if other lameness etiology suspected</li>
        </ul>
        <p><strong>3. TPLO saw blade size selection:</strong></p>
        <ul>
          <li>Based on patient size + tibial width</li>
          <li>Common sizes: 18, 21, 24, 27, 30 mm</li>
          <li>Templating on radiographs: blade should encompass tibial plateau without compromising critical structures</li>
          <li>Larger blade = bigger cut + faster, but higher risk of damaging structures</li>
        </ul>
        <p><strong>4. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA</li>
          <li>Coag panel</li>
          <li>Blood typing (sometimes needed for transfusion in case of hemorrhage)</li>
        </ul>
        <p><strong>5. Pre-op preparation:</strong></p>
        <ul>
          <li>Wide clip from ileum to hock</li>
          <li>Hanging leg prep</li>
          <li>Pre-op analgesics + antibiotics</li>
          <li>Equipment check: TPLO saw, blade, jig, plates, screws all ready</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence (modified Slocum technique):</strong></p>
        <ol>
          <li>Anesthesia, lateral recumbency, affected limb up, hanging leg drape</li>
          <li><strong>Step 1: Joint exploration (medial parapatellar arthrotomy)</strong>:
            <ul>
              <li>Same as extracapsular CCL — assess CCL, evaluate menisci ✨</li>
              <li>Partial meniscectomy if torn</li>
              <li>Meniscal release of caudal pole of medial meniscus (controversial but common with TPLO)</li>
              <li>Close arthrotomy after evaluation</li>
            </ul>
          </li>
          <li><strong>Step 2: Medial approach to tibia</strong>:
            <ul>
              <li>Curved skin incision medial side, from tibial tuberosity distally ~ 8-10 cm</li>
              <li>Subcutaneous + sartorius/popliteus dissection</li>
              <li>Expose proximal medial tibia</li>
              <li>Identify caudal cortex, popliteus tendon, medial collateral ligament</li>
            </ul>
          </li>
          <li><strong>Step 3: TPLO jig placement (if used)</strong>:
            <ul>
              <li>Place jig pin proximal to osteotomy line in tibial plateau</li>
              <li>Place jig pin distal in tibial diaphysis</li>
              <li>Jig maintains rotation control during osteotomy</li>
              <li>Some surgeons use jigless technique</li>
            </ul>
          </li>
          <li><strong>Step 4: Plan + mark osteotomy ✨</strong>:
            <ul>
              <li>Mark center of rotation: fixed point in proximal tibia</li>
              <li>Use osteotomy blade as template, mark curved osteotomy line</li>
              <li>Mark rotation amount needed (degrees from current TPA to target 5-7°)</li>
              <li>Pre-drill landmark holes for rotation reference (one above, one below osteotomy line)</li>
            </ul>
          </li>
          <li><strong>Step 5: Perform osteotomy</strong>:
            <ul>
              <li>Use TPLO saw with appropriate blade size</li>
              <li>Curved (radial) osteotomy from medial cortex through to lateral cortex</li>
              <li>Continuous saline lavage during cutting (heat dissipation, prevents bone necrosis)</li>
              <li>Critical: don't penetrate caudal cortex too deeply (popliteal vessels) ✗</li>
              <li>Don't damage medial collateral ligament</li>
              <li>Confirm complete osteotomy by gentle manipulation</li>
            </ul>
          </li>
          <li><strong>Step 6: Rotate proximal segment ✨</strong>:
            <ul>
              <li>Rotate proximal fragment counterclockwise (when viewed from medial side, right limb) to reduce TPA</li>
              <li>Use rotation guide / direct measurement from pre-marked landmark holes</li>
              <li>Target: 5-7° TPA post-op</li>
              <li>Check angle with goniometer or pre-templated marks</li>
            </ul>
          </li>
          <li><strong>Step 7: Plate fixation</strong>:
            <ul>
              <li>Use TPLO-specific plate (Slocum, Synthes, Securos, generic locking plate)</li>
              <li>Position plate medially, centered on osteotomy</li>
              <li>Pre-drill, tap (cortical screws) or non-tap (locking screws) as appropriate</li>
              <li>Place screws:
                <ul>
                  <li>2-3 screws proximal to osteotomy (in plateau fragment)</li>
                  <li>3-4 screws distal to osteotomy (in tibial diaphysis)</li>
                  <li>Locking screws preferred at osteotomy (provides angular stability)</li>
                  <li>Compression screw at center of osteotomy if anatomic + reduction good</li>
                </ul>
              </li>
              <li>Confirm stable fixation</li>
            </ul>
          </li>
          <li><strong>Step 8: Confirm position with intraoperative imaging (if available)</strong>:
            <ul>
              <li>Fluoroscopy (gold standard) or static radiograph</li>
              <li>Confirm TPA 5-7°, plate position, screw position (no joint penetration), no fracture</li>
            </ul>
          </li>
          <li><strong>Step 9: Closure</strong>:
            <ul>
              <li>Lavage with warm saline</li>
              <li>Close fascial layers, SQ, skin in routine layers</li>
              <li>Optional: short-term soft padded bandage × 24-48 h</li>
            </ul>
          </li>
        </ol>
        <p><strong>Critical decisions during surgery ✨:</strong></p>
        <ul>
          <li>Meniscal evaluation cannot be skipped — caudal pole tears commonly missed</li>
          <li>Saw blade size: too big = risk to vessels, too small = inadequate plateau coverage</li>
          <li>Caudal cortex preservation: popliteal artery + nerve danger zone</li>
          <li>Plate position: too caudal = irritates popliteus, too cranial = doesn't engage diaphysis</li>
          <li>Rotation accuracy: 1° error = 5° change in long-term biomechanics</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication ✨:</strong></p>
        <ul>
          <li>Methadone 0.3-0.5 mg/kg IM/IV (full mu agonist for major orthopedic surgery)</li>
          <li>± Acepromazine 0.01-0.03 mg/kg IM</li>
          <li>Or Dexmedetomidine 3-5 mcg/kg IM + opioid</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Loco-regional analgesia ✨ — STRONGLY recommended:</strong></p>
        <ul>
          <li><strong>Epidural (gold standard):</strong>
            <ul>
              <li>Bupivacaine 0.5% — 1 mL/4.5 kg</li>
              <li>+ Preservative-free morphine 0.1 mg/kg</li>
              <li>± Dexmedetomidine 0.5 mcg/kg as adjuvant</li>
              <li>18-24 h analgesia ✓</li>
            </ul>
          </li>
          <li><strong>Femoral + sciatic nerve blocks:</strong>
            <ul>
              <li>Bupivacaine 0.5% 0.1 mL/kg per nerve</li>
              <li>Use with neurolocator or ultrasound</li>
              <li>Selective sensory block, preserves motor (helpful for early ambulation)</li>
              <li>12-18 h analgesia</li>
            </ul>
          </li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
          <li>Maintenance: Isoflurane / sevoflurane to effect</li>
          <li>± Fentanyl CRI 5-10 mcg/kg/h</li>
          <li>± Lidocaine CRI 30-50 mcg/kg/min</li>
          <li>± Ketamine CRI 0.6 mg/kg/h (NMDA antagonist, anti-hyperalgesia)</li>
        </ul>
        <p><strong>Antibiotics ✨ (orthopedic implant — must prevent SSI):</strong></p>
        <ul>
          <li>Pre-op (at induction):
            <ul>
              <li>Cefazolin 22 mg/kg IV, repeat q90 min during surgery</li>
              <li>Some surgeons add Cefazolin 22 mg/kg IV at closure</li>
            </ul>
          </li>
          <li>Post-op:
            <ul>
              <li>Practice varies: some discontinue (no proven benefit beyond perioperative); others continue 5-7 d</li>
              <li>Cephalexin 22 mg/kg PO q12h × 7-10 d if continuing</li>
              <li>Implant infection rate 3-7% even with optimal protocol</li>
            </ul>
          </li>
        </ul>
        <p><strong>Analgesia post-op (multimodal):</strong></p>
        <ul>
          <li>Continue opioid post-op:
            <ul>
              <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24-48 h</li>
              <li>Then Buprenorphine 0.02 mg/kg IV/IM q8h × 2-3 d</li>
              <li>Tramadol 2-5 mg/kg PO q8-12h adjunct</li>
            </ul>
          </li>
          <li><strong>NSAID — start day 1, continue × 7-14 d minimum:</strong>
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h ✨</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h</li>
              <li>Robenacoxib (cat) 1-2 mg/kg PO/SC q24h × 3-6 d</li>
              <li>Often continued long-term for OA management</li>
            </ul>
          </li>
          <li><strong>Gabapentin</strong> 5-10 mg/kg PO q8-12h × 14 d ✨ — improves comfort, reduces total analgesic load</li>
          <li>± Amantadine 3-5 mg/kg PO q12-24h (chronic OA pain adjunct)</li>
        </ul>
        <p><strong>Joint health (long-term):</strong></p>
        <ul>
          <li>Adequan (PSGAG) 4.4 mg/kg IM 2× weekly × 4 weeks, then maintenance</li>
          <li>Glucosamine + chondroitin (Cosequin, Dasuquin)</li>
          <li>Omega-3 fatty acids 50-100 mg/kg/d EPA+DHA</li>
          <li>Weight management ✨</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3):</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Cold compress to surgical site (5-10 min q4-6h × 48 h)</li>
          <li>Soft padded bandage × 24-48 h (some surgeons use, others skip)</li>
          <li>Strict cage rest with leash walks for elimination only</li>
          <li>Pain control multimodal as above</li>
          <li>Most patients hospitalized 24-48 h post-op</li>
          <li>Begin toe-touch weight bearing as tolerated (some patients faster than extracapsular due to stable fixation) ✓</li>
        </ul>
        <p><strong>Week 1-2:</strong></p>
        <ul>
          <li>Strict cage rest / leash walks 5 min × 3-4×/day</li>
          <li>Continue cold compresses</li>
          <li>Begin gentle <strong>passive range of motion (PROM) ✨</strong> after suture removal (day 10-14)</li>
          <li>Recheck day 10-14: incision check, suture removal</li>
        </ul>
        <p><strong>Week 3-4:</strong></p>
        <ul>
          <li>Increase leash walks 10-15 min × 3-4×/day</li>
          <li>Begin weight shifting exercises:
            <ul>
              <li>Sit-stand transitions</li>
              <li>Cookie reaches (encourage stifle flexion)</li>
              <li>Walking on uneven surface</li>
            </ul>
          </li>
          <li>Continue PROM daily</li>
        </ul>
        <p><strong>Week 5-6:</strong></p>
        <ul>
          <li>Recheck radiographs at 6-8 weeks ✨ — evaluate bone healing
            <ul>
              <li>Should see callus / bone bridging at osteotomy site</li>
              <li>Plate + screws stable</li>
              <li>If healing on track → progress rehab</li>
            </ul>
          </li>
          <li>Increase leash walk 20-30 min</li>
          <li>Add hill walking, cavaletti exercises</li>
          <li>Underwater treadmill / hydrotherapy ideal at this stage ✓</li>
        </ul>
        <p><strong>Week 7-12:</strong></p>
        <ul>
          <li>Recheck radiographs at 10-12 weeks — confirm complete healing</li>
          <li>Increase activity gradually</li>
          <li>If healing complete: introduce off-leash in small enclosed area</li>
          <li>Begin trotting, gentle play</li>
          <li>By week 12: most dogs at 80-90% function ✓</li>
        </ul>
        <p><strong>Week 12-24 (return to function):</strong></p>
        <ul>
          <li>Gradual return to normal activity</li>
          <li>Working/sport dogs: more conservative timeline (16-24 weeks before high-impact activity)</li>
          <li>Athletic conditioning if returning to performance</li>
          <li>Full activity by 4-6 months ✓</li>
        </ul>
        <p><strong>Long-term ✨:</strong></p>
        <ul>
          <li>Joint supplements ongoing</li>
          <li>NSAID for OA flares</li>
          <li>Weight management lifelong</li>
          <li>Watch contralateral CCL (40-60% rupture within 1-2 yr)</li>
          <li>Implant typically left in place permanently (can remove if causing problems)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Surgical site infection (SSI) ✗</strong>:
            <ul>
              <li>Rate 3-7% (higher than general orthopedic — implant + osteotomy)</li>
              <li>Risk factors: prolonged surgery, glove perforation, large breed, obesity</li>
              <li>Tx: culture + sensitivity-driven antibiotics, possible implant removal in chronic infection</li>
              <li>Biofilm formation = often requires implant removal once bone healed</li>
            </ul>
          </li>
          <li><strong>Late meniscal tear (post-liminary)</strong>:
            <ul>
              <li>5-15% rate (lower than extracapsular due to meniscal release)</li>
              <li>Tx: arthroscopy or arthrotomy + meniscectomy</li>
            </ul>
          </li>
          <li><strong>Tibial fracture ✗</strong>:
            <ul>
              <li>Rare but serious (1-3%)</li>
              <li>Risk: poor osteotomy planning, implant placement, premature weight-bearing</li>
              <li>Tx: revision surgery with longer plate or external fixator</li>
            </ul>
          </li>
          <li><strong>Implant failure / loosening:</strong>
            <ul>
              <li>Plate failure, screw loosening, breakage</li>
              <li>Risk: infection, premature loading, technical error</li>
              <li>Tx: revision</li>
            </ul>
          </li>
          <li><strong>Patellar tendon irritation:</strong>
            <ul>
              <li>"TPLO patella alta" — patellar tendon angle change</li>
              <li>Discomfort, lameness</li>
              <li>Usually resolves with rehab</li>
            </ul>
          </li>
          <li>Osteomyelitis from infection</li>
          <li>Persistent lameness from missed meniscal pathology, undertreated OA, alternative dx</li>
          <li>Internal rotation if rotation excessive</li>
          <li>Caudal cruciate ligament injury (rare; associated with severe trauma)</li>
          <li>Popliteal artery / nerve injury (rare — surgical error, caudal cortex penetration) ✗</li>
          <li>Contralateral CCL rupture (40-60% within 1-2 yr)</li>
          <li>Progressive osteoarthritis (slower than extracapsular)</li>
          <li>"MUDA" — Medial Unicompartmental Disease Arthritis (rare, advanced OA)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Active medium-large dogs ✓ (gold standard outcomes):</strong>
            <ul>
              <li>Excellent return to function: 90-95%</li>
              <li>Athletic / sporting dogs: 80-90% return to pre-injury level</li>
              <li>Recovery 4-6 months for full function</li>
              <li>OA progression slower than extracapsular</li>
            </ul>
          </li>
          <li><strong>Small dogs (&lt; 15 kg):</strong>
            <ul>
              <li>Good outcomes, but extracapsular often equivalent</li>
              <li>TPLO if owner prefers, complex case, or revision</li>
            </ul>
          </li>
          <li><strong>Giant breeds (&gt; 40 kg):</strong>
            <ul>
              <li>TPLO definitely recommended over extracapsular</li>
              <li>80-90% return to function</li>
              <li>Higher complication rate due to size + mass</li>
            </ul>
          </li>
          <li><strong>Bilateral TPLO:</strong>
            <ul>
              <li>Often staged 4-6 weeks apart</li>
              <li>Outcomes similar to unilateral when properly managed</li>
            </ul>
          </li>
          <li><strong>Comparison TPLO vs TTA:</strong>
            <ul>
              <li>TPLO: more reliable, better for steep TPA, technically demanding</li>
              <li>TTA: simpler technique, less invasive, but only suitable for normal-low TPA</li>
              <li>Both > extracapsular for active large dogs</li>
            </ul>
          </li>
          <li><strong>Long-term outcomes:</strong>
            <ul>
              <li>Most dogs return to ~ pre-injury activity level by 6 months</li>
              <li>OA progresses but slower than untreated</li>
              <li>QOL excellent with appropriate weight management + rehab</li>
              <li>Bilateral disease: 40-60% develop contralateral CCL rupture</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>TPLO = gold standard for medium-large active dog with CCL rupture</strong> ✓ — more invasive than extracapsular but better long-term outcome<br><br>**Saw blade size + accuracy of rotation = whole game** ✨ — small errors compound into post-op problems<br><br>⚠️ **3-7% infection rate** = highest of orthopedic procedures. Strict asepsis + perioperative antibiotics + e-collar 14d non-negotiable<br><br>✗ **Premature weight-bearing = tibial fracture** — 8-12 week restricted activity strict, owner education key</div>
      `,
    },
  },

  /* ============================================================
     ORTHOPEDIC — TTA
  ============================================================ */
  {
    id: 'tta',
    titleEn: 'Tibial Tuberosity Advancement (TTA)',
    titleTh: 'ผ่าตัดยกตุ่ม tibia (TTA)',
    type: 'surgery',
    species: ['dog'],
    system: 'orthopedic',
    tags: ['TTA', 'tibial tuberosity advancement', 'CCL rupture', 'patellar tendon angle', 'cage', 'fork plate', 'Maquet hole', 'Modified Maquet Procedure'],
    aliases: ['TTA', 'tibial tuberosity advancement', 'ผ่าตัด TTA', 'Maquet'],
    source: 'Tobias & Johnston Vol 1 · Ch. on TTA (Stifle)',
    sections: {
      indications: `
        <ul>
          <li><strong>CCL rupture in dogs with TPA &lt; 30° ✗</strong>
            <ul>
              <li>Concept: advancing tibial tuberosity neutralizes shear forces on stifle by aligning patellar tendon perpendicular to tibial plateau</li>
              <li>Less geometric correction than TPLO — limits indication to lower TPA</li>
              <li>Active medium-large dogs as alternative to TPLO</li>
            </ul>
          </li>
          <li><strong>Best candidates ✨:</strong>
            <ul>
              <li>Medium-large dogs with CCL rupture</li>
              <li>TPA 18-30° (ideal range)</li>
              <li>Shorter learning curve than TPLO (advantage in some practices)</li>
              <li>Cost-comparable to TPLO</li>
            </ul>
          </li>
          <li><strong>Variants:</strong>
            <ul>
              <li>Standard TTA — full ostectomy + cage + plate (Kyon, etc.)</li>
              <li>Modified Maquet Procedure (MMP) — wedge-shaped cut + titanium foam wedge implant</li>
              <li>TTA Rapid — simplified technique with single fork-shaped implant</li>
              <li>Each has technical variations but same biomechanical principle</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>TPA &gt; 30° ✗</strong> — TTA insufficient for high TPA; choose TPLO instead</li>
          <li>Skeletal immaturity — wait for physeal closure</li>
          <li>Active joint infection</li>
          <li>Severe deformity / malalignment</li>
          <li>Tibial tuberosity avulsion / fracture history</li>
          <li>Coagulopathy</li>
          <li>Owner unable to provide post-op care</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Diagnosis (same as CCL rupture):</strong></p>
        <ul>
          <li>Drawer + thrust + sit test, joint effusion (see CCL extracapsular entry)</li>
        </ul>
        <p><strong>2. Imaging — TTA-specific planning ✨:</strong></p>
        <ul>
          <li><strong>Lateral stifle radiograph (true lateral, fully extended):</strong></li>
          <li><strong>Patellar tendon angle (PTA) measurement:</strong>
            <ul>
              <li>Method (Common Tangent / Kyon):
                <ol>
                  <li>Draw line along patellar tendon (long axis from patella to tibial tuberosity)</li>
                  <li>Draw common tangent at femoral condyle / tibial plateau</li>
                  <li>Angle between PT line + common tangent = PTA</li>
                </ol>
              </li>
              <li>Goal: post-TTA PTA = 90° (perpendicular to tibial plateau)</li>
              <li>Templating with TTA cage sizes determines required advancement</li>
            </ul>
          </li>
          <li><strong>Cage size selection:</strong>
            <ul>
              <li>3, 4.5, 6, 7.5, 9, 10.5, 12, 13.5, 15 mm cages typical sizes</li>
              <li>Pre-templated based on patellar tendon angle measurement</li>
              <li>Larger cage = more advancement</li>
            </ul>
          </li>
          <li>Cranio-caudal stifle radiograph — assess varus/valgus</li>
          <li>3-view of opposite stifle</li>
        </ul>
        <p><strong>3. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA</li>
          <li>Coag panel</li>
        </ul>
        <p><strong>4. Pre-op preparation:</strong></p>
        <ul>
          <li>Wide clip + scrub from ileum to hock</li>
          <li>Hanging leg prep</li>
          <li>Equipment: TTA saw, cage, plate, fork, screws, drill bits ready</li>
          <li>Pre-op antibiotics + analgesics</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence (standard Kyon TTA):</strong></p>
        <ol>
          <li>Anesthesia, lateral recumbency, hanging leg drape</li>
          <li><strong>Step 1: Joint exploration</strong>:
            <ul>
              <li>Medial parapatellar arthrotomy</li>
              <li>Inspect CCL, menisci ✨</li>
              <li>Partial meniscectomy if torn</li>
              <li>Meniscal release of caudal pole of medial meniscus (controversial but commonly done)</li>
              <li>Close arthrotomy</li>
            </ul>
          </li>
          <li><strong>Step 2: Approach to tibia</strong>:
            <ul>
              <li>Cranial approach over tibial tuberosity / tibial crest</li>
              <li>Skin incision medial side, ~ 8-10 cm</li>
              <li>SQ + fascia dissection to expose tibial crest + tuberosity</li>
              <li>Identify cranial tibial muscle insertion, popliteus tendon</li>
            </ul>
          </li>
          <li><strong>Step 3: Plan + perform osteotomy ✨</strong>:
            <ul>
              <li>Mark line of osteotomy on tibial crest, parallel to long axis of tibia</li>
              <li>Pre-drill holes for plate fixation:
                <ul>
                  <li>2-3 holes on free fragment (tibial tuberosity)</li>
                  <li>2-3 holes on remaining tibial body</li>
                </ul>
              </li>
              <li>Use TTA saw with appropriate blade</li>
              <li>Cut: parasagittal osteotomy, partial — leaves distal cortex hinge to maintain blood supply</li>
              <li>Cut depth: leave 5-10 mm of distal cortex intact (creates "hinge")</li>
            </ul>
          </li>
          <li><strong>Step 4: Insert cage ✨</strong>:
            <ul>
              <li>Slowly advance tibial tuberosity using rongeurs / spreader</li>
              <li>Insert appropriate-size cage between fragments</li>
              <li>Cage provides spacing + mechanical advancement</li>
              <li>Confirm advancement — patellar tendon now perpendicular to plateau</li>
            </ul>
          </li>
          <li><strong>Step 5: Plate fixation</strong>:
            <ul>
              <li>Use TTA-specific plate (fork plate, locking plate)</li>
              <li>Position plate medially over osteotomy</li>
              <li>Place screws through pre-drilled holes</li>
              <li>Confirm stable fixation</li>
              <li>Bone graft / cancellous chip placement (some surgeons add)</li>
            </ul>
          </li>
          <li><strong>Step 6: Confirm with imaging</strong>:
            <ul>
              <li>Fluoroscopy or static rad</li>
              <li>Confirm cage position, plate, no screw in joint, advancement geometry</li>
            </ul>
          </li>
          <li><strong>Step 7: Closure</strong>:
            <ul>
              <li>Lavage</li>
              <li>Routine fascia, SQ, skin closure</li>
              <li>Optional soft padded bandage</li>
            </ul>
          </li>
        </ol>
        <p><strong>MMP (Modified Maquet Procedure) variation:</strong></p>
        <ul>
          <li>Triangular wedge cut at tibial crest</li>
          <li>Titanium foam wedge implant (no plate needed in some systems)</li>
          <li>Simpler, faster, but less proven long-term data</li>
        </ul>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>Maintain distal hinge for blood supply to tuberosity fragment</li>
          <li>Cage size accuracy = whole game (templated pre-op)</li>
          <li>Plate placement: avoid joint penetration, ensure adequate purchase</li>
          <li>Meniscal evaluation = essential</li>
        </ul>
      `,
      drugs: `
        <p><strong>Same protocol as TPLO:</strong></p>
        <ul>
          <li>Pre-medication: methadone + maropitant ± ace</li>
          <li>Loco-regional: epidural OR femoral + sciatic blocks ✨</li>
          <li>Induction: propofol or alfaxalone</li>
          <li>Maintenance: isoflurane + fentanyl CRI ± lidocaine ± ketamine CRI</li>
          <li>Antibiotics: cefazolin pre-op + perioperative</li>
          <li>Post-op:
            <ul>
              <li>Methadone q4-6h × 24-48 h → buprenorphine</li>
              <li>NSAID × 7-14 d (carprofen 2 mg/kg PO q12h)</li>
              <li>Gabapentin 5-10 mg/kg PO q8-12h × 14 d</li>
              <li>± Tramadol</li>
            </ul>
          </li>
          <li>Joint supplements long-term</li>
        </ul>
      `,
      postOp: `
        <p><strong>Same general protocol as TPLO with these specifics:</strong></p>
        <ul>
          <li>Toe-touch weight bearing day 1-3 as tolerated</li>
          <li>Strict cage rest with leash walks for elimination only × 4 weeks</li>
          <li>Cold compresses × 48-72 h</li>
          <li>Suture removal day 10-14</li>
          <li>Recheck radiographs at 6-8 weeks ✨ — assess healing of osteotomy</li>
          <li>Progressive rehab from week 4-12:
            <ul>
              <li>Increased leash walks</li>
              <li>PROM, weight shifting</li>
              <li>Hydrotherapy / underwater treadmill ✓</li>
              <li>Cavaletti, hill walks</li>
            </ul>
          </li>
          <li>Recheck rad at 10-12 weeks — confirm healing</li>
          <li>Return to normal activity 4-6 months</li>
        </ul>
        <p><strong>Compared to TPLO:</strong></p>
        <ul>
          <li>Generally less invasive — sometimes faster initial recovery</li>
          <li>Same overall timeline for full return to function</li>
          <li>Implant removal rarely needed</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Implant migration / loosening</strong>:
            <ul>
              <li>Cage migration, plate loosening</li>
              <li>Risk: infection, premature loading, technical error</li>
              <li>Tx: revision</li>
            </ul>
          </li>
          <li><strong>Tibial tuberosity fracture ✗</strong>:
            <ul>
              <li>Risk: distal hinge cut too thin, premature loading, large breed</li>
              <li>Tx: revision with plate / cerclage / external fixator</li>
            </ul>
          </li>
          <li><strong>Surgical site infection</strong>:
            <ul>
              <li>3-5% (similar to TPLO)</li>
              <li>Implant infection challenging</li>
            </ul>
          </li>
          <li>Late meniscal tear (5-15%, lower with meniscal release)</li>
          <li>Persistent lameness — missed meniscal tear, undertreated OA</li>
          <li>Patellar tendon irritation</li>
          <li>Implant prominence (titanium implants palpable, occasionally bothersome)</li>
          <li>Insufficient advancement → continued instability</li>
          <li>Excessive advancement → patellar luxation, cranial dislocation</li>
          <li>Wound dehiscence, seroma, hematoma</li>
          <li>Contralateral CCL rupture (40-60% within 1-2 yr)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Active medium-large dogs with appropriate TPA ✓:</strong>
            <ul>
              <li>Good-to-excellent return to function: 80-90%</li>
              <li>Recovery similar to TPLO (4-6 months)</li>
              <li>OA progression slower than extracapsular</li>
            </ul>
          </li>
          <li><strong>Comparison with TPLO ✨:</strong>
            <ul>
              <li>Functionally equivalent in most studies for appropriate cases</li>
              <li>TPLO slightly more reliable for high-TPA dogs (&gt; 30°)</li>
              <li>TTA simpler technique, shorter learning curve</li>
              <li>Both superior to extracapsular for medium-large active dogs</li>
            </ul>
          </li>
          <li><strong>Comparison with extracapsular:</strong>
            <ul>
              <li>TTA: better for active medium-large dogs</li>
              <li>Extracapsular: cost-comparable to MMP, simpler</li>
              <li>TTA more predictable + faster return to athletic function</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>QOL excellent</li>
              <li>OA progression slower</li>
              <li>Implants typically left in place</li>
              <li>Bilateral disease: 40-60% contralateral CCL rupture</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>TTA = good alternative to TPLO for TPA &lt; 30°</strong> ✓ — simpler technique, equivalent outcome in appropriate cases<br><br>**Cage size accuracy = whole game** ✨ — templated pre-op based on PTA measurement<br><br>⚠️ **TPA &gt; 30° = choose TPLO** — TTA insufficient correction for steep plateaus<br><br>✗ **Same complications as TPLO** — infection 3-5%, late meniscal tear, fracture risk if loaded too early</div>
      `,
    },
  },

  /* ============================================================
     ORTHOPEDIC — Patellar luxation
  ============================================================ */
  {
    id: 'patellar-luxation',
    titleEn: 'Patellar Luxation Correction',
    titleTh: 'ผ่าตัดแก้ลูกสะบ้าเคลื่อน',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'orthopedic',
    tags: ['patellar luxation', 'medial patellar luxation', 'MPL', 'lateral patellar luxation', 'LPL', 'trochleoplasty', 'tibial tuberosity transposition', 'block recession', 'sulcoplasty', 'imbrication', 'genu varum'],
    aliases: ['patellar luxation', 'MPL', 'หมา-แมวลูกสะบ้าเคลื่อน', 'สะบ้าหลุด'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Patellar Luxation',
    sections: {
      indications: `
        <ul>
          <li><strong>Grading system (Singleton ✨):</strong>
            <ul>
              <li><strong>Grade I:</strong> patella spontaneously reduces; can manually luxate, immediately returns to groove. Often incidental finding, no clinical signs typically</li>
              <li><strong>Grade II:</strong> intermittent luxation, often during exercise. Manually luxated stays luxated until manipulated back. Clinical signs intermittent (skipping gait)</li>
              <li><strong>Grade III:</strong> patella permanently luxated but can be reduced manually. Significant clinical signs, bow-legged stance, weight-bearing affected</li>
              <li><strong>Grade IV:</strong> patella permanently luxated, cannot be reduced manually. Severe deformity, "frog-like" gait, juvenile onset, growth disturbance</li>
            </ul>
          </li>
          <li><strong>Surgical indications ✨:</strong>
            <ul>
              <li><strong>Grade I:</strong> typically NO surgery (incidental, asymptomatic)</li>
              <li><strong>Grade II with clinical signs:</strong> surgery recommended (lameness, skipping, owner concern)</li>
              <li><strong>Grade III:</strong> always surgery indicated</li>
              <li><strong>Grade IV:</strong> always surgery (often requires complex techniques)</li>
              <li>Concurrent CCL rupture (15-25% of MPL cases) — treat both</li>
            </ul>
          </li>
          <li><strong>Common signalment:</strong>
            <ul>
              <li>Medial patellar luxation (MPL) most common — 75-80% of all PL</li>
              <li>Small/toy breeds (Yorkie, Pomeranian, Toy Poodle, Chihuahua, Maltese)</li>
              <li>Cats (less common, often asymptomatic)</li>
              <li>Lateral patellar luxation (LPL) — large/giant breeds (Akita, Newfoundland), genu valgum</li>
              <li>Bilateral in 50-65% of cases</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Asymptomatic Grade I (incidental finding)</li>
          <li>Skeletally immature with severe deformity that may be addressed best with corrective osteotomy at maturity</li>
          <li>Active joint infection</li>
          <li>Owner unable to comply with post-op restrictions</li>
          <li>Severe systemic illness</li>
          <li>Untreated concurrent CCL rupture (must treat both)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Diagnosis ✨:</strong></p>
        <ul>
          <li><strong>Physical exam:</strong>
            <ul>
              <li>Stance assessment (bow-legged in MPL, knock-kneed in LPL)</li>
              <li>Gait assessment (skipping, bunny-hopping, lameness)</li>
              <li>Patellar luxation test:
                <ul>
                  <li>Stifle in extended position</li>
                  <li>Apply medial (or lateral) pressure on patella</li>
                  <li>Grade based on Singleton scale</li>
                </ul>
              </li>
              <li>Flex/extend stifle while applying pressure — note when patella reduces / luxates</li>
              <li>Concurrent CCL test (drawer, thrust)</li>
              <li>Grade BOTH stifles ✨</li>
            </ul>
          </li>
          <li><strong>Imaging:</strong>
            <ul>
              <li>Lateral + craniocaudal radiographs:
                <ul>
                  <li>Patella position</li>
                  <li>Trochlear groove depth assessment</li>
                  <li>Femoral varus/valgus angle</li>
                  <li>Tibial torsion</li>
                  <li>OA changes</li>
                </ul>
              </li>
              <li>CT in severe cases (Grade IV) — assess deformity in 3D, plan corrective osteotomy</li>
            </ul>
          </li>
        </ul>
        <p><strong>2. Surgical planning — pick technique combination ✨:</strong></p>
        <p>Patellar luxation correction is usually NOT a single procedure but a COMBINATION based on findings:</p>
        <ul>
          <li><strong>Mandatory components in most cases:</strong>
            <ul>
              <li>Trochleoplasty (if shallow groove)</li>
              <li>Tibial tuberosity transposition (most cases — straighten quadriceps mechanism)</li>
            </ul>
          </li>
          <li><strong>Soft tissue procedures (always):</strong>
            <ul>
              <li>Lateral imbrication (tighten side patella luxates AWAY from)</li>
              <li>Medial release (release tight side patella luxates TOWARD)</li>
            </ul>
          </li>
          <li><strong>Bone procedures (for severe cases):</strong>
            <ul>
              <li>Distal femoral varus osteotomy (DFO) — for severe genu varum</li>
              <li>Tibial corrective osteotomy — for tibial torsion</li>
              <li>Reserved for Grade III-IV with significant deformity</li>
            </ul>
          </li>
        </ul>
        <p><strong>3. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA</li>
          <li>Coag panel</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence (standard Grade II-III MPL correction):</strong></p>
        <ol>
          <li>Anesthesia, lateral recumbency, affected limb up, hanging leg drape</li>
          <li>Wide clip + scrub from ileum to hock</li>
          <li><strong>Step 1: Approach</strong>:
            <ul>
              <li>Lateral parapatellar incision</li>
              <li>For MPL: approach from the side opposite to luxation (lateral approach for MPL)</li>
              <li>For LPL: medial approach</li>
            </ul>
          </li>
          <li><strong>Step 2: Joint exploration ✨</strong>:
            <ul>
              <li>Lateral parapatellar arthrotomy</li>
              <li>Reflect patella medially (for MPL exploration)</li>
              <li>Inspect:
                <ul>
                  <li>Trochlear groove depth + cartilage condition</li>
                  <li>Patellar cartilage</li>
                  <li>CCL (drawer test under anesthesia again ✨)</li>
                  <li>Menisci</li>
                </ul>
              </li>
              <li>Address concurrent pathology before structural correction</li>
            </ul>
          </li>
          <li><strong>Step 3: Trochleoplasty (if needed) ✨</strong>:
            <p>Choose technique based on patient + groove depth:</p>
            <ul>
              <li><strong>Wedge recession trochleoplasty (juvenile bone):</strong>
                <ol>
                  <li>Outline wedge on trochlea (V-shaped)</li>
                  <li>Saw or osteotome cuts wedge of cartilage + bone</li>
                  <li>Excise bone from beneath wedge to deepen</li>
                  <li>Replace wedge into deepened groove</li>
                  <li>Preserves articular cartilage</li>
                </ol>
              </li>
              <li><strong>Block recession trochleoplasty (preferred adult ✨):</strong>
                <ol>
                  <li>Outline rectangular block on trochlea</li>
                  <li>Cut block of cartilage + subchondral bone</li>
                  <li>Remove additional cancellous bone from beneath</li>
                  <li>Replace block in deepened groove</li>
                  <li>Cartilage preserved, more anatomic groove</li>
                </ol>
              </li>
              <li><strong>Abrasion trochleoplasty:</strong>
                <ul>
                  <li>Burr / curette cartilage + subchondral bone</li>
                  <li>Allows fibrocartilage formation (inferior to native cartilage)</li>
                  <li>Last choice — used when other options not feasible</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Step 4: Tibial tuberosity transposition (TTT) ✨</strong>:
            <ul>
              <li>Most cases need TTT (realigns extensor mechanism)</li>
              <li>Osteotomy of tibial tuberosity:
                <ol>
                  <li>Mark crest with osteotome / saw</li>
                  <li>Partial osteotomy, leaving distal hinge</li>
                  <li>Rotate tuberosity laterally (for MPL) or medially (for LPL)</li>
                  <li>Confirm proper alignment of patella in groove with stifle ROM</li>
                </ol>
              </li>
              <li>Fix with Kirschner pins (1-2 small K-wires) ± figure-8 tension band wire (for larger fragments)</li>
              <li>Some surgeons use small bone screws</li>
            </ul>
          </li>
          <li><strong>Step 5: Soft tissue procedures (always)</strong>:
            <ul>
              <li><strong>Lateral imbrication (for MPL — tighten side opposite luxation):</strong>
                <ul>
                  <li>Plicate lateral retinaculum / fascia lata with overlapping sutures</li>
                  <li>3-0 or 2-0 PDS, simple interrupted or vertical mattress</li>
                  <li>Test stability with stifle ROM</li>
                </ul>
              </li>
              <li><strong>Medial release (for MPL — release tight side):</strong>
                <ul>
                  <li>Incise medial joint capsule + fascia (controlled release)</li>
                  <li>Don't fully transect — partial release adequate</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Step 6: Test stability ✨</strong>:
            <ul>
              <li>Manually luxate patella — should require firm pressure, return promptly</li>
              <li>Through full ROM, patella should remain in groove</li>
              <li>If still luxates: adjust imbrication, consider additional procedures</li>
            </ul>
          </li>
          <li><strong>Step 7: Closure</strong>:
            <ul>
              <li>Close arthrotomy (PDS continuous)</li>
              <li>SQ + skin routine layers</li>
              <li>Consider short-term soft padded bandage × 24-48 h</li>
            </ul>
          </li>
        </ol>
        <p><strong>Severe cases — Grade IV with deformity ✨:</strong></p>
        <ul>
          <li>Distal femoral osteotomy (DFO):
            <ul>
              <li>Corrects genu varum / valgum at femoral level</li>
              <li>Wedge or transverse osteotomy + plate fixation</li>
              <li>Specialty referral often required</li>
            </ul>
          </li>
          <li>Tibial corrective osteotomy:
            <ul>
              <li>Addresses tibial torsion</li>
              <li>Plate fixation</li>
            </ul>
          </li>
          <li>These cases benefit from CT pre-op planning + experienced ortho surgeon</li>
        </ul>
        <p><strong>Critical principles:</strong></p>
        <ul>
          <li>"It's an a la carte procedure" ✨ — combination of techniques tailored to patient findings</li>
          <li>Address ALL contributing factors — soft tissue alone rarely sufficient for Grade III-IV</li>
          <li>Test stability throughout — adjust as needed</li>
          <li>Don't overcorrect — too tight imbrication = excessive lateralization</li>
        </ul>
      `,
      drugs: `
        <p><strong>Same general protocol as other stifle surgeries:</strong></p>
        <ul>
          <li>Pre-medication: methadone 0.2-0.4 mg/kg + maropitant ✨</li>
          <li>Loco-regional: epidural OR femoral + sciatic nerve blocks (excellent for stifle surgery)</li>
          <li>Induction: propofol or alfaxalone</li>
          <li>Maintenance: isoflurane + fentanyl CRI ± lidocaine</li>
          <li>Antibiotics: cefazolin 22 mg/kg IV at induction + perioperative</li>
          <li>Post-op:
            <ul>
              <li>Methadone q4-6h × 24 h → buprenorphine</li>
              <li>NSAID × 7-14 d (carprofen 2 mg/kg PO q12h, meloxicam 0.05 mg/kg q24h)</li>
              <li>Cat: robenacoxib 1-2 mg/kg PO/SC q24h × 3-6 d</li>
              <li>Gabapentin 5-10 mg/kg PO q8-12h × 7-14 d</li>
              <li>± Tramadol</li>
            </ul>
          </li>
          <li>Joint supplements long-term (PSGAG, glucosamine + chondroitin, omega-3)</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3):</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Cold compress to surgical site (5-10 min q4-6h × 48 h)</li>
          <li>Soft padded bandage × 24-48 h optional</li>
          <li>Strict cage rest with leash walks for elimination only</li>
          <li>Pain control multimodal</li>
        </ul>
        <p><strong>Week 1-4:</strong></p>
        <ul>
          <li>Strict cage rest</li>
          <li>Leash walks for bathroom 5 min × 3-4×/day</li>
          <li>NO running, jumping, stairs, off-leash</li>
          <li>Suture removal day 10-14</li>
          <li>PROM gentle exercises starting day 10-14</li>
          <li>Continue cold compresses early</li>
        </ul>
        <p><strong>Week 4-8:</strong></p>
        <ul>
          <li>Recheck radiographs at 6-8 weeks ✨ — assess bone healing (TTT site, trochleoplasty)</li>
          <li>Increase leash walks 10-20 min</li>
          <li>Begin weight shifting, sit-stand exercises</li>
          <li>Underwater treadmill / hydrotherapy if available</li>
        </ul>
        <p><strong>Week 8-12:</strong></p>
        <ul>
          <li>Increase activity gradually</li>
          <li>Recheck stability — patella should track in groove</li>
          <li>Cavaletti, hill walks</li>
          <li>Off-leash in small enclosed area only</li>
        </ul>
        <p><strong>Week 12+:</strong></p>
        <ul>
          <li>Gradual return to normal activity</li>
          <li>Full activity by 4-6 months</li>
          <li>Most dogs/cats at near-normal function ✓</li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>If bilateral disease: stage second surgery 6-12 weeks after first</li>
          <li>Joint supplements ongoing</li>
          <li>Watch for re-luxation (rare with proper correction)</li>
          <li>OA may progress despite correction — manage medically</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Re-luxation ✗</strong>:
            <ul>
              <li>Rate: 5-15% (higher in Grade III-IV not adequately corrected)</li>
              <li>Causes: insufficient correction (didn't address all contributing factors), loosening of soft tissue repair, implant failure, inadequate trochlear depth</li>
              <li>Tx: revision surgery — assess what's missing</li>
            </ul>
          </li>
          <li><strong>Tibial tuberosity fracture ✗</strong>:
            <ul>
              <li>Risk: small/young patient, premature loading, K-wire migration</li>
              <li>Tx: revision (smaller patient may need pin removal, larger needs additional fixation)</li>
            </ul>
          </li>
          <li><strong>Pin migration / loosening:</strong>
            <ul>
              <li>K-wires can migrate proximally or distally</li>
              <li>May need removal once bone healed</li>
            </ul>
          </li>
          <li><strong>Surgical site infection:</strong>
            <ul>
              <li>2-5% rate</li>
              <li>Implant infection challenging</li>
            </ul>
          </li>
          <li>Persistent lameness (CCL injury, OA, undertreated component)</li>
          <li>Trochlear cartilage damage from technique (especially abrasion)</li>
          <li>Concurrent CCL rupture in 15-25% of MPL cases — must treat both ✨</li>
          <li>Patellar tendon irritation</li>
          <li>Wound dehiscence, seroma</li>
          <li>Implant prominence (palpable wires)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Grade II-III properly corrected ✓:</strong>
            <ul>
              <li>Excellent return to function: 90-95%</li>
              <li>Lameness resolution in &gt; 90%</li>
              <li>Recovery 4-6 months</li>
              <li>OA may progress slowly despite correction</li>
            </ul>
          </li>
          <li><strong>Grade IV with deformity:</strong>
            <ul>
              <li>More guarded prognosis (70-85% improvement)</li>
              <li>Often requires multiple procedures + corrective osteotomy</li>
              <li>Chronic OA likely despite correction</li>
              <li>QOL good with appropriate management</li>
            </ul>
          </li>
          <li><strong>Concurrent CCL rupture:</strong>
            <ul>
              <li>Treat both → outcomes good</li>
              <li>Missing CCL rupture = persistent lameness + worse outcomes</li>
            </ul>
          </li>
          <li><strong>Cats:</strong>
            <ul>
              <li>Often asymptomatic Grade I-II — no surgery needed</li>
              <li>Symptomatic surgery: good outcomes 85-95%</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>OA progresses (joint disease component) but slower with correction</li>
              <li>Bilateral disease in 50-65% — counsel owner</li>
              <li>QOL generally excellent</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Patellar luxation correction = "a la carte" ✨</strong> — combination of trochleoplasty + TTT + soft tissue based on findings, not single procedure<br><br>**Concurrent CCL rupture in 15-25% of MPL** — always check drawer test under anesthesia before correction<br><br>⚠️ **Grade I asymptomatic = no surgery** — incidental finding, monitor for clinical signs<br><br>✗ **Grade IV severe deformity = referral** — DFO + corrective osteotomy specialty surgery</div>
      `,
    },
  },

  /* ============================================================
     PRINCIPLES — Fracture repair
  ============================================================ */
  {
    id: 'fracture-repair-principles',
    titleEn: 'Fracture Repair (General Principles)',
    titleTh: 'ผ่าตัดยึดกระดูกหัก — หลักการ',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'principles',
    tags: ['fracture repair', 'ORIF', 'plate and screws', 'IM pin', 'cerclage', 'external fixator', 'biological osteosynthesis', 'AO classification', 'strain theory', 'locking compression plate', 'gap healing'],
    aliases: ['fracture repair', 'bone surgery', 'ORIF', 'ผ่าตัดยึดกระดูก', 'ดามกระดูก'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Fracture Healing & Fixation',
    sections: {
      indications: `
        <ul>
          <li><strong>Displaced fractures with functional compromise ✗</strong>:
            <ul>
              <li>Long bone (femur, tibia, humerus, radius/ulna)</li>
              <li>Articular fractures (require anatomic reconstruction)</li>
              <li>Pelvis (selected — many treated conservatively)</li>
              <li>Spine (most managed surgically if instability)</li>
              <li>Mandible / maxilla</li>
            </ul>
          </li>
          <li><strong>Open fractures (Grade I-III) ✗</strong>:
            <ul>
              <li>Always require intervention (debridement, stabilization)</li>
              <li>Higher risk of infection — antibiotic + frequent recheck</li>
            </ul>
          </li>
          <li><strong>Indications by anatomy:</strong>
            <ul>
              <li>Long bone diaphyseal: plate, IM pin + cerclage, IM pin + external fixator (PRP), interlocking nail</li>
              <li>Long bone metaphyseal: plate (often locking), external fixator</li>
              <li>Articular: anatomic reduction + lag screw / plate / pins</li>
              <li>Pelvis: many conservative; ilial fractures often need plate</li>
              <li>Vertebral: plate, modified segmental fixation, PMMA</li>
            </ul>
          </li>
          <li><strong>When to consider amputation instead:</strong>
            <ul>
              <li>Severely comminuted unreconstructable fractures</li>
              <li>Severe soft tissue trauma (Grade III open)</li>
              <li>Owner financial constraints</li>
              <li>Concurrent neurologic injury (irreparable nerve damage)</li>
              <li>Vascular compromise (irretrievable)</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hemodynamically unstable patient (stabilize first)</li>
          <li>Severe systemic illness (sepsis, head trauma, etc.) preventing safe anesthesia</li>
          <li>Severely comminuted fracture in poor candidate (consider amputation)</li>
          <li>Active infection at fracture site → requires staged approach (external fixator, debridement, antibiotics, then definitive fixation)</li>
          <li>Coagulopathy not corrected</li>
          <li>Owner unable to provide post-op care (8-12 weeks restricted activity)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Patient assessment ✨:</strong></p>
        <ul>
          <li><strong>ABCs first</strong> — fracture often associated with trauma:
            <ul>
              <li>Airway, breathing, circulation</li>
              <li>Thoracic radiograph (~ 35% of HBC patients have thoracic injury — pneumothorax, pulmonary contusion)</li>
              <li>Abdominal exam ± FAST scan (uroabdomen, hemoperitoneum)</li>
              <li>Neurologic exam (head trauma, spinal injury)</li>
              <li>Cardiac auscultation (myocardial contusion → arrhythmia, esp. 24-72 h post-trauma)</li>
            </ul>
          </li>
          <li>Stabilize systemic injuries BEFORE addressing fracture (24-72 h often acceptable delay for fracture if patient unstable)</li>
        </ul>
        <p><strong>2. Fracture-specific assessment:</strong></p>
        <ul>
          <li>Open vs closed:
            <ul>
              <li>Grade I open: small puncture, clean</li>
              <li>Grade II: moderate soft tissue trauma</li>
              <li>Grade III: severe trauma, vascular/nerve compromise, contamination</li>
            </ul>
          </li>
          <li>Imaging:
            <ul>
              <li>Standard 2-view radiographs (orthogonal) ✨</li>
              <li>Adjacent joints included in views</li>
              <li>Compare with contralateral limb if doubt</li>
              <li>CT for complex / articular / pelvic / vertebral fractures</li>
            </ul>
          </li>
        </ul>
        <p><strong>3. AO/ASIF Classification ✨</strong> (universal language for fractures):</p>
        <ul>
          <li>Bone (1-4): humerus, radius, femur, tibia (etc.)</li>
          <li>Segment (1-3): proximal, diaphyseal, distal</li>
          <li>Type (A, B, C):
            <ul>
              <li>A: simple (1 fracture line, 2 fragments)</li>
              <li>B: wedge (3 fragments after reduction)</li>
              <li>C: complex / comminuted</li>
            </ul>
          </li>
          <li>Subtype (1-3): further granularity</li>
          <li>Example: 3-2-A2 = femur diaphyseal simple oblique</li>
        </ul>
        <p><strong>4. Strain Theory (Perren) ✨ — drives fixation choice:</strong></p>
        <ul>
          <li>Tissue tolerates limited strain (motion at fracture / gap):
            <ul>
              <li>Bone tolerates &lt; 2% strain</li>
              <li>Cartilage 2-10%</li>
              <li>Granulation tissue / fibrous tissue &gt; 10%</li>
            </ul>
          </li>
          <li>Implications:
            <ul>
              <li>Anatomic reduction + compression = primary bone healing (no callus visible)</li>
              <li>Bridging fixation with motion = secondary healing (callus formation)</li>
              <li>Excessive motion or large gap = non-union</li>
            </ul>
          </li>
        </ul>
        <p><strong>5. Plan fixation ✨:</strong></p>
        <table style="width:100%; border-collapse:collapse; margin-top:0.5em;">
          <tr><th style="text-align:left; padding:4px 8px; border-bottom:1px solid var(--border);">Fracture type</th><th style="text-align:left; padding:4px 8px; border-bottom:1px solid var(--border);">Recommended fixation</th></tr>
          <tr><td style="padding:4px 8px;">Simple transverse / short oblique</td><td style="padding:4px 8px;">Plate + screws (compression possible)</td></tr>
          <tr><td style="padding:4px 8px;">Long oblique / spiral</td><td style="padding:4px 8px;">Plate + lag screw, or IM pin + cerclage</td></tr>
          <tr><td style="padding:4px 8px;">Comminuted reconstructable</td><td style="padding:4px 8px;">Plate + lag screws (long plate, biological)</td></tr>
          <tr><td style="padding:4px 8px;">Comminuted non-reconstructable</td><td style="padding:4px 8px;">Bridging plate, IM pin + plate (PRP), interlocking nail</td></tr>
          <tr><td style="padding:4px 8px;">Articular</td><td style="padding:4px 8px;">Anatomic + lag screws ± plate (must reconstruct joint surface)</td></tr>
          <tr><td style="padding:4px 8px;">Open / contaminated</td><td style="padding:4px 8px;">External fixator (avoid internal implant in contamination)</td></tr>
          <tr><td style="padding:4px 8px;">Distal radius/ulna (toy breeds)</td><td style="padding:4px 8px;">Plate (avoid casts — high non-union rate)</td></tr>
        </table>
        <p><strong>6. Pre-op preparation:</strong></p>
        <ul>
          <li>Wide clip + scrub</li>
          <li>Hanging leg drape</li>
          <li>Equipment: appropriate plates, screws, pins, drill, drill bits, taps, K-wires, cerclage wire (depending on plan)</li>
          <li>Bone graft material if needed (cancellous from proximal humerus, ileum)</li>
          <li>Pre-op antibiotics + analgesics</li>
        </ul>
      `,
      technique: `
        <p><strong>General surgical principles ✨:</strong></p>
        <ul>
          <li><strong>Biological osteosynthesis</strong> (modern philosophy):
            <ul>
              <li>Preserve soft tissue + blood supply > anatomic reconstruction of every fragment</li>
              <li>Don't strip periosteum extensively</li>
              <li>For comminuted: bridging plate, leave fragments in situ</li>
              <li>Better healing than rigid anatomic reconstruction with extensive devascularization</li>
            </ul>
          </li>
          <li><strong>Atraumatic tissue handling</strong>: protect skin, soft tissue, neurovascular bundles</li>
          <li><strong>Fluoroscopy or intra-op radiograph</strong> when available to confirm reduction + fixation</li>
        </ul>
        <p><strong>A. Plate fixation (most common):</strong></p>
        <ol>
          <li>Approach: standard surgical approach to bone (avoiding neurovascular bundles)</li>
          <li>Identify fracture, gentle reduction (avoid extensive periosteal stripping)</li>
          <li>Plate selection:
            <ul>
              <li>Length: span fracture by 3-4× working length proximal + distal (sometimes more for comminuted)</li>
              <li>Type: dynamic compression plate (DCP), limited contact DCP (LC-DCP), locking compression plate (LCP), reconstruction plate</li>
              <li>Locking screws preferred at fracture site (angular stability — useful in osteopenic bone)</li>
              <li>Compression option: lag screw + neutralization plate, or DCP in compression mode</li>
            </ul>
          </li>
          <li>Contour plate to bone (or use anatomic pre-contoured plates for specific applications)</li>
          <li>Screw placement:
            <ul>
              <li>Cortical screws (need tapping in dense bone)</li>
              <li>Cancellous screws (for metaphyseal bone, no tapping needed)</li>
              <li>Locking screws (no tapping for self-tapping)</li>
              <li>Bicortical placement preferred (engages both cortices)</li>
              <li>3 screws per fragment minimum (preferably 4 in major bone fragment)</li>
            </ul>
          </li>
          <li>Compression / lag screws if appropriate</li>
          <li>Confirm reduction + fixation stable with intra-op imaging if available</li>
        </ol>
        <p><strong>B. IM pin (intramedullary pin):</strong></p>
        <ol>
          <li>Use Steinmann pin sized to fill 70-80% of medullary canal</li>
          <li>Approach: usually open + retrograde (insert at fracture, drive proximally, then bring fracture together + drive distally)</li>
          <li>Cut pin flush with cortex</li>
          <li><strong>IM pin alone is rarely sufficient ✗</strong> — provides axial stability only, doesn't resist:
            <ul>
              <li>Rotation</li>
              <li>Bending</li>
              <li>Compression</li>
            </ul>
          </li>
          <li>ALMOST ALWAYS combine with:
            <ul>
              <li>Cerclage wire (for long oblique / spiral fractures)</li>
              <li>External fixator (PRP — Pin-Rod-Plate or Pin-Rod technique)</li>
              <li>Plate (PRP — combination of IM pin + plate, biological osteosynthesis)</li>
            </ul>
          </li>
        </ol>
        <p><strong>C. External fixator:</strong></p>
        <ol>
          <li>Indications:
            <ul>
              <li>Open fractures (avoid internal implant in contaminated wound)</li>
              <li>Severely comminuted</li>
              <li>Dirty / infected fractures</li>
              <li>Distal radius/ulna in small breeds</li>
            </ul>
          </li>
          <li>Components:
            <ul>
              <li>Transfixation pins (positive profile, threaded centrally)</li>
              <li>Connecting bars (steel, carbon fiber, acrylic)</li>
              <li>Clamps</li>
            </ul>
          </li>
          <li>Configuration:
            <ul>
              <li>Type Ia: unilateral uniplanar (simple)</li>
              <li>Type Ib: unilateral biplanar (more rigid)</li>
              <li>Type II: bilateral uniplanar</li>
              <li>Type III: bilateral biplanar (most rigid)</li>
              <li>Choose based on fracture stability needs</li>
            </ul>
          </li>
          <li>Pin placement:
            <ul>
              <li>2-3 pins per main fragment</li>
              <li>Avoid neurovascular bundles, joints, growth plates</li>
              <li>Pre-drill if cortex thick</li>
              <li>Insert pins through stab incisions (don't extend skin incisions)</li>
            </ul>
          </li>
          <li>Connect to bars, tighten clamps, confirm reduction</li>
          <li>Post-op care: pin tract management — clean daily with saline, monitor for infection, gauze around pin sites</li>
        </ol>
        <p><strong>D. Cerclage wire:</strong></p>
        <ul>
          <li>Use ONLY in long oblique or spiral fractures where wire perpendicular to fracture line</li>
          <li>NEVER use as sole fixation — adjunct to IM pin or plate</li>
          <li>Wire size: 18 g for small, 16 g for medium-large dogs</li>
          <li>Place at right angle to fracture line</li>
          <li>2-3 wires minimum (single cerclage = poor fixation)</li>
          <li>Tighten with cerclage tightener — even tension</li>
          <li>Twist or knot ends, leave 2-3 turns</li>
          <li>Cerclage in transverse fractures = strain → bone resorption → non-union ✗</li>
        </ul>
        <p><strong>E. Interlocking nail:</strong></p>
        <ul>
          <li>Specific application — diaphyseal long bone fractures in medium-large dogs</li>
          <li>IM nail with proximal + distal interlocking screws</li>
          <li>Provides rotational + axial stability</li>
          <li>More technical, requires specific equipment</li>
        </ul>
        <p><strong>Bone graft (when needed) ✨:</strong></p>
        <ul>
          <li>Indications: comminuted with bone loss, non-union, delayed union</li>
          <li>Source:
            <ul>
              <li>Autograft (best — own cancellous from proximal humerus, ileum, proximal tibia)</li>
              <li>Allograft (less common in vet)</li>
              <li>Bone graft substitute (calcium phosphate, demineralized bone matrix)</li>
            </ul>
          </li>
          <li>Place at fracture site / gap</li>
          <li>Promotes osteoinduction + osteoconduction</li>
        </ul>
        <p><strong>Articular fractures ✨:</strong></p>
        <ul>
          <li>ANATOMIC reduction mandatory ✗ — joint surface congruency essential</li>
          <li>Lag screws across joint fragments</li>
          <li>Often combined with plate for stability</li>
          <li>K-wires for comminuted articular pieces</li>
          <li>Earlier ROM rehabilitation (avoid joint stiffness)</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.3-0.5 mg/kg IM/IV (full mu agonist for major surgery) ✨</li>
          <li>± Acepromazine 0.01-0.03 mg/kg IM (only if cardiovascularly stable)</li>
          <li>Or Dexmedetomidine 3-5 mcg/kg IM + opioid (caution in trauma patient — assess BP)</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Loco-regional analgesia ✨:</strong></p>
        <ul>
          <li>Limb-specific blocks based on location:
            <ul>
              <li>Pelvic limb: epidural OR femoral + sciatic blocks</li>
              <li>Thoracic limb: brachial plexus block (paravertebral / axillary)</li>
            </ul>
          </li>
          <li>Bupivacaine 0.5% — based on weight + location</li>
          <li>± Dexmedetomidine 0.5 mcg/kg as adjuvant</li>
          <li>Provides 12-24 h post-op analgesia ✓</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV titrated</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
          <li>Trauma patient — careful titration (relative hypovolemia)</li>
          <li>Or Etomidate 1-2 mg/kg IV in unstable patient</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>± Fentanyl CRI 5-15 mcg/kg/h</li>
          <li>± Lidocaine CRI 30-50 mcg/kg/min</li>
          <li>± Ketamine CRI 0.6 mg/kg/h</li>
        </ul>
        <p><strong>Antibiotics ✨ (orthopedic implant — must prevent SSI):</strong></p>
        <ul>
          <li>Pre-op (at induction):
            <ul>
              <li>Cefazolin 22 mg/kg IV, repeat q90 min during surgery</li>
              <li>Open fractures: extended spectrum
                <ul>
                  <li>Cefoxitin 30 mg/kg IV (Grade I-II open)</li>
                  <li>Cefoxitin + Metronidazole 15 mg/kg IV (Grade III)</li>
                  <li>Or Cefazolin + Aminoglycoside (gentamicin 6 mg/kg IV q24h short course)</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Post-op:
            <ul>
              <li>Closed fracture: discontinue or 5-7 d cephalexin 22 mg/kg PO q12h</li>
              <li>Open fracture: continue 7-14 d based on contamination level</li>
              <li>Implant infection: longer duration based on culture</li>
            </ul>
          </li>
        </ul>
        <p><strong>Analgesia post-op:</strong></p>
        <ul>
          <li>Continue opioid post-op:
            <ul>
              <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24-48 h</li>
              <li>Then Buprenorphine 0.02 mg/kg q8h × 2-3 d</li>
            </ul>
          </li>
          <li>NSAID — start day 1, continue × 7-14 d:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h ✨</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h</li>
              <li>Cat: robenacoxib 1-2 mg/kg PO/SC q24h × 3-6 d</li>
            </ul>
          </li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 14 d ✨</li>
          <li>± Tramadol 2-5 mg/kg PO q8-12h adjunct</li>
        </ul>
        <p><strong>Bone health:</strong></p>
        <ul>
          <li>Calcium + vitamin D supplementation (small / young patients)</li>
          <li>Adequate nutrition essential for bone healing</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3):</strong></p>
        <ul>
          <li>Recovery monitoring — circulation, sensation distal to fracture</li>
          <li>Cold compress to surgical site (5-10 min q4-6h × 48 h)</li>
          <li>Soft padded bandage with appropriate splinting (varies by location + technique) — limit motion at fracture site</li>
          <li>Pain control multimodal</li>
          <li>Restricted activity</li>
          <li>External fixator: pin tract care begins — saline cleansing q12h</li>
        </ul>
        <p><strong>Week 1-4:</strong></p>
        <ul>
          <li>Strict cage rest (depends on fixation stability — locking plate may allow earlier weight-bearing)</li>
          <li>Leash walks for elimination only</li>
          <li>NO running, jumping, stairs, off-leash</li>
          <li>Bandage changes per protocol (varies — open fracture more frequent)</li>
          <li>Suture removal day 10-14</li>
          <li>External fixator: continued pin tract care, pin tightening if needed</li>
        </ul>
        <p><strong>Week 4-8:</strong></p>
        <ul>
          <li>Recheck radiographs at 4-6 weeks ✨ — assess healing
            <ul>
              <li>Look for bone bridging, callus formation</li>
              <li>Implant position, screw integrity</li>
              <li>Alignment</li>
            </ul>
          </li>
          <li>If healing on track: gradual increase in activity</li>
          <li>Begin PROM exercises if not already</li>
          <li>If joint involved: aggressive ROM essential to prevent stiffness ✨</li>
          <li>Underwater treadmill / hydrotherapy ideal</li>
        </ul>
        <p><strong>Week 8-12:</strong></p>
        <ul>
          <li>Recheck radiographs at 8-12 weeks ✨ — confirm complete healing
            <ul>
              <li>Bone bridging across fracture</li>
              <li>Implant intact</li>
              <li>Callus consolidation</li>
            </ul>
          </li>
          <li>If healed: gradual return to activity</li>
          <li>External fixator: typically removed once healed (8-12 weeks for diaphyseal)</li>
          <li>Plate / IM pin: typically left in place permanently (remove only if causing problems)</li>
        </ul>
        <p><strong>Week 12+ (return to function):</strong></p>
        <ul>
          <li>Gradual return to normal activity</li>
          <li>Most return to function 4-6 months</li>
          <li>Athletic / sport dogs: more conservative timeline (6 months for high-impact)</li>
        </ul>
        <p><strong>Long-term ✨:</strong></p>
        <ul>
          <li>Implant retention vs removal:
            <ul>
              <li>Stainless steel plate: usually leave</li>
              <li>Titanium plate: usually leave (better biocompatibility)</li>
              <li>External fixator: remove once healed</li>
              <li>Remove if causing problems (irritation, infection, palpable, sensitive)</li>
            </ul>
          </li>
          <li>Watch for complications: infection (delayed), implant failure, malunion, non-union</li>
          <li>Recheck rad at 6-12 months for confirmation of complete healing + remodeling</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Non-union ✗</strong>:
            <ul>
              <li>Failure of bone to heal in expected timeframe (usually &gt; 6 months)</li>
              <li>Causes:
                <ul>
                  <li>Excessive motion at fracture (inadequate fixation)</li>
                  <li>Gap healing failure (insufficient bone-to-bone contact)</li>
                  <li>Infection</li>
                  <li>Poor blood supply (toy breed distal radius — common!)</li>
                  <li>Implant failure / loosening</li>
                </ul>
              </li>
              <li>Tx: revision surgery — improved fixation, bone graft, locking plate, external fixator</li>
              <li>Toy breed distal radius non-union: notorious problem — locking plate + cancellous graft, careful technique</li>
            </ul>
          </li>
          <li><strong>Malunion</strong>:
            <ul>
              <li>Healing in malalignment (rotational, angular, shortening)</li>
              <li>Functional consequences depend on severity</li>
              <li>Tx: corrective osteotomy if functional impact</li>
            </ul>
          </li>
          <li><strong>Implant failure / loosening ✗</strong>:
            <ul>
              <li>Plate breakage, screw breakage, screw loosening, IM pin migration</li>
              <li>Risk: undersized implant, premature loading, infection, technical error</li>
              <li>Tx: revision</li>
            </ul>
          </li>
          <li><strong>Surgical site infection / osteomyelitis ✗</strong>:
            <ul>
              <li>Closed fracture: 3-7%</li>
              <li>Open fracture: 10-30%</li>
              <li>Implant biofilm = challenging</li>
              <li>Tx: culture, antibiotics, possible implant removal once bone healed</li>
              <li>Chronic osteomyelitis: long-term management, debridement, often staged surgery</li>
            </ul>
          </li>
          <li><strong>Pin tract infection (external fixator):</strong>
            <ul>
              <li>Common (10-50% of cases)</li>
              <li>Mostly local — managed with cleaning, oral antibiotics</li>
              <li>Pin removal if severe</li>
            </ul>
          </li>
          <li><strong>Joint stiffness</strong> (especially articular fractures):
            <ul>
              <li>Limited ROM, ankylosis</li>
              <li>Prevention: early aggressive PROM, no prolonged immobilization</li>
            </ul>
          </li>
          <li>Refracture (after implant removal)</li>
          <li>Neurologic injury (peripheral nerve damage at trauma or surgery)</li>
          <li>Vascular compromise (rare from surgery — usually present at trauma)</li>
          <li>Compartment syndrome (rare in vet — common in human trauma)</li>
          <li>Delayed union (slower than expected; often progresses to union with continued time / supportive care)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Simple closed fractures ✓:</strong>
            <ul>
              <li>Good-to-excellent healing: 90-95%</li>
              <li>Recovery 8-16 weeks</li>
              <li>Return to normal function 90-95%</li>
              <li>Single surgery + standard rehab</li>
            </ul>
          </li>
          <li><strong>Comminuted fractures:</strong>
            <ul>
              <li>Healing 80-90%</li>
              <li>Longer recovery 12-20 weeks</li>
              <li>Higher complication rate (non-union, malunion)</li>
              <li>Bridging plate / external fixator + biological principles improve outcomes</li>
            </ul>
          </li>
          <li><strong>Articular fractures:</strong>
            <ul>
              <li>Healing 80-90%</li>
              <li>Rate of OA progression: high (joint surface incongruity)</li>
              <li>QOL good with proper alignment + early ROM</li>
              <li>Some develop chronic pain requiring lifelong NSAID</li>
            </ul>
          </li>
          <li><strong>Open fractures:</strong>
            <ul>
              <li>Grade I-II: 75-85% favorable outcome</li>
              <li>Grade III: 50-70% favorable outcome (higher amputation rate)</li>
              <li>Higher infection / osteomyelitis rate</li>
            </ul>
          </li>
          <li><strong>Specific high-risk fracture: Toy breed distal radius/ulna ✗:</strong>
            <ul>
              <li>Notorious for non-union (40-60% if conservatively managed)</li>
              <li>With locking plate: 80-90% healing</li>
              <li>NEVER manage in cast alone — high non-union</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>Most fractures heal completely</li>
              <li>Implants typically retained permanently if no problems</li>
              <li>OA risk in articular fractures</li>
              <li>Refracture risk after implant removal (low)</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Fracture repair = "principle-driven, not technique-driven"</strong> ✨ — strain theory + biological osteosynthesis + AO classification = decision framework<br><br>**IM pin ALONE is rarely sufficient ✗** — always combine with cerclage / plate / external fixator for rotational + bending stability<br><br>⚠️ **Toy breed distal radius = NEVER cast alone** — high non-union rate. Locking plate + cancellous graft<br><br>✗ **Articular fractures = ANATOMIC reduction + early ROM** — joint surface incongruity = OA progression. Don't immobilize prolonged</div>
      `,
    },
  },

  /* ============================================================
     HEAD-NECK — BOAS surgery
  ============================================================ */
  {
    id: 'boas-surgery',
    titleEn: 'BOAS Surgery (Brachycephalic Obstructive Airway Syndrome)',
    titleTh: 'ผ่าตัดทางเดินหายใจหมาหน้าสั้น (BOAS)',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'head-neck',
    tags: ['BOAS', 'brachycephalic syndrome', 'stenotic nares', 'elongated soft palate', 'everted laryngeal saccules', 'staphylectomy', 'rhinoplasty', 'laryngeal collapse', 'sacculectomy', 'hypoplastic trachea'],
    aliases: ['BOAS', 'brachycephalic syndrome', 'soft palate resection', 'staphylectomy', 'หมาหน้าสั้นหายใจไม่สะดวก', 'แก้รูจมูกตีบ'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Brachycephalic Airway',
    sections: {
      indications: `
        <ul>
          <li><strong>Brachycephalic Obstructive Airway Syndrome (BOAS) ✗</strong> — multifactorial upper airway disease
            <ul>
              <li>Predisposed breeds: French Bulldog, English Bulldog, Pug, Boston Terrier, Boxer, Shih Tzu, Pekingese, Cavalier KCS, Persian/Himalayan cats</li>
              <li>Components (any/all may be present):
                <ul>
                  <li><strong>Primary (anatomic):</strong>
                    <ul>
                      <li>Stenotic nares (nostrils too narrow)</li>
                      <li>Elongated soft palate (overlaps epiglottis)</li>
                      <li>Hypoplastic trachea (small tracheal diameter)</li>
                      <li>Aberrant nasal turbinates</li>
                    </ul>
                  </li>
                  <li><strong>Secondary (acquired from chronic obstruction):</strong>
                    <ul>
                      <li>Everted laryngeal saccules (Stage I laryngeal collapse)</li>
                      <li>Tonsillar hypertrophy</li>
                      <li>Laryngeal collapse (Stage II-III) ✗</li>
                      <li>Tracheobronchial collapse</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Clinical signs ✨:</strong>
            <ul>
              <li>Stertor (snoring while awake), stridor</li>
              <li>Exercise intolerance, heat intolerance</li>
              <li>Cyanosis, syncope</li>
              <li>Sleep-disordered breathing, sleep apnea</li>
              <li>GI signs (regurgitation, vomiting — sliding hiatal hernia common in BOAS)</li>
              <li>Severe: heat stroke, aspiration pneumonia, death</li>
            </ul>
          </li>
          <li><strong>Surgical indications:</strong>
            <ul>
              <li>Moderate-severe BOAS clinical signs</li>
              <li>Earlier surgery = better outcomes (before secondary changes develop) ✨</li>
              <li>Recommended in young brachycephalic dogs (6-18 mo) before secondary collapse</li>
              <li>Even in older dogs with established secondary disease (still helps)</li>
              <li>Concurrent procedures often: OHE/neuter timed with BOAS surgery</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe Stage III laryngeal collapse → permanent tracheostomy may be only option ✗</li>
          <li>Active pneumonia (treat first, then surgery)</li>
          <li>Hemodynamically unstable / heat stroke patient — stabilize first</li>
          <li>Owner unable to provide post-op monitoring (severe BOAS = ICU recovery)</li>
          <li>Untreated severe systemic disease (cardiac, renal)</li>
          <li>Severely obese — weight loss often improves BOAS substantially before considering surgery ✨</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup ✨:</strong></p>
        <ul>
          <li><strong>Detailed history:</strong>
            <ul>
              <li>Snoring at rest? During exercise?</li>
              <li>Heat intolerance, exercise intolerance</li>
              <li>Sleep apnea, sleeping with toy in mouth (to keep airway open)</li>
              <li>Cyanosis, syncope</li>
              <li>GI: regurgitation, vomiting, hiatal hernia history</li>
              <li>Episodes of severe respiratory distress</li>
              <li>BOAS grading scales (e.g., Cambridge BOAS scoring)</li>
            </ul>
          </li>
          <li><strong>Physical exam:</strong>
            <ul>
              <li>Auscultate at rest + after activity</li>
              <li>Stertor, stridor characteristics</li>
              <li>Nares: widely open vs slit-like (stenotic)</li>
              <li>Body condition (obesity contributes greatly)</li>
              <li>Cardiac auscultation (may have concurrent disease)</li>
            </ul>
          </li>
          <li><strong>Imaging:</strong>
            <ul>
              <li>3-view thoracic radiographs:
                <ul>
                  <li>Tracheal diameter (compare to thoracic inlet)</li>
                  <li>Cardiac silhouette</li>
                  <li>Lung pathology (aspiration pneumonia history)</li>
                  <li>Hiatal hernia signs</li>
                </ul>
              </li>
              <li>Cervical radiographs — soft palate, tracheal anatomy</li>
              <li>CT (gold standard) — turbinate aberrations, exact soft palate length, tracheal/pharyngeal anatomy</li>
            </ul>
          </li>
          <li><strong>Laryngoscopy / pharyngeal exam (under brief light anesthesia) ✨:</strong>
            <ul>
              <li>CRITICAL part of pre-op assessment</li>
              <li>Soft palate length (overlaps epiglottis &gt; few mm = elongated)</li>
              <li>Saccule eversion (white pearl-like structures lateral to vocal folds = Stage I collapse)</li>
              <li>Laryngeal collapse:
                <ul>
                  <li>Stage I: saccule eversion only</li>
                  <li>Stage II: medial deviation of cuneiform processes</li>
                  <li>Stage III: corniculate process collapse</li>
                </ul>
              </li>
              <li>Tonsillar size</li>
              <li>Often combined with the same anesthesia event for surgery</li>
            </ul>
          </li>
          <li>CBC, biochem, UA</li>
          <li>Coag panel (some breeds — Bulldog with vWD)</li>
        </ul>
        <p><strong>2. Pre-op preparation ✨:</strong></p>
        <ul>
          <li>Pre-emptive anti-inflammatories — REDUCES post-op airway swelling:
            <ul>
              <li>Dexamethasone 0.1-0.2 mg/kg IV at induction</li>
              <li>Some give SC × 24 h pre-op too</li>
            </ul>
          </li>
          <li>Pre-op anti-emetic: Maropitant 1 mg/kg SC (regurgitation common)</li>
          <li>Pre-op gastroprotectant: Omeprazole 1 mg/kg PO q12h × 24-48 h pre-op (aspiration risk)</li>
          <li>Antibiotics: Cefazolin 22 mg/kg IV at induction</li>
          <li>Pre-oxygenate × 5 min before induction ✨</li>
          <li>Anesthesia plan:
            <ul>
              <li>Cool environment, careful airway management</li>
              <li>Multiple ETT sizes available (bulldog often needs smaller than expected)</li>
              <li>Anti-emetic to reduce regurgitation</li>
              <li>NEVER pre-medicate with strong sedatives (acepromazine high dose can cause respiratory depression in BOAS) ⚠️</li>
            </ul>
          </li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence — standard 4-component BOAS surgery:</strong></p>
        <ol>
          <li>Induce anesthesia, intubate (have multiple ETT sizes ready)</li>
          <li>Pre-oxygenate, ensure good airway control before proceeding</li>
          <li>Prepare for sequence: rhinoplasty first (less bleeding into pharynx), then oral procedures</li>
        </ol>
        <p><strong>Step 1: Rhinoplasty (stenotic nares correction) ✨</strong></p>
        <ul>
          <li>Multiple techniques — choose based on severity:</li>
          <li><strong>Vertical wedge resection (most common):</strong>
            <ol>
              <li>Mark vertical wedge on dorsolateral aspect of each nostril</li>
              <li>Wedge: 3-5 mm wide at base, full thickness through alar wing</li>
              <li>Excise wedge with #11 blade or fine Metzenbaum</li>
              <li>Close defect with 4-0 or 5-0 absorbable (Monocryl, PDS): simple interrupted, mucosa-to-skin</li>
              <li>Result: opens nostril substantially</li>
            </ol>
          </li>
          <li><strong>Alar fold resection (Trader's modified):</strong>
            <ul>
              <li>Excise alar wing tissue more aggressively</li>
              <li>Cosmetic outcome may differ — owner discussion</li>
            </ul>
          </li>
          <li><strong>CO2 laser ablation:</strong>
            <ul>
              <li>Less bleeding</li>
              <li>Equipment-dependent</li>
              <li>Equivalent outcome</li>
            </ul>
          </li>
          <li>Both nostrils typically done at same procedure</li>
        </ul>
        <p><strong>Step 2: Staphylectomy (soft palate resection) ✨</strong></p>
        <ul>
          <li>Open mouth wide, retract tongue caudally with gauze</li>
          <li>Identify soft palate, measure overlap with epiglottis</li>
          <li>Goal: trim palate so it just contacts cranial epiglottis (no overlap)</li>
          <li><strong>Technique options:</strong>
            <ul>
              <li><strong>Traditional (scissor + sutures):</strong>
                <ol>
                  <li>Place stay sutures at proposed cut line</li>
                  <li>Cut 1/3 of palate width</li>
                  <li>Suture mucosa-to-mucosa with 4-0 PDS or Monocryl simple continuous</li>
                  <li>Continue cut + suture in segments to control bleeding</li>
                </ol>
              </li>
              <li><strong>CO2 laser:</strong>
                <ul>
                  <li>Cut with laser, minimal bleeding</li>
                  <li>Edges left to heal by 2nd intention OR sutured</li>
                  <li>Faster, less bleeding</li>
                </ul>
              </li>
              <li><strong>Vessel sealing device (LigaSure, Harmonic):</strong>
                <ul>
                  <li>Seal + cut simultaneously</li>
                  <li>Suture not needed</li>
                  <li>Fast, less bleeding</li>
                  <li>Equipment cost</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>How much to remove:
            <ul>
              <li>Conservative: just to tip of epiglottis</li>
              <li>Aggressive: to mid-epiglottis (some surgeons)</li>
              <li>Don't over-resect → risk of nasopharyngeal regurgitation later ⚠️</li>
            </ul>
          </li>
          <li>Hemostasis essential (palate is vascular)</li>
        </ul>
        <p><strong>Step 3: Sacculectomy (everted laryngeal saccules) ✨</strong></p>
        <ul>
          <li>If saccules everted (visible white pearl-like tissue lateral to vocal folds)</li>
          <li>Technique:
            <ol>
              <li>Grasp everted saccule with Allis tissue forceps</li>
              <li>Excise with curved Metzenbaum scissors at base</li>
              <li>Bleeding usually minimal (some report use of vessel sealer)</li>
              <li>No sutures needed — heals by 2nd intention</li>
            </ol>
          </li>
          <li>Both sides done</li>
        </ul>
        <p><strong>Step 4: Tonsillectomy (if hypertrophied) — usually NOT needed</strong></p>
        <ul>
          <li>Only if tonsils very enlarged + obstructing</li>
          <li>Technique: excise with vessel sealer, scissors + sutures, or laser</li>
        </ul>
        <p><strong>Step 5: Final airway assessment</strong></p>
        <ul>
          <li>Look for residual obstruction</li>
          <li>Confirm no excessive bleeding</li>
          <li>Evaluate larynx — Stage III collapse may require permanent tracheostomy if surgery alone insufficient</li>
          <li>Suction pharynx, oropharynx</li>
        </ul>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>"4-procedure BOAS surgery" — better to do all components than partial (recurrence higher with partial correction)</li>
          <li>Smooth recovery from anesthesia is the surgeon's most critical post-op concern (not just the surgery itself)</li>
          <li>Hemostasis essential (palate, saccules bleed)</li>
          <li>Don't over-resect soft palate — nasopharyngeal regurgitation</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication (carefully — BOAS = airway compromise):</strong></p>
        <ul>
          <li><strong>Avoid heavy sedation:</strong>
            <ul>
              <li>Acepromazine: low dose 0.005-0.01 mg/kg IV (or skip)</li>
              <li>Avoid full alpha-2 agonist (dexmedetomidine high dose)</li>
            </ul>
          </li>
          <li>Methadone 0.2-0.4 mg/kg IM/IV ✓ — good analgesia, less respiratory depression than morphine</li>
          <li>Or Hydromorphone 0.05-0.1 mg/kg IV</li>
          <li><strong>Maropitant 1 mg/kg SC ✨</strong> — anti-emetic essential (regurgitation risk)</li>
          <li>Pre-op pre-oxygenation × 5 min essential</li>
        </ul>
        <p><strong>Pre-emptive anti-inflammatory ✨ (CRITICAL for BOAS):</strong></p>
        <ul>
          <li>Dexamethasone 0.1-0.2 mg/kg IV at induction</li>
          <li>Prevents post-op airway edema</li>
          <li>Repeat at end of surgery if extensive resection</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV titrated</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
          <li>Quick intubation (short tolerance to apnea in BOAS)</li>
          <li>Multiple ETT sizes available</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>± Fentanyl CRI 5-10 mcg/kg/h</li>
          <li>± Lidocaine CRI 25-50 mcg/kg/min (analgesia + anti-arrhythmic)</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Cefazolin 22 mg/kg IV at induction (cover oral flora)</li>
          <li>Repeat q90 min during surgery</li>
          <li>Post-op:
            <ul>
              <li>Routine: Cephalexin 22 mg/kg PO q12h × 5-7 d</li>
              <li>Aspiration pneumonia history: extended spectrum based on culture (Amoxicillin-clavulanate, fluoroquinolone)</li>
            </ul>
          </li>
        </ul>
        <p><strong>Analgesia post-op:</strong></p>
        <ul>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24 h (titrate carefully — respiratory depression)</li>
          <li>Or Buprenorphine 0.02 mg/kg q8h (less respiratory depression — good choice for BOAS)</li>
          <li>NSAID — start day 1:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 5-7 d</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h × 3-5 d</li>
            </ul>
          </li>
          <li>± Gabapentin 5-10 mg/kg PO q8-12h × 5-7 d</li>
        </ul>
        <p><strong>Post-op anti-emetic + GI:</strong></p>
        <ul>
          <li>Maropitant 1 mg/kg SC q24h × 3-5 d ✓</li>
          <li>Omeprazole 1 mg/kg PO q24h × 5-7 d</li>
          <li>± Cisapride 0.5 mg/kg PO q8h if regurgitation persists</li>
        </ul>
        <p><strong>Sliding hiatal hernia (concurrent in 30-50% BOAS) ✨:</strong></p>
        <ul>
          <li>If symptomatic: omeprazole + maropitant + cisapride long-term</li>
          <li>Surgical correction (esophagopexy + diaphragmatic crural plication) may be added in select cases</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-24h) — ICU monitoring CRITICAL ✨:</strong></p>
        <ul>
          <li><strong>Airway management = top priority:</strong>
            <ul>
              <li>Smooth recovery essential — avoid coughing, gagging</li>
              <li>Keep ETT in place LONG into recovery (BOAS dogs often re-obstruct from edema)</li>
              <li>Extubate only when fully awake + able to maintain airway</li>
              <li>Have re-intubation ready</li>
              <li>Some advocate prophylactic temporary tracheostomy in severe cases (rarely needed with proper management)</li>
            </ul>
          </li>
          <li>Oxygen supplementation post-extubation × 12-24 h</li>
          <li>Continuous monitoring × 24 h:
            <ul>
              <li>Pulse oximetry</li>
              <li>Respiratory rate, effort</li>
              <li>Mucous membrane color</li>
              <li>Stertor / stridor (some persists initially from swelling)</li>
            </ul>
          </li>
          <li>Cool environment (overheating worsens dyspnea)</li>
          <li>Cage rest, calm</li>
          <li>NO food for 6-12 h post-op (regurgitation risk)</li>
          <li>Small amount of water once awake</li>
          <li>Continue analgesics, anti-emetics</li>
        </ul>
        <p><strong>Day 1-7:</strong></p>
        <ul>
          <li>Discharge typically day 1-2 once breathing well</li>
          <li>Soft food only × 5-7 d (loaf-like, easier swallow)</li>
          <li>Small frequent meals</li>
          <li>NO hard chews, raw bones, sticks × 14 d</li>
          <li>Continue NSAID, antibiotic, anti-emetic</li>
          <li>E-collar to prevent face rubbing</li>
          <li>Restricted activity 7-14 d</li>
        </ul>
        <p><strong>Day 7-21:</strong></p>
        <ul>
          <li>Recheck day 7-10:
            <ul>
              <li>Healing of nares</li>
              <li>Breathing assessment</li>
              <li>Any complications</li>
            </ul>
          </li>
          <li>Suture removal not usually needed (absorbable used)</li>
          <li>Gradual return to soft regular food</li>
          <li>Continue avoidance of overheating, vigorous exercise × 14-21 d</li>
        </ul>
        <p><strong>Long-term ✨:</strong></p>
        <ul>
          <li>Lifelong management:
            <ul>
              <li>Weight management (obesity worsens BOAS) — single most important factor</li>
              <li>Avoid overheating, exercise restriction in heat</li>
              <li>Harness instead of collar (avoid neck pressure)</li>
              <li>Air-conditioned environment</li>
              <li>Avoid stress</li>
            </ul>
          </li>
          <li>GI management if hiatal hernia / regurgitation persists:
            <ul>
              <li>Omeprazole long-term</li>
              <li>Elevated feeding</li>
              <li>Multiple small meals</li>
            </ul>
          </li>
          <li>Recheck annually — assess BOAS progression (some may need revision surgery)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Post-op airway swelling / obstruction ✗</strong> — most feared
            <ul>
              <li>Onset typically 6-12 h post-op</li>
              <li>Worsening stridor, dyspnea, cyanosis</li>
              <li>Tx: re-intubation, oxygen, dexamethasone, sedation, possibly temporary tracheostomy</li>
              <li>Prevention: dexamethasone pre-op, smooth recovery, prolonged intubation</li>
            </ul>
          </li>
          <li><strong>Regurgitation / aspiration pneumonia ✗</strong>:
            <ul>
              <li>BOAS dogs already prone</li>
              <li>Surgery may worsen temporarily (oropharyngeal manipulation)</li>
              <li>Tx: NPO, anti-emetic, prokinetic, treat pneumonia if develops</li>
              <li>Prevention: maropitant, omeprazole, careful induction</li>
            </ul>
          </li>
          <li><strong>Nasopharyngeal regurgitation ✗</strong> — over-resection of soft palate:
            <ul>
              <li>Food/water comes out nose</li>
              <li>Persistent rhinitis</li>
              <li>Difficult to revise — try to avoid by conservative palate resection</li>
            </ul>
          </li>
          <li>Hemorrhage from palate or saccule resection (usually self-limiting)</li>
          <li>Wound dehiscence at nares (excessive licking, e-collar failure)</li>
          <li>Persistent BOAS signs (incomplete correction, secondary changes ongoing)</li>
          <li>Need for revision surgery (2-3 component initial → all 4 needed; more aggressive resection)</li>
          <li>Heat stroke during recovery (warm environment + stressed BOAS dog)</li>
          <li>Anesthetic death (rare but real risk in BOAS — high airway risk)</li>
          <li>Tracheal collapse progression (separate disease entity, may need stenting)</li>
          <li>Stage III laryngeal collapse → may eventually need permanent tracheostomy</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Early correction (young dogs, before secondary changes) ✓:</strong>
            <ul>
              <li>Excellent outcomes: 90-95% improvement in airway function</li>
              <li>Reduced episodes of severe distress</li>
              <li>Better exercise tolerance</li>
              <li>Improved sleep quality</li>
              <li>Lower lifetime risk of heat stroke, aspiration pneumonia</li>
            </ul>
          </li>
          <li><strong>Older dogs with established secondary changes:</strong>
            <ul>
              <li>Good outcomes: 70-85% improvement</li>
              <li>Some persistent BOAS signs (laryngeal collapse, tracheobronchial collapse irreversible)</li>
              <li>Still benefits — better than no surgery</li>
            </ul>
          </li>
          <li><strong>Mortality:</strong>
            <ul>
              <li>Healthy young: &lt; 1%</li>
              <li>Severe BOAS / secondary changes: 1-5% peri-operative mortality</li>
              <li>Most preventable with proper anesthesia + recovery management</li>
            </ul>
          </li>
          <li><strong>Stage III laryngeal collapse:</strong>
            <ul>
              <li>BOAS surgery alone insufficient</li>
              <li>May progress to permanent tracheostomy</li>
              <li>Cyanotic episodes, severe limitation</li>
              <li>Quality of life discussion important</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>Brachycephalic anatomy persists — lifelong management essential</li>
              <li>Weight gain = BOAS recurrence (most modifiable factor)</li>
              <li>Some need revision surgery (5-15%)</li>
              <li>QOL substantially improved with surgery + lifelong management</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>BOAS surgery = "earlier is better"</strong> ✨ — recommend for young brachycephalic dogs (6-18 mo) before secondary changes develop<br><br>**Smooth recovery from anesthesia = surgeon's #1 concern** — dexamethasone pre-op, prolonged intubation, ICU monitoring × 24 h<br><br>⚠️ **Don't over-resect soft palate** — nasopharyngeal regurgitation hard to fix. ตัดให้ติดปลาย epiglottis พอ<br><br>✗ **Stage III laryngeal collapse = surgery alone may not save** — quality of life discussion + permanent tracheostomy option</div>
      `,
    },
  },

  /* ============================================================
     HEAD-NECK — TECA-LBO
  ============================================================ */
  {
    id: 'teca-lbo',
    titleEn: 'Total Ear Canal Ablation + Lateral Bulla Osteotomy (TECA-LBO)',
    titleTh: 'ผ่าตัดเอาท่อหูออกทั้งหมด + เปิด bulla',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'head-neck',
    tags: ['TECA', 'TECA-LBO', 'total ear canal ablation', 'lateral bulla osteotomy', 'end-stage otitis', 'facial nerve', 'Horner syndrome', 'vestibular dysfunction', 'ear canal neoplasia', 'cocker spaniel'],
    aliases: ['TECA', 'TECA-LBO', 'ear canal removal', 'ผ่าหูทั้งหมด', 'ตัดท่อหูออก'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Ear Canal',
    sections: {
      indications: `
        <ul>
          <li><strong>End-stage chronic otitis externa ✗</strong> — primary indication
            <ul>
              <li>Failed prolonged medical management (months to years)</li>
              <li>Calcified or stenotic ear canal (loss of function — can't be effectively cleaned)</li>
              <li>Predisposed breeds: Cocker Spaniel ✨, Bulldog, Shar Pei, Lab</li>
              <li>Multiple infections, multidrug-resistant organisms (Pseudomonas)</li>
              <li>Owner unable to maintain medical management</li>
              <li>Pain at home (head shaking, scratching, vocalizing)</li>
            </ul>
          </li>
          <li><strong>Ear canal neoplasia:</strong>
            <ul>
              <li>Ceruminous gland adenocarcinoma (cat — most common malignant)</li>
              <li>SCC (cat — usually pinna, occasionally canal)</li>
              <li>Sebaceous gland adenocarcinoma</li>
              <li>Histiocytoma, sebaceous adenoma (benign — may not need TECA if local excision possible)</li>
            </ul>
          </li>
          <li><strong>Severe trauma to ear canal (rare)</strong></li>
          <li><strong>Concurrent disease:</strong>
            <ul>
              <li>Para-aural abscess (chronic infection in para-aural tissues)</li>
              <li>Otitis media non-responsive to medical Tx</li>
              <li>Severe glandular hyperplasia of ear canal</li>
            </ul>
          </li>
        </ul>
        <p><strong>Why TECA + LBO together (not TECA alone) ✨:</strong></p>
        <ul>
          <li>Otitis externa nearly always has concurrent otitis media (chronic disease)</li>
          <li>Removing canal alone leaves diseased middle ear → continued infection / draining tract</li>
          <li>LBO addresses middle ear: curette diseased epithelium, remove debris, lavage</li>
          <li>Standard of care = TECA + LBO together</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Treatable otitis externa (try medical management first)</li>
          <li>Only mild-moderate disease without secondary changes</li>
          <li>Severe systemic illness preventing safe anesthesia</li>
          <li>Patient too unstable</li>
          <li>Coagulopathy</li>
          <li>Owner unable to comply with post-op care (drain management, e-collar)</li>
          <li>Bilateral severe disease — staged 6-8 weeks apart, NOT same anesthesia (significant trauma + bleeding)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup ✨:</strong></p>
        <ul>
          <li><strong>Detailed history:</strong>
            <ul>
              <li>Duration of otitis (months to years for TECA candidates)</li>
              <li>All medications tried</li>
              <li>Quality of life impact</li>
              <li>Prior ear cytology, culture results</li>
              <li>Owner expectations + financial considerations</li>
            </ul>
          </li>
          <li><strong>Physical exam:</strong>
            <ul>
              <li>Otoscopic evaluation (often impossible due to canal pathology)</li>
              <li>Palpate ear canal — calcified vs soft? Stenotic?</li>
              <li>Para-aural swelling / draining tract = abscess</li>
              <li><strong>Cranial nerve exam ✨:</strong>
                <ul>
                  <li>Facial nerve function (CN VII): ear/eye blink, lip movement, palpebral reflex</li>
                  <li>Sympathetic fibers: assess for Horner syndrome</li>
                  <li>Vestibular function: head tilt, nystagmus</li>
                </ul>
              </li>
              <li>Document baseline neurologic status — pre-op deficits often present + worsen post-op</li>
            </ul>
          </li>
          <li><strong>Imaging — CT preferred ✨:</strong>
            <ul>
              <li>CT (gold standard):
                <ul>
                  <li>Bulla involvement (almost always present in TECA candidates)</li>
                  <li>Canal calcification, stenosis</li>
                  <li>Para-aural abscess extent</li>
                  <li>Adjacent bone involvement (skull base, TMJ)</li>
                  <li>Tumor extent</li>
                  <li>Pre-surgical planning</li>
                </ul>
              </li>
              <li>If CT unavailable: skull radiographs (bullae views, lateral, DV) — less sensitive</li>
            </ul>
          </li>
          <li><strong>Cytology + Culture (collected at surgery):</strong>
            <ul>
              <li>Middle ear cytology — bacteria, fungi, neoplastic cells</li>
              <li>Culture + sensitivity (often Pseudomonas, Staph, mixed)</li>
              <li>Histopathology of canal mucosa + bulla lining</li>
            </ul>
          </li>
          <li>CBC, biochem, UA</li>
          <li>Coag panel</li>
          <li>Type / crossmatch (TECA can have significant bleeding)</li>
        </ul>
        <p><strong>2. Counsel owner pre-op ✨ (CRITICAL — high complication rate):</strong></p>
        <ul>
          <li>Risk of facial nerve paralysis: ~ 30% transient, 5-10% permanent</li>
          <li>Risk of Horner syndrome: 10-30% (usually transient)</li>
          <li>Risk of vestibular signs: 10-15% (usually transient)</li>
          <li>Hearing loss: virtually 100% on operated side (already minimal due to chronic disease)</li>
          <li>Post-op care intensive: drain management, e-collar 14-21 d, pain control</li>
          <li>Cost</li>
          <li>Bilateral disease → staged surgery 6-8 weeks apart</li>
        </ul>
        <p><strong>3. Pre-op preparation:</strong></p>
        <ul>
          <li>Antibiotics: Cefoxitin 30 mg/kg IV at induction (covers anaerobes + gram-neg)</li>
          <li>Or Cefazolin 22 mg/kg IV + Metronidazole 15 mg/kg IV (anaerobic coverage critical for ear surgery)</li>
          <li>Or based on prior culture (often need fluoroquinolone for Pseudomonas)</li>
          <li>Methadone 0.3-0.5 mg/kg IV</li>
          <li>Maropitant 1 mg/kg SC (vestibular surgery → nausea)</li>
          <li>Wide clip + scrub from caudal head to ventral neck</li>
          <li>Position: lateral recumbency, affected ear up</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence ✨ (ear canal anatomically separated from facial nerve = key principle):</strong></p>
        <ol>
          <li><strong>Step 1: Approach</strong>
            <ul>
              <li>T-shaped or Y-shaped skin incision:
                <ul>
                  <li>Vertical limb: along external acoustic meatus opening</li>
                  <li>Horizontal limbs: dorsal + ventral around ear canal opening</li>
                </ul>
              </li>
              <li>Reflect skin flaps</li>
            </ul>
          </li>
          <li><strong>Step 2: Identify + isolate facial nerve ✨ (MOST CRITICAL STEP)</strong>
            <ul>
              <li>Facial nerve emerges from stylomastoid foramen ROSTRAL + VENTRAL to ear canal</li>
              <li>Course: runs ROSTROVENTRAL across vertical canal, lateral to horizontal canal</li>
              <li><strong>Identify nerve early</strong>, dissect carefully to expose it before extensive ear canal dissection</li>
              <li>Use blunt dissection, careful retraction</li>
              <li>Tag nerve with vessel loop or umbilical tape (DON'T constrict)</li>
              <li>Continuous awareness of nerve location throughout surgery</li>
            </ul>
          </li>
          <li><strong>Step 3: Dissect ear canal</strong>
            <ul>
              <li>Stay close to canal cartilage</li>
              <li>Dissect around vertical canal first, then horizontal</li>
              <li>Ligate / cauterize: caudal auricular artery branches, periauricular vessels</li>
              <li>Mobilize entire canal until reaches external acoustic meatus + bulla</li>
              <li>Don't avulse from bulla — risk of nerve / vessel damage</li>
            </ul>
          </li>
          <li><strong>Step 4: Transect canal at bulla:</strong>
            <ul>
              <li>Identify junction of canal + bulla</li>
              <li>Use rongeurs / curette to release canal from bulla</li>
              <li>Send canal for histopathology + culture</li>
            </ul>
          </li>
          <li><strong>Step 5: Lateral bulla osteotomy (LBO) ✨</strong>
            <ul>
              <li>Use rongeur or burr to remove ventrolateral bulla wall</li>
              <li>Expose middle ear cavity</li>
              <li>Avoid inner ear structures (cochlea, vestibule — medial bulla wall)</li>
              <li>Avoid stylomastoid foramen / facial nerve (rostrolateral)</li>
            </ul>
          </li>
          <li><strong>Step 6: Curette + lavage middle ear ✨</strong>
            <ul>
              <li>Curette ALL diseased epithelium from bulla (any remaining → continued infection)</li>
              <li>Sample for culture + cytology + histopath</li>
              <li>Copious lavage with sterile saline</li>
              <li>Irrigate Eustachian tube area</li>
            </ul>
          </li>
          <li><strong>Step 7: Drain placement</strong>
            <ul>
              <li>Place closed-suction drain (Jackson-Pratt) or Penrose drain in dead space</li>
              <li>Exit through separate stab incision ventral to wound</li>
              <li>Suture in place</li>
            </ul>
          </li>
          <li><strong>Step 8: Closure</strong>
            <ul>
              <li>Lavage thoroughly</li>
              <li>Close in layers: deep tissues with 3-0 PDS, SQ with 3-0 Monocryl, skin with 3-0 nylon or staples</li>
              <li>Tension-free closure</li>
              <li>Apply protective bandage (some skip)</li>
            </ul>
          </li>
        </ol>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>Identify + protect facial nerve = #1 priority ✗</li>
          <li>Stay close to canal cartilage during dissection</li>
          <li>Complete removal of all canal epithelium + middle ear epithelium (incomplete = recurrent infection)</li>
          <li>Avoid inner ear (medial bulla wall) — vestibular damage</li>
          <li>Closed-suction drain reduces seroma + abscess risk</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.3-0.5 mg/kg IV/IM (full mu agonist for major head/neck surgery)</li>
          <li>± Acepromazine 0.01-0.03 mg/kg IM (caution if Cocker — predisposed to ace-related effects)</li>
          <li>Or Dexmedetomidine 3-5 mcg/kg IM + opioid</li>
          <li>Maropitant 1 mg/kg SC (anti-vestibular nausea)</li>
        </ul>
        <p><strong>Loco-regional analgesia (HIGHLY beneficial):</strong></p>
        <ul>
          <li><strong>Auriculotemporal + great auricular nerve block ✨:</strong>
            <ul>
              <li>Bupivacaine 0.5% — 0.5-1 mL per nerve site</li>
              <li>Auriculotemporal: rostral to ear canal at zygomatic arch</li>
              <li>Great auricular: caudal to ear at base of pinna</li>
              <li>Reduces MAC, smoother recovery, prolonged analgesia</li>
            </ul>
          </li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 5-15 mcg/kg/h ✓</li>
          <li>Lidocaine CRI 30-50 mcg/kg/min</li>
          <li>± Ketamine CRI 0.6 mg/kg/h (anti-hyperalgesia)</li>
        </ul>
        <p><strong>Antibiotics ✨ (extended spectrum mandatory):</strong></p>
        <ul>
          <li>Pre-op:
            <ul>
              <li>Cefoxitin 30 mg/kg IV at induction (anaerobes + gram-neg) ✨</li>
              <li>Or Cefazolin + Metronidazole 15 mg/kg IV</li>
              <li>If pre-op Pseudomonas: add fluoroquinolone (enrofloxacin 5-10 mg/kg IV q24h)</li>
            </ul>
          </li>
          <li>Repeat q90 min during surgery</li>
          <li>Post-op (based on intra-op culture):
            <ul>
              <li>Pseudomonas: Marbofloxacin 2.7 mg/kg PO q24h × 4-6 weeks</li>
              <li>Staph: Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 4-6 weeks</li>
              <li>MRSA / multi-drug resistant: based on culture + sensitivity</li>
              <li>Continue 4-6 weeks (osteomyelitis-level duration)</li>
            </ul>
          </li>
        </ul>
        <p><strong>Analgesia post-op (head/neck = painful):</strong></p>
        <ul>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24-48 h</li>
          <li>Then Buprenorphine 0.02 mg/kg IV/IM q8h × 2-3 d</li>
          <li>NSAID — start day 1:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 7-14 d</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h × 5-7 d</li>
            </ul>
          </li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 14-21 d ✨ (excellent for head/neck pain)</li>
          <li>± Tramadol 2-5 mg/kg PO q8-12h adjunct</li>
        </ul>
        <p><strong>Anti-emetic / vestibular support:</strong></p>
        <ul>
          <li>Maropitant 1 mg/kg SC q24h × 5-7 d</li>
          <li>± Meclizine 25 mg/dog PO q12-24h × 5-7 d (anti-vertigo, helpful if vestibular signs)</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-2) — hospitalize:</strong></p>
        <ul>
          <li><strong>Neurologic monitoring</strong> — facial nerve function, Horner's, vestibular signs:
            <ul>
              <li>Document at each shift</li>
              <li>Most deficits transient (resolve days-weeks)</li>
              <li>Some permanent (5-10% facial nerve)</li>
            </ul>
          </li>
          <li>Drain management:
            <ul>
              <li>Strip + record output q4-6h</li>
              <li>Closed-suction (Jackson-Pratt): record volumes</li>
              <li>Penrose: change pad, watch fluid character</li>
              <li>Remove drain when output &lt; 20 mL/d for 24 h (typically day 3-5)</li>
            </ul>
          </li>
          <li>Pain control multimodal</li>
          <li>E-collar ALWAYS</li>
          <li>Cool compress to surgical site (5-10 min q4-6h × 48 h)</li>
        </ul>
        <p><strong>Day 2-7:</strong></p>
        <ul>
          <li>Discharge typically day 2-4 once drain removed + stable</li>
          <li>Continue antibiotics, NSAID, opioid (transition to PO)</li>
          <li>E-collar 100% × 14-21 d</li>
          <li>Wound care: gentle cleaning, monitor for swelling, drainage</li>
          <li>Dietary: soft food (chewing painful), small frequent meals</li>
          <li>Watch for keratoconjunctivitis sicca (KCS) on operated side IF facial nerve affected:
            <ul>
              <li>Schirmer tear test</li>
              <li>If decreased: artificial tears, cyclosporine 0.2% q12-24h</li>
            </ul>
          </li>
        </ul>
        <p><strong>Day 7-21:</strong></p>
        <ul>
          <li>Recheck day 10-14:
            <ul>
              <li>Wound healing</li>
              <li>Drain site healing</li>
              <li>Neurologic exam — improving / persistent</li>
            </ul>
          </li>
          <li>Suture removal day 14</li>
          <li>Continue antibiotics 4-6 weeks total based on culture</li>
          <li>Continue eye care if facial nerve affected</li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Most facial nerve deficits resolve by 4-6 weeks; some persist</li>
          <li>Permanent eye care if facial nerve permanent (cyclosporine, artificial tears)</li>
          <li>Hearing on operated side absent / minimal (was already minimal)</li>
          <li>Bilateral disease → contralateral surgery 6-8 weeks after first</li>
          <li>Watch for late complications (abscess, fistula) — uncommon but possible</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Facial nerve paralysis ✗</strong> — most feared:
            <ul>
              <li>Transient: 30% (resolve in days-weeks)</li>
              <li>Permanent: 5-10%</li>
              <li>Signs: ipsilateral lip droop, eyelid not closing, decreased palpebral reflex</li>
              <li>Consequences: KCS, corneal ulceration if eye doesn't close</li>
              <li>Tx: artificial tears, cyclosporine, sometimes tarsorrhaphy</li>
            </ul>
          </li>
          <li><strong>Horner syndrome ✗</strong>:
            <ul>
              <li>10-30% (often transient — sympathetic damage)</li>
              <li>Miosis, ptosis, enophthalmos, 3rd eyelid prominence</li>
              <li>Usually resolves 2-8 weeks</li>
              <li>Phenylephrine drops can be diagnostic + therapeutic if needed</li>
            </ul>
          </li>
          <li><strong>Vestibular dysfunction ✗</strong>:
            <ul>
              <li>10-15% (often transient — inner ear inflammation)</li>
              <li>Head tilt, nystagmus, ataxia, falling toward operated side</li>
              <li>Tx: meclizine, supportive, recovery 2-6 weeks usually</li>
              <li>Permanent damage to inner ear (rare): persistent head tilt + ataxia, gradual compensation over months</li>
            </ul>
          </li>
          <li><strong>Hearing loss</strong>:
            <ul>
              <li>Operated side: virtually 100% (was already minimal)</li>
              <li>Bilateral surgery: total deafness — owner counseling important</li>
            </ul>
          </li>
          <li><strong>Para-aural abscess ✗</strong>:
            <ul>
              <li>Failure to remove all infected tissue → recurrent abscess</li>
              <li>Onset weeks to months post-op</li>
              <li>Tx: drainage, antibiotics, may need re-exploration</li>
            </ul>
          </li>
          <li><strong>Persistent draining tract / fistula:</strong>
            <ul>
              <li>Skin draining tract = retained tissue or implant</li>
              <li>Tx: re-exploration, complete removal</li>
            </ul>
          </li>
          <li>Surgical site infection</li>
          <li>Wound dehiscence</li>
          <li>Seroma / hematoma (drain placement reduces)</li>
          <li>Hemorrhage (intra-op or post-op)</li>
          <li>Anesthetic complications</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>End-stage chronic otitis ✓:</strong>
            <ul>
              <li>Resolution of chronic infection: 90-95% ✓</li>
              <li>Pain resolution: 95%</li>
              <li>Quality of life dramatically improved</li>
              <li>Owner satisfaction high (95%)</li>
              <li>Recovery 4-6 weeks (most function back)</li>
            </ul>
          </li>
          <li><strong>Ear canal neoplasia (benign / well-localized):</strong>
            <ul>
              <li>Curative for many tumors with complete resection</li>
              <li>Excellent prognosis if no metastasis</li>
            </ul>
          </li>
          <li><strong>Ceruminous gland adenocarcinoma (cat):</strong>
            <ul>
              <li>Local control with TECA-LBO + wide margins</li>
              <li>MST ~ 12-24 months (depends on stage at presentation)</li>
              <li>Distant met rate 30-40%</li>
            </ul>
          </li>
          <li><strong>Para-aural abscess:</strong>
            <ul>
              <li>Resolution 85-95%</li>
              <li>Persistent draining tract in 5-10% (need re-exploration)</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>Most patients return to normal activity 4-6 weeks</li>
              <li>Persistent neurologic deficits in 5-10%:
                <ul>
                  <li>Facial nerve weakness (most common)</li>
                  <li>Sometimes Horner</li>
                </ul>
              </li>
              <li>Hearing loss accepted (was already minimal)</li>
              <li>Bilateral surgery: full deafness — consider quality of life, communication training</li>
              <li>Cocker Spaniels: most common breed for TECA — owners often expect this outcome</li>
            </ul>
          </li>
          <li><strong>Mortality:</strong>
            <ul>
              <li>Healthy patient: &lt; 1%</li>
              <li>Complicated / older patient: 1-3%</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>TECA-LBO = curative procedure for end-stage otitis</strong> ✓ — eliminates years of medical management, dramatic QOL improvement<br><br>**Facial nerve identification + protection = surgeon's #1 priority** ✗ — counsel owner about 30% transient / 5-10% permanent paralysis<br><br>⚠️ **Bilateral surgery = staged 6-8 weeks apart** — never simultaneous (bleeding, recovery)<br><br>✗ **Antibiotics 4-6 weeks based on culture** — middle ear infection = osteomyelitis-level duration. Pseudomonas common in chronic disease</div>
      `,
    },
  },

  /* ============================================================
     HEAD-NECK — Cherry eye replacement
  ============================================================ */
  {
    id: 'cherry-eye-replacement',
    titleEn: 'Cherry Eye Replacement (Nictitans Gland Prolapse)',
    titleTh: 'ผ่าตัดแก้ลูกตาที่สาม (cherry eye)',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'head-neck',
    tags: ['cherry eye', 'nictitans gland prolapse', 'third eyelid gland', 'Morgan pocket', 'anchoring suture', 'KCS', 'dry eye', 'Bulldog', 'Cocker Spaniel', 'Beagle'],
    aliases: ['cherry eye', 'prolapsed third eyelid gland', 'nictitans prolapse', 'ลูกตาที่สาม', 'ลูกเชอร์รี่'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Eyelids & Third Eyelid',
    sections: {
      indications: `
        <ul>
          <li><strong>Prolapsed nictitans gland ("cherry eye") ✗</strong>:
            <ul>
              <li>Pink/red round mass at medial canthus, behind 3rd eyelid</li>
              <li>Often acute appearance, may be intermittent initially</li>
              <li>Predisposed breeds: English Bulldog, French Bulldog, Beagle, Boston Terrier, Cocker Spaniel, Cavalier KCS, Lhasa Apso, Shih Tzu, Mastiff, Bull Terrier</li>
              <li>Most common: 6 mo - 2 yr old</li>
              <li>40-50% bilateral within months ✨</li>
              <li>Cat: rare — Burmese predisposed</li>
            </ul>
          </li>
          <li><strong>Why surgical replacement (NOT excision) ✨:</strong>
            <ul>
              <li>Nictitans gland produces ~ 30-40% of tear film ✨</li>
              <li>Excision = high risk of KCS (keratoconjunctivitis sicca / dry eye) — lifelong tear stimulants needed</li>
              <li>Replacement preserves gland function</li>
              <li>Excision should ONLY be done if gland is necrotic / neoplastic (rare)</li>
            </ul>
          </li>
          <li><strong>Surgical timing:</strong>
            <ul>
              <li>Sooner is better — chronic prolapse causes gland inflammation, fibrosis</li>
              <li>Acute prolapse: relatively easy to replace</li>
              <li>Chronic / recurrent: more difficult, lower success</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Nictitans gland malignancy (rare in dogs) — biopsy first if mass appearance abnormal</li>
          <li>Severely necrotic gland → excision may be only option (counsel about KCS risk)</li>
          <li>Active untreated conjunctivitis (treat first)</li>
          <li>Concurrent severe ocular disease that takes priority (e.g., corneal ulcer needing immediate Tx)</li>
          <li>Excessively aggressive correction in older dogs without clinical signs (controversy — some argue prolapsed gland alone causes minimal damage if no chronic conjunctivitis)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Ophthalmologic exam ✨:</strong></p>
        <ul>
          <li><strong>Schirmer Tear Test (STT) ✨:</strong>
            <ul>
              <li>Baseline tear production assessment</li>
              <li>Normal: &gt; 15 mm/min</li>
              <li>Borderline: 10-15 mm/min</li>
              <li>KCS: &lt; 10 mm/min</li>
              <li>If pre-op KCS: warn owner about higher risk + likely lifelong tear management</li>
            </ul>
          </li>
          <li>Fluorescein stain — assess for corneal ulcer</li>
          <li>Tonometry — IOP (rule out glaucoma)</li>
          <li>Slit lamp / direct exam — anterior segment, lens</li>
          <li>Indirect ophthalmoscopy — fundus</li>
          <li>Examine BOTH eyes (other side may follow)</li>
          <li>Assess concurrent issues: entropion, distichiasis, ectropion</li>
        </ul>
        <p><strong>2. Workup:</strong></p>
        <ul>
          <li>Standard pre-anesthesia (CBC, biochem if older or breed-related concerns)</li>
          <li>Coagulation if bleeding disorder breed (Bulldog, Beagle)</li>
        </ul>
        <p><strong>3. Pre-op preparation:</strong></p>
        <ul>
          <li>Pre-medication: methadone + maropitant</li>
          <li>Ophthalmic prep:
            <ul>
              <li>Dilute 1:50 betadine (povidone iodine) for ocular surface — NOT chlorhexidine ✗ (corneal toxic)</li>
              <li>Apply with sterile cotton swab around eye</li>
              <li>Don't get into eye undiluted</li>
            </ul>
          </li>
          <li>Surgical eye drape</li>
          <li>Loupes / magnification recommended (small structures)</li>
          <li>Position: lateral recumbency or dorsal with affected eye up</li>
        </ul>
      `,
      technique: `
        <p><strong>A. Morgan Pocket Technique (most common, gold standard ✨)</strong></p>
        <ol>
          <li><strong>Identify gland:</strong>
            <ul>
              <li>Grasp 3rd eyelid with fine forceps, evert</li>
              <li>Visualize prolapsed gland on bulbar surface of 3rd eyelid</li>
            </ul>
          </li>
          <li><strong>Create conjunctival pocket:</strong>
            <ul>
              <li>Make 2 parallel incisions in bulbar conjunctiva of 3rd eyelid</li>
              <li>One incision palpebral side of gland</li>
              <li>One incision bulbar side of gland</li>
              <li>Each incision: 5-10 mm long depending on gland size</li>
              <li>Don't cut into gland itself</li>
            </ul>
          </li>
          <li><strong>Imbricate gland into pocket:</strong>
            <ul>
              <li>Suture the 2 incisions together using 5-0 or 6-0 absorbable suture (Vicryl, Monocryl)</li>
              <li>Buried suture pattern (knots inside pocket, NOT touching cornea)</li>
              <li>Continuous or simple interrupted</li>
              <li>Effectively creates pocket containing gland</li>
              <li>Verify gland is completely contained, no exposed conjunctival edges</li>
            </ul>
          </li>
          <li><strong>Confirm position:</strong>
            <ul>
              <li>Gland should not be visible</li>
              <li>3rd eyelid moves smoothly</li>
              <li>No corneal contact with sutures</li>
            </ul>
          </li>
        </ol>
        <p><strong>B. Anchoring Suture Technique (Stanley method)</strong></p>
        <ol>
          <li>Identify prolapsed gland</li>
          <li>Place suture through gland to anchor:
            <ul>
              <li>Variants: anchor to periosteum of orbital rim, sclera, or zygomatic bone</li>
              <li>Use 4-0 nonabsorbable (nylon, polypropylene)</li>
              <li>Carefully avoid passing through cornea</li>
            </ul>
          </li>
          <li>Tighten to reduce gland</li>
          <li>Tie with knots external (in fornix area)</li>
          <li>Pros: simpler than Morgan</li>
          <li>Cons: higher recurrence, foreign body reaction possible, potentially less long-term success</li>
        </ol>
        <p><strong>C. Combined techniques (some surgeons combine pocket + anchor)</strong></p>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li><strong>NEVER excise the gland</strong> ✗ (KCS risk)</li>
          <li>Burying knots inside pocket prevents corneal abrasion</li>
          <li>Use absorbable suture (no need for removal, less reactive)</li>
          <li>Magnification helps with precise placement</li>
          <li>Bilateral disease: do both at same surgery if affected, or stage second when occurs</li>
        </ul>
        <p><strong>Concurrent procedures (if indicated):</strong></p>
        <ul>
          <li>Entropion correction (commonly needed in same breeds — Bulldog, Mastiff)</li>
          <li>Distichiasis (eyelash) treatment if causing problems</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.2 mg/kg IM/IV (mild — short procedure)</li>
          <li>Or Buprenorphine 0.02 mg/kg IM</li>
          <li>± Acepromazine low dose 0.01-0.03 mg/kg IM (caution in Bulldog)</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Light plane sufficient for short procedure</li>
        </ul>
        <p><strong>Topical anesthesia (helpful adjunct):</strong></p>
        <ul>
          <li>Proparacaine 0.5% drops at start of surgery (single use, doesn't cross cornea well)</li>
          <li>Reduces stimulation during procedure</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Pre-op:
            <ul>
              <li>NOT routinely needed for routine clean ocular surgery</li>
              <li>Can give Cefazolin 22 mg/kg IV at induction if owner requests / surgeon preference</li>
            </ul>
          </li>
          <li>Post-op topical:
            <ul>
              <li>Tobramycin / Neomycin / Polymyxin B drops or ointment q6-8h × 7 d</li>
              <li>Or Triple antibiotic ophthalmic ointment</li>
              <li>Combination antibiotic + steroid (e.g., NeoPolyDex):
                <ul>
                  <li>Helpful for inflammation post-op</li>
                  <li>NOT if corneal ulcer present (steroid contraindicated with ulcer)</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <p><strong>Anti-inflammatory ✨:</strong></p>
        <ul>
          <li>NSAID — start day 1:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 5-7 d</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h × 3-5 d</li>
            </ul>
          </li>
          <li>Topical: NeoPolyDex with steroid component if no ulcer present</li>
        </ul>
        <p><strong>Tear stimulants (if KCS develops or pre-op KCS):</strong></p>
        <ul>
          <li><strong>Cyclosporine 0.2% ophthalmic ointment ✨</strong> — gold standard:
            <ul>
              <li>q12h to affected eye lifelong if KCS</li>
              <li>Most dogs respond within 4-8 weeks</li>
              <li>Doubles tear production typically</li>
            </ul>
          </li>
          <li>Tacrolimus 0.02% ophthalmic q12h — alternative if cyclosporine ineffective</li>
          <li>Artificial tears q4-6h symptomatic (Genteal, Refresh)</li>
          <li>Pilocarpine: rarely used (parasympathomimetic — works in some neurogenic KCS)</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3):</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Discharge same day usually</li>
          <li>E-collar — STRICT × 14 d ✗ (rubbing/scratching = #1 cause of dehiscence)</li>
          <li>Topical antibiotic q6-8h × 7-14 d</li>
          <li>Oral NSAID × 5-7 d</li>
          <li>Cold compress to eye if very swollen (gentle)</li>
        </ul>
        <p><strong>Day 1-14:</strong></p>
        <ul>
          <li>Continue topicals as prescribed</li>
          <li>Daily eye check by owner — gland visible? Discharge? Excessive redness?</li>
          <li>Recheck day 7-10:
            <ul>
              <li>Gland position</li>
              <li>Suture status</li>
              <li>Conjunctivitis level</li>
              <li>Schirmer tear test</li>
            </ul>
          </li>
          <li>Restricted activity — no rough play, swimming</li>
        </ul>
        <p><strong>Day 14+:</strong></p>
        <ul>
          <li>If healing well: discontinue topical antibiotics, e-collar may be removed</li>
          <li>Continue Schirmer monitoring at recheck visits</li>
          <li>If KCS develops: start cyclosporine ointment</li>
          <li>Long-term:
            <ul>
              <li>Periodic Schirmer testing in predisposed breeds (annual in Bulldog)</li>
              <li>Watch for contralateral cherry eye (40-50% develop)</li>
              <li>Address other concurrent ocular issues (entropion, etc.)</li>
            </ul>
          </li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Recurrence (gland re-prolapse) ✗</strong>:
            <ul>
              <li>Morgan pocket: 5-15% recurrence rate</li>
              <li>Anchoring suture: 15-25% recurrence rate</li>
              <li>Risk factors: chronic prolapse pre-op, large gland, surgeon experience, suture failure</li>
              <li>Tx: revision surgery (combined technique often used)</li>
            </ul>
          </li>
          <li><strong>KCS (dry eye) ✗</strong>:
            <ul>
              <li>5-15% develop KCS later in life regardless of technique</li>
              <li>Higher rate if gland excised (DON'T excise)</li>
              <li>Higher rate if pre-op tear production borderline</li>
              <li>Tx: lifelong cyclosporine 0.2% ointment, artificial tears</li>
            </ul>
          </li>
          <li><strong>Suture irritation / corneal abrasion:</strong>
            <ul>
              <li>From exposed sutures rubbing cornea</li>
              <li>Tx: remove offending sutures</li>
              <li>Prevention: bury knots</li>
            </ul>
          </li>
          <li>Conjunctivitis (postop inflammation, usually self-limiting)</li>
          <li>Wound dehiscence</li>
          <li>Pyogenic granuloma at surgical site (rare)</li>
          <li>Distortion of 3rd eyelid (excessive imbrication)</li>
          <li>Persistent gland exposure if pocket too small / inadequate technique</li>
          <li>Bilateral disease — 40-50% develop on other eye within months to years (counsel)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Morgan pocket technique ✓:</strong>
            <ul>
              <li>Successful gland reduction: 85-95%</li>
              <li>Recurrence: 5-15%</li>
              <li>KCS development: 5-10% (lower than excision)</li>
              <li>Cosmetic outcome: excellent</li>
            </ul>
          </li>
          <li><strong>Anchoring suture technique:</strong>
            <ul>
              <li>Success: 75-85%</li>
              <li>Recurrence: 15-25%</li>
              <li>Some surgeons reserve for cases where pocket fails</li>
            </ul>
          </li>
          <li><strong>Compared to excision (HISTORIC):</strong>
            <ul>
              <li>Excision: KCS rate 30-50% (DON'T DO THIS)</li>
              <li>Replacement: KCS rate 5-15%</li>
              <li>Replacement is standard of care ✨</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>40-50% develop contralateral cherry eye</li>
              <li>Lifelong KCS surveillance in predisposed breeds</li>
              <li>QOL excellent post-correction</li>
              <li>Some need long-term cyclosporine prophylactically (controversial)</li>
            </ul>
          </li>
          <li><strong>Specific breeds:</strong>
            <ul>
              <li>English Bulldog: highest recurrence + KCS rate, multiple revisions sometimes needed</li>
              <li>Cavalier KCS: high KCS development (breed has primary KCS predisposition)</li>
              <li>Beagle: usually excellent outcome</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>NEVER excise nictitans gland</strong> ✗ — produces 30-40% of tear film. Excision = lifelong KCS<br><br>**Morgan pocket = gold standard ✨** — buries gland, preserves function, 85-95% success<br><br>⚠️ **40-50% bilateral within months** — counsel owner about future surgery on other eye<br><br>✗ **Bulldog = highest recurrence rate** — multiple revisions sometimes needed, owner expectations management</div>
      `,
    },
  },

  /* ============================================================
     HEAD-NECK — Entropion / Ectropion
  ============================================================ */
  {
    id: 'entropion-ectropion',
    titleEn: 'Entropion / Ectropion Correction',
    titleTh: 'ผ่าตัดแก้หนังตาม้วนเข้า/ม้วนออก',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'head-neck',
    tags: ['entropion', 'ectropion', 'Hotz-Celsus', 'Y-V plasty', 'modified Hotz-Celsus', 'eyelid', 'corneal ulcer', 'epiphora', 'Shar Pei', 'Bulldog', 'Bloodhound'],
    aliases: ['entropion', 'ectropion', 'eyelid correction', 'หนังตาม้วน', 'แก้หนังตา'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Eyelids',
    sections: {
      indications: `
        <ul>
          <li><strong>Entropion ✗</strong> — eyelid margin rolls inward, hair contacts cornea
            <ul>
              <li>Causes corneal irritation, ulceration, scarring, pigmentation</li>
              <li>Predisposed breeds: Shar Pei (severe), Chow Chow, Bulldog, Mastiff, Cocker, Lab, Golden, Rottweiler, Persian cat</li>
              <li>Types:
                <ul>
                  <li><strong>Primary (anatomic / hereditary):</strong> breed-related, juvenile or adult onset</li>
                  <li><strong>Secondary (spastic):</strong> from chronic ocular irritation (entropion-spasm-entropion cycle)</li>
                  <li><strong>Cicatricial:</strong> from prior trauma, surgery, scarring</li>
                  <li><strong>Senile:</strong> elderly dogs, loss of skin/orbicularis tone</li>
                </ul>
              </li>
              <li>Surgical correction once confirmed primary (puppies under 6 mo: temporary tacking, hold off on permanent until growth complete)</li>
            </ul>
          </li>
          <li><strong>Ectropion ✗</strong> — eyelid margin rolls outward, exposes conjunctiva
            <ul>
              <li>Causes chronic conjunctivitis, exposure keratitis, epiphora</li>
              <li>Predisposed breeds: Bloodhound, Saint Bernard, Mastiff, Newfoundland, some Cockers</li>
              <li>Often combined with entropion ("diamond eye" appearance — central entropion + lateral/medial ectropion in macroblepharon)</li>
              <li>Surgical correction when symptomatic (chronic discharge, repeated infection)</li>
            </ul>
          </li>
          <li><strong>Combined entropion-ectropion (macroblepharon / "diamond eye"):</strong>
            <ul>
              <li>Excessively long palpebral fissure</li>
              <li>Saint Bernard, Mastiff, Bloodhound</li>
              <li>Requires lateral canthoplasty (shorten palpebral fissure)</li>
            </ul>
          </li>
          <li><strong>Indications for surgery ✨:</strong>
            <ul>
              <li>Clinical signs:
                <ul>
                  <li>Recurrent corneal ulceration</li>
                  <li>Chronic epiphora / discharge</li>
                  <li>Conjunctival hyperemia</li>
                  <li>Corneal scarring, pigmentation</li>
                  <li>Visible discomfort (squinting, rubbing)</li>
                </ul>
              </li>
              <li>Severity (mild → conservative; moderate-severe → surgery)</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Asymptomatic mild cases (no clinical signs, just anatomic finding) — observe</li>
          <li>Puppies &lt; 6 mo for permanent correction (use temporary tacking sutures)</li>
          <li>Active corneal ulcer — treat ulcer first, then surgery (or do simultaneously)</li>
          <li>Untreated KCS — must treat first (KCS often complicates picture)</li>
          <li>Severe systemic illness</li>
          <li>Post-surgical dry eye condition — multiple surgical revisions can produce this</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Ophthalmologic exam ✨:</strong></p>
        <ul>
          <li><strong>Schirmer Tear Test (STT) ✨</strong> — rule out KCS
            <ul>
              <li>If KCS present: treat first (cyclosporine 0.2% q12h × 4-6 weeks)</li>
              <li>Surgery on dry eye = increased corneal damage</li>
            </ul>
          </li>
          <li>Fluorescein stain — corneal ulcer assessment
            <ul>
              <li>Positive: heal ulcer first or simultaneously</li>
              <li>Document baseline</li>
            </ul>
          </li>
          <li>Slit lamp / direct exam — corneal scarring, pigmentation</li>
          <li>Tonometry (rule out glaucoma)</li>
          <li>Indirect ophthalmoscopy (fundus)</li>
          <li>Examine BOTH eyes</li>
        </ul>
        <p><strong>2. Determine type + severity ✨:</strong></p>
        <ul>
          <li>Type: primary, secondary, cicatricial, senile</li>
          <li>If secondary (spastic from corneal ulcer): try topical anesthetic to confirm
            <ul>
              <li>Drop proparacaine</li>
              <li>If entropion resolves with anesthesia → spastic — treat underlying first</li>
              <li>If persists → primary anatomic — surgery indicated</li>
            </ul>
          </li>
          <li>Determine areas of inversion: medial, central, lateral, all</li>
          <li>Mark planned correction site under sedation:
            <ul>
              <li>Manually evert eyelid to natural position</li>
              <li>Estimate amount of skin to remove</li>
              <li>Don't overcorrect (ectropion is harder to fix than entropion)</li>
            </ul>
          </li>
        </ul>
        <p><strong>3. Concurrent issues:</strong></p>
        <ul>
          <li>Ectopic cilia, distichiasis (often coexist with entropion)</li>
          <li>Cherry eye (often in Bulldog, Mastiff)</li>
          <li>Lagophthalmos / exophthalmos contributing to exposure</li>
          <li>Address all in single surgery if possible</li>
        </ul>
        <p><strong>4. Pre-op preparation:</strong></p>
        <ul>
          <li>Standard pre-anesthesia workup</li>
          <li>Coagulation if breed-related concern</li>
          <li>Pre-medication: methadone + maropitant</li>
          <li>Eye prep: dilute betadine 1:50</li>
        </ul>
      `,
      technique: `
        <p><strong>A. Hotz-Celsus Procedure (Standard Entropion Correction) ✨</strong></p>
        <ol>
          <li><strong>Plan incision:</strong>
            <ul>
              <li>Mark elliptical area of skin to remove parallel to eyelid margin</li>
              <li>Distance from lid margin: 2-4 mm (conservative — don't cut too close to margin)</li>
              <li>Width: estimate amount needed to evert margin — 3-8 mm depending on severity ✨</li>
              <li>Length: extend along entire affected portion of lid (medial, central, lateral, or full)</li>
              <li>Some surgeons mark with surgical pen</li>
            </ul>
          </li>
          <li><strong>Skin incision:</strong>
            <ul>
              <li>Use #15 blade</li>
              <li>Incise skin only (avoid orbicularis muscle initially)</li>
              <li>Excise marked elliptical skin segment</li>
            </ul>
          </li>
          <li><strong>Orbicularis muscle (controversial — included or not):</strong>
            <ul>
              <li>Some surgeons remove a thin strip of muscle for added correction</li>
              <li>Others leave intact</li>
              <li>Hotz-Celsus original: remove muscle</li>
              <li>Modified Hotz-Celsus: skin only</li>
            </ul>
          </li>
          <li><strong>Closure:</strong>
            <ul>
              <li>Subcutaneous: 4-0 absorbable simple interrupted (Monocryl, PDS)</li>
              <li>Skin: 4-0 or 5-0 nonabsorbable simple interrupted (nylon)</li>
              <li>Tension distributed across length of incision</li>
              <li>Skin tension everts margin to correct position</li>
            </ul>
          </li>
          <li><strong>Confirm correction:</strong>
            <ul>
              <li>Eyelid margin should now be in normal position (just touching globe)</li>
              <li>Don't overcorrect → ectropion</li>
              <li>Slight under-correction acceptable — better than overcorrection</li>
            </ul>
          </li>
        </ol>
        <p><strong>B. Modified Hotz-Celsus Procedure</strong></p>
        <ul>
          <li>Variations on incision shape:
            <ul>
              <li>Curved (arcuate) incision</li>
              <li>Triangular wedge (for medial / lateral specific)</li>
              <li>Straight elliptical</li>
            </ul>
          </li>
          <li>Choose based on area of inversion + amount needed</li>
        </ul>
        <p><strong>C. Lateral Canthoplasty (for "diamond eye" / macroblepharon):</strong></p>
        <ul>
          <li>Shorten palpebral fissure</li>
          <li>Excise wedge of lateral canthus tissue</li>
          <li>Reconstruct lateral canthus with sutures</li>
          <li>Reduces lid length, improves lid-globe apposition</li>
          <li>Often combined with Hotz-Celsus</li>
        </ul>
        <p><strong>D. Ectropion Correction (V-Y plasty or Kuhnt-Szymanowski):</strong></p>
        <ol>
          <li>Several techniques depending on severity:</li>
          <li><strong>V-Y plasty (mild ectropion):</strong>
            <ul>
              <li>V-shaped incision below affected eyelid</li>
              <li>Advance tissue, close as Y</li>
              <li>Tightens lid, reduces ectropion</li>
            </ul>
          </li>
          <li><strong>Kuhnt-Szymanowski (severe ectropion):</strong>
            <ul>
              <li>Wedge resection of full-thickness eyelid (margin + tissue)</li>
              <li>Anatomic closure 3-layer</li>
              <li>Effectively shortens lid</li>
            </ul>
          </li>
          <li><strong>Lateral canthus tightening:</strong>
            <ul>
              <li>Suture lateral canthus to periosteum / fascia</li>
              <li>Tightens entire lower lid</li>
            </ul>
          </li>
        </ol>
        <p><strong>E. Severe Shar Pei entropion (special considerations) ✨:</strong></p>
        <ul>
          <li>Multiple skin folds + severe entropion</li>
          <li>Brow ptosis contributes (may need brow elevation procedure)</li>
          <li>Multiple staged surgeries common</li>
          <li>Advanced cases: refer to ophthalmologist</li>
        </ul>
        <p><strong>F. Temporary tacking (puppies / spastic entropion):</strong></p>
        <ol>
          <li>Place 1-3 mattress sutures (3-0 nylon) through skin to evert margin</li>
          <li>Don't penetrate conjunctiva (would touch cornea)</li>
          <li>Leave in place 2-4 weeks</li>
          <li>Remove once growth complete or spasm resolved</li>
          <li>Plan permanent correction after maturity if needed</li>
        </ol>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>"Slight undercorrection > overcorrection" — eyelid stretches with healing</li>
          <li>Never sutures through palpebral conjunctiva (would abrade cornea)</li>
          <li>Treat KCS, ulcer, cherry eye, distichiasis concurrently</li>
          <li>Bilateral disease: do both at same surgery</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.2 mg/kg IM/IV</li>
          <li>± Acepromazine 0.01-0.03 mg/kg IM (caution Bulldog, Mastiff)</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Local anesthesia (helpful adjunct ✨):</strong></p>
        <ul>
          <li>Auriculopalpebral nerve block: lidocaine 2% — 0.5-1 mL at zygomatic arch (paralyzes orbicularis, helps surgical exposure)</li>
          <li>Local infiltration around eyelid: lidocaine + epinephrine for hemostasis (small volume)</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Light plane sufficient with local block</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Pre-op:
            <ul>
              <li>Cefazolin 22 mg/kg IV at induction (some skip for short routine cases)</li>
            </ul>
          </li>
          <li>Post-op topical:
            <ul>
              <li>Tobramycin / Triple antibiotic ophthalmic ointment q6-8h × 7 d</li>
              <li>NeoPolyDex (with steroid) if no corneal ulcer</li>
              <li>If corneal ulcer present: antibiotic only (no steroid)</li>
            </ul>
          </li>
          <li>Post-op systemic:
            <ul>
              <li>Cephalexin 22 mg/kg PO q12h × 5-7 d if extensive surgery</li>
              <li>Many surgeons skip systemic for routine eyelid correction</li>
            </ul>
          </li>
        </ul>
        <p><strong>Anti-inflammatory:</strong></p>
        <ul>
          <li>NSAID:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 5-7 d</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h × 3-5 d</li>
            </ul>
          </li>
        </ul>
        <p><strong>Tear management (if KCS):</strong></p>
        <ul>
          <li>Cyclosporine 0.2% ophthalmic q12h (lifelong if KCS confirmed)</li>
          <li>Artificial tears q4-6h symptomatic</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3):</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Discharge same day usually</li>
          <li><strong>E-collar — STRICT × 14-21 d ✗</strong> (rubbing = #1 cause of dehiscence)</li>
          <li>Topical antibiotic / antibiotic-steroid ointment q6-8h</li>
          <li>Oral NSAID</li>
          <li>Cold compress to eyelid (gentle, 5-10 min q4-6h × 24-48 h)</li>
        </ul>
        <p><strong>Day 1-14:</strong></p>
        <ul>
          <li>Continue topicals</li>
          <li>Daily eye check by owner — swelling, discharge, suture status</li>
          <li>Restricted activity — no rough play, swimming, dust</li>
          <li>Recheck day 7-10 — wound check, ulcer healing if present pre-op</li>
          <li>Suture removal day 10-14</li>
        </ul>
        <p><strong>Day 14+:</strong></p>
        <ul>
          <li>If healing well: discontinue topicals after suture removal</li>
          <li>Allow gradual return to normal activity</li>
          <li>Monitor for under-correction (residual entropion) or over-correction (ectropion)</li>
          <li>If under-correction: secondary surgery in 6-8 weeks once healed</li>
          <li>Long-term:
            <ul>
              <li>Monitor breed-related comorbidities (KCS, distichiasis)</li>
              <li>Some breeds (Shar Pei) need multiple revisions over life</li>
            </ul>
          </li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Under-correction ✗</strong>:
            <ul>
              <li>Residual entropion after surgery</li>
              <li>Causes: insufficient skin removal, breed predisposition, underestimation</li>
              <li>Tx: revision surgery (after 6-8 week wait for healing)</li>
              <li>Better than overcorrection</li>
            </ul>
          </li>
          <li><strong>Over-correction (iatrogenic ectropion) ✗</strong>:
            <ul>
              <li>Excessive skin removal → eyelid pulled down/away from globe</li>
              <li>Exposure keratitis, epiphora</li>
              <li>Tx: V-Y plasty or skin graft (more challenging revision)</li>
            </ul>
          </li>
          <li><strong>Persistent corneal ulcer:</strong>
            <ul>
              <li>If present pre-op + entropion not fully corrected</li>
              <li>Tx: continue topical Tx, may need additional surgery</li>
            </ul>
          </li>
          <li><strong>Wound dehiscence:</strong>
            <ul>
              <li>From rubbing, scratching, e-collar failure</li>
              <li>Tx: re-suture if early, or allow 2nd intention healing if minor</li>
            </ul>
          </li>
          <li>Surgical site infection (uncommon — eyelid is well-vascularized)</li>
          <li>Eyelid scar — usually cosmetic only</li>
          <li>Trichiasis (eyelash misdirection from scarring)</li>
          <li>KCS development or worsening</li>
          <li>Distichiasis exposed (wasn't visible with entropion)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Hotz-Celsus for primary entropion ✓:</strong>
            <ul>
              <li>Resolution of clinical signs: 90-95%</li>
              <li>Corneal ulcers heal within 2-4 weeks post-correction</li>
              <li>Cosmetic outcome excellent</li>
              <li>Single procedure usually curative</li>
            </ul>
          </li>
          <li><strong>Severe Shar Pei entropion:</strong>
            <ul>
              <li>Often need 2-3 staged procedures over life</li>
              <li>Outcome 70-85% adequate function</li>
              <li>Advanced cases: ophthalmologist referral</li>
            </ul>
          </li>
          <li><strong>Combined entropion-ectropion (Bloodhound, Mastiff):</strong>
            <ul>
              <li>Lateral canthoplasty + Hotz-Celsus combination</li>
              <li>80-90% adequate correction</li>
              <li>Often residual mild signs</li>
            </ul>
          </li>
          <li><strong>Cicatricial entropion (post-trauma):</strong>
            <ul>
              <li>More challenging — may need skin grafting / advanced reconstruction</li>
              <li>Outcomes vary based on extent of scarring</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>Some cases (Shar Pei, severe Bulldog) need lifelong management</li>
              <li>Address concurrent ocular issues (KCS, distichiasis, brow ptosis)</li>
              <li>Bilateral disease — both eyes typically</li>
              <li>QOL significantly improved post-correction</li>
            </ul>
          </li>
          <li><strong>Recurrence:</strong>
            <ul>
              <li>Primary entropion in adult: low recurrence (5-10%)</li>
              <li>Severe Shar Pei: moderate recurrence — multiple revisions common</li>
              <li>Spastic entropion: depends on resolution of underlying cause</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Hotz-Celsus = standard procedure</strong> ✓ — simple, effective, low complication rate for most cases<br><br>**Slight under-correction &gt; overcorrection** ✨ — iatrogenic ectropion harder to fix than residual entropion<br><br>⚠️ **Schirmer + fluorescein BEFORE surgery** — KCS = treat first, ulcer = simultaneous Tx<br><br>✗ **Severe Shar Pei = referral consideration** — multiple staged surgeries, advanced techniques, brow ptosis component</div>
      `,
    },
  },

  /* ============================================================
     ONCOLOGIC — Mandibulectomy / Maxillectomy
  ============================================================ */
  {
    id: 'mandibulectomy-maxillectomy',
    titleEn: 'Mandibulectomy / Maxillectomy',
    titleTh: 'ผ่าตัดตัดขากรรไกร (ล่าง / บน)',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'oncologic',
    tags: ['mandibulectomy', 'maxillectomy', 'oral neoplasia', 'malignant melanoma', 'squamous cell carcinoma', 'fibrosarcoma', 'acanthomatous ameloblastoma', 'rostral mandibulectomy', 'segmental mandibulectomy', 'hemimandibulectomy', 'caudal maxillectomy'],
    aliases: ['mandibulectomy', 'maxillectomy', 'jaw resection', 'ตัดขากรรไกร', 'ผ่าตัดมะเร็งช่องปาก'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Oral Surgery',
    sections: {
      indications: `
        <ul>
          <li><strong>Oral neoplasia ✗</strong> — primary indication
            <ul>
              <li><strong>Malignant melanoma</strong> (MM) — most common malignant oral tumor in dogs:
                <ul>
                  <li>High metastatic rate (70-90% at presentation in caudal locations)</li>
                  <li>Local control with surgery, often combined with melanoma vaccine + RT</li>
                </ul>
              </li>
              <li><strong>Squamous cell carcinoma (SCC):</strong>
                <ul>
                  <li>Rostral non-tonsillar: better prognosis</li>
                  <li>Tonsillar: aggressive, poor prognosis</li>
                  <li>Cat oral SCC: aggressive, locally invasive, often present too advanced for surgery</li>
                </ul>
              </li>
              <li><strong>Fibrosarcoma:</strong>
                <ul>
                  <li>Locally aggressive, low-moderate met rate</li>
                  <li>"High-low" fibrosarcoma in Golden Retrievers — histologically benign but biologically malignant ✗</li>
                </ul>
              </li>
              <li><strong>Acanthomatous ameloblastoma (canine acanthomatous epulis):</strong>
                <ul>
                  <li>Locally invasive, NO metastasis</li>
                  <li>CURED by complete surgical resection ✓</li>
                  <li>Excellent prognosis</li>
                </ul>
              </li>
              <li>Osteosarcoma of maxilla / mandible</li>
              <li>Multilobular tumor of bone (occasionally extends to jaw)</li>
              <li>Other: peripheral odontogenic fibroma, osteoma, plasmacytoma, lymphoma (uncommon for surgery)</li>
            </ul>
          </li>
          <li><strong>Severe trauma:</strong>
            <ul>
              <li>Devastating jaw fractures unable to be reconstructed</li>
              <li>Necrotic tissue from severe injury</li>
            </ul>
          </li>
          <li><strong>Severe periodontal disease (rare):</strong>
            <ul>
              <li>Pathologic fracture from severe disease</li>
              <li>Unable to manage medically</li>
            </ul>
          </li>
          <li><strong>Osteomyelitis non-responsive to medical Tx</strong> (rare)</li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Disseminated metastatic disease where surgery doesn't extend life (palliative consideration)</li>
          <li>Severe systemic illness preventing safe anesthesia</li>
          <li>Owner unable to provide intensive post-op care (feeding tube, restricted activity, multiple recheck visits)</li>
          <li>Cat with extensive oral SCC — often presents too advanced for cure (palliative considerations)</li>
          <li>Coagulopathy</li>
          <li>Untreated dental disease (treat first if extensive)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Diagnostic workup ✨ — DON'T operate without diagnosis:</strong></p>
        <ul>
          <li><strong>Biopsy FIRST ✨:</strong>
            <ul>
              <li>Incisional biopsy under anesthesia</li>
              <li>FNA cytology if accessible (often non-diagnostic for oral tumors)</li>
              <li>Histopathology dictates extent of surgery + adjuvant Tx</li>
              <li>NEVER do "diagnostic + therapeutic" excision without prior biopsy for oral tumors</li>
            </ul>
          </li>
          <li><strong>Staging:</strong>
            <ul>
              <li>3-view thoracic radiographs (mets to lungs)</li>
              <li>Regional lymph node assessment ✨:
                <ul>
                  <li>Mandibular lymph nodes (palpate, FNA)</li>
                  <li>Retropharyngeal LN (often need US or CT — not palpable)</li>
                  <li>Sentinel LN concept — sublumbar LN if pelvic involvement</li>
                </ul>
              </li>
              <li>FNA mandibular LN even if normal-sized (occult mets common)</li>
              <li><strong>CT of head + neck (gold standard) ✨</strong>:
                <ul>
                  <li>Tumor extent</li>
                  <li>Bone invasion</li>
                  <li>Surgical planning</li>
                  <li>Local lymph node assessment</li>
                </ul>
              </li>
              <li>Skull radiographs if no CT available</li>
              <li>Abdominal US if breed/age indicates</li>
            </ul>
          </li>
          <li><strong>Workup:</strong>
            <ul>
              <li>CBC, biochem, UA</li>
              <li>Coag panel</li>
              <li>Type / crossmatch (oral surgery can have significant bleeding)</li>
            </ul>
          </li>
        </ul>
        <p><strong>2. Surgical planning ✨:</strong></p>
        <ul>
          <li>Margin requirements:
            <ul>
              <li>Malignant: 1-2 cm grossly normal margin all around tumor</li>
              <li>Acanthomatous ameloblastoma: 1 cm margin (but bone invasive — extend to bone)</li>
              <li>Always include affected bone + adjacent structures</li>
            </ul>
          </li>
          <li>Plan extent based on location:
            <ul>
              <li>Rostral mandible (incisors): rostral mandibulectomy</li>
              <li>Mandibular body: segmental mandibulectomy</li>
              <li>Caudal mandible: caudal hemimandibulectomy</li>
              <li>Rostral maxilla: rostral maxillectomy</li>
              <li>Maxillary body: segmental / hemi-maxillectomy</li>
              <li>Caudal maxilla: caudal maxillectomy (more complex, near orbit)</li>
            </ul>
          </li>
          <li>Reconstruction plan:
            <ul>
              <li>Mucosal closure (most cases)</li>
              <li>Local advancement flaps</li>
              <li>Distant flap (rare)</li>
            </ul>
          </li>
          <li>Discuss adjuvant Tx with oncologist:
            <ul>
              <li>Melanoma: vaccine + RT</li>
              <li>SCC: piroxicam, RT</li>
              <li>Fibrosarcoma: RT</li>
              <li>Acanthomatous ameloblastoma: surgery alone often curative</li>
            </ul>
          </li>
        </ul>
        <p><strong>3. Counsel owner ✨ (extensive — major surgery + change in appearance):</strong></p>
        <ul>
          <li>Cosmetic appearance changes:
            <ul>
              <li>Mandibulectomy: tongue may protrude, mandibular drift</li>
              <li>Maxillectomy: lip may droop, may have nasal opening</li>
              <li>Most patients accommodate well within weeks</li>
            </ul>
          </li>
          <li>Functional changes:
            <ul>
              <li>Most dogs eat normally within 1-2 weeks</li>
              <li>May need feeding tube initially</li>
              <li>Drooling common initially</li>
            </ul>
          </li>
          <li>Tumor-specific prognosis</li>
          <li>Adjuvant Tx options + costs</li>
          <li>Recurrence risk</li>
        </ul>
        <p><strong>4. Pre-op preparation:</strong></p>
        <ul>
          <li>Pre-emptive analgesia: methadone + maropitant + dexmedetomidine</li>
          <li>Antibiotics: Cefazolin 22 mg/kg IV + Metronidazole 15 mg/kg IV (oral surgery = anaerobic + aerobic mixed)</li>
          <li>Or Amoxicillin-clavulanate IV alternative</li>
          <li>Surgical scrub: dilute betadine for oral cavity</li>
          <li>Position: dorsal recumbency for mandibulectomy (hanging mandible up); various for maxillectomy</li>
          <li>Esophagostomy tube placement at time of surgery (helpful for post-op feeding) ✨</li>
        </ul>
      `,
      technique: `
        <p><strong>Mandibulectomy types ✨:</strong></p>
        <ol>
          <li><strong>Rostral mandibulectomy</strong> (bilateral or unilateral) — for rostral mandibular lesions:
            <ul>
              <li>Includes incisors + canines bilaterally</li>
              <li>Cut ahead of premolars / at canine area</li>
              <li>Tongue accommodates, slight protrusion expected</li>
            </ul>
          </li>
          <li><strong>Segmental mandibulectomy</strong> — central mandibular body lesions:
            <ul>
              <li>Removes affected segment, leaving rostral + caudal mandible</li>
              <li>Mandibular drift common (mid-mandible cantilevered)</li>
              <li>Often well-tolerated</li>
            </ul>
          </li>
          <li><strong>Caudal mandibulectomy / hemimandibulectomy:</strong>
            <ul>
              <li>Removes mandibular body + ramus on one side</li>
              <li>Most affected jaw alignment + drift</li>
              <li>Most dogs adapt within weeks</li>
            </ul>
          </li>
        </ol>
        <p><strong>Maxillectomy types:</strong></p>
        <ol>
          <li><strong>Rostral maxillectomy:</strong>
            <ul>
              <li>Removes rostral upper jaw (incisor area)</li>
              <li>May create oronasal fistula — needs careful closure</li>
            </ul>
          </li>
          <li><strong>Lateral / segmental maxillectomy:</strong>
            <ul>
              <li>Mid-portion of upper jaw</li>
              <li>Closure usually feasible with mucosal advancement</li>
            </ul>
          </li>
          <li><strong>Caudal maxillectomy:</strong>
            <ul>
              <li>Most challenging — near orbit, nasal cavity, palatine vessels</li>
              <li>Risk of orbit damage, severe hemorrhage</li>
              <li>Often requires advanced flap reconstruction</li>
            </ul>
          </li>
        </ol>
        <p><strong>General surgical sequence (standard mandibulectomy):</strong></p>
        <ol>
          <li>Mark incision: 1-2 cm beyond visible / palpable tumor extent ✨</li>
          <li>Mucosal incision: incise oral mucosa around tumor with planned margins</li>
          <li>Skin incision (for complete mandibulectomy): from oral mucosa through skin (lip-splitting in some cases)</li>
          <li>Identify + ligate large vessels:
            <ul>
              <li>Inferior alveolar artery (within mandibular canal)</li>
              <li>Mental artery branches</li>
              <li>Facial artery branches (if external approach)</li>
              <li>Use vessel sealing devices (LigaSure, Harmonic) for efficiency</li>
            </ul>
          </li>
          <li>Bone osteotomy:
            <ul>
              <li>Use power saw (oscillating saw, sagittal saw) or osteotome + mallet</li>
              <li>Cut bone perpendicular to long axis</li>
              <li>Lavage during cutting (heat dissipation)</li>
              <li>Avoid contralateral mandible if unilateral cut</li>
            </ul>
          </li>
          <li>Complete soft tissue dissection:
            <ul>
              <li>Free affected segment from tongue, floor of mouth attachments</li>
              <li>Identify + protect lingual nerve (rostral floor) — preservation ideal</li>
              <li>Remove specimen + submit for histopath with margins ink-marked</li>
            </ul>
          </li>
          <li>Hemostasis — meticulous (oral cavity bleeds extensively)</li>
          <li>Closure ✨:
            <ul>
              <li><strong>Mucosa-to-mucosa primary closure (preferred):</strong>
                <ul>
                  <li>Simple interrupted with 3-0 or 4-0 PDS or Monocryl absorbable</li>
                  <li>Tension-free closure</li>
                  <li>Multiple layers (deep + mucosa)</li>
                </ul>
              </li>
              <li><strong>Local mucosal flaps if defect too large:</strong>
                <ul>
                  <li>Buccal mucosa flap, palatal flap (for maxillectomy)</li>
                  <li>Advancement, rotation, transposition</li>
                </ul>
              </li>
              <li><strong>Distant flap (rare):</strong>
                <ul>
                  <li>Caudal auricular flap, angularis oris flap</li>
                  <li>For massive defects</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Place esophagostomy / NG tube for nutrition (recommended in extensive surgery) ✨</li>
        </ol>
        <p><strong>Maxillectomy specifics:</strong></p>
        <ul>
          <li>Communication with nasal cavity expected — must be closed</li>
          <li>Palatal flap reconstruction common</li>
          <li>Caudal maxillectomy: respect orbital floor, optic nerve area</li>
          <li>Hemorrhage from major palatine artery — must identify + ligate</li>
        </ul>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>Adequate margins (1-2 cm) more important than cosmetic conservation</li>
          <li>Tension-free closure essential — dehiscence = oronasal fistula</li>
          <li>Hemostasis meticulous — oral surgery has high blood loss potential</li>
          <li>Submit specimen with orientation + ink margins for accurate pathology</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.3-0.5 mg/kg IM/IV (full mu agonist for major surgery) ✨</li>
          <li>± Acepromazine 0.01-0.03 mg/kg IM</li>
          <li>Or Dexmedetomidine 3-5 mcg/kg IM + opioid</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Loco-regional analgesia (HIGHLY recommended) ✨:</strong></p>
        <ul>
          <li><strong>Maxillary nerve block (for maxillectomy):</strong>
            <ul>
              <li>Bupivacaine 0.5% — 0.5-1 mL into infraorbital canal</li>
              <li>Provides excellent analgesia for upper jaw</li>
            </ul>
          </li>
          <li><strong>Mandibular / inferior alveolar nerve block (for mandibulectomy):</strong>
            <ul>
              <li>Bupivacaine 0.5% — 0.5-1 mL at mandibular foramen</li>
              <li>Mental nerve block: at mental foramen for rostral mandibulectomy</li>
            </ul>
          </li>
          <li>12-18 h analgesia ✓</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV titrated</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 5-15 mcg/kg/h ✓</li>
          <li>Lidocaine CRI 30-50 mcg/kg/min</li>
          <li>± Ketamine CRI 0.6 mg/kg/h</li>
          <li>± Dexmedetomidine CRI 0.5-2 mcg/kg/h</li>
        </ul>
        <p><strong>Antibiotics ✨ (oral cavity = highly contaminated):</strong></p>
        <ul>
          <li>Pre-op:
            <ul>
              <li>Cefazolin 22 mg/kg IV + Metronidazole 15 mg/kg IV (cover anaerobes ✨)</li>
              <li>Or Amoxicillin-clavulanate 22 mg/kg IV (covers anaerobes)</li>
              <li>Repeat q90 min during surgery</li>
            </ul>
          </li>
          <li>Post-op:
            <ul>
              <li>Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 7-10 d</li>
              <li>Or Cephalexin + Metronidazole PO if amoxiclav unavailable</li>
              <li>Cat: clindamycin 5.5-11 mg/kg PO q12h × 7-10 d</li>
            </ul>
          </li>
        </ul>
        <p><strong>Analgesia post-op (intensive multimodal ✨):</strong></p>
        <ul>
          <li>Continue fentanyl CRI 12-24 h post-op</li>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24-48 h</li>
          <li>Then Buprenorphine 0.02 mg/kg q8h × 3-5 d</li>
          <li><strong>NSAID — start day 1, continue × 7-14 d:</strong>
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h</li>
              <li>Cat: robenacoxib 1-2 mg/kg PO/SC q24h × 3-6 d</li>
            </ul>
          </li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 14-21 d ✨</li>
          <li>± Tramadol adjunct</li>
          <li>± Amantadine 3-5 mg/kg PO q12-24h (chronic / neuropathic pain adjunct)</li>
        </ul>
        <p><strong>Anti-emetic + GI:</strong></p>
        <ul>
          <li>Maropitant 1 mg/kg SC q24h × 5-7 d</li>
          <li>Omeprazole 1 mg/kg PO q24h × 7-14 d</li>
        </ul>
        <p><strong>Adjuvant therapy (oncologist):</strong></p>
        <ul>
          <li><strong>Melanoma:</strong>
            <ul>
              <li>Oncept melanoma vaccine (xenogeneic DNA)</li>
              <li>RT to surgical bed</li>
              <li>Carboplatin if metastatic</li>
            </ul>
          </li>
          <li><strong>SCC:</strong>
            <ul>
              <li>Piroxicam 0.3 mg/kg PO q24h (NSAID with anti-tumor effects)</li>
              <li>RT to surgical bed</li>
              <li>Carboplatin / mitoxantrone</li>
            </ul>
          </li>
          <li><strong>Fibrosarcoma:</strong>
            <ul>
              <li>RT to surgical bed</li>
              <li>± doxorubicin / carboplatin</li>
            </ul>
          </li>
          <li><strong>Acanthomatous ameloblastoma:</strong>
            <ul>
              <li>Surgery alone usually curative</li>
              <li>RT if margins inadequate</li>
            </ul>
          </li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3) — ICU monitoring:</strong></p>
        <ul>
          <li>Recovery monitoring (vitals, BP, hemorrhage)</li>
          <li>Continuous fluids</li>
          <li>Pain control multimodal as above</li>
          <li>NPO × 12-24 h post-op</li>
          <li>Then small water through esophagostomy tube if placed</li>
          <li>Monitor for: bleeding, swelling, dyspnea (oral swelling can compromise airway)</li>
          <li>Watch for facial swelling — manage with cold compresses + dexamethasone</li>
        </ul>
        <p><strong>Day 1-5:</strong></p>
        <ul>
          <li><strong>Esophagostomy tube feeding ✨</strong>:
            <ul>
              <li>Day 1: 1/3 RER (resting energy requirement) divided q4-6h</li>
              <li>Day 2: 2/3 RER</li>
              <li>Day 3+: full RER</li>
              <li>Use liquid critical care diet (Hill's a/d, Royal Canin recovery, Clinicare)</li>
            </ul>
          </li>
          <li>Encourage oral water intake when comfortable (small amounts)</li>
          <li>Continue antibiotics, NSAID, opioid</li>
          <li>Daily wound check (oral cavity exam carefully)</li>
          <li>E-collar 100%</li>
          <li>Watch for dehiscence (most common day 3-7) ✗</li>
        </ul>
        <p><strong>Day 5-14:</strong></p>
        <ul>
          <li>Discharge typically day 3-7 once stable + eating through tube</li>
          <li>Begin transition to oral feeding:
            <ul>
              <li>Day 5+: small amounts of softened food orally</li>
              <li>Liquid + slurry diet</li>
              <li>Maintain tube as backup for 2 weeks</li>
              <li>Gradually transition to soft canned food</li>
            </ul>
          </li>
          <li>Recheck day 7-10:
            <ul>
              <li>Wound healing (especially closure sites)</li>
              <li>Eating progress</li>
              <li>Pain assessment</li>
            </ul>
          </li>
          <li>Continue oral antibiotics + NSAID</li>
        </ul>
        <p><strong>Day 14-28:</strong></p>
        <ul>
          <li>Recheck day 14:
            <ul>
              <li>Most patients eating soft food well</li>
              <li>Wound fully closed</li>
              <li>Tube removal if eating well</li>
            </ul>
          </li>
          <li>Histopath review ✨ — discuss with oncologist
            <ul>
              <li>Margins (clean / dirty)</li>
              <li>Mitotic index, grade</li>
              <li>Lymph node status</li>
            </ul>
          </li>
          <li>Plan adjuvant Tx based on tumor + result</li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Recheck schedule based on tumor type:
            <ul>
              <li>Melanoma: q3 mo × 1 yr (high recurrence + met)</li>
              <li>SCC: q3 mo × 1 yr</li>
              <li>Fibrosarcoma: q3-6 mo × 2 yr</li>
              <li>Acanthomatous ameloblastoma: q6 mo × 2 yr (low recurrence)</li>
            </ul>
          </li>
          <li>Recheck thoracic radiographs at each visit (mets surveillance)</li>
          <li>Mandibular drift / cosmetic acceptance</li>
          <li>Most return to normal eating + activity within 4-6 weeks ✓</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Dehiscence ✗</strong> — most common surgical complication:
            <ul>
              <li>Rate: 10-30% (varies by procedure complexity)</li>
              <li>Onset: day 3-7 typically</li>
              <li>Causes: tension on closure, infection, mucosal compromise, licking</li>
              <li>Tx: revision surgery (clean, debride, re-close); some heal by 2nd intention</li>
              <li>Maxillectomy dehiscence → oronasal fistula (especially difficult to repair)</li>
            </ul>
          </li>
          <li><strong>Oronasal fistula (after maxillectomy) ✗</strong>:
            <ul>
              <li>Communication between oral + nasal cavities</li>
              <li>Causes chronic rhinitis, food/water reflux</li>
              <li>Tx: surgical revision with palatal flap (challenging — multiple revisions sometimes needed)</li>
            </ul>
          </li>
          <li><strong>Hemorrhage</strong> — intra-op or early post-op:
            <ul>
              <li>Major palatine artery, infraorbital artery, mandibular alveolar artery</li>
              <li>Tx: surgical re-exploration if significant</li>
            </ul>
          </li>
          <li><strong>Mandibular drift / malocclusion:</strong>
            <ul>
              <li>Drift toward operated side (after unilateral)</li>
              <li>Most accommodate within weeks</li>
              <li>Severe: revision orthodontic / orthopedic procedures (rare)</li>
            </ul>
          </li>
          <li><strong>Chronic pain / dysphagia:</strong>
            <ul>
              <li>Some patients have prolonged adaptation period</li>
              <li>Multimodal analgesia essential</li>
            </ul>
          </li>
          <li><strong>Recurrence ✗:</strong>
            <ul>
              <li>Higher with: incomplete margins, high-grade tumor, malignant melanoma</li>
              <li>Local recurrence: revision surgery + RT</li>
            </ul>
          </li>
          <li><strong>Distant metastasis:</strong>
            <ul>
              <li>Not "complication" but expected progression in malignant tumors</li>
              <li>Lung, regional LN most common</li>
            </ul>
          </li>
          <li>Surgical site infection (lower with proper antibiotic protocol)</li>
          <li>Tube complications (esophagostomy): displacement, inflammation</li>
          <li>Anesthetic complications (extensive surgery)</li>
          <li>Lingual / facial nerve damage (technical complications)</li>
          <li>Tongue protrusion / rolling of tongue (after extensive mandibulectomy) — usually accommodates</li>
          <li>Aspiration pneumonia (if dysphagia severe early post-op)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Tumor type drives outcome ✨:</strong></li>
          <li><strong>Acanthomatous ameloblastoma ✓ (best prognosis):</strong>
            <ul>
              <li>Cured by complete surgical resection</li>
              <li>MST &gt; 5 yr (essentially normal lifespan)</li>
              <li>Recurrence &lt; 5% with adequate margins</li>
              <li>Local + benign — surgery alone curative</li>
            </ul>
          </li>
          <li><strong>Fibrosarcoma:</strong>
            <ul>
              <li>Local recurrence: 30-50% even with surgery</li>
              <li>Met rate: 10-30%</li>
              <li>MST 12-24 months with surgery + RT</li>
              <li>"Hi-low" fibrosarcoma (Golden) — biologically aggressive despite benign histology, MST 12-18 mo</li>
            </ul>
          </li>
          <li><strong>SCC (rostral non-tonsillar) ✨:</strong>
            <ul>
              <li>Better prognosis than tonsillar</li>
              <li>Local recurrence 25-40%</li>
              <li>Met rate 10-20%</li>
              <li>MST 12-18 months</li>
              <li>Adjuvant piroxicam + RT improves outcome</li>
            </ul>
          </li>
          <li><strong>SCC (tonsillar) ✗:</strong>
            <ul>
              <li>Aggressive, often metastatic at presentation</li>
              <li>MST 3-6 months</li>
              <li>Often palliative</li>
            </ul>
          </li>
          <li><strong>Cat oral SCC ✗ (worst prognosis):</strong>
            <ul>
              <li>Most cats present with advanced disease</li>
              <li>MST 2-4 months even with aggressive Tx</li>
              <li>Often palliative with RT, NSAID</li>
              <li>Surgery only if very early disease</li>
            </ul>
          </li>
          <li><strong>Malignant melanoma:</strong>
            <ul>
              <li>Met rate at presentation 70-90% (caudal location)</li>
              <li>Local control with surgery 75-90%</li>
              <li>Distant met development → MST 6-12 months</li>
              <li>Adjuvant melanoma vaccine + RT improves MST to 12-15 months</li>
              <li>Rostral melanoma without LN met: MST 12-18 mo</li>
            </ul>
          </li>
          <li><strong>Functional outcomes (ALL tumor types):</strong>
            <ul>
              <li>90% return to eating normally within 2-3 weeks</li>
              <li>Most adapt to cosmetic changes well</li>
              <li>Owner satisfaction high (most don't regret surgery)</li>
            </ul>
          </li>
          <li><strong>Mortality (peri-operative):</strong>
            <ul>
              <li>Healthy patient: 1-3%</li>
              <li>Caudal maxillectomy: 5-10% (more challenging)</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>"Tumor type drives prognosis, not surgical skill"</strong> ✨ — Biopsy + staging FIRST, then aggressive surgery only if curative intent makes sense<br><br>**Acanthomatous ameloblastoma = surgery alone curative** ✓ — most rewarding oral tumor case<br><br>⚠️ **Cat oral SCC = often palliative** — usually too advanced at presentation. Discuss QOL expectations<br><br>✗ **Functional outcomes excellent** despite cosmetic change — most owners satisfied. **Esophagostomy tube + multimodal analgesia** = post-op recovery non-negotiable</div>
      `,
    },
  },

  /* ============================================================
     NEUROSURGERY — Hemilaminectomy (thoracolumbar IVDD)
  ============================================================ */
  {
    id: 'hemilaminectomy-ivdd',
    titleEn: 'Hemilaminectomy (Thoracolumbar IVDD)',
    titleTh: 'ผ่าตัดไขสันหลัง — Hemilaminectomy (IVDD ส่วนเอว/อก)',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'neurosurgery',
    tags: ['hemilaminectomy', 'IVDD', 'intervertebral disc disease', 'Hansen type I', 'disc extrusion', 'thoracolumbar', 'neurologic grading', 'fenestration', 'progressive myelomalacia', 'dachshund', 'chondrodystrophic', 'deep pain perception'],
    aliases: ['hemilaminectomy', 'IVDD surgery', 'spinal surgery', 'ผ่าตัด IVDD', 'ผ่าตัดหมอนรองกระดูก', 'หมอนรองกระดูกเคลื่อน'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Thoracolumbar IVDD',
    sections: {
      indications: `
        <ul>
          <li><strong>Acute thoracolumbar IVDD (Hansen Type I) ✗</strong> — primary indication
            <ul>
              <li>Acute disc extrusion → spinal cord compression + contusion</li>
              <li>Most common between T11-L3 (T12-13 most common single site)</li>
              <li>Predisposed: chondrodystrophic breeds — Dachshund ✨, French Bulldog, Pekingese, Beagle, Shih Tzu, Cocker Spaniel</li>
              <li>Typical onset: acute (hours), often after activity</li>
              <li>Age 3-7 years most common</li>
            </ul>
          </li>
          <li><strong>Neurologic grading (Sharp & Wheeler) ✨ — drives surgical decision:</strong>
            <ul>
              <li><strong>Grade 1:</strong> spinal pain only, no neurologic deficits</li>
              <li><strong>Grade 2:</strong> ambulatory paraparesis (weak, ataxic, but walks)</li>
              <li><strong>Grade 3:</strong> non-ambulatory paraparesis (can move legs but can't stand/walk)</li>
              <li><strong>Grade 4:</strong> paraplegia with intact deep pain perception (no voluntary movement)</li>
              <li><strong>Grade 5 ✗:</strong> paraplegia WITHOUT deep pain perception (worst — surgical urgency)</li>
            </ul>
          </li>
          <li><strong>Surgical indications:</strong>
            <ul>
              <li>Grade 1: surgery if recurrent / non-responsive to medical Tx (4-6 weeks)</li>
              <li>Grade 2: surgery typically recommended (better outcome than medical alone)</li>
              <li>Grade 3-4: surgery strongly recommended ✨</li>
              <li>Grade 5: emergency surgery within 24-48 h ideal (improves prognosis from ~ 50% to ~ 80% with deep pain present, less if absent &gt; 48 h)</li>
              <li>Recurrent IVDD with progressive signs</li>
              <li>Failed medical management (4-6 weeks of strict rest + analgesia)</li>
            </ul>
          </li>
          <li><strong>Hansen Type II (chronic disc protrusion):</strong>
            <ul>
              <li>Older non-chondrodystrophic dogs (Lab, GSD)</li>
              <li>Slower onset, less acute</li>
              <li>Surgery less commonly indicated unless clinical signs progressive</li>
              <li>Often combined with degenerative myelopathy considerations</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Progressive myelomalacia ✗</strong> — extremely poor prognosis
            <ul>
              <li>Ascending +/- descending necrosis of spinal cord</li>
              <li>Develops in some Grade 5 cases (especially with deep pain absent &gt; 48 h)</li>
              <li>Fatal — euthanasia humane consideration</li>
              <li>Difficult to predict — even Grade 5 can do well with surgery if deep pain returns</li>
            </ul>
          </li>
          <li>Multifocal disease (multiple sites of compression — surgery may not address all)</li>
          <li>Severe systemic illness preventing safe anesthesia</li>
          <li>Coagulopathy</li>
          <li>Owner unable to provide intensive post-op care:
            <ul>
              <li>Bladder management (express 3-4× daily for weeks if non-ambulatory)</li>
              <li>Rehabilitation (8-12 weeks)</li>
              <li>Cost (significant)</li>
            </ul>
          </li>
          <li>Grade 5 with deep pain absent &gt; 48 h: guarded prognosis, owner counseling required</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Neurologic exam ✨ — CRITICAL for localization + grading:</strong></p>
        <ul>
          <li>Mentation, cranial nerves (rule out brain disease)</li>
          <li><strong>Postural reactions (proprioception):</strong>
            <ul>
              <li>Hopping, hemi-walking</li>
              <li>Conscious proprioception (knuckling test)</li>
              <li>Decreased / absent in affected limbs</li>
            </ul>
          </li>
          <li><strong>Spinal reflexes:</strong>
            <ul>
              <li>Patellar reflex, withdrawal (flexor)</li>
              <li>UMN (T3-L3 lesion): hyperreflexia in pelvic limbs, sometimes "Schiff-Sherrington" (extended forelimbs, weak hindlimbs)</li>
              <li>LMN (L4-S3 lesion): hyporeflexia in pelvic limbs</li>
            </ul>
          </li>
          <li><strong>Deep pain perception ✨</strong> — most prognostic test
            <ul>
              <li>Apply painful stimulus (hemostat / fingers) to bone of toes</li>
              <li>Look for CONSCIOUS response (turn head, vocalize, snap) — NOT just leg withdrawal (reflex)</li>
              <li>Withdrawal alone does NOT confirm deep pain</li>
              <li>Deep pain present (Grade 1-4) → much better prognosis than absent (Grade 5)</li>
            </ul>
          </li>
          <li><strong>Spinal palpation:</strong>
            <ul>
              <li>Pain on palpation = localizes lesion</li>
              <li>Compare normal vs painful regions</li>
            </ul>
          </li>
          <li>Pelvic limb function: ambulation, urination, defecation</li>
          <li>Anal tone, perineal reflex (assess sacral function)</li>
        </ul>
        <p><strong>2. Imaging — MRI gold standard ✨:</strong></p>
        <ul>
          <li><strong>MRI (preferred):</strong>
            <ul>
              <li>Identifies disc material, spinal cord compression, T2 hyperintensity (cord edema/contusion)</li>
              <li>Localizes side + level precisely</li>
              <li>Surgical planning</li>
              <li>Detects multiple sites of disease</li>
            </ul>
          </li>
          <li><strong>CT myelogram (alternative):</strong>
            <ul>
              <li>Cisternal contrast injection</li>
              <li>Identifies compression but less detail of cord parenchyma</li>
              <li>Risk of seizures / contrast reactions</li>
              <li>Used when MRI unavailable</li>
            </ul>
          </li>
          <li>Plain radiographs:
            <ul>
              <li>May show calcified disc material in foramen / canal</li>
              <li>Wedge-shaped intervertebral space</li>
              <li>NOT diagnostic alone — need cross-sectional imaging</li>
            </ul>
          </li>
          <li>3-view thoracic rad (rule out other conditions, screen mets if neoplastic suspicion)</li>
        </ul>
        <p><strong>3. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA</li>
          <li>Coag panel</li>
          <li>Type / crossmatch (some bleeding from venous sinuses possible)</li>
        </ul>
        <p><strong>4. Pre-op preparation:</strong></p>
        <ul>
          <li>Pre-medication: methadone 0.3-0.5 mg/kg IV</li>
          <li>Antibiotics: Cefazolin 22 mg/kg IV at induction</li>
          <li>Steroids: <strong>controversial — not routine ✨</strong>
            <ul>
              <li>Methylprednisolone sodium succinate (MPSS) — historical use, now limited evidence</li>
              <li>Dexamethasone 0.1-0.2 mg/kg IV some surgeons use</li>
              <li>Many neurosurgeons no longer use perioperatively</li>
            </ul>
          </li>
          <li>Bladder management: express bladder before surgery</li>
          <li>Wide clip + scrub of dorsal back</li>
          <li>Position: ventral recumbency (sternal)</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence (standard hemilaminectomy ✨):</strong></p>
        <ol>
          <li><strong>Approach</strong>:
            <ul>
              <li>Dorsal midline skin incision over affected vertebrae (extends 1-2 vertebrae cranial + caudal)</li>
              <li>Subcutaneous + lumbodorsal fascia incision</li>
              <li>Reflect epaxial muscles laterally on side of lesion (the side from which disc material extruded)</li>
              <li>Expose articular processes + lamina</li>
            </ul>
          </li>
          <li><strong>Identify level ✨ — CRITICAL:</strong>
            <ul>
              <li>Count vertebrae from a fixed point (last rib = T13)</li>
              <li>Confirm with intra-op imaging if uncertain (radiograph or fluoroscopy)</li>
              <li>Wrong level surgery = surgical disaster</li>
            </ul>
          </li>
          <li><strong>Remove articular processes:</strong>
            <ul>
              <li>Use rongeurs to remove caudal articular process of cranial vertebra + cranial articular process of caudal vertebra</li>
              <li>Exposes pedicle</li>
            </ul>
          </li>
          <li><strong>Burr / drill the bone window ✨:</strong>
            <ul>
              <li>Use high-speed pneumatic drill with carbide / diamond burr</li>
              <li>Remove pedicle bone gradually (starting wide, narrowing toward dura)</li>
              <li>Remove dorsolateral lamina + pedicle</li>
              <li>Cool with continuous saline irrigation (heat damage to cord)</li>
              <li>Burr until paper-thin layer of bone remains over dura, then carefully remove with rongeurs / curette</li>
              <li>Expose dorsal aspect of spinal canal + lateral aspect</li>
            </ul>
          </li>
          <li><strong>Identify + remove extruded disc material:</strong>
            <ul>
              <li>Disc material visible as yellowish, off-white, or hemorrhagic mass</li>
              <li>Use right-angle nerve hook + suction</li>
              <li>Gently retrieve disc material from epidural space</li>
              <li>Don't traumatize cord ✨</li>
              <li>Lavage with saline to flush remaining material</li>
            </ul>
          </li>
          <li><strong>Confirm decompression:</strong>
            <ul>
              <li>Cord should re-expand to fill canal</li>
              <li>Check entire region for residual material</li>
              <li>Bleeding from venous sinuses controlled with bone wax / Surgicel / careful tamponade</li>
            </ul>
          </li>
          <li><strong>Optional: Disc fenestration ✨</strong>
            <ul>
              <li>Removes nucleus pulposus from adjacent intervertebral discs</li>
              <li>Reduces risk of future extrusion at adjacent levels (controversial benefit)</li>
              <li>Performed at affected disc + 1-2 adjacent levels</li>
              <li>Through paramedian approach with fenestration knife</li>
            </ul>
          </li>
          <li><strong>Closure:</strong>
            <ul>
              <li>Lavage thoroughly</li>
              <li>Approximate epaxial muscles with 3-0 or 2-0 PDS continuous</li>
              <li>Lumbodorsal fascia: 2-0 or 0 PDS continuous (strong layer)</li>
              <li>SQ + skin routine layers</li>
              <li>Optional: place small fat graft over bone window (some surgeons believe reduces fibrosis — controversial)</li>
            </ul>
          </li>
        </ol>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>Wrong-level surgery = #1 catastrophic error → confirm with intra-op imaging</li>
          <li>Atraumatic cord handling — don't push cord, gentle disc removal</li>
          <li>Adequate decompression — incomplete = persistent signs</li>
          <li>Cool drilling with saline — heat damage to cord</li>
          <li>Hemostasis from venous sinuses — patience + bone wax / Surgicel</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.3-0.5 mg/kg IV ✨ — full mu agonist for spinal pain</li>
          <li>± Acepromazine 0.01-0.02 mg/kg IM (caution with non-ambulatory patient — may worsen flaccidity)</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Loco-regional analgesia (controversial in spinal surgery):</strong></p>
        <ul>
          <li>Epidural NOT used (risk of adding to spinal pathology)</li>
          <li>Local infiltration along incision line at end of surgery (bupivacaine 0.25-0.5%)</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV titrated</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 5-15 mcg/kg/h ✓</li>
          <li>Lidocaine CRI 30-50 mcg/kg/min</li>
          <li>± Ketamine CRI 0.6 mg/kg/h (helpful for chronic pain modulation)</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Cefazolin 22 mg/kg IV at induction, repeat q90 min</li>
          <li>Post-op:
            <ul>
              <li>Routine clean: discontinue or 5-7 d cephalexin</li>
              <li>Some neurosurgeons continue 7-14 d due to spinal location + concern for discospondylitis</li>
            </ul>
          </li>
        </ul>
        <p><strong>Steroids — CONTROVERSIAL ✨:</strong></p>
        <ul>
          <li>Modern evidence: routine high-dose steroids NOT recommended (no proven benefit, GI ulceration + infection risk)</li>
          <li>Some surgeons still use:
            <ul>
              <li>Dexamethasone 0.1-0.2 mg/kg IV intra-op (single dose)</li>
              <li>NOT chronic steroids unless other indication</li>
            </ul>
          </li>
          <li>Methylprednisolone sodium succinate (MPSS) — old protocol, now limited evidence</li>
        </ul>
        <p><strong>Post-op analgesia (multimodal):</strong></p>
        <ul>
          <li>Continue fentanyl CRI 12-24 h post-op</li>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24-48 h</li>
          <li>Then Buprenorphine 0.02 mg/kg IV/IM q8h × 3-5 d</li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 4-8 weeks ✨ — neuropathic pain coverage essential</li>
          <li>NSAID — start day 2-3 once renal function confirmed:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 14 d</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h × 7-14 d</li>
              <li>NEVER combine with steroids ✗ (GI ulceration risk)</li>
            </ul>
          </li>
          <li>± Tramadol 2-5 mg/kg PO q8-12h adjunct</li>
          <li>± Amantadine 3-5 mg/kg PO q24h (chronic neuropathic pain)</li>
        </ul>
        <p><strong>Bladder management:</strong></p>
        <ul>
          <li>Phenoxybenzamine 0.25-0.5 mg/kg PO q12h (α-blocker, reduces internal sphincter tone)</li>
          <li>Diazepam 0.2-0.5 mg/kg PO q8h (skeletal muscle relaxant for external sphincter)</li>
          <li>Bethanechol 2.5-15 mg/dog PO q8h (cholinergic, increases detrusor contractility)</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3) — ICU monitoring ✨:</strong></p>
        <ul>
          <li>Monitor neurologic status q4-6h:
            <ul>
              <li>Mentation, deep pain, voluntary movement, withdrawal</li>
              <li>Compare to pre-op baseline</li>
              <li>WORSENING = emergency (re-bleed, missed compression, progressive myelomalacia)</li>
              <li>Improvement may be slow (days-weeks)</li>
            </ul>
          </li>
          <li>Pain control multimodal as above</li>
          <li><strong>Bladder management ✨ — CRITICAL:</strong>
            <ul>
              <li>Express bladder q4-6h initially</li>
              <li>Place indwelling urinary catheter if necessary (closed system, monitor for UTI)</li>
              <li>Phenoxybenzamine + diazepam to facilitate emptying</li>
              <li>Most regain bladder function within days-weeks</li>
            </ul>
          </li>
          <li>Watch for signs of progressive myelomalacia ✗:
            <ul>
              <li>Ascending paralysis (becomes paraplegic → tetraplegic)</li>
              <li>Respiratory paralysis (terminal)</li>
              <li>Loss of cranial sensation</li>
              <li>Develops typically 24-48 h post-injury, 1-5 d post-surgery</li>
            </ul>
          </li>
          <li>Decubital ulcer prevention — turn q4h, padded bedding</li>
        </ul>
        <p><strong>Day 1-7:</strong></p>
        <ul>
          <li>Discharge typically day 3-7 once stable</li>
          <li>Continue gabapentin, NSAID, opioid</li>
          <li>Continue bladder management at home (owner trained to express)</li>
          <li>Begin <strong>physical therapy ✨ — CRITICAL for outcome:</strong>
            <ul>
              <li>Passive range of motion (PROM) exercises q4-6h</li>
              <li>Massage muscles</li>
              <li>Standing exercises (assisted)</li>
              <li>Sling support for ambulation attempts</li>
            </ul>
          </li>
          <li>Strict cage rest with sling support for elimination only</li>
        </ul>
        <p><strong>Week 2-4:</strong></p>
        <ul>
          <li>Continue rehab — increasing intensity:
            <ul>
              <li>Underwater treadmill / hydrotherapy ideal ✨</li>
              <li>Standing exercises</li>
              <li>Weight-shifting</li>
              <li>Cavaletti once ambulatory</li>
            </ul>
          </li>
          <li>Recheck day 14 — suture removal, neurologic re-exam</li>
          <li>Recheck day 28 — assess function, plan progression</li>
        </ul>
        <p><strong>Week 4-8:</strong></p>
        <ul>
          <li>Most patients regaining function (Grade 1-4)</li>
          <li>Increase activity gradually</li>
          <li>Continue physical therapy</li>
          <li>Final neurologic exam — most return to function within 6-8 weeks</li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Most return to normal or near-normal function (depending on initial grade)</li>
          <li>Recurrence at adjacent disc: 5-15% within years</li>
          <li>Predisposed breeds (Dachshund): lifelong management:
            <ul>
              <li>Weight management ✨ (single most important factor)</li>
              <li>Avoid jumping, stairs (use ramps)</li>
              <li>Harness instead of collar</li>
              <li>Routine glucosamine + chondroitin (controversial benefit for IVDD)</li>
            </ul>
          </li>
          <li>Annual neurologic recheck</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Progressive myelomalacia ✗</strong> — most feared:
            <ul>
              <li>Rate: 10-15% of Grade 5 cases (deep pain absent)</li>
              <li>Lower rate in Grade 1-4 cases</li>
              <li>Ascending necrosis of cord — eventually involves respiratory function</li>
              <li>Fatal — humane euthanasia</li>
              <li>Prevention: not preventable; surgery doesn't worsen but doesn't reverse</li>
            </ul>
          </li>
          <li><strong>Persistent neurologic deficits</strong>:
            <ul>
              <li>Especially Grade 4-5 patients</li>
              <li>Some patients become "ambulatory chassidic" (walking but with persistent ataxia + proprioceptive deficits)</li>
              <li>Some remain non-ambulatory (5-15% of severe cases)</li>
              <li>QOL discussion — many adapt to wheelchairs, etc.</li>
            </ul>
          </li>
          <li><strong>Persistent urinary / fecal incontinence</strong>:
            <ul>
              <li>In Grade 4-5 patients</li>
              <li>Variable improvement with time</li>
              <li>Some require lifelong bladder expression / management</li>
            </ul>
          </li>
          <li><strong>Recurrent IVDD at adjacent level:</strong>
            <ul>
              <li>5-15% recurrence within years (different disc, same patient)</li>
              <li>Tx: revision surgery</li>
              <li>Prophylactic fenestration may reduce risk (controversial)</li>
            </ul>
          </li>
          <li><strong>Surgical site infection / discospondylitis:</strong>
            <ul>
              <li>Rare but serious</li>
              <li>Tx: long-term antibiotics, possible revision</li>
            </ul>
          </li>
          <li>Wrong-level surgery ✗ — catastrophic, requires re-operation</li>
          <li>Hemorrhage from venous sinuses (intra-op)</li>
          <li>Cord trauma from manipulation</li>
          <li>Cerebrospinal fluid leak / pseudomeningocele</li>
          <li>Wound dehiscence</li>
          <li>Anesthetic complications</li>
          <li>Decubital ulcers (in non-ambulatory patient — proper bedding + turning)</li>
          <li>UTI from prolonged catheterization</li>
          <li>Aspiration pneumonia (if dysphagia / regurgitation in non-ambulatory)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Outcomes by neurologic grade ✨ (with surgery):</strong></li>
          <li><strong>Grade 1 (pain only) ✓:</strong>
            <ul>
              <li>Excellent: 95-100% return to function</li>
              <li>Recovery 4-8 weeks</li>
            </ul>
          </li>
          <li><strong>Grade 2 (ambulatory paraparesis):</strong>
            <ul>
              <li>Excellent: 90-95% return to function</li>
              <li>Recovery 6-10 weeks</li>
            </ul>
          </li>
          <li><strong>Grade 3 (non-ambulatory paraparesis):</strong>
            <ul>
              <li>Very good: 85-95% return to ambulation</li>
              <li>Recovery 8-12 weeks</li>
            </ul>
          </li>
          <li><strong>Grade 4 (paraplegia, deep pain present):</strong>
            <ul>
              <li>Good: 80-90% return to ambulation</li>
              <li>Recovery 8-16 weeks</li>
              <li>Some may have residual deficits</li>
            </ul>
          </li>
          <li><strong>Grade 5 (paraplegia, deep pain absent) ✗:</strong>
            <ul>
              <li>Surgery within 24 h: 50-70% return to function</li>
              <li>Surgery 24-48 h: 40-60%</li>
              <li>Surgery &gt; 48 h: 20-50% (pessimistic)</li>
              <li>10-15% develop progressive myelomalacia (fatal)</li>
              <li>Time-sensitive surgery</li>
            </ul>
          </li>
          <li><strong>Surgery vs medical management:</strong>
            <ul>
              <li>Grade 1: medical can succeed; surgery if recurrent</li>
              <li>Grade 2-3: surgery usually superior to medical (faster recovery)</li>
              <li>Grade 4-5: surgery clearly superior</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>Recurrence at adjacent disc 5-15%</li>
              <li>Most return to normal QOL</li>
              <li>Some need lifelong management (predisposed breeds)</li>
              <li>QOL excellent post-recovery</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Deep pain perception = single most important prognostic factor</strong> ✨ — present = good prognosis, absent = guarded<br><br>**Time-sensitive in Grade 5** — surgery within 24-48 h dramatically improves outcome<br><br>⚠️ **Wrong-level surgery = catastrophic** — confirm level with intra-op imaging if any doubt<br><br>✗ **Progressive myelomalacia 10-15% in Grade 5** — fatal, not preventable, owner counseling pre-op</div>
      `,
    },
  },

  /* ============================================================
     NEUROSURGERY — Ventral slot (cervical IVDD)
  ============================================================ */
  {
    id: 'ventral-slot',
    titleEn: 'Ventral Slot (Cervical IVDD)',
    titleTh: 'ผ่าตัดไขสันหลังคอ — Ventral Slot',
    type: 'surgery',
    species: ['dog'],
    system: 'neurosurgery',
    tags: ['ventral slot', 'cervical IVDD', 'cervical disc disease', 'C2-C7', 'Doberman', 'Beagle', 'cervical pain', 'neck pain', 'tetraparesis', 'venous sinus'],
    aliases: ['ventral slot', 'cervical disc surgery', 'ผ่าตัดหมอนรองคอ', 'IVDD คอ'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Cervical IVDD',
    sections: {
      indications: `
        <ul>
          <li><strong>Cervical IVDD ✗</strong> — primary indication
            <ul>
              <li>Most common: C2-C3, C3-C4 (chondrodystrophic)</li>
              <li>C5-C6, C6-C7 (large breeds — Doberman, GSD — caudal cervical "wobbler"-like presentation)</li>
              <li>Predisposed: Beagle ✨, Dachshund, Cocker Spaniel, French Bulldog, Doberman</li>
            </ul>
          </li>
          <li><strong>Clinical signs:</strong>
            <ul>
              <li>Severe neck pain — guarded posture, reluctant to move neck, vocalize on palpation</li>
              <li>Lameness in forelimb (often asymmetric — "root signature")</li>
              <li>Tetraparesis (variable severity)</li>
              <li>Severe cases: tetraplegia, respiratory paralysis ✗</li>
            </ul>
          </li>
          <li><strong>Surgical indications ✨:</strong>
            <ul>
              <li>Severe cervical pain unresponsive to medical Tx 1-2 weeks</li>
              <li>Progressive neurologic deficits</li>
              <li>Tetraparesis / tetraplegia</li>
              <li>Recurrent episodes</li>
              <li>Failed medical management</li>
            </ul>
          </li>
          <li><strong>Approach choice — ventral slot vs dorsal laminectomy:</strong>
            <ul>
              <li>Ventral slot: standard for ventral / centrally located disc material ✓</li>
              <li>Dorsal laminectomy: for dorsally migrated material, multifocal disease, instability</li>
              <li>Ventral slot most common for typical cervical IVDD</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severely lateralized disc material (limited access via ventral slot — may need lateral approach)</li>
          <li>Dorsally located lesion (use dorsal laminectomy)</li>
          <li>Cervical instability (may need fixation in addition)</li>
          <li>Cervical neoplasia (case-dependent — may not be candidate for ventral slot alone)</li>
          <li>Severe systemic illness</li>
          <li>Coagulopathy (cervical bleeding can be substantial)</li>
          <li>Owner unable to provide post-op care</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Neurologic exam — cervical localization ✨:</strong></p>
        <ul>
          <li>Differentiate cervical vs thoracolumbar:
            <ul>
              <li>Cervical (C1-C5): UMN signs in all 4 limbs</li>
              <li>Cervical (C6-T2): LMN signs in forelimbs + UMN in hindlimbs</li>
              <li>Forelimb root signature (lameness referable to specific nerve root)</li>
            </ul>
          </li>
          <li>Cervical pain on palpation</li>
          <li>Cranial nerves (rule out brain disease)</li>
          <li>Postural reactions all 4 limbs</li>
          <li>Spinal reflexes</li>
          <li>Deep pain perception (rare to be lost in cervical disease)</li>
          <li>Horner syndrome (T1-T3 sympathetic involvement)</li>
        </ul>
        <p><strong>2. Imaging — MRI gold standard:</strong></p>
        <ul>
          <li>MRI:
            <ul>
              <li>Disc material location, side, level</li>
              <li>Spinal cord signal changes (T2 hyperintensity)</li>
              <li>Multifocal disease assessment</li>
              <li>Surgical planning</li>
            </ul>
          </li>
          <li>CT myelogram alternative if MRI unavailable</li>
          <li>3-view thoracic radiograph (cardiac assessment, screen mets if neoplasia suspected)</li>
        </ul>
        <p><strong>3. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA</li>
          <li>Coag panel</li>
          <li>Type / crossmatch (cervical surgery = significant bleeding potential)</li>
        </ul>
        <p><strong>4. Pre-op preparation:</strong></p>
        <ul>
          <li>Pre-medication: methadone 0.3-0.5 mg/kg IV</li>
          <li>Antibiotics: Cefazolin 22 mg/kg IV at induction</li>
          <li>Anti-emetic: maropitant</li>
          <li>Position: dorsal recumbency, neck slightly extended (sandbag under neck)</li>
          <li>Wide clip + scrub of ventral neck from mandible to thoracic inlet</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence (standard ventral slot ✨):</strong></p>
        <ol>
          <li><strong>Approach:</strong>
            <ul>
              <li>Ventral midline skin incision from larynx to thoracic inlet (length depends on level)</li>
              <li>SQ + sternocephalicus / sternohyoideus dissection</li>
              <li>Retract muscles laterally</li>
              <li>Identify trachea, displace to one side</li>
              <li>Identify esophagus + carotid sheath laterally — protect</li>
              <li>Expose ventral aspect of cervical vertebrae</li>
            </ul>
          </li>
          <li><strong>Identify level ✨ — CRITICAL:</strong>
            <ul>
              <li>Count vertebrae from C2 (prominent ventral spine)</li>
              <li>Confirm with intra-op fluoroscopy / radiograph if uncertain</li>
              <li>Wrong level = surgical disaster</li>
            </ul>
          </li>
          <li><strong>Drill the slot:</strong>
            <ul>
              <li>Use high-speed burr (carbide / diamond)</li>
              <li>Slot location: centered on intervertebral space, half on each adjacent vertebral body</li>
              <li>Slot dimensions ✨:
                <ul>
                  <li>Width: ~ 1/3 of vertebral body width</li>
                  <li>Length: from cranial 1/3 of caudal vertebra to caudal 1/3 of cranial vertebra</li>
                  <li>Depth: gradually deepen, narrowing as approach dura</li>
                </ul>
              </li>
              <li>Continuous saline irrigation (heat dissipation)</li>
              <li>As approach dura: paper-thin layer of bone, then carefully remove with curette / fine rongeur</li>
            </ul>
          </li>
          <li><strong>Identify + remove disc material:</strong>
            <ul>
              <li>Identify disc material in ventral epidural space</li>
              <li>Use right-angle nerve hook + suction</li>
              <li>Gently retrieve disc material</li>
              <li>Avoid trauma to spinal cord</li>
              <li>Extracted material may be soft (acute) or calcified</li>
            </ul>
          </li>
          <li><strong>Confirm decompression:</strong>
            <ul>
              <li>Cord re-expands to fill canal</li>
              <li>No residual material</li>
              <li>Some surgeons gently probe surrounding area</li>
            </ul>
          </li>
          <li><strong>Hemostasis ✨ — KEY CHALLENGE:</strong>
            <ul>
              <li>Internal vertebral venous plexus (sinuses) lateral to spinal cord</li>
              <li>Damage = significant bleeding ✗</li>
              <li>Tamponade with bone wax / Surgicel / patience</li>
              <li>Avoid aggressive suction near sinuses</li>
              <li>Coagulopathy patient = even more challenging</li>
            </ul>
          </li>
          <li><strong>Closure:</strong>
            <ul>
              <li>Lavage with saline</li>
              <li>Place absorbable hemostatic agent (Surgicel) over slot to control oozing</li>
              <li>NO need to fill slot with bone graft (heals naturally)</li>
              <li>Approximate strap muscles loosely with 3-0 PDS</li>
              <li>SQ + skin routine layers</li>
              <li>Light bandage for compression × 24-48 h</li>
            </ul>
          </li>
        </ol>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>Slot dimensions matter — too small = inadequate access; too large = vertebral fracture risk</li>
          <li>Hemorrhage control — patience + tamponade, NOT panic</li>
          <li>Stay midline — drift laterally = enter venous sinus</li>
          <li>Identify level — confirm with imaging</li>
          <li>Atraumatic cord handling</li>
        </ul>
      `,
      drugs: `
        <p><strong>Same general principles as hemilaminectomy:</strong></p>
        <ul>
          <li>Pre-med: methadone + maropitant</li>
          <li>Induction: propofol or alfaxalone</li>
          <li>Maintenance: isoflurane + fentanyl CRI ± lidocaine ± ketamine CRI</li>
          <li>Antibiotics: Cefazolin 22 mg/kg IV at induction + perioperative</li>
          <li>Post-op:
            <ul>
              <li>Methadone q4-6h × 24-48 h → buprenorphine</li>
              <li>NSAID × 7-14 d (carprofen, meloxicam — NEVER with steroids)</li>
              <li>Gabapentin 5-10 mg/kg PO q8-12h × 4-8 weeks ✨</li>
              <li>± Tramadol</li>
            </ul>
          </li>
          <li>Steroids controversial — some dexamethasone single dose intra-op</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-2) — ICU monitoring:</strong></p>
        <ul>
          <li>Monitor neurologic status q4-6h:
            <ul>
              <li>Mentation, all 4 limbs movement, gait</li>
              <li>Worsening = emergency</li>
            </ul>
          </li>
          <li><strong>Watch for hemorrhage</strong>:
            <ul>
              <li>Cervical hematoma = life-threatening (compresses airway)</li>
              <li>Monitor neck swelling, breathing</li>
              <li>If significant: emergency drain</li>
            </ul>
          </li>
          <li>Pain control multimodal</li>
          <li>Soft diet (elevated bowls if neck movement restricted)</li>
          <li>Cool environment</li>
        </ul>
        <p><strong>Day 1-7:</strong></p>
        <ul>
          <li>Discharge typically day 2-4</li>
          <li>Continue gabapentin, NSAID, opioid</li>
          <li>Strict cage rest 2-4 weeks</li>
          <li>Leash walks for elimination only (harness, NOT collar — neck pressure)</li>
          <li>Begin gentle PT once stable:
            <ul>
              <li>PROM</li>
              <li>Encouraged ambulation</li>
              <li>No jumping / stairs / rough play</li>
            </ul>
          </li>
        </ul>
        <p><strong>Week 2-4:</strong></p>
        <ul>
          <li>Recheck day 14 — suture removal, neurologic exam</li>
          <li>Continue activity restriction</li>
          <li>Most patients improve substantially within 2-4 weeks</li>
        </ul>
        <p><strong>Week 4-8:</strong></p>
        <ul>
          <li>Increase activity gradually</li>
          <li>Most return to normal activity by 6-8 weeks</li>
          <li>Recheck neurologic exam</li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Most patients have excellent outcome</li>
          <li>Recurrence at adjacent level: 5-15%</li>
          <li>Lifelong harness use, weight management</li>
          <li>Avoid jumping, rough play in predisposed breeds</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Hemorrhage from venous sinuses ✗</strong> — most common intra-op complication
            <ul>
              <li>Significant volume can be lost rapidly</li>
              <li>Tx: tamponade, bone wax, Surgicel, patience</li>
              <li>Severe: transfusion may be needed</li>
            </ul>
          </li>
          <li><strong>Cervical hematoma post-op ✗</strong>:
            <ul>
              <li>Can compress airway / cord</li>
              <li>Tx: emergency drain</li>
            </ul>
          </li>
          <li><strong>Vertebral fracture / instability:</strong>
            <ul>
              <li>From oversized slot (&gt; 1/3 width)</li>
              <li>Tx: ventral plating / fixation</li>
              <li>Rare with proper technique</li>
            </ul>
          </li>
          <li><strong>Worsening neurologic signs:</strong>
            <ul>
              <li>From cord trauma during surgery</li>
              <li>Bleeding into canal</li>
              <li>Usually transient, gradually improves</li>
            </ul>
          </li>
          <li><strong>Persistent neck pain</strong>:
            <ul>
              <li>Related to surgical trauma, residual disc material, scarring</li>
              <li>Tx: NSAID, gabapentin, sometimes steroids long-term</li>
            </ul>
          </li>
          <li>Recurrent IVDD at adjacent level (5-15%)</li>
          <li>Surgical site infection / discospondylitis (rare)</li>
          <li>Wrong-level surgery ✗</li>
          <li>Esophageal / tracheal injury (rare — careful retraction)</li>
          <li>Recurrent laryngeal nerve damage → laryngeal paralysis (rare)</li>
          <li>Horner syndrome (cervical sympathetic chain near surgical field)</li>
          <li>Anesthetic complications</li>
          <li>Pseudomeningocele / CSF leak</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Cervical IVDD with surgery ✓:</strong>
            <ul>
              <li>Excellent outcome: 90-95% return to function</li>
              <li>Faster recovery than thoracolumbar IVDD typically</li>
              <li>Most return to normal activity within 4-8 weeks</li>
            </ul>
          </li>
          <li><strong>Severity-based outcomes:</strong>
            <ul>
              <li>Cervical pain only: 95-98% resolution</li>
              <li>Mild tetraparesis: 90-95% return to function</li>
              <li>Severe tetraparesis / tetraplegia: 75-90% return to function</li>
            </ul>
          </li>
          <li><strong>Compared to medical management:</strong>
            <ul>
              <li>Severe / progressive disease: surgery clearly superior</li>
              <li>Mild pain only: medical may succeed; surgery if recurrent</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>Most return to normal QOL</li>
              <li>Recurrence at adjacent disc 5-15%</li>
              <li>Lifelong management for predisposed breeds</li>
            </ul>
          </li>
          <li><strong>Mortality:</strong>
            <ul>
              <li>Healthy patient: 1-3%</li>
              <li>Severe disease + bleeding complications: higher</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Cervical IVDD = often more painful, faster recovery than thoracolumbar</strong> ✓ — surgery 90-95% successful<br><br>**Hemorrhage control = surgeon's biggest challenge** ✨ — venous sinuses lateral to cord, tamponade + patience<br><br>⚠️ **Slot dimensions matter** — too small inadequate, too large vertebral fracture (max 1/3 width)<br><br>✗ **Cervical hematoma post-op = airway emergency** — monitor closely first 24 h</div>
      `,
    },
  },

  /* ============================================================
     ONCOLOGIC — Amputation
  ============================================================ */
  {
    id: 'limb-amputation',
    titleEn: 'Limb Amputation (Forelimb / Hindlimb)',
    titleTh: 'ผ่าตัดเอาขาออก (หน้า / หลัง)',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'oncologic',
    tags: ['amputation', 'osteosarcoma', 'OSA', 'forelimb amputation', 'hindlimb amputation', 'scapulectomy', 'shoulder disarticulation', 'coxofemoral disarticulation', 'mid-femoral amputation', 'phantom pain', 'three-legged dog'],
    aliases: ['amputation', 'limb amputation', 'ตัดขา', 'ผ่าตัดเอาขาออก'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Limb Amputation',
    sections: {
      indications: `
        <ul>
          <li><strong>Limb-threatening neoplasia ✗</strong> — primary indication:
            <ul>
              <li><strong>Osteosarcoma (OSA)</strong> — most common ✨
                <ul>
                  <li>Distal radius, proximal humerus, distal femur, proximal tibia ("toward the elbow, away from the knee")</li>
                  <li>Large/giant breeds — Great Dane, Rottweiler, Greyhound, Lab, Mastiff</li>
                  <li>Highly metastatic (90% have micromets at diagnosis)</li>
                </ul>
              </li>
              <li>Soft tissue sarcoma extending into bone</li>
              <li>Mast cell tumor with extensive limb involvement</li>
              <li>Synovial cell sarcoma</li>
              <li>Histiocytic sarcoma</li>
              <li>Cat: vaccine-associated sarcoma (rare in limb), SCC of digit</li>
            </ul>
          </li>
          <li><strong>Severe trauma:</strong>
            <ul>
              <li>Devastating fractures unable to be reconstructed (Grade III open with vascular compromise)</li>
              <li>Loss of arterial supply (distal limb necrosis)</li>
              <li>Severe degloving with soft tissue loss</li>
              <li>Burns / electrocution</li>
            </ul>
          </li>
          <li><strong>Severe limb dysfunction:</strong>
            <ul>
              <li>Permanent paralysis from nerve injury (brachial plexus avulsion)</li>
              <li>Severe chronic pain unresponsive to medical Tx</li>
              <li>End-stage osteoarthritis with severe lameness (rare indication for amputation alone)</li>
              <li>Severe contracture / disability</li>
            </ul>
          </li>
          <li><strong>Severe necrotizing infection (rare, life-saving):</strong>
            <ul>
              <li>Necrotizing fasciitis</li>
              <li>Severe gangrene</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severe orthopedic disease in remaining limbs (animal won't be able to support weight on 3 legs):
            <ul>
              <li>Bilateral hip dysplasia (especially if amputating hindlimb)</li>
              <li>Bilateral CCL disease</li>
              <li>Severe spondylosis / IVDD</li>
              <li>Significant arthritis affecting opposite limb function</li>
              <li>Pre-op ortho exam mandatory ✨</li>
            </ul>
          </li>
          <li>Significant neurologic disease (DM, severe IVDD residual)</li>
          <li>Distant metastatic disease where amputation doesn't extend QOL</li>
          <li>Owner unable to provide rehabilitation</li>
          <li>Severe systemic illness</li>
          <li>Owner aesthetic concerns (counsel — most adapt extremely well, owners often more concerned than dog)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Disease workup ✨:</strong></p>
        <ul>
          <li>Diagnose underlying disease:
            <ul>
              <li>Radiographs of limb — classic OSA appearance ("Codman's triangle", sunburst pattern, cortical lysis)</li>
              <li>FNA / biopsy of mass:
                <ul>
                  <li>FNA cytology often diagnostic for OSA (alkaline phosphatase positive)</li>
                  <li>Bone biopsy if cytology equivocal</li>
                  <li>Excisional biopsy IS amputation</li>
                </ul>
              </li>
              <li>CT for surgical planning (extent of disease, regional LN)</li>
            </ul>
          </li>
          <li>Staging (especially OSA — high met rate):
            <ul>
              <li>3-view thoracic radiographs (mets in 90% of OSA at presentation if visible — most are micromets)</li>
              <li>Abdominal US (less common but possible mets to liver, spleen, kidney)</li>
              <li>Regional LN aspirate</li>
              <li>± bone scan for OSA (assess multifocal disease)</li>
              <li>± CT chest (more sensitive than rads for mets)</li>
            </ul>
          </li>
        </ul>
        <p><strong>2. Patient assessment for adaptation ✨:</strong></p>
        <ul>
          <li>Body condition (overweight = harder to adapt)</li>
          <li>Other limbs:
            <ul>
              <li>Hip dysplasia? CCL disease? Arthritis?</li>
              <li>Forelimb amputation: assess remaining limbs for support</li>
              <li>Hindlimb amputation: assess hips + opposite knee</li>
            </ul>
          </li>
          <li>Spinal disease (IVDD, spondylosis)</li>
          <li>Neurologic exam — especially in older patients</li>
          <li>Discuss with owner: 90-95% of dogs adapt well within 2-4 weeks ✨</li>
          <li>Pre-op rehabilitation evaluation if available</li>
        </ul>
        <p><strong>3. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA</li>
          <li>Coag panel (especially if OSA — paraneoplastic effects)</li>
          <li>Type / crossmatch (significant blood loss possible)</li>
          <li>OSA-specific: alkaline phosphatase (elevated = poor prognostic factor)</li>
        </ul>
        <p><strong>4. Pre-op preparation:</strong></p>
        <ul>
          <li>Wide clip — entire limb + body wall</li>
          <li>Hanging leg drape</li>
          <li>Pre-emptive analgesia ✨ (post-op pain prevention):
            <ul>
              <li>Methadone 0.5 mg/kg IV pre-induction</li>
              <li>Maropitant 1 mg/kg SC</li>
              <li>± Dexmedetomidine 1-3 mcg/kg IV (low dose, if cardio-stable)</li>
              <li>Gabapentin 10 mg/kg PO 12 h pre-op (some surgeons)</li>
            </ul>
          </li>
          <li>Antibiotics: Cefazolin 22 mg/kg IV at induction</li>
          <li>IV fluids — large bore catheter</li>
          <li>Position depends on which limb (lateral recumbency typically)</li>
        </ul>
      `,
      technique: `
        <p><strong>Forelimb amputation options ✨:</strong></p>
        <ol>
          <li><strong>Scapulectomy (preferred for OSA, large tumors) ✨:</strong>
            <ul>
              <li>Removes entire limb + scapula</li>
              <li>Better cosmetic result (no protruding shoulder)</li>
              <li>More invasive but standard for OSA</li>
            </ul>
          </li>
          <li><strong>Shoulder disarticulation:</strong>
            <ul>
              <li>Removes limb at shoulder joint, preserves scapula</li>
              <li>Less invasive but leaves protruding scapular spine (cosmetic)</li>
              <li>Used in some trauma, distal lesions</li>
            </ul>
          </li>
          <li><strong>Mid-humeral amputation:</strong>
            <ul>
              <li>Rarely done — leaves stump that may have problems</li>
              <li>Reserved for very specific situations</li>
            </ul>
          </li>
        </ol>
        <p><strong>Forelimb amputation sequence (scapulectomy):</strong></p>
        <ol>
          <li>Lateral recumbency, affected limb up</li>
          <li>Skin incision: oval / elliptical around scapula + brachium, extending dorsally to scapular spine</li>
          <li>Identify + ligate large vessels:
            <ul>
              <li>Axillary artery + vein (deep, careful identification)</li>
              <li>Subscapular artery</li>
              <li>External thoracic vessels</li>
              <li>Multiple branches — ligate methodically with double ligature on major vessels (silk or PDS 2-0)</li>
              <li>Vessel sealing devices (LigaSure) very efficient</li>
            </ul>
          </li>
          <li>Divide muscles methodically:
            <ul>
              <li>Trapezius, rhomboideus (along scapular border)</li>
              <li>Brachiocephalicus, omotransversarius</li>
              <li>Latissimus dorsi</li>
              <li>Pectoral muscles</li>
              <li>Serratus ventralis (deep — major attachment)</li>
            </ul>
          </li>
          <li>Identify + transect brachial plexus nerves:
            <ul>
              <li>Sharp transection (NOT crushing) ✨ — reduces neuroma formation</li>
              <li>Allow nerves to retract under muscle</li>
              <li>Some surgeons inject local anesthetic into nerve stumps before transection (controversial benefit)</li>
            </ul>
          </li>
          <li>Free scapula from body wall (separate serratus ventralis)</li>
          <li>Remove specimen (limb + scapula) → submit for histopath with margins</li>
          <li>Hemostasis — meticulous (axillary region bleeds extensively)</li>
          <li>Closure ✨:
            <ul>
              <li>Approximate muscles in layers (3-0 or 2-0 PDS continuous)</li>
              <li>Subcutaneous closure obliterating dead space (3-0 PDS continuous)</li>
              <li>Skin: simple interrupted nylon or staples</li>
              <li>Drain placement (closed-suction Jackson-Pratt) for 3-5 d</li>
            </ul>
          </li>
        </ol>
        <p><strong>Hindlimb amputation options:</strong></p>
        <ol>
          <li><strong>Coxofemoral disarticulation (preferred for proximal tumors) ✨:</strong>
            <ul>
              <li>Removes limb at hip joint, preserves pelvis</li>
              <li>Better cosmetic result</li>
              <li>Standard for OSA proximal femur</li>
            </ul>
          </li>
          <li><strong>Mid-femoral amputation:</strong>
            <ul>
              <li>Used for distal femoral / tibial OSA when adequate margins above tumor</li>
              <li>Leaves stump (less cosmetic but more functional in some cases)</li>
              <li>Wider muscle envelope for closure</li>
            </ul>
          </li>
          <li><strong>Hemipelvectomy (advanced — for very proximal disease):</strong>
            <ul>
              <li>Removes limb + portion of pelvis</li>
              <li>Used for tumors involving pelvis</li>
              <li>More extensive surgery, longer recovery</li>
            </ul>
          </li>
        </ol>
        <p><strong>Hindlimb amputation sequence (coxofemoral disarticulation):</strong></p>
        <ol>
          <li>Lateral recumbency</li>
          <li>Skin incision: elliptical around proximal thigh, extending around hip</li>
          <li>Identify + ligate femoral artery + vein (medial thigh) — major vessels</li>
          <li>Identify + ligate other vessels (deep femoral, lateral femoral circumflex)</li>
          <li>Transect muscles methodically:
            <ul>
              <li>Quadriceps, biceps femoris, semimembranosus, semitendinosus</li>
              <li>Adductors, gracilis</li>
              <li>Gluteal muscles</li>
            </ul>
          </li>
          <li>Identify + transect sciatic nerve (sharp, allow retraction)</li>
          <li>Disarticulate hip joint:
            <ul>
              <li>Incise joint capsule</li>
              <li>Cut round ligament</li>
              <li>Remove femur from acetabulum</li>
            </ul>
          </li>
          <li>Hemostasis</li>
          <li>Closure (similar to forelimb): muscles, SQ, skin in layers, drain placement</li>
        </ol>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>Adequate margins for tumor (1-2 cm beyond visible / palpable extent)</li>
          <li>Sharp transection of nerves (reduces neuroma + phantom pain)</li>
          <li>Meticulous hemostasis</li>
          <li>Tension-free closure with dead-space obliteration</li>
          <li>Drain placement helpful (large dead space)</li>
          <li>Submit for histopath with margins</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication ✨ (multimodal pre-emptive):</strong></p>
        <ul>
          <li>Methadone 0.3-0.5 mg/kg IV/IM</li>
          <li>± Acepromazine 0.01-0.03 mg/kg IM (if cardio-stable)</li>
          <li>Or Dexmedetomidine 3-5 mcg/kg IM + opioid</li>
          <li>Maropitant 1 mg/kg SC</li>
          <li>Gabapentin 10 mg/kg PO 12 h pre-op (some surgeons — pre-emptive analgesia)</li>
        </ul>
        <p><strong>Loco-regional analgesia (HIGHLY recommended ✨):</strong></p>
        <ul>
          <li><strong>Epidural (hindlimb amputation) ✨:</strong>
            <ul>
              <li>Bupivacaine 0.5% — 1 mL/4.5 kg + Preservative-free morphine 0.1 mg/kg</li>
              <li>± Dexmedetomidine 0.5 mcg/kg adjuvant</li>
              <li>18-24 h analgesia ✓</li>
            </ul>
          </li>
          <li><strong>Brachial plexus block (forelimb amputation):</strong>
            <ul>
              <li>Bupivacaine 0.5% — 0.3-0.5 mL/kg into axillary region</li>
              <li>Use neurolocator or ultrasound</li>
              <li>12-18 h analgesia</li>
            </ul>
          </li>
          <li><strong>Surgeon-administered local anesthesia at nerve transection:</strong>
            <ul>
              <li>Inject local anesthetic at nerve stump before transection</li>
              <li>Reduces phantom pain (controversial benefit)</li>
            </ul>
          </li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV titrated</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li><strong>Multimodal CRIs (essential):</strong>
            <ul>
              <li>Fentanyl CRI 5-15 mcg/kg/h ✓</li>
              <li>Lidocaine CRI 30-50 mcg/kg/min</li>
              <li>Ketamine CRI 0.6 mg/kg/h (NMDA antagonist, anti-hyperalgesia, prevents central sensitization ✨)</li>
            </ul>
          </li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Pre-op: Cefazolin 22 mg/kg IV at induction, repeat q90 min</li>
          <li>Post-op: Cephalexin 22 mg/kg PO q12h × 7-10 d (clean-contaminated)</li>
          <li>If oncology / immunocompromised: longer course or based on culture</li>
        </ul>
        <p><strong>Post-op analgesia (intensive multimodal ✨):</strong></p>
        <ul>
          <li>Continue fentanyl CRI 12-24 h post-op</li>
          <li>Ketamine CRI 0.3-0.6 mg/kg/h × 24-48 h post-op (continued)</li>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24-48 h</li>
          <li>Then Buprenorphine 0.02 mg/kg q8h × 3-5 d</li>
          <li><strong>NSAID — start day 1:</strong>
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 7-14 d</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h × 5-7 d</li>
            </ul>
          </li>
          <li><strong>Gabapentin 5-10 mg/kg PO q8-12h × 4-8 weeks ✨</strong> — neuropathic pain coverage critical for amputation</li>
          <li>± Tramadol 2-5 mg/kg PO q8-12h adjunct</li>
          <li>Amantadine 3-5 mg/kg PO q24h × 4-6 weeks (prevents central sensitization, chronic pain)</li>
        </ul>
        <p><strong>Adjuvant chemotherapy (oncology consult):</strong></p>
        <ul>
          <li><strong>OSA — standard of care ✨:</strong>
            <ul>
              <li>Carboplatin 300 mg/m² IV q3 weeks × 4-6 cycles (start 7-14 d post-op)</li>
              <li>Or Doxorubicin 30 mg/m² IV q3 weeks × 4-5 cycles</li>
              <li>Or alternating protocol</li>
              <li>Improves MST from 4 mo (amputation alone) to 10-12 mo</li>
            </ul>
          </li>
          <li>Bisphosphonates (palliative): pamidronate 1-2 mg/kg IV q3-4 weeks (bone pain control)</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-2) — hospitalize:</strong></p>
        <ul>
          <li>ICU monitoring</li>
          <li>Pain control multimodal as above</li>
          <li>Drain management (Jackson-Pratt — measure output q4-6h, remove when &lt; 20 mL/d × 24 h)</li>
          <li>Cold compress to surgical site</li>
          <li>E-collar 100%</li>
          <li><strong>Encourage early ambulation ✨ (KEY for adaptation):</strong>
            <ul>
              <li>Sling support if needed</li>
              <li>Most dogs ambulating within 12-48 h</li>
              <li>Reduces post-op complications + speeds adaptation</li>
            </ul>
          </li>
          <li>Monitor for swelling, bruising, dehiscence</li>
        </ul>
        <p><strong>Day 2-7:</strong></p>
        <ul>
          <li>Discharge typically day 2-4 once eating + ambulating</li>
          <li>Continue antibiotics, NSAID, opioid (transition to PO)</li>
          <li>Continue gabapentin, ketamine if used</li>
          <li>E-collar 100% × 14 d</li>
          <li>Daily wound check</li>
          <li>Restricted activity (leash walks only) 14 d</li>
        </ul>
        <p><strong>Day 7-21:</strong></p>
        <ul>
          <li>Recheck day 10-14 — wound check, suture removal</li>
          <li>Most dogs near-normal ambulation by day 14 ✨</li>
          <li>Continue rehab:
            <ul>
              <li>Strengthening exercises for remaining limbs</li>
              <li>Underwater treadmill ideal</li>
              <li>Build up activity gradually</li>
            </ul>
          </li>
          <li>Continue gabapentin × 4-8 weeks (most surgeons taper around 4 weeks)</li>
        </ul>
        <p><strong>Day 21-42:</strong></p>
        <ul>
          <li>Most dogs adapted well by 4-6 weeks ✓</li>
          <li>Return to normal activity gradual</li>
          <li>Adjuvant chemo started day 7-14 post-op (if OSA)</li>
        </ul>
        <p><strong>Long-term ✨:</strong></p>
        <ul>
          <li><strong>OSA: oncologist follow-up</strong>:
            <ul>
              <li>Chemotherapy as planned</li>
              <li>Recheck thoracic radiographs q2-3 months for met surveillance</li>
              <li>Bisphosphonate consideration for bone pain</li>
            </ul>
          </li>
          <li>Weight management essential (3-leg dog must maintain healthy weight)</li>
          <li>Rehab + strength maintenance</li>
          <li>Joint supplements for remaining limbs</li>
          <li>NSAID for OA in remaining joints (compensatory)</li>
          <li>Watch for: opposite-side joint disease (CCL, hip OA from compensation)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Wound dehiscence ✗</strong>:
            <ul>
              <li>From tension, infection, licking</li>
              <li>Tx: revision, drain placement, antibiotics</li>
            </ul>
          </li>
          <li><strong>Seroma</strong>:
            <ul>
              <li>Common (especially without drain)</li>
              <li>Most resolve with conservative management</li>
              <li>Aspirate if uncomfortable</li>
            </ul>
          </li>
          <li><strong>Hemorrhage</strong>:
            <ul>
              <li>Intra-op: from major vessels (axillary, femoral) — meticulous ligation</li>
              <li>Post-op: usually self-limiting; rare significant</li>
            </ul>
          </li>
          <li><strong>Surgical site infection</strong>:
            <ul>
              <li>3-5%</li>
              <li>Tx: culture-driven antibiotics</li>
            </ul>
          </li>
          <li><strong>Phantom limb pain ✗</strong>:
            <ul>
              <li>Rare in dogs/cats (much lower than humans)</li>
              <li>Tx: gabapentin, amantadine, pregabalin</li>
              <li>Prevention: pre-emptive multimodal analgesia, sharp nerve transection</li>
            </ul>
          </li>
          <li><strong>Neuroma formation</strong>:
            <ul>
              <li>Painful nodule at nerve stump</li>
              <li>Rare clinical significance</li>
              <li>Tx: revision excision rarely needed</li>
            </ul>
          </li>
          <li><strong>Failure to adapt to 3-leg life</strong>:
            <ul>
              <li>5% of cases (usually from compromised remaining limbs)</li>
              <li>Pre-op assessment helps avoid</li>
              <li>Rehab + weight management critical</li>
            </ul>
          </li>
          <li><strong>Compensatory orthopedic disease in remaining limbs</strong>:
            <ul>
              <li>Develops over years</li>
              <li>Joint supplements, NSAID, weight management important</li>
            </ul>
          </li>
          <li><strong>Disease recurrence (especially OSA):</strong>
            <ul>
              <li>Local: rare with proper margins (10-15%)</li>
              <li>Distant metastasis: typical progression</li>
              <li>Lung mets in 90% of OSA without chemo</li>
            </ul>
          </li>
          <li>Chemotherapy complications (if used)</li>
          <li>Post-op anesthetic complications</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Functional adaptation ✓:</strong>
            <ul>
              <li>90-95% of dogs adapt well within 2-4 weeks</li>
              <li>Cats: similar adaptation, even better in many cases</li>
              <li>Owner satisfaction usually high (90%+) — most don't regret</li>
              <li>QOL improvement dramatic if pain was severe pre-op</li>
            </ul>
          </li>
          <li><strong>Disease-specific outcomes:</strong></li>
          <li><strong>Osteosarcoma (OSA) ✗:</strong>
            <ul>
              <li>Amputation alone: MST 3-4 months (lung mets are killer)</li>
              <li>Amputation + carboplatin: MST 10-12 months ✨</li>
              <li>1-year survival with chemo: 35-45%</li>
              <li>2-year survival: 15-20%</li>
              <li>Prognostic factors: alkaline phosphatase, tumor location, presence of mets at staging</li>
            </ul>
          </li>
          <li><strong>Soft tissue sarcoma:</strong>
            <ul>
              <li>Local control with amputation: excellent</li>
              <li>Metastatic potential variable by grade</li>
              <li>Outcomes generally much better than OSA</li>
            </ul>
          </li>
          <li><strong>Mast cell tumor (limb):</strong>
            <ul>
              <li>Excellent local control with amputation</li>
              <li>Outcome based on grade + stage</li>
            </ul>
          </li>
          <li><strong>Trauma indication:</strong>
            <ul>
              <li>Excellent — if other limbs healthy, life-saving + functional outcome</li>
            </ul>
          </li>
          <li><strong>Cat — vaccine-associated sarcoma:</strong>
            <ul>
              <li>Aggressive disease, but amputation may give long-term control if completely resectable</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>Weight management essential (single most important factor for adaptation)</li>
              <li>Compensatory OA in remaining limbs over years</li>
              <li>Joint supplements + rehab maintenance</li>
              <li>Most maintain excellent QOL for years</li>
            </ul>
          </li>
          <li><strong>Mortality:</strong>
            <ul>
              <li>Healthy patient: 1-3%</li>
              <li>OSA patient with paraneoplastic effects: 3-5%</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>"3-leg dog rule" — they don't grieve their limb, owners do</strong> ✨ — 90-95% adapt within 2-4 weeks, owner education + reassurance important<br><br>**OSA without chemo MST 3-4 mo, with chemo 10-12 mo** ✨ — adjuvant carboplatin standard of care<br><br>⚠️ **Pre-op assess remaining limbs** — bilateral hip dysplasia / CCL = poor candidate for hindlimb amputation<br><br>✗ **Multimodal pre-emptive analgesia = essential** — gabapentin + ketamine + epidural/regional + opioid prevents chronic pain syndromes</div>
      `,
    },
  },

  /* ============================================================
     ONCOLOGIC — Mastectomy
  ============================================================ */
  {
    id: 'mastectomy',
    titleEn: 'Mastectomy (Mammary Tumor Surgery)',
    titleTh: 'ผ่าตัดเอาเต้านมออก (เนื้องอกเต้านม)',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'oncologic',
    tags: ['mastectomy', 'mammary tumor', 'mammary chain', 'lumpectomy', 'simple mastectomy', 'regional mastectomy', 'radical mastectomy', 'inguinal lymph node', 'axillary lymph node', 'cat mammary carcinoma'],
    aliases: ['mastectomy', 'mammary tumor removal', 'ผ่าตัดเต้านม', 'ตัดก้อนเต้านม'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Mammary Tumors',
    sections: {
      indications: `
        <ul>
          <li><strong>Mammary tumor ✗</strong> — primary indication
            <ul>
              <li>Most common tumor in intact female dogs ✨</li>
              <li>Dog: 50% benign, 50% malignant (overall)</li>
              <li>Cat: ~ 90% malignant (much more aggressive than dog) ✗</li>
            </ul>
          </li>
          <li><strong>Spaying status influences risk dramatically (dog) ✨:</strong>
            <ul>
              <li>Spay before 1st estrus: 99% reduction in mammary tumor risk</li>
              <li>Spay before 2nd estrus: 92% reduction</li>
              <li>Spay before 2.5 yr: 26% reduction</li>
              <li>Spay after 2.5 yr: minimal protective effect</li>
            </ul>
          </li>
          <li><strong>Indications for surgery:</strong>
            <ul>
              <li>ANY palpable mammary mass should be excised + biopsied ✨</li>
              <li>Earlier removal = better outcome (smaller tumor, less met risk)</li>
              <li>Multiple masses common — address all in one surgery if possible</li>
              <li>Ulcerated mass</li>
              <li>Rapidly growing mass</li>
              <li>Inflammatory carcinoma (palliative care consideration — surgery rarely beneficial)</li>
            </ul>
          </li>
          <li><strong>Concurrent OHE (intact dog) ✨:</strong>
            <ul>
              <li>Controversial benefit at time of mammary tumor surgery (some studies show benefit, others not)</li>
              <li>Removes hormonal stimulus</li>
              <li>Many surgeons recommend, especially if young</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Disseminated metastatic disease (palliative consideration vs aggressive surgery):
            <ul>
              <li>Pulmonary mets visible on radiographs (especially cat)</li>
              <li>Bone, liver, other distant mets</li>
            </ul>
          </li>
          <li>Inflammatory mammary carcinoma:
            <ul>
              <li>Locally invasive, often hypercalcemic, DIC</li>
              <li>Surgery rarely helpful (aggressive disease)</li>
              <li>Palliative options: NSAID, sometimes RT</li>
            </ul>
          </li>
          <li>Severe systemic illness</li>
          <li>Coagulopathy</li>
          <li>Owner unable to provide post-op care</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Workup ✨:</strong></p>
        <ul>
          <li><strong>Physical exam:</strong>
            <ul>
              <li>Examine ALL mammary glands (dogs have 5 pairs, cats 4 pairs):
                <ul>
                  <li>M1 (cranial thoracic), M2 (caudal thoracic), M3 (cranial abdominal), M4 (caudal abdominal), M5 (inguinal)</li>
                </ul>
              </li>
              <li>Document: location, size, fixation, ulceration, satellite nodules</li>
              <li>Palpate regional lymph nodes:
                <ul>
                  <li>Axillary (drains M1, M2)</li>
                  <li>Inguinal (drains M4, M5)</li>
                  <li>Sublumbar (drains caudal abdominal)</li>
                </ul>
              </li>
              <li>Both mammary chains (often bilateral disease)</li>
            </ul>
          </li>
          <li><strong>FNA cytology (controversial for mammary tumors):</strong>
            <ul>
              <li>Some surgeons skip — surgery + histopath is definitive anyway</li>
              <li>Helpful if uncertain about benign vs malignant pre-op (changes margin decision)</li>
              <li>Can rule out other diagnoses (mast cell tumor, inflammatory)</li>
            </ul>
          </li>
          <li><strong>Staging ✨:</strong>
            <ul>
              <li>3-view thoracic radiographs MANDATORY (lung mets in 25-50% of malignant cases at presentation in cat) ✨</li>
              <li>Abdominal US (assess lymph nodes, screen abdominal mets)</li>
              <li>FNA regional LN (mandibular, axillary, inguinal)</li>
              <li>CBC, biochem, UA, coag</li>
              <li>Consider thoracic CT in cat (more sensitive than rads)</li>
            </ul>
          </li>
        </ul>
        <p><strong>2. Surgical planning ✨:</strong></p>
        <ul>
          <li>Decide extent based on:
            <ul>
              <li>Tumor type (benign vs malignant — but often unknown pre-op)</li>
              <li>Number + location of masses</li>
              <li>Body condition</li>
              <li>Concurrent OHE plan</li>
            </ul>
          </li>
          <li>Options:
            <ul>
              <li><strong>Lumpectomy / nodulectomy:</strong> single small mass, presumed benign, just remove the mass</li>
              <li><strong>Simple mastectomy:</strong> single mass, remove entire affected gland</li>
              <li><strong>Regional mastectomy:</strong> remove tumor gland + adjacent glands (e.g., M4 + M5 + inguinal LN)</li>
              <li><strong>Unilateral chain mastectomy:</strong> remove entire mammary chain on affected side ✨</li>
              <li><strong>Bilateral chain mastectomy:</strong> remove both chains (cat — preferred), staged in dog</li>
            </ul>
          </li>
          <li><strong>Cat ✨:</strong> bilateral chain mastectomy strongly recommended (90% malignant, multifocal, high recurrence on contralateral side)</li>
          <li><strong>Dog:</strong> unilateral chain mastectomy reasonable for most cases; staged bilateral if both chains affected</li>
        </ul>
        <p><strong>3. Pre-op preparation:</strong></p>
        <ul>
          <li>Pre-emptive analgesia: methadone + maropitant</li>
          <li>Antibiotics: Cefazolin 22 mg/kg IV at induction</li>
          <li>Wide clip + scrub of ventral abdomen + thorax (for chain mastectomy)</li>
          <li>Position: dorsal recumbency</li>
          <li>If concurrent OHE: clipped + prepped accordingly</li>
        </ul>
      `,
      technique: `
        <p><strong>Single mass excision (simple mastectomy):</strong></p>
        <ol>
          <li>Elliptical incision around mass with 1-2 cm grossly normal margin</li>
          <li>Excise affected gland + overlying skin</li>
          <li>Identify + ligate vessels supplying gland</li>
          <li>Submit specimen with margins ink-marked</li>
          <li>Closure: SQ + skin in routine layers</li>
        </ol>
        <p><strong>Unilateral chain mastectomy ✨ (most common dog procedure):</strong></p>
        <ol>
          <li>Skin incision: elliptical, encompassing all 5 mammary glands on affected side
            <ul>
              <li>From mid-thorax cranially to inguinal fold caudally</li>
              <li>Lateral margin: well outside palpable masses</li>
              <li>Medial margin: ventral midline</li>
            </ul>
          </li>
          <li>Excise skin + SQ + entire mammary chain en-bloc</li>
          <li>Identify + ligate vessels methodically:
            <ul>
              <li>Internal thoracic arteries (cranially)</li>
              <li>Lateral thoracic vessels</li>
              <li>Cranial superficial epigastric vessels</li>
              <li>Caudal superficial epigastric vessels (caudally)</li>
              <li>External pudendal vessels (inguinal area)</li>
              <li>Use vessel sealing devices for efficiency</li>
            </ul>
          </li>
          <li><strong>Inguinal LN ✨:</strong> remove with M5 mammary tissue (it's anatomically adjacent)</li>
          <li><strong>Axillary LN:</strong> only remove if enlarged / FNA positive (separate dissection)</li>
          <li>Hemostasis throughout — meticulous</li>
          <li>Closure ✨:
            <ul>
              <li>Close in layers: SQ deep (3-0 PDS continuous), then SQ superficial (3-0 PDS continuous), then skin</li>
              <li>Tension-distribution sutures for large defects (walking sutures)</li>
              <li>Reduce tension by undermining adjacent skin</li>
              <li>Skin: simple interrupted nylon or staples</li>
              <li>Drain placement (closed-suction Jackson-Pratt) if large defect / fluid pocket expected</li>
            </ul>
          </li>
        </ol>
        <p><strong>Bilateral chain mastectomy (cat / extensive disease):</strong></p>
        <ol>
          <li>Stage 1: one side first (allow healing)</li>
          <li>Stage 2: opposite side 4-8 weeks later</li>
          <li>Or single procedure (if patient tolerates):
            <ul>
              <li>Massive surgery, longer anesthesia time</li>
              <li>Skin closure can be tight (need careful planning, sometimes staged anyway)</li>
            </ul>
          </li>
          <li>Submit each chain separately for histopath</li>
        </ol>
        <p><strong>Concurrent OHE ✨:</strong></p>
        <ul>
          <li>Often performed at time of mastectomy in intact dogs</li>
          <li>Add midline incision (extension from mastectomy incision) or separate ventral midline</li>
          <li>Standard OHE technique</li>
          <li>Timing: at time of mastectomy or before (best benefit if young)</li>
        </ul>
        <p><strong>Critical principles:</strong></p>
        <ul>
          <li>Margins: 1-2 cm grossly normal (wider for highly suspicious / large tumor)</li>
          <li>Submit with margins ink-marked (orientation suture)</li>
          <li>Atraumatic tissue handling — don't squeeze tumor (cell shedding)</li>
          <li>Hemostasis essential</li>
          <li>Tension-free closure (large defect closure can be challenging)</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.3-0.5 mg/kg IM/IV</li>
          <li>± Acepromazine 0.01-0.03 mg/kg IM</li>
          <li>Or Dexmedetomidine 3-5 mcg/kg IM + opioid</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Loco-regional analgesia:</strong></p>
        <ul>
          <li>Local infiltration of incision area: lidocaine + bupivacaine line block (max 4 mg/kg lidocaine, 2 mg/kg bupivacaine)</li>
          <li>± Epidural for caudal surgery (helpful for inguinal LN dissection)</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 5-10 mcg/kg/h</li>
          <li>± Lidocaine CRI 25-50 mcg/kg/min</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Pre-op: Cefazolin 22 mg/kg IV at induction, repeat q90 min</li>
          <li>Post-op: Cephalexin 22 mg/kg PO q12h × 5-7 d (if extensive surgery)</li>
        </ul>
        <p><strong>Post-op analgesia:</strong></p>
        <ul>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24 h</li>
          <li>Then Buprenorphine 0.02 mg/kg q8h × 2-3 d</li>
          <li>NSAID — start day 1:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 7-10 d</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h × 5-7 d</li>
              <li>Cat: robenacoxib 1-2 mg/kg PO/SC q24h × 3-6 d</li>
            </ul>
          </li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 7-14 d</li>
          <li>± Tramadol adjunct</li>
        </ul>
        <p><strong>Adjuvant therapy ✨ (oncology consult):</strong></p>
        <ul>
          <li>Histopath determines need for adjuvant Tx</li>
          <li><strong>Cat (most malignant):</strong>
            <ul>
              <li>Doxorubicin 25-30 mg/m² IV q3 weeks × 4-5 cycles standard</li>
              <li>Or alternative protocols (carboplatin, mitoxantrone)</li>
              <li>Improves DFS 1.5-2× compared to surgery alone</li>
            </ul>
          </li>
          <li><strong>Dog (variable based on grade + stage):</strong>
            <ul>
              <li>Low-grade carcinoma: surgery alone often sufficient</li>
              <li>High-grade or with LN metastasis: chemo (doxorubicin, carboplatin)</li>
              <li>Inflammatory carcinoma: piroxicam 0.3 mg/kg PO q24h palliative</li>
            </ul>
          </li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-2):</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Pain control multimodal</li>
          <li>Drain management (Jackson-Pratt — output q4-6h, remove when &lt; 20 mL/d × 24 h)</li>
          <li>Cold compress to surgical site (5-10 min q4-6h × 48 h)</li>
          <li>E-collar 100%</li>
          <li>Restricted activity</li>
          <li>Discharge typically day 1-3 once eating + comfortable</li>
        </ul>
        <p><strong>Day 1-7:</strong></p>
        <ul>
          <li>Continue antibiotics, NSAID, opioid (transition to PO)</li>
          <li>Daily wound check by owner — photos can help</li>
          <li>Watch for: dehiscence, seroma, infection</li>
          <li>E-collar 100% × 14 d</li>
          <li>Restricted activity 14 d</li>
          <li>Drain removal day 3-5</li>
        </ul>
        <p><strong>Day 7-14:</strong></p>
        <ul>
          <li>Recheck day 10-14 — wound check, suture removal</li>
          <li>Continue NSAID until incision healed</li>
          <li>Begin gradual return to activity</li>
        </ul>
        <p><strong>Histopath review (CRITICAL recheck) ✨:</strong></p>
        <ul>
          <li>Schedule recheck specifically to discuss histopath</li>
          <li>Assess: tumor type, grade, margins (clean vs dirty), LN status, lymphovascular invasion</li>
          <li>Decision tree:
            <ul>
              <li>Benign (50% of dogs): no further Tx, monitoring</li>
              <li>Low-grade malignant: monitoring, recheck schedule</li>
              <li>High-grade malignant: oncologist referral for adjuvant chemo</li>
              <li>Incomplete margins: re-excision or RT discussion</li>
            </ul>
          </li>
        </ul>
        <p><strong>Long-term ✨:</strong></p>
        <ul>
          <li>Recheck schedule:
            <ul>
              <li>q3 mo × 1-2 yr (high-risk cases)</li>
              <li>q6 mo × 2-3 yr (low-risk)</li>
              <li>Annual after 3 yr if no recurrence</li>
            </ul>
          </li>
          <li>Examine: surgical site, contralateral mammary chain, LN, chest auscultation</li>
          <li>Thoracic radiographs at recheck (mets surveillance)</li>
          <li>Spay if intact (already done usually with concurrent OHE)</li>
          <li>Owner education: monthly self-exam of remaining mammary tissue</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Dehiscence ✗</strong>:
            <ul>
              <li>Most common with extensive surgery, tension closure</li>
              <li>Tx: revision, second-intention healing for small areas, drain placement</li>
            </ul>
          </li>
          <li><strong>Seroma</strong>:
            <ul>
              <li>Very common (large dead space)</li>
              <li>Most resolve with conservative management</li>
              <li>Drain prevents in many cases</li>
              <li>Aspirate if uncomfortable</li>
            </ul>
          </li>
          <li>Surgical site infection (3-7%)</li>
          <li>Hemorrhage (intra-op or post-op)</li>
          <li>Skin necrosis (excessive tension, poor blood supply)</li>
          <li><strong>Local recurrence ✗</strong>:
            <ul>
              <li>From incomplete margins or aggressive tumor</li>
              <li>Cat: 30-50% recurrence on contralateral chain if not removed</li>
              <li>Dog: lower with adequate margins</li>
              <li>Tx: re-excision, RT, possible chemo</li>
            </ul>
          </li>
          <li><strong>Distant metastasis</strong>:
            <ul>
              <li>Lung most common</li>
              <li>Liver, bone, abdominal LN</li>
              <li>Cat: high rate (50-80% develop within 1 yr)</li>
              <li>Dog: variable based on grade</li>
            </ul>
          </li>
          <li><strong>New mammary tumors on contralateral side:</strong>
            <ul>
              <li>Common in dogs (multifocal disease)</li>
              <li>Rationale for bilateral chain mastectomy in cat</li>
              <li>Continued monitoring essential</li>
            </ul>
          </li>
          <li>Wound contracture / scarring</li>
          <li>Anesthetic complications</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Dog mammary tumors ✨:</strong></li>
          <li><strong>Benign (50%):</strong>
            <ul>
              <li>Cured by surgery ✓</li>
              <li>QOL normal</li>
              <li>Recurrence at site: low</li>
              <li>New tumor at other site: 30-50% over years (multifocal disease)</li>
            </ul>
          </li>
          <li><strong>Malignant (low-grade):</strong>
            <ul>
              <li>Excellent local control with adequate margins</li>
              <li>MST &gt; 2-3 years</li>
              <li>Most don't develop distant mets</li>
            </ul>
          </li>
          <li><strong>Malignant (high-grade) ✗:</strong>
            <ul>
              <li>MST 6-12 months</li>
              <li>Distant mets common (50-70%)</li>
              <li>Adjuvant chemo improves MST somewhat</li>
            </ul>
          </li>
          <li><strong>Inflammatory mammary carcinoma ✗:</strong>
            <ul>
              <li>Aggressive, poor prognosis</li>
              <li>MST 1-3 months even with palliative care</li>
              <li>Surgery rarely beneficial</li>
            </ul>
          </li>
          <li><strong>Cat mammary carcinoma ✗ (much worse than dog):</strong>
            <ul>
              <li>~ 90% malignant</li>
              <li>Bilateral chain mastectomy + chemo: MST 12-24 months ✨</li>
              <li>Surgery alone: MST 6-12 months</li>
              <li>Distant mets common (lung)</li>
              <li>Tumor size matters: &lt; 2 cm best, &gt; 3 cm poor</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>Dog: continued surveillance for new tumors lifelong</li>
              <li>Cat: aggressive surveillance (recurrent disease likely)</li>
              <li>Concurrent OHE recommended (controversial benefit but reasonable)</li>
              <li>QOL excellent post-recovery</li>
            </ul>
          </li>
          <li><strong>Mortality (peri-operative):</strong>
            <ul>
              <li>Healthy patient: 1-3%</li>
              <li>Extensive surgery + comorbidities: 3-5%</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Cat mammary tumor = bilateral chain mastectomy</strong> ✨ — 90% malignant, multifocal disease pattern<br><br>**Dog mammary tumor = 50% benign / 50% malignant** — surgery + histopath confirms<br><br>⚠️ **Spay before 1st estrus = 99% reduction in mammary tumor risk** — best prevention<br><br>✗ **Inflammatory mammary carcinoma = palliative** — aggressive disease, surgery rarely helpful</div>
      `,
    },
  },

  /* ============================================================
     RECONSTRUCTIVE — Skin flaps
  ============================================================ */
  {
    id: 'skin-flaps',
    titleEn: 'Skin Flaps (Reconstructive Principles)',
    titleTh: 'การทำ skin flap — หลักการ reconstructive',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'reconstructive',
    tags: ['skin flap', 'subdermal plexus flap', 'advancement flap', 'rotation flap', 'transposition flap', 'axial pattern flap', 'caudal superficial epigastric', 'thoracodorsal', 'omocervical', 'deep circumflex iliac'],
    aliases: ['skin flap', 'reconstructive surgery', 'tissue flap', 'flap surgery', 'ตกแต่งแผล', 'ปิดแผลด้วย flap'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Skin Reconstruction',
    sections: {
      indications: `
        <ul>
          <li><strong>Large skin defects unable to close primarily ✗</strong>:
            <ul>
              <li>Mass excision with wide margins (MCT, STS, SCC)</li>
              <li>Trauma (degloving, severe lacerations, bite wounds)</li>
              <li>Burns (chemical, thermal, electrical)</li>
              <li>Necrotic tissue debridement</li>
              <li>Congenital defects</li>
            </ul>
          </li>
          <li><strong>Defect locations commonly requiring flaps ✨:</strong>
            <ul>
              <li>Distal limb (limited skin elasticity)</li>
              <li>Caudal abdomen (after large mass excision, mastectomy revision)</li>
              <li>Lateral thorax</li>
              <li>Caudal trunk / inguinal area</li>
              <li>Head + face (cosmetic concerns)</li>
            </ul>
          </li>
          <li><strong>Flap classification (drives surgical decision) ✨:</strong>
            <ul>
              <li><strong>Local subdermal plexus flaps</strong> — random pattern, blood supply from random subdermal plexus
                <ul>
                  <li>Advancement flap: tissue moved straight</li>
                  <li>Rotation flap: tissue rotated around a pivot point</li>
                  <li>Transposition flap: tissue rotated + advanced</li>
                  <li>Length-to-width ratio limited (~ 2-3:1 for safety)</li>
                </ul>
              </li>
              <li><strong>Axial pattern flaps</strong> — based on named direct cutaneous artery + vein (much more reliable, longer)
                <ul>
                  <li>Caudal superficial epigastric (CSE) — covers caudal abdomen, inguinal, prepuce, distal hindlimb medial ✨</li>
                  <li>Thoracodorsal — covers shoulder, axilla, lateral thorax</li>
                  <li>Omocervical — covers shoulder, neck, head</li>
                  <li>Deep circumflex iliac (dorsal + ventral branches) — covers lateral thorax, flank, dorsum</li>
                  <li>Caudal auricular — covers ear, side of head</li>
                  <li>Genicular — covers stifle, distal limb</li>
                  <li>Reverse saphenous conduit — covers distal hindlimb</li>
                </ul>
              </li>
              <li><strong>Distant flaps</strong> — rarely used (microvascular free flaps in advanced practice)</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Active infection at flap site (treat first)</li>
          <li>Compromised blood supply (limb ischemia, severe edema)</li>
          <li>Inability to obliterate dead space at recipient site</li>
          <li>Patient unable to tolerate prolonged anesthesia</li>
          <li>Severely contaminated wound (consider 2nd intention healing or staged approach)</li>
          <li>Severe systemic illness (poor wound healing — diabetes, hypothyroid, hyperadrenocorticism)</li>
          <li>Owner unable to provide intensive bandage care + e-collar compliance</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Defect assessment ✨:</strong></p>
        <ul>
          <li>Measure defect dimensions (length, width, depth)</li>
          <li>Assess skin tension lines around defect</li>
          <li>Tissue viability around margins</li>
          <li>Contamination level — clean, clean-contaminated, contaminated, dirty</li>
          <li>Identify any exposed bone, tendons, vessels needing coverage</li>
          <li>Photograph for planning + documentation</li>
        </ul>
        <p><strong>2. Flap selection ✨:</strong></p>
        <ul>
          <li>Defect location dictates which flap reaches:
            <ul>
              <li>Distal limb: reverse saphenous conduit, genicular flap, free skin graft</li>
              <li>Lateral thorax: thoracodorsal, deep circumflex iliac</li>
              <li>Caudal abdomen / inguinal / prepuce: caudal superficial epigastric (CSE) — workhorse flap ✨</li>
              <li>Shoulder / neck: omocervical, thoracodorsal</li>
              <li>Head / ear: caudal auricular</li>
            </ul>
          </li>
          <li>Defect size:
            <ul>
              <li>Small &lt; 5 cm: subdermal plexus flap</li>
              <li>Medium-large: axial pattern flap (more reliable)</li>
              <li>Massive: combined flap + graft, staged reconstruction</li>
            </ul>
          </li>
          <li>Donor site availability:
            <ul>
              <li>Loose skin areas (cervical, lateral thoracic, flank) = preferred donor</li>
              <li>Tense areas (distal limb) = avoid as donor</li>
            </ul>
          </li>
        </ul>
        <p><strong>3. Pre-op preparation:</strong></p>
        <ul>
          <li>Wide clip + scrub — donor + recipient sites</li>
          <li>Mark planned flap on patient pre-op (skin marker — design out flap dimensions)</li>
          <li>Practice the "swing" — confirm flap reaches defect without tension before incising ✨</li>
          <li>Pre-op antibiotics: Cefazolin 22 mg/kg IV at induction</li>
          <li>Methadone + maropitant pre-medication</li>
          <li>Position based on flap location</li>
        </ul>
        <p><strong>4. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA</li>
          <li>Coag panel</li>
          <li>Wound bed preparation (granulation, infection-free) before definitive reconstruction</li>
        </ul>
      `,
      technique: `
        <p><strong>A. Subdermal Plexus Flap — Advancement (single pedicle):</strong></p>
        <ol>
          <li>Mark flap rectangular shape, base wider than length (1:2 to 1:3 ratio max)</li>
          <li>Incise 3 sides of rectangle</li>
          <li>Undermine SQ tissue (preserve subdermal plexus on flap)</li>
          <li>Advance flap into defect</li>
          <li>"Burow's triangles" excised at base if needed (relieve tension)</li>
          <li>Closure: 3-0 PDS deep, 3-0 nylon skin</li>
        </ol>
        <p><strong>B. Subdermal Plexus Flap — Rotation:</strong></p>
        <ol>
          <li>Curved incision adjacent to defect (semicircular)</li>
          <li>Pivot point at one end of curve</li>
          <li>Undermine SQ</li>
          <li>Rotate flap into defect</li>
          <li>Donor site closes primarily after rotation</li>
        </ol>
        <p><strong>C. Subdermal Plexus Flap — Transposition:</strong></p>
        <ol>
          <li>Rectangular flap adjacent to defect at angle (typically 45-90°)</li>
          <li>Incise + undermine</li>
          <li>Rotate + advance into defect</li>
          <li>Donor site closes primarily</li>
        </ol>
        <p><strong>D. Caudal Superficial Epigastric (CSE) Axial Pattern Flap ✨ (most useful — covers caudal trunk, inguinal, prepuce, distal hindlimb medial):</strong></p>
        <ol>
          <li>Identify caudal superficial epigastric artery + vein (palpable as branch of external pudendal vessels at caudal abdomen)</li>
          <li>Mark flap dimensions:
            <ul>
              <li>Base: 2-3 cm lateral to vessel origin</li>
              <li>Width: 4-5 cm wide</li>
              <li>Length: extends along last 4-5 mammary glands (M2-M5 area)</li>
              <li>Can extend to umbilicus or even cranially in larger dogs</li>
            </ul>
          </li>
          <li>Incise lateral border, dissect down to abdominal fascia</li>
          <li>Stay deep to avoid disrupting vessel</li>
          <li>Continue to medial border</li>
          <li>Undermine entire flap, INCLUDING the named artery + vein in the pedicle</li>
          <li>Rotate flap to recipient site — can reach perineum, scrotum, distal hindlimb medial side, sometimes contralateral side</li>
          <li>Suture to recipient defect:
            <ul>
              <li>SQ: 3-0 PDS continuous obliterating dead space</li>
              <li>Skin: 3-0 nylon simple interrupted</li>
            </ul>
          </li>
          <li>Donor site closes primarily (loose abdominal skin)</li>
          <li>Drain placement (Penrose or closed-suction) for first 3-5 d</li>
        </ol>
        <p><strong>E. Thoracodorsal Axial Pattern Flap (covers shoulder, axilla, lateral thorax):</strong></p>
        <ol>
          <li>Identify thoracodorsal vessels (deep to latissimus dorsi muscle border)</li>
          <li>Mark flap with base centered on caudal scapular spine</li>
          <li>Length: extends caudally + dorsally over latissimus dorsi area</li>
          <li>Dissect deep to cutaneous trunci muscle (preserve named vessels)</li>
          <li>Rotate flap toward recipient site</li>
          <li>Suture as described</li>
        </ol>
        <p><strong>F. Mesh expansion of flap (if defect larger than flap):</strong></p>
        <ul>
          <li>Make multiple staggered relief incisions on flap (like meshed graft)</li>
          <li>Allows flap to expand 30-50%</li>
          <li>Useful when "almost reaches" but tension noted</li>
        </ul>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>"Don't burn bridges" — design flap so failure leaves option for revision</li>
          <li>Tension-free closure essential — tension = vascular compromise = necrosis</li>
          <li>Atraumatic tissue handling — gentle retraction, no crushing</li>
          <li>Hemostasis without compromising flap blood supply (ligate skin edge vessels but preserve subdermal plexus)</li>
          <li>Drain dead space (closed-suction preferred over Penrose)</li>
          <li>Bandage protection — but not so tight it compresses flap</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.2-0.4 mg/kg IM/IV</li>
          <li>± Acepromazine low dose</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol 2-4 mg/kg IV</li>
          <li>Or Alfaxalone 1-2 mg/kg IV</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 5-10 mcg/kg/h</li>
          <li>± Lidocaine CRI 25-50 mcg/kg/min</li>
        </ul>
        <p><strong>Local infiltration (helpful):</strong></p>
        <ul>
          <li>Lidocaine + bupivacaine line block at incision lines (max 4 mg/kg lidocaine, 2 mg/kg bupivacaine)</li>
          <li>NOT into flap base / pedicle (avoid vessel compromise)</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Pre-op: Cefazolin 22 mg/kg IV at induction, repeat q90 min</li>
          <li>Post-op:
            <ul>
              <li>Clean wound: Cephalexin 22 mg/kg PO q12h × 5-7 d</li>
              <li>Contaminated: Amoxicillin-clavulanate 12.5 mg/kg PO q12h × 7-10 d</li>
              <li>Or based on culture if pre-existing infection</li>
            </ul>
          </li>
        </ul>
        <p><strong>Vasoactive considerations ✨:</strong></p>
        <ul>
          <li>Avoid:
            <ul>
              <li>Vasoconstrictive drugs (epinephrine in local — DON'T use near flap pedicle)</li>
              <li>α-2 agonists in high doses (vasoconstriction)</li>
              <li>Smoking environments (owner education — nicotine ↓ flap perfusion in human studies)</li>
            </ul>
          </li>
          <li>Maintain BP intra-op (flap perfusion depends on systemic perfusion)</li>
          <li>Adequate fluid therapy</li>
        </ul>
        <p><strong>Analgesia post-op:</strong></p>
        <ul>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24 h</li>
          <li>Then Buprenorphine 0.02 mg/kg q8h × 2-3 d</li>
          <li>NSAID — start day 1:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 7-10 d</li>
              <li>Meloxicam 0.1 mg/kg SC then 0.05 mg/kg PO q24h × 5-7 d</li>
            </ul>
          </li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 7-14 d</li>
        </ul>
        <p><strong>Wound healing support:</strong></p>
        <ul>
          <li>Adequate nutrition (high-protein diet)</li>
          <li>Address underlying systemic disease (treat hypothyroid, control diabetes)</li>
          <li>Vitamin C / zinc supplementation (some surgeons — limited evidence)</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (0-72h) — CRITICAL surveillance ✨:</strong></p>
        <ul>
          <li><strong>Flap viability monitoring (q4-6h):</strong>
            <ul>
              <li>Color: pink = viable, blue/purple = venous congestion (concern), white = arterial compromise (urgent), black = necrosis</li>
              <li>Temperature: warm = viable, cool = poor perfusion</li>
              <li>Capillary refill: prick with needle — bleeding = perfused</li>
              <li>Document with photos at each check</li>
            </ul>
          </li>
          <li>Drain management:
            <ul>
              <li>Closed-suction (Jackson-Pratt) — measure output q4-6h</li>
              <li>Penrose — change pad, monitor</li>
              <li>Remove when output &lt; 20 mL/d × 24 h (typically day 3-5)</li>
            </ul>
          </li>
          <li>Bandaging (non-constrictive):
            <ul>
              <li>Light protective bandage</li>
              <li>NOT compression (compromises flap)</li>
              <li>Window for inspection</li>
            </ul>
          </li>
          <li>E-collar 100%</li>
          <li>Strict cage rest</li>
          <li>Pain control multimodal</li>
          <li>Cool compress to surrounding area (NOT directly on flap initially — vasoconstriction)</li>
        </ul>
        <p><strong>Day 3-7:</strong></p>
        <ul>
          <li>Continued flap monitoring</li>
          <li>Drain removal day 3-5</li>
          <li>Discharge typically day 3-7 once flap stable</li>
          <li>Daily wound check at home (bandage changes per protocol)</li>
          <li>Continue antibiotics, NSAID, opioid (transition to PO)</li>
          <li>Restricted activity</li>
        </ul>
        <p><strong>Day 7-14:</strong></p>
        <ul>
          <li>Recheck day 7-10 — wound check, flap assessment</li>
          <li>By day 7-10: flap typically well-vascularized from recipient bed</li>
          <li>Suture removal day 10-14</li>
        </ul>
        <p><strong>Day 14-21:</strong></p>
        <ul>
          <li>Bandage typically discontinued by day 14 (varies)</li>
          <li>Gradual return to activity</li>
          <li>Final cosmetic outcome assessable by 4-6 weeks</li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Hair regrowth typically returns over weeks-months</li>
          <li>Flap may have different texture / hair direction (cosmetic)</li>
          <li>Most patients have excellent long-term function ✓</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Flap necrosis ✗</strong> — most feared:
            <ul>
              <li>Partial necrosis (distal tip): 10-20% in subdermal plexus flaps, 5-10% in axial pattern</li>
              <li>Total necrosis: 1-5% with proper technique</li>
              <li>Causes: tension, kinking, twisting of pedicle, infection, length:width ratio exceeded</li>
              <li>Tx:
                <ul>
                  <li>Partial: debride necrotic edge, allow 2nd intention healing or revision</li>
                  <li>Total: complete flap loss — defect requires alternative reconstruction</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Seroma:</strong>
            <ul>
              <li>Common in flaps with significant dead space</li>
              <li>Prevention: drain placement</li>
              <li>Tx: aspirate, ± compression, occasionally drain replacement</li>
            </ul>
          </li>
          <li><strong>Surgical site infection</strong>:
            <ul>
              <li>3-7%, higher with contaminated original wound</li>
              <li>Tx: culture, antibiotics, drainage</li>
            </ul>
          </li>
          <li>Wound dehiscence (excessive tension, infection, licking)</li>
          <li>Hematoma</li>
          <li>Cosmetic concerns (hair direction differences, color difference)</li>
          <li>Self-trauma (e-collar failure)</li>
          <li>Persistent serous drainage</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Properly planned + executed flap ✓:</strong>
            <ul>
              <li>Subdermal plexus flap: 80-95% complete success</li>
              <li>Axial pattern flap: 90-95% complete success</li>
              <li>Mesh expansion: similar success when properly used</li>
            </ul>
          </li>
          <li><strong>Caudal superficial epigastric (CSE) ✨ — most reliable:</strong>
            <ul>
              <li>One of most reliable flaps in vet medicine</li>
              <li>95%+ success with proper technique</li>
              <li>Can cover large defects in caudal trunk, distal hindlimb</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>Most flaps have excellent functional outcome</li>
              <li>Cosmetic — usually acceptable, some hair direction differences</li>
              <li>Lifelong (unless underlying disease — recurrent neoplasia)</li>
            </ul>
          </li>
          <li><strong>Mortality:</strong>
            <ul>
              <li>Healthy patient: &lt; 1%</li>
              <li>Failed flap requiring revision: low mortality</li>
            </ul>
          </li>
          <li><strong>Comparison with skin grafts:</strong>
            <ul>
              <li>Flaps: better cosmetic, more reliable in many locations</li>
              <li>Grafts: useful when flap not reachable (distal limb)</li>
              <li>Both have role in reconstructive surgery</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Plan flap pre-op</strong> ✨ — measure defect, design flap, "swing" practice before incising. "Don't burn bridges" — preserve revision options<br><br>**CSE flap = workhorse for caudal trunk + distal hindlimb medial** ✓ — most reliable axial pattern flap in vet medicine<br><br>⚠️ **Flap viability check q4-6h × 72h post-op** — color + temperature + capillary refill. Early intervention saves flaps<br><br>✗ **Tension = death** — vascular compromise = necrosis. Length:width ratio limits, undermining adjacent tissue, mesh expansion all help</div>
      `,
    },
  },

  /* ============================================================
     RECONSTRUCTIVE — Skin grafts
  ============================================================ */
  {
    id: 'skin-grafts',
    titleEn: 'Skin Grafts (Free Mesh Graft)',
    titleTh: 'การปลูกถ่ายผิวหนัง — Mesh free graft',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'reconstructive',
    tags: ['skin graft', 'free graft', 'mesh graft', 'full-thickness graft', 'split-thickness graft', 'autograft', 'graft take', 'plasmatic imbibition', 'inosculation', 'distal limb wound'],
    aliases: ['skin graft', 'mesh graft', 'free graft', 'ปลูกผิวหนัง', 'ลอกผิวหนังปะ'],
    source: 'Tobias & Johnston Vol 1 · Ch. on Skin Grafts',
    sections: {
      indications: `
        <ul>
          <li><strong>Large skin defects unable to close with flaps ✗</strong>:
            <ul>
              <li>Distal limb defects (most common indication ✨)
                <ul>
                  <li>Limited skin elasticity below the elbow / stifle</li>
                  <li>Few flap options for distal extremities</li>
                </ul>
              </li>
              <li>Large body wall defects after extensive resection</li>
              <li>Burns covering large area</li>
              <li>Failed flap reconstruction</li>
              <li>Wounds on areas without adequate flap donor</li>
            </ul>
          </li>
          <li><strong>Granulating wound bed ready for grafting ✨:</strong>
            <ul>
              <li>Healthy red granulation tissue</li>
              <li>No infection (cytology + culture confirmed clean)</li>
              <li>No necrotic tissue, foreign material, exposed bone/tendon (these need coverage with vascular tissue first)</li>
              <li>Typically takes 7-14 d of wound preparation before grafting</li>
            </ul>
          </li>
          <li><strong>Types of grafts ✨:</strong>
            <ul>
              <li><strong>Full-thickness mesh graft (preferred in vet medicine ✓):</strong>
                <ul>
                  <li>Includes epidermis + entire dermis</li>
                  <li>Better cosmetic outcome, more durable</li>
                  <li>Mesh allows fluid drainage + expansion (cover larger defect)</li>
                  <li>30-50% expansion possible</li>
                </ul>
              </li>
              <li><strong>Split-thickness graft</strong>: epidermis + partial dermis
                <ul>
                  <li>Less durable, more contracture</li>
                  <li>Requires special equipment (dermatome)</li>
                  <li>Less common in vet medicine</li>
                </ul>
              </li>
              <li><strong>Punch graft / pinch graft</strong>:
                <ul>
                  <li>Multiple small grafts placed at intervals on bed</li>
                  <li>Used for large irregular defects (older technique)</li>
                </ul>
              </li>
              <li><strong>Strip graft</strong>: long strips placed parallel</li>
              <li>Allograft / xenograft: temporary biological dressing (rarely used for definitive)</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Wound bed not ready ✗:</strong>
            <ul>
              <li>Active infection — culture + clear before grafting</li>
              <li>Necrotic tissue / foreign material — debride first</li>
              <li>Exposed avascular structures (bone, tendon) — need vascular coverage first (omentum, muscle flap, granulation)</li>
              <li>Edematous bed — control edema first</li>
            </ul>
          </li>
          <li>Patient inability to tolerate prolonged immobilization (cats can be challenging)</li>
          <li>Poor systemic health (uncontrolled diabetes, hypothyroid, malnutrition)</li>
          <li>Owner unable to provide intensive bandage care for 2-4 weeks</li>
          <li>Areas of constant motion (joint flexion creases) — flap better than graft</li>
          <li>Coagulopathy</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Wound bed preparation ✨ — KEY to graft success:</strong></p>
        <ul>
          <li>Initial wound management (often weeks before grafting):
            <ul>
              <li>Debridement (sharp, mechanical, enzymatic, autolytic)</li>
              <li>Negative-pressure wound therapy (vacuum-assisted closure / VAC) — accelerates granulation</li>
              <li>Topical agents (hydrogel, hydrocolloid, honey, silver)</li>
              <li>Antibiotic Tx for infection</li>
              <li>Systemic disease management</li>
            </ul>
          </li>
          <li>Granulating bed criteria ✨:
            <ul>
              <li>Red, healthy "beefy" granulation tissue</li>
              <li>No purulent discharge</li>
              <li>Negative culture or skin flora only</li>
              <li>No necrotic tissue</li>
              <li>Surrounding tissue healthy</li>
            </ul>
          </li>
          <li>Cytology + culture before grafting</li>
        </ul>
        <p><strong>2. Donor site selection ✨:</strong></p>
        <ul>
          <li>Common donor sites:
            <ul>
              <li>Lateral thoracic wall — most common, lots of loose skin</li>
              <li>Lateral abdomen / flank</li>
              <li>Cervical area</li>
            </ul>
          </li>
          <li>Avoid:
            <ul>
              <li>Distal limbs (limited skin)</li>
              <li>Heavily haired areas (cosmetic concern)</li>
              <li>Areas with similar tension lines as recipient</li>
            </ul>
          </li>
          <li>Ensure donor site can close primarily after graft harvested</li>
          <li>Match hair direction + thickness to recipient when possible</li>
        </ul>
        <p><strong>3. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA</li>
          <li>Coag panel</li>
          <li>Wound culture pre-op</li>
          <li>Address systemic disease</li>
        </ul>
        <p><strong>4. Pre-op preparation:</strong></p>
        <ul>
          <li>Wide clip donor + recipient sites</li>
          <li>Pre-op antibiotics: Cefazolin 22 mg/kg IV at induction</li>
          <li>Methadone + maropitant pre-medication</li>
          <li>Position based on recipient site location</li>
          <li>Prepare for prolonged surgery (1-3 hours)</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence (full-thickness mesh graft) ✨:</strong></p>
        <ol>
          <li><strong>Step 1: Recipient bed preparation</strong>
            <ul>
              <li>Refresh granulation bed if needed (gentle scrape with scalpel)</li>
              <li>Lavage with saline</li>
              <li>Hemostasis (any bleeding interferes with graft adherence)</li>
              <li>Measure defect dimensions precisely</li>
            </ul>
          </li>
          <li><strong>Step 2: Harvest graft</strong>
            <ul>
              <li>Mark donor area dimensions = ~ 30-50% larger than recipient (allows for shrinkage + meshing expansion)</li>
              <li>Incise full-thickness skin (epidermis + entire dermis, NOT including SQ)</li>
              <li>Excise as a single piece</li>
              <li>Close donor site primarily with routine layered closure</li>
            </ul>
          </li>
          <li><strong>Step 3: Prepare graft</strong>
            <ul>
              <li>Remove ALL subcutaneous fat from undersurface ✨ — meticulously
                <ul>
                  <li>Fat = poor adherence, prevents inosculation</li>
                  <li>Use scissors to scrape off SQ, leaving only dermis</li>
                  <li>"Glistening dermis" appearance</li>
                </ul>
              </li>
              <li>Mesh the graft:
                <ul>
                  <li>Place graft on sterile board, dermal side up</li>
                  <li>Make multiple small (~ 5 mm) parallel incisions, staggered rows</li>
                  <li>Like a "fishnet" pattern</li>
                  <li>Allows expansion + fluid drainage</li>
                  <li>Graft can expand 30-50%</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Step 4: Place graft on recipient bed</strong>
            <ul>
              <li>Place graft over defect, dermal side down</li>
              <li>Stretch to fit defect (use mesh expansion)</li>
              <li>Suture margins to defect edges:
                <ul>
                  <li>4-0 absorbable simple interrupted at multiple points</li>
                  <li>Tension distributed evenly</li>
                </ul>
              </li>
              <li>Place "tie-over" sutures across graft surface (optional but helpful):
                <ul>
                  <li>Long sutures placed pre-graft, leave ends long</li>
                  <li>After graft positioned, tie ends across petroleum gauze on graft</li>
                  <li>Provides compression + immobilization</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Step 5: Bolster bandage application ✨ (CRITICAL for graft take):</strong>
            <ul>
              <li>Layer 1: petroleum-impregnated gauze (Adaptic, Xeroform) directly on graft</li>
              <li>Layer 2: thick padding</li>
              <li>Layer 3: outer protective layer</li>
              <li>Splint if over joint (immobilization essential)</li>
              <li>Bandage for at least 4-7 d undisturbed</li>
            </ul>
          </li>
        </ol>
        <p><strong>Graft physiology stages ✨ (timing matters):</strong></p>
        <ul>
          <li><strong>Day 0-2: Plasmatic imbibition</strong> — graft survives by absorbing nutrients from bed (no blood supply yet)</li>
          <li><strong>Day 2-4: Inosculation</strong> — graft vessels begin connecting to recipient vessels</li>
          <li><strong>Day 4-7: Revascularization</strong> — new blood supply established</li>
          <li><strong>Day 7+: Mature integration</strong> — graft fully integrated</li>
          <li><strong>Movement during day 0-7 = graft death ✗</strong> — bolster bandage + immobilization essential</li>
        </ul>
        <p><strong>Critical principles:</strong></p>
        <ul>
          <li>Wound bed perfect before grafting (granulating, infection-free)</li>
          <li>Remove ALL fat from graft underside</li>
          <li>Mesh for drainage + expansion</li>
          <li>Immobilization × 4-7 d minimum</li>
          <li>Tie-over bolster + bandage essential</li>
          <li>Don't disturb early — first bandage change typically day 4-7</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.2-0.4 mg/kg IM/IV</li>
          <li>± Acepromazine</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol or alfaxalone</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 5-10 mcg/kg/h</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Pre-op: Cefazolin 22 mg/kg IV at induction</li>
          <li>Post-op: Cephalexin 22 mg/kg PO q12h × 7-10 d (or based on culture)</li>
          <li>If MRSA / Pseudomonas: based on sensitivity</li>
        </ul>
        <p><strong>Analgesia:</strong></p>
        <ul>
          <li>Methadone q4-6h × 24 h → buprenorphine</li>
          <li>NSAID × 7-10 d (carprofen, meloxicam)</li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 14-21 d (helpful for prolonged immobilization)</li>
        </ul>
        <p><strong>Sedation for bandage changes ✨:</strong></p>
        <ul>
          <li>Trazodone 5-10 mg/kg PO 1-2 h before bandage change</li>
          <li>± Gabapentin pre-bandage change</li>
          <li>Some require brief anesthesia early on (especially first bandage change at day 4-7)</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-3) — DO NOT DISTURB:</strong></p>
        <ul>
          <li>Bandage protected at all costs</li>
          <li>E-collar 100%</li>
          <li>Strict cage rest</li>
          <li>Minimize movement of grafted area</li>
          <li>Pain control multimodal</li>
          <li>Antibiotics</li>
          <li>If splint over joint: ensure no slippage, no swelling distally</li>
        </ul>
        <p><strong>Day 4-7 — First bandage change ✨:</strong></p>
        <ul>
          <li>Sedate / anesthetize patient</li>
          <li>Carefully remove bolster + petroleum gauze (may need saline soaking to release)</li>
          <li>Assess graft:
            <ul>
              <li>Pink + adhered = good ✓</li>
              <li>Pale / detaching = concerning</li>
              <li>Black / necrotic = failed (partial or total)</li>
            </ul>
          </li>
          <li>If graft taking well: replace bolster + bandage</li>
          <li>If portions failed: debride necrotic, may revise (rarely possible at this stage)</li>
        </ul>
        <p><strong>Day 7-14:</strong></p>
        <ul>
          <li>Graft revascularization complete</li>
          <li>Bandage changes q3-5 d</li>
          <li>Continue immobilization for joints</li>
          <li>Graft adheres firmly</li>
        </ul>
        <p><strong>Day 14-28:</strong></p>
        <ul>
          <li>Graft fully integrated</li>
          <li>Bandage may be discontinued depending on site</li>
          <li>Continue protective coverage if needed</li>
          <li>Suture removal day 14-21</li>
          <li>Gradual return to activity</li>
        </ul>
        <p><strong>Long-term ✨:</strong></p>
        <ul>
          <li>Hair regrowth: 2-4 weeks (may be different texture)</li>
          <li>Graft maturation continues 6-12 months</li>
          <li>Final cosmetic result by 3-6 months</li>
          <li>Functional outcome usually excellent</li>
          <li>Some color difference (may darken or lighten)</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Graft failure ✗</strong> — primary complication:
            <ul>
              <li>Total failure: 10-25% (highly variable)</li>
              <li>Partial failure: 30-50% (some areas take, others don't)</li>
              <li>Causes:
                <ul>
                  <li>Movement during early days (#1 cause)</li>
                  <li>Hematoma / seroma under graft (no contact with bed)</li>
                  <li>Infection</li>
                  <li>Inadequate wound bed prep</li>
                  <li>Excessive tension</li>
                  <li>Patient self-trauma</li>
                </ul>
              </li>
              <li>Tx:
                <ul>
                  <li>Partial: debride necrotic, allow 2nd intention healing of failed areas</li>
                  <li>Total: re-prepare bed + repeat grafting (delay 1-2 weeks)</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Infection</strong>:
            <ul>
              <li>Disrupts inosculation</li>
              <li>Tx: culture, antibiotic, may need re-grafting</li>
            </ul>
          </li>
          <li><strong>Hematoma / seroma under graft</strong>:
            <ul>
              <li>Prevented by mesh expansion + bolster compression</li>
              <li>If develops: needle aspiration, milking through mesh</li>
            </ul>
          </li>
          <li><strong>Cosmetic concerns</strong>:
            <ul>
              <li>Different hair direction / color</li>
              <li>Mesh pattern may be visible</li>
              <li>Scarring at margins</li>
            </ul>
          </li>
          <li>Donor site complications: dehiscence, infection (uncommon)</li>
          <li>Bandage-related complications: pressure sores, vascular compromise from tight bandage</li>
          <li>Joint stiffness from prolonged immobilization (rehab essential)</li>
          <li>Self-trauma (e-collar failure)</li>
          <li>Wound contracture (usually less than secondary intention healing)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Properly prepared bed + skilled execution ✓:</strong>
            <ul>
              <li>Graft take: 75-90% (full-thickness mesh)</li>
              <li>Functional outcome: 85-95%</li>
              <li>Cosmetic outcome: usually acceptable, some differences</li>
            </ul>
          </li>
          <li><strong>Distal limb wounds (most common indication):</strong>
            <ul>
              <li>Functional outcome: excellent in 80-90%</li>
              <li>Joint mobility usually preserved</li>
              <li>Long-term durable</li>
            </ul>
          </li>
          <li><strong>Compared to second intention healing:</strong>
            <ul>
              <li>Faster total healing time</li>
              <li>Less wound contracture</li>
              <li>Better cosmetic + functional outcome for large defects</li>
            </ul>
          </li>
          <li><strong>Compared to skin flaps:</strong>
            <ul>
              <li>Flaps preferred when feasible (better cosmetic, more reliable)</li>
              <li>Grafts indicated when flap not reachable (distal limb, large defect)</li>
              <li>Both have role in reconstruction</li>
            </ul>
          </li>
          <li><strong>Long-term considerations:</strong>
            <ul>
              <li>Graft remains thinner than normal skin</li>
              <li>More susceptible to trauma in some cases</li>
              <li>Hair regrowth varies</li>
              <li>Overall function excellent in successful grafts</li>
            </ul>
          </li>
          <li><strong>Mortality:</strong>
            <ul>
              <li>Healthy patient: &lt; 1%</li>
              <li>Higher in burn / extensive trauma cases (underlying disease)</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Wound bed preparation = whole game ✨</strong> — granulating, infection-free, no necrotic tissue. ผ่าตัด graft ก่อนพร้อม = ล้มเหลวแน่นอน<br><br>**Mesh full-thickness graft = vet medicine workhorse** ✓ — 30-50% expansion, drainage through holes, durable<br><br>⚠️ **Movement = death** — immobilization 4-7 d non-negotiable. Bolster bandage + splint, no exceptions<br><br>✗ **Don't disturb until day 4-7** — first bandage change earliest. Patience = success</div>
      `,
    },
  },

  /* ============================================================
     SOFT TISSUE — Umbilical hernia
  ============================================================ */
  {
    id: 'umbilical-hernia',
    titleEn: 'Umbilical Hernia Repair',
    titleTh: 'ผ่าตัดแก้ไส้เลื่อนสะดือ',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'soft-tissue',
    tags: ['umbilical hernia', 'congenital hernia', 'herniorrhaphy', 'concurrent OHE', 'spay umbilical hernia', 'falciform ligament'],
    aliases: ['umbilical hernia', 'belly button hernia', 'ไส้เลื่อนสะดือ', 'แก้ไส้เลื่อน'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Hernias',
    sections: {
      indications: `
        <ul>
          <li><strong>Umbilical hernia ✗</strong> — congenital failure of umbilical ring closure
            <ul>
              <li>Most common congenital hernia in dogs (3-4% incidence)</li>
              <li>Hereditary in many breeds (Airedale, Basenji, Pekingese, Pointer, Weimaraner, Cocker, Bull Terrier)</li>
              <li>Often noticed at first puppy exam</li>
              <li>Contents: typically falciform ligament, omentum; sometimes intestine, bladder ✗</li>
            </ul>
          </li>
          <li><strong>Surgical indications ✨:</strong>
            <ul>
              <li>Hernias &gt; 2-3 cm rarely close spontaneously — surgery indicated</li>
              <li>Symptomatic (pain, distension, discoloration)</li>
              <li>Incarcerated / strangulated — emergency ✗</li>
              <li>Recurrent</li>
              <li><strong>Concurrent with OHE / neuter ✨</strong> — best timing (combined procedure, single anesthesia)</li>
              <li>Adult-onset (acquired, often from trauma)</li>
            </ul>
          </li>
          <li><strong>Small hernias &lt; 2 cm:</strong>
            <ul>
              <li>May close spontaneously by 6 months of age</li>
              <li>Monitor; surgery if not closed by spay/neuter age</li>
              <li>Almost always combined with elective procedure</li>
            </ul>
          </li>
          <li><strong>Important — DON'T MISS at first puppy exam ✨:</strong>
            <ul>
              <li>Palpate every puppy at first vaccine visit</li>
              <li>Early diagnosis allows planning for combined procedure</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Severely young (&lt; 8 weeks) puppy unless emergency — wait for safer anesthesia</li>
          <li>Hemodynamically unstable / strangulated → emergency surgery (stabilize first)</li>
          <li>Severe systemic illness</li>
          <li>Coagulopathy</li>
          <li>Owner unable to provide post-op care</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Examination:</strong></p>
        <ul>
          <li>Palpate hernia:
            <ul>
              <li>Reducible vs incarcerated?</li>
              <li>Size of defect (rim of fascial defect)</li>
              <li>Contents — feel for bowel sounds, masses</li>
              <li>Skin overlying healthy?</li>
            </ul>
          </li>
          <li>Standard PE — examine all systems</li>
          <li>Female: assess for concurrent OHE indication</li>
          <li>Other congenital defects (cryptorchid, cardiac, palate)</li>
        </ul>
        <p><strong>2. Imaging (if indicated):</strong></p>
        <ul>
          <li>Usually not needed for routine umbilical hernia</li>
          <li>Ultrasound if:
            <ul>
              <li>Large hernia with uncertain contents</li>
              <li>Suspect bowel involvement</li>
              <li>Concurrent abdominal mass / disease</li>
            </ul>
          </li>
        </ul>
        <p><strong>3. Workup:</strong></p>
        <ul>
          <li>Standard pre-anesthesia (CBC if older, basic in young healthy)</li>
          <li>Coag if breed-related concern</li>
        </ul>
        <p><strong>4. Pre-op preparation:</strong></p>
        <ul>
          <li>Pre-medication: methadone + maropitant</li>
          <li>Antibiotics: Cefazolin 22 mg/kg IV at induction (or skip for clean small defect)</li>
          <li>Wide clip + scrub of ventral abdomen</li>
          <li>Position: dorsal recumbency</li>
          <li>If concurrent OHE/neuter: planned in same surgical field</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence (standard umbilical herniorrhaphy):</strong></p>
        <ol>
          <li><strong>Skin incision:</strong>
            <ul>
              <li>Elliptical incision around hernia + skin scar</li>
              <li>Length depends on hernia size + concurrent procedure</li>
              <li>If concurrent OHE: extend incision cranially OR caudally to access uterus</li>
            </ul>
          </li>
          <li><strong>Identify hernial sac:</strong>
            <ul>
              <li>Dissect SQ tissue to expose hernial sac (peritoneum)</li>
              <li>Free sac from surrounding tissue</li>
            </ul>
          </li>
          <li><strong>Address sac contents ✨:</strong>
            <ul>
              <li>Open sac carefully (avoid injuring contents)</li>
              <li>Identify contents:
                <ul>
                  <li>Falciform ligament: most common, can leave (or excise)</li>
                  <li>Omentum: reduce back into abdomen, viable if pink</li>
                  <li>Intestine: assess viability (color, peristalsis, pulse)</li>
                  <li>Bladder: rare, return to position</li>
                </ul>
              </li>
              <li>If contents non-viable: resect (rare in routine case)</li>
              <li>Reduce viable contents into abdominal cavity</li>
            </ul>
          </li>
          <li><strong>Excise hernial sac:</strong>
            <ul>
              <li>Trim peritoneal sac at level of fascial defect</li>
              <li>Identify edges of defect — fibrous ring</li>
            </ul>
          </li>
          <li><strong>Close fascial defect ✨ — KEY step:</strong>
            <ul>
              <li>Use 3-0 or 2-0 absorbable monofilament suture (PDS, Monocryl)</li>
              <li>Pattern: simple interrupted or simple continuous</li>
              <li>Apposition (NOT inverting)</li>
              <li>Include healthy fascia 5 mm beyond defect edge</li>
              <li>For larger hernias: vest-over-pants (overlapping) closure for added strength</li>
              <li>Confirm closure is tension-free + secure</li>
            </ul>
          </li>
          <li><strong>If concurrent OHE:</strong>
            <ul>
              <li>Use the herniorrhaphy site as access — extend cranially / caudally to find uterus</li>
              <li>Standard OHE technique through extended incision</li>
              <li>Close abdomen as for routine OHE</li>
            </ul>
          </li>
          <li><strong>Close SQ + skin:</strong>
            <ul>
              <li>SQ: 3-0 or 4-0 PDS continuous</li>
              <li>Skin: simple interrupted nylon or intradermal cosmetic with absorbable</li>
            </ul>
          </li>
        </ol>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>Adequate fascial closure with healthy tissue purchase</li>
          <li>Tension-free</li>
          <li>Don't include contents (omentum, bowel) in fascial sutures</li>
          <li>Concurrent OHE/neuter is ideal — combine procedures</li>
        </ul>
      `,
      drugs: `
        <p><strong>Same protocol as routine OHE/neuter:</strong></p>
        <ul>
          <li>Pre-medication: methadone + maropitant ± ace</li>
          <li>Induction: propofol or alfaxalone</li>
          <li>Maintenance: isoflurane</li>
          <li>Antibiotics: Cefazolin (or skip in clean small case)</li>
          <li>Post-op:
            <ul>
              <li>NSAID × 5-7 d (carprofen, meloxicam)</li>
              <li>± Buprenorphine 0.02 mg/kg q8h × 1-2 d</li>
              <li>Gabapentin if needed (rare for routine)</li>
            </ul>
          </li>
        </ul>
      `,
      postOp: `
        <p><strong>Routine post-op (similar to OHE):</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Discharge same day</li>
          <li>E-collar 14 d</li>
          <li>Restricted activity 14 d</li>
          <li>Suture removal day 10-14</li>
          <li>Watch for:
            <ul>
              <li>Recurrence (rare with proper technique — &lt; 5%)</li>
              <li>Wound dehiscence</li>
              <li>Infection</li>
              <li>Seroma</li>
            </ul>
          </li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Excellent outcome typically</li>
          <li>Hereditary in many breeds — should not breed</li>
          <li>Examine offspring of affected breeders</li>
        </ul>
      `,
      complications: `
        <ul>
          <li>Recurrence — rare (&lt; 5% with proper technique)</li>
          <li>Wound dehiscence (excessive activity, licking)</li>
          <li>Surgical site infection</li>
          <li>Seroma at incision</li>
          <li>Pain (managed with NSAID)</li>
          <li>Strangulation pre-surgery → bowel necrosis → enterectomy needed (emergency)</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Routine umbilical herniorrhaphy ✓:</strong>
            <ul>
              <li>Excellent — &gt; 95% successful closure</li>
              <li>Recurrence &lt; 5%</li>
              <li>Mortality &lt; 0.05% (essentially same as routine OHE/neuter)</li>
              <li>Recovery 10-14 d</li>
            </ul>
          </li>
          <li><strong>Combined with OHE/neuter ✨:</strong>
            <ul>
              <li>Most efficient approach — single anesthesia, slight extension of incision</li>
              <li>No increased complication rate vs separate procedures</li>
            </ul>
          </li>
          <li><strong>Strangulated / emergency:</strong>
            <ul>
              <li>Higher morbidity if bowel resection needed</li>
              <li>Still excellent outcome with prompt surgery</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>QOL normal</li>
              <li>Hereditary breeding consideration</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Combined with OHE/neuter = best timing</strong> ✨ — single anesthesia, addresses both<br><br>**ตรวจ puppy ทุกตัวที่ first vaccine** — small hernia พบได้บ่อย, plan surgery ตอน spay/neuter<br><br>⚠️ **Hereditary** — counsel breeder, affected dogs should not breed<br><br>✗ **Incarcerated/strangulated = emergency** — bowel viability assessment, may need enterectomy</div>
      `,
    },
  },

  /* ============================================================
     SOFT TISSUE — Inguinal hernia
  ============================================================ */
  {
    id: 'inguinal-hernia',
    titleEn: 'Inguinal Hernia Repair',
    titleTh: 'ผ่าตัดแก้ไส้เลื่อนขาหนีบ',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'soft-tissue',
    tags: ['inguinal hernia', 'inguinal ring', 'congenital hernia', 'acquired hernia', 'pregnant inguinal hernia', 'incarcerated', 'strangulated', 'bilateral inguinal hernia'],
    aliases: ['inguinal hernia', 'groin hernia', 'ไส้เลื่อนขาหนีบ', 'แก้ไส้เลื่อนข้างต้นขา'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Inguinal Hernia',
    sections: {
      indications: `
        <ul>
          <li><strong>Inguinal hernia ✗</strong>:
            <ul>
              <li>Protrusion of abdominal contents through inguinal canal</li>
              <li>Predisposed: middle-aged intact female dogs (60% in females), Cavalier KCS, Cocker, Pekingese, Basset, Basenji, Weimaraner</li>
              <li>Cat: rare, usually congenital</li>
              <li>Often bilateral (40-60%) ✨</li>
            </ul>
          </li>
          <li><strong>Types:</strong>
            <ul>
              <li><strong>Indirect (congenital):</strong>
                <ul>
                  <li>Through normal inguinal canal alongside spermatic cord (males) or round ligament (females)</li>
                  <li>Often associated with patent processus vaginalis</li>
                </ul>
              </li>
              <li><strong>Direct (acquired):</strong>
                <ul>
                  <li>Through weakness in body wall medial to inguinal ring</li>
                  <li>Usually older intact females</li>
                  <li>Trauma, obesity, intra-abdominal pressure factors</li>
                </ul>
              </li>
            </ul>
          </li>
          <li><strong>Contents:</strong>
            <ul>
              <li>Omentum (most common)</li>
              <li>Intestine (small intestine especially) ✗</li>
              <li>Bladder</li>
              <li>Uterus (especially in pregnant bitch — emergency!) ✗</li>
              <li>Pups in pregnant uterus — emergency C-section + repair</li>
            </ul>
          </li>
          <li><strong>Surgical indications:</strong>
            <ul>
              <li>All inguinal hernias should be repaired (don't usually close spontaneously)</li>
              <li>Symptomatic (pain, swelling)</li>
              <li>Incarcerated / strangulated — emergency ✗</li>
              <li>Pregnant + uterus / pups in hernia — emergency C-section + repair</li>
              <li>Concurrent OHE in intact female (always recommended) ✨</li>
              <li>Bilateral disease — repair both sides</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hemodynamically unstable patient — stabilize first</li>
          <li>Strangulated bowel without prompt surgery (must be emergent)</li>
          <li>Severe systemic illness</li>
          <li>Coagulopathy</li>
          <li>Pregnant non-emergent: balance fetal viability vs surgical urgency (depends on contents)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Examination ✨:</strong></p>
        <ul>
          <li>Palpate inguinal area:
            <ul>
              <li>Soft swelling, often pendulous</li>
              <li>Reducible vs incarcerated</li>
              <li>Bilateral?</li>
              <li>Pulsation? (vascular structures)</li>
            </ul>
          </li>
          <li>If incarcerated: pain on palpation, fixed mass, sometimes discoloration</li>
          <li>If strangulated: severe pain, vomiting, depression, abdominal tenderness ✗</li>
          <li>Pregnant bitch with inguinal hernia: assess pup viability via US</li>
        </ul>
        <p><strong>2. Imaging:</strong></p>
        <ul>
          <li><strong>Abdominal ultrasound ✨:</strong>
            <ul>
              <li>Confirm contents (intestine, bladder, uterus, omentum)</li>
              <li>Assess viability (peristalsis, color flow)</li>
              <li>Identify hernia sac, fluid in canal</li>
              <li>If pregnant: fetal heart rate, viability</li>
            </ul>
          </li>
          <li>Abdominal radiographs (if no US):
            <ul>
              <li>Soft tissue mass in inguinal area</li>
              <li>Gas-filled bowel in hernia</li>
            </ul>
          </li>
        </ul>
        <p><strong>3. Workup:</strong></p>
        <ul>
          <li>CBC, biochem (electrolytes if vomiting), UA</li>
          <li>Coag panel</li>
          <li>If strangulation: lactate (perfusion marker)</li>
        </ul>
        <p><strong>4. Pre-op preparation:</strong></p>
        <ul>
          <li>Stabilize first if strangulated:
            <ul>
              <li>IV fluids</li>
              <li>Pain control</li>
              <li>Anti-emetic</li>
              <li>Then go to surgery</li>
            </ul>
          </li>
          <li>Pre-medication: methadone + maropitant</li>
          <li>Antibiotics: Cefazolin 22 mg/kg IV at induction; Cefoxitin if intestine compromised</li>
          <li>Wide clip + scrub of ventral abdomen + inguinal area + medial thigh</li>
          <li>Position: dorsal recumbency</li>
          <li>Prep for possible enterectomy if strangulated</li>
        </ul>
      `,
      technique: `
        <p><strong>Approaches:</strong></p>
        <ul>
          <li><strong>Inguinal approach:</strong> direct access to hernia ring</li>
          <li><strong>Ventral midline approach ✨:</strong> better for bilateral, female with concurrent OHE, large hernia, or strangulated bowel needing resection</li>
          <li><strong>Combined:</strong> sometimes need both</li>
        </ul>
        <p><strong>Surgical sequence (ventral midline approach with concurrent OHE — typical case):</strong></p>
        <ol>
          <li>Standard ventral midline laparotomy</li>
          <li>Identify hernia from inside abdomen:
            <ul>
              <li>Look at inguinal ring (lateral abdominal wall)</li>
              <li>Visualize sac, contents</li>
            </ul>
          </li>
          <li><strong>Reduce contents ✨:</strong>
            <ul>
              <li>Gently pull contents back into abdomen</li>
              <li>If incarcerated: may need to enlarge ring (incise medial border) to allow reduction</li>
              <li>Assess viability of contents (intestine especially):
                <ul>
                  <li>Pink, peristalsis = viable</li>
                  <li>Black, no peristalsis = devitalized → enterectomy</li>
                </ul>
              </li>
              <li>If non-viable: enterectomy + anastomosis (see separate entry)</li>
            </ul>
          </li>
          <li><strong>If pregnant bitch with uterus + pups in hernia ✗</strong>:
            <ul>
              <li>Assess fetal viability (US, fetal HR)</li>
              <li>If viable + appropriate gestational age: C-section + concurrent OHE</li>
              <li>If non-viable: hysterotomy / OHE</li>
              <li>Address hernia after delivery</li>
            </ul>
          </li>
          <li><strong>Concurrent OHE (intact female ✨):</strong>
            <ul>
              <li>Standard OHE technique</li>
              <li>Removes hormonal driver of acquired hernia</li>
              <li>Reduces recurrence</li>
            </ul>
          </li>
          <li><strong>Close hernial defect ✨:</strong>
            <ul>
              <li>From inside (transabdominal): close inguinal ring with 0 or 2-0 PDS simple interrupted</li>
              <li>Or external approach: separate incision over hernia, expose ring, close</li>
              <li>Identify external pudendal vessels — protect</li>
              <li>Close ring snugly without compressing vessels / spermatic cord</li>
              <li>For large defects: may need mesh reinforcement (rare in vet medicine)</li>
            </ul>
          </li>
          <li><strong>Bilateral disease:</strong>
            <ul>
              <li>Address both rings same surgery</li>
              <li>Symmetric closure</li>
            </ul>
          </li>
          <li><strong>Closure:</strong>
            <ul>
              <li>Close abdomen routine 3-layer</li>
              <li>If external approach also done: close inguinal incision in layers</li>
            </ul>
          </li>
        </ol>
        <p><strong>External approach (alternative — for chronic, reducible cases):</strong></p>
        <ol>
          <li>Skin incision over hernia (~ 5-8 cm)</li>
          <li>Dissect SQ to expose hernial sac</li>
          <li>Open sac, reduce contents</li>
          <li>Close ring with 2-0 or 0 PDS</li>
          <li>Close SQ + skin</li>
        </ol>
        <p><strong>Critical principles:</strong></p>
        <ul>
          <li>Identify external pudendal vessels — protect from suture</li>
          <li>Concurrent OHE in intact female (essential ✨)</li>
          <li>Adequate ring closure with healthy fascial purchase</li>
          <li>Address bilateral disease same surgery if possible</li>
          <li>Strangulated bowel — assess viability + resect if needed</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.2-0.4 mg/kg IM/IV</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol or alfaxalone</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 5-10 mcg/kg/h</li>
          <li>± Lidocaine CRI 25-50 mcg/kg/min</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Pre-op:
            <ul>
              <li>Routine: Cefazolin 22 mg/kg IV at induction</li>
              <li>Strangulated bowel / contamination: Cefoxitin 30 mg/kg IV (covers anaerobes)</li>
            </ul>
          </li>
          <li>Post-op:
            <ul>
              <li>Routine: Cephalexin 22 mg/kg PO q12h × 5-7 d</li>
              <li>If enterectomy / contamination: Amoxicillin-clavulanate 12.5 mg/kg PO q12h × 7-10 d</li>
            </ul>
          </li>
        </ul>
        <p><strong>Analgesia:</strong></p>
        <ul>
          <li>Methadone q4-6h × 24 h → buprenorphine</li>
          <li>NSAID × 7 d (carprofen, meloxicam)</li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 7 d</li>
        </ul>
      `,
      postOp: `
        <p><strong>Routine post-op:</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Discharge typically day 1-2</li>
          <li>E-collar 14 d</li>
          <li>Restricted activity 14-21 d (longer than umbilical due to abdominal pressure on closure)</li>
          <li>NSAID × 7 d</li>
          <li>Suture removal day 10-14</li>
        </ul>
        <p><strong>If enterectomy done:</strong></p>
        <ul>
          <li>ICU monitoring × 24-72 h</li>
          <li>NPO × 12-24 h, then small frequent meals</li>
          <li>Watch for septic peritonitis (day 3-5)</li>
          <li>Continue antibiotics 7-14 d</li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Recurrence rate 5-10% (higher in obese, intact females not OHE'd)</li>
          <li>Monitor for new hernia on opposite side (40-60% bilateral incidence)</li>
          <li>Weight management important</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Recurrence ✗</strong>:
            <ul>
              <li>5-15% — higher in obese, intact females</li>
              <li>Tx: revision surgery, mesh reinforcement</li>
            </ul>
          </li>
          <li><strong>Strangulation pre-surgery → bowel necrosis</strong>:
            <ul>
              <li>Requires enterectomy</li>
              <li>Higher morbidity</li>
            </ul>
          </li>
          <li><strong>Wound infection</strong>:
            <ul>
              <li>Higher rate if bowel involved</li>
            </ul>
          </li>
          <li>Seroma at inguinal incision</li>
          <li>External pudendal vessel damage (rare)</li>
          <li>Bilateral disease — second hernia may develop</li>
          <li>Pregnant emergency: pup mortality, maternal complications</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Routine inguinal hernia repair ✓:</strong>
            <ul>
              <li>Excellent — &gt; 90% successful</li>
              <li>Recurrence 5-15%</li>
              <li>Recovery 14-21 d</li>
            </ul>
          </li>
          <li><strong>Combined with OHE in intact female ✓:</strong>
            <ul>
              <li>Best outcome (removes hormonal driver)</li>
              <li>Lower recurrence</li>
            </ul>
          </li>
          <li><strong>Strangulated bowel:</strong>
            <ul>
              <li>Survival 70-90% with prompt surgery</li>
              <li>Higher if enterectomy needed</li>
            </ul>
          </li>
          <li><strong>Pregnant bitch emergency:</strong>
            <ul>
              <li>Maternal survival good</li>
              <li>Pup survival depends on duration</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>QOL normal post-recovery</li>
              <li>Bilateral disease consideration</li>
              <li>Weight management important</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Concurrent OHE in intact female = essential</strong> ✨ — removes hormonal driver, reduces recurrence<br><br>**40-60% bilateral disease** — examine + counsel about other side<br><br>⚠️ **Pregnant bitch with uterus in hernia = emergency C-section + OHE + repair** — fetal viability time-sensitive<br><br>✗ **Strangulated bowel = emergency** — assess viability, may need enterectomy</div>
      `,
    },
  },

  /* ============================================================
     SOFT TISSUE — Perineal hernia
  ============================================================ */
  {
    id: 'perineal-hernia',
    titleEn: 'Perineal Hernia Repair',
    titleTh: 'ผ่าตัดแก้ไส้เลื่อนรอบทวาร',
    type: 'surgery',
    species: ['dog'],
    system: 'soft-tissue',
    tags: ['perineal hernia', 'pelvic diaphragm', 'internal obturator transposition', 'castration', 'rectal prolapse', 'bladder retroflexion', 'levator ani', 'coccygeus', 'sciatic nerve'],
    aliases: ['perineal hernia', 'ไส้เลื่อนทวาร', 'ก้นโป่ง', 'หัวนูนรอบทวาร'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Perineal Hernia',
    sections: {
      indications: `
        <ul>
          <li><strong>Perineal hernia ✗</strong> — weakness/atrophy of pelvic diaphragm muscles
            <ul>
              <li>Most common: intact older male dogs (5-8 yr)</li>
              <li>Predisposed: Boston Terrier, Boxer, Welsh Corgi, Pekingese, Cocker, Old English Sheepdog</li>
              <li>Etiology: testosterone-related muscle atrophy + chronic straining (BPH, prostatic disease, constipation)</li>
              <li>Often bilateral but typically asymmetric (one side worse)</li>
              <li>RARE in females, neutered males (when occurs in female: usually older, severe straining, neoplasia)</li>
              <li>Cat: rare</li>
            </ul>
          </li>
          <li><strong>Clinical signs ✨:</strong>
            <ul>
              <li>Perineal swelling (one or both sides of anus)</li>
              <li>Tenesmus, dyschezia (chronic straining)</li>
              <li>Constipation (rectum bends into hernia → "S" curve)</li>
              <li>Hematochezia, mucoid discharge</li>
              <li>Dysuria / stranguria if bladder retroflexed ✗ (emergency)</li>
              <li>Abdominal mass on rectal palpation</li>
            </ul>
          </li>
          <li><strong>Hernia contents:</strong>
            <ul>
              <li>Pelvic + retroperitoneal fat</li>
              <li>Rectum (deviation forms "S" curve)</li>
              <li>Prostate (intact male)</li>
              <li>Bladder ✗ (retroflexion = urinary obstruction emergency)</li>
              <li>Small intestine (rare but possible)</li>
            </ul>
          </li>
          <li><strong>Surgical indications ✨:</strong>
            <ul>
              <li>All clinical perineal hernias should be repaired surgically (medical Tx temporary)</li>
              <li>Bladder retroflexion = emergency ✗</li>
              <li>Concurrent castration MANDATORY ✨ (removes testosterone driver, reduces recurrence)</li>
              <li>Treat constipation pre-op (stool softeners, manual evacuation)</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li>Hemodynamically unstable patient — stabilize first</li>
          <li>Severe systemic illness</li>
          <li>Bladder retroflexion + dehydrated / hyperkalemic — relieve obstruction first (catheter, cystocentesis), stabilize, then surgery</li>
          <li>Coagulopathy</li>
          <li>Owner unable to provide post-op care (stool softeners, e-collar, restricted activity weeks)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Examination ✨:</strong></p>
        <ul>
          <li>External perineal exam:
            <ul>
              <li>Swelling on one or both sides of anus</li>
              <li>Reducible vs incarcerated</li>
              <li>Skin condition</li>
            </ul>
          </li>
          <li><strong>Digital rectal exam ✨ — CRITICAL:</strong>
            <ul>
              <li>Palpate hernia sac defect (loss of pelvic diaphragm muscles laterally)</li>
              <li>Palpate rectum — "S" curve / sacculation</li>
              <li>Prostate size + symmetry (BPH, neoplasia)</li>
              <li>Anal sacs (often impacted from chronic straining)</li>
              <li>Mass / bladder retroflexion</li>
            </ul>
          </li>
          <li>Assess if bladder retroflexed:
            <ul>
              <li>Difficulty urinating, stranguria</li>
              <li>Caudoventral abdominal mass on palpation (bladder displaced)</li>
              <li>Bladder visible/palpable in perineum</li>
              <li>= EMERGENCY ✗</li>
            </ul>
          </li>
          <li>Assess bilateral disease (often both sides involved)</li>
          <li>Concurrent castration assessment (testicles + prostate)</li>
        </ul>
        <p><strong>2. Imaging:</strong></p>
        <ul>
          <li>Abdominal radiographs:
            <ul>
              <li>Bladder position (retroflexion)</li>
              <li>Prostate size</li>
              <li>Constipation, fecal load</li>
            </ul>
          </li>
          <li>Abdominal US:
            <ul>
              <li>Confirm contents</li>
              <li>Bladder position</li>
              <li>Prostate evaluation (BPH, cysts, neoplasia)</li>
            </ul>
          </li>
        </ul>
        <p><strong>3. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, UA</li>
          <li>Coag panel</li>
          <li>If bladder retroflexion: urgent labs (K+, BUN, creat)</li>
        </ul>
        <p><strong>4. Pre-op preparation ✨:</strong></p>
        <ul>
          <li>If bladder retroflexed: relieve first (catheter, ± cystocentesis)</li>
          <li>Pre-op bowel evacuation:
            <ul>
              <li>Lactulose 1 mL/kg PO × 1-3 days pre-op</li>
              <li>Warm water enema 12-24 h pre-op (gentle)</li>
              <li>Manual fecal evacuation under anesthesia</li>
            </ul>
          </li>
          <li>Pre-medication: methadone + maropitant</li>
          <li>Antibiotics: Cefoxitin 30 mg/kg IV at induction (anaerobic + aerobic — perineal area contaminated)</li>
          <li>Or Cefazolin + Metronidazole 15 mg/kg IV</li>
          <li>Position: ventral recumbency (sternal) with pelvis elevated, tail tied over back ✨</li>
          <li>Place purse-string suture around anus</li>
          <li>Wide clip + scrub of perineum + dorsal tail base</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence — Internal Obturator Transposition (preferred technique) ✨:</strong></p>
        <ol>
          <li><strong>Skin incision:</strong>
            <ul>
              <li>Curvilinear incision over hernia (lateral to anus, 1-2 cm cranial to anus, extending 4-5 cm dorsally)</li>
              <li>Subcutaneous dissection</li>
            </ul>
          </li>
          <li><strong>Identify hernia sac + contents:</strong>
            <ul>
              <li>Open sac carefully</li>
              <li>Identify contents (rectum, fat, prostate, bladder if retroflexed)</li>
              <li>Reduce contents back into pelvis/abdomen</li>
              <li>If bladder retroflexed: drain via cystocentesis, then reduce</li>
            </ul>
          </li>
          <li><strong>Identify pelvic diaphragm structures ✨:</strong>
            <ul>
              <li>Levator ani (medial) — often atrophied</li>
              <li>Coccygeus (dorsal)</li>
              <li>Sacrotuberous ligament (dorsolateral) — important landmark</li>
              <li>External anal sphincter (medial)</li>
              <li>Internal obturator muscle (ventral, on ischial table) ← key for transposition</li>
              <li>Sciatic nerve (lateral) — PROTECT ✗</li>
              <li>Caudal rectal nerve, vessels — PROTECT</li>
            </ul>
          </li>
          <li><strong>Internal obturator muscle elevation ✨:</strong>
            <ul>
              <li>Identify internal obturator on dorsal aspect of ischial table (lateral to ischial spine)</li>
              <li>Elevate origin of muscle from ischium with periosteal elevator</li>
              <li>Preserve muscle attachment caudally + nerve/vascular supply</li>
              <li>Mobilize muscle as a flap</li>
            </ul>
          </li>
          <li><strong>Suture placement to close pelvic diaphragm ✨:</strong>
            <ul>
              <li>Use 2-0 or 0 PDS (or non-absorbable like polypropylene for additional strength) simple interrupted</li>
              <li>Suture pattern:
                <ul>
                  <li>External anal sphincter to internal obturator (medial-to-lateral)</li>
                  <li>Internal obturator to sacrotuberous ligament (lateral)</li>
                  <li>Coccygeus to internal obturator (dorsal)</li>
                  <li>Pre-place all sutures, then tie sequentially</li>
                </ul>
              </li>
              <li>3-5 sutures typically</li>
              <li>Tie snugly but not over-constricting (could compress sciatic nerve)</li>
              <li>Test by digital rectal exam — should restore pelvic diaphragm</li>
            </ul>
          </li>
          <li><strong>Concurrent CASTRATION ✨ — MANDATORY:</strong>
            <ul>
              <li>Remove testosterone driver of muscle atrophy</li>
              <li>Reduces recurrence rate from ~50% → 5-10%</li>
              <li>Standard scrotal or pre-scrotal castration</li>
            </ul>
          </li>
          <li><strong>Concurrent procedures (if indicated):</strong>
            <ul>
              <li>Cystopexy (if bladder retroflexion was present — fix bladder to abdominal wall)</li>
              <li>Ductus deferens-pexy (alternative to cystopexy)</li>
              <li>Colopexy (if rectal prolapse / severe sacculation)</li>
              <li>Anal sac drainage / sacculectomy if needed</li>
            </ul>
          </li>
          <li><strong>Closure:</strong>
            <ul>
              <li>SQ: 3-0 PDS continuous</li>
              <li>Skin: 3-0 nylon simple interrupted</li>
              <li>Remove anal purse-string</li>
            </ul>
          </li>
          <li><strong>Bilateral disease ✨:</strong>
            <ul>
              <li>Address one side first, opposite side typically 4-6 weeks later</li>
              <li>Some surgeons do both same surgery (more challenging, longer anesthesia)</li>
            </ul>
          </li>
        </ol>
        <p><strong>Traditional technique (alternative — used historically):</strong></p>
        <ol>
          <li>Direct apposition of pelvic diaphragm muscles without obturator transposition</li>
          <li>Higher recurrence rate (40-50%) — internal obturator transposition preferred ✨</li>
        </ol>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li><strong>Identify + protect sciatic nerve</strong> ✗ — runs lateral to surgical field</li>
          <li>Identify + protect caudal rectal nerve (provides anal sphincter function — incontinence if damaged)</li>
          <li>Concurrent castration mandatory</li>
          <li>Internal obturator transposition is gold standard</li>
          <li>Atraumatic muscle handling</li>
          <li>Pre-op bowel evacuation essential</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication:</strong></p>
        <ul>
          <li>Methadone 0.3-0.5 mg/kg IV/IM (perineal surgery painful)</li>
          <li>± Acepromazine low dose</li>
          <li>Maropitant 1 mg/kg SC</li>
        </ul>
        <p><strong>Epidural ✨ (HIGHLY recommended):</strong></p>
        <ul>
          <li>Lumbosacral approach</li>
          <li>Bupivacaine 0.5% — 1 mL/4.5 kg + Preservative-free morphine 0.1 mg/kg</li>
          <li>18-24 h post-op analgesia</li>
        </ul>
        <p><strong>Induction:</strong></p>
        <ul>
          <li>Propofol or alfaxalone</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane to effect</li>
          <li>Fentanyl CRI 5-10 mcg/kg/h</li>
        </ul>
        <p><strong>Antibiotics ✨ (perineal area = contaminated):</strong></p>
        <ul>
          <li>Pre-op:
            <ul>
              <li>Cefoxitin 30 mg/kg IV at induction (best — covers anaerobes)</li>
              <li>Or Cefazolin + Metronidazole 15 mg/kg IV</li>
            </ul>
          </li>
          <li>Post-op:
            <ul>
              <li>Amoxicillin-clavulanate 12.5-25 mg/kg PO q12h × 7-10 d</li>
              <li>Or Cephalexin + Metronidazole PO</li>
            </ul>
          </li>
        </ul>
        <p><strong>Stool softeners ✨ — CRITICAL post-op:</strong></p>
        <ul>
          <li>Lactulose 0.5-1 mL/kg PO q8-12h × 14-21 d
            <ul>
              <li>Prevents straining tearing fresh sutures</li>
              <li>Adjust to soft (not liquid) stool</li>
            </ul>
          </li>
          <li>± Docusate sodium 50-200 mg PO q12-24h</li>
          <li>± Psyllium fiber added to food</li>
        </ul>
        <p><strong>Analgesia:</strong></p>
        <ul>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24-48 h</li>
          <li>Then Buprenorphine 0.02 mg/kg q8h × 3-5 d</li>
          <li>NSAID — start day 1:
            <ul>
              <li>Carprofen 4 mg/kg SC then 2 mg/kg PO q12h × 7-10 d</li>
            </ul>
          </li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 14-21 d ✨</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-2):</strong></p>
        <ul>
          <li>Recovery monitoring</li>
          <li>Pain control multimodal</li>
          <li>E-collar 100% × 21 d</li>
          <li>Cold compress to perineum × 24-48 h</li>
          <li>Watch for: urinary retention (epidural side effect), defecation difficulty</li>
          <li>Express bladder if not urinating after epidural wears off</li>
        </ul>
        <p><strong>Day 2-7:</strong></p>
        <ul>
          <li>Discharge typically day 2-3 once stable + comfortable</li>
          <li>Continue antibiotics, NSAID, opioid (transition to PO)</li>
          <li>Continue stool softeners ✨ — KEY!</li>
          <li>Soft food diet (canned, slurry)</li>
          <li>Daily wound check — perineal area difficult to keep clean</li>
          <li>Gentle wipe with damp cloth after defecation</li>
          <li>Restricted activity — leash walks only</li>
        </ul>
        <p><strong>Day 7-21:</strong></p>
        <ul>
          <li>Recheck day 10-14 — wound check, suture removal, rectal exam</li>
          <li>Continue stool softener as needed</li>
          <li>Continue restricted activity</li>
          <li>Watch for: dehiscence, recurrence signs (re-swelling)</li>
        </ul>
        <p><strong>Day 21+:</strong></p>
        <ul>
          <li>Gradual return to activity</li>
          <li>Plan contralateral side surgery if bilateral disease (4-6 weeks after first side)</li>
          <li>Continue stool softener × 6-8 weeks total (preventive)</li>
        </ul>
        <p><strong>Long-term ✨:</strong></p>
        <ul>
          <li>Castration removes hormonal driver</li>
          <li>Continue stool softener if any straining tendency</li>
          <li>Prostate disease management if BPH was present</li>
          <li>Recheck rectal exam at follow-up visits</li>
          <li>QOL excellent if successful</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Recurrence ✗</strong>:
            <ul>
              <li>Internal obturator transposition + castration: 5-15%</li>
              <li>Traditional repair without castration: 40-50%</li>
              <li>Tx: revision surgery (more complex on revision)</li>
            </ul>
          </li>
          <li><strong>Sciatic nerve damage ✗</strong>:
            <ul>
              <li>From sutures placed too lateral / deep</li>
              <li>Hindlimb dysfunction (ipsilateral)</li>
              <li>Tx: removal of offending suture (early), supportive care</li>
            </ul>
          </li>
          <li><strong>Fecal incontinence ✗</strong>:
            <ul>
              <li>From caudal rectal nerve damage</li>
              <li>Anal sphincter dysfunction</li>
              <li>Rate: 5-10%</li>
              <li>Some transient (resolves weeks-months)</li>
              <li>Some permanent</li>
            </ul>
          </li>
          <li><strong>Wound infection / dehiscence</strong>:
            <ul>
              <li>Rate higher in this contaminated area</li>
              <li>Tx: open + lavage, antibiotics</li>
            </ul>
          </li>
          <li>Persistent dyschezia / tenesmus</li>
          <li>Rectal prolapse (severe straining post-op)</li>
          <li>Bladder retroflexion recurrence</li>
          <li>Contralateral hernia development (bilateral disease)</li>
          <li>Urinary retention (epidural-related, transient)</li>
          <li>Wound seroma / hematoma</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Internal obturator transposition + castration ✓:</strong>
            <ul>
              <li>Excellent — &gt; 85-90% successful</li>
              <li>Recurrence 5-15%</li>
              <li>QOL excellent post-recovery</li>
              <li>Recovery 4-6 weeks for full activity</li>
            </ul>
          </li>
          <li><strong>Without castration:</strong>
            <ul>
              <li>Recurrence rate 40-50% — strong argument for concurrent castration ✨</li>
            </ul>
          </li>
          <li><strong>Bilateral disease:</strong>
            <ul>
              <li>Both sides should be repaired</li>
              <li>Staged surgery preferred (4-6 weeks apart)</li>
            </ul>
          </li>
          <li><strong>Bladder retroflexion ✗:</strong>
            <ul>
              <li>Higher mortality if delayed (5-15%)</li>
              <li>Excellent outcome with prompt repair</li>
              <li>Cystopexy reduces recurrence</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>Most patients have excellent outcome</li>
              <li>Continued stool management often needed</li>
              <li>Lifelong</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>Internal obturator transposition + concurrent castration = standard of care</strong> ✨ — recurrence drops from 50% → 5-15%<br><br>**Stool softener × 6-8 weeks = mandatory** — straining = suture failure = recurrence<br><br>⚠️ **Sciatic nerve + caudal rectal nerve = identify + protect** — incontinence + paralysis are devastating complications<br><br>✗ **Bladder retroflexion = emergency** — relieve obstruction first, stabilize, then repair</div>
      `,
    },
  },

  /* ============================================================
     SOFT TISSUE — Diaphragmatic hernia
  ============================================================ */
  {
    id: 'diaphragmatic-hernia',
    titleEn: 'Diaphragmatic Hernia Repair (Traumatic)',
    titleTh: 'ผ่าตัดแก้ไส้เลื่อน diaphragm (จากอุบัติเหตุ)',
    type: 'surgery',
    species: ['dog', 'cat'],
    system: 'soft-tissue',
    tags: ['diaphragmatic hernia', 'traumatic diaphragmatic hernia', 'PPDH', 'peritoneopericardial', 'reexpansion pulmonary edema', 'positive pressure ventilation', 'thoracic trauma', 'HBC'],
    aliases: ['diaphragmatic hernia', 'diaphragm rupture', 'ไส้เลื่อนกระบังลม', 'กระบังลมฉีก'],
    source: 'Tobias & Johnston Vol 2 · Ch. on Diaphragmatic Hernia',
    sections: {
      indications: `
        <ul>
          <li><strong>Traumatic diaphragmatic hernia ✗</strong> — primary indication
            <ul>
              <li>Most common: HBC (hit-by-car), fall from height</li>
              <li>Mechanism: blunt thoracoabdominal trauma → ↑ abdominal pressure → diaphragm rupture</li>
              <li>~ 1-3% of HBC dogs/cats</li>
              <li>Often missed initially (other injuries take priority)</li>
            </ul>
          </li>
          <li><strong>Congenital — Peritoneopericardial Diaphragmatic Hernia (PPDH) ✨:</strong>
            <ul>
              <li>Persistent communication between peritoneum + pericardium</li>
              <li>Most common congenital diaphragmatic hernia in dog/cat</li>
              <li>Often incidental finding (rad/US)</li>
              <li>May be asymptomatic for years</li>
              <li>Predisposed: Weimaraner, Persian cat</li>
            </ul>
          </li>
          <li><strong>Clinical signs ✨:</strong>
            <ul>
              <li>Acute trauma: dyspnea, orthopnea, abdominal injuries, cyanosis</li>
              <li>Chronic: variable — may be incidental or have intermittent GI signs</li>
              <li>Chronic compensated: surprisingly few signs</li>
              <li>Acute decompensation: respiratory distress, vomiting</li>
            </ul>
          </li>
          <li><strong>Hernia contents:</strong>
            <ul>
              <li>Liver (most common) ✨</li>
              <li>Stomach (gastric volvulus risk — emergency!)</li>
              <li>Small intestine</li>
              <li>Spleen</li>
              <li>Omentum</li>
              <li>Pancreas</li>
            </ul>
          </li>
          <li><strong>Surgical indications:</strong>
            <ul>
              <li>Acute traumatic: surgery once stabilized (24-48 h delay if compensated)</li>
              <li>Chronic / PPDH symptomatic: surgical repair</li>
              <li>Asymptomatic PPDH: case-by-case (some monitor, some repair if young)</li>
              <li>Strangulated organs in hernia (gastric volvulus, intestinal torsion) — emergency ✗</li>
            </ul>
          </li>
        </ul>
      `,
      contraindications: `
        <ul>
          <li><strong>Acute trauma — DON'T rush to surgery ✨:</strong>
            <ul>
              <li>Stabilize first (24-48 h)</li>
              <li>Address pulmonary contusions (rest, oxygen)</li>
              <li>Correct shock, hypothermia, electrolytes</li>
              <li>Treat other injuries</li>
              <li>Operating on unstable patient = high mortality</li>
              <li>Exception: progressive deterioration, suspected strangulation, gastric volvulus → emergency</li>
            </ul>
          </li>
          <li>Severe systemic illness</li>
          <li>Severe coagulopathy</li>
          <li>Severe pulmonary contusions (poor anesthetic candidate)</li>
        </ul>
      `,
      preOp: `
        <p><strong>1. Initial assessment ✨ — STABILIZE FIRST:</strong></p>
        <ul>
          <li>ABCs:
            <ul>
              <li>Airway, breathing — oxygen support</li>
              <li>Circulation — IV fluids, blood pressure</li>
              <li>Mentation</li>
            </ul>
          </li>
          <li>Auscultation:
            <ul>
              <li>Decreased / displaced heart sounds</li>
              <li>Borborygmi in thorax (intestines in chest)</li>
              <li>Diminished lung sounds (ventral)</li>
            </ul>
          </li>
          <li>Acute trauma — full trauma assessment:
            <ul>
              <li>Other injuries (long bone fractures, head trauma, abdominal trauma)</li>
              <li>FAST scan</li>
              <li>Cardiac auscultation (myocardial contusion, arrhythmia)</li>
            </ul>
          </li>
        </ul>
        <p><strong>2. Imaging:</strong></p>
        <ul>
          <li><strong>Thoracic radiographs ✨:</strong>
            <ul>
              <li>Loss of diaphragmatic line</li>
              <li>Abdominal organs (liver, stomach with gas) in thorax</li>
              <li>Pleural effusion</li>
              <li>Cardiomegaly silhouette enlarged (PPDH — heart silhouette includes liver/abdominal contents)</li>
              <li>Mediastinal shift</li>
            </ul>
          </li>
          <li>Abdominal ultrasound:
            <ul>
              <li>Confirm hernia contents</li>
              <li>Assess organ viability</li>
              <li>Pleural effusion</li>
            </ul>
          </li>
          <li>CT (gold standard if available):
            <ul>
              <li>Detailed anatomy</li>
              <li>Identify all herniated structures</li>
              <li>Plan surgical approach</li>
            </ul>
          </li>
          <li>Contrast study (rare):
            <ul>
              <li>Barium GI study can confirm if stomach / intestines in chest</li>
            </ul>
          </li>
        </ul>
        <p><strong>3. Workup:</strong></p>
        <ul>
          <li>CBC, biochem, electrolytes, BG</li>
          <li>Coag panel</li>
          <li>Lactate (perfusion marker)</li>
          <li>Type / crossmatch (transfusion risk)</li>
          <li>UA</li>
        </ul>
        <p><strong>4. Pre-op stabilization ✨:</strong></p>
        <ul>
          <li>Oxygen supplementation</li>
          <li>IV fluids — careful (avoid worsening pulmonary edema)</li>
          <li>Pain control:
            <ul>
              <li>Methadone 0.2-0.4 mg/kg IV (cardio-stable)</li>
              <li>Avoid mu agonists if respiratory compromise — careful titration</li>
            </ul>
          </li>
          <li>Position with elevated head + sternal recumbency to maximize lung expansion</li>
          <li>Treat pulmonary contusions:
            <ul>
              <li>Rest, oxygen</li>
              <li>NOT diuretics (worsen hypovolemia in trauma)</li>
              <li>NOT corticosteroids routinely (controversial)</li>
            </ul>
          </li>
          <li>Anti-emetic if vomiting (maropitant 1 mg/kg SC)</li>
          <li>If gastric distension in chest (volvulus risk): NG tube decompression</li>
          <li>Wait 24-48 h ideally before surgery (stabilization)</li>
        </ul>
        <p><strong>5. Anesthesia plan ✨ (CRITICAL):</strong></p>
        <ul>
          <li>Pre-oxygenate × 5 min</li>
          <li><strong>Positive pressure ventilation MANDATORY</strong> — once peritoneum opened, lungs collapse without PPV</li>
          <li>Plan for ventilator or manual bagging throughout surgery</li>
          <li>Avoid heavy sedation pre-op</li>
          <li>Cardio-stable induction (etomidate or low-dose propofol)</li>
        </ul>
      `,
      technique: `
        <p><strong>Surgical sequence ✨:</strong></p>
        <ol>
          <li><strong>Approach: Ventral midline laparotomy</strong>
            <ul>
              <li>Standard approach — best access to most diaphragmatic ruptures</li>
              <li>Extend to xiphoid for cranial visualization</li>
              <li>Some surgeons add caudal sternotomy if very dorsal/cranial defect</li>
            </ul>
          </li>
          <li><strong>Identify defect</strong>:
            <ul>
              <li>Locate tear in diaphragm</li>
              <li>Common locations: muscular portion (radial tears), peripheral attachments</li>
              <li>Tendinous center less commonly torn</li>
              <li>Bilateral or unilateral</li>
            </ul>
          </li>
          <li><strong>Reduce abdominal contents from thorax ✨</strong>:
            <ul>
              <li>Gentle traction</li>
              <li>If chronic + adhesions: careful dissection (don't tear lung, vessels)</li>
              <li>Identify each organ + assess viability</li>
              <li>Liver lobe torsion possible — assess</li>
              <li>Gastric volvulus possible — derotate</li>
            </ul>
          </li>
          <li><strong>Address compromised organs (if any):</strong>
            <ul>
              <li>Liver lobectomy if necrotic lobe</li>
              <li>Splenectomy if compromised</li>
              <li>Enterectomy if non-viable bowel</li>
            </ul>
          </li>
          <li><strong>Remove pleural fluid</strong> (suction if significant)</li>
          <li><strong>Repair diaphragm ✨:</strong>
            <ul>
              <li>Suture: 0 or 2-0 PDS or polypropylene (long-lasting absorbable or non-absorbable)</li>
              <li>Pattern: simple continuous or simple interrupted</li>
              <li>Apposition technique</li>
              <li>Close from caudal to cranial typically</li>
              <li>Watch for liver lobes, vena cava — don't catch in suture</li>
              <li>For chronic / large defects: may need mesh reinforcement</li>
              <li>Test integrity by gently filling thorax with saline (look for leaks)</li>
            </ul>
          </li>
          <li><strong>Re-establish thoracic negative pressure ✨ — CRITICAL:</strong>
            <ul>
              <li>Place chest tube before final diaphragm closure
                <ul>
                  <li>Through abdominal incision into thorax</li>
                  <li>Secure with purse-string + Chinese finger trap suture</li>
                </ul>
              </li>
              <li>OR aspirate via large-gauge needle through diaphragm before final suture</li>
              <li>Continue to evacuate air during closure of last sutures</li>
            </ul>
          </li>
          <li><strong>Close abdomen routine 3-layer</strong></li>
          <li><strong>Post-closure thoracocentesis</strong>:
            <ul>
              <li>Confirm full lung re-expansion via chest tube</li>
              <li>Aspirate residual air / fluid</li>
              <li>Continuous evacuation if needed × 12-24 h</li>
            </ul>
          </li>
        </ol>
        <p><strong>PPDH (congenital) — modifications:</strong></p>
        <ul>
          <li>Same general approach</li>
          <li>Defect at peritoneal-pericardial junction (cranial diaphragm)</li>
          <li>May have chronic adhesions in pericardium</li>
          <li>Close defect at junction</li>
          <li>Some PPDH require concurrent pericardectomy if pericardium thickened</li>
        </ul>
        <p><strong>Critical principles ✨:</strong></p>
        <ul>
          <li>Stabilize patient FIRST (don't rush to surgery for chronic compensated case)</li>
          <li>Positive pressure ventilation throughout surgery</li>
          <li>Atraumatic reduction of contents</li>
          <li>Assess organ viability — resect non-viable</li>
          <li>Re-establish thoracic negative pressure with chest tube</li>
          <li>Watch for re-expansion pulmonary edema post-op</li>
        </ul>
      `,
      drugs: `
        <p><strong>Pre-medication (careful — respiratory compromise):</strong></p>
        <ul>
          <li>Methadone 0.2-0.3 mg/kg IV (titrated)</li>
          <li>± Maropitant 1 mg/kg SC</li>
          <li>AVOID heavy sedation</li>
        </ul>
        <p><strong>Induction (cardio-stable):</strong></p>
        <ul>
          <li>Etomidate 1-2 mg/kg IV (preferred in unstable patient)</li>
          <li>Or low-dose Propofol 2-4 mg/kg IV titrated</li>
          <li>Pre-oxygenate × 5 min</li>
          <li>Rapid intubation</li>
          <li><strong>Positive pressure ventilation MANDATORY</strong> ✨</li>
        </ul>
        <p><strong>Maintenance:</strong></p>
        <ul>
          <li>Isoflurane / sevoflurane LOW</li>
          <li>Fentanyl CRI 5-15 mcg/kg/h ✓</li>
          <li>± Lidocaine CRI 30-50 mcg/kg/min</li>
          <li>Ventilator settings: PIP 10-15 cmH2O, RR 10-15/min, normocapnia</li>
        </ul>
        <p><strong>Antibiotics:</strong></p>
        <ul>
          <li>Pre-op: Cefazolin 22 mg/kg IV at induction, repeat q90 min</li>
          <li>If bowel involvement / contamination: Cefoxitin or add Metronidazole</li>
          <li>Post-op: 5-7 d if clean; longer if contamination</li>
        </ul>
        <p><strong>Post-op analgesia:</strong></p>
        <ul>
          <li>Continue fentanyl CRI 12-24 h post-op</li>
          <li>Methadone 0.1-0.2 mg/kg IV/IM q4-6h × 24-48 h</li>
          <li>Then Buprenorphine 0.02 mg/kg q8h × 3-5 d</li>
          <li>NSAID — careful (renal hypoperfusion in trauma):
            <ul>
              <li>Start day 2-3 once stable + hydrated</li>
              <li>Carprofen 2 mg/kg PO q12h × 7 d</li>
            </ul>
          </li>
          <li>Gabapentin 5-10 mg/kg PO q8-12h × 7-14 d</li>
        </ul>
      `,
      postOp: `
        <p><strong>Immediate (Day 0-1) — ICU CRITICAL ✨:</strong></p>
        <ul>
          <li><strong>Watch for re-expansion pulmonary edema ✗</strong> (RPE) — most feared:
            <ul>
              <li>Develops 0-24 h post-op</li>
              <li>From rapid lung re-expansion after chronic compression</li>
              <li>More common in CHRONIC hernia (chronic atelectasis)</li>
              <li>Less common in acute</li>
              <li>Signs: dyspnea, tachypnea, crackles, pink frothy sputum, hypoxemia</li>
              <li>Tx:
                <ul>
                  <li>Oxygen, sometimes positive pressure ventilation</li>
                  <li>Furosemide 2-4 mg/kg IV (cautious — hypovolemia)</li>
                  <li>Supportive care</li>
                  <li>Mortality high if severe</li>
                </ul>
              </li>
              <li>Prevention: gradual lung re-expansion intra-op (slow ventilation, avoid aggressive bagging)</li>
            </ul>
          </li>
          <li>Continuous monitoring:
            <ul>
              <li>Vital signs q1-2h</li>
              <li>Pulse oximetry</li>
              <li>Pleural fluid via chest tube</li>
              <li>Pain assessment</li>
              <li>Serial chest radiographs (q12-24h initial)</li>
            </ul>
          </li>
          <li>Pain control multimodal</li>
          <li>NPO × 12 h, then small water</li>
          <li>Watch for pneumothorax (chest tube closed, air re-accumulates)</li>
        </ul>
        <p><strong>Day 1-3:</strong></p>
        <ul>
          <li>Chest tube management:
            <ul>
              <li>Aspirate q4-6h initially → q8h → q12h based on output</li>
              <li>Remove when minimal air / fluid for 12-24 h</li>
              <li>Remove typically day 2-3</li>
            </ul>
          </li>
          <li>Begin oral nutrition if no vomiting</li>
          <li>Continue antibiotics, NSAID, opioid</li>
          <li>Discharge typically day 3-5 once stable</li>
        </ul>
        <p><strong>Day 3-14:</strong></p>
        <ul>
          <li>E-collar 14 d</li>
          <li>Restricted activity 14-21 d</li>
          <li>Monitor breathing, appetite, energy</li>
          <li>Suture removal day 10-14</li>
          <li>Recheck radiographs at 2 weeks</li>
        </ul>
        <p><strong>Long-term:</strong></p>
        <ul>
          <li>Most patients return to normal activity within 4-6 weeks</li>
          <li>Recurrence rare with proper closure</li>
          <li>QOL excellent post-recovery</li>
        </ul>
      `,
      complications: `
        <ul>
          <li><strong>Re-expansion pulmonary edema ✗</strong> — most feared:
            <ul>
              <li>Rate: 5-15% (higher in chronic cases)</li>
              <li>Mortality if severe: 30-50%</li>
              <li>Prevention: gradual ventilation, lower PIP</li>
              <li>Tx: oxygen, ventilation, furosemide cautiously</li>
            </ul>
          </li>
          <li><strong>Pneumothorax post-op</strong>:
            <ul>
              <li>Recurrence of air in pleural space</li>
              <li>Tx: chest tube replacement, identify source</li>
            </ul>
          </li>
          <li><strong>Recurrence of diaphragmatic hernia</strong>:
            <ul>
              <li>Rare with proper closure (&lt; 5%)</li>
              <li>Higher with: large defect, chronic, mesh failure, infection</li>
            </ul>
          </li>
          <li><strong>Liver lobe torsion / necrosis</strong>:
            <ul>
              <li>From compression in hernia</li>
              <li>May require lobectomy intra-op</li>
            </ul>
          </li>
          <li><strong>Gastric volvulus</strong> (in stomach-containing hernia):
            <ul>
              <li>Emergency derotation + gastropexy</li>
            </ul>
          </li>
          <li><strong>Bowel necrosis / strangulation</strong> in chronic hernia → enterectomy</li>
          <li>Mortality during anesthesia / immediate post-op: 10-20% in acute trauma cases</li>
          <li>Wound infection / dehiscence</li>
          <li>Pneumonia (pulmonary contusion → infection)</li>
          <li>Atelectasis (chronic compression → slow re-expansion)</li>
          <li>Adhesions long-term</li>
        </ul>
      `,
      outcome: `
        <ul>
          <li><strong>Acute traumatic — properly stabilized ✓:</strong>
            <ul>
              <li>Survival 80-90% with proper stabilization + delayed surgery</li>
              <li>Survival 50-70% if operated on unstable patient</li>
              <li>Recovery 4-6 weeks</li>
            </ul>
          </li>
          <li><strong>Chronic traumatic / PPDH:</strong>
            <ul>
              <li>Survival 90-95% (more time for stabilization)</li>
              <li>Lower risk of pulmonary complications</li>
              <li>Excellent long-term outcome</li>
            </ul>
          </li>
          <li><strong>Strangulated organs:</strong>
            <ul>
              <li>Gastric volvulus + diaphragmatic hernia: complex emergency, mortality 30-50%</li>
              <li>Bowel necrosis: depends on extent</li>
            </ul>
          </li>
          <li><strong>PPDH asymptomatic:</strong>
            <ul>
              <li>Some monitor without surgery (especially older animals)</li>
              <li>Surgical correction has &gt; 95% success rate when performed</li>
            </ul>
          </li>
          <li><strong>Long-term:</strong>
            <ul>
              <li>Most return to normal activity</li>
              <li>QOL excellent</li>
              <li>Recurrence rare</li>
            </ul>
          </li>
          <li><strong>Mortality:</strong>
            <ul>
              <li>Healthy chronic case: 5-10%</li>
              <li>Acute traumatic: 15-25%</li>
              <li>Strangulated emergency: 30-50%</li>
            </ul>
          </li>
        </ul>
        <div class="callout">💡 <strong>STABILIZE first, surgery 24-48 h later</strong> ✨ — operating on unstable trauma patient = high mortality<br><br>**Positive pressure ventilation = MANDATORY** — lungs collapse once peritoneum opened<br><br>⚠️ **Re-expansion pulmonary edema** = most feared complication, 5-15% rate. Gradual lung re-expansion intra-op<br><br>✗ **Chest tube before final diaphragm closure** — re-establish thoracic negative pressure</div>
      `,
    },
  },

];

