const NAV = [
  ['01', 'about'],
  ['02', 'stack'],
  ['03', 'work'],
  ['04', 'contact'],
]

export default function Header() {
  return (
    <header className="header">
      <nav aria-label="Main" className="container header__nav">
        <a href="#top" className="header__logo">
          <span>
            <span className="accent">[</span>ys<span className="accent">]</span>
          </span>
          <span className="muted header__path">~/portfolio</span>
        </a>
        <div className="header__links">
          {NAV.map(([n, id]) => (
            <a key={id} href={`#${id}`} className="header__link">
              <span className="accent">{n}</span>
              {id}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
