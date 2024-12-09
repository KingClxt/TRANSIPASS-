import { ArrowDown, ArrowRight, BusFront, Calendar, Calendar1Icon, CarFront, Hourglass, Timer, TimerIcon } from "lucide-react"

export const TrajetItem = ({depart, arrivée, durée})=>{
    return (
        <div className="border-2  rounded flex justify-between px-3 py-2">
            <div className="flex flex-col gap-2">
                <div className="flex  items-center gap-2 font-semibold justify-center">
                    <p className="flex gap-2 items-center text-gray-700">
                    <BusFront className="text-[#5D5FEF]" /> {depart}
                    </p>
                    <div className="w-full  flex justify-center">
                        <ArrowRight className="text-gray-900" />
                    </div>
                    <p className="text-gray-700">
                        {arrivée}
                    </p>
                </div>

                <p className="text-gray-700 flex items-center gap-1"><Calendar className="text-[#5D5FEF]" /> 12/12/2024, 08:12</p>
            </div>
            <div className="flex flex-col justify-center">
                <p className="font-bold text-gray-600">
                    Durée   
                </p>
                <p>{durée}</p>
            </div>
        </div>
    )
}