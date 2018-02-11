import React from 'react'
import { Button, Menu, Icon, Layout} from 'antd';
import { Route, Redirect, Switch, Link, StaticRouter } from 'react-router-dom';
import LoginForm from '../components/login/login';
import Interfaces from '../components/network/interface';
import Dashboard from '../components/dashboard/dashboard'
import {RouteDemo} from '../common/routerdemo'

const { Header, Sider, Content } = Layout;
const BASE_NAME = "";
const paths = {
    home: BASE_NAME + '/',
    dashboard: BASE_NAME + '/dashboard',
    login: BASE_NAME + '/login',
    network: BASE_NAME + '/network'
}

export default class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            collapsed: true
        }
    }

    toggleNav() {
        this.setState({
            collapsed: !this.setState.collapsed
        })
    }

    render() {
        var {collapsed} = this.state;
        return (
            <Layout>
                <Sider breakpoint='sm' collapsible style={{width: 160}}>
                    <Menu theme="dark">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Dashboard</span>
                            <Link to="dashboard" ></Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Interface</span>
                            <Link to="network" ></Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="user" />
                            <span>Login</span>
                            <Link to="login" ></Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Content className="content">
                    <Route exact path={paths.home} component={Dashboard} />
                    <Route path={paths.dashboard} component={Dashboard} />
                    {/* <StaticRouter basename='/' location="/login" context={LoginForm} /> */}
                    <Route exact path={paths.login} component={LoginForm} />
                    <Route path={paths.network} component={Interfaces} />
                </Content>
            </Layout>
        );
    }
}
