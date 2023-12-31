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
      <main className="font-sans overflow-x-hidden">
        <Hero data={data.home} />
        <div className="relative z-[-2] top-[-25dvh] pt-[25dvh] CreativeBG border border-yellow-800">
          <Creative data={data.home} />
          <OurWork data={data.ourwork} />
          <Aboutus data={data.aboutus} />
          <CreativeBehindScenes data={data} />
        </div>
        <Clients data={data.clients} />

        <ContactUs data={data.contactus} />
        <Script>{"AOS.init()"}</Script>
      </main>
  );
}
