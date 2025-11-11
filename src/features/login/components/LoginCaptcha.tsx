'use client'

import { Dispatch, SetStateAction } from 'react'

import HCaptcha from '@hcaptcha/react-hcaptcha'
import { useTheme } from 'next-themes'

type Props = {
  setCaptchaToken: Dispatch<SetStateAction<string>>
  showCaptcha: boolean
  sitekey: string
}
const LoginCaptcha = ({ sitekey, showCaptcha, setCaptchaToken }: Props) => {
  const { theme } = useTheme()

  return (
    <div
      className={`my-1 ${
        showCaptcha
          ? 'visible mb-4.5 max-h-[100px] opacity-100'
          : 'invisible max-h-0 min-h-1 opacity-0'
      } transition-all duration-300 ease-in-out`}
    >
      <HCaptcha
        sitekey={sitekey}
        onVerify={setCaptchaToken}
        theme={theme === 'dark' ? 'dark' : 'light'}
        languageOverride={'en'}
      />
    </div>
  )
}

export default LoginCaptcha
