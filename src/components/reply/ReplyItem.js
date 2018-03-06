import React, {Component} from "react";
import InfoDisplayItem from "@/components/common/InfoDisplayItem.js";
import PropTypes from "prop-types";

class ReplyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replyInner: props.reply
        };
        this.onClick4ReplyBtn = this.onClick4ReplyBtn.bind(this);
    }

    replyInfo() {
        let oReplyInfo = {
            pic: "",
            name: "",
            time: "",
            msg: "",
            rightBtns: []
        };
        Object.assign(oReplyInfo, this.state.replyInner);
        oReplyInfo.rightBtns.push({
            key: "praise",
            label: this.state.replyInner.praiseNum,
            icon: "glyphicon-thumbs-up"
        });
        return oReplyInfo;
    }

    onClick4ReplyBtn(oReplyBtn) {
        if (oReplyBtn.key == "praise") {
            this.onClickPraiseBtn();
        }
    }

    onClickPraiseBtn() {
        this.setState((prevState, props) => {
            prevState.replyInner.praiseNum += 1;
            return {
                replyInner: prevState.replyInner
            }
        });
    }

    render() {
        return (
            <InfoDisplayItem info={this.replyInfo()} onClickRightBtn={this.onClick4ReplyBtn}></InfoDisplayItem>
        );
    }
}

ReplyItem.propTypes = {
    reply: PropTypes.object.isRequired
};

export default ReplyItem;