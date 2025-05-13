import Link from "next/link";
import React from "react";

const NavBar = ({ pathname }: { pathname: string }) => {
  return (
    <nav
      className={`font-faro-local flex items-start gap-53 uppercase p-6 px-20 font-black`}
    >
      <div>
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
        <ul className="flex items-center gap-10">
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
