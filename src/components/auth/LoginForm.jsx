import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../context/auth"
import { useNavigate } from "react-router"
import { Bounce, toast, ToastContainer } from "react-toastify"

const schema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(6)
})


function LoginForm() {
  
  const { login } = useAuth()

  const navigate = useNavigate()
  
  const {handleSubmit, register, formState: {errors}, reset} = useForm({
    resolver: zodResolver(schema)
  })

  
  const onSubmit = async (dataForm) => {
    try {
      await login(dataForm)
      reset()
      navigate('/')
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong"
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      })
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer />
        <div>
          <label className="block font-semibold">E-mail:</label>
          <input 
          type="email"
          placeholder="e-mail..." 
          className="input-form"
          {...register('email')}
          />
          {errors.email && (
            <p className='error-validation'>
              {errors.email.message}
            </p>
            )}
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Password</label>
          <input
          type="password"
          placeholder="password..."
          className="input-form"
          {...register('password')} 
          />
          {errors.password && (
            <p className='error-validation'>
              {errors.password.message}
              </p>
            )}
        </div>
        <button className="btn w-full">Sing In</button>
      </form>

    </div>
  )
}

export default LoginForm