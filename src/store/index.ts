import { create } from "zustand";

type Locale = 'pt-br' | 'en';

type Store = {
  lang: Locale | undefined;
  isSelectedLang: boolean;
  selectLang: (lang: Locale) => void;
}

export const useStore = create<Store>()((set) => ({
  lang: undefined,
  isSelectedLang: false,
  selectLang: (lang) => set(() => ({ lang, isSelectedLang: true })),
}))
