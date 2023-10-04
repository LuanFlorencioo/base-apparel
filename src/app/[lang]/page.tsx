import { Home } from "@/components";
import { useStore } from "@/store";
import { Locale } from "../../../i18n-config";
import { getTranslate } from "../../../lib/get-translate";
import ClientInitializer from "@/store/ClientInitializer"

export default async function Homepage({
  params: { lang },
}: {
  params: { lang: Locale },
}) {
  const translations = await getTranslate(lang)
  useStore.setState({ translations })

  return (
    <>
      <ClientInitializer translations={translations} />
      <Home />
    </>
  )
}
