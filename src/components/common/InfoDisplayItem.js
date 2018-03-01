import React, {Component} from "react";
import utils from "@/widget/utils";
import {cardConfig} from "@/config";
import PropTypes from "prop-types";
import "./InfoDisplayItem.less";

class InfoDisplayItem extends Component {
    constructor(props) {
        super(props);
        this.onClickRightBtn = this.onClickRightBtn.bind(this);
    }

    onClickRightBtn(oRightBtn) {
        this.props.onClickRightBtn(oRightBtn);
    }

    headPic() {
        if (!this.props.info.anonymous) {
            return this.props.info.pic;
        }
        else {
            return cardConfig.DEFAULT_PIC_URL;
        }
    }

    render() {
        let picUrl = this.headPic();

        return (
            <div className="media">
                <div className="media-left">
                    <img className="media-object person-icon" src={require("../../images/person_default.png")} alt="..."/>
                </div>
                <div className="media-body">
                    <p>
                        <b className="remark-person-name">{this.props.info.name}</b>
                    </p>
                    <div className="remark-foot">
                        <div className="remark-item-left">
                            <span
                                className="glyphicon glyphicon-thumbs-time"></span> {utils.timeFormat(this.props.info.time)}
                        </div>
                        {this.props.info.rightBtns.map((rightBtn, index) => {
                            <React.Fragment key={index}>
                                <div className="remark-item-right" onClick={(e) => this.onClickRightBtn(rightBtn)}>
                                    <span className={"glyphicon " + rightBtn.icon}></span> ({rightBtn.label})
                                </div>
                                {index !== this.props.info.rightBtns.length - 1 ? (
                                    <div className="remark-item-right split">
                                        <div className="split-line"></div>
                                    </div>) : null}
                            </React.Fragment>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

InfoDisplayItem.propTypes = {
    info: PropTypes.object.isRequired,
    onClickRightBtn: PropTypes.func.isRequired
};

export default InfoDisplayItem;