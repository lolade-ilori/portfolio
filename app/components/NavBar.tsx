import Link from "next/link";
import React from "react";

const NavBar = ({ pathname }: { pathname: string }) => {
  return (
    <nav
      className={`font-faro-local flex items-start justify-between uppercase p-2 px-5 md:p-6 md:px-20 font-black`}
    >
      <div className="text-sm md:text-base">
        {pathname === "/" ? (
          <>
            <Link href={"/"}>lolade ilori.</Link>
            <h3 className="text-[#545D69]">available</h3>
          </>
        ) : (
          <Link href={"/"} className="underline underline-offset-2">
            back
          </Link>
        )}
      </div>

      {pathname === "/" && (
        <ul className="flex items-center gap-3 md:gap-10 text-sm md:text-base">
          <li>
            <Link href={"/about"}>about</Link>
          </li>
          <li>
            <Link href={"/contact"}>contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
