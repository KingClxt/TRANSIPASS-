import { NavLink, useNavigate } from "react-router-dom"
import { Input } from "../components/Input"
import axios from "axios"
import { useMutation } from "@tanstack/react-query"
import { Loader } from "../components/Loader"
import { useState } from "react"

const inscription = (data)=>axios.post("https://transitpassci-elb3sqep.b4a.run//api/usagers/signupUsager", data).then(res=>res.data)

export const Inscription = () => {

    const [errors, setErrors] = useState(null)

    const navigate = useNavigate()
    const mutation = useMutation({
        mutationFn:(data)=>inscription(data),
        onSuccess:()=>{
            navigate('/signin')
        },
        onError:(data)=>{
            setErrors(data.response.data)
        }
    })
    
    const handleInscription = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            nom:formData.get('nom'),
            prenom:formData.get('prenom'),
            email:formData.get('email'),
            telephone:formData.get('telephone'),
            motDePasse:formData.get('motDePasse'),
            confirmPassword:formData.get('confirmPassword')
        }
        mutation.mutate(data)
        
    }
    return (
        <>
            <div className="flex relative flex-col font-poppins items-center justify-center min-h-screen gap-7 bg-gray-100 p-4">
            {
                mutation.isPending && <Loader />
            }
                <div className="text-center">
                    <h1 className="text-5xl my-2 font-bold font-poppins text-[#5D5FEF]">TRANSIPASS CI</h1>
                    <p className="text-[#82c4ff] font-bold text-xl">
                    Inscrivez-vous et découvrez le monde moderne du transport en commun 
                    </p>
                </div>

                <form onSubmit={handleInscription} className="bg-white shadow-lg rounded-lg px-6 py-7 w-full max-w-md">
                    <fieldset className="space-y-4">
                        {
                            errors && <div className="border font-poppins border-red-500 text-red-700 bg-red-100 w-full rounded py-5 px-3">
                                {
                                    errors.message
                                }
                            </div>
                        }
                        <Input label="Nom" name="nom" />
                        <Input label="Prénom" name="prenom" />
                        <Input label="Email" type="email" name="email"  />
                        <Input label="Numéro de téléphone" name="telephone" type="tel" />
                        <Input label="Mot de passe" name="motDePasse" type="password" />
                        <Input label="Confirmer le mot de passe" name="confirmPassword" type="password" />
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
                        Déjà un compte ? <span></span>
                        <NavLink to="/signin" className="text-[#5DAAEF] text-xl hover:underline">
                            Se connecter
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    )
}