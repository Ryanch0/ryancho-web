'use client'

import { EXTERNAL_URL } from '@/constants/path'
import MainLink from '@/shared/components/MainLink'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('Components')

  return (
    <footer
      className={
        'mt-auto mb-6 flex items-center justify-between text-sm md:mb-8'
      }
    >
      <div>
        Copyright ©
        <MainLink title={<h4>{t('name')}</h4>} />
      </div>

      <MainLink
        className={'italic'}
        title={<h4>{t('sourceCode')}</h4>}
        href={EXTERNAL_URL.SOURCE_CODE}
        rel={'noopener noreferrer'}
        target={'_blank'}
      />
    </footer>
  )
}

export default Footer
