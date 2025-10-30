import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'

import { EXTERNAL_URL } from '@/constants/path'

export const ICON_LIST = [
  { id: 'email', href: `mailto:${EXTERNAL_URL.EMAIL}`, icon: MdAlternateEmail },
  {
    id: 'github',
    icon: FaGithub,
    href: EXTERNAL_URL.GITHUB
  },
  {
    id: 'linkedin',
    icon: FaLinkedinIn,
    href: EXTERNAL_URL.LINKEDIN
  },
  {
    id: 'instagram',
    icon: FaInstagram,
    href: EXTERNAL_URL.INSTAGRAM
  },
  { id: 'twitter', icon: FaTwitter, href: EXTERNAL_URL.TWITTER }
]
