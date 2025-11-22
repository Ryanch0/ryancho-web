import { useEffect, useState } from 'react'

const useShouldUseTransition = () => {
  const [shouldUseTransition, setShouldUseTransition] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isMobile = /Mobi|Android/i.test(navigator.userAgent)
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (isMobile || prefersReducedMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShouldUseTransition(false)

      return
    }

    setShouldUseTransition(true)

    return
  }, [])

  return shouldUseTransition
}

export default useShouldUseTransition
