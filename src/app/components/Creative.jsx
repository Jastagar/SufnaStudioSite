import React from 'react'
import HandsImage from '../asset/ImagesFinal/Hands.png'
import NawazImage from '../asset/ImagesFinal/Nawaz.png'
import HeadingBrushImage from '../asset/ImagesFinal/YellowBrushText.png'

import Image from 'next/image'


export default function Creative() {
  return (
    <div className='h-[125dvh] relative z-[-1] top-[-25dvh]'>
        <div className=''>
            <div className='h-[100dvh] absolute w-[95dvw] left-[5dvw]'>
                <Image
                    fill
                    src={HandsImage}
                />
            </div>
            <div className='absolute top-[25dvh] h-[100dvh] w-full'>
                <Image 
                    fill
                    src={NawazImage}
                />
            </div>
        </div>
        <div className='flex justify-center relative top-[25dvh]'>
            <div className='relative'>
                <Image
                    fill
                    src={HeadingBrushImage}
                />
                <p className='p-10 text-3xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    Photo ka, Video Ka, Audio Ka <br/>
                    Sabka Kaam Krega Re Apun
                </p>
            </div>
        </div>

    </div>
  )
}
