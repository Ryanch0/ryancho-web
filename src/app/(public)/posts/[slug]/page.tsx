import { PATH } from '@/constants/path'
import { authCheckHandler } from '@/external/handler/auth/authHandler'
import {
  findPostBySlugHandler,
  getPreviousNextPostHandler
} from '@/external/handler/posts/postsHandler'
import { findPostBySlug } from '@/external/repository/posts-server'
import { deletePostAction } from '@/features/posts/actions/post'
import PostDetail from '@/features/posts/components/PostDetail'
import PostNavigation from '@/features/posts/components/PostNavigation'
import Footer from '@/shared/components/Footer'
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
    title: data.title,
    description: data?.meta_description
  }
}

const Page = async ({ params }: Props) => {
  const { slug } = await params

  if (!slug || typeof slug !== 'string') {
    notFound()
  }

  const { isAuthorized } = await authCheckHandler()
  const data = await findPostBySlugHandler(slug)
  const { prev, next } = await getPreviousNextPostHandler(data.raw_date)

  console.log(data.raw_date)

  return (
    <div className={'flex flex-col pt-18'}>
      <div>
        <h2 className={'title-style'}>{data.title}</h2>
        <div className={'second-font-style py-1'}>
          <p>{data.date}</p>
          <span>by</span> <MainLink />
        </div>
        <div className="mt-1 flex gap-2 text-sm">
          {data.tags?.map((tag) => {
            return (
              <span
                key={tag}
                className="bg-section-light dark:bg-section-dark text-second-light dark:text-second-dark rounded-sm px-2 py-0.5"
              >
                {tag}
              </span>
            )
          })}
        </div>
        {isAuthorized && (
          <div className={'flex gap-1'}>
            <Link
              className={'ml-auto hover:opacity-70'}
              href={`${PATH.WRITE}/${data.id}`}
            >
              Update
            </Link>
            <form action={deletePostAction.bind(null, data.id)}>
              <button
                type="submit"
                className={'cursor-pointer hover:opacity-70'}
              >
                Delete
              </button>
            </form>
          </div>
        )}
        <PostDetail content={data.content} title={data.title} />
      </div>
      <PostNavigation
        previousPost={{
          slug: prev.slug,
          title: prev.title
        }}
        nextPost={{
          slug: next.slug,
          title: next.title
        }}
      />
      <Footer />
    </div>
  )
}

export default Page
