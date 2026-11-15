import SectionLabel from './SectionLabel.jsx'
import ExtLink from './ExtLink.jsx'
import { EMAIL, socials } from '../data/links.js'
import { useI18n } from '../lib/i18n.jsx'

export default function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="section">
      <div className="container section__inner section__inner--contact">
        <SectionLabel num="04">{t('contact.label')}</SectionLabel>
        <div className="contact">
          <p className="contact__q muted">{t('contact.question')}</p>
          <a href={`mailto:${EMAIL}`} className="contact__big">
            {t('contact.big')}
            <span className="accent contact__arrow">↗</span>
          </a>
          <div className="contact__row">
            <span className="contact__mail">
              <span className="muted">{t('contact.mail')}</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </span>
            <div className="contact__socials">
              {socials.map((s) => (
                <ExtLink key={s.label} href={s.href} className="chip">
                  {s.label} ↗
                </ExtLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
