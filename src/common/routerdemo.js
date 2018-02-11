// demo.js
import React, {Component} from 'react';
import {
    Link, Route, historyPush
} from './router';

export class RouteDemo extends Component{

    render() {
        return (
        <div>
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul><hr/>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />

        </div>
        )
    }
}

const Home = () =>(
        <div>
            <h2> Home </h2>
            </div>
    )
const About = () => (<h2>About</h2>)
const Topics = () =>(
    <h2>Topcis</h2>
)
