"use client";
import React from "react";
import AboutHeader from "../AboutHeader";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ContactPage = () => {
  const pathname = usePathname();

  return (
    <div className=" h-screen w-full md:w-[calc(100vw_-_240px)] px-5 py-2 md:ml-60 md:py-8 md:px-16">
      <AboutHeader pathname={pathname} />
      <section className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-3 sm:gap-5 md:gap-10 justify-center items-center">
          <h3 className="text-[#545D69] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-faro-semibold ">
            Let's create magic together
          </h3>

          <h1 className="underline underline-offset-2 text-nowrap text-[#0069FB] text-2xl sm:text-5xl md:text-5xl  lg:text-7xl xl:text-7xl font-faro-semibold">
            loladeilori02@gmail.com
          </h1>

          <div className="uppercase underline underline-offset-2 text-sm md:text-xl flex justify-between items-center w-full font-faro-regular">
            <Link
              href={"https://www.linkedin.com/in/lolade-ilori/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </Link>

            <Link
              href={"https://github.com/lolade-ilori"}
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </Link>

            <Link
              href={"/resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              read.cv
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
