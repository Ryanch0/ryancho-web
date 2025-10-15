'use client'

import { useActionState } from 'react'

import { signInFormState } from '@/features/login/types/login'

type FormState = {
  error?: signInFormState
}

type Props = {
  action: (
    _: FormState,
    formData: FormData,
    redirectUrl?: string
  ) => Promise<FormState>
  redirectUrl?: string
}
const LoginForm = ({ action, redirectUrl }: Props) => {
  const wrappedAction = async (
    _: FormState,
    formData: FormData
  ): Promise<FormState> => {
    return action(_, formData, redirectUrl)
  }
  const [state, formAction] = useActionState(wrappedAction, {})
  const error = state.error
  const renderErrorMessage = (field: 'email' | 'password' | 'message') => {
    if (!error?.[field]) return

    return <p>{error[field]}</p>
  }

  return (
    <form action={formAction}>
      <input type="email" placeholder="email" name="email" />
      {renderErrorMessage('email')}
      <input type="password" placeholder="password" name="password" />
      {renderErrorMessage('password')}
      {renderErrorMessage('message')}
      <button type="submit">login</button>
    </form>
  )
}

export default LoginForm
