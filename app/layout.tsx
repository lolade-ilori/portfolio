import type { Metadata } from "next";
import { Geist, Geist_Mono, Farro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const faroLocalFont = localFont({
  src: "./fonts/Faro-DisplayLucky.woff",
  variable: "--font-faro-local",
});

const regularFaro = localFont({
  src: "./fonts/Faro-DisplayLucky.woff",
  variable: "--font-faro-regular",
});

const lightFaro = localFont({
  src: "./fonts/Faro-LightLucky.woff",
  variable: "--font-faro-light",
});

export const metadata: Metadata = {
  title: "Lolade's World",
  description: "A portfolio for Lolade Ilori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${faroLocalFont.variable} ${regularFaro.variable} ${lightFaro.variable} min-h-screen relative antialiased`}
      >
        <NavBar />
        <main className="min-h-[calc(100vh_-_130px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
