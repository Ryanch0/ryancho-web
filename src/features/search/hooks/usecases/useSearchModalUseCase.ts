import { useEffect, useState } from 'react'

import { PATH } from '@/constants/path'
import useDebounce from '@/features/search/hooks/useDebounce'
import useFetchSearchedPosts from '@/features/search/hooks/useFetchSearchedPosts'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'

const useSearchModalUseCase = ({
  onClose,
  isOpen
}: {
  onClose: () => void
  isOpen: boolean
}) => {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 200)
  const pathname = usePathname()
  const { push } = useRouter()

  const { posts, loading } = useFetchSearchedPosts({ search: debouncedSearch })
  const locale = useLocale()

  const onChange = (val: string) => {
    setSearch(val)
  }
  const onCloseModal = () => {
    setSearch('')
    onClose()
  }

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      onCloseModal()
    }
  }, [pathname])

  const onSelect = (slug: string) => {
    const target = `${PATH.POSTS}/${slug}`

    if (pathname === target) {
      return onCloseModal()
    }

    return push(target)
  }

  return {
    search,
    posts,
    loading,
    onChange,
    onCloseModal,
    onSelect,
    locale
  }
}

export default useSearchModalUseCase
