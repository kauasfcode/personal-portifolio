import "./globals.css";

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
      </body>
    </html>
  );
}
