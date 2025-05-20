import type { Metadata } from "next";
import "../globals.css";
import ClientWrapper from "../ClientWrapper";
import {
  FaroBold,
  FaroLight,
  FaroRegular,
  FaroSemiBold,
} from "../../utils/fonts";

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
        className={` ${FaroRegular.variable} ${FaroBold.variable} ${FaroLight.variable} ${FaroSemiBold.variable} min-h-screen relative antialiased bg-fill bg-[url('./assets/img/bg-grid.png')] bg-fixed bg-no-repeat bg-blend-overlay`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
