import { Caravan, CarIcon, CircleDollarSign, HistoryIcon, LayoutDashboard, QrCodeIcon, Route, StopCircle, Verified, VerifiedIcon, Wallet } from "lucide-react"
import { SidbarItem } from "./SidbarItem"
import { Link } from "./Link"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { getRole } from "../selectors/userSelectors"

export const SidebarLargeScreen = ()=>{
    const location = useLocation()
    let currentPage = location.pathname.split('/')[2]
    useEffect(()=>{
        currentPage = location.pathname.split('/')[2]
    }, [])
    const role = useSelector(getRole)
    return (
        <ul className="">
                    {/* Liens de la sidbar */}
                    <SidbarItem link="/dashboard" active={currentPage === undefined}>
                        <LayoutDashboard />
                        <Link text="Dashboard" />
                    </SidbarItem>
                    {
                        role === '' && 
                        <>
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
                        </>
                    }
                    
                    {
                        role === 'admin' && 
                        <>
                            <SidbarItem link="/dashboard/gars" active={currentPage === "gars"}>
                                <Caravan />
                                <Link text="Gars" />
                            </SidbarItem>
                            <SidbarItem link="/dashboard/transaction" active={currentPage === "transaction"}>
                                <CircleDollarSign />
                                <Link  text="Transaction" />
                            </SidbarItem>
                            <SidbarItem link="/dashboard/verification" active={currentPage === "verification"}>
                                <Verified />
                                <Link  text="Verification" />
                            </SidbarItem>
                            <SidbarItem link="/dashboard/trajet" active={currentPage === "trajet"}>
                                <Route />
                                <Link  text="Trajets" />
                            </SidbarItem>
                            <SidbarItem link="/dashboard/arret" active={currentPage === "arret"}>
                                <StopCircle />
                                <Link  text="Arrets" />
                            </SidbarItem>
                        </>
                    }
                </ul>
    )
}