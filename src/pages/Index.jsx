import { useNavigate } from "react-router-dom"


export const Index = ()=>{
    const navigate = useNavigate()
    navigate('/dashboard/')
}