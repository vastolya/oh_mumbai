import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "OH!MUMBAI",
  description: "Ресторан индийской кухни",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
