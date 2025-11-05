import { ExpandableImage } from "./ExpandableImage";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  company: string;
  role: string;
  technologies: string;
}

export function ProjectCard({
  image,
  title,
  description,
  company,
  role,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="grid grid-cols-2 gap-x-8 items-stretch">
        
      <div className="min-w-[500px] min-h-[500px]">
          <ExpandableImage imgUrl={image}/>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-highlight text-xl font-semibold">{title}</h3>
          <p className="text-zinc-300">{description}</p>
        </div>

        <p className="text-highlight text-lg font-medium">Project Info</p>

        <div className="flex flex-col">
          <div className="flex justify-between text-title text-lg border-b border-gray-700 py-2">
            <span>Empresa</span>
            <span>{company}</span>
          </div>
          <div className="flex justify-between text-title text-lg border-b border-gray-700 py-2">
            <span>Cargo no projeto</span>
            <span>{role}</span>
          </div>
          <div className="flex justify-between text-title text-lg border-b border-gray-700 py-2">
            <span>Tecnologias</span>
            <span>{technologies}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
