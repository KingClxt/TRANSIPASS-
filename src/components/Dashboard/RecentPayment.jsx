import { Loader } from "lucide-react"
import { RecentPaymentItem } from "./RecentPaymentItem"


export const RecentPayment = ({isPortefeuil, payments, isLoading, isError, limit = null})=>{
    if(!isLoading){
        console.log(payments);
    }
    const paymentsList = limit && !isLoading ? payments?.slice(0,limit):payments
    return (
        <div className={`border shadow h-full w-full text-slate-800 ${isPortefeuil?"":"sm:w-1/3"}`}>
            <h2 className="py-4 px-3 rounded-t bg-white font-bold font-poppins border-b">
                Recent Payment
            </h2>
            {
                isError ?
                            <div className="text-center py-5 font-semibold">
                                Aucune recharge pour le moment
                            </div>:null
            }
            {
                isLoading 
                ?
                <Loader className="mx-auto my-4" />
                :(
                    payments?.length > 0 ?
                                        <div className="text-sm lg:text-md rounded-b">
                                            {
                                                paymentsList.map(item=><RecentPaymentItem price={item.montant} date={item.date} titre="Rechargement via wave" />)
                                            }
                                            
                                            </div>
                                        :
                                        <p></p>
                )
                
               
            }
        </div>
    )
}