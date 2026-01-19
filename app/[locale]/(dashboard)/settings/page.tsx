import { getTranslations } from "next-intl/server";
import { PlaceholderPage } from "@/components/dashboard/placeholder-page";

export default async function Page() {
  const t = await getTranslations();
  const section = t("nav.settings");

  return (
    <PlaceholderPage
      title={section}
      description={t("pages.placeholder", { section })}
    />
  );
}
