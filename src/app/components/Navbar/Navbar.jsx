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
function NavLogo({height,width}) {
  return (
    <div className={`relative ${height} ${width}`}>
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
      <div className="flex flex-col md:hidden justify-between NavSkewBGMob">
          <div className="flex gap-4 mx-4 items-start p-4">
            <NavLogo height="h-8" width="w-24" />
          </div>
          <div className="">

          </div>
        <GhostNavDiv />
      </div>
    </>
  );
}
function NavDefault({ scrolled }) {
  return (
    <div className="NavSkewBG hidden md:flex flex-col">
      <div className="uppercase font-bold flex-1 py-1 px-5 justify-between hidden md:flex items-center">

        <div className="flex gap-4 mx-4 items-start p-2">
          <NavLogo height="h-16" width="w-48" />
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
