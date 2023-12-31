import Link from 'next/link'
import React from 'react'

export default function Hero({data}) {

  return (
    <div className='h-[100dvh] w-full HeroBackground flex items-center' id='home'>
      <Link className="hero__title text-carousel text-white text-7xl" href="#our-works">
        Artists, Storytellers, Visionary
      </Link>
    </div>
  )
}
