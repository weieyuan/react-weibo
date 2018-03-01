import React, {Component} from "react";
import "./MainContent.less";
import UserInputPanel from "@/components/common/UserInputPanel.js";
import Cards from "@/components/cards/Cards.js";
import getCards, {getNewMsgs, addCard} from "@/mock/card_mock"

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            debug: true,
            suspened: false,
            hasNewMsg: true,
            showAnchor: false,
            cards: []
        };
        this.onClickNewMsg = this.onClickNewMsg.bind(this);
        this.onMousewheel = this.onMousewheel.bind(this);
        this.onClickAddCardBtn = this.onClickAddCardBtn.bind(this);
    }

    //region 生命周期
    componentWillMount() {
        if (this.state.debug) {
            this.setState({
                cards: getCards()
            });
        }

        //绑定滚轮事件
        window.addEventListener("scroll", this.onMousewheel);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.onMousewheel);
    }

    onMousewheel() {
        if (window.scrollY >= 75) {
            this.setState({
                suspened: true
            });
        }
        else {
            this.setState({
                suspened: false
            });
        }
        if (window.scrollY >= 50) {
            this.setState({
                showAnchor: true
            });
        }
        else {
            this.setState({
                showAnchor: false
            });
        }
    }
    //endregion

    //region event
    onClickNewMsg(e) {
        if (this.state.debug) {
            getNewMsgs();
            this.setState({
                hasNewMsg: false
            });
            setTimeout(() => {
                this.setState({
                    hasNewMsg: true
                });
            }, 60 * 1000);
            window.scrollTo(0, 0);
        }
    }
    //endregion

    //region callback
    onClickAddCardBtn(strMsg, bAnonymous) {
        if (this.state.debug) {
            addCard(strMsg, bAnonymous)
        }
        //清除输入框中的内容
        this.inputEle.clearInputMessage();
    }
    //endregion

    render() {

        let NewMsgElement = null;
        if (this.state.hasNewMsg) {
            NewMsgElement = (
                <div className={this.state.suspened ? 'suspension panel panel-info' : 'panel panel-info'}
                     onClick={this.onClickNewMsg}>
                    <div className="panel-heading new-info">
                        <ins>有新的消息，点击查看</ins>
                    </div>
                </div>
            );
        }
        let AnchorElement = null;
        if (this.state.showAnchor) {
            AnchorElement = (
                <a className="anchor" v-show="showAnchor" href="#">
                    <span className="glyphicon glyphicon-chevron-up"></span>
                </a>
            );
        }

        return (
            <div className="main-content">
                <div className="row">
                    <div className="col-md-8">
                        {NewMsgElement}

                        <div className="panel panel-default card-publish">
                            <div className="panel-heading"><strong>有什么想吐槽的，一吐为快吧</strong></div>
                            <div className="panel-body card-body">
                                <UserInputPanel btnName="发布" onClickAddCardBtn={this.onClickAddCardBtn} ref={(el) => this.inputEle=el}/>
                            </div>
                        </div>

                        <Cards cards={this.state.cards}/>
                    </div>
                    <div className="col-md-4">
                        <div className="panel panel-default left-panel-custom">
                            <h4 className="title">社区</h4>
                            <div className="panel-body">
                                QQ: 472967051
                                <br/>
                                微信：DESTINA
                            </div>
                        </div>
                    </div>
                </div>
                {AnchorElement}
            </div>
        );
    }
}

export default MainContent;