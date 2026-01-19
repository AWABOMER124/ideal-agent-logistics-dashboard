 codex/transform-square-ui-to-ideal-agent-logistics-3zycb9

 codex/transform-square-ui-to-ideal-agent-logistics-0h2re5
 main
import {redirect} from 'next/navigation';

export default async function LocaleRootPage({
params
}: {
params: Promise<{locale: 'en' | 'ar'}>;
}) {
const {locale} = await params;
redirect(`/${locale}/overview`);
 codex/transform-square-ui-to-ideal-agent-logistics-3zycb9


import { redirect } from "next/navigation";

export default async function LocaleRootPage({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  redirect(`/${params.locale}/overview`);
 main
 main
}
