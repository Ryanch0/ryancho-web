import { PATH } from '@/constants/path'
import { redirect } from 'next/navigation'

const Page = () => {
  redirect(PATH.POSTS)
}

export default Page
