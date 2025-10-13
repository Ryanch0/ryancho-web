import { MOCK_POST_LIST } from '@/constants/mock'
import PostItem from '@/features/posts/components/PostItem'
import { FormattedPost } from '@/features/posts/types/post.types'

const PostList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const data: FormattedPost[] = MOCK_POST_LIST // TODO from async fetching

  return (
    <ul>
      {data.map((post) => {
        return (
          <PostItem
            key={post.id}
            title={post.title}
            preview={post.preview}
            tags={post.tags}
          />
        )
      })}
    </ul>
  )
}

export default PostList
