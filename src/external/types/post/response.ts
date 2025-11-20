import { Post } from '@/external/types/post/entity'

export type PostListItem = Pick<
  Post,
  | 'id'
  | 'title'
  | 'tags'
  | 'slug'
  | 'date'
  | 'subtitle'
  | 'title_kr'
  | 'subtitle_kr'
>

export type PostForm = Pick<
  Post,
  'id' | 'title' | 'content' | 'tags' | 'subtitle'
>

export type PostSlug = Pick<Post, 'slug'>
