// demo.js
import React, {Component} from 'react';
import {
    Link, Route, historyPush
} from './router';
import {Menu, Icon} from 'antd';
import './animate.css';

export class RouteDemo extends Component{

    render() {
        return (
        <div>
            <Menu className="nav" theme="dark">
                <Menu.Item><Link to="/home">Home</Link></Menu.Item>
                <Menu.Item><Link to="/about">About</Link></Menu.Item>
                <Menu.Item><Link to="/topics">Topics</Link></Menu.Item>
            </Menu>
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />

        </div>
        )
    }
}

const Home = () =>(
        <div className="fadeIn">
            <h2> Home </h2>
            </div>
    )
const About = () => (<h2 className="fadeIn">About</h2>)
const Topics = () =>(
    <h2 className="fadeIn">Topcis</h2>
)
