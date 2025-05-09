import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" h-[70px] font-faro-regular w-full px-20 flex items-center border border-red-500">
      <div>
        <h2 className="uppercase text-[#545D69] ">find me</h2>
        <Link href={""}></Link>

        <Link href={""}></Link>
      </div>
    </footer>
  );
};

export default Footer;
