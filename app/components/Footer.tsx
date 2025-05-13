import Link from "next/link";
import React from "react";
import linkedIn from "../assets/img/ion_logo-linkedin.png";
import github from "../assets/img/ri_github-fill.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" h-[70px] font-faro-local w-full px-20 flex items-center">
      <div className="flex items-center gap-6">
        <h2 className="uppercase text-xl text-[#545D69] ">find me</h2>

        <div className="flex items-center gap-3">
          <Link href={""}>
            <Image src={linkedIn} alt="LinkedIn social" />
          </Link>

          <Link href={""}>
            <Image src={github} alt="Github social" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
