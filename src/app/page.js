import React from 'react'
import Hero from './Components/Hero'
import Dashboard from './Components/Dashboard'
import Features from './Components/Features'
import Feature_Two from './Components/Feature_Two'
import Works from './Components/Works'
import UserExp from './Components/UserExp'
import Reviews from './Components/Reviews'

const page = () => {
  return (
    <>
    <div className='w-full min-h-fit bg-no-repeat bg-cover bg-center  bg-[url("https://kinsta.com/wp-content/themes/kinsta/images/custom-pages/page/home/hero-bg-mobile.webp")]'>
       <Hero/>
       <Dashboard />
    </div>
    <Features/>
    <Feature_Two/>
    <Works/>
    <UserExp/>
    <Reviews/>
    </>
    
  )
}

export default page
