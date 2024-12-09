import { Link } from "react-router"
import LoginForm from "../components/auth/LoginForm"
function Login() {
  return (
    <div>
      <h1 className='text-lg font-semibold mb-6'>
        Sing in with your account
      </h1>
      <LoginForm/>
      <p className='mt-6'>
        Don't u have an account?
      </p>
      <Link to="/register" className='text-blue-500 font-semibold'>Register</Link>
    </div>
  )
}

export { Login }