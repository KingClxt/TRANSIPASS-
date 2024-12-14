import { useState } from "react";
import { BusFront } from "lucide-react"; 

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#5D5FEF] flex justify-between items-center px-6 py-4 sticky top-0 z-50 shadow-md md:px-20">
            {/* Logo + Nom */}
            <div className="flex gap-3 items-center">
                <BusFront color="#FFD700" size={40} className="cursor-pointer" />
                <h1 className="text-white text-2xl md:text-3xl font-bold hover:cursor-pointer">
                    TRANSITPASS
                </h1>
            </div>

        {/* Menu Hamburger */}
            <button onClick={toggleMenu} className="md:hidden text-white text-2xl focus:outline-none" aria-label="Toggle menu" >
                {isMenuOpen ? "X" : "☰"}
            </button>

            {/* Liste des liens */}
            <ul className={`${isMenuOpen ? "block" : "hidden"} absolute top-16 left-0 w-full bg-[#5D5FEF] shadow-md md:shadow-none py-4 md:py-0 md:flex md:static md:gap-6 md:items-center md:justify-end transition-all duration-3000`}>
                <li className="text-center">
                    <a href="#" className="text-lg text-white hover:text-[#FFD700] hover:font-bold transition">
                        Accueil
                    </a>
                </li>
                <li className="text-center mt-3 md:mt-0">
                    <a href="#apropos" className="text-lg text-white hover:text-[#FFD700] hover:font-bold transition">
                        À propos
                    </a>
                </li>
                <li className="text-center mt-3 md:mt-0">
                    <a href="#fonctionnment" className="text-lg text-white hover:text-[#FFD700] hover:font-bold transition">
                        Fonctionnement
                    </a>
                </li>
                <li className="text-center mt-3 md:mt-0">
                    <a href="#avis" className="text-lg text-white hover:text-[#FFD700] hover:font-bold transition">
                        Avis
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
