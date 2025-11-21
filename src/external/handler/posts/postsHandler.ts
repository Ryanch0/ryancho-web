import {
  createPost,
  deletePost,
  findAllPosts,
  findAllTags,
  findPostById,
  findPostBySlug,
  getNextPost,
  getPreviousPost,
  updatePost
} from '@/external/repository/posts-server'
import { generateSlug, generateTags } from '@/external/service/post'
import { Post } from '@/external/types/post/entity'
import {
  PostForm,
  PostListItem,
  PostSlug
} from '@/external/types/post/response'
import { formatLongDate } from '@/utils/date'

export const listAllPostsHandler = async (
  tag?: string
): Promise<PostListItem[]> => {
  const data = await findAllPosts()

  if (!tag) return data

  return data.filter((post) => !!post.tags?.includes(tag))
}

export const findPostBySlugHandler = async (
  slug: string
): Promise<Post & { raw_date: string }> => {
  const result = await findPostBySlug(slug)

  const raw_date = result.date
  const formattedDate = formatLongDate(result.date)
  const getFormattedLastModified = () => {
    if (!result.last_modified) return

    return formatLongDate(result.last_modified)
  }

  return {
    ...result,
    raw_date,
    date: formattedDate,
    last_modified: getFormattedLastModified()
  }
}

export const findPostByIdHandler = async (id: string): Promise<PostForm> => {
  return await findPostById(id)
}

export const listAllTagsHandler = async () => {
  return await findAllTags()
}

export const createPostHandler = async (
  title: string,
  subtitle: string,
  content: string,
  tagsString: string
): Promise<PostSlug> => {
  const tags = generateTags(tagsString)
  const slug = generateSlug(title)

  const date = new Date().toISOString()

  const dto = {
    title,
    title_kr: '',
    subtitle,
    subtitle_kr: '',
    content,
    content_kr: '',
    tags,
    slug,
    date
  }

  return await createPost(dto)
}

export const updatePostHandler = async (
  id: string,
  title: string,
  subtitle: string,
  content: string,
  tagsString: string
): Promise<PostSlug> => {
  const tags = generateTags(tagsString)

  const last_modified = new Date().toISOString()

  const dto = {
    title,
    subtitle,
    content,
    tags,
    last_modified
  }

  return await updatePost(id, dto)
}

export const deletePostHandler = async (id: string) => {
  return await deletePost(id)
}

export const getPreviousNextPostHandler = async (date: string) => {
  const prev = await getPreviousPost(date)
  const next = await getNextPost(date)

  return { prev, next }
}
