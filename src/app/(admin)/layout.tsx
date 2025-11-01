import { PropsWithChildren } from 'react'

export default function AdminLayout({ children }: PropsWithChildren) {
  return <div className={'-mt-11'}>{children}</div>
}
