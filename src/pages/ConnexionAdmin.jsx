import { NavLink, useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Login, LoginAdmin } from "../actions/loginActions";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

export const ConnexionAdmin = () => {
    const navigate = useNavigate()
    const usager = useSelector(({userReducer})=>userReducer)
    // useEffect(()=>{
    //     if(Object.keys(usager).length !== 0){
    //         navigate('/dashboard')
    //     }
    // }, [navigate])
    console.log(usager);
    const dispatch = useDispatch()


    // STATE POUR LES ERREURS
    const [errors, setErrors] = useState(null)
    // console.log(errors);
    
    // FONCTION DE CONNEXION
    const mutation = useMutation({
        mutationFn:(data)=>axios.post(`https://transitpassci-elb3sqep.b4a.run//api/admin/loginAdmin`, data,{
            headers:{
                "Content-Type":'application/json'
            }
        }).then(res=>res.data),
        onSuccess:(data)=>{
            dispatch(LoginAdmin(data))
            console.log(data);
            
            setErrors(null)
            navigate('/dashboard')
        },
        onError:(data)=>{
            setErrors(data.response.data)
        }
    })
    // FONCTION DE SOUMISSION DU FORMULAIRE
    const handleLogin = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = {
            email:formData.get('identifiant'),
            motDePasse:formData.get('motDePasse')
        }
                
        mutation.mutate(data)
    }
    return (
        <>
            {
                mutation.isPending &&<Loader />
            }
            
            <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100 p-4">
                <div className="text-center">
                    <h1 className="text-5xl my-2 font-bold font-poppins text-[#5D5FEF]">TRANSIPASS CI</h1>
                    <p className="text-[#82c4ff] font-poppins text-xl">
                       CONNEXION ADMIN
                    </p>
                </div>

                <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg px-6 py-7 w-full max-w-md">
                    <fieldset className="space-y-4">
                        {
                            errors && <div className="border font-poppins border-red-500 text-red-700 bg-red-100 w-full rounded py-5 px-3">
                                {
                                    errors.message
                                }
                            </div>
                        }
                        
                        <Input label="email" type="text" name="identifiant" />
                        <Input label="mot de passe" name="motDePasse" type="password" />
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
            </div>
        </>
    )
}