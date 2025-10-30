import { ReactNode } from 'react'

import { PATH } from '@/constants/path'
import Link from 'next/link'

type Props = {
  className?: string
  href?: string
  title?: ReactNode
  target?: string
  rel?: string
}
const MainLink = ({
  className,
  href = PATH.MAIN,
  title = <h4>Ryan Cho</h4>,
  target,
  rel
}: Props) => {
  return (
    <Link
      className={`text-accent-light dark:text-accent-dark decoration-underline-light dark:decoration-underline-dark hover:bg-section-light dark:hover:bg-section-dark inline-block rounded-sm px-1 text-lg underline decoration-1 underline-offset-4 hover:no-underline ${className}`}
      href={href}
      rel={rel}
      target={target}
    >
      {title}
    </Link>
  )
}

export default MainLink
