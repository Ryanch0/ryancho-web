import { createPostAction } from '@/features/posts/actions/post'
import PostForm from '@/features/posts/components/PostForm'

const Page = () => {
  return (
    <>
      <h2>New Post</h2>
      <PostForm action={createPostAction} />
    </>
  )
}

export default Page
