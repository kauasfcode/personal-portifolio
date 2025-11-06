import Link from "next/link";
import { ExpandableImage } from "./ExpandableImage";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  company: string;
  role: string;
  technologies: string;
  link?: string;
}

export function ProjectCard({
  image,
  title,
  link,
  description,
  company,
  role,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:items-stretch ">
        
      <div className="md:min-w-[500px] md:min-h-[500px] mb-4 md:mb-0">
          <ExpandableImage imgUrl={image}/>
      </div>

      <div className="space-y-2 md:space-y-4">
        <div className="space-y-2">
          <h3 className="text-highlight text-lg md:text-xl font-semibold">{title}</h3>
          <p className="text-zinc-300">{description}</p>
        </div>

        <p className="text-highlight text-lg font-medium">Project Info</p>

        <div className="flex flex-col text-sm md:text-[16px] 2xl:text-lg">
          <div className="flex flex-col md:flex-row gap-2 justify-between text-title border-b border-gray-700 py-2">
            <span>Empresa</span>
            {link ? (<Link href={""} className="text-highlight md:text-title ">{company}</Link>) : <span className="text-highlight md:text-title ">{company}</span> }
          </div>
          <div className="flex flex-col md:flex-row  gap-2 justify-between text-title  border-b border-gray-700 py-2">
            <span>Cargo no projeto</span>
            <span className="text-highlight md:text-title ">{role}</span>
          </div>
          <div className="flex flex-col md:flex-row  gap-2  justify-between text-title border-b border-gray-700 py-2">
            <span>Tecnologias</span>
            <span className="text-highlight md:text-title ">{technologies}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
