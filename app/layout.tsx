"use client"

import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import logo from "/public/GYM.png"
import { usePathname } from "next/navigation";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className="bg-background font-roboto">
        <nav className=" h-40 text-white font-bold flex relative z-20 flex justify-between items-center ">
          <div className="w-[40vw] h-full flex justify-start items-center pl-8">
            <Link href="/">
              <Image 
                src={logo}
                alt="logo"
                width={80}
                height={80}
                className="rounded-[50%]"
              />
            </Link>

          </div>
          <div className="flex justify-evenly items-center gap-6 text-xl w-[60vw] h-full">
          <Link className={`link ${pathname === '/' ? 'border-b-2 border-white' : ''}`} href="/">Home</Link>
          <Link className={`link ${pathname === '/servizi' ? 'border-b-2 border-white' : ''}`} href="/servizi">Servizi</Link>
          <Link className={`link ${pathname === '/info' ? 'border-b-2 border-white' : ''}`} href="/orari">Orari</Link>
          <Link className={`link ${pathname === '/blog' ? 'border-b-2 border-white' : ''}`} href="/blog">Blog</Link>
          <Link className={`link ${pathname === '/chiSiamo' ? 'border-b-2 border-white' : ''}`} href="/chiSiamo">Chi siamo</Link>
          <Link className={`link ${pathname === '/contatti' ? 'border-b-2 border-white' : ''}`} href="/contatti">Contatti</Link>
          


          </div>
          
        </nav>
        {children}
      </body>
    </html>
  );
}
