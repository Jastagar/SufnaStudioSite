import Image from 'next/image'
import React from 'react'
import CameraImage from '../asset/ImagesFinal/Creative2Camera.png'
import { ChalkBoard, LeftArrowChalk, RightArrowChalk } from '../asset/ImagesFinal/ChalkedIcons'
import ImageSkewAboutUs from "../asset/ImagesFinal/AboutUsBorderSkew.png";

export default function CreativeBehindScenes() {
  return (
    <section className='text-white h-[75dvh] relative z-[-2] top-[-5dvh] BehindScenesBackground'>
        <div className="absolute translate-y-[-65%] left-0 h-[25dvh] w-full">
          <Image
            fill
            src={ImageSkewAboutUs}
          />
        </div>
        <div className='p-12 flex'>
            <div className='w-[40%]'>
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
                    <div className='w-[5%]'>
                        <LeftArrowChalk />
                    </div>
                    <div className='grow w-full aspect-[1.75]'>
                        <ChalkBoard /> {/* This is where images will be displayed */}
                    </div>
                    <div className='w-[5%]'>
                        <RightArrowChalk />
                    </div>
                </div>
                 
            </div>
        </div>
    </section>
  )
}
