import { figlet } from '../lib/ascii.js'
import { useI18n } from '../lib/i18n.jsx'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <pre aria-hidden="true" className="footer__figlet">{figlet}</pre>
        <div className="footer__row muted">
          <span>{t('footer.copy')}</span>
          <span>{t('footer.fonts')}</span>
          <a href="#top" className="footer__top">{t('footer.top')}</a>
        </div>
      </div>
    </footer>
  )
}
