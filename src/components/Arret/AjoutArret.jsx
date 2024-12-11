import { useReducer, useState } from "react"
import { Button } from "../Button"
import { Loader, Plus, Trash } from "lucide-react"
import {v4 as uuidv4} from "uuid"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getArret } from "../../api/endpoints/arret"
import { postTrajet } from "../../api/endpoints/trajet"

function reducer(state, action){
    switch(action.type){
        case 'add':
            const newState = [...state, action.payload]
            return newState
        default:
            break
    }
}

export const AjoutArret = ({data, isLoading})=>{
    

// ----------------------------------------------------

// RECUPERER 
const {data, isLoading} =  useQuery({
    queryKey:['arret'],
    queryFn:()=>getArret()
})

// MUTATION POST TRAJET
    const mutation = useMutation({
        mutationFn:(data)=>postTrajet(data, token),
        onSuccess:(data)=>{
            queryClient.invalidateQueries({queryKey:['trajet']})
            setOpenModal(true)
        }
    })
    const handleSubmit = (e)=>{
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const data = {

            }
    }


// =---------------------------------------------------


    const [input, setInput] = useState('')
    const [arrets, dispatch] = useReducer(reducer, [])
    const handleChange = (e)=>{
        setInput(e.target.value)
    }
    const handleAdd = ()=>{
            dispatch({
                type:'add',
                payload:{
                    id:uuidv4(),
                    titre:input
                }
            })
            setInput('')
    }
    return (
        <div className="flex flex-col gap-3">
        
        <label htmlFor="" className='ml-4  text-xl font-bold text-[#5D5FEF]'>Ajouter Arrets</label>
        <div  className="px-3  pb-3 mx-2 flex flex-col sm:flex-row gap-2 ">
            <select onChange={handleChange} type="text" className="bg-white border-2 rounded-lg focus:border-[#5D5FEF] w-full py-2 sm:py-0 sm:w-5/6 outline-none px-3" >
                {
                    isLoading ? <Loader />
                    :(
                        data.arrets.map(item=><option value={item.id}>{item.nom}</option>)
                    )
                }
            </select>
            <Button button onClick={handleAdd} classname="border w-full sm:w-1/6 border-[#5D5FEF]  flex justify-center">
                <Plus className="text-[#5D5FEF]" />
            </Button>
        </div>
            {
                data.length > 0 && <ul className="border-2 rounded m-4 border-dashed mt-2">
                    {
                        arrets.map(arret=><ItemArret key={arret.id} onDelete={null} titre={arret.titre} />)
                    }
                </ul>
            }
        </div>
    )
}
const ItemArret = ({titre, onDelete})=>{
    return (
        <li className="py-3 flex  items-center justify-between px-5 border-dashed border-b-2 last:border-0">
            <p className="font-bold">{titre}</p>
            <Button onClick={onDelete} classname="bg-red-400 "><Trash /></Button>
        </li>
    )
}