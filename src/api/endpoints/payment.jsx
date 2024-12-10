import axios from "axios";

// Recuperer les paiement recent
export const getRecentPayment = (usagerId, token)=>
    axios.get(`https://transitpassci-elb3sqep.b4a.run//api/usagers/transactions/usager/${usagerId}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    .then(res=>res.data)
export const postPayement = (token, data)=>axios.post(`https://transitpassci-elb3sqep.b4a.run//api/usagers/recharge-compte`, data,{
    headers:{
        "Content-Type":'application/json',
        "Authorization":`Bearer ${token}`
    }
}).then(res=>res.data)