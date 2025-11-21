import { findPostByIdHandler } from '@/external/handler/posts/postsHandler'
import { updatePostAction } from '@/features/posts/actions/post'
import PostForm from '@/features/posts/components/PostForm'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ id: string }>
}
const Page = async ({ params }: Props) => {
  const { id } = await params

  const prev = await findPostByIdHandler(id)

  if (!prev) {
    notFound()
  }

  return (
    <PostForm
      action={updatePostAction.bind(null, id)}
      title={prev.title}
      subtitle={prev.subtitle}
      content={prev.content}
      tags={prev.tags}
    />
  )
}

export default Page
