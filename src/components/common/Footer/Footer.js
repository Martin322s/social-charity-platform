import "./styles/footer.css";

const Footer = () => {
    return (
        <footer>
            <p>All rights reserved © by Martin Sofroniev</p>
            <p>
                <a href="https://www.instagram.com/martin13s18/" target="_blank">
                    <i className="fab fa-instagram" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100009733451214" target="_blank">
                    <i className="fab fa-facebook-square" />
                </a>
                <a href="mailto:marti.sofroniev12@abv.bg" target="_blank">
                    <i className="fas fa-envelope" />
                </a>
            </p>
        </footer>
    );
}

export default Footer;