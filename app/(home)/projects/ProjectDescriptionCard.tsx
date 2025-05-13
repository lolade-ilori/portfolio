import Link from "next/link";
import React from "react";
import gamey from "../../assets/img/gamey.jpeg";
import Image from "next/image";

const ProjectDescriptionCard = () => {
  return (
    <div className="flex items-stretch ">
      <div>
        <Image src={gamey} alt="gamey" />
      </div>

      <div>
        <div>
          <h3>title</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
            velit ipsa, numquam provident ducimus aliquam minima ea excepturi
            labore dignissimos voluptatibus impedit adipisci pariatur accusamus!
            Necessitatibus aliquid omnis exercitationem pariatur!
          </p>

          <h4>2021 - present</h4>
        </div>

        <div>
          <Link href="">visit website</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescriptionCard;
