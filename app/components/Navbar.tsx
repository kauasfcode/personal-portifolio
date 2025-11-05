import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <>
            <div className="px-5 py-5 mb-2 ">
                <div className="px-5 py-5 flex justify-between w-full bg-section rounded-lg items-center text-title font-serif relative">
                    <div className="flex gap-2">
                        <Logo />
                        <span className=" text-lg">Kaua.Dev</span>
                    </div>
                    <div className="space-x-5">
                        <Link href={"#about"}><span>Sobre mim</span></Link>
                        <Link href={"#projects"}><span>Projetos</span></Link>
                        <Link href={"#footer"}><span>Contatos</span></Link>
                    </div>
                    <div className="flex gap-5">
                        <Link href="">
                            <Image src={"/socials/x.svg"} alt="nextjs icon" width={24} height={24} />
                        </Link>
                        <Link href="https://github.com/kauasfcode/">
                            <Image src={"/socials/github.svg"} alt="" width={24} height={24} />
                        </Link>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=kauadesousafelicio06@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image src={"/socials/email.svg"} alt="e-mail" width={25} height={25} />
                        </a>
                    </div>
                    <BorderBeam duration={3} size={200} colorFrom="#0D0D0D" colorTo="#8B5CF6" />
                </div>
            </div>
        </>
    )
}