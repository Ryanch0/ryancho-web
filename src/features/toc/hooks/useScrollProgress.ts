'use client'

import { useEffect, useRef, useState } from 'react'

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0)
  const rafId = useRef<number | null>(null)
  const ticking = useRef(false)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrollProgress = scrollHeight > 0 ? scrollTop / scrollHeight : 0

      setProgress(scrollProgress)
      ticking.current = false
    }

    const handleScroll = () => {
      if (!ticking.current) {
        rafId.current = requestAnimationFrame(updateProgress)
        ticking.current = true
      }
    }

    updateProgress()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return progress
}

export default useScrollProgress
