// import Status from './components/Status';
import Th from './components/Th';
import Td from './components/Td';

const Tableau = () => {
    return(
        <>
            <div className="w-3/5 rounded-lg border border-gray-300 m-10">
                <h1 className='my-5 text-xl font-bold ml-3'>Recharge / Paiement</h1>
                <table className="w-full table-auto border-collapse border-spacing-0 border-gray-500">
                    <thead className="bg-[#5D5FEF] text-white text-sm uppercase tracking-wide justify-center">
                        <tr>
                            <Th>Référence</Th>
                            <Th>Nom</Th>
                            <Th>Prénom</Th>
                            <Th>Date</Th>
                            <Th>Montant rechargé</Th>
                            <Th>Solde actuel</Th>
                        </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <Td>1</Td>
                            <Td>Kouaho</Td>
                            <Td>David</Td>
                            <Td>08/12/2024</Td>
                            <Td>5000f</Td>
                            <Td>15000f</Td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Tableau;