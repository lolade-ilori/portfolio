import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav
      className={`font-faro-local flex items-start gap-53 uppercase font-black h-[60px] border border-amber-200`}
    >
      <div>
        <Link href={"/"}>lolade ilori.</Link>

        <h3 className="text-[#545D69]">available</h3>
      </div>

      <ul className="flex items-center gap-10">
        <li>
          <Link href={"/about"}>about</Link>
        </li>
        <li>
          <Link href={"/contact"}>contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
