import Torus from './Torus.jsx'

export default function Hero() {
  return (
    <section aria-label="Intro" className="container hero">
      <div className="hero__meta">
        <span>// portfolio — 2026</span>
        <span>C++ · systems · hardware</span>
        <span>based in Germany</span>
      </div>

      <h1 className="hero__title">
        <span>Yaroslav</span>
        <span className="hero__title-row">
          Suntsev
          <span className="cursor" aria-hidden="true" />
        </span>
      </h1>

      <div className="hero__bottom">
        <div className="hero__intro">
          <p className="hero__lead">
            Software engineer writing <em className="accent">C++</em>, wiring microcontrollers and living in the terminal.
          </p>
          <div className="hero__ctas">
            <a href="#work" className="btn btn--primary">
              View projects <span aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="btn btn--ghost">
              Get in touch
            </a>
          </div>
        </div>

        <figure className="hero__figure">
          <figcaption className="hero__caption">
            <span>┌─ torus.cpp</span>
            <span>
              <span className="accent">●</span> live render
            </span>
          </figcaption>
          <Torus />
          <div className="hero__note">└─ 3D drawn with characters, like my C++ engine does it</div>
        </figure>
      </div>
    </section>
  )
}
