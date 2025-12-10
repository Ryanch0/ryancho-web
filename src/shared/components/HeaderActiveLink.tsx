'use client'

import { ReactNode } from 'react'

import { usePathname } from '@/i18n/navigation'
import LocaleTransitionLink from '@/shared/components/LocaleTransitionLink'

type Props = {
  className?: string
  href: string
  children: ReactNode
}
const HeaderActiveLink = ({ children, href, className }: Props) => {
  const pathname = usePathname()
  const isActive = pathname.startsWith(href)
  const activeClassName = isActive
    ? 'decoration-1 decoration-underline-light dark:decoration-underline-dark underline-offset-4 underline'
    : ''

  return (
    <LocaleTransitionLink
      href={href}
      className={`font-family-serif hover:opacity-70 ${activeClassName} ${className}`}
    >
      {children}
    </LocaleTransitionLink>
  )
}

export default HeaderActiveLink
