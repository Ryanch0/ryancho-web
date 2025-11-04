import type { Metadata } from 'next'

import './globals.css'

import { PropsWithChildren } from 'react'

import Providers from '@/shared/components/Providers'
import { ViewTransitions } from 'next-view-transitions'
import { Inter, Newsreader, Source_Serif_4 } from 'next/font/google'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Ryan Cho',
  description: 'Frontend engineer Ryan Cho’s personal website.'
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

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-newsreader'
})

const aritaBuri = localFont({
  src: [
    {
      path: '../fonts/AritaSansLTN-Medium.ttf',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-arita',
  display: 'swap'
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        suppressHydrationWarning
        data-scroll-behavior="smooth"
        className={`${sourceSerif.variable} ${inter.variable} ${newsreader.variable} ${aritaBuri.variable}`}
      >
        <body className="bg-background-light dark:bg-background-dark base-font-style pt-11 transition-colors duration-300">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  )
}
