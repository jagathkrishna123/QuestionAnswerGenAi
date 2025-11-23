import React from 'react'
import MainBanner from '../Components/MainBanner'
import SyllabusList from '../Components/SyllabusList'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <SyllabusList/>
    </div>
  )
}

export default Home