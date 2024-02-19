import Script from "next/script";
import Aboutus from "./components/Aboutus";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";
import Creative from "./components/Creative";
import CreativeBehindScenes from "./components/CreativeBehindScenes";

export default async function Home() {
  // const rawData = await fetch(process.env.NEXT_PUBLIC_DATA_SHEET_API,{revalidate:10,cache:'no-cache'})
  // const data = await rawData.json()
  const data = {}
  return (
      <main className="relative font-sans overflow-x-hidden">
        <div className="relative z-[4]">
          <Hero data={data.home} />
        </div>
        <div className="relative z-[3] -top-3 md:top-[-25dvh] CreativeBG border">
          <Creative data={data.home} />
          <OurWork data={data.ourwork} />
          <Aboutus data={data.aboutus} />
          <CreativeBehindScenes data={data} />
        </div>
        <div className="relative z-[4] -top-3 md:top-[-30dvh]">
          <Clients data={data.clients} />
          <ContactUs data={data.contactus} />
        </div>
        {/* <Script>{"AOS.init()"}</Script> */}
      </main>
  );
}
