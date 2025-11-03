'use client'

import MainLink from '@/shared/components/MainLink'

export default function Error() {
  return (
    <main className="layout">
      <div className={'pt-18'}>
        <h2 className="title-style">Error</h2>
        <div className="second-font-style py-1">
          <p>Something went wrong</p>
        </div>
        <MainLink title={<h4>Return Home</h4>} />
      </div>
    </main>
  )
}
