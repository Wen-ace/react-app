import { Router, Route } from 'react-router-dom';
import React from 'react';
import Home from '../components/Home';
import Login from '../components/Login';
import Author_home from '../components/Author';
import Register from '../components/Register';
import browser_history from './history';
const routes = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        exact: true,
        name: 'login',
        component: Login
    },
    {
        path: '/about',
        exact: true,
        name: 'author_home',
        component: Author_home
    },
    {
        path: '/reg',
        exact: true,
        name: 'register',
        component: Register
    }
];
export default class RouteConfig extends React.Component {
    render() {
        return (
            <Router history={browser_history}>
                <React.Fragment>
                    {
                        routes.map((item, index) => {
                            return (
                                <Route path={item.path} exact={item.exact} component={item.component} key={item.name} />
                            )
                        })
                    }
                </React.Fragment>
            </Router>
        )
    }
}