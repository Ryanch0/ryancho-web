'use client'

import useMarkDownToc from '@/features/markdown/hooks/useMarkDownToc'
import useTocScrollEffect from '@/features/posts/hooks/useTocScrollEffect'
import Link from 'next/link'

type Props = {
  isMobile?: boolean
}
const TOC = ({ isMobile = false }: Props) => {
  const { toc } = useMarkDownToc()
  useTocScrollEffect(isMobile)

  return (
    <ul id={isMobile ? 'toc-mobile' : 'toc-desktop'}>
      {toc.map(({ key, value, headTag }) => {
        return (
          <li
            key={`${headTag}-${key}`}
            className={
              'mt-1 origin-left transition-transform has-[.active]:scale-105'
            }
          >
            <Link
              data-toc-link
              href={`#${key}`}
              className={
                'decoration-underline-light dark:decoration-underline-dark hover:text-accent-light dark:hover:text-accent-dark text-second-light/50 dark:text-second-dark text-sm underline decoration-1 underline-offset-4 opacity-80 transition-colors'
              }
            >
              {value}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default TOC
