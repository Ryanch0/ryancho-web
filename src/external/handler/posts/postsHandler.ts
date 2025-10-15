import {
  createPost,
  deletePost,
  findAllPosts,
  findAllTags,
  findPostById,
  findPostBySlug,
  findPostsByTag,
  updatePost
} from '@/external/repository/posts'
import {
  generatePreview,
  generateSlug,
  generateTags
} from '@/external/service/post'
import { Post } from '@/external/types/post/entity'
import {
  PostForm,
  PostListItem,
  PostSlug
} from '@/external/types/post/response'
import { formatLongDate } from '@/utils/date'

export const listAllPostsHandler = async (): Promise<PostListItem[]> => {
  return await findAllPosts()
}

export const listPostByTag = async (tag: string): Promise<PostListItem[]> => {
  return await findPostsByTag(tag)
}

export const findPostBySlugHandler = async (slug: string): Promise<Post> => {
  const result = await findPostBySlug(slug)

  const formattedDate = formatLongDate(result.date)
  const getFormattedLastModified = () => {
    if (!result.last_modified) return

    return formatLongDate(result.last_modified)
  }

  return {
    ...result,
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
  content: string,
  tagsString: string
): Promise<PostSlug> => {
  const tags = generateTags(tagsString)
  const slug = generateSlug(title)

  const preview = generatePreview(content, 200)

  const date = new Date().toISOString()

  const meta_description = generatePreview(content, 150)

  const dto = { title, content, tags, slug, preview, date, meta_description }

  return await createPost(dto)
}

export const updatePostHandler = async (
  id: string,
  title: string,
  content: string,
  tagsString: string
): Promise<PostSlug> => {
  const tags = generateTags(tagsString)
  const preview = generatePreview(content, 200)

  const last_modified = new Date().toISOString()

  const meta_description = generatePreview(content, 150)

  const dto = { title, content, tags, preview, meta_description, last_modified }

  return await updatePost(id, dto)
}

export const deletePostHandler = async (id: string) => {
  return await deletePost(id)
}
