"use client"
import React, { useEffect, useState } from 'react'
import HandsImage from '../asset/ImagesFinal/Hands.png'
import HandsImageMob from '../asset/ImagesFinal/Hands1.png'

import HandLeftImg from '../asset/ImagesFinal/HandLeft.png'
import HandRightImg from '../asset/ImagesFinal/HandRight.png'

import NawazImage from '../asset/ImagesFinal/NawazCropped.png'
import NawazImageMob from '../asset/ImagesFinal/Nawaz1.png'
import HeadingBrushImage from '../asset/ImagesFinal/YellowBrushText.png'

import Image from 'next/image'
import useInterval from './Hooks/useInterval'
import { RedCircle } from './Hero'

const displacementFactor=20

function HandLeft({className,style}){
    return(
        <div style={style} className={`${className}`}>
            <Image 
                fill
                src={HandLeftImg}
            />
            <RedCircle className="absolute left-[-60%] top-[-40%] h-[100%] aspect-square" />
        </div>
    )
}
function HandRight({className,style}){
    return(
        <div style={style} className={`${className}`}>
            <Image 
                fill
                src={HandRightImg}
            />
        </div>
    )
}

export default function Creative() {

    const [cursorLocation,setCursorLocation] = useState({x:0,y:0})
    const handleWindowMouseMove = event => {
        setCursorLocation({
        x: ((event.clientX)/displacementFactor),
        y: ((event.clientY)/displacementFactor),
        });
    }
  return (
    <section onMouseMove={handleWindowMouseMove} id='whatwedo' className='h-[80dvh] md:h-[100dvh] relative'>

        {/*PC*/}
        <div className='hidden absolute md:flex justify-center h-[100dvh] w-full'>
            
            <HandLeft style={{transform:` translateY(${cursorLocation.y}px)`}}  className=" absolute top-24 left-32 h-[25%] aspect-square"/>
            <HandRight style={{transform:` translateY(${-1*cursorLocation.y}px)`}} className=" absolute top-[50%] right-0 h-[25%] aspect-square"/>

            <div style={{transform:`translateX(${-1*cursorLocation.y}px)`}} className='h-[68%] aspect-square absolute bottom-[-5%]'>
                <Image
                    full
                    src={NawazImage}
                />
            </div>
        </div>
       {/*MOBILE*/}
        <div className='absolute h-[80dvh] w-full flex justify-center md:hidden'>
            <HandLeft className=" absolute top-0 left-0 h-[20%] aspect-square"/>
            {/* <HandRight className=" absolute top-[50%] right-0 h-[15%] aspect-square"/> */}

            <div className='h-[70%] aspect-square absolute bottom-[-20%]'>
                <Image
                    full
                    src={NawazImage}
                />
            </div>
        </div>

        <div style={{transform:`translateX(${1.5 *cursorLocation.y}px)`}} className='hidden md:flex justify-center relative top-[25dvh]'>
            <div className='relative'>
                <Image
                    fill
                    src={HeadingBrushImage}
                />
                <p className='p-10 text-5xl text-center font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    Photo ka, Video Ka, Audio Ka <br/>
                    Sabka Kaam Krega Re Apun
                </p>
            </div>
        </div>

        <div className='flex md:hidden justify-center relative top-[15dvh]'>
            <div className='relative'>
                <div className='px-10 text-2xl text-center font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    <span className='text-4xl'>Photo ka,</span><br/>
                    <span className='text-5xl'>Video Ka,</span><br/>
                    <span className='text-6xl'>Audio Ka,</span><br/>
                    <p className='text-xl'>
                        Sabka Kaam Krega Re Apun
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
