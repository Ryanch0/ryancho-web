import { createClientForClient } from '@/lib/supabase/client'

export const findPostsBySearch = async (search: string) => {
  const supabase = createClientForClient()

  if (search.trim() === '') {
    return []
  }

  const searchTerm = search.trim()

  const { data, error } = await supabase
    .from('posts')
    .select('id, title, preview, tags, slug')
    .or(`title.ilike.%${searchTerm}%,content.ilike.%${searchTerm}%`)
    .order('date', { ascending: false })

  if (error) {
    throw error
  }

  return data
}
