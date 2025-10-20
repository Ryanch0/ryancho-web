import MarkDownHeading from '@/features/markdown/components/MarkDownHeading'
import MarkDownImage from '@/features/markdown/components/MarkDownImage'
import { MDXComponents } from 'next-mdx-remote-client/rsc'

const renderMdxComponents = () => {
  const components: MDXComponents = {
    h1: (props) => <MarkDownHeading level={1} {...props} />,
    h2: (props) => <MarkDownHeading level={2} {...props} />,
    h3: (props) => <MarkDownHeading level={3} {...props} />,
    h4: (props) => <MarkDownHeading level={4} {...props} />,
    img: (props) => <MarkDownImage {...props} />
  }

  return components
}

export default renderMdxComponents
