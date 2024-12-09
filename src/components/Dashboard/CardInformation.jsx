import clsx from "clsx"


export const CardInformation = ({classname, children, color})=>{

    // Gestion du fond des cards d'information en fonction de l'attibut color
    let style = color === 'violet'?'from-[#5D5FEF] to-[#8a8cea]  text-white':"from-white to-white";

    return (

        <div className={clsx(classname,
                            'flex border text-[15px] md:text-[13px] lg:text-lg font-poppins uppercase rounded px-5 py-10 items-center gap-3 font-bold bg-gradient-to-b', style
                            )}>
            {children}
        </div>

    )
}