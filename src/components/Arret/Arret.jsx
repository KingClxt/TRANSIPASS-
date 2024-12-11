import DivChamp from "../DivChamp";
import Titre from "../Titre";
import Th from "../tableau/components/Th";
import Td from "../tableau/components/Td";
import { Button } from "../Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {  postGare } from "../../api/endpoints/gars";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {getToken} from "../../selectors/userSelectors"
import { ValidationModal } from "../ValidateModal";
import { getArret, postArret } from "../../api/endpoints/arret";

const Arret = () => {

    const queryClient = useQueryClient()
    const token = useSelector(getToken)


    // RECUPERATION DES GARS
    const {data, isLoading} =  useQuery({
        queryKey:['arret'],
        queryFn:()=>getArret()
    })
    const [isReset, setIsReset] = useState(false)
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    // MUTATION AJOUT DE GAR
    const addMutation =  useMutation({
        mutationFn:(data)=>postArret(data,token),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['arret']})
            setIsReset(true)    
            setIsCreateModalOpen(true)
        }
    })
    // MUTATION SUPPRESION DE GARS

    const handleAddArret = (e)=>{
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = {
                nom:formData.get('nom'),
                longitude:formData.get('longitude'),
                latitude:formData.get('latitude')
            }
            addMutation.mutate(data)
            e.target.reset()

    }
    return(
        <section className="mx-8 my-10 flex flex-col gap-10 font-poppins">
            <div className="w-full flex flex-col gap-5">
                <Titre titre="Ajouter Arret"/>
                <form onSubmit={handleAddArret} className="bg-white shadow-lg shadow-violet-400 rounded-lg px-5 py-7 ">
                    <fieldset className="space-y-0">
                        <DivChamp reset={isReset} name="nom" label="Nom de L'arret:" type="text"/>
                        <DivChamp reset={isReset} name="longitude" label="Longitude:" type="text"/>
                        <DivChamp reset={isReset} name="latitude" label="Latitude:" type="text"/>
                        <Button classname="bg-[#5D5FEF] w-full hover:bg-[#4244d1]">Ajouter</Button>
                    </fieldset>
                </form>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg shadow-violet-400">
                <Titre titre="Infos Arret"/>

                <div className="p-5 w-full font-poppins ">
                    <table className="rounded border-collapse  border-spacing-0 border-gray-500 w-full">
                        <thead className="">
                            <tr className="bg-[#5D5FEF] rounded-t-lg text-white text-sm uppercase tracking-wide justify-center">
                                <Th>Nom Arret</Th>
                                <Th>Longitude</Th>
                                <Th>Latitude</Th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                isLoading ?
                                <tr>
                                    <td colSpan={4}><Loader className="mx-auto my-5" /></td>
                                </tr>:(
                                    <>
                                        {
                                            data.arrets.length > 0? data.arrets.map((item, i)=>{
                                                
                                                return(
                                                    
                                                        <tr key={i}>
                                                            <Td>{item.nom}</Td>
                                                            <Td>{item.localisation.longitude}</Td>
                                                            <Td>{item.localisation.latitude}</Td>
                                                        </tr>

                                                    )}):<tr><td colSpan={3}><Loader className="mx-auto" /></td></tr>
                                                }
                                    </>
                                )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <ValidationModal isOpen={isCreateModalOpen} titre="Creation terminé" onClose={()=>setIsCreateModalOpen(false)} />
        </section>
    );
}
export default Arret;