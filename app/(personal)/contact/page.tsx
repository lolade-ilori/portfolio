import React from "react";
import AboutHeader from "../AboutHeader";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className=" h-screen w-[calc(100vw_-_240px)] ml-60 py-8 px-16">
      <AboutHeader />
      <section className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-10 justify-center items-center">
          <h3 className="text-[#545D69] text-5xl font-faro-semibold ">
            Let's create magic together
          </h3>

          <h1 className="underline underline-offset-2 text-[#0069FB] text-7xl font-faro-semibold">
            loladeilori02@gmail.com
          </h1>

          <div className="uppercase underline underline-offset-2 text-xl flex justify-between items-center w-full font-faro-regular">
            <Link href={""}>linkedin</Link>

            <Link href={""}>github</Link>

            <Link href={""}>read.cv</Link>
          </div>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default ContactPage;
