import Torus from './Torus.jsx'
import { useI18n } from '../lib/i18n.jsx'

export default function Hero() {
  const { t } = useI18n()
  const [pre, accent, post] = t('hero.lead')

  return (
    <section aria-label="Intro" className="container hero">
      <div className="hero__meta">
        {t('hero.meta').map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <h1 className="hero__title">
        <span>{t('hero.first')}</span>
        <span className="hero__title-row">
          {t('hero.last')}
          <span className="cursor" aria-hidden="true" />
        </span>
      </h1>

      <div className="hero__bottom">
        <div className="hero__intro">
          <p className="hero__lead">
            {pre}
            <em className="accent">{accent}</em>
            {post}
          </p>
          <div className="hero__ctas">
            <a href="#work" className="btn btn--primary">
              {t('hero.ctaWork')} <span aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="btn btn--ghost">
              {t('hero.ctaContact')}
            </a>
          </div>
        </div>

        <figure className="hero__figure">
          <figcaption className="hero__caption">
            <span>┌─ torus.cpp</span>
            <span>
              <span className="accent">●</span> {t('hero.caption')}
            </span>
          </figcaption>
          <Torus label={t('hero.torusAria')} />
          <div className="hero__note">{t('hero.note')}</div>
        </figure>
      </div>
    </section>
  )
}
