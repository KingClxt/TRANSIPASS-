export const user = {}
export default function userReducer(state=user, action){
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                token:action.payload.token,
                usager:action.payload.usager
            }
        case 'LOGOUT':
            return {}   
        default:
            return state
    }
}