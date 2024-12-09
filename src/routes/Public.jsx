import { Navigate, Outlet } from 'react-router'
import { useAuth } from '../context/auth'

import React from 'react'

function Public({children}) {
  const {isAuth} = useAuth()

  if (isAuth) return <Navigate to='/'/>
  return children ? children : <Outlet />
}

export default Public