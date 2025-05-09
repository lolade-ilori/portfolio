import Image, { StaticImageData } from "next/image";
import React from "react";

interface Props {
  images: StaticImageData;
}

const ProjectCard = ({ images }: Props) => {
  return (
    <div className="h-[350px] w-[250px] border border-yellow-300 relative">
      <div>
        <Image
          placeholder="blur"
          src={images}
          alt="gamey"
          fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          // width={250}
          // height={350}
          className="h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
