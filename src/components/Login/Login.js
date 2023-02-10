import "./styles/styles.css";

const Login = () => {
    return (
        <main>
            <form className="login">
                <h3>
                    <i className="fas fa-sign-out-alt" />
                    Login User
                </h3>
                <div className="username">
                    <label htmlFor="email">Email:</label>
                    <i className="fas fa-user" />
                    <input type="text" id="email" name="email" />
                </div>
                <div className="password">
                    <label htmlFor="password">Password:</label>
                    <i className="fas fa-lock" />
                    <input type="password" id="password" name="password" />
                </div>
                <p>
                    Don't have an account? <a href="#">Sign Up</a>
                </p>
                <input className="button" type="submit" defaultValue="Sign In" />
            </form>
        </main>
    );
}

export default Login;