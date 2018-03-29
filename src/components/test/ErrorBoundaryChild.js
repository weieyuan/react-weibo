import React, {Component} from "react";

class ErrorBoundaryChild extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState((prevState, props) => {
            return {
                count: prevState.count + 1
            };
        }, () => {
            console.log(this.state.count);
            if (this.state.count == 5) {
                throw new Error();
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>click me fire time, and then crash!</button>
            </div>
        );
    }
}

export default ErrorBoundaryChild;