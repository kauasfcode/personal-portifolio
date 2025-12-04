import { Toaster } from "sonner";
import "./globals.css";



import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kauã Felício — Desenvolvedor Full Stack",
  description: "Portifolio de desenvolvedor para expor meus conhecimentos e experiências.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-serif  bg-main-background text-[#A1A1AA] overflow-x-hidden `}
      >
        {children}
        <Toaster position="top-center"  theme="dark"/>
      </body>
    </html>
  );
}
