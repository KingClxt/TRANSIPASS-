import { useSelector } from "react-redux"
import { RecentPayment } from "../Dashboard/RecentPayment"
import { RecentTrajets } from "../PublicTravel/RecentTrajets"
import { useQuery } from "@tanstack/react-query"
import { getRecentPayment } from "../../api/endpoints/payment"
import { getToken, getUser } from "../../selectors/userSelectors"
import { getTicketById } from "../../api/endpoints/ticket"


export const ContentHistoriqueTransport = ()=>{
    // RECUPERATION DU USER
    const {id} = useSelector(getUser)
    const token = useSelector(getToken)
    // FETCH DES TRAJET
    const {data, isLoading, isError} = useQuery({
        queryKey:['ticket', id],
        queryFn:()=>getTicketById(id)
    })
    return (
        <section className="flex items-center sm:items-start h-full   my-14 sm:h-5/6 px-3 sm:px-10">
            <div className="w-full">
                <RecentTrajets tickets={data} isLoading={isLoading} isError={isError} text="Trajet effectué" />
            </div>
            {/* <RecentTrajets text="Rechargement / paiement" /> */}
        </section>
    )
}