"use client";
import React, { ReactNode, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      <NavBar />
      <main className="min-h-[calc(100vh_-_130px)]">{children}</main>
      <Footer />
    </>
  );
}
