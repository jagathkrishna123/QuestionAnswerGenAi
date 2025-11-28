import React from 'react'
import MainBanner from '../Components/MainBanner'
import SyllabusList from '../Components/SyllabusList'
import TrustedBy from '../Components/TrustedBy'
import Testimonials from '../Components/Testimonials'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <SyllabusList/>
        <TrustedBy/>
        <Testimonials/>
    </div>
  )
}

export default Home