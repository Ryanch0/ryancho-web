import { signInAction } from '@/features/login/actions/login'
import LoginForm from '@/features/login/LoginForm'

const Page = () => {
  return (
    <div>
      <h1>Admin Login</h1>
      <LoginForm action={signInAction} />
    </div>
  )
}

export default Page
