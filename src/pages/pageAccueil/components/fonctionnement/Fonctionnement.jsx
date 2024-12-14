import Titre from "../../../../components/Titre";
import ContainerSec from "../../../../components/ContainerSec";
import Container from "../../../../components/Container";
import SousTitre from "../../../../components/SousTitre";
import Bouton from "../hero/components/Bouton";
import Etape from "./components/Etapes";
import GridDiv from "../../../../components/GridDiv";

import { LogIn, Search, TicketCheck, Luggage } from "lucide-react";

const Fonctionnement = () => {
    return (
        <div id="fonctionnment">
            <ContainerSec>
                <Container>
                    <Titre titre="FONCTIONNEMENT" />

                    <div  className="flex flex-col lg:flex-row gap-10 items-start">
                        <div className="w-full lg:w-6/12 text-start flex flex-col justify-between h-full">
                            <SousTitre sousTitre="Tellement simple d'utilisation !" />

                            <p className="text-base md:text-lg text-gray-700 leading-relaxed pb-10">
                                Découvrez comment simplifier vos déplacements grâce à{" "}
                                <span className="font-semibold text-[#5D5FEF]">
                                    TransiPass CI
                                </span>
                                . Nous vous guidons étape par étape pour que vous puissiez
                                facilement naviguer et profiter de nos services de transport
                                en commun. Que vous soyez nouvel utilisateur ou utilisateur
                                régulier, suivez les étapes ci-contre et ou ci-dessous pour
                                une expérience de voyage fluide, rapide et sécurisée.
                            </p>

                            <Bouton lien="/signup">Commencer</Bouton>
                        </div>

                        <GridDiv className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full max-w-screen-lg mx-auto">
                            <Etape>
                                <LogIn color="#5D5FEF"/>

                                <h1 className="text-lg md:text-xl font-bold text-[#5D5FEF] text-start">
                                    Inscription
                                </h1>

                                <p className="text-sm md:text-base text-gray-600 text-start">
                                    Créez un compte en seulement quelques clics.
                                    Profitez d’un espace sécurisé dédié à vos trajets.
                                    Commencez à explorer nos services dès maintenant.
                                </p>
                            </Etape>

                            <Etape>
                                <Search color="#5D5FEF"/>

                                <h1 className="text-lg md:text-xl font-bold text-[#5D5FEF] text-start">
                                    Recherche de trajet
                                </h1>

                                <p className="text-sm md:text-base text-gray-600 text-start">
                                    Consultez les itinéraires et les horaires disponibles.
                                    Sélectionnez celui qui convient à votre programme.
                                    Organisez vos déplacements en toute simplicité.
                                </p>
                            </Etape>

                            <Etape>
                                <TicketCheck color="#5D5FEF"/>

                                <h1 className="text-lg md:text-xl font-bold text-[#5D5FEF] text-start">
                                    Réservez votre place
                                </h1>

                                <p className="text-sm md:text-base text-gray-600 text-start">
                                    Réservez votre siège rapidement et en sécurité.
                                    Accédez à une interface fluide et intuitive.
                                    Finalisez votre réservation en toute tranquillité.
                                </p>
                            </Etape>

                            <Etape>
                                <Luggage color="#5D5FEF"/>

                                <h1 className="text-lg md:text-xl font-bold text-[#5D5FEF] text-start">
                                    Voyagez en toute sérénité
                                </h1>

                                <p className="text-sm md:text-base text-gray-600 text-start">
                                    Profitez d’un trajet confortable et sécurisé.
                                    Vivez une expérience moderne et agréable.
                                    Nous simplifions vos déplacements au quotidien.
                                </p>
                            </Etape>
                        </GridDiv>
                    </div>
                </Container>
            </ContainerSec>
        </div>
    );
}
export default Fonctionnement;