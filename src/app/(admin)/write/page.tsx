import { createPostAction } from '@/features/posts/actions/post'
import PostForm from '@/features/posts/components/PostForm'

const Page = () => {
  return <PostForm action={createPostAction} />
}

export default Page
