import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ role, children }) => {
    const userRole = useSelector((state) => state.user.user.role);
    let redirectPath = '/sign-in'
    return (userRole === role) ? children : <Navigate to={redirectPath} replace />;
}

export default PrivateRoute;