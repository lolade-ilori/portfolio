import Image from "next/image";
import Link from "next/link";
import React from "react";
import bg from "../assets/img/Background.png";
import linkedIn from "../assets/img/ion_logo-linkedin.png";
import github from "../assets/img/ri_github-fill.png";
import sidebar1 from "../assets/img/sidebar1.png";
import sidebar2 from "../assets/img/sidebar2.png";

const Sidebar = () => {
  return (
    <nav className="hidden md:block fixed z-11 left-0 top-0 min-h-screen w-60 bg-black/45">
      <div>
        {/* <Image
          src={bg}
          alt="background"
          fill
          className="object-cover object-left"
        /> */}

        <div className="fixed left-0 top-0 z-20 py-8 px-9 font-faro-local uppercase">
          <Link href={"/"} className="underline underline-offset-2">
            lolade ilori.
          </Link>
          <h3 className="text-[#545D69]">available</h3>
        </div>

        <div className="flex relative h-screen flex-col justify-end pb-35">
          <div className="relative max-h-100 flex overflow-hidden w-full items-center gap-2">
            <Image src={sidebar1} alt="sidebarimg" />

            <Image src={sidebar2} alt="sidebarimg" />
          </div>
        </div>

        <div className="fixed left-0 bottom-0 z-20 font-faro-local pb-20 px-9">
          <div className="flex items-center gap-3">
            <h2 className="uppercase text-base text-[#545D69] ">find me</h2>

            <div className="flex items-center gap-3">
              <Link
                href={"https://www.linkedin.com/in/lolade-ilori/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedIn} alt="LinkedIn social" width={20} />
              </Link>

              <Link
                href={"https://github.com/lolade-ilori"}
                target="_blank"
                rel="noopener noreferrer"
              >
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
