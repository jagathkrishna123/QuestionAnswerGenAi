import React from 'react'
import { NavLink } from 'react-router-dom'

import { FaRegUser } from 'react-icons/fa'

import { MdOutlineSpaceDashboard, MdReviews } from 'react-icons/md'
import { RiMessage3Line } from 'react-icons/ri'
import { VscOpenPreview } from 'react-icons/vsc'
import { IoMdAddCircleOutline } from 'react-icons/io'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6'>
        <NavLink end={true} to='/admin' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-blue-300 border-r-4 border-primary"}`}>
            <MdOutlineSpaceDashboard />
            <p className='hidden md:inline-block text-gray-700'>Dashboard</p>
        </NavLink>

        <NavLink  to='/admin/viewuser' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-blue-300 border-r-4 border-primary"}`}>
            <FaRegUser />
            <p className='hidden md:inline-block text-gray-700'>View all users</p>
        </NavLink>

        <NavLink  to='/admin/addDepartment' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-blue-300 border-r-4 border-primary"}`}>
            <IoMdAddCircleOutline />
            <p className='hidden md:inline-block text-gray-700'>Add Department</p>
        </NavLink>

        <NavLink  to='/admin/addNotification' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-blue-300 border-r-4 border-primary"}`}>
            <RiMessage3Line />
            <p className='hidden md:inline-block text-gray-700'>Add Notification</p>
        </NavLink>

        <NavLink  to='/admin/reviews' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-blue-300 border-r-4 border-primary"}`}>
            <VscOpenPreview />
            <p className='hidden md:inline-block text-gray-700'>All User Reviews</p>
        </NavLink>
    </div>
  )
}

export default Sidebar