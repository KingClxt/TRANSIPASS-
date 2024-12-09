import { RecentPaymentItem } from "./RecentPaymentItem"


export const RecentPayment = ({isPortefeuil})=>{
    return (
        <div className={`border shadow h-full w-full text-slate-800 ${isPortefeuil?"":"sm:w-1/3"}`}>
            <h2 className="py-4 px-3 rounded-t bg-white font-bold font-poppins border-b">
                Recent Payment
            </h2>
            <div className="text-sm lg:text-md rounded-b">
                <RecentPaymentItem price="10.000" titre="Rechargement via wave" />
                <RecentPaymentItem price="10.000" titre="Rechargement via wave" />
                <RecentPaymentItem price="10.000" titre="Rechargement via wave" />
                <RecentPaymentItem price="10.000" titre="Rechargement via wave" />
                
            </div>
        </div>
    )
}