'use client'

import { Alert, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import FormField from '@/features/login/components/FormField'
import LoginCaptcha from '@/features/login/components/LoginCaptcha'
import useLoginFormUseCase from '@/features/login/hooks/useLoginFormUseCase'
import { signInFormState } from '@/features/login/types/login'
import { AlertCircle } from 'lucide-react'

export type LoginFormState = {
  error?: signInFormState
}

export type LoginFormProps = {
  action: (
    _: LoginFormState,
    formData: FormData,
    redirectUrl?: string
  ) => Promise<LoginFormState>
}

const LoginForm = ({ action }: LoginFormProps) => {
  const {
    isPending,
    formAction,
    emailRef,
    passwordRef,
    setCaptchaToken,
    showCaptcha,
    error
  } = useLoginFormUseCase({ action })

  return (
    <form action={formAction} className="mx-auto mt-4 w-full max-w-[600px]">
      {error?.message && (
        <Alert variant="destructive" className={'mb-4'}>
          <AlertCircle className="mb-1 h-4 w-4" />
          <AlertDescription>{error.message}</AlertDescription>
        </Alert>
      )}

      <FormField
        id={'email'}
        ref={emailRef}
        type={'email'}
        placeholder={'email'}
        label={'Email'}
        name={'email'}
        autoComplete={'email'}
        error={error?.email}
      />

      <FormField
        id={'password'}
        ref={passwordRef}
        type={'password'}
        placeholder={'password'}
        label={'Password'}
        name={'password'}
        autoComplete={'current-password'}
        error={error?.password}
      />

      <LoginCaptcha
        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
        setCaptchaToken={setCaptchaToken}
        showCaptcha={showCaptcha}
      />

      <Button
        type="submit"
        className="bg-base-light dark:bg-base-dark text-accent-dark dark:text-accent-light hover:bg-base-light/70 dark:hover:bg-base-dark/70 w-full cursor-pointer"
        disabled={isPending}
      >
        {isPending ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  )
}

export default LoginForm
