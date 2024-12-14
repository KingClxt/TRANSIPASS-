import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { BusFront } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#5D5FEF] text-white py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Section 1: About */}
                <div>
                <h3 className="text-xl font-bold mb-4 flex gap-3">
                    <BusFront color="#FFD700"/>
                    TransitPass CI
                </h3>
                <p className="text-sm leading-6">
                    Simplifiez vos trajets quotidiens avec TransitPass CI, votre
                    solution de transport fiable et moderne en Côte d&apos;Ivoire.
                </p>
                </div>

                {/* Section 2: Quick Links */}
                <div>
                <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
                <ul className="space-y-2">
                    <li>
                    <a href="#" className="text-sm hover:underline">
                        A propos de nous
                    </a>
                    </li>
                    <li>
                    <a href="#" className="text-sm hover:underline">
                        Fonctionnalités
                    </a>
                    </li>
                    <li>
                    <a href="#" className="text-sm hover:underline">
                        Avis
                    </a>
                    </li>
                </ul>
                </div>

                {/* Section 3: Social Media */}
                <div>
                <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
                <div className="flex space-x-4">
                    <a href="#" className="p-2 bg-white text-[#5D5FEF] rounded-full hover:bg-gray-200">
                    <Facebook size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white text-[#5D5FEF] rounded-full hover:bg-gray-200">
                    <Twitter size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white text-[#5D5FEF] rounded-full hover:bg-gray-200">
                    <Instagram size={20} />
                    </a>
                    <a href="#" className="p-2 bg-white text-[#5D5FEF] rounded-full hover:bg-gray-200">
                    <Linkedin size={20} />
                    </a>
                </div>
                </div>

                {/* Section 4: Legal */}
                <div>
                <h3 className="text-xl font-bold mb-4">Légal</h3>
                <ul className="space-y-2">
                    <li>
                    <a href="#" className="text-sm hover:underline">
                        Conditions d&apos;utilisation
                    </a>
                    </li>
                    <li>
                    <a href="#" className="text-sm hover:underline">
                        Politique de confidentialité
                    </a>
                    </li>
                </ul>
                </div>
            </div>

            <div className="text-center mt-10 border-t border-white/30 pt-5">
                <p className="text-sm">&copy; 2024 TransitPass CI. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;
