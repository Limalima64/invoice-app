//La page pour mettre les Projects

import getProjects from "../actions/getProjects";
import EmptyState from "@/components/shared/EmptyState";
import Link from "next/link";
import { ArrowLeft } from "@/assets/icons";
import ProjectCard from "@/components/project/ProjectCard";

const ProjectList = async () => {
  const projects = await getProjects();

if (projects.length === 0) {
    return (
      <>
        <Link href="/" className="flex items-center self-start gap-5 p-2">
            <ArrowLeft />
            <span>Go back</span>
        </Link>
        <EmptyState
          title="There is nothing here"
          subtitle="You don't have any project."
        />
      </>
    );
  }

  return (
    <>
      <Link href="/" className="flex items-center self-start gap-5 p-2">
            <ArrowLeft />
            <span>Go back</span>
        </Link>
      <div className="flex flex-col gap-3 overflow-y-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
