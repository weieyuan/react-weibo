import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        };
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
        console.log(error);
        console.log(info);
    }

    render() {
        if (this.state.error) {
            return <div>error</div>
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;