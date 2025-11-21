import { createClientForClient } from '@/lib/supabase/client'

export const findPostsBySearch = async (search: string) => {
  const supabase = createClientForClient()

  if (search.trim() === '') {
    return []
  }

  const searchTerm = search.trim()

  const { data, error } = await supabase
    .from('posts')
    .select('id, title, tags, slug, date, subtitle, title_kr, subtitle_kr')
    .or(
      `title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%,title_kr.ilike.%${searchTerm}%,content_kr.ilike.%${searchTerm}%`
    )
    .order('date', { ascending: false })

  if (error) {
    throw error
  }

  return data
}

export const uploadImageToStorage = async (file: File) => {
  const supabase = createClientForClient()

  const { error } = await supabase.storage
    .from('post-images')
    .upload(`images/${file.name}`, file)

  if (error) return alert('Failed uploading image')

  const imageUrl = supabase.storage
    .from('post-images')
    .getPublicUrl(`images/${file.name}`).data.publicUrl

  return imageUrl
}
