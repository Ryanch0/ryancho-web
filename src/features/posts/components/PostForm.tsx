'use client'

type Props = {
  title?: string
  content?: string
  tags?: string[]
  action: (formData: FormData) => Promise<void>
}
const PostForm = ({ title, content, tags, action }: Props) => {
  return (
    <form action={action}>
      <input name="title" type="text" defaultValue={title} />
      <input name="tags" type="text" defaultValue={tags} />
      <textarea name="content" defaultValue={content} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default PostForm
