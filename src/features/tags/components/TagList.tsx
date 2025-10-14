import { listAllTagsHandler } from '@/external/handler/posts/postsHandler'

const TagList = async () => {
  const tags = await listAllTagsHandler()

  return (
    <ul>
      {tags.map((tag) => {
        return <li key={tag}>{tag}</li>
      })}
    </ul>
  )
}

export default TagList
