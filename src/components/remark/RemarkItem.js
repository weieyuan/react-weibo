import React, {Component} from "react";
import PropTypes from "prop-types";
import InfoDisplayItem from "@/components/common/InfoDisplayItem.js";
import {getReplysById, addReply} from "@/mock/card_mock";
import store from "@/store";
import UserInputPanel from "@/components/common/UserInputPanel.js";
import Replys from "@/components/reply/Replys.js";

class RemarkItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remarkInner: props.remark,
            showReply: false,
            replys: []
        };

        this.onClickRightBtn = this.onClick4RemarkBtn.bind(this);
        this.addReply = this.addReply.bind(this);
    }

    onClick4RemarkBtn(oRightBtn) {
        if (oRightBtn.key == "praise") {
            this.onClickPraiseBtn();
        }
        else if (oRightBtn.key == "reply") {
            this.onClickReplyBtn();
        }
    }

    onClickPraiseBtn() {
        this.setState((prevState, props) => {
            prevState.remarkInner.praiseNum += 1;
            return {
                remarkInner: prevState.remarkInner
            }
        });
    }

    onClickReplyBtn() {
        this.setState((prevState, props) => {
            return {
                showReply: !prevState.showReply
            }
        }, () => {
            if (this.state.remarkInner.replyNum != this.state.replys.length) {
                this.setState({
                    replys: getReplysById(store.state.RemarkDetails.cardId, this.state.remarkInner.id)
                });
            }
        });
    }

    addReply(strMsg, bAnonymous) {
        this.setState((prevState, props) => {
            prevState.remarkInner.replyNum += 1;
            return {
                remarkInner: prevState.remarkInner
            };
        });
        addReply(store.state.RemarkDetails.cardId, this.state.remarkInner.id, strMsg, bAnonymous);
        this.inpuEl.clearInputMessage();
    }

    remarkInfo() {
        let oRemarkInfo = {
            pic: "",
            name: "",
            time: "",
            msg: "",
            rightBtns: []
        };
        Object.assign(oRemarkInfo, this.state.remarkInner);
        oRemarkInfo.rightBtns.push({
            key: "praise",
            label: this.state.remarkInner.praiseNum,
            icon: "glyphicon-thumbs-up"
        });
        oRemarkInfo.rightBtns.push({
            key: "reply",
            label: this.state.remarkInner.replyNum,
            icon: "glyphicon-envelope"
        });
        return oRemarkInfo;
    }

    render() {

        let oReplyEle = null;
        if (this.state.showReply) {
            oReplyEle = (
                <div className="reply-custom">
                    <UserInputPanel ref={(el) => this.inpuEl=el} btnName="回复" onClickBtn={this.addReply}></UserInputPanel>
                    <Replys replys={this.state.replys}></Replys>
                </div>
            );
        }

        return (
            <div>
                <InfoDisplayItem info={this.remarkInfo()} onClickRightBtn={this.onClickRightBtn}></InfoDisplayItem>
                {oReplyEle}
            </div>
        );
    }
}

RemarkItem.propTypes = {
    remark: PropTypes.object.isRequired
};

export default RemarkItem;