'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

type Props = {
  href: string
  tagName: string
  defaultTag?: boolean
}
const TagItem = ({ href, tagName, defaultTag }: Props) => {
  const params = useSearchParams()
  const tag = params.get('tag')
  const isActive = tag === tagName
  const getVariant = () => {
    if (defaultTag && !!tag) return 'ghost'

    if (defaultTag && !isActive) return 'outline'

    if (isActive) return 'outline'

    return 'ghost'
  }

  return (
    <Button
      variant={getVariant()}
      size="sm"
      className="text-s h-8 cursor-pointer border-0"
    >
      <Link href={href}>{tagName}</Link>
    </Button>
  )
}

export default TagItem
