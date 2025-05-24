"use client";
import Link from "next/link";
import React from "react";
import gamey from "../../assets/img/gamey.jpeg";
import Image from "next/image";
import { ProjectsInfo } from "../../../data/projectHistory";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "motion/react";

const ProjectDescriptionCard = ({
  name,
  image,
  weblink,
  description,
  stackUsed,
  year,
}: ProjectsInfo) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-8 lg:gap-0 items-center">
      <div className="md:col-span-2">
        <Image
          src={gamey}
          alt="gamey"
          className="h-30 md:h-20 rounded-2xl w-40 border border-green-200 object-cover object-center md:object-cover"
        />
      </div>

      <div className="md:col-span-5 flex flex-col justify-between ">
        <div className="text-sm md:text-base">
          <div className="flex items-center gap-2">
            <h3 className="font-faro-local uppercase text-sm md:text-base text-[#7C8A9C]">
              {name}
            </h3>

            <h4 className="text-[#7C8A9C] font-faro-local uppercase">-</h4>

            <h4 className="text-[#7C8A9C] font-faro-local uppercase">{year}</h4>
          </div>

          <div className="flex mt-2 items-center gap-3 flex-wrap ">
            {stackUsed.map((item, id) => (
              <div
                className="w-fit rounded-4xl py-1 px-3 flex justify-center bg-[#0069FB]/30  text-[#0069FB] items-center font-faro-semibold text-sm"
                key={id}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-sm md:text-base mt-3 w-fit"
          whileHover="hover"
        >
          <Link
            href={weblink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1 items-center  text-sm font-faro-local underline underline-offset-2 uppercase transition duration-300 ease-in-out hover:text-[#0069FB]"
          >
            {description === "github" ? "github" : "visit website"}
            <motion.span
              variants={{ hover: { x: 3, y: -3 } }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <MdArrowOutward size={18} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDescriptionCard;
