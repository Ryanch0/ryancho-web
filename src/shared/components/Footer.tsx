'use client'

import { MouseEvent } from 'react'

import { EXTERNAL_URL } from '@/constants/path'
import MainLink from '@/shared/components/MainLink'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const pathname = usePathname()

  const onClickMainLink = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== '/') return

    e.preventDefault()
    window.location.reload()
  }

  return (
    <footer
      className={
        'mt-auto mb-6 flex items-center justify-between text-sm md:mb-8'
      }
    >
      <div>
        Copyright ©
        <MainLink
          onClick={onClickMainLink}
          title={<p className={'font-family-serif !text-base'}>Ryan Cho</p>}
        />
      </div>

      <MainLink
        className={'italic'}
        title={<p className={'font-family-serif !text-base'}>Source Code</p>}
        href={EXTERNAL_URL.SOURCE_CODE}
        rel={'noopener noreferrer'}
        target={'_blank'}
      />
    </footer>
  )
}

export default Footer
