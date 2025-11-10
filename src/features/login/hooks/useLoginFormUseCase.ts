import { useActionState, useRef, useState } from 'react'

import {
  LoginFormProps,
  LoginFormState
} from '@/features/login/components/LoginForm'
import useFormInputTracking from '@/features/login/hooks/useFormInputTracking'
import { useSearchParams } from 'next/navigation'

const useLoginFormUseCase = ({ action }: LoginFormProps) => {
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get('redirect') || undefined
  const [captchaToken, setCaptchaToken] = useState('')
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { showCaptcha } = useFormInputTracking(emailRef, passwordRef)

  const wrappedAction = async (
    _: LoginFormState,
    formData: FormData
  ): Promise<LoginFormState> => {
    formData.append('captchaToken', captchaToken)

    return action(_, formData, redirectUrl)
  }
  const [state, formAction, isPending] = useActionState(wrappedAction, {})

  return {
    emailRef,
    passwordRef,
    showCaptcha,
    setCaptchaToken,
    formAction,
    isPending,
    error: state.error
  }
}

export default useLoginFormUseCase
