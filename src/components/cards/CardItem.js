import React, {Component} from "react";
import PropTypes from "prop-types";
import "./CardItem.less";
import InfoDisplayItem from "@/components/common/InfoDisplayItem.js";

class CardItem extends Component {
    constructor(props) {
        super(props);
    }

    cardInfo() {
        let oCardInfo = {
            pic: "",
            name: "",
            time: "",
            msg: "",
            rightBtns: []
        };
        Object.assign(oCardInfo, this.props.card);
        oCardInfo.rightBtns.push({
            key: "praise",
            label: this.props.card.praiseNum,
            icon: "glyphicon-thumbs-up"
        });
        oCardInfo.rightBtns.push({
            key: "remark",
            label: this.props.card.remarkNum,
            icon: "glyphicon-comment"
        });
        return oCardInfo;
    }

    render() {
        return (
            <div className="panel panel-default panel-custom">
                <InfoDisplayItem info={this.cardInfo()} />
            </div>
        );
    }
}

CardItem.propTypes = {
    card: PropTypes.object
};

export default CardItem;