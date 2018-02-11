import React, {Component} from 'react';
import PropTypes from 'prop-types';

let instances = [];
const register = (comp) => instances.push(comp);
const unRegister = (comp) => 
    instances.splice(instances.indexof(comp), 1);

// trigger 遍历routes 并且渲染components ? 
export const historyPush = (path) => {
    window.history.pushState({}, null, path);
    instances.forEach(instance => instance.forceUpdate())
}

// 强制遍历routes，渲染components
window.addEventListener('popstate', () => {
    instances.forEach(instance => instance.forceUpdate());
})

const matchPath = (pathname, options) => {
    const {path, exact = false} = options;
    const match = new RegExp(`^${path}`).exec(pathname);
    if (!match) return null;
    if (exact && match[0] !== pathname) return null;
    return {path}
}

export class Link extends Component {
    static propTypes = {
        to: PropTypes.string
    };

    handleClick = (event) => {
        event.preventDefault();
        const {to} = this.props;
        // 推到历史记录中，方便back 和 forward
        historyPush(to);
    }

    render() {
        const {to, children} = this.props;
        return (
            <a href={to} onClick={this.handleClick} >
                {children}
                </a>
        )
    }
}

export class Route extends Component {
    static propTypes = {
        path: PropTypes.string,
        component: PropTypes.func,
        exact: PropTypes.bool
    }

    componentWillMount() {
        // register this route in instances.
        register(this);
    }

    render() {
        const {path, component, exact} = this.props;
        const match = matchPath(window.location.pathname, {path, exact});

        if (!match) return null;

        if (component) {
            return React.createElement(Component);
        }
    }

    componentWillUnMount() {
        unRegister(this);
    }
}

