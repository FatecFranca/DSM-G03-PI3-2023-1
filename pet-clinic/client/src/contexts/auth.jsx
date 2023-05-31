import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    //API
    const logout = () => {
        setUser(null)

        localStorage.removeItem('Page')
        localStorage.removeItem('token_API')
    }

    return (
        <AuthContext.Provider
            value={{ user, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}