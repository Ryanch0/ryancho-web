import { CreatePostDto, UpdatePostDto } from '@/external/types/post/dto'
import { createClientForServer } from '@/lib/supabase/server'

export const findAllPosts = async () => {
  const supabase = await createClientForServer()

  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, preview, tags, slug')
    .order('date', { ascending: false })

  if (error) {
    throw error //TODO error.tsx ('use client') 필요
  }

  return posts
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
    .select('id, title, content, tags')
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
