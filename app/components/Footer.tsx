import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full py-5 text-center justify-center flex flex-col gap-7 items-center " id="footer">
            <div className="flex flex-col justify-center gap-3 items-center">
                <span className="text-highlight  text-2xl md:text-4xl">{"< >"}</span><span className=" text-xl md:text-2xl text-title">Kauã.dev</span>
            </div>
            <div className="flex gap-4">
                <Link href=""><Image src={"/socials/x.svg"} alt="Twitter" width={24} height={24} /></Link>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=kauadesousafelicio06@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={"/socials/email.svg"} alt="e-mail" width={25} height={25} />
                </a>
                <Link href="https://github.com/kauasfcode/">
                    <Image src={"/socials/github.svg"} alt="" width={24} height={24} />
                </Link>
            </div>
            <div className="text-md 2xl:text-lg md:text-xl text-title space-x-5">
                <Link href={"#about"}>Sobre mim</Link>
                <Link href={"#projects"}>Projetos</Link>
            </div>
        </footer>
    )
}