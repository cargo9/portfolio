import { useCallback, useEffect, useState } from 'react'

// Тема: тёмная по умолчанию. Начальное значение ставит скрипт в index.html (чтобы не мигало),
// здесь только читаем его и переключаем.
const KEY = 'theme'

export function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem(KEY, theme) } catch { /* private mode */ }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return { theme, toggle }
}
