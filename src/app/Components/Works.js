import Image from 'next/image'
import React from 'react'


const Description = ({ imageUrl,description }) => {
  return (
    <div className='w-full h-fit flex items-start'>
      <div className='w-fit h-fit p-1 rounded-full  bg-[#FE3700] mt-1'>
          <Image  width={10} height={10}  src={imageUrl}  alt='tick-icon' /> 
      </div>
      <p className='w-full h-fit text-[#594F50] pl-2 text-[4vw] md:text-2xl'>{description}</p>
      
    </div>
  )
}




const Works = () => {
  return (
    <div className='w-full  min-h-[100vh] flex flex-col-reverse md:flex-row bg-[#F5EDE9] pt-28'>
      
      
      <div className='w-full md:w-[50%] h-fit pt-10 pl-5 pr-5'>
        <p className='text-[6vw] md:text-4xl font-medium pb-5 '>Works with every tech and<br></br> framework</p>
        
        <div className='w-full  h-fit inline-flex flex-col gap-3'>
           <Description imageUrl="/tick.png" description="19 programming languages and 4 database types with completely automatic setup"/>
           <Description imageUrl="/tick.png" description="Use any stack with custom Dockerfiles"/>
           <Description imageUrl="/tick.png" description="All modern frameworks supported"/>
        
        </div>
        
      </div>

      <div className='w-full md:w-[50%] h-fit  '>
         <img className='mx-auto w-[80%] md:w-[100%] object-cover' src='https://kinsta.com/wp-content/uploads/2023/11/tech-pile-logos-min-300x226.png' alt='work-image' />
      </div>
    
    </div>
  )
}

export default Works
