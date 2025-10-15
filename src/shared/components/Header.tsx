import { PATH } from '@/constants/path'
import SearchModalTrigger from '@/features/search/components/SearchModalTrigger'
import Link from 'next/link'

const Header = () => {
  return (
    <ul className="flex items-center gap-x-10 relative">
      <li>
        <Link href={PATH.POSTS}>LOGO</Link>
      </li>
      <li>
        <Link href={PATH.ABOUT_ME}>About me</Link>
      </li>
      <li className="ml-auto">
        <SearchModalTrigger />
      </li>
      <li>
        <Link href={'#'}>Mode</Link>
      </li>
      <li>
        <Link href={PATH.WRITE}>Create Post</Link>
      </li>
    </ul>
  )
}

export default Header
