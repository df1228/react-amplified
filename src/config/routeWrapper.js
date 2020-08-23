import React, { useEffect, useC} from "react";
// import { BrowserRouter, Switch, Route, Redirect, Link, NavLink } from "react-router-dom";
// import { withAuthenticator, AmplifyAuthenticator, AmplifySignIn, AmplifySignUp, AmplifySignOut } from "@aws-amplify/ui-react";
import { Route } from "react-router-dom";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import AuthContext from '../utils/auth-context'

// https://medium.com/javascript-in-plain-english/simple-guide-for-layouts-in-react-router-e32b26c12cee
// https://reactjs.org/docs/render-props.html#using-props-other-than-render

export function RouteWrapper({
    component: Component,
    layout: Layout,
    ...rest
}) {
    
    
    const  authContext  = React.useContext(AuthContext)
    useEffect(() => {
        console.log(authContext.authenticated)
        // 判断是否需要授权
        if (authContext.role == 1) {
            console.log("商家")
        }
    }, [])

    return (
        // <Route {...rest} render={(props) =>
        //     <Layout {...props}>
        //         <Component {...props} />
        //     </Layout>
        // }>
        // </Route>

        <Route {...rest}>
            {
                props => (
                    <Layout {...props}>
                        <Component {...props} />
                    </Layout>
                )
            }
        </Route>
    );
}

export function PrivateRouteWrapper({
    component: Component,
    layout: Layout,
    ...rest
}) {

    const authContext = React.useContext(AuthContext)

    if (authContext.authenticated) {
        return (
            <Route {...rest} render={(props) =>
                (<>
                    <Layout {...props}>
                        <Component {...props} />
                    </Layout>
                </>
                )
            }>
            </Route>
        )
    }

    return (
        <AmplifyAuthenticator>
            <AmplifySignUp
                slot="sign-up"
                usernameAlias="email"
                formFields={[
                    // { type: "username" },
                    { type: "email" },
                    { type: "password" },
                    // {
                    //   type: "custom:role",
                    //   label: "Custom Role Label",
                    //   key: "custom:role",
                    //   placeholder: "custom Phone placeholder",
                    //   required: false,
                    // },
                    // {
                    //   label: 'Email',
                    //   key: 'role',
                    //   required: true,
                    //   placeholder: 'role',
                    //   type: 'role',
                    //   displayOrder: 3,
                    // },
                ]}
            />
        </AmplifyAuthenticator>
    )
}
