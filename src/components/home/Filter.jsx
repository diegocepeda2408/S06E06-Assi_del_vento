import { useEffect, useRef } from "react"
import { useHotels } from "../../context/hotels"
import useApiFetch from "../../hooks/useApiFetch"

function Filter() {
  const { getHotelByCity } = useHotels()
  const [cities, getCities] = useApiFetch()
  const selectRef = useRef()

  useEffect(() => {
    getCities({
      url: '/cities'
    })
  }, [])

  const handleChange = () => {
    getHotelByCity(selectRef.current.value)
  }
  
  return (
    <div className="input-form w-full md:w-fit">
      <select onChange={handleChange} ref={selectRef} className="py-1 px-2 w-full focus:outline-none">
        <option value="">All cities</option>
        {cities.map(city => (
          <option value={city?.id} key={city?.id}>{city?.name}</option>
        ))}
      </select>
    </div>
  )
}

export default Filter