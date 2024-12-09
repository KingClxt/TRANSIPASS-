import { Caravan, CarIcon, HistoryIcon, LayoutDashboard, QrCodeIcon, Wallet } from "lucide-react"
import { SidbarItem } from "./SidbarItem"
import { Link } from "./Link"


export const SidebarSmallScreen = ()=>{
    return (
            <aside className="h-16  sm:hidden justify-between items-center flex  fixed bottom-0 w-full bg-[#5D5FEF]">
                    <SidbarItem link="/dashboard" smallScreen>
                        <LayoutDashboard/>
                        <Link  classname="text-[10px]" text="Dashboard" />
                    </SidbarItem>

                    <SidbarItem link="/dashboard/qrcode" smallScreen>
                        <QrCodeIcon />
                        <Link  text="Code Qr" classname="" />
                    </SidbarItem>

                    <SidbarItem link="/dashboard/rechargement/historique" smallScreen>
                        <HistoryIcon />
                            <Link  classname="text-[10px]" text="Historique de recharge" />
                    </SidbarItem>

                    <SidbarItem smallScreen>
                            <CarIcon />
                            <Link classname="text-[10px]" text="Historique transport" />
                    </SidbarItem>

                    <SidbarItem link="/dashboard/portefeuille" smallScreen>
                        <Wallet />
                        <Link  classname="text-[10px]" text="Portefeuille" />
                    </SidbarItem>

                    <SidbarItem link="/dashboard/travel" smallScreen>
                            <Caravan />
                            <Link  classname="text-[10px]" text="Transport public" />
                    </SidbarItem>
            </aside>
        )
}