"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination,Autoplay } from 'swiper/modules';

import Link from 'next/link';
import Image from 'next/image';

export default function App() {
    const [windowWidth, setwindowWidth] = useState(0);
    const data =[
        {
          review:"We don’t need to worry about hosting and downtime anymore. Before moving to Kinsta we needed to think about speed, efficiency and how we are going to deploy our stuff. But not anymore, Kinsta does everything for us",
          imageUrl:"/reviewOne.jpg",
          name:"Umair Ali",
          rank:"Co-Founder & Chief Technology Officer at ",
          company:"Twimbit",
          companyLink:"https://twimbit.com"
        },
        {
          review:"Their online chat team responds immediately every time I have tried to make contact.  Each time they were able to fix any issues promptly-even in our timezone",
          imageUrl:"/reviewThree.png",
          name:"Asad Ali",
          rank:"Founder at  ",
          company:"Blaq",
          companyLink:"https://blaq.co/"
        },
        {
          review:"Kinsta had essentially perfect LoadStorm and Blitz tests. They also had no flaws in any other tests. I’m at a loss for words to praise their performance.",
          imageUrl:"/reviewTwo.jpg",
          name:"Ammar Ali",
          rank:"Founder and WP consultant at   ",
          company:"Reviewsignal",
          companyLink:"https://reviewsignal.com"
        },
        {
          review:"Kinsta is a fast and reliable host that resolves issues as quickly as they arise. Demand for our product and content grew to the point where our former host was cratering under the pressure; after serving one too many 5XX errors, we moved over to Kinsta, and the rest was history. Kinsta support deserves a special shoutout, as they’re available 24/7 and go above and beyond to ensure our satisfaction.    ",
          imageUrl:"/reviewOne.jpg",
          name:"Asad Ali",
          rank:"SEO Manager at    ",
          company:"Hootsuite",
          companyLink:"https://www.hootsuite.com/"
        }

      ];
      useEffect(() => {
        setwindowWidth(window.innerWidth);
        // Update window width when the window is resized
       const handleResize = () => {
        setwindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
      }, []);


    return(
        
    <div className='w-full min-h-fit bg-[#F5EDE9] pl-5 pt-5 overflow-hidden pb-12'>
           
          < Swiper
              
                slidesPerView={(windowWidth>=320 && windowWidth<=768)?1:3}
                pagination={{
                clickable: true,
                }}
                autoplay={
                    {
                        delay:2500,
                        disableOnInteraction:false
                    }
                }
                modules={[Pagination,Autoplay]}
                className="mySwiper"
            >

            {data.map((value,index )=>{
                 return (
                    <SwiperSlide key={index} >
                    <div  className='w-[90vw] md:w-[350px]  h-[400px]  relative left-[50%] translate-x-[-50%]   bg-white rounded p-5 mb-5 flex flex-col justify-between ' >
                    <p className='w-full h-[30vh] text-lg text-[#4e4445] overflow-y-auto  '>{value.review}</p>
                    <div className='w-full h-fit flex items-center'>
                        <div className='w-fit h-fit rounded overflow-hidden mr-2'>
                            <Image src={value.imageUrl} width={200} height={150} alt='images'  />
                        </div>
                        <div className='w-full h-fit '>
                            <p className='text-xl font-medium '>{value.name}</p>
                            <p className='text-sm text-[#594F50]'>{value.rank}<span className='text-[#FF5718]'><Link href={value.companyLink}>{value.company}</Link></span></p>
                        </div>
                    </div>
                  </div>
                  </SwiperSlide>
              )
            })}
                
        </Swiper>      
        
    </div>
  )
}
