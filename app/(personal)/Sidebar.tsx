import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "../assets/img/Background.png";
import linkedIn from "../assets/img/ion_logo-linkedin.png";
import github from "../assets/img/ri_github-fill.png";

const Sidebar = () => {
  return (
    <nav className="fixed z-11 left-0 top-0 min-h-screen w-60">
      <div>
        <Image
          src={bg}
          alt="background"
          fill
          className="object-cover object-left"
        />

        <div className="fixed left-0 top-0 z-20 py-8 px-9 font-faro-local uppercase">
          <Link href={"/"} className="underline underline-offset-2">
            lolade ilori.
          </Link>
          <h3 className="text-[#545D69]">available</h3>
        </div>

        <div className="fixed left-0 bottom-0 z-20 font-faro-local pb-20 px-9">
          <div className="flex items-center gap-3">
            <h2 className="uppercase text-md text-[#545D69] ">find me</h2>

            <div className="flex items-center gap-3">
              <Link href={""}>
                <Image src={linkedIn} alt="LinkedIn social" width={20} />
              </Link>

              <Link href={""}>
                <Image src={github} alt="Github social" width={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
