import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import { withAuthenticator, AmplifyAuthenticator, AmplifySignIn, AmplifySignUp, AmplifySignOut } from "@aws-amplify/ui-react";
import useLocalStorage from '../hooks/useLocalStorage'

import AuthContext from '../utils/auth-context'

const BuyerHeader = () => {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        // console.log('Clicked')
        // console.log(!open)
        setOpen(!open);
    };
    const [role, setRole] = useLocalStorage('role', '');
    const authContext = React.useContext(AuthContext)

    return (
        <nav className="flex items-center justify-between flex-wrap w-full bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <NavLink to="/" activeClassName="active" className="flex">
                    <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="font-semibold text-xl tracking-tight">Tailwind</span>
                </NavLink>
            </div>
            <div className="block lg:hidden">
                <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={toggleMenu}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div id="nav-content" className={open ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto" : "w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden"}>
                <div className="text-sm lg:flex-grow lg:flex lg:flex-row-reverse">
                    <NavLink to="/contact" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        联系我们
                    </NavLink>

                    <NavLink to="/faq" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        常见问题
                    </NavLink>

                    {/* <NavLink to="/about" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        About
                    </NavLink> */}

                    <NavLink to="/tasks" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        任务大厅
                    </NavLink>
                    
                    {/* <NavLink to="/tasks/add" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Add Task
                    </NavLink>

                    <NavLink to="/tasks" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Tasks
                    </NavLink>

                    <NavLink to="/contact" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Contact
                    </NavLink>

                    <NavLink to="/faq" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Faq
                    </NavLink>

                    <NavLink to="/about" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        About
                    </NavLink>

                    <NavLink to="/" activeClassName="active" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Home
                    </NavLink> */}
                </div>
                {/* <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                    <AmplifySignOut />
                </div> */}
            </div>
        </nav>
    )
}

export default BuyerHeader;