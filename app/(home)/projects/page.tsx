import React from "react";
import ProjectDescriptionCard from "./ProjectDescriptionCard";

const ProjectsPage = () => {
  return (
    <div className="min-h-[100vh] px-35 py-10">
      <h1 className="text-5xl font-faro-local">All Projects</h1>

      <div className="min-h-[500px] flex flex-col gap-14 my-20">
        <ProjectDescriptionCard />
        <ProjectDescriptionCard />
        <ProjectDescriptionCard />
        <ProjectDescriptionCard />
      </div>
    </div>
  );
};

export default ProjectsPage;
