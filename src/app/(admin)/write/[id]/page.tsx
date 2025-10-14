import { findPostByIdHandler } from '@/external/handler/posts/postsHandler'
import { updatePostAction } from '@/features/posts/actions/post'
import PostForm from '@/features/posts/components/PostForm'
import { NextParsedUrlQuery } from 'next/dist/server/request-meta'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<NextParsedUrlQuery>
}
const Page = async ({ params }: Props) => {
  const { id } = await params

  if (!id || typeof id !== 'string') {
    notFound()
  }

  const prev = await findPostByIdHandler(id)

  if (!prev) {
    notFound()
  }

  return (
    <>
      <h2>UPDATE POST</h2>
      <PostForm
        action={updatePostAction.bind(null, id)}
        title={prev.title}
        content={prev.content}
        tags={prev.tags}
      />
    </>
  )
}

export default Page
