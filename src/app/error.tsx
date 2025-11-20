'use client'

import { PATH } from '@/constants/path'
import Link from 'next/link'

export default function Error() {
  return (
    <main className="layout">
      <div className={'pt-18'}>
        <h2 className="title-style">Error</h2>
        <div className="second-font-style py-1">
          <p>Something went wrong</p>
        </div>
        <Link
          className={
            'accent-font-style decoration-underline-light dark:decoration-underline-dark hover:bg-section-light dark:hover:bg-section-dark inline-block rounded-sm px-1 text-base underline decoration-1 underline-offset-4 transition-colors ease-in-out hover:no-underline'
          }
          href={PATH.MAIN}
        >
          <h4>Return Home</h4>
        </Link>
      </div>
    </main>
  )
}
