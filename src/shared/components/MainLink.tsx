import { PATH } from '@/constants/path'
import Link from 'next/link'

type Props = {
  className?: string
}
const MainLink = ({ className }: Props) => {
  return (
    <Link
      className={`text-accent-light dark:text-accent-dark decoration-underline-light dark:decoration-underline-dark hover:bg-section-light dark:hover:bg-section-dark inline-block rounded-sm px-1 underline decoration-1 underline-offset-4 hover:no-underline ${className}`}
      href={PATH.MAIN}
    >
      Ryan Cho
    </Link>
  )
}

export default MainLink
