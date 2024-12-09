import { useEffect, useState } from "react"
import { useHotels } from "../context/hotels"
import HotelList from "../components/home/HotelList"
import Search from "../components/home/Search"
import Filter from "../components/home/Filter"
import Menu from "../components/Menu"
import { FaFilter } from "react-icons/fa6";
import { useAuth } from "../context/auth"
import { Bounce, toast, ToastContainer } from "react-toastify"

function Home() {
  
  const {hotels, getAll} = useHotels()
  const [result, setResult] = useState('')
  const [openMenu, setOpenMenu] = useState(false)
  const { isAuth, user } = useAuth()

  useEffect(() => {
    if (hotels.length === 0) {
      getAll()    
    }
    if (isAuth){
      toast.success(`Logged in as ${user.firstName} ${user.lastName}!`, {
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
  }, [])

  const filtered = hotels.filter(hotel => hotel?.name.toLowerCase().includes(result))

  const handleToggle = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div>
      <main className='max-w-5xl mx-auto px-5 py-10'>
        <ToastContainer />
        <div className="mb-8 flex items-center gap-4">
          <Search setResult={setResult}/>
          <button className="md:hidden" onClick={handleToggle}>
            <FaFilter className="size-6 text-blue-500"/>
          </button>
          <Menu openMenu={openMenu} closeMenu={handleToggle}>
            <Filter setResult={setResult}/>
          </Menu>
        </div>
        <HotelList hotels={filtered}/>
      </main>
    </div>
  )
}

export { Home }
