'use client'
import WorkoutCard from "./WorkoutCard"
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";



export default function HomeP2(){
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: 200, // Scorrere di 200px verso destra
            behavior: "smooth", // Comportamento di scorrimento fluido
          });
        }
    };
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollBy({
            left: -200, // Scorrere di 200px verso destra
            behavior: "smooth", // Comportamento di scorrimento fluido
          });
        }
    };

    return(

        <>
            <div         
            ref={scrollContainerRef}
            className="  h-[100vh] p-8 max-md:mt-24 relative overflow-x-hidden"
            >
            <h2 className="text-4xl text-white font-medium">Programmi di allenamento</h2>
            <div className="flex justify-evenly mt-12">
                <WorkoutCard 
                    image='https://cdn.pixabay.com/photo/2017/04/25/20/18/woman-2260736_1280.jpg'
                    url='/'
                    testo='Routine Principiante'

                />
                <WorkoutCard 
                    image='https://cdn.pixabay.com/photo/2021/11/10/06/23/workout-6783020_640.jpg'
                    url='/'
                    testo='Livello Avanzato'

                />
                <WorkoutCard 
                    image='https://cdn.pixabay.com/photo/2016/11/22/22/25/abs-1850926_640.jpg'
                    url='/'
                    testo='Perdere Peso'

                />
                <WorkoutCard 
                    image='https://cdn.pixabay.com/photo/2024/07/01/17/11/woman-8865733_640.png'
                    url='/'
                    testo='Corpo Libero'

                />
                <WorkoutCard 
                    image='https://cdn.pixabay.com/photo/2017/08/07/14/02/man-2604149_640.jpg'
                    url='/'
                    testo='Allenamento Forza'

                />
            </div>
        </div>
        <button className="md:hidden absolute w-14 h-14 right-2 top-[100vh] text-white flex justify-center items-center text-3xl bg-standard z-10 rounded-md " onClick={scrollRight}><FaAngleRight/></button>
        <button className="md:hidden absolute w-14 h-14 left-2 top-[100vh] text-white flex justify-center items-center text-3xl bg-standard z-10 rounded-md" onClick={scrollLeft}><FaAngleLeft/></button>

        </>
        
        
        
        
    )

}