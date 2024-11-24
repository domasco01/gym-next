import Image from "next/image"
import Link from "next/link"

const categorieRicette = [
    {
        id:1,
        link:"/",
        src:"https://cdn.pixabay.com/photo/2016/11/18/19/00/bread-1836411_640.jpg",
        alt:"immagine ricette alte proteine",
        categoria:"Ricette proteiche"
    },
    {
        id:2,
        link:"/",
        src:"https://cdn.pixabay.com/photo/2019/06/11/04/00/seafood-4265995_640.jpg",
        alt:"immagine ricette bassi carbo",
        categoria:"Ricette con bassi carbo"
    },
    {
        id:3,
        link:"/",
        src:"https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467_640.jpg",
        alt:"immagine ricette vegane",
        categoria:"Ricette vegane"
    },
    {
        id:4,
        link:"/",
        src:"https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_640.jpg",
        alt:"immagine ricette senza lattosio",
        categoria:"Ricette senza lattosio"
    }
]

export default function ListaCatRicette(){

    return(
        <div className="w-[25%] h-[100%]  ml-[10vw] flex flex-col justify-start gap-12 ">

            {
                categorieRicette.map((x)=>(
                    <Link key={x.id} href={x.link} className="flex items-center h-[25%]">
                        <div className="w-[100px] h-[100px]  relative">
                            <Image
                            src={x.src}
                            alt={x.alt}
                            fill
                            style={{
                                objectFit:'cover'
                            }}
                            /> 
                        </div>
                        <h3 className="text-2xl text-white ml-6">{x.categoria}</h3>
                    </Link>
                    
                ))
            }
            
           
            
        </div>
    )
}