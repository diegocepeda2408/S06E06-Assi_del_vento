import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "../../utils"
import useApiFetch from "../../hooks/useApiFetch"
import { Bounce, toast, ToastContainer } from "react-toastify"

const schema = z.object({
  checkIn: z.string().min(1, {message: 'checkIn is required'}),
  checkOut: z.string().min(1, {message: 'checkOut is required'})
})

function Reservation({ hotelId }) {
  
  const [data, createReservation, loading, error] = useApiFetch()

  const { handleSubmit, register, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema)
  })
  
  const onSubmit = (dataForm) => {
    dataForm.hotelId = hotelId
    createReservation({
      url: '/bookings',
      method: 'POST',
      body: dataForm
    })
    toast.success('Succes reservation!',{
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
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ToastContainer />
      <div className="flex items-center justify-center gap-2 mb-4">
        <div className="flex flex-col items-center">
          <label htmlFor="check-in" className="font-semibold text-sm">Check-In</label>
          <input
          id="check-in" 
          type="date" 
          className="border px-3 py-1 rounded-sm" 
          {...register('checkIn')}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="check-out" className="font-semibold text-sm">Check-Out</label>
          <input
          id="check-out"
          type="date" 
          className="border px-3 py-1 rounded-sm" 
          {...register('checkOut')}
          />
        </div>
        <button className="btn bg-emerald-500">Reserve</button>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <p className={cn("bg-red-500 bg-opacity-15 text-red-500 py-1 px-2 rounded-sm hidden", errors.checkIn && 'block')}>
          {errors.checkIn && errors.checkIn.message}
        </p>
        <p className={cn("bg-red-500 bg-opacity-15  text-red-500 py-1 px-2 rounded-sm hidden", errors.checkOut && 'block')}>
          {errors.checkOut && errors.checkOut.message}
        </p>
      </div>
    </form>
  )
}

export default Reservation