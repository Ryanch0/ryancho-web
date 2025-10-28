'use client'

import { ReactNode } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  className?: string
  href: string
  children: ReactNode
}
const HeaderActiveLink = ({ children, href, className }: Props) => {
  const pathname = usePathname()
  const isActive = href === pathname
  const activeClassName = isActive
    ? 'decoration-1 decoration-underline-light dark:decoration-underline-dark underline-offset-4 underline'
    : ''

  return (
    <Link
      href={href}
      className={`hover:opacity-70 ${activeClassName} ${className}`}
    >
      {children}
    </Link>
  )
}

export default HeaderActiveLink
