import { PATH } from '@/constants/path'
import { authCheckHandler } from '@/external/handler/auth/authHandler'
import { findPostBySlugHandler } from '@/external/handler/posts/postsHandler'
import { findPostBySlug } from '@/external/repository/posts-server'
import { deletePostAction } from '@/features/posts/actions/post'
import PostDetail from '@/features/posts/components/PostDetail'
import MainLink from '@/shared/components/MainLink'
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
  const { isAuthorized } = await authCheckHandler()

  return (
    <div className={'pt-18'}>
      <h2 className={'title-style'}>{data.title}</h2>
      <div className={'second-font-style py-1'}>
        <p>{data.date}</p>

        <div className={'flex gap-1'}>
          <span>by</span> <MainLink />
          {isAuthorized && (
            <>
              <Link className={'ml-auto'} href={`${PATH.WRITE}/${data.id}`}>
                Update
              </Link>
              <form action={deletePostAction.bind(null, data.id)}>
                <button type="submit">Delete</button>
              </form>
            </>
          )}
        </div>
      </div>
      <div>
        <p>Tags: {data.tags}</p>
      </div>
      <PostDetail content={data.content} />
    </div>
  )
}

export default Page
