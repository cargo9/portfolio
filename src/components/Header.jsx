import { LANGS, useI18n } from '../lib/i18n.jsx'
import { useTheme } from '../lib/useTheme.js'

const NAV = [
  ['01', 'about'],
  ['02', 'stack'],
  ['03', 'work'],
  ['04', 'contact'],
]

export default function Header() {
  const { lang, setLang, t } = useI18n()
  const { theme, toggle } = useTheme()

  return (
    <header className="header">
      <nav aria-label="Main" className="container header__nav">
        <a href="#top" className="header__logo">
          <span>
            <span className="accent">[</span>ys<span className="accent">]</span>
          </span>
          <span className="muted header__path">~/portfolio</span>
        </a>
        <div className="header__right">
          <div className="header__links">
            {NAV.map(([n, id]) => (
              <a key={id} href={`#${id}`} className="header__link">
                <span className="accent">{n}</span>
                {t(`nav.${id}`)}
              </a>
            ))}
          </div>
          <div className="toggles">
            <div className="seg" role="group" aria-label={t('ui.language')}>
              {LANGS.map((l) => (
                <button key={l} type="button" className="seg__btn" aria-pressed={lang === l} lang={l} onClick={() => setLang(l)}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="theme-btn"
              aria-label={t(theme === 'dark' ? 'ui.toLight' : 'ui.toDark')}
              title={t(theme === 'dark' ? 'ui.toLight' : 'ui.toDark')}
              onClick={toggle}
            >
              {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  )
}
