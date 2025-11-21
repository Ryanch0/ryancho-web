'use client'

import { PATH } from '@/constants/path'
import { getColumnFromLocale } from '@/features/posts/utils/getColumnFromLocale'
import groupHoverStyles from '@/features/posts/utils/groupHoverStyles'
import LocaleTransitionLink from '@/shared/components/LocaleTransitionLink'
import { getDateParts } from '@/utils/date'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'

type Props = {
  title: string
  title_kr: string
  subtitle: string
  subtitle_kr: string
  slug: string
  date: string
}
const PostItem = ({
  title,
  slug,
  date,
  subtitle,
  title_kr,
  subtitle_kr
}: Props) => {
  const { day, month } = getDateParts(date)
  const locale = useLocale()

  const itemTitle = getColumnFromLocale(locale, title, title_kr)
  const itemSubtitle = getColumnFromLocale(locale, subtitle, subtitle_kr)

  return (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={
        'group/post [:has(section:hover)_*]:text-base-light/50 dark:[:has(section:hover)_*]:text-base-dark/50 block not-first:pt-6'
      }
    >
      <LocaleTransitionLink
        href={`${PATH.POSTS}/${slug}`}
        className={'rounded-lg'}
      >
        <div className={`w-full ${groupHoverStyles.post}`}>
          <div className={'flex items-center justify-between gap-1'}>
            <div className={'min-w-0 flex-1 truncate'}>
              <h4 className={'mt-1 truncate text-base'}>
                <span>{itemTitle}</span>
              </h4>
              <p
                className={
                  'truncate text-sm text-[#999999] dark:text-[#808080]'
                }
              >
                {itemSubtitle}
              </p>
            </div>
            <time
              className={
                "ml-4' text-sm whitespace-nowrap text-[#999999] dark:text-[#808080]"
              }
            >{`${month}. ${day}.`}</time>
          </div>
        </div>
      </LocaleTransitionLink>
    </motion.li>
  )
}

export default PostItem
