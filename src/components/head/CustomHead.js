import React, {Component} from "react";
import "./CustomHead.less";
import logo from "@/images/logo.png";
import store from "@/store";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const CustomerLink = ({label, to}) => {
    return (
        <Route path={to} exact="true" children={({match}) => (
            <Link className={match ? "nav-item active" : "nav-item"} to={to}>
                <span className="glyphicon glyphicon-home"></span> {label}
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
                        <CustomerLink to="/MainPage" label="主页"></CustomerLink>
                        <Link to="/RegistryPage" className="nav-item">
                            <span className="glyphicon glyphicon-registration-mark"></span> 注册
                        </Link>
                        <Link to="/LoginPage" className="nav-item">
                            <span className="glyphicon glyphicon-log-in"></span> 登录
                        </Link>
                        <Link to="/LogOutPage" className="nav-item">
                            <span className="glyphicon glyphicon-log-out"></span> 注销
                        </Link>
                        <Link to="/Test" className="nav-item"> Test
                        </Link>
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