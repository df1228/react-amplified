import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link, NavLink } from "react-router-dom";

import DefaultLayout from '../components/layout';
import { Wrapper, RouteWrapper, PrivateRouteWrapper } from './routeWrapper';

import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import AddTask from '../pages/AddTask';
import Task from '../pages/TaskDetail';
import Profile from '../pages/Profile';
import Join from '../pages/Join';
import JoinComplete from '../pages/JoinComplete';
import CustomSignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <PrivateRouteWrapper path="/tasks/add" component={AddTask} layout={DefaultLayout} />
            <PrivateRouteWrapper path="/tasks/:id" component={Task} layout={DefaultLayout} />
            <PrivateRouteWrapper path="/tasks" component={Tasks} layout={DefaultLayout} />
            <RouteWrapper path="/about" component={About} layout={DefaultLayout} />
            <PrivateRouteWrapper path="/join" component={Join} layout={DefaultLayout} />
            <PrivateRouteWrapper path="/joinComplete" component={JoinComplete} layout={DefaultLayout} />
            <PrivateRouteWrapper path="/profile" component={Profile} layout={DefaultLayout} />
            <RouteWrapper path="/contact" component={ContactUs} layout={DefaultLayout} />
            <RouteWrapper path="/faq" component={FAQ} layout={DefaultLayout} />
            <RouteWrapper path="/" component={Home} layout={DefaultLayout} />
        </Switch>
    </BrowserRouter>
  )
}



function About() {
    return <h2>About</h2>;
}

function FAQ() {
    return <h2>FAQ</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function ContactUs() {
    return <h2>Contact Us</h2>;
}
