import { Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoute = ({isAuthen, children, redirectPath='/sign-in'}) => {
    return isAuthen ? children : <Navigate to={redirectPath} replace />;
}

export default PrivateRoute;