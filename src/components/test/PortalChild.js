import React, {Component} from "react";
import ReactDOM from "react-dom";

class PortalChild extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const ele = (
            <div>
                <button onClick={() => console.log("PortalChild Click")}>PortalChild</button>
            </div>
        );
        return ReactDOM.createPortal(ele, document.getElementById("test"));
    }
}

export default PortalChild;