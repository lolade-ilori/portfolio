import Link from "next/link";
import React from "react";

const AboutHeader = () => {
  return (
    <header className="">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="underline underline-offset-2 uppercase font-faro-local text-xl"
        >
          close
        </Link>

        <h3 className="uppercase text-md font-faro-local">contact</h3>
      </div>
    </header>
  );
};

export default AboutHeader;
