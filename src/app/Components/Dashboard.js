import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='w-full min-h-[100vh] '>
          <img className='w-[80%]  rounded-3xl mx-auto mb-10  mt-10 border-8  border-[#45241f7e]  shadow-[0px_0px_15px_2px_#fefefe] ' src="https://kinsta.com/wp-content/uploads/2023/11/mykinsta-dashboard-homepage-min-768x464.png" alt='home-icon'/>
          <p className='text-white w-[60%] mx-auto text-xl mb-5 text-center'>Trusted by 120,000+ growing businesses</p>
          <div className='w-[full] h-[20vh] whitespace-nowrap overflow-x-auto scrollbar  '>
            <Image className='grayscale hover:grayscale-0 inline-block mr-20 ml-5  w-auto h-auto' src="https://kinsta.com/wp-content/themes/kinsta/images/components/client-logos/elcome.svg" width={120} height={120}  alt="company-logo"/>
            <Image className='grayscale hover:grayscale-0 inline-block mr-20 ml-5  w-auto h-auto' src="https://kinsta.com/wp-content/themes/kinsta/images/components/client-logos/subwaycares.svg" width={60} height={60}  alt="company-logo"/>
            <Image className='grayscale hover:grayscale-0 inline-block mr-20 ml-5 w-auto h-auto' src="https://kinsta.com/wp-content/themes/kinsta/images/components/client-logos/skillcrush.svg" width={120} height={120}  alt="company-logo"/>
            <Image className='grayscale hover:grayscale-0 inline-block mr-20 ml-5 w-auto h-auto' src="https://kinsta.com/wp-content/themes/kinsta/images/components/client-logos/tripadvisor.svg" width={120} height={120}  alt="company-logo"/>
            <Image className='grayscale hover:grayscale-0 inline-block mr-20 ml-5 w-auto h-auto' src="https://kinsta.com/wp-content/themes/kinsta/images/components/client-logos/flippa.svg" width={120} height={120}  alt="company-logo"/>
            <Image className='grayscale hover:grayscale-0 inline-block mr-20 ml-5 w-auto h-auto' src="https://kinsta.com/wp-content/themes/kinsta/images/components/client-logos/unicef.svg" width={120} height={120}  alt="company-logo"/>
            <Image className='grayscale hover:grayscale-0 inline-block mr-20 ml-5 w-auto h-auto' src="https://kinsta.com/wp-content/themes/kinsta/images/components/client-logos/ricoh.svg" width={120} height={120}  alt="company-logo"/>
          </div>
    </div>
  )
}

export default Dashboard
