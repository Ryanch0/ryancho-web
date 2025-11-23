'use client'

import { useEffect, useState } from 'react'
import { FaUserShield } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'

import { PATH } from '@/constants/path'
import SearchModalTrigger from '@/features/search/components/SearchModalTrigger'
import { createClientForClient } from '@/lib/supabase/client'
import HeaderActiveLink from '@/shared/components/HeaderActiveLink'
import LangToggle from '@/shared/components/LangToggle'
import LocaleTransitionLink from '@/shared/components/LocaleTransitionLink'
import ThemeToggle from '@/shared/components/ThemeToggle'

const Header = () => {
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const supabase = createClientForClient()

    supabase.auth.getUser().then(({ data: { user } }) => {
      setIsAuthorized(!!user)
    })
  }, [])

  const authLink = isAuthorized ? (
    <LocaleTransitionLink href={PATH.WRITE}>
      <FiPlus
        size={35}
        className={
          'cursor-pointer p-1.5 transition-transform duration-400 ease-out hover:scale-110'
        }
      />
    </LocaleTransitionLink>
  ) : (
    <LocaleTransitionLink href={PATH.LOGIN}>
      <FaUserShield
        size={35}
        className={
          'cursor-pointer p-1.5 transition-transform duration-400 ease-out hover:scale-110'
        }
      />
    </LocaleTransitionLink>
  )

  return (
    <header className="bg-header-light dark:bg-header-dark fixed top-[env(safe-area-inset-top)] left-0 z-50 w-full">
      <div className="mx-auto h-13 px-4 md:max-w-3xl md:px-6">
        <nav className="py-2">
          <div className="flex items-center gap-3">
            <HeaderActiveLink href={PATH.ABOUT_ME} className={'pr-1'}>
              About
            </HeaderActiveLink>
            <HeaderActiveLink className={'mr-auto'} href={PATH.POSTS}>
              Blog
            </HeaderActiveLink>
            <SearchModalTrigger />
            <ThemeToggle />
            <LangToggle />
            {authLink}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
