import logo from "./images/404.png";
import "./styles/error.css";

const Error = () => {
    return (
        <main className="error-container">
            <h1 className="error-heading">Error 404</h1>
            <h3 className="error-heading-three">Page not found!</h3>
            <div className="error-img">
                <img src={logo} alt="not found" />
            </div>
        </main>
    );
}

export default Error;