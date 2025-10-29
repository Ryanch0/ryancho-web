import renderMdxComponents from '@/features/markdown/components/renderMdxComponents'
import PostDetailWrapper from '@/features/posts/components/PostDetailWrapper'
import { MDXRemote } from 'next-mdx-remote-client/rsc'

type Props = {
  content: string
  title: string
}
const PostDetail = ({ content, title }: Props) => {
  const components = renderMdxComponents()

  return (
    <PostDetailWrapper title={title}>
      <MDXRemote source={content} components={components} />
    </PostDetailWrapper>
  )
}

export default PostDetail
