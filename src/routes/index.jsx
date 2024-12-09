import {Connexion} from "../pages/Connexion";
import { Inscription } from "../pages/Inscription";
import {ContentDashboard} from '../components/ContentDashBoard'
import { Root } from "../pages/Root";
import { ContentQrPage } from "../components/QrPage/ContentQrPage";
import { DashboardBodyClient } from "../components/Dashboard/DashboardBodyClient"
import { ContentPortefeuille } from "../components/Portefeuille/ContentPrtefeuille";
import { ContentPublicTravel } from "../components/PublicTravel/ContentPublicTravel";
import { ContentHistoriqueRecharge } from "../components/HistoriqueRecharge/ContentHistoriqueRecharge";
import { Index } from "../pages/Index";
import { ContentHistoriqueTransport } from "../components/HistoriqueTransport/ContentHistoriqueTransport";
export const routes = [
    {
        path:'/',
        element:<Index />
    },
    {
        path:'/signin',
        element:<Connexion/>
    },
    {
        path:'/signup',
        element:<Inscription />
    },
    {
        path:'/dashboard',
        element:<Root />,
        children:[
            {
                path:'',
                element:<DashboardBodyClient />
            },{
                path:'qrcode',
                element:<ContentQrPage />
            },{
                path:'portefeuille',
                element:<ContentPortefeuille />
            },
            {
                path:'travel',
                element:<ContentPublicTravel />
            },
            {
                path:'rechargement/historique',
                element:<ContentHistoriqueRecharge />
            },
            {
                path:'transport/historique',
                element:<ContentHistoriqueTransport />
            }
        ]
    }
]