import React, {Component} from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function hoc(SrcComponent, oConfig) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: oConfig.name
            };
            this.handleClick = this.handleClick.bind(this);
        }

        handleClick(e, name) {
            console.log(this);
            console.log(name);
        }

        componentDidMount() {
            console.log("DidMount");
        }

        componentWillUnmount() {
            console.log("WillUnmount");
        }

        render() {
            return (
                <SrcComponent {...this.props} data={this.state.data} handleClick={this.handleClick}/>
            );
        }
    }
}

class C1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.data}
                <button onClick={(e) => this.props.handleClick(e, this.props.data)}>C1 click</button>
            </div>
        );
    }
}

class C2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.data}
                <button onClick={(e) => this.props.handleClick(e, this.props.data)}>C2 click</button>
            </div>
        );
    }
}

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            x: 0,
            y: 0
        };
    }

    handleClick(oEvent) {
        this.setState({
            x: oEvent.clientX,
            y: oEvent.clientY
        });
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.props.render(this.state)}
            </div>
        );
    }
}

function Home(props) {
    return (
        <div>This is home page!</div>
    );
}

class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let C1Wrapper = hoc(C1, {name: "C1"});
        let C2Wrapper = hoc(C2, {name: "C2"});
        let oFun = function (state) {
            return (
                <p>x: {state.x}, y: {state.y}</p>
            );
        };
        return (
            <div>Test
                <C1Wrapper/>
                <C2Wrapper/>
                <Mouse render={oFun}/>
                <Router>
                    <div>
                        <Link to="/home">home</Link>
                        <Route exact path="/home" component={Home}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Test;