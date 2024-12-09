import { Binary, CarIcon, ChartAreaIcon, Wallet } from "lucide-react"
import { CardInformation } from "./CardInformation"
import { RecentTravel } from "./RecentTravel"
import { RecentPayment } from "./RecentPayment"



export const DashboardBodyClient = ()=>{
    return (
        <section className="container mx-auto px-10 pt-16 sm:py-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 my-10 gap-3">

                <CardInformation color="violet">
                    <Wallet />
                    <div>
                        <p>Ton solde</p>
                        <p>45 000FCFA</p>
                    </div>
                </CardInformation>

                <CardInformation >
                    <CarIcon />
                    <div>
                        <p>Nombre de voyage</p>
                        <p>36</p>
                    </div>
                </CardInformation>

                <CardInformation color="violet">
                    <ChartAreaIcon />
                    <div>
                            <p>Points</p>
                            <p>1250</p>
                    </div>
                </CardInformation>
                
            </div>
            {/* Affichage des tableaux d'action recente */}
            <div className="flex flex-col sm:flex-row gap-3">
                <RecentTravel />
                <RecentPayment />
            </div>
        </section>
    )
}