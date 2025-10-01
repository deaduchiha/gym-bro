import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Info = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>علیرضا نیکزاد</CardTitle>
        <CardDescription>
          کاهش چربی بدن از حدود ۲۷٪ به ۱۵–۱۸٪ و کاهش چربی احشایی از ۹ به ≤۵ با
          حفظ/افزایش توده بدون چربی.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          ۵ روز در هفته تمرین. روزانه ۸–۱۰ هزار قدم. در حرکات اصلی ۱–۲ تکرار
          ذخیره (RIR) نگه‌دار. کاردیو کم‌فشار (دوچرخه/روینگ/پیاده‌روی با شیب).
          در صورت خستگی مفاصل، حجم را ۲۰٪ کم کن.
        </p>
      </CardContent>
    </Card>
  );
};

export default Info;
