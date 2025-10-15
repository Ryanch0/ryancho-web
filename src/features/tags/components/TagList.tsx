import { listAllTagsHandler } from '@/external/handler/posts/postsHandler'
import Link from 'next/link'

const TagList = async () => {
  const tags = await listAllTagsHandler()

  return (
    <ul>
      <li key={'all'}>
        <Link href={'/posts'}>All</Link>
      </li>
      {tags.map((tag) => {
        return (
          <li key={tag}>
            <Link href={`/posts?tag=${tag}`}>{tag}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default TagList
