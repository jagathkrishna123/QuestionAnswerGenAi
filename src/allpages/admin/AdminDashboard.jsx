

import React, { useEffect, useState } from 'react'
import { admindashboard_data, assets, } from '../../assets/assets'
// import BlogTableItem from '../../components/admin/BlogTableItem'

const AdminDashboard = () => {

  const [dashboardData, setDashboardData] = useState({
    users: 0,
    filesGenerated: 0,
    Feedbacks:0,
    // recentBlogs:[]
  })

  const fetchDashboard = async () => {
    setDashboardData(admindashboard_data)
  }

  useEffect(() => {
    fetchDashboard()
  },[])
  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
        <div className='flex flex-wrap gap-4'>
            <div className='flex items-center gap-4 bg-blue-300 p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
                <img src={assets.dashboard_icon_1} alt="" />
                <div>
                  <p className='text-xl font-semibold text-gray-600'>{admindashboard_data.users}</p>
                  <p className='text-gray-600 font-light'>Total users</p>
                </div>
            </div>

            <div className='flex items-center gap-4 bg-blue-300 p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
                <img src={assets.dashboard_icon_2} alt="" />
                <div>
                  <p className='text-xl font-semibold text-gray-600'>{admindashboard_data.filesGenerated}</p>
                  <p className='text-gray-600 font-light'>Total files Generated</p>
                </div>
            </div>

            <div className='flex items-center gap-4 bg-blue-300 p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
                <img src={assets.dashboard_icon_3} alt="" />
                <div>
                  <p className='text-xl font-semibold text-gray-600'>{admindashboard_data.Feedbacks}</p>
                  <p className='text-gray-600 font-light'>Total Feedbacks</p>
                </div>
            </div>
        </div>

        <div>
          {/* ....heading...... */}
            {/* <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
              <img src={assets.dashboard_icon_4} alt="" />
              <p>Latest Blogs</p>
            </div> */}
          {/* ....Table...... */}
            {/* <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
              <table className='w-full text-sm text-gray-500'>
                <thead className='text-xs text-gray-600 text-left uppercase'>
                  <tr>
                    <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                    <th scope='col' className='px-2 py-4'>Blog Title</th>
                    <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                    <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                    <th scope='col' className='px-2 py-4'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.recentBlogs.map((blog, index)=> {
                    return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1}/>
                  })}
                </tbody>
              </table>
            </div> */}
        </div>
    </div>
  )
}

export default AdminDashboard