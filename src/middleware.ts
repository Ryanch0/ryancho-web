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

  const isLoginPage = request.nextUrl.pathname === '/login'

  if (isLoginPage) {
    if (!user || error) return response

    return NextResponse.redirect(new URL('/', request.url))
  }

  if (!user || error) {
    const redirectUrl = new URL('/login', request.url)
    redirectUrl.searchParams.set('redirect', request.nextUrl.pathname)

    return NextResponse.redirect(redirectUrl)
  }

  return response
}

export const config = {
  matcher: ['/write/:path*', '/login']
}
