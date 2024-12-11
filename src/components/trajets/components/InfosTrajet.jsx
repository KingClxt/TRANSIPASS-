import Th from "../../tableau/components/Th";
import Td from "../../tableau/components/Td";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { getTrajet } from "../../../api/endpoints/trajet";

const InfosTrajet = () => {
    const {data, isLoading} = useQuery({
        queryKey:['trajet'],
        queryFn:()=>getTrajet()
    })
    return(
        <>
            <div className="">
                <table className="w-full border-collapse border-spacing-0 border-gray-500">
                    <thead className="bg-[#5D5FEF] text-white text-sm uppercase tracking-wide justify-center">
                        <tr>
                            <Th>Départs</Th>
                            <Th>Arrivées</Th>
                            <Th>Coût</Th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            isLoading?
                            <tr>
                                <td colSpan={4}><Loader className="my-5 mx-auto" /></td>
                            </tr>:(
                                data?.trajets.length > 0
                                    ?data.trajets.map((item, i)=>(
                                        <tr key={i}>
                                        <Td>{item.gareDepart.nom}</Td>
                                        <Td>{item.gareArrivee.nom}</Td>
                                        {/* <Td>Bus</Td> */}
                                        <Td>{item.cout} FCFA</Td>
                                    </tr>
                                    ))
                                    :
                                    <tr>
                                        <td colSpan={4}>Aucun trajets disponible</td>
                                    </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default InfosTrajet