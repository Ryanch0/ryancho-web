import { PATH } from '@/constants/path'
import { authCheckHandler } from '@/external/handler/auth/authHandler'
import {
  findPostBySlugHandler,
  getPreviousNextPostHandler
} from '@/external/handler/posts/postsHandler'
import { findPostBySlug } from '@/external/repository/posts-server'
import PostDeleteButton from '@/features/posts/components/PostDeleteButton'
import PostDetail from '@/features/posts/components/PostDetail'
import PostNavigation from '@/features/posts/components/PostNavigation'
import { getColumnFromLocale } from '@/features/posts/utils/getColumnFromLocale'
import TagItem from '@/features/tags/components/TagItem'
import { createMetadata } from '@/lib/metadata'
import Footer from '@/shared/components/Footer'
import MainLink from '@/shared/components/MainLink'
import { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import Link from 'next/link'

type Props = {
  params: Promise<{ slug: string }>
}

export const generateMetadata = async ({
  params
}: Props): Promise<Metadata> => {
  const { slug } = await params

  const data = await findPostBySlug(slug)

  return createMetadata({
    title: data.title,
    description: data.subtitle,
    ogDescription: data.subtitle,
    url: `/posts/${slug}`
  })
}

const Page = async ({ params }: Props) => {
  //TODO SUSPENSE
  const { slug } = await params
  const [{ isAuthorized }, locale, data] = await Promise.all([
    authCheckHandler(),
    getLocale(),
    findPostBySlugHandler(slug)
  ])
  const { prev, next } = await getPreviousNextPostHandler(data.raw_date)

  const title = getColumnFromLocale(locale, data.title, data.title_kr)

  return (
    <div className={'flex flex-col pt-6 sm:pt-18'}>
      <div>
        <h2 className={'title-style'}>{title}</h2>
        <div className={'second-font-style py-1'}>
          <p>{data.date}</p>
          <span>by</span> <MainLink />
        </div>
        <div className="mt-1 flex gap-2 text-sm">
          {data.tags?.map((tag) => {
            return <TagItem tag={tag} key={tag} />
          })}
        </div>
        {isAuthorized && (
          <div className={'flex gap-2'}>
            <Link
              className={'ml-auto hover:opacity-70'}
              href={`${PATH.WRITE}/${data.id}`}
            >
              Update
            </Link>
            <PostDeleteButton id={data.id} />
          </div>
        )}
        <PostDetail
          content={getColumnFromLocale(locale, data.content, data.content_kr)}
          title={title}
        />
      </div>
      <PostNavigation
        previousPost={{
          slug: prev.slug,
          title: getColumnFromLocale(locale, prev.title, prev.title_kr)
        }}
        nextPost={{
          slug: next.slug,
          title: getColumnFromLocale(locale, next.title, next.title_kr)
        }}
      />
      <Footer />
    </div>
  )
}

export default Page
