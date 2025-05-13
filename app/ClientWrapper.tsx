"use client";
import React, { ReactNode, useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("seenSplash");

    if (!hasSeen) {
      setShowSplash(true);
      localStorage.setItem("seenSplash", "1");
    }
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  return (
    <>
      <NavBar pathname={pathname} />
      <main className="min-h-[calc(100vh_-_130px)]">{children}</main>
      <Footer />
    </>
  );
}
