import Link from "next/link";
import React from "react";
import linkedIn from "../assets/img/ion_logo-linkedin.png";
import github from "../assets/img/ri_github-fill.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" h-[70px] font-faro-local w-full px-5 md:px-20 flex items-center">
      <div className="flex items-center gap-6">
        <h2 className="uppercase text-base md:text-xl text-[#545D69] ">
          find me
        </h2>

        <div className="flex items-center gap-3">
          <Link
            href={"https://www.linkedin.com/in/lolade-ilori/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={linkedIn}
              alt="LinkedIn social"
              className="w-6 md:w-[28px]"
            />
          </Link>

          <Link
            href={"https://github.com/lolade-ilori"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={github}
              alt="Github social"
              className="w-6 md:w-[28px]"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
