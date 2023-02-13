import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getAll } from "../services/publicationService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useLocalStorage('session', {});
    const userLogin = (userData) => setAuth(userData);
    const userLogout = () => setAuth({});
    const [data, setData] = useState([]);

    useEffect(() => {
        getAll()
            .then(data => {
                setData(data);
            });
    }, []);

    return (
        <AuthContext.Provider
            value={{ user: auth, userLogin, userLogout, data }}
        >
            {children}
        </AuthContext.Provider>
    );
}