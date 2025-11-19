import { Suspense } from 'react'

import PostList from '@/features/posts/components/PostList'
import PostListSkeleton from '@/features/posts/components/PostListSkeleton'
import TagLinkList from '@/features/tags/components/TagLinkList'
import TagListSkeleton from '@/features/tags/components/TagListSkeleton'
import Footer from '@/shared/components/Footer'
import MainLink from '@/shared/components/MainLink'
import { getTranslations } from 'next-intl/server'
import { SearchParams } from 'next/dist/server/request/search-params'

type Props = {
  searchParams: Promise<SearchParams>
}
const Page = async ({ searchParams }: Props) => {
  const { tag } = await searchParams
  const tagName = typeof tag === 'string' ? tag : undefined
  const t = await getTranslations('BlogPage')

  return (
    <div className={'flex flex-col gap-30 pt-6 sm:pt-18'}>
      <div>
        <h2 className={'title-style'}>{t('title')}</h2>
        <div className={'second-font-style py-1'}>
          <p>{t('description')}</p>
          <span>by</span> <MainLink />
        </div>
        <main className={'layout-content'}>
          <Suspense fallback={<TagListSkeleton />}>
            <TagLinkList />
          </Suspense>
          <Suspense fallback={<PostListSkeleton />}>
            <PostList tag={tagName} />
          </Suspense>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Page
