import clsx from "clsx"
import { NavLink } from "react-router-dom"


export const SidbarItem = ({children, active, smallScreen, classname, link})=>{
    // Mettre en evidence la page sur laquel nous nous trouvons
    const styleActive = active?
                                // Sur grand ecran
                                `   before:hidden before:sm:block after:hidden after:sm:block
                                    bg-gray-100 rounded-l-full text-black 
                                    before:content-['']  before:shadow-[20px_20px_0_white] before:shadow-gray-100  before:shadow-white  before:absolute before:block before:z-10  before:bg-[#5D5FEF] before:w-10 before:h-10 before:-top-[2.5rem] before:rounded-full  before:right-0
                                    before:content-['']  after:shadow-[20px_-20px_0_white] after:shadow-gray-100 after:shadow-white  after:absolute after:block after:z-10  after:bg-[#5D5FEF] after:w-10  after:h-10  after:-bottom-[2.5rem] after:rounded-full  after:right-0
                                `
                                :
                                // Sur petit ecran
                                ""

    return (
        <NavLink to={link} className={clsx(`flex flex-col sm:flex-row items-center shadow-off relative `, 
                            styleActive?styleActive:'text-white', 
                            classname,
                            smallScreen?"px-1":"gap-3 py-4  pl-3"
                        )}>
            {children}
        </NavLink> 
    )
}