// Importation des composants de différentes sections de la page d'accueil
import Navbar from "./components/navbar/Navbar"; // Barre de navigation pour la navigation globale du site
import Hero from "./components/hero/Hero"; // Section d'accueil principale avec un message clé et une image
import Apropos from "./components/apropos/Apropos"; // Section "À propos", décrivant l'application
import Partenaire from "./components/partenaire/Partenaire"; // Section listant les partenaires de l'application
import Fonctionnement from "./components/fonctionnement/Fonctionnement"; // Section expliquant le fonctionnement de l'application
import Satisfait from "./components/satisfait/Satisfait"; // Section contenant des avis de clients satisfaits
import Footer from "./components/footer/Footer"; // Pied de page contenant des informations et des liens importants
//import Verification from "../../Components/verification/Verification";

// import Tableau from "../../Components/tableau/Tableau";

// Définition du composant principal pour la page d'accueil
const PageAccueil = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Apropos/>
            <Partenaire/>
            <Fonctionnement/>
            <Satisfait/>
            <Footer/>
            {/* <Tableau/> */}
            {/* <Verification/> */}
        </>
    );
}
export default PageAccueil;