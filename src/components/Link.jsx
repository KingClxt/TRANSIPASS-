import clsx from "clsx"
import { NavLink } from "react-router-dom"


export const Link = ({link, classname, text, active})=>{

    return (
        <div  className={clsx('font-semibold text-[10px] max-[468px]:text-[8px] max-[400px]:text-[7px] sm:text-lg', classname)}>
            {text}
        </div>
    )
}