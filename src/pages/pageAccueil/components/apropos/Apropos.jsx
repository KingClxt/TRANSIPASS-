import Nombres from "./componentes/Nombres";
import Titre from "../../../../components/Titre";

import ContainerSec from "../../../../components/ContainerSec";
import Container from "../../../../components/Container";
import SousTitre from "../../../../components/SousTitre";
import GridDiv from "../../../../components/GridDiv";

const Apropos = () => {
    return (
        <div id="apropos">
            <ContainerSec>
                <Container>
                    <Titre titre="À PROPOS DE NOUS" />

                    <div className="flex flex-col lg:flex-row gap-10 ">
                        {/* Texte descriptif */}
                        <div className="w-full lg:w-6/12 text-start">
                            <SousTitre sousTitre="À la croisée des routes, un avenir plus connecté !"/>

                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Chez <span className="font-semibold text-[#5D5FEF]">TransiPass CI</span>, nous croyons en une Côte d’Ivoire où la mobilité est synonyme de fluidité, de modernité et d’accessibilité. Fondée sur l’idée que chaque trajet est une opportunité de se rapprocher, notre mission est de simplifier les déplacements quotidiens en combinant technologie innovante et service de qualité.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                                Nous travaillons en partenariat avec les acteurs locaux du transport pour offrir des solutions adaptées à vos besoins : itinéraires optimisés, horaires fiables, et accès simplifié aux informations en temps réel.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                                Que vous soyez un étudiant, un professionnel ou un voyageur occasionnel, notre plateforme et nos services sont conçus pour rendre vos trajets pratiques, sûrs et agréables. Ensemble, embarquons pour un voyage vers un futur plus connecté, plus vert et plus inclusif !
                            </p>
                        </div>

                        {/* Section des chiffres */}
                        <GridDiv className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 max-w-screen-lg mx-auto">
                            <Nombres nbr="100+" texte="Clients satisfaits" />
                            <Nombres nbr="50+" texte="Compagnies déployées" />
                            <Nombres nbr="500+" texte="Gares déployées" />
                            <Nombres nbr="3000+" texte="Retour favorables" />
                        </GridDiv>
                    </div>
                </Container>
            </ContainerSec>


        </div>
    );
};
export default Apropos;
