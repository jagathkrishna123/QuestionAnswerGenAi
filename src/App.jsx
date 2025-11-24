import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { useAppContext } from './context/AppContext'
import Login from './Components/Login'
import Footer from './Components/Footer'

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
        </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App