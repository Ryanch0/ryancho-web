import { FaUserShield } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'

import { PATH } from '@/constants/path'
import { authCheckHandler } from '@/external/handler/auth/authHandler'
import SearchModalTrigger from '@/features/search/components/SearchModalTrigger'
import HeaderActiveLink from '@/shared/components/HeaderActiveLink'
import ThemeToggle from '@/shared/components/ThemeToggle'
import { Link } from 'next-view-transitions'

const Header = async () => {
  const { isAuthorized } = await authCheckHandler()
  const authLink = isAuthorized ? (
    <Link href={PATH.WRITE}>
      <FiPlus
        size={38}
        className={
          'cursor-pointer p-1.5 transition-transform duration-400 ease-out hover:scale-110'
        }
      />
    </Link>
  ) : (
    <Link href={PATH.LOGIN}>
      <FaUserShield
        size={38}
        className={
          'cursor-pointer p-1.5 transition-transform duration-400 ease-out hover:scale-110'
        }
      />
    </Link>
  )

  return (
    <header className="bg-header-light dark:bg-header-dark fixed top-[env(safe-area-inset-top)] left-0 z-50 w-full transition-colors duration-300 ease-in-out">
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
