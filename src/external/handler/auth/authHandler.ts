import { signInFormState } from '@/features/login/types/login'
import { createClientForServer } from '@/lib/supabase/server'

export const signInHandler = async (email: string, password: string) => {
  const supabase = await createClientForServer()
  const error: signInFormState = {}

  if (!email || email.trim().length === 0) {
    error.email = 'Email is required'
  }

  if (!password || password.trim().length === 0) {
    error.password = 'Password is required'
  }

  if (Object.keys(error).length > 0) {
    return { error }
  }

  const { error: authError } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (authError) {
    return { error: { ...error, message: authError.message } }
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
