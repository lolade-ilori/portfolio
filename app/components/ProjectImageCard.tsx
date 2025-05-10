"use client";
import React from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
}

const ProjectImageCard = ({ image }: Props) => {
  return (
    <motion.div
      whileHover="hover"
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-6 bg-blue-500"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 w-fit block rounded-full bg-white/30 px-3 py-0.5 text-sm font-faro-local font-light">
          Fashion
        </span>
      </div>

      <BackgroundImage image={image} />
    </motion.div>
  );
};

const BackgroundImage = ({ image }: Props) => {
  return (
    <>
      <Image
        src={image}
        alt="gamey"
        fill
        className=" filter grayscale transition duration-1000 ease-in-out hover:scale-120 hover:rotate-6 hover:grayscale-0"
      />
    </>
  );
};

export default ProjectImageCard;
