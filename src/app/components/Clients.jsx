import Image from "next/image";
import React from "react";
import ClientsImage from "../asset/images/Clients.png";
import TriangleSVG from "../asset/ImagesFinal/TriangleSVG";
import TopBorderShapeClients from "../asset/ImagesFinal/TopBorderShapeClients.png";
import Brands from "../asset/ImagesFinal/Brands.png";

function ArrowButton({ btnWidth, btnHeight, buttonRight }) {
  return (
    <div className={`bg-white rounded-2xl px-3 py-1`}>
      {/* <div style={{height:`${btnHeight}px`,width:`${btnWidth}px`}}> */}
      <div
        className={`TriangleCSS ${
          !buttonRight ? "rotate-180 translate-x-[-25%]" : "translate-x-[25%]"
        }`}
      ></div>
      {/* </div> */}
    </div>
  );
}

function DoubleCommas() {
  return (
    <div className="absolute top-0 left-6 translate-y-[-37%] text-[12rem] text-red-500">
      "
    </div>
  );
}

export default function Clients({ data }) {
  return (
    <>
    <section id="Clients" className="relative CreativeBG2 top-[-100dvh]">
      <div className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <div className="flex flex-col gap-12 items-center justify-center">
          <h3 className="text-7xl font-extrabold">Client's Testimonials</h3>
          {/* Main testimonials */}
          <div className="h-[15rem] relative w-[90%] purpleBG m-3 flex items-center">
            <DoubleCommas />
            <div className="grow flex items-center justify-center m-6 cursor-pointer">
              <ArrowButton btnHeight={40} btnWidth={20} />
            </div>
            <div className="w-[90%] h-full flex flex-col items-center justify-between text-center">
              <div className="font-semibold text-4xl my-auto">
                From Creativity to execution their team is well equpiped with
                everything your business could ever need.
              </div>
              <div className="p-4 underline font-extrabold text-3xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Dipanshu Mehta
              </div>
            </div>
            <div className="grow flex items-center justify-center m-6 cursor-pointer">
              <ArrowButton btnHeight={40} btnWidth={20} buttonRight />
            </div>
          </div>
        </div>
      </div>
      <div className="relative top-[5dvh] w-full h-[25dvh]">
        <Image fill 
          src={TopBorderShapeClients}
        />
      </div>
      <section className="text-white">
        <h1 className="font-bold text-6xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Brands We've Worked With
        </h1>
        <div className="p-24">
          <div className="relative w-full flex justify-center aspect-[2.3]">
            <Image
              fill
              src={Brands}
            />
          </div>
        </div>
      </section>
    </section>
    </>
  );
}
