import Footer from "./components/common/Footer/Footer";
import Navigation from "./components/common/Header/Navigation";
import Create from "./components/Create/Create";
import Home from "./components/Home/Home";

function App() {
    return (
        <>
            <Navigation />
                <Home />
                <Create />
            <Footer />
        </>
    );
}

export default App;
