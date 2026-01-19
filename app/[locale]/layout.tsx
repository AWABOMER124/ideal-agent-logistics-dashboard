 codex/transform-square-ui-to-ideal-agent-logistics-3zycb9

 codex/transform-square-ui-to-ideal-agent-logistics-0h2re5
 main
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';

export default async function LocaleLayout({
children,
params
}: {
children: React.ReactNode;
params: Promise<{locale: 'en' | 'ar'}>;
}) {
const {locale} = await params;

setRequestLocale(locale);
const messages = await getMessages();

return (
<html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}> <body> <NextIntlClientProvider messages={messages}>
{children} </NextIntlClientProvider> </body> </html>
);
 codex/transform-square-ui-to-ideal-agent-logistics-3zycb9

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import { locales } from "@/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Ideal Agent Logistics",
    description: "AI-powered logistics operations dashboard",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: "en" | "ar" };
}>) {
  const { locale } = params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
    </ThemeProvider>
  );
  main
  main
}
