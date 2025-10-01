export const PLAN = {
  meta: {
    client: "Alireza Nikzad",
    date: "2025-09-27",
    goal: {
      en: "Cut body fat from ~27% to 15–18% and reduce visceral fat from 9 → ≤5 while maintaining/increasing lean mass.",
      fa: "کاهش چربی بدن از حدود ۲۷٪ به ۱۵–۱۸٪ و کاهش چربی احشایی از ۹ به ≤۵ با حفظ/افزایش توده بدون چربی.",
    },
    weekly_notes: {
      en: "Train 5 days/week. Add 8–10k steps daily. Keep 1–2 reps in reserve (RIR) on big lifts. Use low-impact cardio (bike/row/incline walk). If joints feel beat up, reduce volume by 20%.",
      fa: "۵ روز در هفته تمرین. روزانه ۸–۱۰ هزار قدم. در حرکات اصلی ۱–۲ تکرار ذخیره (RIR) نگه‌دار. کاردیو کم‌فشار (دوچرخه/روینگ/پیاده‌روی با شیب). در صورت خستگی مفاصل، حجم را ۲۰٪ کم کن.",
    },
  },
  week_plan: [
    {
      day: 1,
      title: {
        en: "Upper Strength + Metabolic Finisher",
        fa: "بالاتنه قدرتی + فینیشر متابولیک",
      },
      notes: {
        en: "Heavy compounds to preserve strength; short finisher to boost calorie burn.",
        fa: "حرکات اصلی سنگین برای حفظ قدرت؛ فینیشر کوتاه برای افزایش کالری‌سوزی.",
      },
      warmup: [
        {
          name: {
            en: "Incline treadmill walk (5–7%)",
            fa: "پیاده‌روی روی تردمیل با شیب ۵–۷٪",
          },
          sets: 1,
          reps: "8–10 min",
          rest: "-",
          hint: {
            en: "Nasal breathing, easy pace.",
            fa: "تنفس از بینی، شدت ملایم.",
          },
        },
        {
          name: {
            en: "Band pull-aparts + Scap push-ups",
            fa: "کشش کشی پشت شانه + شنا اسکاپیولا",
          },
          sets: 2,
          reps: "15 each",
          rest: "30 s",
          hint: {
            en: "Prime shoulders & upper back.",
            fa: "گرم‌کردن سرشانه و پشت.",
          },
        },
      ],
      exercises: [
        {
          name: { en: "Barbell Bench Press", fa: "پرس سینه هالتر" },
          sets: 4,
          reps: "5–6",
          rest: "120–150 s",
          hint: {
            en: "RIR 1–2; full stop on chest, no bounce.",
            fa: "۱–۲ تکرار ذخیره؛ مکث کوتاه روی سینه، بدون جهش.",
          },
        },
        {
          name: { en: "Chest-Supported Row", fa: "划 پارویی سینه‌تکیه" },
          sets: 4,
          reps: "6–8",
          rest: "120 s",
          hint: {
            en: "Drive elbows to ribs; neutral spine.",
            fa: "آرنج‌ها به سمت دنده؛ ستون فقرات خنثی.",
          },
        },
        {
          name: { en: "Incline Dumbbell Press", fa: "پرس سینه دمبل روی شیب" },
          sets: 3,
          reps: "8–10",
          rest: "90 s",
          hint: {
            en: "2–3 s controlled lowering.",
            fa: "۲–۳ ثانیه پایین‌بردن کنترل‌شده.",
          },
        },
        {
          name: {
            en: "Lat Pulldown (medium grip)",
            fa: "لت پول‌داون (گریپ متوسط)",
          },
          sets: 3,
          reps: "8–10",
          rest: "90 s",
          hint: {
            en: "Chest up, pull to collarbone.",
            fa: "سینه بالا، کشش تا ترقوه.",
          },
        },
        {
          name: {
            en: "Dumbbell Lateral Raise",
            fa: "پشت‌سرشانه جانبى با دمبل",
          },
          sets: 3,
          reps: "12–15",
          rest: "60 s",
          hint: {
            en: "Soft elbows; raise to shoulder height.",
            fa: "آرنج‌ها کمی خم؛ تا ارتفاع شانه.",
          },
        },
      ],
      finisher: [
        {
          name: { en: "AirBike sprints", fa: "اسپرینت روی ایر بایک" },
          sets: 8,
          reps: "15 s hard / 45 s easy",
          rest: "as written",
          hint: {
            en: "Stay seated; smooth power.",
            fa: "نشسته بمان؛ توان یکنواخت.",
          },
        },
      ],
    },
    {
      day: 2,
      title: { en: "Lower Strength + Core", fa: "پایین‌تنه قدرتی + میان‌تنه" },
      notes: {
        en: "Big leg moves to drive metabolism; core for spinal stability.",
        fa: "حرکات سنگین پا برای تقویت متابولیسم؛ میان‌تنه برای ثبات ستون فقرات.",
      },
      warmup: [
        {
          name: { en: "Bike + Hip openers", fa: "دوچرخه ثابت + موبیلیتی لگن" },
          sets: 1,
          reps: "6–8 min",
          rest: "-",
          hint: {
            en: "Light spin; cossack squats 2×8/side.",
            fa: "چرخش سبک؛ اسکوات کاساک ۲×۸ هر سمت.",
          },
        },
      ],
      exercises: [
        {
          name: {
            en: "Back or Safety-Bar Squat",
            fa: "اسکوات هالتر یا سیفتی‌بار",
          },
          sets: 4,
          reps: "5–6",
          rest: "150 s",
          hint: {
            en: "Depth to comfortable range; RIR 1–2.",
            fa: "تا عمق بدون درد؛ ۱–۲ تکرار ذخیره.",
          },
        },
        {
          name: { en: "Romanian Deadlift", fa: "ددلیفت رومانیایی" },
          sets: 3,
          reps: "6–8",
          rest: "120 s",
          hint: {
            en: "Hinge at hips; feel hamstrings.",
            fa: "لولا از لگن؛ تمرکز روی همسترینگ.",
          },
        },
        {
          name: {
            en: "Leg Press (feet mid/low)",
            fa: "پرس پا (قرارگیری پا متوسط/پایین)",
          },
          sets: 3,
          reps: "10–12",
          rest: "90 s",
          hint: {
            en: "Full lockout not required; control tempo.",
            fa: "نیازی به قفل کامل زانو نیست؛ کنترل ریتم.",
          },
        },
        {
          name: { en: "Seated Leg Curl", fa: "لیگ‌کرل نشسته" },
          sets: 3,
          reps: "12–15",
          rest: "60–75 s",
          hint: {
            en: "Squeeze 1 s at peak.",
            fa: "۱ ثانیه مکث در اوج انقباض.",
          },
        },
        {
          name: { en: "Standing Calf Raise", fa: "ساق ایستاده" },
          sets: 4,
          reps: "12–15",
          rest: "60 s",
          hint: {
            en: "Slow 2–3 s lowering; stretch between sets 10 s.",
            fa: "۲–۳ ثانیه فاز منفی؛ بین ست‌ها ۱۰ ثانیه کشش.",
          },
        },
      ],
      core: [
        {
          name: { en: "Plank", fa: "پلانک" },
          sets: 3,
          reps: "45–60 s",
          rest: "30 s",
          hint: {
            en: "Ribs down, glutes tight.",
            fa: "دنده‌ها پایین، گلوت سفت.",
          },
        },
        {
          name: { en: "Pallof Press", fa: "پالوف پرس" },
          sets: 3,
          reps: "10/side",
          rest: "30 s",
          hint: {
            en: "Anti-rotation; don’t let hips twist.",
            fa: "ضدچرخش؛ اجازه پیچش لگن نده.",
          },
        },
      ],
      cardio: [
        {
          name: { en: "Incline walk (Zone 2)", fa: "پیاده‌روی با شیب (زون ۲)" },
          sets: 1,
          reps: "12–15 min",
          rest: "-",
          hint: {
            en: "You can talk in full sentences.",
            fa: "بتوانی کامل صحبت کنی.",
          },
        },
      ],
    },
    {
      day: 3,
      title: { en: "Conditioning + Mobility", fa: "کاندیشنینگ + موبیلیتی" },
      notes: {
        en: "Low-impact intervals for fat loss; finish with mobility to aid recovery.",
        fa: "اینتروال کم‌فشار برای چربی‌سوزی؛ پایان با موبیلیتی برای ریکاوری.",
      },
      conditioning: [
        {
          name: { en: "Rowing Intervals", fa: "اینتروال روئینگ" },
          sets: 10,
          reps: "30 s hard / 90 s easy",
          rest: "as written",
          hint: {
            en: "Keep strokes smooth; hard = 8/10 effort.",
            fa: "کشش‌ها نرم و پیوسته؛ شدت سخت ۸ از ۱۰.",
          },
        },
      ],
      accessory_circuit: [
        {
          name: { en: "Goblet Squat (light)", fa: "گابلت اسکوات (سبک)" },
          sets: 3,
          reps: "12",
          rest: "45 s",
          hint: {
            en: "Heels down, chest tall.",
            fa: "پاشنه‌ها روی زمین، سینه بالا.",
          },
        },
        {
          name: {
            en: "Push-up (elevated if needed)",
            fa: "شنا (در صورت نیاز با ارتفاع)",
          },
          sets: 3,
          reps: "8–12",
          rest: "45 s",
          hint: {
            en: "Stop 1 rep before failure.",
            fa: "۱ تکرار قبل از ناتوانی توقف کن.",
          },
        },
        {
          name: { en: "Band Face Pull", fa: "فیس‌پول با کش" },
          sets: 3,
          reps: "15",
          rest: "45 s",
          hint: {
            en: "Rope to nose; external rotation.",
            fa: "کشش تا مقابل بینی؛ چرخش خارجی.",
          },
        },
      ],
      mobility: [
        {
          name: {
            en: "90/90 Hips + Thoracic Rotations",
            fa: "۹۰/۹۰ لگن + چرخش قفسه‌سینه",
          },
          sets: 1,
          reps: "10 min total",
          rest: "-",
          hint: { en: "Slow breathing; no pain.", fa: "تنفس آهسته؛ بدون درد." },
        },
      ],
    },
    {
      day: 4,
      title: {
        en: "Upper Hypertrophy (Back/Delts/Chest) + Short Cardio",
        fa: "بالاتنه هایپرتروفی (پشت/سرشانه/سینه) + کاردیو کوتاه",
      },
      notes: {
        en: "Higher reps for muscle retention and extra calorie burn.",
        fa: "تکرارهای بالاتر برای حفظ عضله و سوزاندن کالری بیشتر.",
      },
      warmup: [
        {
          name: {
            en: "Incline walk + Shoulder CARs",
            fa: "پیاده‌روی با شیب + چرخش مفصل شانه",
          },
          sets: 1,
          reps: "6–8 min",
          rest: "-",
          hint: { en: "Light sweat only.", fa: "فقط کمی عرق." },
        },
      ],
      exercises: [
        {
          name: { en: "Seated Cable Row", fa: "روئینگ سیم‌کش نشسته" },
          sets: 4,
          reps: "8–10",
          rest: "90 s",
          hint: { en: "Chest up; 1 s squeeze.", fa: "سینه بالا؛ ۱ ثانیه مکث." },
        },
        {
          name: { en: "Incline DB Press", fa: "پرس دمبل شیب‌دار" },
          sets: 4,
          reps: "8–12",
          rest: "90 s",
          hint: { en: "Control eccentric 2–3 s.", fa: "فاز منفی ۲–۳ ثانیه." },
        },
        {
          name: { en: "Wide-Grip Pulldown", fa: "پول‌داون دست‌باز" },
          sets: 3,
          reps: "10–12",
          rest: "75–90 s",
          hint: { en: "Elbows under bar path.", fa: "آرنج‌ها زیر مسیر میله." },
        },
        {
          name: { en: "DB Shoulder Press", fa: "پرس سرشانه دمبل" },
          sets: 3,
          reps: "8–10",
          rest: "90 s",
          hint: { en: "No lower-back arch.", fa: "قوس کمر نده." },
        },
        {
          name: {
            en: "Cable Fly (mid height)",
            fa: "کابل فلای (ارتفاع متوسط)",
          },
          sets: 3,
          reps: "12–15",
          rest: "60 s",
          hint: {
            en: "Stretch 1–2 s; squeeze 1 s.",
            fa: "۱–۲ ثانیه کشش؛ ۱ ثانیه انقباض.",
          },
        },
        {
          name: {
            en: "DB Lateral Raise (drop set last)",
            fa: "لترال دمبل (ست کاهشیِ آخر)",
          },
          sets: 3,
          reps: "12–15",
          rest: "60 s",
          hint: { en: "Last set drop 25–30%.", fa: "ست آخر ۲۵–۳۰٪ وزن کمتر." },
        },
      ],
      cardio: [
        {
          name: { en: "Stair machine (Zone 3)", fa: "پله‌نورد (زون ۳)" },
          sets: 1,
          reps: "10–12 min",
          rest: "-",
          hint: {
            en: "Breathing heavy but sustainable.",
            fa: "نفس‌نفس اما قابل‌دوام.",
          },
        },
      ],
    },
    {
      day: 5,
      title: {
        en: "Full-Body Metabolic Circuit + Carries",
        fa: "تمام‌بدن متابولیک + کری‌ها",
      },
      notes: {
        en: "Circuits raise heart rate and calorie burn without joint pounding; carries build core and grip.",
        fa: "سیرکیت‌ها ضربان و کالری‌سوزی را بالا می‌برند بدون فشار زیاد به مفاصل؛ کری‌ها میان‌تنه و گریپ را تقویت می‌کنند.",
      },
      warmup: [
        {
          name: { en: "Bike + Dynamic mobility", fa: "دوچرخه + موبیلیتی پویا" },
          sets: 1,
          reps: "6–8 min",
          rest: "-",
          hint: {
            en: "Light sweat before Circuit A.",
            fa: "کمی عرق قبل از سیرکیت A.",
          },
        },
      ],
      circuit_A: [
        {
          name: {
            en: "Trap-Bar Deadlift (moderate)",
            fa: "ددلیفت تراپ‌بار (متوسط)",
          },
          sets: 4,
          reps: "6",
          rest: "30–45 s between moves; 2 min between rounds",
          hint: {
            en: "Explode up; control down.",
            fa: "انفجاری بالا؛ کنترل پایین.",
          },
        },
        {
          name: { en: "DB Push Press", fa: "پوش‌پرس دمبل" },
          sets: 4,
          reps: "10",
          rest: "as above",
          hint: { en: "Use legs to initiate drive.", fa: "شروع حرکت با پاها." },
        },
        {
          name: { en: "TRX / Bodyweight Row", fa: "روئینگ وزن بدن/تی‌آر‌ایکس" },
          sets: 4,
          reps: "12",
          rest: "as above",
          hint: {
            en: "Straight line ears–hips–heels.",
            fa: "گوش تا پاشنه در یک خط.",
          },
        },
        {
          name: { en: "Reverse Lunge", fa: "لانج عقب" },
          sets: 4,
          reps: "10/leg",
          rest: "as above",
          hint: {
            en: "Long step; knee under hip.",
            fa: "گام بلند؛ زانو زیر لگن.",
          },
        },
        {
          name: { en: "Ab-Wheel / Dead-Bug", fa: "اَب‌ویل / ددباگ" },
          sets: 4,
          reps: "8–10 or 10/side",
          rest: "as above",
          hint: {
            en: "Ribs down; no lower-back arch.",
            fa: "دنده پایین؛ قوس کمر نده.",
          },
        },
      ],
      emom_B: [
        {
          name: {
            en: "Sled Push (Every Minute on the Minute)",
            fa: "هل دادن سورتمه (EMOM)",
          },
          sets: 8,
          reps: "15–20 m at start of each minute",
          rest: "Remainder of minute",
          hint: {
            en: "Load to finish in ~20–30 s.",
            fa: "وزن طوری باشد که ۲۰–۳۰ ثانیه طول بکشد.",
          },
        },
      ],
      finisher: [
        {
          name: { en: "Farmer Carry", fa: "کری کشاورز" },
          sets: 3,
          reps: "40–60 m",
          rest: "60–90 s",
          hint: {
            en: "Tight abs; short quick steps.",
            fa: "شکم سفت؛ قدم‌های کوتاه و سریع.",
          },
        },
      ],
    },
  ],
  extra_guidelines: {
    nutrition: {
      en: "Start around 2,800–2,900 kcal/day, 180–200 g protein, 70–90 g fat, rest carbs. Place 60–70% carbs pre/post-workout.",
      fa: "شروع حدود ۲۸۰۰–۲۹۰۰ کیلوکالری در روز، ۱۸۰–۲۰۰ گرم پروتئین، ۷۰–۹۰ گرم چربی، بقیه کربوهیدرات. ۶۰–۷۰٪ کربوهیدرات‌ها قبل/بعد تمرین.",
    },
    progression: {
      en: "Add 2.5–5 kg or 1–2 reps weekly if RIR ≥2 remains. If recovery lags, cut sets by 1 each exercise for one week.",
      fa: "هفته‌ای ۲٫۵–۵ کیلو یا ۱–۲ تکرار اضافه کن اگر ۲ تکرار ذخیره داری. در صورت افت ریکاوری، یک ست از هر حرکت برای یک هفته کم کن.",
    },
    recovery: {
      en: "Sleep 7.5–9 h. Hydrate 4–5 L/day. Light mobility on rest days.",
      fa: "خواب ۷٫۵–۹ ساعت. روزانه ۴–۵ لیتر آب. در روزهای استراحت موبیلیتی سبک.",
    },
  },
};
