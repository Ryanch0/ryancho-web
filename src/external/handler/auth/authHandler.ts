import { createClientForServer } from '@/lib/supabase/server'

export const signInHandler = async (email: string, password: string) => {
  const supabase = await createClientForServer()
  const error: string[] = []

  if (!email || email.trim().length === 0) {
    error.push('Email is required')
  }

  if (!password || password.trim().length === 0) {
    error.push('Password is required')
  }

  if (error.length > 0) {
    return { error } //TODO 에러 핸들링
  }

  const { error: authError } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (authError) {
    return { error: [authError.message] }
  }
}

export const authCheckHandler = async () => {
  const supabase = await createClientForServer()
  const {
    data: { user },
    error: authError
  } = await supabase.auth.getUser()

  const isAuthorized = user && !authError

  return { isAuthorized }
}
