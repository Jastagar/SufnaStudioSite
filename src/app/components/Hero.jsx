import React from 'react'
import HeroSvg from '../asset/images/HeroSvg.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {

  return (
    <div className='h-[70dvh] md:p-20 lg:p-40' id='home'>
        <div className='flex flex-col xl:flex-row justify-between items-center h-full text-center md:text-start'>
          {/* Heading */}
          <div data-aos="fade-left" className='flex items-center h-full'>
            <div className='md:text-7xl text-xl font-bold leading-[-0.25px] m-10'>
              We make your Stories,<br/><span className='text-primary-600'>Your Stories make us</span>
              <div className='font-medium md:text-xl text-base'>
                <div className=' p-3'>
                  Your stories ignite our creative flames,<br/> 
                  fueling our commitment to bring<br/> 
                  your dreams to the screen.<br/>
                </div>
                <span className='text-primary-600 md:text-2xl text-lg my-2'>
                  Welcome to a world where your narrative is our heartbeat.
                </span>
                <div className='flex justify-center gap-6 m-4 flex-col items-center md:flex-row'>
                  <Link href="/portfolio" data-aos-delay="300" data-aos="flip-up" className='py-2 px-4 rounded-full text-center bg-primary-500 text-white hover:cursor-pointer w-52 hover:scale-110 transition-all'>
                    Check Us
                  </Link>
                  <Link href="/contact" data-aos-delay="300" data-aos="flip-up" className='py-2 px-4 rounded-full text-center border-2 border-primary-500 hover:bg-primary-500 hover:text-white hover:cursor-pointer w-52'>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Image */}

          <div data-aos="fade-right" className='hidden flex-1 h-full md:flex items-center justify-center'>
            <Image className='aspect-[1]' src={HeroSvg} alt="Hero SVG" />
          </div>
        </div>
    </div>
  )
}
