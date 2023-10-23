import Script from "next/script";
import Aboutus from "./components/Aboutus";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Clients from "./components/Clients";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <main className="font-sans overflow-x-hidden">
      <Hero />
      <Aboutus />
      <Portfolio />
      <Clients />

      <ContactMe />
      <Script>{"AOS.init()"}</Script>
    </main>
  );
}
