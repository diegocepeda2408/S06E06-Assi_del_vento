import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../context/auth'
import { Bounce, toast, ToastContainer } from 'react-toastify'

function Nav() {

  const { isAuth, logout } = useAuth()

  const handleLogout = () => {
    logout()
    toast.warn('Logged out', {
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

  return (
    <div className='grid place-content-center py-5'>
      <div className="flex flex-col md:flex-row items-center gap-6">
        { isAuth ? (
          <>
            <Link to='/reservations' className='nav-link'>
              Reservations
            </Link>
            <button className="btn bg-red-500" onClick={handleLogout}>
              Logout
            </button>
          </>
          ) : (
            <>
              <Link to="/login" className='nav-link'>
                Sing In
              </Link>
              <Link to="/register" className='nav-link'>
                Sing Up
              </Link>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Nav