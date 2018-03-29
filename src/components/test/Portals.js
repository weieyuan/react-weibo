import React, {Component} from "react";
import PortalChild from "./PortalChild";

class Portals extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div onClick={() => console.log("Portals click")}>
                <PortalChild></PortalChild>
            </div>
        );
    }
}

export default Portals;