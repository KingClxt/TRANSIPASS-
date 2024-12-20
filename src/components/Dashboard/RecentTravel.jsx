import { Loader, Loader2 } from "lucide-react"



export const RecentTravel = ({travels, isLoading, isError})=>{
    
    return (
        <div className="border rounded text-slate-800 w-full h-full sm:w-2/3 bg-white">
            <h2 className="font-poppins font-bold px-3 py-4">Recent Travels</h2>
            <table className="w-full">
                <thead className="">
                    <tr className="bg-gray-100 italic font-poppins">
                        <th className="py-4">Depart</th>
                        <th>Arrivée</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isError && 
                        <tr>
                            <td colSpan={3} className="text-center py-3 font-bold">Aucun Voyage n'a ete effectuer</td>
                        </tr>
                    }
                    {
                        isLoading
                        ?
                        <tr>
                            <td colSpan={3}>
                                <Loader className="mx-auto my-5" />
                            </td>
                        </tr>
                        
                        :(
                            travels?.tickets.length > 0 ?
                            travels.tickets.map((ticket, i)=>i<4 && <tr className="text-center border-b last:border-none">
                                <td>{ticket.trajet.gareArrivee.nom}</td>
                                <td className="py-4">{ticket.trajet.gareDepart.nom}</td>
                                <td>
                                    <span className="border px-5 py-1 rounded-full font-bold text-green-950 bg-green-300">Effectué</span>
                                </td>
                            </tr>)
                            :<tr><td colSpan={3} className="text-center font-bold py-5">Vous n'avez fait aucune course</td></tr>
                        )
                        
                    }
                    
                    
                </tbody>
            </table>
        </div>
    )
}