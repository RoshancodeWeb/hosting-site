import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const IndividualFeatures= ({ imageUrl,title,description }) => {
  return (
    <div className='w-[90vw] lg:w-[50%] h-fit lg:h-[40vh]  pt-3 pl-3   group hover:shadow-lg  transition-shadow duration-300   hover:shadow-gray-600 cursor-pointer  bg-[#FFFFFF] rounded-xl'>
      <Link className='w-[100%] h-[100%] flex flex-col  justify-between lg:justify-start  lg:gap-4' href="/"> 
      <Image width={300} height={32} className='cursor-pointer w-[300px] lg:w-[450px] h-8 lg:h-12 ' src={imageUrl}  alt='image' />
      <p className='text-xl cursor-pointer font-bold w-full'>{title}</p>
      <p className='text-lg  cursor-pointer w-full text-[#5A5152]'>{description}</p>

      </Link>
    </div>
  )
}




const Feature_Two = () => {
  return (
    <div className='w-full min-h-[100vh] bg-[#F5EDE9]'>
        <div className='w-full h-fit pt-28'>
            <p className='h-fit text-roman w-[80%] font-light  text-3xl  pb-5 mx-auto pt-5 text-center lg:py-10 lg:font-medium lg:text-5xl '>Make use of the Kinsta stack</p>
            <p className='w-[80%] mx-auto font-roman text-[#5F5556] text-lg h-fit text-center'>Endless possibilities when you have WordPress plus everything else in one place</p>
        </div>

        <div className='w-full min-h-[50vh] bg-[#F5EDE9] mt-5  pl-5 lg:pb-5 lg:pl-2 lg:pr-2 flex flex-col pr-10 '>
          <div className='w-full  h-fit flex flex-col gap-5 md:flex-row  lg:pr-2'>
             <IndividualFeatures  imageUrl="/feature_one.png" title="Headless WordPress"  description="Use the longest standing content management system with your cutting edge frontend."/>
             <IndividualFeatures  imageUrl="/feature_two.png" title="WordPress as a static site" description="Render your complete WordPress site into static assets, giving unparalleled speed and inherent security." />
          </div>

          <div className='w-full  h-fit flex flex-col mt-5 gap-5 pt-5 lg:pt-0 md:flex-row '>
             <IndividualFeatures  imageUrl="/feature_three.png" title="Extend with custom solutions" description="It can be a WordPress plugin with its own functions and database, or something running besides your site core." />
             <IndividualFeatures  imageUrl="/feature_four.png" title="Microservice architecture" description="WordPress doesn’t have to be a monolith either, compartmentalize any function into a separate app." />
          </div>


      </div>
         
       <div className='w-[90%] mx-auto rounded-2xl   mt-32 h-[35vh] lg:h-[25vh] bg-[rgb(42,_14,_11)]'>
           <div className='w-full rounded-2xl h-full lg:pl-5 lg:pr-5  bg-left flex flex-col gap-5 lg:flex-row lg:justify-between items-center bg-cover bg-[url("https://kinsta.com/wp-content/uploads/2023/11/application-cta-background.svg")]'>
              <p className='text-xl lg:text-4xl text-white text-center font-roman pt-5'>We give you the tool kit, you take it away</p>
              <button className='bg-white py-4 px-3 rounded font-bold hover:bg-[#DAC6BD]'>Try for free</button>    
           </div>
       </div>
        
       
    </div>
  )
}

export default Feature_Two
