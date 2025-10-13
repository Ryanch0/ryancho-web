'use client'

import { useActionState } from 'react'

type FormState = {
  error?: string[]
}

type Props = {
  action: (_: FormState, formData: FormData) => Promise<FormState>
}
const LoginForm = ({ action }: Props) => {
  const [state, formAction] = useActionState(action, {})
  const error = state.error
  const hasError = error && error.length > 0

  return (
    <form action={formAction}>
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <button type="submit">login</button>
      {hasError && <p>{error}</p>}
    </form>
  )
}

export default LoginForm
