import React, {Component} from "react";
import "./CustomHead.less";
import logo from "@/images/logo.png";

class CustomHead extends Component {
    constructor(props) {
        super(props);
        this.onClickMainPage = this.onClickMainPage.bind(this);
        this.onClickRegistry = this.onClickRegistry.bind(this);
        this.onClickLogin = this.onClickLogin.bind(this);
        this.onClickLogOut = this.onClickLogOut.bind(this);
        this.onClickTest = this.onClickTest.bind(this);
    }

    onClickMainPage(e) {
        this.props.onClickMainPage(e);
    }

    onClickRegistry(e) {
        this.props.onClickRegistry(e);
    }

    onClickLogin(e) {
        this.props.onClickLogin(e);
    }

    onClickLogOut(e) {
        this.props.onClickLogOut(e);
    }

    onClickTest(e) {
        this.props.onClickTest(e);
    }

    render() {
        return (
            <nav className="main-navigation">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="rightContent">
                    <div className="container">
                        <li className={this.props.curPage === "MainPage" ? "nav-item active" : "nav-item"}
                            onClick={this.onClickMainPage}>
                            <span className="glyphicon glyphicon-home"></span> 首页
                        </li>
                        <li className={this.props.curPage === "RegistryPage" ? "nav-item active" : "nav-item"}
                            onClick={this.onClickRegistry}>
                            <span className="glyphicon glyphicon-registration-mark"></span> 注册
                        </li>
                        <li className={this.props.curPage === "LoginPage" ? "nav-item active" : "nav-item"}
                            onClick={this.onClickLogin}>
                            <span className="glyphicon glyphicon-log-in"></span> 登录
                        </li>
                        <li className={this.props.curPage === "LogOutPage" ? "nav-item active" : "nav-item"}
                            onClick={this.onClickLogOut}>
                            <span className="glyphicon glyphicon-log-out"></span> 注销
                        </li>
                        <li className="nav-item" onClick={this.onClickTest}> Test
                        </li>
                        <div className="left">
                            <li>
                                <span className="glyphicon glyphicon-user"></span> {this.props.username}
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default CustomHead;