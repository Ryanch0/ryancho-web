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

  if (!user || error) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return response
}

export const config = {
  matcher: ['/write/:path*']
}
