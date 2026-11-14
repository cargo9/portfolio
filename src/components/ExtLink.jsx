// Внешняя ссылка. Если href ещё нет — рендерится неактивной (span), чтобы не вести на "#".
export default function ExtLink({ href, className = '', children, ...rest }) {
  if (!href) {
    return (
      <span className={`${className} is-disabled`} aria-disabled="true" title="link coming soon" {...rest}>
        {children}
      </span>
    )
  }
  const external = /^https?:/.test(href)
  return (
    <a href={href} className={className} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  )
}
