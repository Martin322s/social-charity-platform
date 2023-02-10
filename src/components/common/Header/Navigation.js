import { Link } from "react-router-dom";
import "./styles/navigation.css";
import logo from "./images/logo.png";

const Navigation = () => {
    return (
        <header className="navigation">
            <img className="logo" src={logo} alt="logo" />
            <ul className="nav-bar">
                <li className="nav-link">
                    <Link to="/">
                        <i className="fas fa-home" />
                        Home
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/publications">
                        <i className="fas fa-address-card" />
                        Publications
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/create">
                        <i className="fas fa-plus-square" />
                        Create
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/profile">
                        <i className="fas fa-user-alt" />
                        Profile
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/login">
                        <i className="fas fa-sign-out-alt" />
                        Sign In
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/register">
                        <i className="fas fa-user-plus" />
                        Sign Up
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/logout">
                        <i className="fas fa-power-off" />
                        Logout
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Navigation;