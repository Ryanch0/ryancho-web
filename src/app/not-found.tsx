import { PATH } from '@/constants/path'
import Link from 'next/link'

const NotFound = () => {
  return (
    <main>
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link href={PATH.MAIN}>
        <h4>Return Home</h4>
      </Link>
    </main>
  )
}

export default NotFound
