import "./styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <p>All rights reserved © by Martin Sofroniev</p>
            <p>
                <a href="/">
                    <i className="fab fa-instagram" />
                </a>
                <a href="/">
                    <i className="fab fa-facebook-square" />
                </a>
                <a href="/">
                    <i className="fas fa-envelope" />
                </a>
            </p>
        </footer>
    );
}

export default Footer;