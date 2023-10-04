import { create } from "zustand";
import { Locale } from "../../i18n-config";
import { initialsStates } from "./initialsStates";

export type Translate = {
  title: {
    thin: string,
    bold: string,
  },
  description: string,
  input_placeholder: string,
  alert: string,
}

export type Store = {
  lang: Locale | undefined;
  isSelectedLang: boolean;
  translations: Translate;
  selectLang: (lang: Locale) => void;
  applyTranslate: (translate: Translate) => void;
}

export const useStore = create<Store>()((set) => ({
  ...initialsStates,
  selectLang: (lang) => set(() => ({ lang, isSelectedLang: true })),
  applyTranslate: (translate) => set(() => ({ translations: translate })),
}))
