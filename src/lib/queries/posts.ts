import { createClientForServer } from '@/lib/supabase/server'

export async function getAllPosts() {
  const supabase = await createClientForServer()

  const { data: posts, error } = await supabase
    .from('posts')
    .select('id, title, preview, tags, slug')
    .order('date', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    throw error //TODO error.tsx ('use client') 필요
  }

  return posts
}

export async function getPostBySlug(slug: string) {
  const supabase = await createClientForServer()

  const { data: post, error } = await supabase
    .from('posts')
    .select(
      'id, title, content, preview, tags, date, last_modified, meta_description'
    )
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching post:', error)

    return null
  }

  return post
}

export async function getAllTags() {
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
