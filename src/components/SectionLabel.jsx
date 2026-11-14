const RULE = '─'.repeat(160)

export default function SectionLabel({ num, children }) {
  return (
    <div className="section-label">
      <span className="accent">{num}</span>
      <span>/ {children}</span>
      <span aria-hidden="true" className="section-label__rule">{RULE}</span>
      <span aria-hidden="true" className="section-label__corner">┐</span>
    </div>
  )
}
