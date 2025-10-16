import { useEffect, useState } from 'react'

type Toc = {
  key: string
  value: string
  headTag: number
}
const useMarkDownToc = () => {
  const [toc, setToc] = useState<Toc[]>([])

  useEffect(() => {
    const tocNodeArray = Array.from(
      document.querySelectorAll('[data-markdown-head]')
    )
    const formattedToc = tocNodeArray.map((node) => {
      const headTag = Number(node.tagName.match(/\d+/)?.[0])
      const key = node.id
      const value = node.querySelector('a')?.textContent || ''

      return { key, value, headTag }
    })

    setTimeout(() => {
      setToc(formattedToc)
    }, 0)
  }, [])

  return { toc }
}

export default useMarkDownToc
