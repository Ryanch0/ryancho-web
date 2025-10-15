'use server'

import { PATH } from '@/constants/path'
import { authCheckHandler } from '@/external/handler/auth/authHandler'
import {
  createPostHandler,
  deletePostHandler,
  updatePostHandler
} from '@/external/handler/posts/postsHandler'
import { revalidatePath } from 'next/cache'
import { notFound, redirect } from 'next/navigation'

export const createPostAction = async (formData: FormData) => {
  const { isAuthorized } = await authCheckHandler()

  if (!isAuthorized) {
    redirect(PATH.LOGIN)
  }
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const tagsString = formData.get('tags') as string
  const { slug } = await createPostHandler(title, content, tagsString)
  revalidatePath(PATH.POSTS)
  redirect(`${PATH.POSTS}/${slug}`)
}

export const updatePostAction = async (id: string, formData: FormData) => {
  const { isAuthorized } = await authCheckHandler()

  if (!isAuthorized) {
    redirect(PATH.LOGIN)
  }

  const title = formData.get('title') as string
  const content = formData.get('content') as string
  const tagsString = formData.get('tags') as string
  const { slug } = await updatePostHandler(id, title, content, tagsString)

  if (!slug) {
    notFound()
  }
  revalidatePath(`${PATH.POSTS}/${slug}`)
  redirect(`${PATH.POSTS}/${slug}`)
}

export const deletePostAction = async (id: string) => {
  const { isAuthorized } = await authCheckHandler()

  if (!isAuthorized) {
    redirect(PATH.LOGIN)
  }
  await deletePostHandler(id)

  revalidatePath(PATH.POSTS)
  redirect(PATH.POSTS)
}
