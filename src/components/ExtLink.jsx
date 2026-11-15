import { useI18n } from '../lib/i18n.jsx'

// Внешняя ссылка. Если href ещё нет — рендерится неактивной (span), чтобы не вести на "#".
export default function ExtLink({ href, className = '', children, ...rest }) {
  const { t } = useI18n()
  if (!href) {
    return (
      <span className={`${className} is-disabled`} aria-disabled="true" title={t('work.linkSoon')} {...rest}>
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
