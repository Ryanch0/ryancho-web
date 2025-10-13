'use server'

import { createClientForServer } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const signIn = async (_: unknown, formData: FormData) => {
  const supabase = await createClientForServer()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

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

  const data = { email, password }

  const { error: authError } = await supabase.auth.signInWithPassword(data)

  if (authError) {
    redirect('/error') //TODO 인증실패 처리
  }

  revalidatePath('/', 'layout')

  return redirect('/write') // TODO 리다이렉트 처리
}
