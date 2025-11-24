import React from 'react'
import MainBanner from '../Components/MainBanner'
import SyllabusList from '../Components/SyllabusList'
import TrustedBy from '../Components/TrustedBy'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner/>
        <SyllabusList/>
        <TrustedBy/>
    </div>
  )
}

export default Home