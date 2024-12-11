// import Bouton from "../../pages/pageAccueil/components/hero/components/Bouton";
// import Titre from "../Titre";
import Th from "../tableau/components/Th";
import Td from "../tableau/components/Td";
import { Button } from "../Button";
import Titre from "../Titre";


const Verification = () => {
    return(
        <>
            <div className="flex flex-col justify-center h-full pt-20 gap-10 p-3 sm:p-10 font-poppins">
                <div className="flex flex-col gap-5 bg-white p-10 rounded-lg shadow-md">
                    <form action="" className="">
                        <fieldset className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row items-center gap-3 border border-[#5D5FEF] p-6 rounded-xl">
                                <label htmlFor="" className="text-[#5D5FEF] font-bold text-2xl">Code ticket:</label>
                                <input type="text" className="border outline-none rounded border-[#5D5FEF] border-spacing-1 p-2 w-4/5"/>
                            </div>

                            <Button classname="bg-[#5D5FEF] uppercase">Verification</Button>
                        </fieldset>
                    </form>

                    <div className="w-5/5 bg-[#5D5FEF] rounded-xl py-5  border-black border-spacing-1">
                        <h1 className="text-white flex items-center uppercase justify-center font-bold text-2xl">État du ticket</h1>
                    </div>
                </div>

                <div className="text-start flex rounded-lg shadow-md flex-col gap-2 bg-white px-1 py-5  sm:p-10">
                    <Titre titre="Infos usager" className="text-start"/>

                    <div className="rounded-xl w-full border border-gray-300">
                        <table className="w-full table-auto border-collapse border-spacing-0 border-gray-500">
                            <thead className="bg-[#5D5FEF] w-full text-white text-[10px] sm:text-sm uppercase  tracking-wide justify-center">
                                <tr className="">
                                    <Th>Nom</Th>
                                    <Th>Prénom</Th>
                                    <Th>Date</Th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <Td>Kouaho</Td>
                                    <Td>David</Td>
                                    <Td>08/12/2024</Td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Verification;