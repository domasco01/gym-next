
import WorkoutCard from "./WorkoutCard"

export default function HomeP2(){
    return(
        
        <div className="  h-[100vh] p-8">
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
        
        
    )

}