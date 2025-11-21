import { PropsWithChildren } from 'react'

import { createMetadata } from '@/lib/metadata'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations('AboutPage')

  return createMetadata({
    title: t('title'),
    description: t('description'),
    ogDescription: t('description'),
    url: lang === 'en' ? '/about-me' : '/ko/about-me'
  })
}

const Layout = ({ children }: PropsWithChildren) => {
  return <>{children}</>
}

export default Layout
