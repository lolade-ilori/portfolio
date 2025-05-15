"use client";
import React from "react";
import AboutHeader from "../AboutHeader";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ExtraInfoBox from "../ExtraInfoBox";
import Image from "next/image";
import copyright from "../../assets/img/ic_sharp-copyright.png";

const AboutPage = () => {
  const pathname = usePathname();

  return (
    <div className=" h-screen w-[calc(100vw_-_240px)] ml-60 py-8 px-16">
      <AboutHeader pathname={pathname} />

      <section className="grid gap-10 grid-cols-8 min-h-full mt-15">
        {/* LEFT */}
        <div className="col-span-4 pr-15">
          <div>
            <h1 className="text-7xl font-faro-local uppercase">
              lolade <br /> ilori{" "}
            </h1>
            <p className="mt-4 text-[#545D69] text-xl font-faro-semibold">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="col-span-4">
          <h4 className="text-[#545D69] text-sm uppercase font-faro-local">
            bio
          </h4>

          {/* bio content */}
          <section className="text-md font-faro-regular flex flex-col gap-6 mt-5">
            <p>
              I’m a passionate software engineer dedicated to creating
              impactful, innovative solutions through technology. With a strong
              foundation in programming and a drive to continuously learn and
              adapt, I enjoy transforming complex ideas into functional,
              user-friendly applications that solve real-world problems. My
              journey has been shaped by hands-on experience in building
              scalable software, optimizing performance, and collaborating with
              diverse teams to deliver high-quality results.
            </p>

            <p>
              Beyond coding, I am deeply interested in understanding the user
              experience and aligning technical solutions with real needs,
              ensuring that every project not only works efficiently but also
              resonates with its audience. I thrive in collaborative
              environments where I can exchange ideas, tackle challenges, and
              grow alongside talented peers.
            </p>
          </section>

          {/* experience section */}
          <section className="mt-15">
            <h4 className="text-[#545D69] text-sm uppercase font-faro-local">
              experience
            </h4>

            <div className="flex flex-col gap-5 mb-6">
              <ExtraInfoBox
                institution="Storipod"
                title="Frontend Engineer"
                date="jan 2025 - present"
              />
              <ExtraInfoBox
                institution="Periculum"
                title="Frontend Engineer"
                date="june 2023 - aug 2023"
              />
              <ExtraInfoBox
                institution="Roadlers"
                title="Frontend Developer"
                date=" june 2022 - aug 2023"
              />
              <ExtraInfoBox
                institution="Cogart Studio"
                title="Frontend Developer"
                date="oct 2020 - nov 2022"
              />
            </div>

            <Link
              href=""
              className="uppercase underline underline-offset-2 text-[#0069FB] font-faro-local"
            >
              view full resume
            </Link>
          </section>

          {/* education section */}
          <section className="mt-15">
            <h4 className="text-[#545D69] text-sm uppercase font-faro-local">
              education
            </h4>

            <div className="flex flex-col gap-5 mb-3">
              <ExtraInfoBox
                institution="University of Strathclyde"
                title="MSc Advanced Software Engineering"
                date="sep 2023 - sep 2024"
              />

              <ExtraInfoBox
                institution="Obafemi Awolowo University"
                title="BSc Engineering Physics"
                date="july 2016 - jan 2020"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="grid grid-cols-8 gap-10 py-20">
        <div className="col-span-4">
          <h1 className="flex items-center gap-4 text-9xl font-faro-local">
            <span>
              <Image src={copyright} alt="copyright" />
            </span>{" "}
            2025
          </h1>
        </div>

        <div className="uppercase underline underline-offset-2 text-md flex gap-5 items-center w-full font-faro-regular col-span-4">
          <Link href={""}>linkedin</Link>

          <Link href={""}>github</Link>

          <Link href={""}>read.cv</Link>
        </div>
      </section>

      <section></section>
    </div>
  );
};

export default AboutPage;
