"use client";
import React, { ReactNode, useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";
import Sidebar from "./(personal)/Sidebar";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  console.log(pathname, "kfkf");
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("seenSplash");

    if (!hasSeen) {
      setShowSplash(true);
      sessionStorage.setItem("seenSplash", "1");
    } else {
      setShowSplash(false);
    }
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      {/* <NavBar pathname={pathname} /> */}
      {/* <main className="min-h-[calc(100vh_-_130px)]">{children}</main> */}
      {pathname !== "/projects" && <Sidebar />}
      <main className="relative z-10 w-full">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
