import { listAllPostsHandler } from '@/external/handler/posts/postsHandler'
import PostItem from '@/features/posts/components/PostItem'

const PostList = async () => {
  const data = await listAllPostsHandler()

  return (
    <ul>
      {data.map((post) => {
        return (
          <PostItem
            key={post.id}
            title={post.title}
            preview={post.preview}
            tags={post.tags}
            slug={post.slug}
          />
        )
      })}
    </ul>
  )
}

export default PostList
