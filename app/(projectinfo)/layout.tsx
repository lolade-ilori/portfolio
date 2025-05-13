import React from "react";
import Footer from "../components/Footer";
import "../globals.css";
import { FaroBold, FaroLight, FaroRegular } from "../../utils/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lolade's Projects",
  description: "A portfolio for Lolade Ilori",
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${FaroRegular.variable} ${FaroBold.variable} ${FaroLight.variable} min-h-screen relative antialiased bg-fill bg-[url('./assets/img/bg-grid.png')] bg-fixed bg-no-repeat bg-blend-overlay`}
      >
        <p>back</p>
        {children}
        <Footer />
      </body>
    </html>
  );
}
