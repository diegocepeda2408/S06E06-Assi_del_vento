import { useEffect, useState } from "react"
import { Bounce, toast, ToastContainer } from 'react-toastify'
import useApiFetch from "../hooks/useApiFetch"
import ReservationList from "../components/reservations/ReservationList"
import Modal from "../components/Modal"
import Review from "../components/reservations/Review"

function Reservations() {
  const [reservations, fetchReservations, error, loading] = useApiFetch()
  const [openModal, setOpenModal] = useState(false)
  const [child, setChild] = useState(null)
  useEffect(() => {
    fetchReservations({
      url: '/bookings'
    })
  }, [])

  const handleDelete = (id) => {
    fetchReservations({
      url: `/bookings/${id}`,
      method: 'DELETE'
    })
    toast.info('Reservation deleted!', {
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

  const closeModal = () => {
    setOpenModal(false)
  }

  const handleOpenModal = (id) => {
    setOpenModal(true)
    setChild(<Review hotelId={id} closeModal={closeModal}/>)
  }
  
  return (
    <div className="max-w-5xl mx-auto px-5 py-16">
      <ToastContainer/>
      <ReservationList
      reservations={reservations}
      onDelete={handleDelete}
      onRate={handleOpenModal}
      />

      <div className="size-3">
        <Modal
        openModal={openModal}
        closeModal={closeModal}
        >
          {child}
        </Modal>
      </div>
    </div>
  )
}

export { Reservations }