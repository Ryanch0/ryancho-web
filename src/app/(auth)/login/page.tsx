import { signInAction } from '@/features/login/actions/login'
import LoginForm from '@/features/login/components/LoginForm'
import Footer from '@/shared/components/Footer'
import MainLink from '@/shared/components/MainLink'
import { SearchParams } from 'next/dist/server/request/search-params'

type Props = {
  searchParams: Promise<SearchParams>
}
const Page = async ({ searchParams }: Props) => {
  const { redirect } = await searchParams
  const redirectUrl = typeof redirect === 'string' ? redirect : undefined

  return (
    <div className={'flex h-[calc(100vh-54px)] flex-col gap-4 pt-4 sm:pt-18'}>
      <div>
        <h2 className={'title-style'}>Admin Login</h2>
        <div className={'second-font-style py-1'}>
          <p>Authorized access only</p>
          <span>by</span> <MainLink />
        </div>
        <main className={'layout-content'}>
          <LoginForm action={signInAction} redirectUrl={redirectUrl} />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default Page
