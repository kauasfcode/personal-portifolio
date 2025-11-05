import { Carousel, CarouselContent, CarouselItem, CarouselNext} from "@/components/ui/carousel";
import { ProjectCard } from "../components/ProjectCard";

export default function MyWorks() {
    return (
        <section className=" w-full bg-section py-8 px-12 rounded-md relative mx-auto" id="projects">
            <div className="mb-4">
                <span className="text-xl text-highlight">• Projects</span>
                <h2 className="text-2xl text-title">Meus últimos projetos</h2>
            </div>
            <div className="flex ">
                <Carousel className="w-[80%]">
                    <CarouselContent>
                        <CarouselItem>
                            <ProjectCard
                                image="/projects/nina_portifolio.png"
                                title="Redesign completo do e-commerce"
                                description="Realizei o redesign completo do site, reestilizando todas as telas de acordo com um layout do Figma."
                                company="Nina Saúde"
                                role="Desenvolvedor Frontend"
                                technologies="Next.js, React, ShadcnUi, TailwindCSS, Git"
                            />
                        </CarouselItem>
                         <CarouselItem>
                            <ProjectCard
                                image="/projects/nina_portifolio.png"
                                title="Redesign completo do e-commerce"
                                description="Realizei o redesign completo do site, reestilizando todas as telas de acordo com um layout do Figma."
                                company="Nina Saúde"
                                role="1 mês"
                                technologies="Next.js, React, ShadcnUi, TailwindCSS, Git"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}