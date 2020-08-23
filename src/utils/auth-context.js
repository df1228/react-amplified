import React from 'react';

const AuthContext = React.createContext({
    authenticated: false,
    userID: "",
    role: "",
    login: () => { }
});

export default AuthContext;