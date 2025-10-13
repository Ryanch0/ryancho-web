import Link from 'next/link'

const Header = () => {
  return (
    <ul className="flex items-center gap-x-10">
      <li>
        <Link href="/posts">LOGO</Link>
      </li>
      <li>
        <Link href="/about-me">About me</Link>
      </li>
      <li className="ml-auto">
        <Link href="#">Search</Link>
      </li>
      <li>
        <Link href="#">Mode</Link>
      </li>
      <li>
        <Link href="/write">Create Post</Link>
      </li>
    </ul>
  )
}

export default Header
