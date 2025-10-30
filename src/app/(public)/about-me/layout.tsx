import { PropsWithChildren } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About'
}
const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}

export default Layout
