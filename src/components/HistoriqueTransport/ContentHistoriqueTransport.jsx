import { RecentPayment } from "../Dashboard/RecentPayment"
import { RecentTrajets } from "../PublicTravel/RecentTrajets"


export const ContentHistoriqueTransport = ()=>{
    return (
        <section className="flex items-center sm:items-start h-full   my-14 sm:h-5/6 px-3 sm:px-10">
            <div className="w-full">
                <RecentTrajets text="Trajet effectué" />
            </div>
            {/* <RecentTrajets text="Rechargement / paiement" /> */}
        </section>
    )
}