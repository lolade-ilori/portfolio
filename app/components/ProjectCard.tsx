"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "motion/react";

interface Props {
  images: StaticImageData;
}

const ProjectCard = ({ images }: Props) => {
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
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl p-6 bg-purple-500"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 w-fit block rounded-full bg-white/30 px-3 py-0.5 text-sm font-faro-local font-light">
          Fintech
        </span>
      </div>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.ellipse
        cx="160.5"
        cy="124.5"
        rx="100.5"
        ry="95.5"
        fill="#141414"
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
      />
      <motion.ellipse
        cx="160.5"
        cy="272"
        rx="100.5"
        ry="33"
        fill="#141414"
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.3,
        }}
      />
    </motion.svg>
  );
};

export default ProjectCard;
