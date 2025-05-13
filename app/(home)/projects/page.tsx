import React from "react";
import ProjectDescriptionCard from "./ProjectDescriptionCard";

const ProjectsPage = () => {
  return (
    <div className="border border-amber-300 min-h-[100vh] px-35 py-10">
      <h1 className="text-5xl font-faro-local">All Projects</h1>

      <div className="min-h-[500px] border border-b-blue-200 my-20">
        <ProjectDescriptionCard />
      </div>
    </div>
  );
};

export default ProjectsPage;
