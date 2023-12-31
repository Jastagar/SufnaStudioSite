import React from "react";
import Image from "next/image";
import Heroimage1 from "../asset/ImagesFinal/Hero1.png";
import Heroimage2 from "../asset/ImagesFinal/Hero2.png";
import Heroimage3 from "../asset/ImagesFinal/Hero3.png";
import Heroimage4 from "../asset/ImagesFinal/Hero4.png";
import ImageSkewAboutUs from "../asset/ImagesFinal/AboutUsBorderSkew.png";

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

  return (
    <>
      <section id="aboutus" className="relative top-[-60dvh] px-[10%] text-white">
        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          About Us
        </h2>

        <div className="flex justify-center items-start p-5 h-[65dvh]">
          <div className="grow flex flex-col">        
            <div className="grow flex items-baseline">
              <ActorImages offsetTop={"5"} offsetLeft={"5"} className={"w-[60%] translate-x-0 translate-y-0"} imageSrc={Heroimage3} />
              <ActorImages offsetTop={"5"} offsetLeft={"0"} className={"w-[40%] translate-x-[-2rem] translate-y-0"} imageSrc={Heroimage2} />
            </div>
            <div className="grow flex items-start">
              <ActorImages offsetTop={"5"} offsetLeft={"5"} className={"w-[40%] translate-x-[2rem] translate-y-[-3rem]"} imageSrc={Heroimage1} />
              <ActorImages offsetTop={"5"} offsetLeft={"-5"} className={"w-[60%] translate-x-0 translate-y-[-2rem]"} imageSrc={Heroimage4} />
            </div>
          </div>


          <div className="w-[60%] text-center h-full flex flex-col gap-10 items-center">
            <h3 className="text-3xl font-semibold pt-12">
            🌟 Crafting Creativity<br/>
                One Frame at a Time 🌟
            </h3>
            <div className="text-2xl w-[80%]">
              <p className="text-start mr-10 p-4">
                At Sufna Productions, we're not just another media production agency - we're the storytellers, the visionaries, and the creative engine that brings your brand's narrative to life. 
              </p>
              <p className="text-end ml-10 p-2">
                We are passionate about helping modern-day brands make captivating, creative, and high-quality advertisements that leave a lasting impression.
              </p>
            </div>
          </div>

        </div>
        
        <div className="absolute left-0 h-[25dvh] w-full">
          <Image
            fill
            src={ImageSkewAboutUs}
          />
        </div>




        {/* <div className="flex justify-center items-center flex-col md:flex-row md:items-start">
          <div className="flex justify-between p-10 md:w-[80%]">
            {Image Showcase}
            <div className="max-w-[40%] relative w-full h-[80dvh]">
              <div className="absolute bg-body-background shadow-lg m-2 p-2 top-0 w-[80%] aspect-[16/9]">
                <div className="relative h-full w-full">
                  <Image src={image1} fill alt="AboutUsImage" />
                </div>
              </div>
              <div className="absolute bg-body-background shadow-lg m-2 p-2 top-[25%] left-16 w-[80%] aspect-[16/9]">
                <div className="relative h-full w-full">
                  <Image src={image2} fill alt="AboutUsImage" />
                </div>
              </div>
              <div className="absolute bg-body-background shadow-lg m-2 p-2 top-[50%] left-8 w-[80%] aspect-[16/9]">
                <div className="relative h-full w-full">
                  <Image src={image3} fill alt="AboutUsImage" />
                </div>
              </div>
            </div>
            {Written Content}
            <div className="w-[40%] h-[70%] my-auto">
              <div className="text-xl">{data.content[1]}</div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}
