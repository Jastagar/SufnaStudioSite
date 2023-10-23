import React from 'react'
import WaveSvg from './icons/WaveSvg'
import Image from 'next/image'
import FooterImage from '../asset/images/FooterImage.png'

export default function Aboutus() {
  return (
    <>
    {/* Wave About */}
    {/* <div className='w-full relative overflow-hidden'>
      <div data-aos='fade-up' className='w-screen text-primary-400 scale-x-125 overflow-hidden absolute -left-40 -bottom-1'>
        <WaveSvg />
      </div>
      <div  data-aos='fade-up' data-aos-delay='100' className='w-screen text-primary-500 scale-x-110 overflow-hidden absolute -left-20 -bottom-1'>
        <WaveSvg />
      </div>
      <div  data-aos='fade-up' data-aos-delay='200' className='w-screen text-primary-600 absolute left-0 overflow-hidden -bottom-1'>
        <WaveSvg />
      </div>
    </div> */}


    <section id='aboutus' className='bg-primary-600 text-white p-5'>
      <h2 className='text-center text-2xl md:text-6xl font-medium p-3'>
        About Us
      </h2>
      <div className='flex justify-center'>
        <div className='h-[50%]'>
          <Image
            className=''
            src={FooterImage}
            width={300}
            height={300}
            alt='Maker Pic'
          />
        </div>
        <h3 className='grow text-xl font-medium'>
          We are makers
        </h3>
        
      </div>
    </section>
    </>
  )
}
