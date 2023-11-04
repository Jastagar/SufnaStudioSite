import React from 'react'
import WaveSvg from './icons/WaveSvg'
import Image from 'next/image'
import FooterImage from '../asset/images/FooterImage.png' 
import CEOImage from '../asset/images/CEOremovedBg.png' 

export default function Aboutus({data}) {
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


    <section id='aboutus' className=' p-5'>
      <h2 className='text-center text-4xl md:text-6xl font-medium p-3'>
        {data.heading}
      </h2>
      <div className='flex justify-center items-center flex-col md:flex-row md:items-start'>
        <div className='h-[50%]'>
          <Image
            className=''
            src={FooterImage}
            width={300}
            height={300}
            alt='Maker Pic'
          />
        </div>
        <div className='flex flex-col p-10 md:w-[80%]'>
          <h3 className='grow text-4xl font-medium md:ml-10 my-4'>
            {data.subheading}
          </h3>
          <div className='flex gap-6 justify-center items-center'>
            <div className='w-[40%]'>
              <p className='md:text-xl'>
                {data.content[0]}
              </p>
            </div>
            <div className=''>
              <Image
                src={CEOImage}
                width={300}
                height={300}
                alt='CEO'
              />
            </div>
          </div>
          <p className='md:text-xl'>
            {data.content[1]}
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
