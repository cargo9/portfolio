import SectionLabel from './SectionLabel.jsx'
import { skills, areas } from '../data/profile.js'

const loop1 = [...skills, ...skills]
const loop2 = [...areas, ...areas, ...areas, ...areas]

export default function Stack() {
  return (
    <section id="stack" className="section stack">
      <div className="container section__inner section__inner--stack">
        <SectionLabel num="02">stack</SectionLabel>
        <div className="section__head">
          <h2 className="h2">
            On the <em className="h2__em">belt</em>
          </h2>
          <p className="section__desc muted">Languages, tools and things I tinker with. Hover the belt to stop it.</p>
        </div>
      </div>

      <ul className="sr-only">
        {skills.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <div className="conveyor" aria-hidden="true">
        <div className="rail" />
        <div className="conveyor__track conveyor__track--big">
          <div className="belt">
            {loop1.map((name, i) => (
              <div key={i} className="belt__item">
                <span className={i % 2 ? 'outline' : ''}>{name}</span>
                <span className="belt__star accent">*</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rail rail--rev" />
        <div className="conveyor__track conveyor__track--small">
          <div className="belt belt--rev">
            {loop2.map((name, i) => (
              <div key={i} className="belt__tag">
                <span className="dim">[</span>
                <span>{name}</span>
                <span className="dim">]</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rail" />
      </div>
    </section>
  )
}
