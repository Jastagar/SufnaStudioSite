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
import LoadingSVG from "../asset/ImagesFinal/LoadingSVG";
import YoutubeIcon from "../asset/ImagesFinal/YoutubeIcon";

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

const GraphInfo = [
  {
    percent: 80,
    label: "Projects Completed",
    subText: "",
    color: "aqua",
  },
  {
    percent: 70,
    label: "Total Clients",
    subText: "",
    color: "pink",
  },
  {
    percent: 90,
    label: "Satisfied Customers",
    subText: "",
    color: "lime",
  },
  {
    percent: 65,
    label: "Growth in 1 year",
    subText: "",
    color: "orange",
  },
];

export default function OurWork({ data }) {
  return (
    <section
      className="relative min-h-[110dvh] z-[-2] OurWorkBackground text-white pt-[8%]"
      id="portfolio"
    >
      <div className="h-full">
        <h2 className="text-center text-4xl md:text-6xl font-bold  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] stroke-black p-10 flex items-baseline justify-center">
          {"Our W"}
          <span className="w-6 md:w-10 md:mt-0 mt-10 aspect-square LoadingAnimation">
            <LoadingSVG />
          </span>
          {"rk"}
        </h2>
        <h3 className="text-center pb-12 text-3xl font-semibold chalkfont">
          We Live the stories we tell
        </h3>

        <div className="flex flex-col md:flex-row min-h-[55dvh] md:flex-wrap mx-10 md:mx-40 rounded-2xl overflow-hidden">
          {dummyVideos &&
            dummyVideos.map((e, i) => (
              <div
                key={"eACHKEYFORVIDEO" + i}
                className="rounded-md grow md:w-[33%]"
              >
                <iframe
                  src={e.url}
                  title={e.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
        </div>

        <div className="text-center font-bold text-2xl py-8">
          <i>Loading Your Dreams Onto Our Camera.</i>
          <div className="flex justify-center items-center">
            <span className="h-10 w-10">
              <YoutubeIcon />
            </span>
            <a
              className="hover:text-blue-600"
              href="https://www.youtube.com/@Sufna.Productions"
              target="_blank"
            >
              <i>/SufnaProductions</i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
