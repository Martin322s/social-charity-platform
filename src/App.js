import Footer from "./components/common/Footer/Footer";
import Navigation from "./components/common/Header/Navigation";
import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";

function App() {
    return (
        <>
            <Navigation />
                <Home />
                <Create />
                <Dashboard />
                <Login />
                <Profile />
                <Register />
            <Footer />
        </>
    );
}

export default App;
