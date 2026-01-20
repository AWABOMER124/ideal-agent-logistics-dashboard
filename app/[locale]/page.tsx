import { redirect } from "next/navigation";

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
}
