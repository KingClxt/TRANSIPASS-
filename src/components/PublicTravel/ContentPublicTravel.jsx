
import { useSelector } from "react-redux"
import { Input } from "../Input"
import { CarteBox } from "./CarteBox"
import { RecentTrajets } from "./RecentTrajets"
import { getToken, getUser } from "../../selectors/userSelectors"
import { useQuery } from "@tanstack/react-query"
import { getRecentPayment } from "../../api/endpoints/payment"



export const ContentPublicTravel = ()=>{

    // RECUPERATION DU USER
    const {id} = useSelector(getUser)
    const token = useSelector(getToken)

    // FETCH DES TRAJET
    const {data, isLoading, isError} = useQuery({
        queryKey:['payment', id],
        queryFn:()=>getRecentPayment(id, token)
    })
    return (
        <section className="px-5 sm:px-10 pt-20 sm:pt-0 mt-5 flex flex-col gap-5">
            <div className="flex flex-col justify-center items-center w-full mx-auto gap-2 ">
                <ul className="w-full">
                    <Input placeholder="Ou allez-vous ?" classname="w-full" />
                </ul>
            </div>
            <CarteBox />
            <RecentTrajets payments={data} isError={isError} isLoading={isLoading} text="Trajet Recent" />
        </section>
    )
}