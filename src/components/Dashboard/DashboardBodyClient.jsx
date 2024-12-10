import { Binary, CarIcon, ChartAreaIcon, Wallet } from "lucide-react"
import { CardInformation } from "./CardInformation"
import { RecentTravel } from "./RecentTravel"
import { RecentPayment } from "./RecentPayment"
import { useSelector } from "react-redux"
import { useQuery } from "@tanstack/react-query"
import { getRecentPayment } from "../../api/endpoints/payment"
import { getRecentTrajet } from "../../api/endpoints/travel"
import { useNavigate } from "react-router-dom"



export const DashboardBodyClient = ()=>{
    const navigate = useNavigate()
    // RECUPERATION DE L'UTILISATEUR ET DU TOKEN
    const token = useSelector(({userReducer})=>userReducer.token)
    if(!token){
        navigate('/signin')
    }
    const {id, solde, pointsFidelite} = useSelector(({userReducer})=>userReducer.usager)

    // FONTION POUR FETCH LES VOYAGES
    const {data:payments, isLoading:paymentLoading, isError:paymentError} = useQuery({
        queryKey:['payment', id],
        queryFn:()=>getRecentPayment(id, token)
    })

    // FONCTION POUR FETCH LES PAYEMENTS
    const {data:travels, isLoading:travelLoading, isError:travelError} = useQuery({
        queryKey:['trajet', id],
        queryFn:()=>getRecentTrajet(id, token)
    })

    return (
        <section className="container mx-auto  px-10 pt-16 sm:py-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 my-10 gap-3">

                <CardInformation color="violet">
                    <Wallet />
                    <div>
                        <p>Ton solde</p>
                        <p>{solde} FCFA</p>
                    </div>
                </CardInformation>

                <CardInformation >
                    <CarIcon />
                    <div>
                        <p>Nombre de voyage</p>
                        <p>{travels?.historique && !travelLoading ?travels?.historique.length:0}</p>
                    </div>
                </CardInformation>

                <CardInformation color="violet">
                    <ChartAreaIcon />
                    <div>
                            <p>Points</p>
                            <p>{pointsFidelite}</p>
                    </div>
                </CardInformation>
                
            </div>
            {/* Affichage des tableaux d'action recente */}
            <div className="flex flex-col sm:flex-row gap-3">
                <RecentTravel travels={travels} isLoading={travelLoading} isError={travelError} />
                
                    <RecentPayment payments={payments?.recharges} limit={3} isLoading={paymentLoading} isError={paymentError}  />
                
                
            </div>
        </section>
    )
}