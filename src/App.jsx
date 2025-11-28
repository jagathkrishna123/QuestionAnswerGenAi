import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { useAppContext } from './context/AppContext'
import Login from './Components/Login'
import Footer from './Components/Footer'
import Aboutus from './Components/Aboutus'
import Aboutus2 from './Components/Aboutus2'
import Layout from './allpages/admin/Layout'
import ViewUsers from './allpages/admin/ViewUsers'
import AddDepartment from './allpages/admin/AddDepartment'
import AddNotification from './allpages/admin/AddNotification'
import AllReviews from './allpages/admin/AllReviews'
import AdminDashboard from './allpages/admin/AdminDashboard'

const App = () => {
  const isAdminPath = useLocation().pathname.includes("admin")
  const {showUserLogin} = useAppContext()
  return (
    <div>
      {isAdminPath ? null : <Navbar/>}
      {showUserLogin ? <Login/> : null}
      
      <div className={`${isAdminPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<Aboutus/>}/>
          <Route path='/about2' element={<Aboutus2/>}/>
          <Route path='/admin' element={true ? <Layout/> : <Login/>}>
            <Route index element={<AdminDashboard/>}/>
            <Route path='viewuser' element={<ViewUsers/>}/>
            <Route path='addDepartment' element={<AddDepartment/>}/>
            <Route path='addNotification' element={<AddNotification/>}/>
            <Route path='reviews' element={<AllReviews/>}/>
         </Route>
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App