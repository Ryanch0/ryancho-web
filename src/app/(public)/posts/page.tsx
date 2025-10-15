import { Suspense } from 'react'

import PostList from '@/features/posts/components/PostList'
import TagList from '@/features/tags/components/TagList'
import Hero from '@/shared/components/Hero'
import { SearchParams } from 'next/dist/server/request/search-params'

type Props = {
  searchParams: Promise<SearchParams>
}
const Page = async ({ searchParams }: Props) => {
  const { tag } = await searchParams
  const tagName = typeof tag === 'string' ? tag : undefined

  return (
    <>
      <Hero>
        <p className={'text-black'}>HERO SECTION</p>
      </Hero>
      <main className={'flex justify-between'}>
        <Suspense fallback={'fetching post list...'}>
          <PostList tag={tagName} />
        </Suspense>
        <Suspense fallback={'fetching tags list...'}>
          <TagList />
        </Suspense>
      </main>
    </>
  )
}

export default Page
