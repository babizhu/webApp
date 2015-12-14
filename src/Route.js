/**
 * Created by liu_k on 2015/11/17.
 */
import React, { Component } from 'react';
import {Router,Route,Link} from 'react-router'
import App from './App';
import Flex from './Flex';
import Nav from './Nav';


export default RouteStudy;

class RouteApp extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to='/' >首页 </Link>
                    <Link to='/tv' > 电视 </Link>
                    <Link to='/app' > 应用程序 </Link>
                    <Link to='/flex' > 布局 </Link>
                    <Link to='/nav' > 分栏布局 </Link>


                </div>
                <div>
                    <h1>aaaaaaaaaaaaa</h1>
                    <h1>aaaaaaaaaaaaa</h1>
                    <h1>aaaaaaaaaaaaa</h1>
                {this.props.children}
                    </div>
            </div>
        );
    }
}


class Tv extends Component {
    render() {
        return (
            <div>
                <div>电视节目列表</div>
                {this.props.children}
            </div>
        )
    }
}

class Show extends Component {
    render() {
        return (
            <h3>
                节目
            </h3>
        )
    }
}

class RouteStudy extends Component {
    render() {
        return (
            <Router>
                <Route path='/' component={RouteApp}>
                    <Route path='tv' component={Tv}>
                        <Route path="show/:id" component={Show} />
                    </Route>
                    <Route path="app" component={App} />
                    <Route path="flex" component={Flex} />
                    <Route path="nav" component={Nav} />
                </Route>
            </Router>

        );
    }
}
export default RouteStudy;

