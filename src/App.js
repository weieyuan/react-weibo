import React, {Component} from 'react';
import './App.less';
import CustomHead from "@/components/head/CustomHead.js";
import MainContent from "@/components/body/MainContent.js";
import Test from "@/components/test/Test";
import store from "@/store";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

class App extends Component {

    constructor(props) {
        super(props);
    }

    //region 生命周期
    componentWillMount() {
        let oMockUser = {
            name: "游客",
            login: false,
            pic: "../../images/person_default.png"
        };
        store.mutations.setUser(store.state, oMockUser);
    }

    //endregion

    render() {

        return (
            <Router>
                <div className="page">
                    <CustomHead />
                    <div className="content">
                        <div className="container main-container">
                            <Route path="/MainPage" component={MainContent}></Route>
                            <Route path="/Test" component={Test}></Route>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
