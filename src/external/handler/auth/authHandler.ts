import { signInFormState } from '@/features/login/types/login'
import { redis } from '@/lib/redis/redis'
import { createClientForServer } from '@/lib/supabase/server'

const MAX_ATTEMPTS = 5
const WINDOW_MS = 30 * 60 * 1000

export const signInHandler = async (
  email: string,
  password: string,
  req?: Request
) => {
  const ip = req?.headers.get('x-forwarded-for') || 'unknown'
  const key = `login:${ip}`
  const attempts = (await redis.get(key)) as string

  await redis
    .multi()
    .incr(key)
    .expire(key, WINDOW_MS / 1000)
    .exec()

  if (attempts && parseInt(attempts) >= MAX_ATTEMPTS) {
    return {
      error: { message: 'Too many login attempts. Please try again later.' }
    }
  }

  const supabase = await createClientForServer()
  const error: signInFormState = {}
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\/]).{8,}$/

  if (!email || email.trim().length === 0) {
    error.email = 'Email is required'
  }

  if (!passwordRegex.test(password)) {
    error.password =
      'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'
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
