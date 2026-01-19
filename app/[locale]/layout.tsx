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
}
