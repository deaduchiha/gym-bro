"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useClipboard } from "@/hooks/use-copy";
import { useEffect } from "react";
import { toast } from "sonner";

export default function FirstPlan() {
  return (
    <div className="space-y-5">
      <SessionChestTriceps />
      <SessionBackRearDelts />
      <SessionLegsHamGlutesCalves />
      <SessionShouldersBicepsCore />
      <SessionQuadsCalvesFST7 />
    </div>
  );
}

function SessionChestTriceps() {
  const { copied, copy } = useClipboard();

  useEffect(() => {
    if (copied) toast.success("متن شما با موفیت کپی شد");
  }, [copied]);
  return (
    <Card className="p-4" dir="rtl">
      <h3 className="text-lg font-bold mb-3 text-right">
        جلسه ۱ — سینه + پشت‌بازو{" "}
        <span className="text-muted-foreground">(FST-7 Chest Fly)</span>
      </h3>

      <ScrollArea className="w-full">
        <Table dir="ltr" className=" text-right">
          <TableHeader>
            <TableRow>
              <TableHead>حرکت</TableHead>
              <TableHead className="text-right whitespace-nowrap">
                ست × تکرار
              </TableHead>
              <TableHead>تمپو</TableHead>
              <TableHead>استراحت</TableHead>
              <TableHead>توضیح</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => {
                  copy("Incline DB Press");
                }}
              >
                Incline DB Press
              </TableCell>
              <TableCell>۳–۵ × ۶–۱۰</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۹۰–۱۲۰ث</TableCell>
              <TableCell>کمپاندِ اصلی</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => {
                  copy("Machine/Barbell Flat Press");
                }}
              >
                Machine/Barbell Flat Press
              </TableCell>
              <TableCell>۳–۴ × ۶–۱۰</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۹۰–۱۲۰ث</TableCell>
              <TableCell>فشار افقی</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => {
                  copy("Weighted/Assisted Dips");
                }}
              >
                Weighted/Assisted Dips
              </TableCell>
              <TableCell>۲–۳ × ۸–۱۲</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>~۹۰ث</TableCell>
              <TableCell>سینه‌محور</TableCell>
            </TableRow>

            <TableRow className="bg-muted/30">
              <TableCell
                className="text-left"
                role="button"
                onClick={() => {
                  copy("Cable Fly (High→Low");
                }}
              >
                Cable Fly (High→Low/Mid)
                <Badge variant="secondary" className="whitespace-nowrap">
                  FST-7
                </Badge>
              </TableCell>
              <TableCell>۷ × ۱۰–۱۲</TableCell>
              <TableCell>کنترلی</TableCell>
              <TableCell>۳۰–۴۵ث</TableCell>
              <TableCell>کشش بین‌ست</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => {
                  copy("Rope Pushdown</");
                }}
              >
                Rope Pushdown
              </TableCell>
              <TableCell>۳–۴ × ۱۰–۱۵</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۴۵–۷۵ث</TableCell>
              <TableCell>ایزولهٔ تریسپس</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => {
                  copy("Overhead DB/Rope");
                }}
              >
                Overhead DB/Rope Ext
              </TableCell>
              <TableCell>۲–۳ × ۱۰–۱۲</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۴۵–۷۵ث</TableCell>
              <TableCell>سرِ بلندِ تریسپس</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>کاردیو LISS</TableCell>
              <TableCell>طبق هفته</TableCell>
              <TableCell>—</TableCell>
              <TableCell>—</TableCell>
              <TableCell>۲۰–۴۵د مطابق پلن هفتگی</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollArea>

      {/* راهنمای کوتاه */}
      <div className="mt-3 text-xs text-muted-foreground space-y-1 text-right">
        <p>
          <span className="font-mono">3–1–1</span> = ۳ ثانیه منفی، ۱ ثانیه مکث،
          ۱ ثانیه مثبت
        </p>
        <p>FST-7 = ۷ ست با ۳۰–۴۵ث استراحت + کشش ایزومتریک بین‌ست‌ها</p>
      </div>
    </Card>
  );
}

