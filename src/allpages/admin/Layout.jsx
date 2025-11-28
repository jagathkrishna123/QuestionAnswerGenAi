import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../admin/Sidebar'


const Layout = () => {
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
    }
  return (
    <>
        <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200'>
            <NavLink to='/' onClick={()=> navigate('/')}>
              <p className="bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent text-3xl font-bold">
                NoteGen AI
              </p>
            </NavLink>
            
            <button onClick={logout} className='text-sm px-8 py-2 bg-blue-600 text-white rounded-full cursor-pointer'>Logout</button>
        </div>
        <div className='flex h-[calc(100vh-70px)]'>
            <Sidebar/>
            <Outlet/>
        </div>
    </>
  )
}

export default Layout