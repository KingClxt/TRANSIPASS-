import Titre from "../../../../components/Titre";
import Etape from "../fonctionnement/components/Etapes";
import GridDiv from "../../../../components/GridDiv";

import etoile from '../../../../assets/star.png';

import { Star} from "lucide-react";

const Satisfait = () => {
    return (
        <div id="avis">
            <div className="bg-[#FFF] text-center py-10">
                <Titre titre="AVIS CLIENTS" />

                <GridDiv className="grid sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full max-w-screen-lg mx-auto justify-center items-center">
                    <Etape>
                        <div className="flex">
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                        </div>

                        <p className="text-sm md:text-base text-gray-600 text-start">
                        &quot;Depuis que j&apos;ai commencé à utiliser TransitPass CI, mes
                        trajets quotidiens sont beaucoup plus simples. Les itinéraires
                        sont clairs, et je peux planifier mes déplacements sans
                        stress.&quot;
                        </p>

                        <div>
                        <img src="" alt="" />
                        <h3 className="text-lg md:text-xl font-bold text-[#5D5FEF] text-start">
                            Emmanuel Bamidélé
                        </h3>
                        </div>
                    </Etape>

                    <Etape>
                        <div className="flex">
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <Star color="#FFD700" />
                        </div>

                        <p className="text-sm md:text-base text-gray-600 text-start">
                        &quot;Je suis étudiante, et l&apos;application m&apos;aide à
                        toujours arriver à l&aposheure. Les informations en temps réel sur
                        les gares et les horaires sont incroyablement précises !&quot;
                        </p>

                        <div>
                        <img src="" alt="" />
                        <h3 className="text-lg md:text-xl font-bold text-[#5D5FEF] text-start">
                            Judicael Cakpo
                        </h3>
                        </div>
                    </Etape>

                    <Etape>
                        <div className="flex">
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <Star color="#FFD700" />
                        </div>

                        <p className="text-sm md:text-base text-gray-600 text-start">
                        &quot;TransitPass CI est une révolution pour le transport en Côte
                        d&apos;Ivoire. J&apos;apprécie particulièrement la facilité avec
                        laquelle je peux trouver des compagnies fiables pour mes
                        voyages.&quot;
                        </p>

                        <div>
                        <img src="" alt="" />
                        <h3 className="text-lg md:text-xl font-bold text-[#5D5FEF] text-start">
                            Calixte Tindé
                        </h3>
                        </div>
                    </Etape>

                    <Etape>
                        <div className="flex">
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                        </div>

                        <p className="text-sm md:text-base text-gray-600 text-start">
                        &quot;La simplicité d&apos;utilisation et la rapidité de
                        l&apos;application me séduisent. C&apos;est une excellente
                        initiative qui rend nos trajets bien plus fluides&quot;
                        </p>

                        <div>
                        <img src="" alt="" />
                        <h3 className="text-lg md:text-xl font-bold text-[#5D5FEF] text-start">
                            Eloge Kohou
                        </h3>
                        </div>
                    </Etape>

                    <Etape>
                        <div className="flex">
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                        </div>

                        <p className="text-sm md:text-base text-gray-600 text-start">
                        &quot;J&apos;ai essayé plusieurs services, mais aucun ne se
                        compare à TransitPass CI. C&apos;est intuitif et parfaitement
                        adapté à mes besoins, je me sens tellement bien depuis que j&apos;appli.&quot;
                        </p>

                        <div>
                        <img src="" alt="" />
                        <h3 className="text-lg md:text-xl font-bold text-[#5D5FEF] text-start">
                            David Kouaho
                        </h3>
                        </div>
                    </Etape>

                    <Etape>
                        <div className="flex">
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <img src={etoile} alt="" width={25}/>
                            <Star color="#FFD700" />
                        </div>

                        <p className="text-sm md:text-base text-gray-600 text-start">
                        &quot;Une application qui change tout ! Je peux enfin planifier
                        mes voyages de manière organisée et découvrir de nouvelles options
                        de transport.&quot;
                        </p>

                        <div>
                        <img src="" alt="" />
                        <h3 className="text-lg md:text-xl font-bold text-[#5D5FEF] text-start">
                            André Kouaho
                        </h3>
                        </div>
                    </Etape>
                </GridDiv>
            </div>
        </div>
    );
};
export default Satisfait;
