//La card pour chaqu'un des projects
"use client";

import { format, add } from "date-fns";
import { ArrowRight } from "@/assets/icons";
import getShortId from "@/helpers/getShortId";
import { cn } from "@/utils/utils";

interface ProjectCardProps {
  project: {
    _id: string,
    end_date: string,
    name: string,
    project_manager: string,
    foreman_phone: string,

  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

    const endDate_EnDate = new Date(project.end_date);

  return (
    //Pas besoin de link pour chaque card de project, car ce n'est pas demander, mais j'ai garder le ArrowRight, car on ma demander de faire comme dans les invoices
    // j'ai repis les className et la structure de InvoiceCard pour que sa ressemble

    <div className="w-full bg-white dark:bg-[#1E2139] grid-cols-2 sm:grid-cols-[50px_110px_repeat(3,1fr)_20px] grid md:grid-cols-[80px_120px_repeat(3,1fr)_20px] items-center py-6 sm:py-4 px-6 md:px-8 rounded-md font-medium text-sm text-primary gap-1 sm:gap-4">
      <div className="mb-6 font-bold uppercase sm:mb-0">
        <span className="text-[#7E88C3]">#</span>
        {getShortId(project._id)}
      </div>
      <span className="text-[#7E88C3] dark:text-[#DFE3FA]">
        Due {format(endDate_EnDate, "dd MMM yyyy")}
      </span>
      <span className="mb-6 sm:mb-0 col-start-2 row-start-1 justify-self-end sm:justify-self-start sm:col-auto sm:row-auto text-[#858BB2] dark:text-[#FFFFFF]">
        {project.name}
      </span>
      <span className="col-start-1 row-start-3 text-base font-bold sm:col-auto sm:row-auto md:pr-5 sm:justify-self-end">
        {project.project_manager? project.project_manager : "Aucun Nom"}
      </span>
        <div className={cn("row-span-2 sm:row-span-1 flex justify-center items-center px-4 py-2.5 capitalize rounded-md dark:text-[#DFE3FA] dark:bg-[#DFE3FA]/5 text-[#373B53] bg-[#373B53]/5" )}>
            <span className={cn("inline-block mr-3 h-2 w-2 rounded-full","bg-[#373B53] dark:bg-[#DFE3FA] ")}></span>
            <span className="pt-1">{project.foreman_phone? project.foreman_phone : "Aucun Telephone"}</span>
        </div>
      <span className="justify-center hidden sm:flex">
        <ArrowRight />
      </span>
    </div>
  );
};

export default ProjectCard;
