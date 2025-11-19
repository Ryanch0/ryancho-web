import { LuLanguages } from 'react-icons/lu'

import { usePathname } from '@/i18n/navigation'
import { useLocale } from 'next-intl'

const LangToggle = () => {
  const pathname = usePathname()
  const currentLocale = useLocale()
  const locale = currentLocale === 'en' ? 'ko' : 'en'

  const onClick = () => {
    window.location.href = `/${locale}${pathname.replace(/^\/(en|ko)/, '')}`
  }

  return (
    <button onClick={onClick}>
      <LuLanguages
        size={38}
        className={
          'cursor-pointer p-1.5 transition-transform duration-400 ease-out hover:scale-110'
        }
      />
    </button>
  )
}

export default LangToggle
