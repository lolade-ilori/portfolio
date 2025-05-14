import Link from "next/link";
import React from "react";
import gamey from "../../assets/img/gamey.jpeg";
import Image from "next/image";

const ProjectDescriptionCard = () => {
  return (
    <div className="grid grid-cols-8 gap-20 ">
      <div className="col-span-3">
        <Image src={gamey} alt="gamey" className="h-60 object-cover " />
      </div>

      <div className="col-span-5 flex flex-col justify-between ">
        <div>
          <h3 className="font-faro-local uppercase text-[#545D69]">gamey</h3>

          <p className="text-[#F5F5FF] font-faro-semibold mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            velit ipsa, numquam provident ducimus aliquam minima ea excepturi
            labore dignissimos voluptatibus impedit adipisci pariatur accusamus!
            Necessitatibus aliquid omnis exercitationem pariatur!
          </p>

          <h4 className="text-[#7C8A9C] font-faro-local uppercase mt-4">
            2021 - present
          </h4>
        </div>

        <div>
          <Link
            href=""
            className="text-[#0069FB] text-sm font-faro-local underline underline-offset-2 uppercase"
          >
            visit website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionCard;
