import { PropsWithChildren } from 'react'

import Header from '@/shared/components/Header'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <>
      <main className="layout">
        <Header />
        {children}
      </main>
    </>
  )
}
