import Image from "next/image";
import React from "react";
import ClientsImage from "../asset/images/Clients.png";

export default function Clients() {
  return (
    <section id="clients">
      <div className="">
        <div className="flex flex-col gap-12 items-center justify-center">
          {/* <div className=""> */}
            <h3 className="text-6xl p-4 font-semibold">Our Clients</h3>
          {/* </div> */}
          <div className="">
            <Image
              className=""
              width={1600}
              height={900}
              src={ClientsImage}
              alt="Client Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
