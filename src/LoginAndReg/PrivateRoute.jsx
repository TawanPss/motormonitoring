import { Navigate } from "react-router-dom";

const PrivateRoute = ({userRole, role, children}) => {
    let redirectPath = '/sign-in'
    return (userRole === role) ? children : <Navigate to={redirectPath} replace />;
}

export default PrivateRoute;