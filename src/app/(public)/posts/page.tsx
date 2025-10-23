import { Suspense } from 'react'

import PostList from '@/features/posts/components/PostList'
import TagList from '@/features/tags/components/TagList'
import MainLink from '@/shared/components/MainLink'
import { SearchParams } from 'next/dist/server/request/search-params'

type Props = {
  searchParams: Promise<SearchParams>
}
const Page = async ({ searchParams }: Props) => {
  const { tag } = await searchParams
  const tagName = typeof tag === 'string' ? tag : undefined

  return (
    <div className={'pt-18'}>
      <h2 className={'title-style'}>Blog Archive</h2>
      <div className={'second-font-style py-1'}>
        <p>A space for storing insights</p>
        <span>by</span> <MainLink />
      </div>
      <main className={'flex justify-between'}>
        <Suspense fallback={'fetching post list...'}>
          <PostList tag={tagName} />
        </Suspense>
        <Suspense fallback={'fetching tags list...'}>
          <TagList />
        </Suspense>
      </main>
    </div>
  )
}

export default Page
