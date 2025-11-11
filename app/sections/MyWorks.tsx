import { Carousel, CarouselContent, CarouselItem, CarouselNext } from "@/components/ui/carousel";
import { ProjectCard } from "../components/ProjectCard";


export default function MyWorks() {
    return (
        <section className=" w-full bg-section py-8 px-12 rounded-md relative mx-auto overflow-hidden" id="projects">
            <div className="mb-4">
                <span className="text-md md:text-xl text-highlight">• Projects</span>
                <h2 className="text-lg md:text-2xl text-title">Meus últimos projetos</h2>
            </div>
            <div className="flex ">
                <Carousel className="w-full  md:w-[90%] 2xl:w-[80%]">
                    <CarouselContent>
                        <CarouselItem>
                            <ProjectCard
                                image="/projects/nina.png"
                                title="Redesign completo do e-commerce"
                                description="Realizei o redesign completo do site, reestilizando todas as telas de acordo com um layout do Figma."
                                company="Nina Saúde"
                                role="Desenvolvedor Frontend"
                                technologies="Next.js, React, ShadcnUi, TailwindCSS, Git"
                                href="https://ninasaude.com.br/"
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <ProjectCard
                                image="/projects/forum.png"
                                title="Desenvolvimento completo de um forúm"
                                description="Atuei no desenvolvimento do fórum oficial da WPO, organização global com presença em mais de 60 países. Participei desde a replicação fiel do layout do Figma até a implementação completa da interface, atuando em parceria com a equipe de UX e contribuindo com melhorias de usabilidade e design. Também fui responsável pelo sistema de autenticação e otimização de performance, garantindo uma experiência fluida e segura para os usuários."
                                company="World Packaging Organization (WPO)"
                                role="Desenvolvedor fullstack"
                                technologies="Next.js, React, Nest, ShadcnUi, TailwindCSS, Git, Docker"
                                underMaintence={true}
                            />
                        </CarouselItem>
                        <CarouselItem>
                            <ProjectCard
                                image="/projects/purplewrite.png"
                                title="Desenvolvimento completo de MVP com IA"
                                description="Liderei o desenvolvimento completo do MVP de uma aplicação baseada em IA, desde o design system até o backend e integrações externas. Entreguei a primeira versão funcional em apenas 4 semanas, com autenticação completa, integração com GPTZero e sistema de pagamentos via Stripe, garantindo alta performance e experiência fluida aos usuários."
                                company="Purplewrite"
                                role="Desenvolvedor fullstack"
                                technologies="Next.js, React, Firebase, TailwindCSS, Git, Vercel"
                                href="https://www.purplewrite.com/"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    )
}