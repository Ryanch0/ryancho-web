import { PATH } from '@/constants/path'
import { findPostBySlugHandler } from '@/external/handler/posts/postsHandler'
import { findPostBySlug } from '@/external/repository/posts-server'
import { deletePostAction } from '@/features/posts/actions/post'
import PostDetail from '@/features/posts/components/PostDetail'
import Hero from '@/shared/components/Hero'
import { Metadata } from 'next'
import { NextParsedUrlQuery } from 'next/dist/server/request-meta'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<NextParsedUrlQuery>
}

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { slug } = await params

  if (!slug || typeof slug !== 'string') {
    notFound()
  }

  const data = await findPostBySlug(slug)

  return {
    description: data?.meta_description
  }
}

const Page = async ({ params }: Props) => {
  const { slug } = await params

  if (!slug || typeof slug !== 'string') {
    notFound()
  }

  const data = await findPostBySlugHandler(slug)

  return (
    <>
      <Hero>
        <h1>{data.title}</h1>
        <p>Published {data.date}</p>
        {data.last_modified && <p>Last updated {data.last_modified}</p>}
        <Link href={`${PATH.WRITE}/${data.id}`}>Update</Link>
        <form action={deletePostAction.bind(null, data.id)}>
          <button type="submit">Delete</button>
        </form>

        <p>Tags: {data.tags}</p>
      </Hero>
      <PostDetail content={data.content} />
    </>
  )
}

export default Page
