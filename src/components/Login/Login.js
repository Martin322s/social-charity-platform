import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/userContext";
import { loginUser } from "../../services/userService";
import "./styles/styles.css";

const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (ev) => {
        setData(state => ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    const submitHandler = (ev, userData) => {
        ev.preventDefault();

        if (userData.email && userData.password) {
            loginUser(userData)
                .then((user) => {
                    if (user.message) {
                        alert('Invalid data');
                    } else {
                        userLogin(user);
                        navigate("/");
                    }
                });
        } else {
            alert('All fields are required!');
        }
    }

    return (
        <main>
            <form className="login" onSubmit={(ev) => submitHandler(ev, data)}>
                <h3>
                    <i className="fas fa-sign-out-alt" />
                    Login User
                </h3>
                <div className="username">
                    <label htmlFor="email">Email:</label>
                    <i className="fas fa-user" />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={(ev) => changeHandler(ev)}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password:</label>
                    <i className="fas fa-lock" />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={(ev) => changeHandler(ev)}
                    />
                </div>
                <p>
                    Don't have an account? <Link to="/register">Sign up</Link>
                </p>
                <input className="button" type="submit" defaultValue="Sign In" />
            </form>
        </main>
    );
}

export default Login;