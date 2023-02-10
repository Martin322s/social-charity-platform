import "./styles/navigation.css";
import logo from "./images/logo.png";

const Navigation = () => {
    return (
        <header className="navigation">
            <img className="logo" src={logo} alt="logo" />
            <ul className="nav-bar">
                <li className="nav-link">
                    <a href="#">
                        <i className="fas fa-home" />
                        Home
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#">
                        <i className="fas fa-address-card" />
                        Publications
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#">
                        <i className="fas fa-plus-square" />
                        Create
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#">
                        <i className="fas fa-user-alt" />
                        Profile
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#">
                        <i className="fas fa-sign-out-alt" />
                        Sign In
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#">
                        <i className="fas fa-user-plus" />
                        Sign Up
                    </a>
                </li>
                <li className="nav-link">
                    <a href="#">
                        <i className="fas fa-power-off" />
                        Logout
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default Navigation;