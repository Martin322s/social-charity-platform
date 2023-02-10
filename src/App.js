import Footer from "./components/common/Footer/Footer";
import Navigation from "./components/common/Header/Navigation";
import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";

function App() {
    return (
        <>
            <Navigation />
                <Home />
                <Create />
                <Dashboard />
            <Footer />
        </>
    );
}

export default App;
