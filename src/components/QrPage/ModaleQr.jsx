import { useState } from "react"
import { CardQrPage } from "./CardQrPage"
import { CreditCard } from "lucide-react"
import { Button } from "../Button"
import QRScanner from "./QrCode"

export const ModalQr = ()=>{
    const [isOpen, setIsModalOpen] = useState(false)
    const handleQRResult = (result) => {  
        console.log('Code QR scanné :', result)  
        // Traitez le résultat comme vous le souhaitez  
      }  
      console.log(isOpen);
      
    return (
        <>
        
            <div className="cursor-pointer" onClick={()=>setIsModalOpen(true)}>
                    <CardQrPage>
                        <div className="flex justify-between items-center">
                            <h3 className="font-poppins font-semibold text-lg md:text-sm lg:text-lg">Achat de ticket via Qr</h3>
                            <CreditCard className="text-[#5D5FEF]"/>
                        </div>
                        <div className="h-full flex flex-col justify-center items-center">
                            <img src="/Qrcode_wikipedia_fr_v2clean.png" className="h-4/5" alt="" />
                        <p className="text-center my-2 font-semibold text-lg">Scannez pour acheter</p>
                        </div>
                    </CardQrPage>
                    
            </div>
                    {
                        isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg w-full max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold">Scanner un QR Code</h3>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="aspect-square bg-gray-100 mb-4">
                                <div>
                                    <QRScanner onResult={handleQRResult} /> 
                                </div>
                            </div>
                            <Button 
                                onClick={() => setIsModalOpen(false)}
                                classname="bg-[#5D5FEF] hover:bg-[#3b3edf] w-full"
                            >
                                Fermer
                            </Button>
                        </div>
                    </div>
                    }
        </>
    )
}