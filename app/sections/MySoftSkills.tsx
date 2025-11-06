import { Marquee } from "@/components/ui/marquee";
import { SkillCard } from "../components/SkillsCard";

export default function MySoftSkills() {
    return (
        <section className="w-full bg-section py-8 rounded-md relative overflow-hidden  ">
            <Marquee className="py-8 text-white [--duration:20s] overflow-hidden">
                <div className="flex items-center gap-8 px-8">
                    <SkillCard
                        title="Aprendizado rápido."
                        description="Consigo aprender frameworks, libs e tecnologias novas em poucas semanas."
                    />
                    <SkillCard
                        title="Trabalho em equipe."
                        description="Gosto de colaborar e construir soluções com outros profissionais."
                    />
                    <SkillCard
                        title="Foco em qualidade."
                        description="Sempre priorizo boas práticas e código sustentável a longo prazo."
                    />
                    <SkillCard
                        title="Curioso por natureza."
                        description="Estou sempre aprendendo algo novo dentro e fora da área de tecnologia."
                    />
                    <SkillCard
                        title="Comprometimento."
                        description="Levo a sério cada projeto e sempre busco entregar resultados consistentes."
                    />
                </div>
            </Marquee>
        </section>
    )
}