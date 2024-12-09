import { CreditCard, QrCode, Star, Wallet } from "lucide-react"
import { CardQrPage } from "./CardQrPage"
import { Button } from "../Button"



export const ContentQrPage = ()=>{
    return (
        <section className="px-6 mt-14 sm:mt-0 h-full flex items-center">
            <div className="grid grid-cols-1 w-full sm:grid-cols-3 gap-4 font-poppins">
                <CardQrPage>
                    <div className="flex justify-between items-center">
                        <h3 className="font-poppins font-semibold text-lg md:text-sm lg:text-lg">Achat de ticket via Qr</h3>
                        <CreditCard className="text-[#5D5FEF]"/>
                    </div>
                    <div className="h-full flex justify-center items-center">
                        <img src="/Qrcode_wikipedia_fr_v2clean.png" className="h-4/5" alt="" />
                    </div>
                    <p className="text-center">Scannez pour acheter</p>
                </CardQrPage>
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