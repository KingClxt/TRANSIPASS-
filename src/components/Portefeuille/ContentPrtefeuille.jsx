import { RecentPayment } from "../Dashboard/RecentPayment"
import { CardSolde } from "./CardSolde"



export const ContentPortefeuille = ()=>{
    return (
        <section className="container px-5 sm:px-10 mt-28 sm:mt-16">
            <div className="flex flex-col gap-4 h-full">
                <CardSolde />
                <RecentPayment isPortefeuil />
            </div>
        </section>
    )
}