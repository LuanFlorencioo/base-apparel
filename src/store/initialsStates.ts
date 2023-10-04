import { Store } from ".";

export const initialsStates: Pick<
  Store,
  'lang' |
  'isSelectedLang' |
  'translations'
> = {
  lang: undefined,
  isSelectedLang: false,
  translations: {
    title: {
      thin: '',
      bold: '',
    },
    description: '',
    input_placeholder: '',
    alert: '',
  },
}