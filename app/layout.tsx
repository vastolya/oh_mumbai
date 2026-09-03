import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "OH!MUMBAI",
  description: "Ресторан индийской кухни",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <div style={{ paddingTop: "var(--header-h, 0px) " }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
