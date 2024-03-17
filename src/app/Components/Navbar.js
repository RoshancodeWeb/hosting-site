"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [inscreaseWidth, setinscreaseWidth] = useState(false);
  const [showSubMenu, setshowSubMenu] = useState(false);
  


  return (
    <div className={inscreaseWidth===true?'fixed pl-2 pr-2   transition-height duration-500 ease-in-out w-[90%] h-[95vh] md:h-[90vh]  bg-[#181516] rounded-lg left-[50%] translate-x-[-50%] top-5 lg:flex lg:justify-between z-40 ':' z-40 lg:flex lg:justify-between fixed w-[90%] h-[12vh] transition-height ease-in-out duration-500 bg-[#181516] pl-2 pr-2 rounded-lg left-[50%] translate-x-[-50%] top-5 '}> 
   
    <div className='w-full lg:w-fit  h-[12vh]  flex  justify-between items-center '>
        <Link href="/"><Image className='cursor-pointer w-auto h-auto' src="/logo.png" width={100} height={30} alt='logo'/></Link>
        <Image className='lg:hidden w-auto h-auto' src={inscreaseWidth==true?"/close.png":"/menu.png"} alt='close-icon' width={25} height={30}  onClick={
        ()=>{
            setinscreaseWidth(!inscreaseWidth);
        }} />
      </div> 

      <ul className={inscreaseWidth===true?'w-full lg:w-fit h-[40vh] lg:mt-3  text-sm flex flex-col gap-3 overflow-y-auto  lg:flex-row  text-white lg:overflow-visible lg:gap-7':'lg:mt-3 lg:gap-7 lg:overflow-visible lg:w-fit w-full text-white h-[40vh] hidden   lg:flex  gap-3  '}>
             <li  className='bg-[#252122] lg:bg-transparent pt-4 pb-4 pl-4 rounded cursor-pointer '>
                  <span className='lg:hidden' onClick={
                        ()=>{
                          setshowSubMenu(!showSubMenu);  
                        }
                    }>Hosting Services</span>

                   <span className='lg:block hidden' 
                    onClick={
                        ()=>{
                            setshowSubMenu(!showSubMenu); 
                            setinscreaseWidth(!inscreaseWidth);
                        }
                           }
                   >
                    Hosting Services
                  </span> 
            <div className={showSubMenu==true?'w-full h-fit lg:flex lg:fixed  lg:top-[20vh] lg:left-[10vh]':'w-full h-fit hidden '}>
               <ul className='w-full h-fit flex flex-col gap-4 pt-3'>
                 <li className='text-xl font-semibold'>Products</li> 
                 <li className='flex items-center gap-2'><Image src="/menu_one.png" className='object-cover w-auto h-auto' width={40} height={40}  alt='menu-images'/><Link href="/">Managed WordPress<br></br> Hosting</Link></li>
                 <li className='flex items-center gap-2'><Image src="/menu_two.png" className='object-cover w-auto h-auto' width={40} height={40}  alt='menu-images'/><Link href="/">Web Application Hosting</Link></li>
                 <li className='flex items-center gap-2'><Image src="/menu_three.png" className='object-cover w-auto h-auto' width={40} height={40} alt='menu-images' /><Link href="/">Managed Database<br></br> Hosting</Link></li>
                 <li className='flex items-center gap-2'><Image src="/menu_four.png" className='object-cover w-auto h-auto' width={40} height={40}  alt='menu-images'/><Link href="/">Stating Site Hosting</Link></li>
               </ul>

               <ul className='w-full h-fit flex flex-col gap-4 pt-3'>
                 <li className='text-xl font-semibold'>Platform highlights</li> 
                 <li className='flex items-center gap-2 cursor-pointer'><Link href="/">Cloudflare integration </Link></li>
                 <li className='flex items-center gap-2 cursor-pointer'><Link href="/">API</Link></li>
                 <li className='flex items-center gap-2 cursor-pointer'><Link href="/">Export Support</Link></li>
               </ul>

               <ul className='w-full h-fit flex flex-col gap-4 pt-3'>
                 <li className='text-xl font-semibold '>WordPress highlights</li> 
                 <li className='flex items-center gap-2 cursor-pointer'><Link href="/">APM tool</Link></li>
                 <li className='flex items-center gap-2 cursor-pointer'><Link href="/">Free site migrations</Link></li>
                 <li className='flex items-center gap-2 cursor-pointer'><Link href="/">Edge Caching</Link></li>
                 <li className='flex items-center gap-2 cursor-pointer'><Link href="/">Add-ons</Link></li>
               </ul>

               </div>
               
             </li>

             <li className='bg-[#252122] lg:bg-transparent pt-4 pb-4 pl-4 rounded '>Solution</li>
             <li className='bg-[#252122] lg:bg-transparent pt-4 pb-4 pl-4 rounded '>Pricing</li>
             <li className='bg-[#252122] lg:bg-transparent pt-4 pb-4 pl-4 rounded '>Docs</li>
             <li className='bg-[#252122] lg:bg-transparent pt-4 pb-4 pl-4 rounded '>Help</li>
      </ul>

      <div className={inscreaseWidth==true?'w-full lg:w-fit  h-fit flex border-2 pl-2 pt-2 mt-5 pb-2 rounded text-white':'w-full lg:w-fit h-fit hidden lg:block border-2 pl-2 pt-2 mt-5 pb-2 rounded text-white'}>
         <Image className='pr-2 ' src="/search.png" alt='search-icon' width={40} height={20} />
         <input type='text' placeholder='Search...'  className='w-full bg-transparent focus:outline-none lg:hidden'/>
      </div>

      <div className={inscreaseWidth==true?'w-full lg:w-fit h-fit sm:flex':'w-full lg:w-fit h-fit  hidden lg:flex'}>
        <button className='w-full lg:w-fit h-fit lg:px-8 py-3 mt-5 text-white font-semibold hover:bg-[#252122] rounded'>Login</button>
        <button className='w-full lg:w-fit lg:px-8 h-fit py-3 mt-5  bg-white hover:bg-[#DAC6BD] font-semibold  rounded'>Sign up</button>
      </div>
     
     
      

      
    </div>
  )
}

export default Navbar
