import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <footer className='min-h-[30dvh] bg-emerald-400'>
        <div className='flex h-full'>
            {/* Logo */}
            <div className='flex-[0.1] flex items-center justify-end'>
              <h4 className='text-5xl text-white font-bold px-4'>
                Sufna
              </h4>
            </div>
            {/* Links */}
            <div className=' flex flex-col text-start flex-[0.3] justify-center items-center my-3 text-white'>
              <ui className="list-none">
                <li className="my-3 text-xl font-medium">
                  <Link
                    className="w-full hover:underline transition-all"
                    href=""
                  >
                    Home
                  </Link>
                </li>
                <li className="my-3 text-xl font-medium">
                  <Link
                    className="w-full hover:underline transition-all"
                    href=""
                  >
                    About Us
                  </Link>
                </li>
                <li className="my-3 text-xl font-medium">
                  <Link
                    className="w-full hover:underline transition-all"
                    href=""
                  >
                    Our Work
                  </Link>
                </li>
                <li className="my-3 text-xl font-medium">
                  <Link
                    className="w-full hover:underline transition-all"
                    href=""
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="my-3 text-xl font-medium">
                  <Link
                    className="w-full hover:underline transition-all"
                    href=""
                  >
                    Contact Us
                  </Link>
                </li>
              </ui>
            </div>
            {/* Other */}
            <div className='flex flex-[0.9] justify-between p-8'>
              <div className='flex-[0.3]'>
                <h5 className='text-lg text-white font-medium'>
                  Location
                </h5>
              </div>
              <div className='flex-[0.3]'>
                <h5 className='text-lg text-white font-medium'>
                  Contact Info
                </h5>
              </div>
              <div className='flex-[0.3]'>
                <h5 className='text-lg text-white font-medium'>
                  Socials
                </h5>
              </div>
            </div>
        </div>
    </footer>
  )
}
