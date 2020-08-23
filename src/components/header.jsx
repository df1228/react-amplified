import React, { useState } from "react";
// import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
// import { withAuthenticator, AmplifyAuthenticator, AmplifySignIn, AmplifySignUp, AmplifySignOut } from "@aws-amplify/ui-react";
import useLocalStorage from '../hooks/useLocalStorage'

import AuthContext from '../utils/auth-context'
import MerchantHeader from './header1'
import BuyerHeader from './header2'

const MyHeader = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        // console.log('Clicked')
        // console.log(!open)
        setOpen(!open);
    };
    const [role, setRole] = useLocalStorage('role', '');
    const authContext = React.useContext(AuthContext)

    if (authContext.role == "merchant") {
        return <MerchantHeader></MerchantHeader>
    }

    if (authContext.role == "buyer") {
        return <BuyerHeader></BuyerHeader>
    }

    return (
        <div>Role not found: {authContext.role}</div>
    )

}

export default MyHeader;
