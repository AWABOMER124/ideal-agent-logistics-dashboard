import { redirect } from "next/navigation";

 codex/fix-build-issues-in-vercel-dqo63j
type LocaleParams = {
  locale: "en" | "ar";
};

export default async function LocaleRootPage({
  params,
}: {
  params: Promise<LocaleParams>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/overview`);

export default function LocaleRootPage({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
 codex/fix-build-issues-in-vercel-v7jdp2
  const { locale } = await params;
  redirect(`/${locale}/overview`);

  redirect(`/${params.locale}/overview`);
 main
}
