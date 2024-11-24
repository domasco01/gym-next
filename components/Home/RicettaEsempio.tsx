import Image from "next/image"
import Link from "next/link"
import { IoArrowForwardCircleOutline } from "react-icons/io5";


export default function RicettaEsempio(){
    return(
        <div className="w-[65%] h-[100%] flex">
            <div className="w-[40%] h-[100%] rounded-[60px] overflow-hidden">
                <Image 
                    src="https://cdn.pixabay.com/photo/2017/09/19/08/52/pancake-2764589_640.jpg"
                    alt="Ricetta Esempio"
                    width={400}
                    height={700}
                    priority
                    quality={100}
                    style={{
                        objectFit:'cover',
                        width:'100%',
                        height:'100%'
                    }}
                />
            </div>
            <div className="w-[60%] text-white flex flex-col justify-center items-left p-12 ">
                <h3 className="text-3xl font-medium">French Toast</h3>
                <br />
                <p className="font-normal text-lg">Il French Toast Healthy è una colazione nutriente e leggera. Fette di pane integrale immerse in una miscela di albumi, latte vegetale e cannella, poi dorate in padella senza olio, offrono energia naturale e gusto senza compromessi.</p>
                <Link 
                    className="btn transition:color mt-4 "
                    href="/"
                >Vedi ricetta <IoArrowForwardCircleOutline className="ml-4 text-4xl" />               
                </Link>                
            </div>
                    
        </div>
    )
}