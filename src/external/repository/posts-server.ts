import { CreatePostDto, UpdatePostDto } from '@/external/types/post/dto'
import { createClientForServer } from '@/lib/supabase/server'

export const findAllPosts = async () => {
  const supabase = await createClientForServer()

  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title,  tags, slug, date, subtitle, title_kr, subtitle_kr')
    .order('date', { ascending: false })

  if (error) {
    throw error
  }

  return posts
}

export const findPostsByTag = async (tag: string) => {
  const supabase = await createClientForServer()
  const { error, data } = await supabase
    .from('posts')
    .select('id, title, tags, slug, date, subtitle, title_kr, subtitle_kr')
    .order('date', { ascending: false })
    .contains('tags', [tag])

  if (error) {
    throw new Error('Failed to fetch posts by tag')
  }

  return data
}

export const findPostBySlug = async (slug: string) => {
  const supabase = await createClientForServer()

  const { data: post, error } = await supabase
    .from('posts')
    .select()
    .eq('slug', slug)
    .single()

  if (error) {
    throw error
  }

  return post
}

export const findAllTags = async () => {
  const supabase = await createClientForServer()

  const { data: posts, error } = await supabase.from('posts').select('tags')

  if (error || !posts) {
    console.error('Error fetching tags:', error)

    return []
  }

  const uniqueTags = new Set<string>()

  posts.forEach((post) => {
    if (post.tags && Array.isArray(post.tags)) {
      post.tags.forEach((tag) => uniqueTags.add(tag))
    }
  })

  return Array.from(uniqueTags).sort()
}

export const findPostById = async (id: string) => {
  const supabase = await createClientForServer()

  const { data: post, error } = await supabase
    .from('posts')
    .select('id, title, content, tags, subtitle')
    .eq('id', id)
    .single()

  if (error) {
    throw error
  }

  return post
}

export const createPost = async (dto: CreatePostDto) => {
  const supabase = await createClientForServer()
  const { error, data } = await supabase
    .from('posts')
    .insert(dto)
    .select('slug')
    .single()

  if (error) {
    throw new Error('Failed to create post.')
  }

  return data
}

export const updatePost = async (id: string, dto: UpdatePostDto) => {
  const supabase = await createClientForServer()
  const { error, data } = await supabase
    .from('posts')
    .update(dto)
    .eq('id', id)
    .select('slug')
    .single()

  if (error) {
    throw new Error('Failed to update post.')
  }

  return data
}

export const deletePost = async (id: string) => {
  const supabase = await createClientForServer()
  const { error } = await supabase.from('posts').delete().eq('id', id)

  if (error) {
    throw new Error('Failed to delete post.')
  }
}

export const getPreviousPost = async (date: string) => {
  const supabase = await createClientForServer()
  const { data, error } = await supabase
    .from('posts')
    .select('slug, title, title_kr')
    .lt('date', date)
    .order('date', { ascending: false })
    .limit(1)
  const prevData = data && data.length > 0 ? data[0] : null

  if (error) {
    throw new Error('Failed to get previous post.')
  }

  return {
    slug: prevData?.slug,
    title: prevData?.title,
    title_kr: prevData?.title_kr
  }
}

export const getNextPost = async (date: string) => {
  const supabase = await createClientForServer()
  const { data, error } = await supabase
    .from('posts')
    .select('slug, title,title_kr')
    .gt('date', date)
    .order('date', { ascending: true })
    .limit(1)

  const nextData = data && data.length > 0 ? data[0] : null

  if (error) {
    throw new Error('Failed to get next post.')
  }

  return {
    slug: nextData?.slug,
    title: nextData?.title,
    title_kr: nextData?.title_kr
  }
}
