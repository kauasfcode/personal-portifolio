import { IconCloud } from "@/components/ui/icon-cloud";
import { TextAnimate } from "@/components/ui/text-animate";;


export default function MySkills() {
    const stackIcons = [
  "/stacksicons/css3.svg",
  "/stacksicons/docker.svg",
  "/stacksicons/firebase.svg",
  "/stacksicons/git.svg",
  "/stacksicons/javascript.svg",
  "/stacksicons/linux.svg",
  "/stacksicons/mongodb.svg",
  "/stacksicons/nestdotjs.svg",
  "/stacksicons/nextjs.svg",
  "/stacksicons/nodedotjs.svg",
  "/stacksicons/postgresql.svg",
  "/stacksicons/react.svg",
  "/stacksicons/sqldeveloper.svg",
  "/stacksicons/tailwindcss.svg",
  "/stacksicons/typescript.svg",
];
    return (
        <section className=" w-full mt-5 bg-section flex items-center flex-col  py-8 px-12 rounded-md relative mx-auto">
            
            <h2 className="text-center text-highlight mb-5 text-4xl"><TextAnimate animation="slideUp" by="word">Minhas Habilidades</TextAnimate></h2>
            <div className="grid grid-cols-2 items-strech gap-8 2xl:w-[70%] w-[90%]  rounded-md">
                <div className="flex justify-center items-center bg-neutral-950 p-5 border bg- rounded-md border-gray-700">
                    <IconCloud  images={stackIcons} />
                </div>
                <div className="space-y-5 border bg-neutral-950 border-gray-700 flex flex-col justify-center text-gray-700 rounded-md">
                    <div><span className="text-white">• </span><span className="text-highlight pl-2">Front-end:</span><span> HTML, CSS, JavaScript, Typescript, React, Next.js</span></div>
                    <div><span className="text-white">• </span><span className="text-highlight pl-2">Back-end:</span><span> HTML, CSS, JavaScript, Typescript, React, Next.js</span></div>
                    <div><span className="text-white">• </span><span className="text-highlight pl-2">Databases:</span><span> HTML, CSS, JavaScript, Typescript, React, Next.js</span></div>
                    <div><span className="text-white">• </span><span className="text-highlight pl-2">Tools & Plataforms:</span><span> HTML, CSS, JavaScript, Typescript, React, Next.js</span></div>
                    <div><span className="text-white">• </span><span className="text-highlight pl-2">Others:</span><span> HTML, CSS, JavaScript, Typescript, React, Next.js</span></div>
                </div>
            </div>
        </section>
    )
}