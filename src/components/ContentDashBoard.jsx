
import { Outlet } from "react-router-dom"
import { DashBoardNav } from "./DashBoardNav"


export const ContentDashboard = ()=>{
    return (
        <section className="w-full pb-24 overflow-y-hidden sm:w-3/4 sm:pb-10">
            <DashBoardNav />
            <Outlet />
        </section>
    )
}