import { signInAction } from '@/features/login/actions/login'
import LoginForm from '@/features/login/components/LoginForm'
import { SearchParams } from 'next/dist/server/request/search-params'

type Props = {
  searchParams: Promise<SearchParams>
}
const Page = async ({ searchParams }: Props) => {
  const { redirect } = await searchParams
  const redirectUrl = typeof redirect === 'string' ? redirect : undefined

  return (
    <div className={'pt-18'}>
      <h2 className={'title-style pb-8'}>Admin Login</h2>
      <LoginForm action={signInAction} redirectUrl={redirectUrl} />
    </div>
  )
}

export default Page
