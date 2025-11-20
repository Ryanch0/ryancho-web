import { Post } from '@/external/types/post/entity'

export type CreatePostDto = Omit<Post, 'id' | 'last_modified?'>

export type UpdatePostDto = Omit<
  Post,
  'id' | 'slug' | 'date' | 'title_kr' | 'subtitle_kr' | 'content_kr'
>
