import { BorderBeam } from "@/components/ui/border-beam";
import { ShineBorder } from "@/components/ui/shine-border";
import { TypingAnimation } from "@/components/ui/typing-animation";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="grid max-md:flex max-md:flex-col gap-4 grid-cols-2 w-full bg-section py-8 rounded-md relative overflow-hidden " id="about">
            <div className="flex justify-center items-center">
                <div className="relative">
                    <Image
                        src="/developer-pixelart.jpg"
                        alt="Developer pixel art"
                        className="rounded-full h-[250px] w-[250px] md:h-[500px] md:w-[500px]"
                        width={500}
                        height={500}
                    />
                    <ShineBorder
                        shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        duration={8}
                        borderWidth={3}
                        className=" rounded-full w-[250px] h-[250px] md:w-[500px] md:h-[500px]"
                    >
                    </ShineBorder>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-4 md:space-y-6 w-full md:w-[80%]">

                <span className="md:text-xl text-md text-center md:text-left text-title "><span className="text-highlight">{"<span> "}</span>Olá, Eu sou o Kauã <span className="text-highlight">{" <span>"}</span></span>
                <h1 className="text-title  text-2xl md:text-2xl 2xl:text-4xl max-md:flex max-md:flex-col justify-center items-center overflow-anchor-none overflow-x-hidden">
                    <TypingAnimation loop>
                        Desenvolvedor de software
                    </TypingAnimation>
                    <TypingAnimation className="text-highlight" delay={2800} loop={false} showCursor={false}>
                        {" {Full stack}"}
                    </TypingAnimation>
                </h1>
                <div className="text-sm px-5 md:px-0">
                    <span className="text-highlight">{"<p> "}</span>
                    Com experiência em tecnologias modernas como <span className="text-highlight">Next.js, Node.js, React</span> e <span className="text-highlight">TypeScript</span>, desenvolvo soluções web de alta performance, elegantes e focadas na melhor experiência do usuário.
                    <span className="text-highlight">{" <p>"}</span>
                </div>
                <div className="flex gap-4 px-5 md:px-0">
                    <Image src={"/stacksicons/nextdotjs.svg"} alt="nextjs icon" width={24} height={24} />
                    <Image src={"/stacksicons/react.svg"} alt="" width={24} height={24} />
                    <Image src={"/stacksicons/nestdotjs.svg"} alt="" width={24} height={24} />
                    <Image src={"/stacksicons/nodedotjs.svg"} alt="" width={24} height={24} />
                    <span>
                        ... and more
                    </span>
                </div>
            </div>
            <BorderBeam duration={8} size={500} colorFrom="#0D0D0D" colorTo="#8B5CF6" />
        </section>
    )
}