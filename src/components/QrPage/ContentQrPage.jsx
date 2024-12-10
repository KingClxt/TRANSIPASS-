import { CreditCard, QrCode, Star, Wallet } from "lucide-react"
import { CardQrPage } from "./CardQrPage"
import { Button } from "../Button"
import { ModalQr } from "./ModaleQr"
import { useState } from "react"
import { ModalRecharge } from "./ModalRecharge"
import ValidationPaiement from "./ValidationPaiement"
import { useDispatch, useSelector } from "react-redux"
import { getToken, getUser } from "../../selectors/userSelectors"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postPayement } from "../../api/endpoints/payment"
import { Loader } from "../Loader"
import { Rechargement } from "../../actions/loginActions"



export const ContentQrPage = ()=>{
    const queryClient = useQueryClient()

    const dispatch = useDispatch()

    // Recuperer l'id de l'user connecter
    const {id, solde} = useSelector(getUser)
    const token = useSelector(getToken)

    
    // Gestion de l'ouverture et de la fermeture des modals
    const [isRechargeOpen, setIsRechargeOpen] = useState(false)
    const [isValidate, setisValidate] = useState(false)
    
    // FONTION DE MUTATION(POST DATA)
    const mutation = useMutation({
        mutationFn:(data)=>postPayement(token, data),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['payement', id]})
            setIsRechargeOpen(false)
            setisValidate(true)
            dispatch(Rechargement(data.soldeActuel))
        }
    })

    // fonction pour lancer le paiement
    const handlePayment = (e)=>{
        e.preventDefault()
        const fomeData = new FormData(e.currentTarget)
        const data = {
            usagerId:id,
            montantRecharge:fomeData.get('montantRecharge')
        }
        mutation.mutate(data)
    }
    return (
        <>
        
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
                            <p className="font-bold text-xl lg:text-4xl text-[#5D5FEF] ">{solde} FCFA</p>
                            <p>Disponible</p>
                        </div>
                        <Button 
                            classname="bg-[#5D5FEF] hover:bg-[#3b3edf]"
                            onClick={() => setIsRechargeOpen(true)}
                        >
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
            <ModalRecharge 
                isOpen={isRechargeOpen} 
                handlePayment={handlePayment}
                onClose={() => setIsRechargeOpen(false)} 
            />
            <ValidationPaiement isOpen={isValidate} onClose={()=>setisValidate(false)} />
        </section>
        {
            mutation.isPending && <Loader />
        }
        </>
    )
}