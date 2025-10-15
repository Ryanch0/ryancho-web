'use server'

import { signInHandler } from '@/external/handler/auth/authHandler'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const signInAction = async (
  _: unknown,
  formData: FormData,
  redirectUrl?: string
) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const result = await signInHandler(email, password)

  if (result?.error) {
    return { error: result.error }
  }

  revalidatePath('/', 'layout')

  return redirect(redirectUrl || '/')
}
