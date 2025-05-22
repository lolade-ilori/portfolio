import React from "react";
import ProjectDescriptionCard from "./ProjectDescriptionCard";
import { projects } from "../../../data/projectHistory";

const ProjectsPage = () => {
  return (
    <div className="min-h-[100vh] px-5 py-5 md:px-20 lg:px-35 md:py-10">
      <h1 className="text-2xl md:text-5xl font-faro-local">All Projects</h1>

      <div className="min-h-[500px] flex flex-col gap-14 my-10 md:my-20">
        {projects.map((item) => {
          return (
            <ProjectDescriptionCard
              key={item.id}
              name={item.name}
              image={item.image}
              weblink={item.weblink}
              description={item.description}
              stackUsed={item.stackUsed}
              year={item.year}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
