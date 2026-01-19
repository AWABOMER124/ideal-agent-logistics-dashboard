 codex/transform-square-ui-to-ideal-agent-logistics-3zycb9
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;

 codex/transform-square-ui-to-ideal-agent-logistics-0h2re5
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
 main
 main
}
