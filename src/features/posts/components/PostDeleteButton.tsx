'use client'

import { deletePostAction } from '@/features/posts/actions/post'

const PostDeleteButton = ({ id }: { id: string }) => {
  return (
    <form
      onSubmit={(e) => {
        if (!window.confirm('Are you sure you want to delete this post?')) {
          e.preventDefault()
        }
      }}
      action={deletePostAction.bind(null, id)}
    >
      <button type="submit" className={'cursor-pointer hover:opacity-70'}>
        Delete
      </button>
    </form>
  )
}

export default PostDeleteButton
