import React from "react";
import WaveSvg from "./icons/WaveSvg";
import Image from "next/image";
import FooterImage from "../asset/images/FooterImage.png";
import CEOImage from "../asset/images/CEOremovedBg.png";
import image1 from "../asset/images/image1.jpg";
import image2 from "../asset/images/image2.jpg";
import image3 from "../asset/images/image3.jpg";

export default function Aboutus({ data }) {
  return (
    <>
      <section id="aboutus" className=" p-5">
        <h2 className="text-center text-4xl md:text-6xl font-semibold p-3">
          {data.heading}
        </h2>

        <div className="flex justify-center items-center flex-col md:flex-row md:items-start">
          <div className="flex justify-between p-10 md:w-[80%]">
            {/* Image Showcase */}
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
            {/* Written Content */}
            <div className="w-[40%] h-[70%] my-auto">
              <div className="text-xl">{data.content[1]}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
