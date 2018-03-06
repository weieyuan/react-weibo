import React, {Component} from "react";
import ReplyItem from "@/components/reply/ReplyItem.js";
import "@/components/reply/Replys.less";
import PropTypes from "prop-types";

class Replys extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-group list-group-custom">
                <div className="list-group-item item-custom">
                    {this.props.replys.map((oReply) => (
                        <ReplyItem key={oReply.id} reply={oReply}></ReplyItem>
                    ))}
                </div>
            </div>
        );
    }
}

Replys.propTypes = {
    replys: PropTypes.array.isRequired
};

export default Replys;