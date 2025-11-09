import { MouseEventHandler, ReactNode } from 'react'

import { PATH } from '@/constants/path'
import { Link } from 'next-view-transitions'

type Props = {
  className?: string
  href?: string
  title?: ReactNode
  target?: string
  rel?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}
const MainLink = ({
  className,
  href = PATH.MAIN,
  title = <h4>Ryan Cho</h4>,
  onClick,
  target,
  rel
}: Props) => {
  return (
    <Link
      className={`accent-font-style decoration-underline-light dark:decoration-underline-dark hover:bg-section-light dark:hover:bg-section-dark inline-block rounded-sm px-1 text-lg underline decoration-1 underline-offset-4 transition-colors ease-in-out hover:no-underline ${className}`}
      href={href}
      rel={rel}
      target={target}
      onClick={onClick}
    >
      {title}
    </Link>
  )
}

export default MainLink
