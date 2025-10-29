import { useEffect } from 'react'

const useTocScrollEffect = () => {
  return useEffect(() => {
    const allSections = Array.from(
      document.querySelectorAll('[data-markdown-head]')
    ) as HTMLElement[]

    const headerHeight = 80
    const ticking = { current: false }

    const updateActiveLink = () => {
      const scrollY = window.scrollY + headerHeight + 10

      const currentSection = allSections
        .filter((section) => section.offsetTop <= scrollY)
        .pop()

      if (!currentSection) return

      const id = currentSection.getAttribute('id')
      const tocLink = document.querySelector(`a[href="#${id}"][data-toc-link]`)

      if (!tocLink) return

      if (tocLink.classList.contains('active')) return

      document.querySelectorAll('a[data-toc-link]').forEach((link) => {
        link.classList.remove('active')
      })
      tocLink.classList.add('active')
    }

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          updateActiveLink()
          ticking.current = false
        })
        ticking.current = true
      }
    }

    updateActiveLink()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export default useTocScrollEffect
