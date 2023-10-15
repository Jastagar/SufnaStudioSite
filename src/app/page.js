import Script from "next/script";
import Aboutus from "./components/Aboutus";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Aboutus />
      <Portfolio />

      <Script>
          {"AOS.init()"}
      </Script>
    </main>
  )
}
