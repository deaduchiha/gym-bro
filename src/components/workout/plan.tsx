import { IPlan } from "@/types/type";

export const PLANS: IPlan[] = [
  {
    day: 1,
    title: {
      en: "Push — Chest/Shoulders/Triceps (FST-7 Chest)",
      fa: "پوش — سینه/سرشانه/پشت‌بازو (FST-7 سینه)",
    },
    notes:
      "روی فاز منفی کنترل‌شده (۳ ثانیه) و فاز مثبت انفجاری تمرکز کن. در پایان سینه FST-7 انجام بده؛ بین ست‌ها نفس‌گیری و کشش عمیق داشته باش. هیدراته بمان و مصرف نمک را کمی مدیریت کن.",
    warmup: [
      {
        name: {
          en: "Treadmill Walk (Incline 3–5%)",
          fa: "پیاده‌روی تردمیل (شیب ۳–۵٪)",
        },
        sets: 1,
        reps: "6–8 min @ RPE 5–6",
        rest: "—",
        hint: "EN: Raise core temp; nasal breathing. | FA: دمای بدن را بالا ببر؛ با بینی نفس بکش.",
      },
      {
        name: {
          en: "Band Shoulder Dislocates",
          fa: "کشش سرشانه با کش (دیسلوکیت)",
        },
        sets: 2,
        reps: "12–15",
        rest: "30s",
        hint: "باز کردن سینه و سرشانه.",
      },
      {
        name: { en: "Scapular Push-ups", fa: "شنا کتف" },
        sets: 2,
        reps: "12–15",
        rest: "30s",
        hint: "فقط حرکت کتف؛ آرنج ثابت.",
      },
    ],
    exercises: [
      {
        name: {
          en: "Incline Barbell Bench Press",
          fa: "پرس سینه هالتر شیب‌دار",
        },
        sets: 4,
        reps: "6–8",
        rest: "120s",
        hint: "نگه‌داشتن ۱ ثانیه پایین، منفی ۳ ثانیه.",
      },
      {
        name: { en: "Flat Dumbbell Bench Press", fa: "پرس سینه دمبل" },
        sets: 3,
        reps: "8–10",
        rest: "90s",
        hint: "آرنج‌ها ۴۵ درجه.",
      },
      {
        name: { en: "Seated DB Shoulder Press", fa: "پرس سرشانه دمبل نشسته" },
        sets: 4,
        reps: "6–10",
        rest: "120s",
        hint: "قوس کمر را کنترل کن.",
      },
      {
        name: { en: "Cable Fly (Mid)", fa: "کراس‌اور سیمکش (میانی)" },
        sets: 3,
        reps: "12–15",
        rest: "60s",
        hint: "مکث ۱–۲ ثانیه در اوج.",
      },
      {
        name: { en: "Lateral Raise", fa: "نشر جانب" },
        sets: 3,
        reps: "12–15",
        rest: "60s",
        hint: "آرنج‌ها را هدایت‌کننده کن.",
      },
      {
        name: { en: "Rope Pressdown", fa: "کشش طنابی پشت‌بازو" },
        sets: 3,
        reps: "10–12",
        rest: "60–75s",
        hint: "پایین طناب را باز کن.",
      },
      {
        name: { en: "Overhead Rope Extension", fa: "پشت‌بازو بالاسر طنابی" },
        sets: 3,
        reps: "10–12",
        rest: "60–75s",
        hint: "آرنج‌ها ثابت.",
      },
    ],
    finisher: [
      {
        name: { en: "FST-7 Machine Chest Press", fa: "FST-7 پرس سینه دستگاه" },
        sets: 7,
        reps: "8–12",
        rest: "30–45s",
        hint: "وزنه‌ای که ۸–۱۲ تکرار ثابت بدهد؛ کشش سینه بین ست‌ها ۲۰–۳۰ ث.",
      },
    ],
    cardio: [
      {
        name: {
          en: "Incline Walk (Post-lift)",
          fa: "پیاده‌روی شیب‌دار (پس از تمرین)",
        },
        sets: 1,
        reps: "15–20 min @ RPE 6",
        rest: "—",
        hint: "تمرکز بر چربی‌سوزی.",
      },
    ],
  },
  {
    day: 2,
    title: {
      en: "Conditioning + Core (HIIT + Functional)",
      fa: "شرطی‌سازی + میان‌تنه (HIIT + فانکشنال)",
    },
    notes:
      "با فرود نرم از مفاصل محافظت کن؛ در گرم‌کردن از بینی نفس بکش. هدف تعریق با کیفیت است.",
    warmup: [
      {
        name: { en: "Rower Easy Pace", fa: "روئینگ آرام" },
        sets: 1,
        reps: "5–7 min",
        rest: "—",
        hint: "شدت ۴–۵.",
      },
      {
        name: { en: "World’s Greatest Stretch", fa: "کشش داینامیک کامل بدن" },
        sets: 2,
        reps: "60–90s flow",
        rest: "—",
        hint: "لگن و ستون پشتی.",
      },
    ],
    conditioning: [
      {
        name: { en: "Assault Bike Intervals", fa: "اینتروال دوچرخه ایربایک" },
        sets: 10,
        reps: "30s HARD / 30s EASY",
        rest: "—",
        hint: "سخت RPE 9؛ آسان RPE 3.",
      },
    ],
    circuit_A: [
      {
        name: { en: "Kettlebell Swings", fa: "سوئینگ کتل‌بل" },
        sets: 4,
        reps: "15",
        rest: "15s (move fast)",
        hint: "الگوی هیج؛ اسکوات نکن.",
      },
      {
        name: {
          en: "Box Step-ups (Alt Legs)",
          fa: "بالا رفتن از باکس (تناوبی)",
        },
        sets: 4,
        reps: "12/leg",
        rest: "15s",
        hint: "زانو هم‌راستا با انگشتان.",
      },
      {
        name: { en: "Battle Ropes", fa: "طناب مبارزه" },
        sets: 4,
        reps: "20–30s",
        rest: "60s (after 3 moves)",
        hint: "سینه بالا، موج کامل.",
      },
    ],
    core: [
      {
        name: { en: "Pallof Press (Anti-rotation)", fa: "پالوف پرس (ضدچرخش)" },
        sets: 3,
        reps: "12–15/side",
        rest: "45s",
        hint: "دنده‌ها پایین، گلوت فعال.",
      },
      {
        name: { en: "Dead Bug", fa: "ددباگ" },
        sets: 3,
        reps: "10–12/side",
        rest: "45s",
        hint: "کمر پایین چسبیده.",
      },
      {
        name: { en: "Side Plank", fa: "پلانک پهلو" },
        sets: 3,
        reps: "30–45s/side",
        rest: "30s",
        hint: "لگن بالا، بدن خط مستقیم.",
      },
    ],
    mobility: [
      {
        name: { en: "Hip Flexor + Calf Stretch", fa: "کشش خم‌کننده لگن + ساق" },
        sets: 2,
        reps: "60s/area",
        rest: "—",
        hint: "نفس آرام.",
      },
    ],
  },
  {
    day: 3,
    title: {
      en: "Pull — Back/Biceps (FST-7 Lats)",
      fa: "پول — پشت/جلو‌بازو (FST-7 لت)",
    },
    notes: "کمر خنثی؛ قبل از کشش، کتف‌ها را پایین بده. پایان با FST-7 لت.",
    warmup: [
      {
        name: { en: "Band Face Pulls", fa: "فیس‌پول با کش" },
        sets: 2,
        reps: "15–20",
        rest: "30s",
        hint: "آرنج بالا، چرخش خارجی.",
      },
      {
        name: { en: "Light Lat Pulldown", fa: "لت سیمکش سبک" },
        sets: 2,
        reps: "12–15",
        rest: "45s",
        hint: "راه‌اندازی دامنه حرکت.",
      },
    ],
    exercises: [
      {
        name: { en: "Chest-Supported Row", fa: "روینگ سینه‌تکیه" },
        sets: 4,
        reps: "6–8",
        rest: "120s",
        hint: "مکث ۱ ثانیه روی سینه.",
      },
      {
        name: {
          en: "Lat Pulldown (Medium-Neutral)",
          fa: "لت سیمکش (گرفتن خنثی متوسط)",
        },
        sets: 4,
        reps: "8–10",
        rest: "90s",
        hint: "تا ترقوه بکش.",
      },
      {
        name: { en: "One-Arm DB Row", fa: "پارو دمبل تک‌دست" },
        sets: 3,
        reps: "10–12/side",
        rest: "75s",
        hint: "لگن صاف؛ کشش کامل.",
      },
      {
        name: {
          en: "Seated Cable Row (Wide)",
          fa: "روینگ سیمکش نشسته (گرفتن عریض)",
        },
        sets: 3,
        reps: "10–12",
        rest: "75s",
        hint: "هدایت با آرنج‌ها.",
      },
      {
        name: { en: "Face Pull (Cable)", fa: "فیس‌پول سیمکش" },
        sets: 3,
        reps: "12–15",
        rest: "60s",
        hint: "تمرکز پشت‌سرشانه.",
      },
      {
        name: { en: "EZ-Bar Curl", fa: "جلو بازو هالتر خم (EZ)" },
        sets: 3,
        reps: "8–10",
        rest: "60–75s",
        hint: "بدون تاب دادن.",
      },
      {
        name: { en: "Incline DB Curl", fa: "جلو بازو دمبل روی میز شیب‌دار" },
        sets: 3,
        reps: "10–12",
        rest: "60–75s",
        hint: "چرخش کامل مچ به بیرون.",
      },
    ],
    finisher: [
      {
        name: { en: "FST-7 Straight-Arm Pulldown", fa: "FST-7 لت دست‌صاف" },
        sets: 7,
        reps: "10–12",
        rest: "30–45s",
        hint: "دنده‌ها پایین؛ کشش عمیق لت ۲۰–۳۰ ث.",
      },
    ],
    cardio: [
      {
        name: {
          en: "Incline Walk or Stairmaster",
          fa: "پیاده‌روی شیب‌دار یا استیرمستر",
        },
        sets: 1,
        reps: "12–15 min @ RPE 6",
        rest: "—",
        hint: "تنفس از بینی.",
      },
    ],
  },
  {
    day: 4,
    title: {
      en: "Legs — Quads/Glutes/Hams (FST-7 Quads)",
      fa: "پا — جلوپا/گلوت/همسترینگ (FST-7 چهارسر)",
    },
    notes:
      "در صورت نیاز از زانوبند استفاده کن؛ عمق کامل با کنترل. امروز FST-7 برای چهارسر است.",
    warmup: [
      {
        name: { en: "Bike + Hip Openers", fa: "دوچرخه ثابت + کشش لگن" },
        sets: 1,
        reps: "6–8 min + 2 x 60s per side",
        rest: "—",
        hint: "گرم‌کردن زانوها.",
      },
      {
        name: { en: "Glute Bridge (Activation)", fa: "گلوت بریج (فعال‌سازی)" },
        sets: 2,
        reps: "15",
        rest: "30s",
        hint: "زنجیره پشتی فعال.",
      },
    ],
    exercises: [
      {
        name: {
          en: "Back Squat (or Hack/Safety-Bar)",
          fa: "اسکوات هالتر (یا هَک/سیفتی بار)",
        },
        sets: 4,
        reps: "5–6",
        rest: "150s",
        hint: "منفی ۳ ث؛ سفتی تنه.",
      },
      {
        name: { en: "Bulgarian Split Squat", fa: "لانج بلغاری" },
        sets: 3,
        reps: "8–10/leg",
        rest: "90s",
        hint: "هم‌راستای انگشتان.",
      },
      {
        name: { en: "Romanian Deadlift", fa: "ددلیفت رومانیایی" },
        sets: 3,
        reps: "8–10",
        rest: "120s",
        hint: "باسن عقب؛ ساق پا عمودی.",
      },
      {
        name: { en: "Seated Leg Curl", fa: "پشت پا دستگاه نشسته" },
        sets: 3,
        reps: "10–12",
        rest: "75s",
        hint: "مکث ۱ ث.",
      },
    ],
    finisher: [
      {
        name: {
          en: "FST-7 Leg Press (Quad focus)",
          fa: "FST-7 پرس پا (تمرکز روی چهارسر)",
        },
        sets: 7,
        reps: "10–12",
        rest: "30–45s",
        hint: "پاها پایین/متوسط روی دستگاه؛ کشش عمیق بین ست‌ها.",
      },
    ],
    accessory_circuit: [
      {
        name: { en: "Walking Lunges", fa: "لانج راه‌رفتنی" },
        sets: 2,
        reps: "12/leg",
        rest: "—",
        hint: "گام کوتاه، تنه قائم.",
      },
      {
        name: { en: "Standing Calf Raise", fa: "ساق پا ایستاده" },
        sets: 3,
        reps: "12–15",
        rest: "45s",
        hint: "دامنه کامل، مکث ۲ ث بالا.",
      },
    ],
    cardio: [
      {
        name: { en: "Bike Flush", fa: "دوچرخه سبک پایان تمرین" },
        sets: 1,
        reps: "10–12 min @ RPE 5",
        rest: "—",
        hint: "کمک به ریکاوری.",
      },
    ],
  },
  {
    day: 5,
    title: {
      en: "Metabolic Full-Body + Engine (Circuits/EMOM)",
      fa: "تمام‌بدن متابولیک + استقامت (سیرکیت/EMOM)",
    },
    notes:
      "امروز تمرکز بر عملکرد ورزشی؛ حرکت تمیز، از تکرارهای فرسایشی پرهیز کن.",
    warmup: [
      {
        name: { en: "Jump Rope", fa: "طناب‌زنی" },
        sets: 1,
        reps: "3–5 min easy",
        rest: "—",
        hint: "گام‌های سبک.",
      },
      {
        name: { en: "Cossack Squats (Alt)", fa: "اسکوات قزاقی (تناوبی)" },
        sets: 2,
        reps: "8/side",
        rest: "30s",
        hint: "باز کردن لگن.",
      },
    ],
    circuit_A: [
      {
        name: { en: "Goblet Squat", fa: "گابلت اسکوات" },
        sets: 4,
        reps: "12",
        rest: "15s (transition)",
        hint: "پاشنه‌ها روی زمین، سینه بالا.",
      },
      {
        name: { en: "Push-ups", fa: "شنا سوئدی" },
        sets: 4,
        reps: "AMRAP (8–15 target)",
        rest: "15s",
        hint: "دامنه کامل.",
      },
      {
        name: { en: "Kettlebell Deadlift (Hinge)", fa: "ددلیفت کتل‌بل (هیج)" },
        sets: 4,
        reps: "12–15",
        rest: "15s",
        hint: "لت‌ها فعال، ستون فقرات خنثی.",
      },
      {
        name: { en: "Ring/TRX Row", fa: "روینگ با حلقه/TRX" },
        sets: 4,
        reps: "10–12",
        rest: "60s (after 4 moves)",
        hint: "جمع‌کردن کتف‌ها.",
      },
    ],
    emom_B: [
      {
        name: {
          en: "EMOM 12: Minute 1 — Rower",
          fa: "EMOM ۱۲: دقیقه ۱ — روئینگ",
        },
        sets: 1,
        reps: "12 min total",
        rest: "—",
        hint: "۱۲–۱۵ کالری در دقیقه ۱.",
      },
      {
        name: {
          en: "Minute 2 — Kettlebell Swings",
          fa: "دقیقه ۲ — سوئینگ کتل‌بل",
        },
        sets: 1,
        reps: "15–20 reps",
        rest: "—",
        hint: "اسنپ مفصل ران.",
      },
      {
        name: { en: "Minute 3 — Assault Bike", fa: "دقیقه ۳ — ایربایک" },
        sets: 1,
        reps: "10–12 cal",
        rest: "—",
        hint: "کادانس یکنواخت.",
      },
    ],
    core: [
      {
        name: { en: "Farmer Carry", fa: "فارمرز واک" },
        sets: 4,
        reps: "30–40m heavy",
        rest: "60–75s",
        hint: "برِیس محکم، گام کوتاه.",
      },
    ],
    mobility: [
      {
        name: {
          en: "Thoracic Extension on Foam Roller",
          fa: "اکستنشن ستون پشتی با رول",
        },
        sets: 2,
        reps: "60–90s",
        rest: "—",
        hint: "تنفس آرام.",
      },
    ],
    cardio: [
      {
        name: { en: "Stairmaster Cooldown", fa: "استیرمستر (خنک‌کردن)" },
        sets: 1,
        reps: "10–12 min @ RPE 5–6",
        rest: "—",
        hint: "شست‌وشوی عضلات پا؛ آرام تمام کن.",
      },
    ],
  },
];