function SessionBackRearDelts() {
  const { copied, copy } = useClipboard();

  useEffect(() => {
    if (copied) toast.success("متن شما با موفقیت کپی شد");
  }, [copied]);

  return (
    <Card className="p-4" dir="rtl">
      <h3 className="text-lg font-bold mb-3 text-right">
        جلسه ۲ — پشت + دلتوئید خلفی{" "}
        <span className="text-muted-foreground">(FST-7 Lats)</span>
      </h3>

      <ScrollArea className="w-full">
        <Table dir="ltr" className="text-right">
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">حرکت</TableHead>
              <TableHead className="text-right whitespace-nowrap">
                ست × تکرار
              </TableHead>
              <TableHead className="text-right">تمپو</TableHead>
              <TableHead className="text-right">استراحت</TableHead>
              <TableHead className="text-right">توضیح</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Wide-Grip Lat Pulldown")}
              >
                Wide-Grip Lat Pulldown
              </TableCell>
              <TableCell>۳–۴ × ۸–۱۲</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>~۹۰ث</TableCell>
              <TableCell>لتِ کششی</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Chest-Supported Row (T-bar/Row Machine)")}
              >
                Chest-Supported Row (T-bar/Row Machine)
              </TableCell>
              <TableCell>۳–۴ × ۶–۱۰</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۹۰–۱۲۰ث</TableCell>
              <TableCell>قایقیِ ساپورت</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Seated Cable Row (Neutral)")}
              >
                Seated Cable Row (Neutral)
              </TableCell>
              <TableCell>۳ × ۸–۱۲</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۷۵–۹۰ث</TableCell>
              <TableCell>دامنه کامل</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Single-Arm DB Row")}
              >
                Single-Arm DB Row
              </TableCell>
              <TableCell>۲–۳ × ۸–۱۲/هر سمت</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۷۵–۹۰ث</TableCell>
              <TableCell>تمرکز و سیمتری</TableCell>
            </TableRow>

            <TableRow className="bg-muted/30">
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Straight-Arm Pulldown")}
              >
                Straight-Arm Pulldown{" "}
                <Badge variant="secondary" className="whitespace-nowrap">
                  FST-7
                </Badge>
              </TableCell>
              <TableCell>۷ × ۱۰–۱۲</TableCell>
              <TableCell>کنترلی</TableCell>
              <TableCell>۳۰–۴۵ث</TableCell>
              <TableCell>کشش بین‌ست</TableCell>
            </TableRow>

            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Face Pull")}
              >
                Face Pull
              </TableCell>
              <TableCell>۲–۳ × ۱۲–۱۵</TableCell>
              <TableCell>
                <span className="font-mono">2–1–1</span>
              </TableCell>
              <TableCell>۴۵–۷۵ث</TableCell>
              <TableCell>دلتوئید خلفی / کف دست رو به هم</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>کاردیو LISS</TableCell>
              <TableCell>طبق هفته</TableCell>
              <TableCell>—</TableCell>
              <TableCell>—</TableCell>
              <TableCell>۲۰–۴۵د برحسب هفته</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollArea>

      {/* راهنمای کوتاه */}
      <div className="mt-3 text-xs text-muted-foreground space-y-1 text-right">
        <p>
          <span className="font-mono">3–1–1</span> = ۳ ثانیه منفی، ۱ ثانیه مکث،
          ۱ ثانیه مثبت | <span className="font-mono">2–1–1</span> = ۲ منفی، ۱
          مکث، ۱ مثبت
        </p>
        <p>FST-7 = ۷ ست با ۳۰–۴۵ث استراحت + کشش ایزومتریک بین‌ست‌ها</p>
      </div>
    </Card>
  );
}

