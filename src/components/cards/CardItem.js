import React, {Component} from "react";
import PropTypes from "prop-types";
import "./CardItem.less";
import InfoDisplayItem from "@/components/common/InfoDisplayItem.js";

class CardItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardInner: props.card
        };
        this.onClickRightBtn = this.onClickRightBtn.bind(this);
    }

    cardInfo() {
        let oCardInfo = {
            pic: "",
            name: "",
            time: "",
            msg: "",
            rightBtns: []
        };
        Object.assign(oCardInfo, this.state.cardInner);
        oCardInfo.rightBtns.push({
            key: "praise",
            label: this.state.cardInner.praiseNum,
            icon: "glyphicon-thumbs-up"
        });
        oCardInfo.rightBtns.push({
            key: "remark",
            label: this.state.cardInner.remarkNum,
            icon: "glyphicon-comment"
        });
        return oCardInfo;
    }

    onClickRightBtn(oRightBtn) {
        if (oRightBtn.key === "praise") {
            this.onClickPraise();
        }
        else if (oRightBtn.key === "remark") {
            this.onClickRemark();
        }
    }

    onClickPraise() {
        this.setState((prevState, props) => {
            prevState.cardInner.praiseNum += 1;
            return {
                cardInner: prevState.cardInner
            }
        });
    }

    onClickRemark() {
        this.props.onClickRemark && this.props.onClickRemark(this.state.cardInner);
    }

    render() {
        return (
            <div className="panel panel-default panel-custom">
                <InfoDisplayItem info={this.cardInfo()} onClickRightBtn={this.onClickRightBtn}/>
            </div>
        );
    }
}

CardItem.propTypes = {
    card: PropTypes.object,
    onClickRemark: PropTypes.func
};

export default CardItem;