import { Link } from "react-router"
import Logo from "./Logo"

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <Logo className='w-8 h-8' />
      <span className="text-3xl font-semibold text-blue-500">
        Booking<span className="text-emerald-400">App</span>
      </span>
    </Link>
  )
}

export default Brand