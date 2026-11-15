import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { strings } from '../data/strings.js'

// Язык: английский по умолчанию, выбор запоминается в браузере.
export const LANGS = ['en', 'ru']
const KEY = 'lang'

const I18nContext = createContext(null)

function readStored() {
  try {
    const v = localStorage.getItem(KEY)
    return LANGS.includes(v) ? v : 'en'
  } catch {
    return 'en'
  }
}

const get = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj)

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(readStored)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = strings[lang].meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', strings[lang].meta.description)
    try { localStorage.setItem(KEY, lang) } catch { /* private mode */ }
  }, [lang])

  // t('work.title') — строка интерфейса
  const t = useCallback((key) => get(strings[lang], key) ?? get(strings.en, key) ?? key, [lang])
  // tr(value) — поле данных: либо строка, либо { en, ru }
  const tr = useCallback((v) => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] ?? v.en : v), [lang])

  const value = useMemo(() => ({ lang, setLang, t, tr }), [lang, t, tr])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
