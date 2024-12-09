
import { SideBarAdmin } from "../components/SidebareAdmin"
import { ContentDashboard } from "../components/ContentDashBoard"
import ParticlesComposant from "../components/Dashboard/ParticlesComposant"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export const Root = ()=>{   
    const user = useSelector(({userReducer})=>userReducer)
    const navigate = useNavigate()

    useEffect(()=>{
        if(Object.keys(user).length === 0){
            navigate('/signin')
        }
    }, [navigate, user])
    
    return(
        <section className="flex bg-gray-100 min-h-screen">
            <ParticlesComposant />
            <SideBarAdmin />        
            <ContentDashboard />
        </section>
    )
}