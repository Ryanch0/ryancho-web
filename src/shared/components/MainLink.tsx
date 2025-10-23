import { PATH } from '@/constants/path'
import Link from 'next/link'

type Props = {
  className?: string
}
const MainLink = ({ className }: Props) => {
  return (
    <Link
      className={`text-accent-light dark:text-accent-dark inline-block underline decoration-1 underline-offset-4 opacity-100 transition-opacity duration-200 hover:opacity-70 ${className}`}
      href={PATH.MAIN}
    >
      Ryan Cho
    </Link>
  )
}

export default MainLink
