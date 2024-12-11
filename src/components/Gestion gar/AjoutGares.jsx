import DivChamp from "../DivChamp";
import Titre from "../Titre";
import Th from "../tableau/components/Th";
import Td from "../tableau/components/Td";
import { Button } from "../Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getGars, postGare } from "../../api/endpoints/gars";
import { Loader } from "lucide-react";
import { useState } from "react";
import DeleteModal from "../DeleteModal";
import EditModal from "../EditModal";
import { useSelector } from "react-redux";
import {getToken} from "../../selectors/userSelectors"
import { ValidationModal } from "../ValidateModal";
const entrepriseId = "675184da8f068852076b0427"


const AjoutGares = () => {

    const queryClient = useQueryClient()

    const token = useSelector(getToken)


    // RECUPERATION DES GARS
    const {data, isLoading} =  useQuery({
        queryKey:['gars'],
        queryFn:()=>getGars()
    })
    const [isReset, setIsReset] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

    // MUTATION AJOUT DE GAR
    const addMutation =  useMutation({
        mutationFn:(data)=>postGare(data,token),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['gars']})
            setIsReset(true)
            setIsCreateModalOpen(true)
        }
    })
    // MUTATION SUPPRESION DE GARS

    const handleAddGar = (e)=>{
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = {
                nom:formData.get('nom'),
                longitude:formData.get('longitude'),
                latitude:formData.get('latitude'),
                entrepriseId:formData.get('entrepriseId')
            }
            
            addMutation.mutate(data)
            e.target.reset()

    }
    return(
        <section className="mx-8 my-10 flex flex-col gap-10 font-poppins">
            <div className="w-full flex flex-col gap-5">
                <Titre titre="Ajouter / Créer une gare"/>
                <form onSubmit={handleAddGar} className="bg-white shadow-lg shadow-violet-400 rounded-lg px-5 py-7 ">
                    <fieldset className="space-y-0">
                        <DivChamp reset={isReset} name="nom" label="Nom de gare:" type="text"/>
                        <DivChamp reset={isReset} name="longitude" label="Longitude:" type="text"/>
                        <DivChamp reset={isReset} name="latitude" label="Latitude:" type="text"/>
                        <DivChamp reset={isReset} name="entrepriseId" label="Entreprise:" options={['SBTA', 'UTRAKO']} select/>
                        <Button classname="bg-[#5D5FEF] w-full hover:bg-[#4244d1]">Ajouter</Button>
                    </fieldset>
                </form>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg shadow-violet-400">
                <Titre titre="Infos Gare"/>

                <div className="p-5 w-full font-poppins ">
                    <table className="rounded border-collapse  border-spacing-0 border-gray-500 w-full">
                        <thead className="">
                            <tr className="bg-[#5D5FEF] rounded-t-lg text-white text-sm uppercase tracking-wide justify-center">
                                <Th>Nom de gare</Th>
                                <Th>Entreprise</Th>
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
                                            data.gares.length > 0? data.gares.map(item=>{
                                                
                                                return(
                                                    <>
                                                    
                                                        <tr>
                                                            <Td>{item.nom}</Td>
                                                            <Td>{item.entreprise.nom}</Td>
                                                            <Td>{item.localisation.longitude}</Td>
                                                            <Td>{item.localisation.latitude}</Td>
                                                            
                                                        </tr>
                                                        
                                                    </>

                                                    )}):<p></p>
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
export default AjoutGares;