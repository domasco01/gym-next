"use client"

import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import logo from "/public/GYM.png"
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [menu,setMenu] = useState<boolean>(false)

  return (
    <html lang="en">
      <body className="bg-background font-roboto relative max-md:overflow-x-hidden">
        <nav className=" h-40 text-white font-bold flex relative z-20 flex justify-between items-center max-md:bg-background ">
          <div className="w-[40vw] h-full flex justify-start items-center pl-8">
            <Link href="/">
              <Image 
                src={logo}
                alt="logo"
                width={80}
                height={80}
                className="rounded-[50%] "
              />
            </Link>

          </div>
          <div className="flex justify-evenly items-center gap-6 text-xl w-[60vw] h-full max-md:hidden max-lg:text-sm">
            <Link className={` ${pathname === '/' ? 'border-b-2 border-white' : ''}`} href="/">Home</Link>
            <Link className={` ${pathname === '/abbonamenti' ? 'border-b-2 border-white' : ''}`} href="/abbonamenti">Abbonamenti</Link>
            <Link className={` ${pathname === '/orari' ? 'border-b-2 border-white' : ''}`} href="/orari">Corsi e Orari</Link>
            <Link className={` ${pathname === '/blog' ? 'border-b-2 border-white' : ''}`} href="/blog">Blog</Link>
            <Link className={` ${pathname === '/chiSiamo' ? 'border-b-2 border-white' : ''}`} href="/chiSiamo">Chi siamo</Link>
            <Link className={` ${pathname === '/contatti' ? 'border-b-2 border-white' : ''}`} href="/contatti">Contatti</Link>
          </div>

          <div className="md:hidden pr-8">
            <button onClick={()=> setMenu(!menu)}><IoMenu className="h-10 w-10"/></button>
          </div>   
          
        </nav>
        {
              menu?
                <div className="flex flex-col items-center justify-evenly text-xl h-[40vh] bg-background w-full md:hidden z-50 absolute top-40 text-white font-medium">
                  <Link className='menu-mobile' href="/">Home</Link>
                  <Link className='menu-mobile' href="/abbonamenti">Abbonamenti</Link>
                  <Link className='menu-mobile' href="/orari">Corsi e Orari</Link>
                  <Link className='menu-mobile' href="/blog">Blog</Link>
                  <Link className='menu-mobile' href="/chiSiamo">Chi siamo</Link>
                  <Link className='menu-mobile' href="/contatti">Contatti</Link>
                </div>
                :
                null
        }
        {children}
        <Footer/>
      </body>
    </html>
  );
}
