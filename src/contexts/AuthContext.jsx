import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [userId, setUserId] = useState(null)
    
    const singout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider
            value={{ user, setUser, setUserId, singout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider