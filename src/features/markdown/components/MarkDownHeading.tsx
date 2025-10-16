import { ReactNode } from 'react'
import { JSX } from 'react/jsx-runtime'

import Link from 'next/link'

type Props = {
  level: 1 | 2 | 3 | 4
  children: ReactNode
}

const MarkDownHeading = ({ level, children }: Props) => {
  const id =
    typeof children === 'string'
      ? children.replace(/\s+/g, '-').toLowerCase()
      : undefined
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  return (
    <Tag id={id} data-markdown-head>
      <Link href={`#${id}`}>{children}</Link>
    </Tag>
  )
}
export default MarkDownHeading
