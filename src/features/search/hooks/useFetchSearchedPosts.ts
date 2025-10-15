import { useEffect, useState } from 'react'

import { findPostsBySearch } from '@/external/repository/posts-client'
import { PostListItem } from '@/external/types/post/response'

type Props = {
  search: string
}

const useFetchSearchedPosts = ({ search }: Props) => {
  const [posts, setPosts] = useState<PostListItem[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchSearchedPosts = async () => {
      if (!search) {
        setPosts([])

        return
      }
      setLoading(true)
      const data = await findPostsBySearch(search)
      setLoading(false)
      setPosts(data)
    }

    fetchSearchedPosts()
  }, [search, setLoading, setPosts])

  return { posts, loading }
}

export default useFetchSearchedPosts
