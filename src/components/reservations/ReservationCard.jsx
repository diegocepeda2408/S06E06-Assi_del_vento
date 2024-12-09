import { Link } from "react-router";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineBedroomParent } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { priceFormat } from "../../utils";

function ReservationCard({ reservation, onDelete, onRate }) {

  const checkInDate = new Date(reservation.checkIn + 'T00:00:00')
  const checkOutDate = new Date(reservation.checkOut + 'T00:00:00')

  const msPerDay = 1000 * 60 * 60 * 24

  const nights = Math.ceil((checkOutDate - checkInDate) / msPerDay)

  const pricePerNight = parseInt(reservation?.hotel?.price)

  const totalPrice = pricePerNight * nights

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <h2 className="text-xl font-semibold p-4 bg-blue-500 text-white">
        <Link to={`/hotel/${reservation.hotel.id}`}>
          {reservation?.hotel.name}
        </Link>
      </h2>
      <div className="p-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt className="size-8"/>
            <div>
              <p className="font-semibold">Arival</p>
              <p className="text-xs">{reservation.checkIn}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt className="size-8"/>
            <div>
              <p className="font-semibold">Departure</p>
              <p className="text-xs">{reservation.checkOut}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SlLocationPin/>
          <p className="text-sm">
            {reservation?.hotel?.city.name}, {reservation?.hotel?.city.country}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdOutlineBedroomParent/>
          <p>{nights} {nights == 1 ? 'Night' : 'Nights'}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <RiMoneyDollarCircleLine/>
            <p>Price per night:</p>
          </div>
          <p className="font-semibold">{priceFormat.format(pricePerNight)}</p>
        </div>
        <div className="flex justify-between items-center border-t-2 pt-4">
          <div className="flex items-center gap-2">
            <RiMoneyDollarCircleLine/>
            <p className="font-semibold text-lg">Total:</p>
          </div>
          <p className="font-semibold text-xl">
            {priceFormat.format(totalPrice)}
          </p>
        </div>
      </div>
      <div className="flex justify-between bg-gray-100 py-4 px-6">
        <button
        className="btn bg-red-500"
        onClick={() => onDelete(reservation?.id)}        
        >
          Delete
        </button>
        <button 
        className="btn bg-yellow-500"
        onClick={() => onRate(reservation?.hotel.id)}
        >
          Rate
        </button>
      </div>
    </div>
  )
}

export default ReservationCard