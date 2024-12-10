
import { SideBarAdmin } from "../components/SidebareAdmin"
import { ContentDashboard } from "../components/ContentDashBoard"
import ParticlesComposant from "../components/Dashboard/ParticlesComposant"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { PrivateRoute } from "../components/PrivateRoute"

export const Root = ()=>{   
    
    return(
        <PrivateRoute>

        <section className="flex bg-gray-100 min-h-screen">
            <ParticlesComposant />
            <SideBarAdmin />        
            <ContentDashboard />
        </section>
        </PrivateRoute>
    )
}