
import { Outlet } from "react-router-dom"
import { DashBoardNav } from "./DashBoardNav"


export const ContentDashboard = ()=>{
    return (
        <section className="w-full sm:w-3/4 pb-28 sm:pb-10">
            <DashBoardNav />
            <Outlet />
        </section>
    )
}