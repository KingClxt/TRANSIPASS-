import transport from '../../../../assets/TransportsEnCommun.jpeg';
import Bouton from './components/Bouton';

const Hero = () => {
    return (
        <>
            <div style={{ backgroundImage: `url(${transport})` }} className="bg-cover bg-center h-screen flex justify-center items-center flex-col px-4 md:px-8">
                {/* Titre principal */}
                <h1 className="text-2xl md:text-4xl font-bold text-[#5D5FEF] mb-6 md:mb-10 text-center">
                Votre mobilité<span className="text-white">, notre priorité : simplifiez vos trajets </span>avec TransiPass CI.
                </h1>

                {/* Sous-titre */}
                <p className="text-lg md:text-2xl text-white mb-6 md:mb-10 text-center">
                Découvrez une nouvelle façon de voyager : rapide, fiable et accessible à tous.
                </p>

                {/* Boutons */}
                <div className="flex flex-col md:flex-row gap-4">
                    <Bouton lien="/signin">
                        Connexion
                    </Bouton>

                    <Bouton lien="/signup">
                        Inscription
                    </Bouton>
                </div>
            </div>
        </>
    );
};

export default Hero;
