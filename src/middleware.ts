import { PATH } from '@/constants/path'
import { createClientForServer } from '@/lib/supabase/server'
import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

import { routing } from './i18n/routing'

const intlMiddleware = createIntlMiddleware(routing)

export async function middleware(request: NextRequest) {
  const intlResponse = intlMiddleware(request)

  if (intlResponse && intlResponse.redirected) {
    // return if next-intl would request redirect-
    return intlResponse
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-client-ip', ip)

  // override headers if there is response from next-intl
  const response =
    intlResponse instanceof NextResponse ? intlResponse : NextResponse.next()

  response.headers.set('x-client-ip', ip)

  //auth protect area from here
  const protectedPaths = ['/write']

  const pathname = request.nextUrl.pathname
  const isProtected = protectedPaths.some((p) => pathname.startsWith(p))

  if (isProtected) {
    const supabase = await createClientForServer()
    const {
      data: { user },
      error
    } = await supabase.auth.getUser()

    if (!user || error) {
      const redirectUrl = new URL(PATH.LOGIN, request.url)
      redirectUrl.searchParams.set('redirect', pathname)

      return NextResponse.redirect(redirectUrl)
    }
  }

  return response
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/write/:path*']
}
