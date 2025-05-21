import Link from "next/link";
import React from "react";

const AboutHeader = ({ pathname }: { pathname: string }) => {
  return (
    <header className="">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="underline underline-offset-2 uppercase font-faro-local text-sm md:text-xl"
        >
          close
        </Link>

        <h3 className="uppercase text-sm md:text-base font-faro-local">
          {pathname === "/about" ? "about" : "contact"}
        </h3>
      </div>
    </header>
  );
};

export default AboutHeader;
