import { Link } from "react-router"
import RegisterForm from "../components/auth/RegisterForm"

function Register() {
  return (
    <div>
      <h1 className='text-lg font-semibold mb-6'>
        Create a new account
      </h1>
      <RegisterForm/>
      <p className='mt-6'>
        Do u have an account?
      </p>
      <Link to="/login" className='text-blue-500 font-semibold'>
        Sing In
      </Link>
    </div>
  )
}

export { Register }