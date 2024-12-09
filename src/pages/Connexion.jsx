import { NavLink } from "react-router-dom";
import { Input } from "../components/Input";

export const Connexion = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100 p-4">
                <div className="text-center">
                    <h1 className="text-5xl my-2 font-bold font-poppins text-[#5D5FEF]">TRANSIPASS CI</h1>
                    <p className="text-[#82c4ff] font-poppins text-xl">
                        Connectez-vous et continuez l&apos;aventure avec Transipass CI
                    </p>
                </div>

                <form className="bg-white shadow-lg rounded-lg px-6 py-7 w-full max-w-md">
                    <fieldset className="space-y-4">
                        <Input type="email" name="email" />
                        <Input name="mot de passe" type="password" />
                        <Input name="confirmer mot de passe" type="password"/>
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="remember" required className="w-4 h-4 border-gray-300 rounded focus:ring-[#5D5FEF]"/>
                            <label htmlFor="remember" className="text-black">
                                Se souvenir de moi
                            </label>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 border-2 border-[#5D5FEF] text-[#5D5FEF] font-bold rounded-lg hover:bg-[#5D5FEF] hover:text-white transition">
                            Se connecter
                        </button>
                    </fieldset>
                </form>

                <div className="flex flex-col items-center justify-center w-full max-w-md mt-4 text-sm">
                    <NavLink to="/signup" className="text-[#5DAAEF] text-xl hover:underline">
                            S'inscrire
                    </NavLink>
                    <a href="#" className="text-[#5DAAEF] text-xl hover:underline">
                        Mot de passe oublié ?
                    </a>
                </div>
            </div>
        </>
    )
}