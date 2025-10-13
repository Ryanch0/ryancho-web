import { signIn } from '@/actions/login'
import LoginForm from '@/features/login/LoginForm'

const Page = () => {
  return (
    <div>
      <h1>Admin Login</h1>
      <LoginForm action={signIn} />
    </div>
  )
}

export default Page
