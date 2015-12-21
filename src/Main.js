/**
 * Created by liu_k on 2015/11/17.
 */
import React, { Component } from 'react';
import Layout from './component/layout/Layout.js'
import { Router, Route, Link } from 'react-router'
import App from './App.js'
import Nav from './Nav.js'
import Flex from './Flex.js'
import Test from './component/misc/Test'
class Main extends Component {
    render() {
        return (
            <Router>
                <Route path='/' component={Layout}>

                    <Route path="app" component={App}/>
                    <Route path="nav" component={Nav}/>
                    <Route path="flex" component={Flex}/>
                    <Route path="test" component={Test}/>
                </Route>
            </Router>
        );
    }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;
