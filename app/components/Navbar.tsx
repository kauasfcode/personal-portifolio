import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="px-5 py-5 mb-2 ">
                <div className="px-5 py-5 flex justify-between w-full bg-section rounded-lg text-title font-serif relative">
                    <div>
                        <span className=" text-lg"><div className="text-xl"><span className="text-background">{"<"}</span><span className="text-highlight">KF</span><span className="text-background">{">"}</span></div>Kaua.Dev</span>
                    </div>
                    <div className="space-x-5">
                        <Link href={""}><span>Sobre mim</span></Link>
                        <Link href={""}><span>Resumo</span></Link>
                        <Link href={""}><span>Contatos</span></Link>
                    </div>
                    <div className="flex gap-5">
                        <Image src={"/socials/x.svg"} alt="nextjs icon" width={24} height={24} />
                        <Image src={"/socials/github.svg"} alt="" width={24} height={24} />
                        <Image src={"/socials/linkedin.svg"} alt="" width={24} height={24} />
                    </div>
                    <BorderBeam duration={3} size={200} colorFrom="#0D0D0D" colorTo="#8B5CF6" />
                </div>
            </div>
        </>
    )
}