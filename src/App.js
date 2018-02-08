import React, { Component } from 'react';
import { Menu, Icon, Button, Layout } from 'antd';
import logo from './logo.svg';
// import Login from './login/login';
import './App.css';
import 'antd/dist/antd.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const {Header} = Layout;

class App extends Component {
  state = {
    collapsed: false
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout breakpoint="sm" className="App">
        <Header >
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Flight Control Center </h1>
        </Header>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Layout>
    );
  }
}

export default App;
