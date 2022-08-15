import React, {createContext, useState} from 'react'


export const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
});

const retriveTokenOnInitialLoad = () => {
    
}


const AuthProvider = ({ children }) => {
       const [token, setToken] = useState(null)
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token)
        
    }

    const logoutHandler = () => {
        
    }


    const contextState = {
        token,
        isLoggedIn: token !== null && token !== '',
        login: loginHandler,
        logout: logoutHandler
   }

    return (
        <AuthContext.Provider value = {contextState}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider