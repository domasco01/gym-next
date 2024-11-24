import Link from "next/link"

interface WorkoutCardProps{
    image: string,
    url:string,
    testo: string
}

export default function WorkoutCard({image, url, testo}: WorkoutCardProps){
    return(
        <Link href={url}>
                    <div className="card-workout group">
                            <div className="h-[85%] bg-cover bg-center  " style={{backgroundImage: `url(${image})`}}></div>
                            <div className="h-[85%] top-0 w-full absolute bg-background opacity-70 group-hover:bg-transparent transition-opacity"></div>
                            <div className="h-[85%] top-0 w-full  absolute flex justify-center items-center ">
                            <p className="-rotate-90 text-white text-3xl font-bold">{testo}</p>
                        </div>
                            <div className="w-[70%] h-16 bg-transparent border-2 border-[#882BA4] rounded-3xl m-auto mt-10 flex justify-center items-center text-white font-bold text-xl group-hover:bg-[#882BA4] transition:color">Inizia Oggi</div>
                            </div>
        </Link>
    )
}
