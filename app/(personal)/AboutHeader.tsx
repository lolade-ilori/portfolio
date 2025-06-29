import Link from "next/link";
import React from "react";

const AboutHeader = ({ pathname }: { pathname: string }) => {
  return (
    <header className="">
      <div className="flex justify-end items-center gap-4">
        {/* <Link
          href="/"
          className="underline underline-offset-2 uppercase font-faro-local text-sm md:text-xl"
        >
          close
        </Link> */}

        <Link
          href="/projects"
          className="underline underline-offset-2 uppercase font-faro-local text-sm md:text-base"
        >
          projects
        </Link>

        <Link
          href="/contact"
          className="underline underline-offset-2 uppercase font-faro-local text-sm md:text-base"
        >
          contact me
        </Link>
        {/* <h3 className="uppercase text-sm md:text-base font-faro-local">
          {pathname === "/about" ? "about" : "contact"}
        </h3> */}
      </div>
    </header>
  );
};

export default AboutHeader;
