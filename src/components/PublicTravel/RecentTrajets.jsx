import { Loader } from "lucide-react"
import { TrajetItem } from "./TrajetItem"


export const RecentTrajets = ({text, tickets, isLoading, isError})=>{
    
    
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
                            tickets?.tickets.length > 0 ?(
                                <ul className="space-y-3">
                                    {
                                        tickets?.tickets.map(ticket=><TrajetItem 
                                                                            arrivée={ticket.trajet.gareDepart.nom}
                                                                            depart={ticket.trajet.gareArrivee.nom}
                                                                            />)
                                    }
                                </ul>
                            )
                            :<p className="text-center py-3 font-bold text-gray-700">Vous n'avez fait aucune course</p>
                        )
            }
            
        </div>
    )
}