import { Caravan, CarIcon, HistoryIcon, LayoutDashboard, QrCodeIcon, Wallet } from "lucide-react"
import { SidbarItem } from "./SidbarItem"
import { Link } from "./Link"


export const SidebarSmallScreen = ()=>{
    return (
            <aside className="h-16  sm:hidden justify-between items-center flex fixed bottom-0 w-full bg-[#5D5FEF]">
                <SidbarItem smallScreen>
                        <LayoutDashboard/>
                        <Link link="/dashboard" classname="text-[10px]" text="Dashboard" />
                    </SidbarItem>

                    <SidbarItem smallScreen>
                        <QrCodeIcon />
                        <Link ink="/dashboard/qrcode" text="Code Qr" classname="" />
                    </SidbarItem>

                    <SidbarItem smallScreen>
                        <HistoryIcon />
                            <Link link="/dashboard/rechargement/historique" classname="text-[10px]" text="Historique de recharge" />
                    </SidbarItem>

                    <SidbarItem smallScreen>
                            <CarIcon />
                            <Link classname="text-[10px]" text="Historique transport" />
                    </SidbarItem>

                    <SidbarItem smallScreen>
                        <Wallet />
                        <Link link="/dashboard/portefeuille" classname="text-[10px]" text="Portefeuille" />
                    </SidbarItem>

                    <SidbarItem smallScreen>
                            <Caravan />
                            <Link link="/dashboard/travel" classname="text-[10px]" text="Transport public" />
                    </SidbarItem>
            </aside>
        )
}