import type { LayoutProps, Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import { locales } from "@/i18n";

type Locale = (typeof locales)[number];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata(): Metadata {
  return {
    title: "Ideal Agent Logistics",
    description: "AI-powered logistics operations dashboard",
  };
}

export default async function LocaleLayout({
  children,
  params,
  codex/fix-json-parse-error-in-package.json-lrqjke
 main
}: LayoutProps<"/[locale]">) {
  const { locale } = params;
  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }
 codex/fix-json-parse-error-in-package.json-xzph6t

 codex/fix-json-parse-error-in-package.json-l24h3l
}: LayoutProps<"/[locale]">) {
  const { locale } = params;

}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
 main

 main
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
