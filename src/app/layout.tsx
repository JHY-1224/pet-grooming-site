import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "绒爪宠物洗护 | 专业宠物洗澡美容护理",
  description:
    "绒爪宠物洗护提供猫犬洗澡、造型修剪、皮毛护理与基础健康清洁，门店位于江苏省无锡市新吴区国家软件园杜鹃座。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
