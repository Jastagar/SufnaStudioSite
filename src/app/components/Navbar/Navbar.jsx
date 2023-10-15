"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logoImg from "@/app/asset/images/logo.jpg";
import HamBar from "../icons/HamBar";

function NavLogo() {
  return (
    <>
      <Image className="rounded-full" src={logoImg} height={64} width={64} alt="Logo" />
    </>
  );
}

function NavMobile() {
  const [dropped,setDropped] = useState(false)
  return (
    <>
      <div className="flex flex-col md:hidden justify-start bg-emerald-400 shadow-lg text-white">
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
                className="w-full p-6 hover:bg-emerald-400 transition-all"
                href=""
              >
                Home
              </Link>
            </li>
            <li className="my-3 text-xl font-medium">
              <Link
                className="w-full p-6 hover:bg-emerald-400 transition-all"
                href=""
              >
                About Us
              </Link>
            </li>
            <li className="my-3 text-xl font-medium">
              <Link
                className="w-full p-6 hover:bg-emerald-400 transition-all"
                href=""
              >
                Our Work
              </Link>
            </li>
            <li className="my-3 text-xl font-medium">
              <Link
                className="w-full p-6 hover:bg-emerald-400 transition-all"
                href=""
              >
                Testimonials
              </Link>
            </li>
            <li className="my-3 text-xl font-medium">
              <Link
                className="w-full p-6 hover:bg-emerald-400 transition-all"
                href=""
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
    <>
      <div className="flex-1 py-1 justify-center hidden md:flex items-center h-full">
        <div className="flex gap-4 mx-4 items-center">
          <NavLogo />
        </div>
        <div className="w-[75%]">
          <ui className="w-full list-none flex justify-center items-center">
            <li className="">
              <Link
                className={`w-full p-9 ${
                  scrolled ? "hover:bg-emerald-400" : "hover:bg-emerald-200"
                } transition-all`}
                href=""
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                className={`w-full p-9 ${
                  scrolled ? "hover:bg-emerald-400" : "hover:bg-emerald-200"
                } transition-all`}
                href=""
              >
                About Us
              </Link>
            </li>
            <li className="">
              <Link
                className={`w-full p-9 ${
                  scrolled ? "hover:bg-emerald-400" : "hover:bg-emerald-200"
                } transition-all`}
                href=""
              >
                Our Work
              </Link>
            </li>
            <li className="">
              <Link
                className={`w-full p-9 ${
                  scrolled ? "hover:bg-emerald-400" : "hover:bg-emerald-200"
                } transition-all`}
                href=""
              >
                Testimonials
              </Link>
            </li>
            <li className="">
              <Link
                className={`w-full p-9 ${
                  scrolled ? "hover:bg-emerald-400" : "hover:bg-emerald-200"
                } transition-all`}
                href=""
              >
                Contact Us
              </Link>
            </li>
          </ui>
        </div>
        <div className={`font-bold text-4xl ${!scrolled? "text-white":"text-emerald-900"}`}>
          Sufna
        </div>
      </div>
    </>
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
      className={`min-h-[7dvh] transition-all sticky top-0 overflow-hidden z-20 ${
        !addScrollStyles ? "bg-emerald-400 shadow-lg" : ""
      }`}
    >
      <NavDefault scrolled={addScrollStyles} />
      <NavMobile scrolled={addScrollStyles} />
    </nav>
  );
}
