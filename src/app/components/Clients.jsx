import Image from "next/image";
import React from "react";
import TopBorderShapeClients from "../asset/ImagesFinal/TopBorderShapeClients.png";
import ImageSkewAboutUs from "../asset/ImagesFinal/AboutUsBorderSkew.png";
import Courts from "../asset/ImagesFinal/Courts.png";

import Brand1 from "../asset/ImagesFinal/Brands/Brand1.png"
import Brand2 from "../asset/ImagesFinal/Brands/Brand2.png"
import Brand3 from "../asset/ImagesFinal/Brands/Brand3.png"
import Brand4 from "../asset/ImagesFinal/Brands/Brand4.png"
import Brand5 from "../asset/ImagesFinal/Brands/Brand5.png"
import Brand6 from "../asset/ImagesFinal/Brands/Brand6.png"
import Brand7 from "../asset/ImagesFinal/Brands/Brand7.png"
import Brand8 from "../asset/ImagesFinal/Brands/Brand8.png"

const brands = [
  {name:"",img:Brand1,size:{l:200,h:200}},
  {name:"",img:Brand2,size:{l:200,h:200}},
  {name:"",img:Brand3,size:{l:200,h:200}},
  {name:"",img:Brand4,size:{l:200,h:200}},
  {name:"",img:Brand5,size:{l:200,h:200}},
  {name:"",img:Brand6,size:{l:200,h:200}},
  {name:"",img:Brand7,size:{l:200,h:200}},
  {name:"",img:Brand8,size:{l:200,h:200}},
]

function ArrowButton({ btnWidth, btnHeight, buttonRight }) {
  return (
    <div className={`bg-white ${btnHeight} ${btnWidth} rounded-xl md:rounded-2xl px-3 py-1`}>
      <div
        className={`TriangleCSSMob ${
          !buttonRight && "rotate-180 translate-x-[-50%]"
        }`}
      ></div>
    </div>
  );
}

function DoubleCommas() {
  return (
    <div className="absolute top-0 translate-y-[-50%] left-6 text-[12rem] text-red-500">
      <div className="relative h-12 w-16">
        <Image fill src={Courts}/>
      </div>
    </div>
  );
}

export default function Clients({ data }) {
  return (
    <>
    <section id="Clients" className="relative CreativeBG2">
        <div className="md:hidden absolute top-0 rotate-180 translate-y-[-50%] left-0 aspect-[6.1] w-full">
          <Image
            fill
            src={ImageSkewAboutUs}
          />
        </div>
      <div className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col gap-12 items-center justify-center">
          <h3 className="text-3xl pt-12  md:pt-0 md:text-7xl font-extrabold">Client's Testimonials</h3>
          {/* Main testimonials */}

          <div className="min-h-[15rem] relative w-[90%] purpleBG m-3 flex items-center">
            <DoubleCommas />
            <div className="grow flex items-center justify-center m-2 md:m-6 cursor-pointer">
              <ArrowButton btnHeight={"h-4"} btnWidth={"w-2"} />
            </div>
            <div className="w-[90%] h-full flex flex-col items-center justify-between text-center">
              <div className="font-semibold text-xl md:text-4xl my-auto">
                From Creativity to execution their team is well equpiped with
                everything your business could ever need.
              </div>
              <div className="p-4 underline font-extrabold text-xl md:text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Dipanshu Mehta
              </div>
            </div>
            <div className="grow flex items-center justify-center m-2 md:m-6 cursor-pointer">
              <ArrowButton btnHeight={"h-4"} btnWidth={"w-2"} buttonRight />
            </div>
          </div>
        </div>
      </div>


      <div className="relative top-[5dvh] aspect-[8] w-full">
        <Image fill 
          src={TopBorderShapeClients}
        />
      </div>
      
      
      <section className="text-white py-12 md:pt-0 min-h-[90dvh] md:min-h-0">
        <h1 className="font-bold text-2xl md:text-6xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Brands We've Worked With
        </h1>
        <div className="p-4 pb-24 md:p-24">
          <div className="w-full items-center flex-row flex justify-center gap-2 flex-wrap">
              {brands.map((e)=>(
                <>
                  <Image
                    height={e.size.h}
                    width={e.size.l}
                    src={e.img}
                    alt={e.name}
                  />
                </>
              ))}
          </div>
        </div>
      </section>


    </section>
    </>
  );
}
