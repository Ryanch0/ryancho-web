import { PATH } from '@/constants/path'
import { authCheckHandler } from '@/external/handler/auth/authHandler'
import { findPostBySlugHandler } from '@/external/handler/posts/postsHandler'
import PostDeleteButton from '@/features/posts/components/PostDeleteButton'
import PostDetail from '@/features/posts/components/PostDetail'
import { getColumnFromLocale } from '@/features/posts/utils/getColumnFromLocale'
import TagItem from '@/features/tags/components/TagItem'
import MainLink from '@/shared/components/MainLink'
import Link from 'next/link'

type Props = {
  slug: string
  locale: string
}
const PostContent = async ({ slug, locale }: Props) => {
  const { isAuthorized } = await authCheckHandler()
  const data = await findPostBySlugHandler(slug)
  const title = getColumnFromLocale(locale, data.title, data.title_kr)
  const subtitle = getColumnFromLocale(locale, data.subtitle, data.subtitle_kr)

  return (
    <div>
      <h2 className={'title-style'}>{title}</h2>
      <h3 className={''}>{subtitle}</h3>
      <div className={'mt-0.5'}>
        <div className={'second-font-style py-1'}>
          <p>{data.date}</p>
          <span>by</span> <MainLink />
        </div>
        <div className="mt-1 flex gap-2 text-sm">
          {data.tags?.map((tag) => {
            return <TagItem tag={tag} key={tag} />
          })}
        </div>
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
  )
}

export default PostContent
