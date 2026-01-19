import { redirect } from "next/navigation";

export default function LocaleRootPage({
  params,
}: {
  params: { locale: "en" | "ar" };
}) {
  redirect(`/${params.locale}/overview`);
}
