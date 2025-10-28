'use client'

import useMarkDownToc from '@/features/markdown/hooks/useMarkDownToc'
import Link from 'next/link'

const MarkDownTOC = () => {
  const { toc } = useMarkDownToc()

  return (
    <ul>
      <h2>TOC</h2>
      {toc.map(({ key, value, headTag }) => {
        return (
          <li key={`${headTag}-${key}`}>
            <Link
              href={`#${key}`}
              className={'text-base-light dark:text-base-dark'}
            >
              {value}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default MarkDownTOC
