import { useEffect } from 'react'

const useTocScrollEffect = (isMobile = false) => {
  return useEffect(() => {
    const tocId = isMobile ? 'toc-mobile' : 'toc-desktop'
    const headerHeight = 80
    const ticking = { current: false }

    const updateActiveLink = () => {
      const allSections = Array.from(
        document.querySelectorAll('[data-markdown-head]')
      ) as HTMLElement[]

      if (allSections.length === 0) return

      const scrollY = window.scrollY + headerHeight + 10

      const currentSection = allSections
        .filter((section) => section.offsetTop <= scrollY)
        .pop()

      if (!currentSection) return

      const id = currentSection.getAttribute('id')

      const tocLink = document.querySelector(
        `#${tocId} a[href="#${id}"][data-toc-link]`
      )

      if (!tocLink) return

      if (tocLink.classList.contains('active')) return

      document
        .querySelectorAll(`#${tocId} a[data-toc-link]`)
        .forEach((link) => {
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

    const timer = setTimeout(() => {
      updateActiveLink()
    }, 100)

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile])
}

export default useTocScrollEffect
