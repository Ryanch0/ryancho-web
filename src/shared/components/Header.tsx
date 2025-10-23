import { FaUserShield } from 'react-icons/fa'

import { PATH } from '@/constants/path'
import { authCheckHandler } from '@/external/handler/auth/authHandler'
import SearchModalTrigger from '@/features/search/components/SearchModalTrigger'
import ThemeToggle from '@/shared/components/ThemeToggle'
import Link from 'next/link'

const Header = async () => {
  const { isAuthorized } = await authCheckHandler()

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur-sm">
      <div className="mx-auto h-13 w-full px-4 md:max-w-4xl md:px-6">
        <nav className="py-2">
          <div className="flex items-center gap-4">
            <Link className={'hover:opacity-70'} href={PATH.ABOUT_ME}>
              About
            </Link>
            <Link className={'mr-auto hover:opacity-70'} href={PATH.POSTS}>
              Blog
            </Link>
            <SearchModalTrigger />
            <ThemeToggle />
            {isAuthorized ? (
              <Link className={'hover:opacity-70'} href={PATH.WRITE}>
                Create Post
              </Link>
            ) : (
              <Link href={PATH.LOGIN}>
                <FaUserShield
                  size={38}
                  className={'cursor-pointer p-1.5 hover:opacity-70'}
                />
              </Link>
            )}
          </div>

          {/*<MobileMenu />*/}
        </nav>
      </div>
    </header>
  )
}

export default Header
