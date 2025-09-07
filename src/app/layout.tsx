import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Gym Bro",
  description: "My workout app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={` ${vazirmatn.className} antialiased`}>
        <Header />
        {children}
        <Toaster
          dir="rtl"
          richColors
          theme="light"
          style={{ fontFamily: "unset" }}
        />
      </body>
    </html>
  );
}
