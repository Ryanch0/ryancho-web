'use server'

import { signInHandler } from '@/external/handler/auth/authHandler'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export const signInAction = async (_: unknown, formData: FormData) => {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const result = await signInHandler(email, password)

  if (result?.error) {
    redirect('/error') //TODO 인증실패 처리
  }

  revalidatePath('/', 'layout')

  return redirect('/') // TODO 리다이렉트 처리 이전 경로 기억 등
}
