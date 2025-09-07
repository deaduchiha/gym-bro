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

export default function SessionChestTriceps() {
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
