import SectionLabel from './SectionLabel.jsx'
import ExtLink from './ExtLink.jsx'
import { EMAIL, socials } from '../data/links.js'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container section__inner section__inner--contact">
        <SectionLabel num="04">contact</SectionLabel>
        <div className="contact">
          <p className="contact__q muted">Have an idea, a project or a role in mind?</p>
          <a href={`mailto:${EMAIL}`} className="contact__big">
            Let's talk<span className="accent contact__arrow">↗</span>
          </a>
          <div className="contact__row">
            <span className="contact__mail">
              <span className="muted">mail:</span>
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
