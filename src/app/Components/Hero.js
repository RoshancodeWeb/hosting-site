"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Hero = () => {
    const [showMessageBox, setshowMessageBox] = useState(false);
  return (
    <div className='w-full min-h-fit flex flex-col gap-8 md:gap-10  pt-24 lg:pt-28'>
         <Image className='mx-auto mt-5 cursor-pointer w-auto h-auto'  src="https://kinsta.com/wp-content/themes/kinsta/images/custom-pages/page/home/kinsta-icon.svg" alt='useful-image' width={40} height={40} />
         <p className='text-white w-full h-fit text-4xl md:text-5xl  lg:text-7xl md:w-[80%] font-bold text-center relative z-0 translate-x-[-50%] left-[50%] font-roman'>The best home for modern WordPress sites</p>
         <p className='w-full h-fit text-center text-gray-400 font-roman lg:text-xl'>Ultimate performance at the core, with endless possibilities to amplify</p>
         <button className='w-fit h-fit mb-5 relative translate-x-[-50%] left-[50%] lg:text-xl  bg-white hover:bg-[#DAC6BD]   py-3 px-5 rounded'>Sign up now</button>
         <div className='fixed bottom-5 right-5 z-50 w-fit h-fit'>
                  <div className={showMessageBox==true?'w-[300px] md:w-[60vh] h-[75vh] rounded mb-20 bg-gray-300  ':'opacity-0 w-[60vh] hidden h-[75vh] rounded mb-20 bg-gray-300'}>

                    <div className='w-full h-[20%] bg-[#fd3400] flex items-center pl-5 rounded-t'>
                        <div className='w-fit h-fit relative'>
                            <Image className='rounded-full border-2 border-black w-auto h-auto' src="https://kinsta.com/wp-content/themes/kinsta/images/custom-pages/page/home/kinsta-icon.svg"  alt='image-general' width={40} height={40} />
                            <div className='w-[14px] h-[14px] absolute rounded-full border-2 right-[-4px] bottom-[2px]  border-black bg-[rgba(0,_189,_165,_1)] '></div>
                        </div>
                        <p className='text-white font-light text-xl pl-2'>Roshan</p>

                    </div>
                    <div className='w-full min-h-[62%] bg-white pl-4 pt-5'>
                          <Image className='rounded-full border-2  border-black w-auto h-auto' src="https://kinsta.com/wp-content/themes/kinsta/images/custom-pages/page/home/kinsta-icon.svg" alt='general-image' width={40} height={40} />
                          <p className='w-[80%] h-fit ml-12 mt-[-30px] mb-5  rounded-b rounded-tr  px-5 py-3 text-sm bg-gray-200 text-[rgb(51,_71,_91)] leading-7'>Ask us about making the switch to simpler, faster, and more reliable cloud hosting. Start a live chat now!</p>
                          <p className='w-[80%] h-fit px-5 py-3 ml-12  rounded-b rounded-tr text-sm bg-gray-200 text-[rgb(51,_71,_91)]'>Welcome! How can we help you today?</p>
                    </div>
                    <div className='w-full h-[18%] mt-[1px] bg-white rounded-b flex items-center'>
                       <input type="text" className='ml-2 bg-gray-300 rounded w-[85%]  h-fit  py-3 focus:outline-none px-2' placeholder='Choose an Option'/>
                       <Image className='ml-2 w-auto h-auto' src="/send.png" width={30} height={30} alt='send-icon'/>
                    </div>
                </div> 
                <button onClick= 
                    {
                    ()=>{
                        setshowMessageBox(!showMessageBox);
                    }
                    } className='w-fit h-fit bg-[#FD3400] px-2 py-2 md:px-4 md:py-4 rounded-full fixed bottom-5 right-5 z-50 hover:scale-110 transition-transform ease-in-out duration-300'>
                    <Image src={showMessageBox==true?"/close.png":"/message.png"} width={40} height={40} alt='message-close-icon'/>
                </button>
         </div>
         
         
    </div>
  )
}

export default Hero
