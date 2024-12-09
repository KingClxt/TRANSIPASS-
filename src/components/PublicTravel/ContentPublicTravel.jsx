
import { Input } from "../Input"
import { CarteBox } from "./CarteBox"
import { RecentTrajets } from "./RecentTrajets"



export const ContentPublicTravel = ()=>{
    
    return (
        <section className="px-5 sm:px-10 pt-20 sm:pt-0 mt-5 flex flex-col gap-5">
            <div className="flex flex-col justify-center items-center w-full mx-auto gap-2 ">
                <ul className="w-full">
                    <Input placeholder="Ou allez-vous ?" classname="w-full" />
                </ul>
                {/* <Button classname="w-full bg-[#5D5FEF] px-4 rounded-lg">
                    Trouver le gar la plus proche
                </Button> */}
            </div>
            <CarteBox />
            <RecentTrajets text="Trajet Recent" />
        </section>
    )
}