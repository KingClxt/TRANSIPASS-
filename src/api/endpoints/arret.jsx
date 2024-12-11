import axios from "axios";


export const getArret = ()=>axios.get("https://transitpassci-elb3sqep.b4a.run//api/usagers/get-arrets")
                                 .then(res=>res.data)
export const postArret = (data, token)=>axios.post("https://transitpassci-elb3sqep.b4a.run//api/admin/createArret",data, {
    headers:{
        'Authorization':`Bearer ${token}`
    }
}).then(res=>res.data)