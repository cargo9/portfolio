import { figlet } from '../lib/ascii.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <pre aria-hidden="true" className="footer__figlet">{figlet}</pre>
        <div className="footer__row muted">
          <span>© 2026 Yaroslav Suntsev</span>
          <span>Set in Unbounded, Instrument Serif &amp; JetBrains Mono</span>
          <a href="#top" className="footer__top">↑ back to top</a>
        </div>
      </div>
    </footer>
  )
}
