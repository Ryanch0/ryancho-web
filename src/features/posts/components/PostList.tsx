import {
  listAllPostsHandler,
  listPostByTag
} from '@/external/handler/posts/postsHandler'
import PostItem from '@/features/posts/components/PostItem'
import { redirect } from 'next/navigation'

type Props = {
  tag?: string
}
const PostList = async ({ tag }: Props) => {
  const data = tag ? await listPostByTag(tag) : await listAllPostsHandler()

  if (tag && data.length === 0) {
    return redirect('/posts')
  }

  if (data.length === 0) return <>EMPTY CASE</>

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
