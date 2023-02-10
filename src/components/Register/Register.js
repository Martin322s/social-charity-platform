import "./styles/register.css";

const Register = () => {
    return (
        <main>
            <form className="register">
                <h3>
                    <i className="fas fa-user-plus" />
                    Register User
                </h3>
                <label className="label" htmlFor="firstName">
                    First Name:
                </label>
                <input className="inputField" type="text" id="firstName" name="firstName" />
                <label className="label" htmlFor="lastName">
                    Last Name:
                </label>
                <input className="inputField" type="text" id="lastName" name="lastName" />
                <label className="label" htmlFor="email">
                    Email:
                </label>
                <input className="inputField" type="email" id="email" name="email" />
                <label className="label" htmlFor="password">
                    Password:
                </label>
                <input
                    className="inputField"
                    type="password"
                    id="password"
                    name="password"
                />
                <label className="label" htmlFor="rePass">
                    Confirm password:
                </label>
                <input className="inputField" type="password" id="rePass" name="rePass" />
                <p>
                    Aleready registered? <a href="#">Sign In</a>
                </p>
                <button className="button">Sign Up</button>
            </form>
        </main>
    );
}

export default Register;