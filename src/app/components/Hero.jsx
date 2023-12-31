"use client"
import Link from 'next/link'
import React from 'react'
import ArrowCheckUs from '../asset/ImagesFinal/ArrowCheckUs.svg'
import TextTransition, { presets } from 'react-text-transition';
import Image from 'next/image';

const TEXTS = ['Artists', 'Storytellers', 'Visionary'];

export default function Hero({data}) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section id="home" className='h-[100dvh] text-white w-full HeroBackground flex items-center'>
      <div className='pl-8'>
        <div className='flex text-6xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]pb-8'>
          <h2>We Are&nbsp;</h2>
          <h2 className='underline'>
          <TextTransition springConfig={presets.wobbly}> {TEXTS[index % TEXTS.length]}</TextTransition>
          </h2>
        </div>
        <div className='py-8 pl-6 flex items-center'>
          <div className='relative h-12 w-12'>
            <Image fill src={ArrowCheckUs} />
          </div>
          <h3 className='pl-3 text-xl font-semibold'>
            Check Us Now
          </h3>
        </div>
      </div>
    </section>
  )
}
