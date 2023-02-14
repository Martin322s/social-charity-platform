import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (user.accessToken) {
        return <Navigate to="/" replace />
    }

    return children;
};

export default PrivateRoute;