import MarkDownTOC from '@/features/markdown/components/MarkDownTOC'
import renderMdxComponents from '@/features/markdown/components/renderMdxComponents'
import { MDXRemote } from 'next-mdx-remote-client/rsc'

type Props = {
  content: string
}
const PostDetail = ({ content }: Props) => {
  const components = renderMdxComponents()

  return (
    <div className="prose">
      <MDXRemote source={content} components={components} />
      <MarkDownTOC />
    </div>
  )
}

export default PostDetail
