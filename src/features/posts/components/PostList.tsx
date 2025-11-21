import { PATH } from '@/constants/path'
import {
  listAllPostsHandler,
  listPostByTag
} from '@/external/handler/posts/postsHandler'
import PostItem from '@/features/posts/components/PostItem'
import groupHoverStyles from '@/features/posts/utils/groupHoverStyles'
import groupPostsByYear from '@/utils/groupPostsByYear'
import { redirect } from 'next/navigation'

type Props = {
  tag?: string
}
const PostList = async ({ tag }: Props) => {
  const data = tag ? await listPostByTag(tag) : await listAllPostsHandler()
  const postsByYear = groupPostsByYear(data)

  if (tag && data.length === 0) {
    return redirect(PATH.POSTS)
  }

  return (
    <div className="[&:has(section:hover)>section:not(:hover)_*]:text-base-light/50 dark:[&:has(section:hover)>section:not(:hover)_*]:text-base-dark/50">
      {Object.entries(postsByYear)
        .sort(([a], [b]) => Number(b) - Number(a))
        .map(([year, yearPosts]) => {
          return (
            <section
              key={year}
              className={
                'group/year border-border flex flex-col border-t pb-8 duration-300 md:flex-row md:pb-0'
              }
            >
              <div className={'my-6 md:my-6 md:w-[15%]'}>
                <h3 className={'text-lg'}>
                  <span className={groupHoverStyles.year}>{year}</span>
                </h3>
              </div>
              <ul className="md:my-6 md:w-[85%]">
                {yearPosts.map((post) => {
                  return (
                    <PostItem
                      title={post.title}
                      subtitle={post.subtitle}
                      title_kr={post.title_kr}
                      subtitle_kr={post.subtitle_kr}
                      key={post.id}
                      slug={post.slug}
                      date={post.date}
                    />
                  )
                })}
              </ul>
            </section>
          )
        })}
    </div>
  )
}

export default PostList
