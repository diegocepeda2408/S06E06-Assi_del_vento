import {create } from 'zustand'
import api from '../services/api'

const ls = window.localStorage

export const useAuth = create((set) => ({ 
  user: JSON.parse(ls.getItem('user')) || null,
  token: ls.getItem('token') || null,
  isAuth: Boolean(ls.getItem('token')) || false,
  status: 'idle',
  error: null,

  login: async ({ email, password }) => {
    set({ status: 'pending' }) //Esta en proceso
    try{
      const res = await api.post('users/login', { email, password })
      const { user, token } = res.data

      ls.setItem('token', token)
      ls.setItem('user', JSON.stringify(user))

      set({
        user,
        token,
        isAuth: true,
        status: 'resolved', //peticion exitosa
        error: null
      })
    } catch (err) {
      set({
        status: 'rejected', //peticion rechazada
        error: err.response?.data?.message || 'Error on Login'
      })
      throw err
    }
  },
  logout: () => {
    ls.removeItem('token')
    ls.removeItem('user')

    set({
      user: null,
      token:null,
      isAuth: false,
      status: 'idle',
      error: null
    })
  },
  register: async ({ firstName, lastName, email, password, gender }) => {
    set({ status: 'pending' })
    try {
      await api.post('users', { firstName, lastName, email, password, gender })
      set({ 
        status: 'resolved',
        error: null
      })
    } catch (error) {
      set({
        status: 'rejected', //peticion rechazada
        error: error.response?.data?.message || error.message
      })
    }
  }
}))