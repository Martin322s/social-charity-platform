import { Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import Navigation from "./components/common/Header/Navigation";
import Create from "./components/Create/Create";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Register from "./components/Register/Register";
import { AuthProvider } from "./contexts/userContext";
import PrivateRoute from "./guards/PrivateRoute";
import RouteGuard from "./guards/RouteGuard";

const Delete = React.lazy(() => import("./components/Delete/Delete"));
const Details = React.lazy(() => import("./components/Details/Details"));
import Edit from "./components/Edit/Edit";
import Logout from "./components/Logout/Logout";
import Error from "./components/Not Found/Error";
import React from "react";

function App() {
    return (
        <>
            <AuthProvider>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/publications" element={<Dashboard />} />

                    <Route path="/create" element={
                        <RouteGuard>
                            <Create />
                        </RouteGuard>
                    } />

                    <Route path="/login" element={
                        <PrivateRoute>
                            <Login />
                        </PrivateRoute>
                    } />

                    <Route path="/profile" element={
                        <RouteGuard>
                            <Profile />
                        </RouteGuard>
                    } />

                    <Route path="/register" element={
                        <PrivateRoute>
                            <Register />
                        </PrivateRoute>
                    } />

                    <Route path="/logout" element={
                        <RouteGuard>
                            <Logout />
                        </RouteGuard>
                    } />

                    <Route path="/details/:publicationId" element={
                        <RouteGuard>
                            <Details />
                        </RouteGuard>
                    } />

                    <Route path="/details/:publicationId/edit" element={
                        <RouteGuard>
                            <Edit />
                        </RouteGuard>
                    } />

                    <Route path="/details/:publicationId/delete" element={
                        <RouteGuard>
                            <Delete />
                        </RouteGuard>
                    } />

                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;