import { DollarSign, Download, Plus, Wallet } from "lucide-react"
import { Button } from "../Button"



export const CardSolde = ({solde})=>{
    return (
        <div className="font-poppins flex flex-col gap-3 shadow-lg px-6 py-9 text-white bg-gradient-to-l from-violet-700 to-[#5D5FEF] rounded">
            <div className="flex justify-between">
                <p className=" text-2xl">Solde</p>
                <Wallet />
            </div>
            <p className="font-bold my-2 text-xl sm:text-4xl">
                {solde} FCFA
            </p>
            <Button classname="bg-violet-400 flex justify-center items-center">
                <Plus /> Recharger mon compte
            </Button>
        </div>
    )
}