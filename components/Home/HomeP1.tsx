
import { FaChevronDown } from "react-icons/fa";

export default function HomeP1(){
    return(
        <>
            {/* DESKTOP */}
            <div className="max-md:hidden h-[100vh] bg-cover bg-center backdrop-opacity-10 -mt-40 flex flex-col justify-center items-center" style={{backgroundImage: "url('/foto-homepage.jpg')"}}>
                
                <h1 className="text-white text-center text-8xl font-bold mt-40">
                    <section className="font-light -mb-20 text-7xl">CREA IL TUO</section> <br/>FISICO IDEALE
                </h1>
            
                <p className="text-white mt-10 text-3xl w-[70%] font-normal text-center ">Essere fisicamente attivo può migliorare la salute mentale, aiuta la perdita di peso, riduce il rischio di malattie, rinforza le ossa e i muscoli, e migliora l&apos;abilità nelle attività giornaliere.</p>
                <div className="w-[150px] h-[150px] bg-standard rounded-[50%] mt-20 flex flex-col items-center justify-center ">
                
                    <FaChevronDown className="text-white text-3xl opacity-25" />
                    <FaChevronDown className="text-white text-3xl opacity-50" />
                    <FaChevronDown className="text-white text-3xl opacity-75"/>
                    <FaChevronDown className="text-white text-3xl opacity-100" />
                </div>
            </div>  

            {/* MOBILE */}
            <div className="h-[30vh] bg-background p-6 md-hidden">
            <h1 className="text-white text-8xl font-bold">
                    <section className="font-light -mb-20 text-7xl">CREA IL TUO</section> <br/>FISICO IDEALE
                </h1>

            </div>

        </>

        
        
    )
}