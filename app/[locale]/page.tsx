import { redirect } from "next/navigation";

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
