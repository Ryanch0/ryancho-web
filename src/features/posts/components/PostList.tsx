import { PATH } from '@/constants/path'
import {
  listAllPostsHandler,
  listPostByTag
} from '@/external/handler/posts/postsHandler'
import PostItem from '@/features/posts/components/PostItem'
import Link from 'next/link'
import { redirect } from 'next/navigation'

type Props = {
  tag?: string
}
const PostList = async ({ tag }: Props) => {
  const data = tag ? await listPostByTag(tag) : await listAllPostsHandler()

  if (tag && data.length === 0) {
    return redirect(PATH.POSTS)
  }

  if (data.length === 0) return <>EMPTY CASE</>

  return (
    <ul>
      {data.map((post) => {
        return (
          <PostItem
            key={post.id}
            preview={post.preview}
            tags={post.tags}
            title={
              <Link href={`${PATH.POSTS}/${post.slug}`}>
                <h2 className={'text-red-700'}>{post.title}</h2>
              </Link>
            }
          />
        )
      })}
    </ul>
  )
}

export default PostList
