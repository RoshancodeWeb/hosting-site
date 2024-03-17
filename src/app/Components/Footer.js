"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'


const FooterComponents = ({ head,links}) => {
  const [showSubmenu, setshowSubmenu] = useState(false);
  return (
    <div className='w-full md:w-fit h-fit flex flex-col gap-2 mt-2 '>
        <h1 className='w-full lg:w-fit cursor-pointer bg-[#E8DFDB] md:bg-transparent  py-3 pl-2 rounded text-xl font-normal md:text-3xl relative md:font-medium'>
          <span onClick={()=>{setshowSubmenu(!showSubmenu);}}  className='w-full md:hidden'>{head} <i className={showSubmenu==true?"ri-arrow-up-s-line absolute pr-2 right-0":"ri-arrow-down-s-line absolute pr-2 right-0"}></i></span>  
          <span className='hidden w-full md:inline-block'>{head}</span>
        </h1>
         <div className={showSubmenu==true?'w-full md:w-fit flex flex-col gap-2 pl-5 font-roman':'w-full font-roman hidden md:flex md:flex-col  gap-2 pl-2'}>
              {links.map((value,index)=>{
                return(
                  <p className='text-lg w-fit cursor-pointer  hover:underline text-[rgb(76,_66,_67)]' key={index}>{value}</p>
                )
              })}
         </div>

    </div>
  )
}





const Footer = () => {
  return (
    <div className='w-full min-h-fit pb-5 bg-[#F5EDE9] pl-5 pr-5'>
       <div className='w-full border-t-[1px] lg:mb-5  border-[#CAB2AA]'></div>

       <div className='w-full h-fit flex flex-col lg:flex-row lg:justify-between'>
       <div className=' w-full h-fit lg:w-fit md:flex md:justify-between lg:gap-[5vw]'>
       <FooterComponents head="Products" links={
            [
              "Managed WordPress Hosting",
              "Web Application Hosting",
              "Managed Database Hosting",
              "Static Site Hosting",
              "Pricing",
              
            ]
        } 
      />

       <FooterComponents head="Feature highlights" links={
            [
              "Cloudflare integration",
              "Kinsta API",
              "Expert support",
              "APM tool",
              "DevKinsta",
              "Edge Caching",
              "WordPress plan add-ons",      
            ]
        }  
      />
      </div>

      <div className='w-full lg:w-fit h-fit md:flex md:justify-between md:gap-[5vw]'>
          <FooterComponents head="Use cases" links={
                [
                  "Enterprise",
                  "Agency",
                  "WooCommerce store",
                  "Small business",
                  "Non-profit organization",
                  "Single high-resource site",
                  "Case studies",      
                ]
            } 
          />

        <FooterComponents head="Resources" links={
                [
                  "Documentation",
                  "Changelog",
                  "Blog",
                  "Knowledge Base",
                  "Development tools",
                  "Kinsta vs competitors",
                  "Agency directory",
                  "System Status",
                  "All resources",        
                ]
            }  
          />

        <FooterComponents head="Company" links={
                [
                  "About us",
                  "Why choose Kinsta",
                  "Careers",
                  "Partners",
                  "Research program",
                  "Affiliate program",
                  "Press",
                  "Security and trust",
                  "Contact Us",        
                ]
            }  
          />  
      </div>
      



       </div>

       
       
       {/* Footer */}
       <div className='w-full min-h-[10vh] bg-[#181516] mt-5 rounded pl-2 pr-2 pb-5'>
        <div className='w-full h-fit flex flex-col items-center gap-2'>

           <Image  src="/logo.png" width={100} height={60} alt='logo' />


           <div className='w-full h-fit flex  gap-2 justify-center'>

              <div className='w-fit h-fit bg-[#E8DFDB]  px-2 py-1 rounded-full '>
                  <i className="ri-youtube-line  text-black cursor-pointer"></i>
              </div>

              <div className='w-fit h-fit bg-[#E8DFDB] px-2 py-1 rounded-full '>
                  <i className="ri-facebook-line  text-black cursor-pointer"></i>
              </div>

              <div className='w-fit h-fit bg-[#E8DFDB] px-2 py-1 rounded-full '>
                  <i className="ri-instagram-fill  text-black cursor-pointer"></i>
              </div>

              <div className='w-fit h-fit bg-[#E8DFDB] px-2 py-1  rounded-full '>
                 <Link href="https://www.linkedin.com/in/roshanali-dev/"><i className="ri-linkedin-fill  text-black cursor-pointer"></i></Link> 
              </div>    
           </div>

          

        </div>

       </div>
      
      


  


    </div>
  )
}

export default Footer
