import React, {Component} from 'react';
import './App.less';
import CustomHead from "@/components/head/CustomHead.js";
import MainContent from "@/components/body/MainContent.js";
import Test from "@/components/test/Test";
import store from "@/store";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            curPage: "MainPage",
            username: "游客"
        };
    }

    //region 生命周期
    componentWillMount() {
        let oMockUser = {
            name: "游客",
            login: false,
            pic: "@/images/person_default.png"
        };
        store.mutations.setUser(store.state, oMockUser);
    }
    //endregion

    onClickMainPage(e) {
        this.setState({
            curPage: "MainPage"
        });
        console.log("change to main page");
    }

    onClickRegistry(e) {
        this.setState({
            curPage: "RegistryPage"
        });
        console.log("change to registry page");
    }

    onClickLogin(e) {
        this.setState({
            curPage: "RegistryPage"
        });
        console.log("change to login page");
    }

    onClickLogOut() {
        this.setState({
            curPage: "RegistryPage"
        });
        console.log("change to logout page");
    }

    onClickTest() {
        this.setState({
            curPage: "TestPage"
        });
    }

    render() {
        const props = {
            username: this.state.username,
            curPage: this.state.curPage,
            onClickMainPage: this.onClickMainPage.bind(this),
            onClickRegistry: this.onClickRegistry.bind(this),
            onClickLogin: this.onClickLogin.bind(this),
            onClickLogOut: this.onClickLogOut.bind(this),
            onClickTest: this.onClickTest.bind(this)
        };

        let content = "";
        if (this.state.curPage === "MainPage") {
            content = <MainContent/>;
        }
        else if (this.state.curPage === "TestPage") {
            content = <Test/>
        }

        return (
            <div className="page">
                <CustomHead {...props}/>
                <div className="content">
                    <div className="container main-container">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
