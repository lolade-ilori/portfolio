import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <nav className="fixed z-10 inset-0 min-h-screen border border-blue-400 w-60">
      <div>
        <div>
          <Link href={"/"}>lolade ilori.</Link>
          <h3 className="text-[#545D69]">available</h3>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
