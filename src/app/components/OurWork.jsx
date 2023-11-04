import Image from "next/image";
import React from "react";
import image1 from '../asset/images/image1.jpg'
import image2 from '../asset/images/image2.jpg'
import image3 from '../asset/images/image3.jpg'
import image4 from '../asset/images/image4.jpg'
import image5 from '../asset/images/image5.jpg'
import image6 from '../asset/images/image6.jpg'
import image7 from '../asset/images/image7.jpg'
import image8 from '../asset/images/image8.jpg'
import image9 from '../asset/images/image9.jpg'

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

// const ImageSizing = undefined
const ImageSizing = process.env.NEXT_PUBLIC_IMAGESIZING || 300

const images =[
  {
    title:'Image 1',
    src:image1,
    width:ImageSizing,
    height:ImageSizing
  },
  {
    title:'Image 2',
    src:image2,
    width:ImageSizing,
    height:ImageSizing
  },
  {
    title:'Image 3',
    src:image3,
    width:ImageSizing,
    height:ImageSizing
  },
  {
    title:'Image 4',
    src:image4,
    width:ImageSizing,
    height:ImageSizing
  },
  {
    title:'Image 5',
    src:image5,
    width:ImageSizing,
    height:ImageSizing
  },
  {
    title:'Image 6',
    src:image6,
    width:ImageSizing,
    height:ImageSizing
  },
  {
    title:'Image 7',
    src:image7,
    width:ImageSizing,
    height:ImageSizing
  },
  {
    title:'Image 8',
    src:image8,
    width:ImageSizing,
    height:ImageSizing
  },
  {
    title:'Image 9',
    src:image9,
    width:ImageSizing,
    height:ImageSizing
  },
]

/*
var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});


*/


export default function OurWork({data}) {

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
              <div key={"eACHKEYFORVIDEO" + i} className="p-2 md:w-[50%]rounded-md grow">
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
      </div>
    </section>
  );
}
