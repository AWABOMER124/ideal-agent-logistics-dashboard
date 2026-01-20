import "./globals.css";
import { headers } from "next/headers";
import { defaultLocale } from "@/i18n";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = headers().get("x-next-intl-locale") ?? defaultLocale;
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
