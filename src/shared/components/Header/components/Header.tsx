import { FaUserShield } from 'react-icons/fa'
import { IoAddOutline } from 'react-icons/io5'

import { PATH } from '@/constants/path'
import { authCheckHandler } from '@/external/handler/auth/authHandler'
import SearchModalTrigger from '@/features/search/components/SearchModalTrigger'
import HeaderActiveLink from '@/shared/components/Header/components/HeaderActiveLink'
import ThemeToggle from '@/shared/components/Header/components/ThemeToggle'
import Link from 'next/link'

const Header = async () => {
  const { isAuthorized } = await authCheckHandler()
  const authLink = isAuthorized ? (
    <Link href={PATH.WRITE}>
      <IoAddOutline
        size={38}
        className={'cursor-pointer p-1.5 transition-transform hover:scale-110'}
      />
    </Link>
  ) : (
    <Link href={PATH.LOGIN}>
      <FaUserShield
        size={38}
        className={'cursor-pointer p-1.5 transition-transform hover:scale-110'}
      />
    </Link>
  )

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-sm">
      <div className="mx-auto h-13 px-4 md:max-w-3xl md:px-6">
        <nav className="py-2">
          <div className="flex items-center gap-4">
            <HeaderActiveLink href={PATH.ABOUT_ME}>About</HeaderActiveLink>
            <HeaderActiveLink className={'mr-auto'} href={PATH.POSTS}>
              Blog
            </HeaderActiveLink>
            <SearchModalTrigger />
            <ThemeToggle />
            {authLink}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
