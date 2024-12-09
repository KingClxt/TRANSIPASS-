import { CreditCard, QrCode, Star, Wallet } from "lucide-react"
import { CardQrPage } from "./CardQrPage"
import { Button } from "../Button"
import { ModalQr } from "./ModaleQr"



export const ContentQrPage = ()=>{
    return (
        <section className="px-6 mt-14 sm:mt-0 h-full flex items-center ">
            <div className="grid grid-cols-1 w-full sm:grid-cols-3 gap-4 font-poppins">
                <ModalQr />
                <CardQrPage>
                    <div className="flex justify-between items-center">
                        <p className="font-poppins font-semibold text-lg md:text-sm lg:text-lg">Solde</p>
                        <Wallet className="text-[#5D5FEF]"/>
                    </div>
                    <div className="flex flex-col h-full text-center gap-5 justify-center">
                        <div>
                            <p className="font-bold text-xl lg:text-4xl text-[#5D5FEF] ">12.000 FCFA</p>
                            <p>Disponible</p>
                        </div>
                        <Button classname="bg-[#5D5FEF] hover:bg-[#3b3edf]">
                            Recharger mon compte
                        </Button>
                    </div>
                </CardQrPage>
                <CardQrPage>
                    <div className="flex justify-between items-center">
                        <p className="font-poppins font-semibold text-lg md:text-sm lg:text-lg">Points</p>
                        <Star className="text-yellow-500"/>
                    </div>
                    <div className="flex flex-col h-full text-center gap-5 justify-center">
                        <div>
                            <p className="font-bold text-xl lg:text-4xl text-yellow-500 ">0</p>
                            <p>Points disponible</p>
                        </div>
                        <Button classname="bg-yellow-500 hover:bg-yellow-600">
                            Comment en obtenir ?
                        </Button>
                    </div>
                </CardQrPage>
            </div>
        </section>
    )
}