import React, {Component} from "react";
import CardItem from "@/components/cards/CardItem.js";
import UserInputPanel from "@/components/common/UserInputPanel.js";
import Remarks from "@/components/remark/Remarks.js";
import {getCardInfoById, getRemarksByCardId, addRemark} from "@/mock/card_mock";
import store from "@/store";

class RemarkDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {},
            remarks: []
        };
        this.onClickBtn = this.onClickBtn.bind(this);
        console.log(props);
    }

    //region 生命周期
    componentWillMount() {
        //getCardInfo
        this.getCardInfo();
        //getCardRemarks
        this.getCardRemarks();
    }

    getCardInfo() {
        this.setState((prevState, props) => {
            let oCard = getCardInfoById(this.props.match.params.cardId);
            return {
                card: oCard
            };
        });
    }

    getCardRemarks() {
        this.setState((prevState, props) => {
            let oRemarks = getRemarksByCardId(this.props.match.params.cardId);
            return {
                remarks: oRemarks
            }
        });
    }

    componentDidMount(){
        console.log("RemarkDetails componentDidMount");
        store.mutations.setCardId(store.state, this.props.match.params.cardId);
    }

    //endregion

    //region callback
    onClickBtn(strMsg, bAnonymous){
        //评论+1
        this.setState((prevState, props) => {
            let oCard = prevState.card;
            oCard.remarkNum += 1;
            return {
                card: oCard
            }
        });
        addRemark(this.props.match.params.cardId, strMsg, bAnonymous);
        //清除input
        this.inputEl.clearInputMessage();
    }
    //endregion

    render() {
        return (
            <div>
                <CardItem card={this.state.card}/>
                <UserInputPanel btnName="评论" onClickBtn={this.onClickBtn} ref={(el) => this.inputEl=el}/>
                <Remarks remarks={this.state.remarks}/>
            </div>
        );
    }
}

export default RemarkDetails