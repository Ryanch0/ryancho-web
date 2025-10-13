import { MOCK_TAG_LIST } from '@/constants/mock'

const TagList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return (
    <ul>
      {MOCK_TAG_LIST.map((tag) => {
        return <li key={tag}>{tag}</li>
      })}
    </ul>
  )
}

export default TagList
