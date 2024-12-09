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

                    <SidbarItem link="/dashboard/qrcode" active={currentPage === "qrcode"}>
                        <QrCodeIcon />
                        <Link link="/dashboard/qrcode" text="Code Qr" />
                    </SidbarItem>

                    <SidbarItem link="/dashboard/rechargement/historique" active={currentPage === "rechargement"}>
                        <HistoryIcon />
                            <Link link="/dashboard/rechargement/historique" text="Historique de recharge" />
                    </SidbarItem>

                    <SidbarItem link="/dashboard/transport/historique" active={currentPage === "transport"}>
                            <CarIcon />
                            <Link link="/dashboard/transport/historique" text="Historique de transport" />
                    </SidbarItem>

                    <SidbarItem link="/dashboard/portefeuille" active={currentPage === "portefeuille"}>
                        <Wallet />
                        <Link link="/dashboard/portefeuille" text="Portefeuille" />
                    </SidbarItem>

                    <SidbarItem link="/dashboard/travel" active={currentPage === "travel"}>
                            <Caravan />
                            <Link link="/dashboard/travel" text="Transport public" />
                    </SidbarItem>
                </ul>
    )
}