"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react'


const VideoPlayer = () => {
  const videoRef=useRef(null);
  const [hideButton, sethideButton] = useState(false);
  const playVideo=()=>
  {
     const  video=videoRef.current;
    if(video)
    {
        sethideButton(true);
        video.play();
    }

  }
  return (
    <div className='w-fit  h-fit rounded-lg relative overflow-hidden ml-5 mr-5 mt-10 group'>
        
        <div onClick={playVideo} className={hideButton===true?'w-[100%] h-[100%] absolute  top-0 left-0 z-30 bg-[url("https://kinsta.com/wp-content/uploads/2021/11/home-video-thumbnail.jpg")] bg-cover bg-no-repeat hidden':'w-[100%] h-[100%] absolute  top-0 left-0 z-30 bg-[url("https://kinsta.com/wp-content/uploads/2021/11/home-video-thumbnail.jpg")] bg-cover bg-no-repeat'}>
               <div className='w-[30%] h-[35%] group-hover:w-[35%] transition-width duration-300 md:h-[30%] md:w-[20%] md:group-hover:w-[30%] relative flex items-center justify-center  left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-xl border-2 border-[#FB5800]  bg-[#fd5900c1] group-hover:bg-gradient-to-l from-[#FB5800] via-[#FD3700]  to-[#FD1300] '>
                    <Image src="/play.png" width={30} height={30} alt='play-button'/>
               </div>
        </div>
        <video ref={videoRef}  className='w-[100%] h-[100%]' src='/video.mp4' controls />
          
      
    </div>
  )
}

export default VideoPlayer
