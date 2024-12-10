import axios from "axios";


// Recuperer les voyages recents
export const getRecentTrajet = (usagerId, token)=>
    axios.get(`https://transitpassci-elb3sqep.b4a.run//api/usagers/trajets/usager/${usagerId}`,{
        headers:{
            "Authorization":`Bearer ${token}`
        }
    })
    .then(res=>res.data)