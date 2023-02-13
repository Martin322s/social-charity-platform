import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import Navigation from "./components/common/Header/Navigation";
import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Error from "./components/Not Found/Error";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import { AuthProvider } from "./contexts/userContext";

function App() {
    return (
        <>
            <AuthProvider>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/publications" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/details/:publicationId" element={<Details />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;
