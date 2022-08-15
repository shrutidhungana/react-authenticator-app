import React, {createContext} from 'react'


 export const AuthContext = createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => {}
})


const AuthProvider = ({ children }) => {

    const loginHandler = () => {
        
    }

    const logoutHandler = () => {
        
    }


    const contextState = {
        token: '',
        isLoggedIn: false,
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