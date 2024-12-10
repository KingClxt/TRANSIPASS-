import { Loader } from "lucide-react"
import { TrajetItem } from "./TrajetItem"


export const RecentTrajets = ({text, payments, isLoading, isError})=>{
    

    return (
        <div className="p-5 border pt-0 shadow-lg w-full bg-white rounded-lg font-poppins">
            <h2 className="font-bold my-5 text-xl text-gray-600">{text}</h2>
            {
                isError && <div className="border-2 font-bold py-5 text-center text-gray-800 rounded">Aucun rechargement n'a ete fait</div>
            }
            {
                isLoading 
                        ?
                        <Loader className="mx-auto" />
                        :(
                            payments?.historique.length >0 ?<div className="flex flex-col gap-3">
                            <TrajetItem arrivée="Corniche" depart="Adjamé" durée="30min" />
                            <TrajetItem arrivée="Corniche" depart="Adjamé" durée="30min" />
                            <TrajetItem arrivée="Corniche" depart="Adjamé" durée="30min" />
                        </div>
                        :null
                        )
            }
            
        </div>
    )
}