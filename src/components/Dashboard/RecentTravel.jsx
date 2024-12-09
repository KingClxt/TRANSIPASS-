


export const RecentTravel = ()=>{
    return (
        <div className="border rounded text-slate-800 w-full sm:w-2/3 bg-white">
            <h2 className="font-poppins font-bold px-3 py-4">Recent Travels</h2>
            <table className="w-full">
                <thead className="">
                    <tr className="bg-gray-100 italic font-poppins">
                        <th className="py-4">Depart</th>
                        <th>Arrivée</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center border-b last:border-none">
                        <td className="py-4">Yopougon</td>
                        <td>Corniche</td>
                        <td>
                            <span className="border px-5 py-1 rounded-full font-bold text-green-950 bg-green-300">Effectué</span>
                        </td>
                    </tr>
                    <tr className="text-center border-b last:border-none">
                        <td className="py-4">Yopougon</td>
                        <td>Corniche</td>
                        <td>
                            <span className="border px-5 py-1 rounded-full font-bold text-green-950 bg-green-300">Effectué</span>
                        </td>
                    </tr>
                    <tr className="text-center border-b last:border-none">
                        <td className="py-4">Yopougon</td>
                        <td>Corniche</td>
                        <td>
                            <span className="border px-5 py-1 rounded-full font-bold text-green-950 bg-green-300">Effectué</span>
                        </td>
                    </tr>
                    <tr className="text-center border-b last:border-none">
                        <td className="py-4">Yopougon</td>
                        <td>Corniche</td>
                        <td>
                            <span className="border px-5 py-1 rounded-full font-bold text-green-950 bg-green-300">Effectué</span>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}