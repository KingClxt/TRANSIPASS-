import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PrivateRoute = ({ children }) => {
    const token = useSelector(({userReducer}) => userReducer.token)
    
    if (!token) {
        return <Navigate to="/signin" replace />
    }
    return children
}