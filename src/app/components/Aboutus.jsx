"use client"
import React, { useState } from "react";
import Image from "next/image";
import Heroimage1 from "../asset/ImagesFinal/Hero1.png";
import Heroimage2 from "../asset/ImagesFinal/Hero2.png";
import Heroimage3 from "../asset/ImagesFinal/Hero3.png";
import Heroimage4 from "../asset/ImagesFinal/Hero4.png";

const displacementFactor = 150

function ActorImages({imageSrc,className,offsetTop, offsetLeft}) {
  return (
    <div className={`grow ActorImagesBackgroundCircle ${className}`}>
      <div style={{top:`${offsetTop}px`,left:`${offsetLeft}px`}} className={`relative aspect-square w-full h-full rounded-full`}>              
        <Image fill src={imageSrc} />
      </div>
    </div>
  )
}


export default function Aboutus({ data }) {
  const [cursorLocation,setCursorLocation] = useState({x:0,y:0})
  const handleWindowMouseMove = event => {
      setCursorLocation({
      x: ((event.clientX)/displacementFactor),
      y: ((event.clientY)/displacementFactor),
      });
  }
  return (
    <>
      <section id="aboutus" className="relative min-h-[100dvh] md:px-[10%] px-1 text-white">
        <h2 className="text-7xl md:text-start py-4 md:py-0 text-center md:text-6xl font-extrabold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          About Us
        </h2>

        <div onMouseMove={handleWindowMouseMove} className="md:flex justify-between items-start md:p-5">


          <div className="w-[100%] md:w-[40%] flex flex-col">        
            <div className="grow flex items-baseline">
              <ActorImages offsetTop={cursorLocation.x} offsetLeft={cursorLocation.y} className={"w-[60%] translate-x-0 translate-y-0"} imageSrc={Heroimage3} />
              <ActorImages offsetTop={cursorLocation.y} offsetLeft={cursorLocation.x} className={"w-[40%] translate-x-[-2rem] translate-y-0"} imageSrc={Heroimage2} />
            </div>
            <div className="grow flex items-start">
              <ActorImages offsetTop={-1*cursorLocation.x} offsetLeft={-1*cursorLocation.y} className={"w-[40%] translate-x-[2rem] translate-y-[-3rem]"} imageSrc={Heroimage1} />
              <ActorImages offsetTop={-1*cursorLocation.y} offsetLeft={-1*cursorLocation.x} className={"w-[60%] translate-x-0 translate-y-[-2rem]"} imageSrc={Heroimage4} />
            </div>
          </div>
          {/* <div className="w-[100%] md:w-[40%] flex flex-col">        
            <div className="grow flex items-baseline">
              <ActorImages offsetTop={"5"} offsetLeft={"5"} className={"w-[60%] translate-x-0 translate-y-0"} imageSrc={Heroimage3} />
              <ActorImages offsetTop={"5"} offsetLeft={"0"} className={"w-[40%] translate-x-[-2rem] translate-y-0"} imageSrc={Heroimage2} />
            </div>
            <div className="grow flex items-start">
              <ActorImages offsetTop={"5"} offsetLeft={"5"} className={"w-[40%] translate-x-[2rem] translate-y-[-3rem]"} imageSrc={Heroimage1} />
              <ActorImages offsetTop={"5"} offsetLeft={"-5"} className={"w-[60%] translate-x-0 translate-y-[-2rem]"} imageSrc={Heroimage4} />
            </div>
          </div> */}


          <div className="md:w-[50%] pb-4 md:p-8 text-center h-full flex flex-col gap-10 justify-end items-center">
            <h3 className="text-2xl md:text-5xl font-bold pt-4 md:pt-12">
            🌟 Crafting Creativity<br/>
                One Frame at a Time 🌟
            </h3>
            <div className="text-xl font-semibold md:text-3xl w-[100%]">
              <p className="text-start md:mr-10 p-4">
                At Sufna Productions, we're not just another media production agency - we're the storytellers, the visionaries, and the creative engine that brings your brand's narrative to life. 
              </p>
              <p className="text-end md:ml-10 p-2">
                We are passionate about helping modern-day brands make captivating, creative, and high-quality advertisements that leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
