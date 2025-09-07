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
                  <TabsTrigger value="details">جزئیات</TabsTrigger>
                  <TabsTrigger value="faq">سوالات</TabsTrigger>
                </TabsList>

                <TabsContent
                  value="overview"
                  className="leading-8 text-foreground/90"
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>موضوع</TableHead>
                        <TableHead>جزئیات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>گرم‌کردن (۱۰–۱۲ دقیقه)</TableCell>
                        <TableCell>
                          ۵–۷ دقیقه شیب‌راه‌رو/بایک + موبیلیتی (Hip Hinge، کشش
                          بالاسینه/لات، چرخش شانه) → سپس ۱–۲ ست سبک از حرکت اول
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>شدت و ریتم (Tempo)</TableCell>
                        <TableCell>
                          Tempo = <code>3–1–1</code> (۳ ثانیه منفی، ۱ ثانیه مکث،
                          ۱ ثانیه مثبت)
                        </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>مدیریت سختی (RIR)</TableCell>
                        <TableCell>
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

                <TabsContent
                  value="details"
                  className="leading-8 text-foreground/90"
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>موضوع</TableHead>
                        <TableHead>توضیحات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>استراحت بین ست‌ها</TableCell>
                        <TableCell>
                          حرکات چندمفصلی ۹۰–۱۲۰ث؛ تک‌مفصلی ۴۵–۷۵ث؛ FST-۷ =
                          ۳۰–۴۵ث
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>کاردیو پس از تمرین (LISS)</TableCell>
                        <TableCell>
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
                        <TableCell>اختیاری</TableCell>
                        <TableCell>
                          یک نوبت اینتروال ملایم در هفته‌های ۳–۴ (۸×۴۰ث تند/۸۰ث
                          آرام) در صورت سلامت زانو/کمر
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>قدم‌زدن روزانه</TableCell>
                        <TableCell>۸–۱۰ هزار قدم</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabsContent>

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
