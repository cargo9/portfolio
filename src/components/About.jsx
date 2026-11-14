import SectionLabel from './SectionLabel.jsx'
import { about } from '../data/profile.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container section__inner section__inner--about">
        <SectionLabel num="01">about</SectionLabel>
        <div className="about">
          <div className="about__text">
            <p className="about__lead">
              {about.lead} <em className="accent">{about.leadAccent}</em>
            </p>
            <p className="about__sub muted">{about.sub}</p>
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
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
