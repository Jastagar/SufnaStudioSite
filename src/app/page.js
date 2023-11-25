import Script from "next/script";
import Aboutus from "./components/Aboutus";
import Hero from "./components/Hero";
import OurWork from "./components/OurWork";
import Clients from "./components/Clients";
import ContactMe from "./components/ContactMe";

export default async function Home() {
  const rawData = await fetch(process.env.NEXT_PUBLIC_DATA_SHEET_API,{revalidate:10,cache:'no-cache'})
  const data = await rawData.json()
  return (
      <main className="font-sans overflow-x-hidden">
        <Hero data={data.home} />
        <Aboutus data={data.aboutus} />
        <OurWork data={data.ourwork} />
        <Clients data={data.clients} />

        <ContactMe data={data.contactus || null} />
        <Script>{"AOS.init()"}</Script>
      </main>
  );
}
