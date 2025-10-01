import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/common/header";

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
    <html dir="rtl" lang="fa" suppressHydrationWarning>
      <body className={` ${vazirmatn.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}
          <Toaster dir="rtl" richColors style={{ fontFamily: "unset" }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
