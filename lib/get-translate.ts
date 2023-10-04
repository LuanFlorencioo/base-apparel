import 'server-only'
import type { Locale } from '../i18n-config'

const translations = {
  'en': () => import('@/translations/en.json').then((module) => module.default),
  'pt-br': () => import('@/translations/pt-br.json').then((module) => module.default),
}

export const getTranslate = async (locale: Locale) => await translations[locale]()