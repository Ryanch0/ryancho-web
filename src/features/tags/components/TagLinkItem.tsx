'use client'

import { MotionButton } from '@/components/ui/MotionButton'
import LocaleTransitionLink from '@/shared/components/LocaleTransitionLink'
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
    <LocaleTransitionLink href={href}>
      <MotionButton
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        variant={getVariant()}
        size="sm"
        className="text-s cursor-pointer border-0 transition-colors ease-in-out select-none"
      >
        {tagName}
      </MotionButton>
    </LocaleTransitionLink>
  )
}

export default TagLinkItem
