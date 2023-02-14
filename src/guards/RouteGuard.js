import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/userContext";

const RouteGuard = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user.accessToken) {
        return <Navigate to="/login" replace />
    }

    return children;
};

export default RouteGuard;