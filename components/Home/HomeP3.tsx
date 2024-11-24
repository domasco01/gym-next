import Link from "next/link"
import RicettaEsempio from "./RicettaEsempio"
import ListaCatRicette from "./ListaCatRicette"

export default function HomeP3(){
    return(
        <div className="h-[100vh] ">
            <div className="h-[15%] p-6 flex justify-between items-center ">
                <h2 className="text-4xl text-white font-medium">Ricette</h2>
                <Link 
                    className="btn transition:color"
                    href='/'
                >
                    
                    Tutte le ricette
                </Link>
            </div>
            <div className="h-[70%] p-6 flex">
                <RicettaEsempio/>
                <ListaCatRicette/>
            </div>
        </div>
    )

}