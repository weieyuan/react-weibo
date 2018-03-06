import React, {Component} from "react";
import RemarkItem from "@/components/remark/RemarkItem.js";
import PropTypes from "prop-types";

class Remarks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="list-group">
                {this.props.remarks.map((oRemark) => (
                    <React.Fragment key={oRemark.id}>
                        <div className="list-group-item item-custom">
                            <RemarkItem remark={oRemark}/>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        );
    }
}

Remarks.propTypes = {
    remarks: PropTypes.array.isRequired
};

export default Remarks;