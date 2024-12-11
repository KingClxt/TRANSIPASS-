export const user = {}
export default function userReducer(state=user, action){
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                token:action.payload.token,
                usager:action.payload.usager,
                role:''
            }
        case 'LOGOUT':
            return {}   
        case 'INCREASE_SOLDE':
            const newUsager = {
                ...state.usager,
                solde:action.payload
            }
            return{
                ...state,
                usager:newUsager
            }
        case 'LOGINADMIN':
            return {
                ...state,
                token:action.payload.token,
                usager:action.payload.usager,
                role:'admin'
            }
        default:
            return state
    }
}