'use client'

import { ReactNode } from 'react'
import { GoArrowUpRight } from 'react-icons/go'

import { PATH } from '@/constants/path'
import LocaleTransitionLink from '@/shared/components/LocaleTransitionLink'
import { useTranslations } from 'next-intl'

type Props = {
  className?: string
  href?: string
  title?: ReactNode
  target?: string
  rel?: string
}
const MainLink = ({
  className,
  href = PATH.MAIN,
  title,
  target,
  rel
}: Props) => {
  const t = useTranslations('Components')

  return (
    <LocaleTransitionLink
      className={`accent-font-style decoration-underline-light dark:decoration-underline-dark hover:bg-section-light dark:hover:bg-section-dark inline-block rounded-sm px-1 text-base underline decoration-1 underline-offset-4 transition-colors ease-in-out hover:no-underline ${className}`}
      href={href}
      rel={rel}
      target={target}
    >
      {title || (
        <span className={'flex'}>
          <h4>{t('name')}</h4>
          <GoArrowUpRight className={'mt-0.5'} />
        </span>
      )}
    </LocaleTransitionLink>
  )
}

export default MainLink
