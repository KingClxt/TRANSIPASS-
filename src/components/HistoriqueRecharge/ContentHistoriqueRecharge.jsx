import { useSelector } from "react-redux"
import { RecentPayment } from "../Dashboard/RecentPayment"
import { RecentTrajets } from "../PublicTravel/RecentTrajets"
import { getToken, getUser } from "../../selectors/userSelectors"
import { useQuery } from "@tanstack/react-query"
import { getRecentTrajet } from "../../api/endpoints/travel"
import { getRecentPayment } from "../../api/endpoints/payment"


export const ContentHistoriqueRecharge = ()=>{
    const token = useSelector(getToken)
    const {id} = useSelector(getUser)
    const {data, isError, isLoading} = useQuery({
        queryKey:['payment', id],
        queryFn:()=>getRecentPayment(id, token)
    })
    return (
        <section className="flex items-center sm:items-start h-full   my-10 sm:h-5/6 px-3 sm:px-10">
            <div className="w-full">
                <RecentPayment payments={data.recharges} isError={isError} isLoading={isLoading} isPortefeuil />
            </div>
            {/* <RecentTrajets text="Rechargement / paiement" /> */}
        </section>
    )
}