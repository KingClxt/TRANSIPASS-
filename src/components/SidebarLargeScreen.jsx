import { Caravan, CarIcon, HistoryIcon, LayoutDashboard, QrCodeIcon, Wallet } from "lucide-react"
import { SidbarItem } from "./SidbarItem"
import { Link } from "./Link"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export const SidebarLargeScreen = ()=>{
    const location = useLocation()
    let currentPage = location.pathname.split('/')[2]
    useEffect(()=>{
        currentPage = location.pathname.split('/')[2]
    }, [])
    return (
        <ul className="">
                    {/* Liens de la sidbar */}
                    <SidbarItem link="/dashboard" active={currentPage === undefined}>
                        <LayoutDashboard />
                        <Link text="Dashboard" />
                    </SidbarItem>

                    <SidbarItem  active={currentPage === "qrcode"}>
                        <QrCodeIcon />
                        <Link link="/dashboard/qrcode" text="Code Qr" />
                    </SidbarItem>

                    <SidbarItem active={currentPage === "rechargement"}>
                        <HistoryIcon />
                            <Link link="/dashboard/rechargement/historique" text="Historique de recharge" />
                    </SidbarItem>

                    <SidbarItem active={currentPage === ""}>
                            <CarIcon />
                            <Link text="Historique de transport" />
                    </SidbarItem>

                    <SidbarItem active={currentPage === "portefeuille"}>
                        <Wallet />
                        <Link link="/dashboard/portefeuille" text="Portefeuille" />
                    </SidbarItem>

                    <SidbarItem active={currentPage === "travel"}>
                            <Caravan />
                            <Link link="/dashboard/travel" text="Transport public" />
                    </SidbarItem>
                </ul>
    )
}