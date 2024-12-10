import { useSelector } from "react-redux"
import { RecentPayment } from "../Dashboard/RecentPayment"
import { CardSolde } from "./CardSolde"
import { getToken, getUser } from "../../selectors/userSelectors"
import { useQuery } from "@tanstack/react-query"
import { getRecentPayment } from "../../api/endpoints/payment"



export const ContentPortefeuille = ()=>{
    const {id, solde} = useSelector(getUser)
    const token = useSelector(getToken)
    const {data, isLoading, isError} = useQuery({
        queryKey:['payment', id],
        queryFn:()=>getRecentPayment(id, token)
    })

    return (
        <section className="container px-5 sm:px-10 mt-28 sm:mt-16">
            <div className="flex flex-col gap-4 h-full">
                <CardSolde solde={solde} />
                <RecentPayment isError={isError} payments={data} isLoading={isLoading} isPortefeuil />
            </div>
        </section>
    )
}