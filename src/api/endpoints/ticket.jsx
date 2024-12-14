import axios from "axios";


export const postTicket = (data, token)=>axios.post("https://transitpassci-elb3sqep.b4a.run//api/usagers/buyTicket", data, {
    headers:{
        'Authorization':`Bearer ${token}`
    }
}).then(res=>res.data)

export const getTicketById = (id)=>axios.get(`https://transitpassci-elb3sqep.b4a.run//api/usagers/get-tickets/${id}`)
                                        .then(res=>res.data)