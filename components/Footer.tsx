import logo from "@/public/GYM.png"
import Image from "next/image"
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { BsFillTelephoneFill } from "react-icons/bs";






export default function Footer(){
    return(
        <div className="h-[35vh] bg-standard flex justify-center text-white text-lg">
            <div className="w-[33%] h-full  p-10 flex flex-col justify-center items-center gap-10 ">
                <Image
                    src={logo}
                    alt="logo"
                    width={80}
                    height={80}
                    className="rounded-[50%]"
                />
                <p className="w-[80%]">Allenati con noi per raggiungere i tuoi obiettivi! Palestra moderna, corsi per tutti i livelli e supporto personalizzato. La tua forma migliore, il nostro impegno.</p>
                

            </div>
            <div className="w-[33%] h-full  flex p-10 justify-evenly items-center ">
                <ul className="list-none space-y-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Corsi e Orari</Link></li>
                    <li><Link href="/">Abbonamenti</Link></li>
                    <li><Link href="/">Chi siamo</Link></li>
                    <li><Link href="/">Blog</Link></li>
                </ul>
                <ul className="list-none space-y-4">
                <li><Link href="/">Contatti</Link></li>
                <li><Link href="/">Newsletter</Link></li>
                <li><Link href="/">Termini e condizioni</Link></li>
                <li><Link href="/">Informativa sulla privacy</Link></li>
                <li><Link href="/">Cookie policy</Link></li>

                </ul>
            </div>
            <div className="w-[33%] h-full  p-10 flex flex-col justify-center items-center">
                <ul className="list-none space-y-6">
                    <li><FaLocationDot className="inline w-8 h-8 mb-4 mr-4"/> Via-Roma 23, Napoli 80046</li>
                    <li><CiMail className="inline w-8 h-8 mr-4 "/> Gym0@gmail.com</li>
                    <li><BsFillTelephoneFill className="inline w-8 h-8 mr-4 mb-4 "/> +39 333 3333 333</li>
                </ul>
                <div className="w-[80%] mt-6 flex justify-center gap-6">
                    <Link href="/">
                        <FaInstagram className="w-7 h-7"/>
                    </Link>
                    <Link href="/">
                        <CiFacebook className="w-7 h-7"/>
                    </Link>
                    <Link href="/">
                        <RiTwitterXFill className="w-7 h-7"/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}