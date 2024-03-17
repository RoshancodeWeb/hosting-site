import 'remixicon/fonts/remixicon.css'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const IndividualFeatures = ({ imageUrl,title,description }) => {
  return (
   
    <div className='w-[80vw] lg:w-[50%] h-[300px] pt-3 pl-3  group hover:shadow-lg  transition-shadow duration-300   hover:shadow-gray-600 cursor-pointer  bg-[#FFFFFF] rounded-xl'>
      <Link className='w-[100%] h-[100%] flex flex-col  justify-between' href="/"> 
      <img className='cursor-pointer' src={imageUrl} width={60} height={60} alt='feature-image'/>
      <p className='text-xl cursor-pointer font-bold w-full'>{title}</p>
      <p className='text-lg cursor-pointer w-full text-[#5A5152]'>{description}</p>
      <div className='w-full cursor-pointer h-fit pb-5 flex items-center '>
        <p className='text-lg cursor-pointer'>Learn more <i className="ri-arrow-right-line  text-lg  hover: transition-opacity duration-300 ease-linear opacity-0 group-hover:opacity-100 text-[#FE3D00]"></i></p>
      </div>
      </Link>
    </div>
  
  )
}




const Features = () => {
  return (
    <div className='w-full min-h-fit bg-[#F5EDE9]'>
      <p className='w-full h-fit text-roman text-2xl font-light mx-auto pt-5 text-center lg:py-10 lg:text-4xl'>Everything under one roof</p>
      <div className='w-full min-h-[50vh] bg-[#F5EDE9] mt-5  pl-8 lg:pb-5 lg:pl-2 lg:pr-2 flex flex-col pr-10 lg:flex-row'>
          <div className='w-full  h-fit flex flex-col gap-5 md:flex-row lg:w-[50%] lg:pr-2'>
             <IndividualFeatures  imageUrl="https://kinsta.com/wp-content/uploads/2023/11/WP-Service-Icons-min.png" title="WordPress Hosting" description="Bring your WordPress site to the new age with the speed and security you expect today, backed up by expert support." />
             <IndividualFeatures  imageUrl="https://kinsta.com/wp-content/uploads/2023/11/Service-Service-Icons-min.png" title="Static Site Hosting" description="Deploy your static website or the prebuilt elements of a composable architecture to a global edge network." />
          </div>

          <div className='w-full  h-fit flex flex-col gap-5 pt-5 lg:pt-0 md:flex-row lg:w-[50%]'>
             <IndividualFeatures  imageUrl="https://kinsta.com/wp-content/uploads/2023/11/APP-Service-Icons-min.png" title="Web App Hosting" description="Run any code from frontend to backend, and don’t worry about the infrastructure, with automatic deployments." />
             <IndividualFeatures  imageUrl="https://kinsta.com/wp-content/uploads/2023/11/DB-Service-Icons-min.png" title="Database Hosting" description="Manage your databases where they are not the afterthought, tuned for speed with real dedicated resources." />
          </div>


      </div>
    </div>
  )
}

export default Features
