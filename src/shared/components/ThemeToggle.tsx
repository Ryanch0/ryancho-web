'use client'

import { IconType } from 'react-icons'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

import { useTheme } from 'next-themes'

const ToggleIcon = ({
  icon: Icon,
  className
}: {
  icon: IconType
  className?: string
}) => {
  return (
    <Icon
      size={38}
      className={`icon-default-style transition-colors duration-300 ${className}`}
    />
  )
}

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="transition-transform duration-500 ease-out hover:scale-110 active:scale-95 active:rotate-180"
      aria-label="Toggle theme"
    >
      <ToggleIcon icon={MdLightMode} className={'dark:hidden'} />
      <ToggleIcon
        icon={MdDarkMode}
        className={'not-dark:hidden dark:visible'}
      />
    </button>
  )
}

export default ThemeToggle
