import Image from "next/image";
import React from "react";

import TeamImage from "../asset/images/Team.png";
import PortfolioGraph from "./Graphs/PortfolioGraphs";

import image1 from "../asset/images/image1.jpg";
import image2 from "../asset/images/image2.jpg";
import image3 from "../asset/images/image3.jpg";
import image4 from "../asset/images/image4.jpg";
import image5 from "../asset/images/image5.jpg";
import image6 from "../asset/images/image6.jpg";
import image7 from "../asset/images/image7.jpg";
import image8 from "../asset/images/image8.jpg";
import image9 from "../asset/images/image9.jpg";


const dummyVideos = [
  {
    url: "https://www.youtube.com/embed/suSKmHIK5NI",
    title: "video1",
  },
  {
    url: "https://www.youtube.com/embed/Yzm2wJkTfs8",
    title: "video2",
  },
  {
    url: "https://www.youtube.com/embed/suSKmHIK5NI",
    title: "video1",
  },
  {
    url: "https://www.youtube.com/embed/Yzm2wJkTfs8",
    title: "video2",
  },
  {
    url: "https://www.youtube.com/embed/suSKmHIK5NI",
    title: "video1",
  },
  {
    url: "https://www.youtube.com/embed/Yzm2wJkTfs8",
    title: "video2",
  },
  {
    url: "https://www.youtube.com/embed/suSKmHIK5NI",
    title: "video1",
  },
  {
    url: "https://www.youtube.com/embed/Yzm2wJkTfs8",
    title: "video2",
  },
];

const ImageSizing = process.env.NEXT_PUBLIC_IMAGESIZING || 300;

const images = [
  {
    title: "Image 1",
    src: image1,
    width: ImageSizing,
    height: ImageSizing,
  },
  {
    title: "Image 2",
    src: image2,
    width: ImageSizing,
    height: ImageSizing,
  },
  {
    title: "Image 3",
    src: image3,
    width: ImageSizing,
    height: ImageSizing,
  },
  {
    title: "Image 4",
    src: image4,
    width: ImageSizing,
    height: ImageSizing,
  },
  {
    title: "Image 5",
    src: image5,
    width: ImageSizing,
    height: ImageSizing,
  },
  {
    title: "Image 6",
    src: image6,
    width: ImageSizing,
    height: ImageSizing,
  },
  {
    title: "Image 7",
    src: image7,
    width: ImageSizing,
    height: ImageSizing,
  },
  {
    title: "Image 8",
    src: image8,
    width: ImageSizing,
    height: ImageSizing,
  },
  {
    title: "Image 9",
    src: image9,
    width: ImageSizing,
    height: ImageSizing,
  },
];

const GraphInfo=[
  {
    percent:80,
    label:"Projects Completed",
    subText:"",
    color:"aqua"
  },
  {
    percent:70,
    label:"Total Clients",
    subText:"",
    color:"pink"
  },
  {
    percent:90,
    label:"Satisfied Customers",
    subText:"",
    color:"lime"
  },
  {
    percent:65,
    label:"Growth in 1 year",
    subText:"",
    color:"orange"
  },
]

export default function OurWork({ data }) {
  return (
    <section id="portfolio">
      <div className="p-8 h-full">
        <h2 className="text-center text-4xl md:text-6xl font-semibold p-10">
          {data.heading}
        </h2>

        {/* Images goes here */}

        {/* Videos section */}
        <div className="flex h-full flex-wrap">
          {dummyVideos &&
            dummyVideos.map((e, i) => (
              <div
                key={"eACHKEYFORVIDEO" + i}
                className="p-2 md:w-[50%]rounded-md grow"
              >
                <iframe
                  src={e.url}
                  title={e.title}
                  className=" w-full aspect-[16/9]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
        </div>

        {/* Company Stats */}
        <div className="flex justify-center items-center h-[70dvh] my-10">
          <div className="flex-grow h-full flex flex-col items-center justify-between">
            <div className="h-full w-[80%] m-4 flex items-center justify-between">
              <PortfolioGraph color={GraphInfo[0].color} percent={GraphInfo[0].percent} /> {/*Graph */}
              <div style={{fontFamily:''}} className="text-5xl m-3">
                {GraphInfo[0].label}
                <div className="text-base">
                  {GraphInfo[0].subText}
                </div>
              </div>{" "}
              {/* Label */}
            </div>
            {/* Decorative Thing Here */}
            <div className="h-full w-[80%] m-4 flex items-center justify-between">
              <PortfolioGraph color={GraphInfo[1].color} percent={GraphInfo[1].percent} /> {/*Graph */}
              <div style={{fontFamily:''}} className="text-5xl m-3">
                {GraphInfo[1].label}
                <div className="text-base">
                  {GraphInfo[1].subText}
                </div>
              </div>{" "}
              {/* Label */}
            </div>
          </div>

          <div data-aos='zoom-in-up' className="w-[30%] h-[80%]">
            <div className="relative w-full h-full">
              <Image fill src={TeamImage} />
            </div>
          </div>

          <div className="flex-grow h-full flex flex-col items-center justify-between">
            <div className="h-full w-[80%] m-4 flex flex-row-reverse items-center justify-between">
              <PortfolioGraph color={GraphInfo[2].color} percent={GraphInfo[2].percent} /> {/*Graph */}
              <div style={{fontFamily:''}} className="text-5xl m-3">
                {GraphInfo[2].label}
                <div className="text-base">
                  {GraphInfo[2].subText}
                </div>
              </div>{" "}
              {/* Label */}
            </div>
            {/* Decorative Thing Here */}
            <div className="h-full w-[80%] m-4 flex flex-row-reverse  items-center justify-between">
              <PortfolioGraph color={GraphInfo[3].color} percent={GraphInfo[3].percent} /> {/*Graph */}
              <div style={{fontFamily:''}} className="text-5xl m-3">
                {GraphInfo[3].label}
                <div className="text-base">
                  {GraphInfo[3].subText}
                </div>
              </div>{" "}
              {/* Label */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
