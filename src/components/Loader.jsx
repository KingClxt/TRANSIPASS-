
import Lottie from "lottie-react";
import loader from "../assets/loader.json"
import { createPortal } from "react-dom";

export const Loader = ()=>{
    return ( 
        createPortal(
        <div className="fixed z-50 bottom-0 right-0 left-0 opacity-85 top-0 w-full h-full bg-black ">
            <div className=" absolute z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Lottie className="w-32" animationData={loader} loop={true} />
            </div>
        </div>,
        document.body
        )
    )
}