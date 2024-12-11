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
import AjoutGares from "../components/Gestion gar/AjoutGares";
import { ConnexionAdmin } from "../pages/ConnexionAdmin";
import Verification from "../components/Verification/Verification";
import Trajet from "../components/trajets/Trajet";
import Arret from "../components/Arret/Arret";
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
        path:'/signinAdmin',
        element:<ConnexionAdmin/>
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
            },
            {
                path:'gars',
                element:<AjoutGares />
            },
            {
                path:'verification',
                element:<Verification />
            },
            {
                path:'trajet',
                element:<Trajet />
            },
            {
                path:'arret',
                element:<Arret />
            }
        ]
    }
]