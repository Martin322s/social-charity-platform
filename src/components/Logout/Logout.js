import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/userContext";
import { logoutUser } from "../../services/userService";

const Logout = () => {
    const { user, userLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    logoutUser(user.accessToken)
        .then(() => {
            userLogout();
            navigate("/");
        });
}

export default Logout;