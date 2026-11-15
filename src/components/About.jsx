import SectionLabel from './SectionLabel.jsx'
import { about } from '../data/profile.js'
import { useI18n } from '../lib/i18n.jsx'

export default function About() {
  const { t, tr } = useI18n()

  return (
    <section id="about" className="section">
      <div className="container section__inner section__inner--about">
        <SectionLabel num="01">{t('about.label')}</SectionLabel>
        <div className="about">
          <div className="about__text">
            <p className="about__lead">
              {tr(about.lead)} <em className="accent">{tr(about.leadAccent)}</em>
            </p>
            <p className="about__sub muted">{tr(about.sub)}</p>
          </div>
          <div className="about__tree">
            <div className="about__cmd muted">
              <span className="accent">$</span>
              <span>tree ~/yaroslav</span>
            </div>
            {about.tree.map(([k, v], i) => (
              <div key={k} className="about__row">
                <span aria-hidden="true" className="dim">
                  {i === about.tree.length - 1 ? '└──' : '├──'}
                </span>
                <span className="about__key muted">{k}</span>
                <span>{tr(v)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
