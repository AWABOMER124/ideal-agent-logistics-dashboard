import "./globals.css";
import { headers } from "next/headers";
import { defaultLocale } from "@/i18n";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-next-intl-locale") ?? defaultLocale;
  const direction = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction} suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
