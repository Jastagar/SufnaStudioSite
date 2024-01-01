'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import CameraImage from '../asset/ImagesFinal/Creative2Camera.png'
import { ChalkBoard, LeftArrowChalk, RightArrowChalk } from '../asset/ImagesFinal/ChalkedIcons'
import ImageSkewAboutUs from "../asset/ImagesFinal/AboutUsBorderSkew.png";



const dummyVideos = [
    {
      url: "https://www.youtube.com/embed/suSKmHIK5NI",
      title: "video1",
    },
    {
      url: "https://www.youtube.com/embed/Yzm2wJkTfs8",
      title: "video2",
    },
    {
      url: "https://www.youtube.com/embed/suSKmHIK5NI",
      title: "video1",
    },
    {
      url: "https://www.youtube.com/embed/Yzm2wJkTfs8",
      title: "video2",
    },
    {
      url: "https://www.youtube.com/embed/suSKmHIK5NI",
      title: "video1",
    },
    {
      url: "https://www.youtube.com/embed/Yzm2wJkTfs8",
      title: "video2",
    },
  ];

export default function CreativeBehindScenes() {

    const [activeBS,setActiveBS] = useState(0);
    const windowRef = useRef();

    const arrayLength = dummyVideos.length

    function handleNext(){
        if(activeBS<arrayLength-1){
            console.log(windowRef)
            windowRef.current.scrollLeft += windowRef.current.clientWidth
            setActiveBS(activeBS+1);
        }
    }
    function handlePrev(){
        if(activeBS>0){
            windowRef.current.scrollLeft -= windowRef.current.clientWidth
            setActiveBS(activeBS-1);
        }
    }

  return (
    <section className='text-white h-[75dvh] relative z-[-2] top-[-5dvh] BehindScenesBackground'>
        <div className="absolute translate-y-[-65%] left-0 h-[25dvh] w-full">
          <Image
            fill
            src={ImageSkewAboutUs}
          />
        </div>
        <div className='p-12 flex'>
            <div className='w-[200%] xl:w-[60%] lg:w-[120%] md:w-[100%]'>
                <div className='relative h-full px-[20%]'>
                    <Image
                        fill
                        src={CameraImage}
                    />
                </div>
            </div>
            {/*Start From sizing images*/}
            <div className='grow'>
                <h2 className='text-center text-6xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    Behind the Scenes
                </h2>
                <div className='flex justify-start items-center'>
                    <button onClick={handlePrev} className='w-[5%] hover:opacity-75 cursor-pointer'>
                        <LeftArrowChalk />
                    </button>
                    <div className='grow w-full aspect-[1.75]'>
                        {/* <ChalkBoard />  This is where images will be displayed */}
                        <div className='flex ChalkboardBG p-[4%] pr-[3%] pb-[3%] aspect-[16/9] overflow-hidden'>
                            <div ref={windowRef} className='flex h-full aspect-[16/9] overflow-hidden overflow-x-scroll scroll-smooth noScroll'>
                                {dummyVideos.map((e,i)=>(
                                    <iframe
                                        key={"BEHINDTHESCENESVIDEOS"+i}
                                        src={e.url}
                                        title={e.title}
                                        className="w-full aspect-[16/9]"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                ))
                                }
                            </div>
                        </div>
                    </div>
                    <button onClick={handleNext} className='w-[5%] hover:opacity-75 cursor-pointer'>
                        <RightArrowChalk />
                    </button>
                </div>
                 
            </div>
        </div>
    </section>
  )
}
