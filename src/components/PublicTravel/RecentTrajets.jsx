import { TrajetItem } from "./TrajetItem"



export const RecentTrajets = ({text})=>{
    return (
        <div className="p-5 border pt-0 shadow-lg w-full bg-white rounded-lg font-poppins">
            <h2 className="font-bold my-5 text-xl text-gray-600">{text}</h2>
            <div className="flex flex-col gap-3">
                <TrajetItem arrivée="Corniche" depart="Adjamé" durée="30min" />
                <TrajetItem arrivée="Corniche" depart="Adjamé" durée="30min" />
                <TrajetItem arrivée="Corniche" depart="Adjamé" durée="30min" />
            </div>
        </div>
    )
}