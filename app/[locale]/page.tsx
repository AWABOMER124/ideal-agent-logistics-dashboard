import { redirect } from "next/navigation";

export default async function LocaleRootPage({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  redirect(`/${params.locale}/overview`);
}
