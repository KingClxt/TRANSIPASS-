
import { SideBarAdmin } from "../components/SidebareAdmin"
import { ContentDashboard } from "../components/ContentDashBoard"
import ParticlesComposant from "../components/Dashboard/ParticlesComposant"

export const Root = ()=>{
    return(
        <section className="flex bg-gray-100 min-h-screen">
            <ParticlesComposant />
            <SideBarAdmin />        
            <ContentDashboard />
        </section>
    )
}