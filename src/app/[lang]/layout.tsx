import '../globals.css'

import { PropsWithChildren } from 'react'

import { createMetadata } from '@/lib/metadata'
import Providers from '@/shared/components/Providers'
import { NextIntlClientProvider } from 'next-intl'
import { ViewTransitions } from 'next-view-transitions'
import { Inter, Source_Serif_4 } from 'next/font/google'
import localFont from 'next/font/local'

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  return createMetadata({
    title: 'ryanch0.dev',
    description: 'Crafting elegant solutions from obstacles',
    ogDescription: 'Where obstacles become elegant solutions',
    url: lang === 'en' ? '/' : '/ko'
  })
}

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-source-serif'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const aritaBuri = localFont({
  src: [
    {
      path: '../../fonts/AritaBuriKR-HairLine.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../../fonts/AritaBuriKR-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../fonts/AritaBuriKR-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../fonts/AritaBuriKR-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../../fonts/AritaBuriKR-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-arita',
  display: 'swap'
})

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ko' }]
}

export default async function RootLayout({
  children,
  params
}: PropsWithChildren<{ params: Promise<{ lang: string }> }>) {
  const { lang } = await params

  return (
    <ViewTransitions>
      <html
        lang={lang}
        suppressHydrationWarning
        data-scroll-behavior="smooth"
        className={`${sourceSerif.variable} ${inter.variable} ${aritaBuri.variable}`}
      >
        <body className="bg-background-light dark:bg-background-dark base-font-style pt-11">
          <NextIntlClientProvider>
            <Providers>{children}</Providers>
          </NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
