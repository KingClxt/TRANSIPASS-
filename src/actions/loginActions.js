
export const Login = (data)=>{
    return ({
        type:'LOGIN',
        payload:{token:data.token, usager:data.usager}
    })
}
export const Logout = ()=>{
    return({
        type:'LOGOUT'
    })
}
export const Rechargement = (solde)=>{
    return ({
        type:"INCREASE_SOLDE",
        payload:solde
    })
}
export const LoginAdmin = (data)=>{
    return ({
        type:'LOGINADMIN',
        payload:{token:data.token, usager:data.admin}
    })
}