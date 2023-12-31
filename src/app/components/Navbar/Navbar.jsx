"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logoImgWhite from "@/app/asset/images/logoWhite.png";
import HamBar from "../icons/HamBar";
import logoImg from '../../asset/ImagesFinal/logoFull.png'

// function NavLogo({scrolled}) {
//   return (
//     <>
//     {scrolled
//     ?<Image className="rounded-full" src={logoImg} height={64} width={64} alt="Logo" />
//     :<Image className="rounded-full" src={logoImgWhite} height={64} width={64} alt="Logo" />
//     }
//     </>
//   );
// }
function NavLogo({scrolled}) {
  return (
    <div className="relative h-6 w-48 p-4">
      <Image src={logoImg} fill alt="Logo" />
    </div>
  );
}

function GhostNavDiv(){
  return(
    <div className="grow h-[100px]">

    </div>
  )
}

function NavMobile({ scrolled }) {
  const [dropped,setDropped] = useState(false)
  return (
    <>
      <div className="flex flex-col md:hidden justify-start bg-primary-400 shadow-lg text-white">
        <div className="flex justify-between items-center">
          <div onClick={()=>setDropped(!dropped)} className="h-[2rem] w-[2rem] mx-4">
            <HamBar />
          </div>
          <div className="w-[25%] text-center flex justify-center items-center mx-4 gap-4">
            <NavLogo />
          </div>
        </div>
        <div className={`overflow-hidden transition-all ${dropped? "max-h-72":"max-h-0"}`}>
          <ui className="list-none">
            <li className="my-3 text-xl font-medium">
              <Link
                className="w-full px-6 hover:bg-primary-400 transition-all"
                href="#home"
              >
                Home
              </Link>
            </li>
            <li className="my-3 text-xl font-medium">
              <Link
                className="w-full px-6 hover:bg-primary-400 transition-all"
                href="#aboutus"
              >
                About Us
              </Link>
            </li>
            <li className="my-3 text-xl font-medium">
              <Link
                className="w-full px-6 hover:bg-primary-400 transition-all"
                href="#portfolio"
              >
                Our Work
              </Link>
            </li>
            <li className="my-3 text-xl font-medium">
              <Link
                className="w-full px-6 hover:bg-primary-400 transition-all"
                href="#clients"
              >
                Testimonials
              </Link>
            </li>
            <li className="my-3 text-xl font-medium">
              <Link
                className="w-full px-6 hover:bg-primary-400 transition-all"
                href="#contact"
              >
                Contact Us
              </Link>
            </li>
          </ui>
        </div>
      </div>
    </>
  );
}
function NavDefault({ scrolled }) {
  return (
    <div className="NavSkewBG flex flex-col">
      <div className="uppercase font-bold flex-1 py-1 px-5 justify-between hidden md:flex items-center">

        <div className="flex gap-4 mx-4 items-start p-4">
          <NavLogo scrolled={scrolled} />
        </div>
        <div className="w-[75%]">
          <ui className="w-full list-none flex justify-end items-center">
            <li className="">
              <Link
                className={`w-full p-9 ${
                  scrolled ? "hover:bg-primary-400" : "hover:bg-primary-200"
                } transition-all`}
                href="#home"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                className={`w-full p-9 ${
                  scrolled ? "hover:bg-primary-400" : "hover:bg-primary-200"
                } transition-all`}
                href="#aboutus"
              >
                what we do
              </Link>
            </li>
            <li className="">
              <Link
                className={`w-full p-9 ${
                  scrolled ? "hover:bg-primary-400" : "hover:bg-primary-200"
                } transition-all`}
                href="#portfolio"
              >
                portfolio
              </Link>
            </li>
            <li className="">
              <Link
                className={`w-full p-9 ${
                  scrolled ? "hover:bg-primary-400" : "hover:bg-primary-200"
                } transition-all`}
                href="#clients"
              >
                About us
              </Link>
            </li>
            <li className="">
              <Link
                className={`w-full p-9 ${
                  scrolled ? "hover:bg-primary-400" : "hover:bg-primary-200"
                } transition-all`}
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ui>
        </div>
      </div>

      <GhostNavDiv />
    </div>
  );
}

export function Navbar() {
  const [addScrollStyles, setAddScrollStyles] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 40) {
        // if scroll down hide the navbar
        setAddScrollStyles(false);
      } else {
        // if scroll up show the navbar
        setAddScrollStyles(true);
      }

      // remember current page location to use in the next move
      // setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, []);

  return (
    <nav
      ref={navRef}
      className={`min-h-[7dvh] transition-all fixed w-full top-0 overflow-hidden text-white z-20`}
    >
      <NavDefault scrolled={addScrollStyles} />
      <NavMobile scrolled={addScrollStyles} />
    </nav>
  );
}
