import Image from 'next/image'
import React from 'react'
import CameraImage from '../asset/ImagesFinal/Creative2Camera.png'
import { ChalkBoard, LeftArrowChalk, RightArrowChalk } from '../asset/ImagesFinal/ChalkedIcons'

export default function CreativeBehindScenes() {
  return (
    <section className='text-white relative z-[-2] top-[-65dvh] pt-[20dvh] BehindScenesBackground'>
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
