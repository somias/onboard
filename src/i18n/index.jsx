import { createContext, useContext, useState } from "react";
import { en } from "./en";
import { de } from "./de";
import { pl } from "./pl";

export const LANGS = ["en", "de", "pl"];

const TRANSLATIONS = { en, de, pl };

const I18nContext = createContext({ lang: "en", t: en, setLang: () => {} });

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("en");
  const value = { lang, t: TRANSLATIONS[lang], setLang };
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useT() {
  return useContext(I18nContext);
}
