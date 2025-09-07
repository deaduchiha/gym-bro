import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Tricks = () => {
  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <Card className="mx-auto w-full">
          <CardHeader className="text-right">
            <CardTitle className="text-2xl">راهنمای جلسه تمرین</CardTitle>
            <CardDescription>
              ساختار بهینه برای اجرای یک جلسه‌ی باکیفیت
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div dir="rtl" className="text-right space-y-6">
              <Alert variant={"destructive"} className="text-right">
                <Info className="col-start-1" />
                <AlertTitle>نکته‌ی سریع</AlertTitle>
                <AlertDescription>
                  اگر در ست آخر حداقل ۱ تکرار در توان داشتی، جلسه‌ی بعد ۲–۵٪
                  وزنه را افزایش بده.
                </AlertDescription>
              </Alert>

              <Tabs defaultValue="overview" className="w-full" dir="rtl">
                <TabsList className="ml-auto">
                  <TabsTrigger value="overview">راهنما</TabsTrigger>
                  <TabsTrigger value="progression">پیشروی هفتگی</TabsTrigger>
                  <TabsTrigger value="details">جزئیات</TabsTrigger>
                  <TabsTrigger value="faq">سوالات</TabsTrigger>
                </TabsList>

                {/* ——— تب: راهنما ——— */}
                <TabsContent
                  value="overview"
                  className="leading-8 text-foreground/90"
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">موضوع</TableHead>
                        <TableHead className="text-right">جزئیات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-right">
                          گرم‌کردن (۱۰–۱۲ دقیقه)
                        </TableCell>
                        <TableCell className="text-right">
                          ۵–۷ دقیقه شیب‌راه‌رو/بایک + موبیلیتی (Hip Hinge، کشش
                          بالاسینه/لات، چرخش شانه) → سپس ۱–۲ ست سبک از حرکت اول
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="text-right">
                          شدت و ریتم (Tempo)
                        </TableCell>
                        <TableCell className="text-right">
                          Tempo = <code>3–1–1</code> (۳ ثانیه منفی، ۱ ثانیه مکث،
                          ۱ ثانیه مثبت)
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell className="text-right">
                          مدیریت سختی (RIR)
                        </TableCell>
                        <TableCell className="text-right">
                          <ul className="list-disc pr-6 space-y-1 text-sm">
                            <li>هفته ۱: ۲–۳</li>
                            <li>هفته ۲: ۱–۲</li>
                            <li>هفته ۳–۴: ۰–۱</li>
                            <li>هفته ۵: ۲</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                {/* ——— تب: پیشروی هفتگی ——— */}
                <TabsContent value="progression" className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    چارچوب پیشروی برای ۵ هفته؛ مطابق با RIR، حجم، LISS و پروتکل
                    FST-7.
                  </p>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-right whitespace-nowrap">
                            هفته
                          </TableHead>
                          <TableHead className="text-right whitespace-nowrap">
                            حجم/ست‌ها
                          </TableHead>
                          <TableHead className="text-right whitespace-nowrap">
                            RIR هدف
                          </TableHead>
                          <TableHead className="text-right whitespace-nowrap">
                            کاردیو LISS
                          </TableHead>
                          <TableHead className="text-right whitespace-nowrap">
                            FST-7
                          </TableHead>
                          <TableHead className="text-right whitespace-nowrap">
                            نکتهٔ ویژه
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="text-right whitespace-nowrap">
                            1 (Re-entry)
                          </TableCell>
                          <TableCell className="text-right">
                            هر حرکت 2–3 ست
                          </TableCell>
                          <TableCell className="text-right">2–3</TableCell>
                          <TableCell className="text-right">20–25د</TableCell>
                          <TableCell className="text-right">
                            FST-5 (۵ ست)
                          </TableCell>
                          <TableCell className="text-right">
                            ۱۰۰٪ تمرکز روی فرم
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-right whitespace-nowrap">
                            2
                          </TableCell>
                          <TableCell className="text-right">
                            اغلب 3 ست؛ اصلی‌ها 4
                          </TableCell>
                          <TableCell className="text-right">1–2</TableCell>
                          <TableCell className="text-right">25–30د</TableCell>
                          <TableCell className="text-right">
                            ۷ ست کامل؛ استراحت 40–45ث
                          </TableCell>
                          <TableCell className="text-right">
                            تثبیت تکنیک
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-right whitespace-nowrap">
                            3 (Overload)
                          </TableCell>
                          <TableCell className="text-right">
                            مثل هفته۲
                          </TableCell>
                          <TableCell className="text-right">0–1</TableCell>
                          <TableCell className="text-right">30–35د</TableCell>
                          <TableCell className="text-right">۷ ست</TableCell>
                          <TableCell className="text-right">
                            روی حرکت اول Rest-Pause×1 (۱۵ث مکث + 2–3 تکرار)
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-right whitespace-nowrap">
                            4 (Peak Volume)
                          </TableCell>
                          <TableCell className="text-right">
                            +1 ست به حرکت اولِ پا و پرس‌ها
                          </TableCell>
                          <TableCell className="text-right">0–1</TableCell>
                          <TableCell className="text-right">35–40د</TableCell>
                          <TableCell className="text-right">
                            ۷ ست؛ استراحت 30–35ث
                          </TableCell>
                          <TableCell className="text-right">
                            ایزوله‌ها: Drop-set×1 ست آخر
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell className="text-right whitespace-nowrap">
                            5 (Reload/Density)
                          </TableCell>
                          <TableCell className="text-right">
                            وزنه‌ها −10–15٪؛ استراحت کوتاه‌تر
                          </TableCell>
                          <TableCell className="text-right">2</TableCell>
                          <TableCell className="text-right">40–45د</TableCell>
                          <TableCell className="text-right">۷ ست سبک</TableCell>
                          <TableCell className="text-right">
                            تکرارهای بالای بازه؛ تمرکز روی چگالی
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>

                {/* ——— تب: جزئیات ——— */}
                <TabsContent
                  value="details"
                  className="leading-8 text-foreground/90"
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="text-right">موضوع</TableHead>
                        <TableHead className="text-right">توضیحات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-right">
                          استراحت بین ست‌ها
                        </TableCell>
                        <TableCell className="text-right">
                          <ul className="list-disc pr-6 space-y-1 text-sm">
                            <li>حرکات چندمفصلی: ۹۰–۱۲۰ ثانیه</li>
                            <li>حرکات تک‌مفصلی: ۴۵–۷۵ ثانیه</li>
                            <li>FST-7: ۳۰–۴۵ ثانیه</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-right">
                          کاردیو پس از تمرین (LISS)
                        </TableCell>
                        <TableCell className="text-right">
                          <ul className="list-disc pr-6 space-y-1 text-sm">
                            <li>هفته ۱: ۲۰–۲۵ دقیقه</li>
                            <li>هفته ۲: ۲۵–۳۰ دقیقه</li>
                            <li>هفته ۳: ۳۰–۳۵ دقیقه</li>
                            <li>هفته ۴: ۳۵–۴۰ دقیقه</li>
                            <li>هفته ۵: ۴۰–۴۵ دقیقه</li>
                          </ul>
                          <p className="mt-2 text-muted-foreground">
                            شیب‌راه‌رو ۵–۸٪ یا دوچرخه
                          </p>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-right">اختیاری</TableCell>
                        <TableCell className="text-right">
                          یک نوبت اینتروال ملایم در هفته‌های ۳–۴ (۸×۴۰ث تند/۸۰ث
                          آرام) در صورت سلامت زانو/کمر
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="text-right">
                          قدم‌زدن روزانه
                        </TableCell>
                        <TableCell className="text-right">
                          ۸–۱۰ هزار قدم
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

                {/* ——— تب: سوالات ——— */}
                <TabsContent value="faq">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="tempo">
                      <AccordionTrigger className="text-right">
                        شدت و ریتم (Tempo)
                      </AccordionTrigger>
                      <AccordionContent className="text-right leading-8 text-foreground/90">
                        بیشتر حرکات با Tempo = <code>3–1–1</code> انجام می‌شوند:
                        <ul className="list-disc pr-6 space-y-1 text-sm mt-2">
                          <li>۳ ثانیه فاز منفی (پایین رفتن وزنه)</li>
                          <li>۱ ثانیه مکث</li>
                          <li>۱ ثانیه فاز مثبت (بالا آوردن وزنه)</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="rir">
                      <AccordionTrigger className="text-right">
                        مدیریت سختی (RIR)
                      </AccordionTrigger>
                      <AccordionContent className="text-right leading-8 text-foreground/90">
                        RIR = تکرار در تانک (یعنی چند تکرار دیگر می‌توانی قبل از
                        ناتوانی انجام دهی).
                        <p className="mt-2 font-bold">برنامهٔ هفتگی:</p>
                        <ul className="list-disc pr-6 space-y-1 text-sm">
                          <li>هفته ۱: ۲–۳ تکرار در تانک</li>
                          <li>هفته ۲: ۱–۲ تکرار در تانک</li>
                          <li>هفته ۳–۴: ۰–۱ تکرار در تانک (نزدیک ناتوانی)</li>
                          <li>
                            هفته ۵: برگشت به ۲ تکرار در تانک (deload نسبی)
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="fst7">
                      <AccordionTrigger className="text-right">
                        FST-7 چیست؟
                      </AccordionTrigger>
                      <AccordionContent className="text-right leading-8 text-foreground/90">
                        اجرای یک حرکت ایزوله در ۷ ستِ ۸–۱۲ تکرار با ۳۰–۴۵ث
                        استراحت؛ بین ست‌ها ۲–۳ث کشش ایزومتریک همان عضله (مثلاً
                        سینه روی درگاه، لت روی میله).
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="progression">
                      <AccordionTrigger className="text-right">
                        چطور پیشرفت را مدیریت کنم؟
                      </AccordionTrigger>
                      <AccordionContent className="text-right leading-8 text-foreground/90">
                        وقتی در بازهٔ تکرار هدف به سقف رسیدی و RIR≥1 بود، جلسهٔ
                        بعد ۲–۵٪ وزنه اضافه کن.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Tricks;