function SessionLegsHamGlutesCalves() {
  const { copied, copy } = useClipboard();

  useEffect(() => {
    if (copied) toast.success("متن شما با موفقیت کپی شد");
  }, [copied]);

  return (
    <Card className="p-4" dir="rtl">
      <h3 className="text-lg font-bold mb-3 text-right">
        جلسه ۳ — پا (همسترینگ/گلوت) + ساق
      </h3>

      <ScrollArea className="w-full">
        <Table dir="ltr" className="text-right">
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">حرکت</TableHead>
              <TableHead className="text-right whitespace-nowrap">
                ست × تکرار
              </TableHead>
              <TableHead className="text-right">تمپو</TableHead>
              <TableHead className="text-right">استراحت</TableHead>
              <TableHead className="text-right">توضیح</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* Romanian Deadlift */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Romanian Deadlift")}
              >
                Romanian Deadlift
              </TableCell>
              <TableCell>۳–۴ × ۶–۱۰</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۱۲۰ث</TableCell>
              <TableCell>هیپ‌هینج؛ پشت صاف</TableCell>
            </TableRow>

            {/* Lying/Seated Leg Curl */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Lying/Seated Leg Curl")}
              >
                Lying/Seated Leg Curl
              </TableCell>
              <TableCell>۳–۴ × ۱۰–۱۲</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۶۰–۷۵ث</TableCell>
              <TableCell>هفته ۴: ست آخر Drop-set ×1</TableCell>
            </TableRow>

            {/* Hip Thrust */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Hip Thrust (BB/Machine)")}
              >
                Hip Thrust (BB/Machine)
              </TableCell>
              <TableCell>۳–۴ × ۸–۱۲</TableCell>
              <TableCell>مکث بالا ۱ث</TableCell>
              <TableCell>۹۰–۱۲۰ث</TableCell>
              <TableCell>گلوت‌محور</TableCell>
            </TableRow>

            {/* Bulgarian Split Squat */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Bulgarian Split Squat")}
              >
                Bulgarian Split Squat
              </TableCell>
              <TableCell>۲–۳ × ۸–۱۲/هر پا</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>~۹۰ث</TableCell>
              <TableCell>تعادل و عمق</TableCell>
            </TableRow>

            {/* Calf Raise */}
            <TableRow className="bg-muted/30">
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Calf Raise (Seated/Donkey)")}
              >
                Calf Raise (Seated/Donkey){" "}
                <Badge variant="secondary" className="whitespace-nowrap">
                  FST-7 (اختیاری)
                </Badge>
              </TableCell>
              <TableCell>۷ × ۱۰–۱۲ یا ۴ × ۱۲–۱۵</TableCell>
              <TableCell>
                <span className="font-mono">2–1–1</span>
              </TableCell>
              <TableCell>۳۰–۴۵ث (FST) / ۶۰–۷۵ث</TableCell>
              <TableCell>FST-7 اختیاری برای ساق</TableCell>
            </TableRow>

            {/* Cardio */}
            <TableRow>
              <TableCell>کاردیو LISS</TableCell>
              <TableCell>طبق هفته</TableCell>
              <TableCell>—</TableCell>
              <TableCell>—</TableCell>
              <TableCell>۲۰–۴۵د برحسب هفته</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollArea>

      {/* راهنمای کوتاه */}
      <div className="mt-3 text-xs text-muted-foreground space-y-1 text-right">
        <p>
          <span className="font-mono">3–1–1</span> = ۳ ثانیه منفی، ۱ ثانیه مکث،
          ۱ ثانیه مثبت | <span className="font-mono">2–1–1</span> = ۲ منفی، ۱
          مکث، ۱ مثبت
        </p>
        <p>FST-7 (اختیاری برای ساق) = ۷ ست با ۳۰–۴۵ث استراحت + کشش بین‌ست</p>
      </div>
    </Card>
  );
}

function SessionShouldersBicepsCore() {
  const { copied, copy } = useClipboard();

  useEffect(() => {
    if (copied) toast.success("متن شما با موفقیت کپی شد");
  }, [copied]);

  return (
    <Card className="p-4" dir="rtl">
      <h3 className="text-lg font-bold mb-3 text-right">
        جلسه ۴ — سرشانه + جلو بازو{" "}
        <span className="text-muted-foreground">(FST-7 Laterals)</span> + کور
      </h3>

      <ScrollArea className="w-full">
        <Table dir="ltr" className="text-right">
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">حرکت</TableHead>
              <TableHead className="text-right whitespace-nowrap">
                ست × تکرار
              </TableHead>
              <TableHead className="text-right">تمپو</TableHead>
              <TableHead className="text-right">استراحت</TableHead>
              <TableHead className="text-right">توضیح</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* Seated DB Shoulder Press */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Seated DB Shoulder Press")}
              >
                Seated DB Shoulder Press
              </TableCell>
              <TableCell>۳–۴ × ۶–۱۰</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۹۰–۱۲۰ث</TableCell>
              <TableCell>پرس اصلی</TableCell>
            </TableRow>

            {/* Lateral Raise (DB/Cable) */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Lateral Raise (DB/Cable)")}
              >
                Lateral Raise (DB/Cable)
              </TableCell>
              <TableCell>۳ × ۱۲–۱۵</TableCell>
              <TableCell>
                <span className="font-mono">2–1–1</span>
              </TableCell>
              <TableCell>۴۵–۶۰ث</TableCell>
              <TableCell>پیش‌خستگی لترال</TableCell>
            </TableRow>

            {/* Lateral Raise – FST-7 */}
            <TableRow className="bg-muted/30">
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Lateral Raise – FST-7")}
              >
                Lateral Raise – FST-7{" "}
                <Badge variant="secondary" className="whitespace-nowrap">
                  FST-7
                </Badge>
              </TableCell>
              <TableCell>۷ × ۱۰–۱۲</TableCell>
              <TableCell>کنترلی</TableCell>
              <TableCell>۳۰–۴۵ث</TableCell>
              <TableCell>FST-7 + کشش بین‌ست</TableCell>
            </TableRow>

            {/* Rear Delt Machine / Reverse Peck-Deck */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Rear Delt Machine / Reverse Peck-Deck")}
              >
                Rear Delt Machine / Reverse Peck-Deck
              </TableCell>
              <TableCell>۲–۳ × ۱۲–۱۵</TableCell>
              <TableCell>
                <span className="font-mono">2–1–1</span>
              </TableCell>
              <TableCell>۴۵–۷۵ث</TableCell>
              <TableCell>دلتوئید خلفی</TableCell>
            </TableRow>

            {/* EZ-Bar Curl */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("EZ-Bar Curl")}
              >
                EZ-Bar Curl
              </TableCell>
              <TableCell>۳ × ۸–۱۲</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۶۰–۹۰ث</TableCell>
              <TableCell>جلو بازو</TableCell>
            </TableRow>

            {/* Incline DB Curl */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Incline DB Curl")}
              >
                Incline DB Curl
              </TableCell>
              <TableCell>۲–۳ × ۱۰–۱۲</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۶۰–۷۵ث</TableCell>
              <TableCell>کشش کامل</TableCell>
            </TableRow>

            {/* Core Circuit */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Core Circuit")}
              >
                Core Circuit <Badge variant="outline">Core</Badge>
              </TableCell>
              <TableCell>۸–۱۰ دقیقه</TableCell>
              <TableCell>—</TableCell>
              <TableCell>استراحت کم</TableCell>
              <TableCell>Plank / Deadbug / Pallof</TableCell>
            </TableRow>

            {/* Cardio */}
            <TableRow>
              <TableCell>کاردیو LISS</TableCell>
              <TableCell>طبق هفته</TableCell>
              <TableCell>—</TableCell>
              <TableCell>—</TableCell>
              <TableCell>۲۰–۴۵د برحسب هفته</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollArea>

      {/* راهنمای کوتاه */}
      <div className="mt-3 text-xs text-muted-foreground space-y-1 text-right">
        <p>
          <span className="font-mono">3–1–1</span> = ۳ ثانیه منفی، ۱ ثانیه مکث،
          ۱ ثانیه مثبت |<span className="font-mono"> 2–1–1</span> = ۲ منفی، ۱
          مکث، ۱ مثبت
        </p>
        <p>FST-7 = ۷ ست با ۳۰–۴۵ث استراحت + کشش ایزومتریک بین‌ست‌ها</p>
      </div>
    </Card>
  );
}

function SessionQuadsCalvesFST7() {
  const { copied, copy } = useClipboard();

  useEffect(() => {
    if (copied) toast.success("متن شما با موفقیت کپی شد");
  }, [copied]);

  return (
    <Card className="p-4" dir="rtl">
      <h3 className="text-lg font-bold mb-3 text-right">
        جلسه ۵ — پا (کواد) + ساق{" "}
        <span className="text-muted-foreground">(FST-7 Quads)</span>
      </h3>

      <ScrollArea className="w-full">
        <Table dir="ltr" className="text-right">
          <TableHeader>
            <TableRow>
              <TableHead className="text-right">حرکت</TableHead>
              <TableHead className="text-right whitespace-nowrap">
                ست × تکرار
              </TableHead>
              <TableHead className="text-right">تمپو</TableHead>
              <TableHead className="text-right">استراحت</TableHead>
              <TableHead className="text-right">توضیح</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* Hack Squat / Leg Press */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Hack Squat یا Leg Press")}
              >
                Hack Squat یا Leg Press
              </TableCell>
              <TableCell>۴–۵ × ۶–۱۲</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>~۱۲۰ث</TableCell>
              <TableCell>سنگین / کنترلی</TableCell>
            </TableRow>

            {/* Front Squat / Goblet */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Front Squat یا Goblet")}
              >
                Front Squat یا Goblet
              </TableCell>
              <TableCell>۳ × ۶–۱۰</TableCell>
              <TableCell>
                <span className="font-mono">3–1–1</span>
              </TableCell>
              <TableCell>۱۲۰ث</TableCell>
              <TableCell>تنه قائم</TableCell>
            </TableRow>

            {/* Walking Lunges */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Walking Lunges")}
              >
                Walking Lunges
              </TableCell>
              <TableCell>۲–۳ × ۲۰–۳۰ قدم مجموع</TableCell>
              <TableCell>
                <span className="font-mono">2–1–1</span>
              </TableCell>
              <TableCell>~۹۰ث</TableCell>
              <TableCell>گام‌های یکنواخت</TableCell>
            </TableRow>

            {/* Leg Extension – FST-7 */}
            <TableRow className="bg-muted/30">
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Leg Extension")}
              >
                Leg Extension{" "}
                <Badge variant="secondary" className="whitespace-nowrap">
                  FST-7
                </Badge>
              </TableCell>
              <TableCell>۷ × ۱۰–۱۲</TableCell>
              <TableCell>کنترلی</TableCell>
              <TableCell>۳۰–۴۵ث</TableCell>
              <TableCell>FST-7 کواد + کشش بین‌ست</TableCell>
            </TableRow>

            {/* Standing Calf Raise */}
            <TableRow>
              <TableCell
                className="text-left"
                role="button"
                onClick={() => copy("Standing Calf Raise")}
              >
                Standing Calf Raise
              </TableCell>
              <TableCell>۴ × ۱۰–۱۵</TableCell>
              <TableCell>
                <span className="font-mono">2–1–1</span>
              </TableCell>
              <TableCell>۶۰–۷۵ث</TableCell>
              <TableCell>مکث بالا ۱ث</TableCell>
            </TableRow>

            {/* Cardio */}
            <TableRow>
              <TableCell>کاردیو LISS</TableCell>
              <TableCell>طبق هفته</TableCell>
              <TableCell>—</TableCell>
              <TableCell>—</TableCell>
              <TableCell>۲۰–۴۵د برحسب هفته</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ScrollArea>

      {/* راهنمای کوتاه */}
      <div className="mt-3 text-xs text-muted-foreground space-y-1 text-right">
        <p>
          <span className="font-mono">3–1–1</span> = ۳ ثانیه منفی، ۱ ثانیه مکث،
          ۱ ثانیه مثبت |<span className="font-mono"> 2–1–1</span> = ۲ منفی، ۱
          مکث، ۱ مثبت
        </p>
        <p>FST-7 = ۷ ست با ۳۰–۴۵ث استراحت + کشش ایزومتریک بین‌ست‌ها</p>
      </div>
    </Card>
  );
}
