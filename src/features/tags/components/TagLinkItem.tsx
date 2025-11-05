'use client'

import { Button } from '@/components/ui/button'
import { Link } from 'next-view-transitions'
import { useSearchParams } from 'next/navigation'

type Props = {
  href: string
  tagName: string
  defaultTag?: boolean
}
const TagLinkItem = ({ href, tagName, defaultTag }: Props) => {
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
      className="text-s h-8 cursor-pointer border-0 transition-colors ease-in-out"
    >
      <Link href={href}>{tagName}</Link>
    </Button>
  )
}

export default TagLinkItem
