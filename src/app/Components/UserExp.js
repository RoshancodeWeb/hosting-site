"use client"
import Image from 'next/image'
import React from 'react'
import VideoPlayer from './VideoPlayer'

const UserExp = () => {
  return (
    <div className='w-full min-h-[100vh] bg-[#F5EDE9]'>
      <p className='text-3xl w-full h-fit text-center pt-20 md:text-6xl md:w-[80%] mx-auto pb-3 lg:pb-20'>120,000+ happy users can’t be wrong</p>
      <div className='w-full h-[fit]  md:flex '>
         <div className='w-full h-[50vh]  md:w-[50%]  flex items-center justify-center'>
              <VideoPlayer /> 
         </div>

         <div className='w-full min-h-[50vh] flex flex-col pl-5 md:w-[50%] '> 
             <Image className='mt-3 md:mt-0 ' src="/comma.png" width={40} height={40}  alt='comma'/>
             <p className='text-2xl w-full h-fit pt-2 md:text-4xl lg:w-[80%]'>Roshan’s platform and staff really feel like an extension of our own team.</p>
             <p className='w-full h-fit pt-5 text-[#594F50] md:text-xl lg:w-[80%]'>Motto is a Montreal-based web agency that focuses on building and managing sites for all types of clients, from small startups to large enterprises.</p>
         </div>

      </div>
    </div>
  )
}

export default UserExp
