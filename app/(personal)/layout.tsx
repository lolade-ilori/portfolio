import React from "react";
import "../globals.css";
import { Metadata } from "next";
import {
  FaroBold,
  FaroLight,
  FaroRegular,
  FaroSemiBold,
} from "../../utils/fonts";
import Sidebar from "./Sidebar";

export const metadata: Metadata = {
  title: "About Lolade",
  description: "A portfolio for Lolade Ilori",
};

export default function PersonalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${FaroRegular.variable} ${FaroBold.variable} ${FaroLight.variable} ${FaroSemiBold.variable} min-h-screen relative antialiased bg-fill bg-[url('./assets/img/Background.png')] bg-fixed bg-no-repeat bg-blend-overlay flex`}
      >
        <Sidebar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
