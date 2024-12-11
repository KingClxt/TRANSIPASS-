import axios from "axios";


export const getTrajet = ()=>axios.get('https://transitpassci-elb3sqep.b4a.run//api/usagers/get-trajets')
                                    .then(res=>res.data)

export const postTrajet = (data, token)=>axios.post(`https://transitpassci-elb3sqep.b4a.run//api/admin/createTrajet`, data, {
    headers:{
        "Authorization":`Bearer ${token}`
    }
})

export const getTrajetById = (id)=>axios.get(`https://transitpassci-elb3sqep.b4a.run//api/usagers/get-trajet/${id}`)
                                        .then(res=>res.data)