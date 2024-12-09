import { NavLink } from "react-router-dom"
import { Input } from "../components/Input"

export const Inscription = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen gap-7 bg-gray-100 p-4">
                <div className="text-center">
                    <h1 className="text-5xl my-2 font-bold font-poppins text-[#5D5FEF]">TRANSIPASS CI</h1>
                    <p className="text-[#82c4ff] font-poppins text-xl">
                    Inscrivez-vous et découvrez le monde moderne du transport en commun 
                    </p>
                </div>

                <form className="bg-white shadow-lg rounded-lg px-6 py-7 w-full max-w-md">
                    <fieldset className="space-y-4">
                        <div>
                            <label htmlFor="first-name" className="block text-black">
                                Prénom
                            </label>
                            <input type="text" id="prenom" maxLength={50} required className="w-full px-4 py-2 border rounded-lg focus:ring-[#5D5FEF] focus:outline-none focus:ring-2"/>
                        </div>
                        <Input name="prénom" />
                        <Input name="nom" />
                        <Input type="email" name="email" />
                        <Input name="mot de passe" type="password" />
                        <Input name="numéro de téléphone" type="tel" />
                        <div className="flex items-center space-x-2">
                            <input type="checkbox" id="remember" required className="w-4 h-4 border-gray-300 rounded focus:ring-[#5D5FEF]"/>
                            <label htmlFor="remember" className="text-black">
                                Sj&apos;accepte les
                                <a href="" className="text-[#5DAAEF] underline"> conditions générales</a>
                            </label>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 border-2 border-[#5D5FEF] text-[#5D5FEF] font-bold rounded-lg hover:bg-[#5D5FEF] hover:text-white transition">
                            S&apos;inscrire
                        </button>
                    </fieldset>
                </form>

                <div className="flex flex-col items-center justify-center w-full max-w-md mt-2 text-sm">
                    <p className="text-xl">
                        Déjà un compte ?
                        <NavLink to="/signin" className="text-[#5DAAEF] text-xl hover:underline">
                            Se connecter
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}