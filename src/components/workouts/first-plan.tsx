import {
  backRearDeltsRows,
  chestTricepsRows,
  legsHamGlutesCalvesRows,
  quadsCalvesRows,
  shouldersBicepsCoreRows,
} from "@/plans/month-1";
import WorkoutPlan from "../workout-plan";

export default function FirstPlan() {
  return (
    <div className="space-y-5">
      <WorkoutPlan
        header={{
          title: "جلسه ۱ — سینه + پشت‌بازو",
          description: "FST-7 Chest Fly",
        }}
        footer={{
          title: "3–1–1 = ۳ ثانیه منفی، ۱ ثانیه مکث، ۱ ثانیه مثبت",
          description:
            "FST-7 = ۷ ست با ۳۰–۴۵ث استراحت + کشش ایزومتریک بین‌ست‌ها",
        }}
        plan={chestTricepsRows}
      />
      <WorkoutPlan
        header={{
          title: "جلسه ۲ — پشت + دلتوئید خلفی",
          description: "FST-7 Lats",
        }}
        footer={{
          title:
            "3–1–1 = ۳ ثانیه منفی، ۱ ثانیه مکث، ۱ ثانیه مثبت | 2–1–1 = ۲ منفی، ۱ مکث، ۱ مثبت",
          description:
            "FST-7 = ۷ ست با ۳۰–۴۵ث استراحت + کشش ایزومتریک بین‌ست‌ها",
        }}
        plan={backRearDeltsRows}
      />
      <WorkoutPlan
        header={{
          title: "جلسه ۳ — پا (همسترینگ/گلوت) + ساق",
        }}
        footer={{
          title:
            "3–1–1 = ۳ ثانیه منفی، ۱ ثانیه مکث، ۱ ثانیه مثبت | 2–1–1 = ۲ منفی، ۱ مکث، ۱ مثبت",
          description:
            "FST-7 (اختیاری برای ساق) = ۷ ست با ۳۰–۴۵ث استراحت + کشش بین‌ست",
        }}
        plan={legsHamGlutesCalvesRows}
      />
      <WorkoutPlan
        header={{
          title: "جلسه ۴ — سرشانه + جلو بازو",
          description: "FST-7 Laterals + Core",
        }}
        footer={{
          title:
            "3–1–1 = ۳ ثانیه منفی، ۱ ثانیه مکث، ۱ ثانیه مثبت | 2–1–1 = ۲ منفی، ۱ مکث، ۱ مثبت",
          description:
            "FST-7 = ۷ ست با ۳۰–۴۵ث استراحت + کشش ایزومتریک بین‌ست‌ها",
        }}
        plan={shouldersBicepsCoreRows}
      />
      <WorkoutPlan
        header={{
          title: "جلسه ۵ — پا (کواد) + ساق",
          description: "FST-7 Quads",
        }}
        footer={{
          title:
            "3–1–1 = ۳ ثانیه منفی، ۱ ثانیه مکث، ۱ ثانیه مثبت | 2–1–1 = ۲ منفی، ۱ مکث، ۱ مثبت",
          description:
            "FST-7 = ۷ ست با ۳۰–۴۵ث استراحت + کشش ایزومتریک بین‌ست‌ها",
        }}
        plan={quadsCalvesRows}
      />
    </div>
  );
}
