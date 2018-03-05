import React, {Component} from "react";
import "./CustomHead.less";
import logo from "@/images/logo.png";
import store from "@/store";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const CustomerLink = ({label, to, className}) => {
    return (
        <Route path={to} exact={true} children={({match}) => (
            <Link className={match ? "nav-item active" : "nav-item"} to={to}>
                <span className={"glyphicon " + className}></span> {label}
            </Link>
        )}/>
    );
};

class CustomHead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="main-navigation">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="rightContent">
                    <div className="container">
                        <CustomerLink to="/" label="主页" className="glyphicon-home"></CustomerLink>
                        <CustomerLink to="/RegistryPage" label="注册" className="glyphicon-registration-mark"></CustomerLink>
                        <CustomerLink to="/LoginPage" label="登录" className="glyphicon-log-in"></CustomerLink>
                        <CustomerLink to="/LogOutPage" label="注销" className="glyphicon-log-out"></CustomerLink>
                        <CustomerLink to="/Test" label="Test"></CustomerLink>
                        <div className="left">
                            <li>
                                <span className="glyphicon glyphicon-user"></span> {store.state.user.name}
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default CustomHead;