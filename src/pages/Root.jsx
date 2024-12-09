
import { SideBarAdmin } from "../components/SidebareAdmin"
import { ContentDashboard } from "../components/ContentDashBoard"


export const Root = ()=>{
    return(
        <section className="flex bg-gray-100 min-h-screen">
            <SideBarAdmin />        
            <ContentDashboard />
        </section>
    )
}