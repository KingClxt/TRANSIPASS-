import { useSelector } from "react-redux";
import { Button } from "../../Button";
import DivChamp from "./DivChamp";
import { getToken } from "../../../selectors/userSelectors";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postTrajet } from "../../../api/endpoints/trajet";
import { ValidationModal } from "../../ValidateModal";
import { useEffect, useState } from "react";
import { getArret } from "../../../api/endpoints/arret";
import { Loader, Plus } from "lucide-react";

const AjoutTrajet = () => {

    // Recuperatiom du query client
    const queryClient = useQueryClient()

    const token = useSelector(getToken)

    const [isOpenModal , setOpenModal] = useState(false)

    // RECUPERER 
    const {data, isLoading} =  useQuery({
        queryKey:['arret'],
        queryFn:()=>getArret()
    })

    const [arrets, setArrets] = useState(null)
    useEffect(()=>{
        setArrets(data)
    }, [])
    

    // MUTATION POST TRAJET
    const mutation = useMutation({
        mutationFn:(data)=>postTrajet(data, token),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['trajet']})
            setOpenModal(true)
        }
    })
    const handleSubmit = (e)=>{
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = {

            }
    }
    return(
        <>
            <form action="" className="bg-white shadow-lg  rounded-lg p-6 w-full ">
                <fieldset className="space-y-0  ">
                    <DivChamp label="Départ:" type="text"/>
                    <DivChamp label="Arrivée:" type="text"/>
                    <DivChamp label="Mode de transport:" type="text"/>
                    
                    <div className="flex flex-col gap-3">
        
                            <label htmlFor="" className='ml-4  text-xl font-bold text-[#5D5FEF]'>Ajouter Arrets</label>
                            <div  className="px-3  pb-3 mx-2 flex flex-col sm:flex-row gap-2 ">
                                <select onChange={null} type="text" className="bg-white border-2 rounded-lg focus:border-[#5D5FEF] w-full py-2 sm:py-0 sm:w-5/6 outline-none px-3" >
                                    {
                                        isLoading ? <Loader />
                                        :(
                                            data.arrets.map((item, i)=><option key={i} value={item.id}>{item.nom}</option>)
                                        )
                                    }
                                </select>
                                <Button button onClick={null} classname="border w-full sm:w-1/6 border-[#5D5FEF]  flex justify-center">
                                    <Plus className="text-[#5D5FEF]" />
                                </Button>
                            </div>
                                {/* {
                                    arrets.length > 0 && <ul className="border-2 rounded m-4 border-dashed mt-2">
                                        {
                                            arrets.map(arret=><ItemArret key={arret.id} onDelete={null} titre={arret.titre} />)
                                        }
                                    </ul>
                                } */}
                    </div>

                    <Button classname="bg-[#5D5FEF] w-full">Sauvegarder</Button>
                </fieldset>
            </form>
            <ValidationModal titre="Création terminé" isOpen={isOpenModal} onClose={()=>setOpenModal(false)} />
        </>
    );
}
export default AjoutTrajet;

const ItemArret = ({titre, onDelete})=>{
    return (
        <li className="py-3 flex  items-center justify-between px-5 border-dashed border-b-2 last:border-0">
            <p className="font-bold">{titre}</p>
            <Button onClick={onDelete} classname="bg-red-400 "><Trash /></Button>
        </li>
    )
}