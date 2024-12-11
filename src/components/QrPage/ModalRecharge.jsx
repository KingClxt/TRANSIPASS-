import { X } from "lucide-react"
import { Button } from "../Button"

export const ModalRecharge = ({ isOpen, onClose, handlePayment }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Recharger mon compte</h2>
                    <button onClick={onClose}>
                        <X className="h-6 w-6" />
                    </button>
                </div>

                <form onSubmit={handlePayment} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Montant à recharger (FCFA)
                        </label>
                        <input 
                            type="number" 
                            className="w-full outline-none p-2 border rounded-lg"
                            placeholder="Entrez le montant"
                            min="100"
                            name="montantRecharge"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Méthode de paiement
                        </label>
                        <select className="w-full outline-none p-2 border rounded-lg">
                            <option value="orange">Orange Money</option>
                            <option value="mtn">MTN Mobile Money</option>
                            <option value="moov">Moov Money</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                        <Button 
                            type="button"
                            classname="bg-red-600 hover:bg-red-700 text-black"
                            onClick={onClose}
                        >
                            Annuler
                        </Button>
                        <Button 
                            type="submit"
                            classname="bg-[#5D5FEF] hover:bg-[#3b3edf]"
                        >
                            Confirmer
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
