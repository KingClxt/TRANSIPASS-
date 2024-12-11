import axios from "axios";


export const getGars = ()=>axios.get("https://transitpassci-elb3sqep.b4a.run//api/usagers/get-gares")
                                .then(res=>res.data)

export const postGare = (data, token)=>axios.post("https://transitpassci-elb3sqep.b4a.run//api/admin/createGare", data,{
    headers:{
        "Authorization":`Bearer ${token}`
    }
}).then(res=>res.data)