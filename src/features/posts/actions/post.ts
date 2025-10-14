'use server'

import { authCheckHandler } from '@/external/handler/auth/authHandler'
import {
  createPostHandler,
  updatePostHandler
} from '@/external/handler/posts/postsHandler'
import { revalidatePath } from 'next/cache'
import { notFound, redirect } from 'next/navigation'

export const createPostAction = async (formData: FormData) => {
  const { isAuthorized } = await authCheckHandler()

  if (!isAuthorized) {
    redirect('/login')
  }
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const tagsString = formData.get('tags') as string
  const { slug } = await createPostHandler(title, content, tagsString)
  revalidatePath(`/posts`)
  redirect(`/posts/${slug}`)
}

export const updatePostAction = async (id: string, formData: FormData) => {
  const { isAuthorized } = await authCheckHandler()

  if (!isAuthorized) {
    redirect('/login')
  }

  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const tagsString = formData.get('tags') as string
  const { slug } = await updatePostHandler(id, title, content, tagsString)

  if (!slug) {
    notFound()
  }
  revalidatePath(`/posts/${slug}`)
  redirect(`/posts/${slug}`)
}

export const deletePost = async () => {
  const { isAuthorized } = await authCheckHandler()

  if (!isAuthorized) {
    redirect('/login')
  }

  //TODO DELETE
}
