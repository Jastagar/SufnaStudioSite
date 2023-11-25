import React from 'react'
import HeroSvg from '../asset/images/HeroSvg.svg'
import Image from 'next/image'
import Link from 'next/link'
import SufnaAnimation from './SufnaAnimation'

export default function Hero({data}) {

  return (
    <div className='min-h-[70dvh] md:p-10 lg:p-20' id='home'>
        <div className='flex flex-col xl:flex-row justify-between items-center h-full text-center md:text-start'>
          {/* Heading */}
          <div data-aos-once="true" data-aos="fade-left" className='flex items-center h-full md:max-w-[50%]'>
            <div className='md:text-7xl text-xl font-bold leading-[-0.25px] m-10'>
              <SufnaAnimation />
              {/* We make your <span className='bounceLetter'>S</span>tories,<br/><span className='text-primary-600'>Your Stories make us</span> */}
              {data.heading}
              <div className='font-medium md:text-xl text-base'>
                <div className=' p-3'>
                  {data.content[0]}
                </div>
                <span className='text-primary-600 md:text-2xl text-lg my-2'>
                  {data.subheading}
                </span>
                <div className='flex justify-center gap-6 m-4 flex-col items-center md:flex-row'>
                  <Link href="#portfolio" data-aos-delay="300" data-aos-once="true" data-aos="flip-up" className='py-2 px-4 rounded-full text-center bg-primary-500 text-white hover:cursor-pointer w-52 hover:scale-110 transition-all'>
                    Check Us
                  </Link>
                  <Link href="#contact" data-aos-delay="300" data-aos-once="true" data-aos="flip-up" className='py-2 px-4 rounded-full text-center border-2 border-primary-500 hover:bg-primary-500 hover:text-white hover:cursor-pointer w-52'>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}

          <div className='hidden flex-col flex-1 h-full lg:flex items-center justify-center'>
            <div className='p-2 flex items-end'>
              <span className='text-4xl font-semibold'>Lights-</span>
              <span className='text-4xl font-semibold'>Camera-</span>
              <span className='text-4xl font-semibold'>Action</span>
            </div>
            <Image data-aos="fade-right" className='aspect-[1]' src={HeroSvg} alt="Hero SVG" />
          </div>
        </div>
    </div>
  )
}
