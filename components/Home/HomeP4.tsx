import Image from "next/image"
export default function HomeP4(){
    
    return(
        <div className="h-[100vh] flex flex-col items-center text-white">
            <h2 className="text-5xl  font-medium">Perchè scegliere noi</h2><br/><br />
            <p className="text-center text-xl w-[50vw]">Quando scegli noi e i nostri servizi scegli un ambiente motivante, attrezzature all&apos;avanguardia, programmi personalizzati e un team di esperti pronti a supportarti in ogni obiettivo. Qui troverai la tua migliore versione!</p>
            <br />
            <br />
            <div className="w-[90%] h-[60%]  text-white bg-white rounded-3xl  bg-opacity-25 flex">
                <div className=" w-[70%] h-full p-6 rounded-tl-3l grid grid-cols-2 grid-rows-2">
                    <div className="w-50 h-35  p-14 border-r-4">
                            <h3 className="text-3xl font-bold">Competenza dei trainers</h3><br />
                            <p className="text-lg font-medium">Trainer certificati e motivati ti guideranno passo dopo passo con programmi su misura per raggiungere i tuoi obiettivi fitness.</p>
                    </div>
                    <div className="w-50 h-35  p-14  ">
                            <h3 className="text-3xl font-bold">Costi di membership</h3><br />
                            <p className="text-lg font-medium">Allenarsi non deve costare una fortuna! Offriamo abbonamenti convenienti, flessibili e personalizzati per adattarsi a ogni esigenza economica.</p>
                    
                     </div>
                    <div className="w-50 h-35  p-14 border-t-4 border-r-4">
                            <h3 className="text-3xl font-bold">Orari flessibili</h3><br />
                            <p className="text-lg font-medium">Siamo aperti dalla mattina presto fino a tarda sera, così puoi allenarti quando vuoi, senza limiti di tempo.</p>
                       </div>
                    <div className="w-50 h-35  p-14 border-t-4 ">
                        <h3 className="text-3xl font-bold">Servizi completi</h3><br />
                        <p className="text-lg font-medium">Spogliatoi attrezzati, sauna rilassante, area relax e macchinari di ultima generazione per un’esperienza fitness unica e confortevole.</p>
                    </div>
                </div>
                <div className="  w-[30%] h-full rounded-tr-3xl rounded-br-3xl overflow-hidden">
                    <Image
                        src="https://cdn.pixabay.com/photo/2018/12/28/16/21/bicep-curl-3899888_640.jpg"
                        alt="immagine allenamento"
                        width={300}
                        height={300}
                        quality={100}
                        style={{
                            objectFit:"cover",
                            width:"100%",
                            height:"100%"
                        }}
                    />
                </div>

            </div>
        </div>
    )
}