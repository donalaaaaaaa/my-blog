import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aba's Journal",
  description: "Notes on building, research, and the small details that make systems feel human.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}