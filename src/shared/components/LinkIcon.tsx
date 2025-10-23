import { IconType } from 'react-icons'

type Props = {
  href: string
  size?: number
  icon: IconType
}

const LinkIcon = ({ size = 30, href, icon: Icon }: Props) => {
  return (
    <a href={href} target="_blank">
      <Icon size={size} className={'hover-bg-invert icon-default-style'} />
    </a>
  )
}

export default LinkIcon
