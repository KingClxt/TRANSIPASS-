import { Search, User, User2Icon, UserCheck2 } from "lucide-react"
import { Input } from "./Input"
import { useState } from "react"
import clsx from "clsx"
import { AnimatePresence, motion } from "motion/react"
import { div } from "motion/react-client"
import { SearchInput } from "./SearchInput"
import { useDispatch } from "react-redux"
import { Logout } from "../actions/loginActions"
import { persistor } from "../store"
import { useNavigate } from "react-router-dom"



export const DashBoardNav = ()=>{
    const navigate = useNavigate()

    const [isOpen, setOpen] = useState(false)
    const toggleMenu = ()=>{
        setOpen(!isOpen)
    }
    const [openNav, setOpenNav] = useState(false)
    const toggleNav = ()=>{
        setOpenNav(!openNav)
    }
    const dispatch = useDispatch()

    const logout = async()=>{
        await persistor.purge()
        dispatch(Logout)
        navigate('/')
        
    }
    return (
        <div className="relative">
            <ul className="flex fixed sm:relative z-50 items-center overflow-x-hidden shadow-md h-[4.5rem] w-full justify-between px-4 bg-white">
                <li>
                    <p className="md:text-xl hidden sm:block lg:text-3xl font-bold font-poppins text-gray-900">
                        DASHBOARD
                    </p>
                    <p className=" text-2xl block sm:hidden lg:text-3xl font-bold font-poppins text-gray-900">
                        TRANSIPASS CI
                    </p>
                </li>
                {/* Left side of navbar */}
                <div className="hidden sm:flex gap-2 justify-end w-full">
                    <SearchInput />
                    <li onClick={toggleMenu} className=" cursor-pointer flex items-center gap-3">
                        <div className="w-10 ring-offset-2 ring-2 ring-gray-400 h-10 bg-gray-600 rounded-full">
                        </div>
                        <p>
                            KingClxt
                        </p>
                    </li>
                </div>
                {/* Left side of small navbar */}
                <div onClick={toggleNav} className="flex relative items-center -top-2 -left-4 justify-center flex-col sm:hidden cursor-pointer">

                    <motion.div 
                        animate={openNav?{rotate:45, y:5}:null}
                        className="w-9 h-1 -top-1 my-1 absolute  bg-black rounded-full">
                    </motion.div>

                    <motion.div 
                        animate={openNav?{opacity:0, x:20}:null}
                        className="w-9 h-1 my-1 top-1 absolute  bg-black rounded-full">
                    </motion.div>
                    
                    <motion.div 
                        animate={openNav?{rotate:-45, y:-10}:null}
                        className="w-9 h-1 my-1 top-3 absolute  bg-black rounded-full">
                    </motion.div>
                </div>
            </ul>

                {/* Affichage du menus */}
                
                {
                    (isOpen && !openNav) && <ul className=" z-50 absolute right-1 rounded text-sm border -bottom-[6rem] w-[11rem] bg-white">
                    <li className="border-b px-5 py-3 hover:bg-gray-100 cursor-pointer transition-all">Modifier mon profile</li>
                    <li onClick={logout} className=" px-5 py-3 hover:bg-gray-100 cursor-pointer transition-all text-red-500">Deconnexion</li>
                </ul>
                }

                {/* Affichage du menu apres clique sur l'icon hamburger */}
                <div className="flex justify-center">
                    <AnimatePresence>
                    {
                        openNav && <DropNav openNav={openNav} toggleMenu={toggleMenu} isOpen={isOpen} />
                    }
                    </AnimatePresence>
                </div>
        </div>
    )   
}

const DropNav = ({toggleMenu, isOpen, openNav})=>{
    return (
        <motion.ul 
            exit={{opacity:0, y:-25}}
            initial={{opacity:0, y:-25}}
            animate={{opacity:1, y:0}}
            className="rounded z-50 flex flex-col  fixed w-[90%] top-20 border-2 bg-white">
            <li onClick={toggleMenu} className="px-4 py-3 cursor-pointer flex relative items-center gap-3 border-b">
                    <div className="w-10 flex justify-center items-center ring-offset-2 ring-2 ring-gray-400 h-10 bg-gray-600 rounded-full ">
                        <User2Icon />
                    </div>
                    <p>
                        KingClxt
                    </p>
                   
            </li>
            <li className="border-b px-5 py-3  cursor-pointer transition-all">Modifier mon profile</li>
            <li className="border-b px-5 py-3  cursor-pointer transition-all text-red-500">Deconnexion</li>
            <SearchInput />
                                
        </motion.ul>
    )
}
