import { PATH } from '@/constants/path'
import { createClientForServer } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const response = NextResponse.next({ request })

  const supabase = await createClientForServer()

  const {
    data: { user },
    error
  } = await supabase.auth.getUser()

  const isLoginPage = request.nextUrl.pathname === PATH.LOGIN

  if (isLoginPage) {
    if (!user || error) return response

    return NextResponse.redirect(new URL(PATH.POSTS, request.url))
  }

  if (!user || error) {
    const redirectUrl = new URL(PATH.LOGIN, request.url)
    redirectUrl.searchParams.set('redirect', request.nextUrl.pathname)

    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: ['/write/:path*', '/login']
}
