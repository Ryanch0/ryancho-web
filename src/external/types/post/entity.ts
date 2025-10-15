export type Post = {
  id: string
  title: string
  slug: string
  preview: string
  content: string
  tags?: string[]
  date: string
  last_modified?: string
  meta_description: string
}
