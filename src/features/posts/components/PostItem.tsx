import { ReactNode } from 'react'

type Props = {
  preview: string
  tags?: string[]
  title: ReactNode
}
const PostItem = ({ preview, tags, title }: Props) => {
  return (
    <li>
      {title}
      {tags?.map((tag) => {
        return (
          <span key={tag} className={'pr-1 text-blue-500'}>
            {tag}
          </span>
        )
      })}
      <p>{preview}</p>
    </li>
  )
}

export default PostItem
