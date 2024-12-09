import { Search } from "lucide-react"


export const SearchInput = ()=>{
    return (
        <li className="w-5/6 py-1 sm:px-0 sm:py-0 sm:w-3/4 mx-auto relative">
                    <input type="text" className="border focus:ring-4 ring-gray-200 transition-all py-2 rounded-full w-full pl-10 text-gray-600 outline-none" />
                    <Search className="text-gray-300 absolute  top-1/2 left-3 -translate-y-1/2 " />
        </li>
    )
}