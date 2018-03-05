import React, {Component} from "react";
import "./UserInputPanel.less";
import PropTypes from "prop-types";

class UserInputPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputMessage: "",
            checked: false
        };
        this.inputChange = this.inputChange.bind(this);
        this.onClickBtn = this.onClickBtn.bind(this);
        this.checkedChange = this.checkedChange.bind(this);
    }

    //region event
    inputChange(e) {
        this.setState({
            inputMessage: e.target.value
        });
    }

    onClickBtn(e) {
        this.props.onClickBtn && this.props.onClickBtn(this.state.inputMessage, this.state.checked);
    }

    checkedChange(e) {
        this.setState({
            checked: e.target.checked
        });
    }

    //endregion

    //region 3rd
    clearInputMessage() {
        this.setState({
            inputMessage: ""
        });
    }

    //endregion

    render() {
        let ButtonClass = "btn btn-success btn-sm";
        if (this.state.inputMessage === "") {
            ButtonClass += " disabled";
        }

        return (
            <div className="panel panel-default panel-remark-custom">
                <div className="panel-body">
                    <textarea className="form-control input-style" rows="2" value={this.state.inputMessage}
                              onChange={this.inputChange}></textarea>
                </div>
                <div className="panel-footer footer-custom">
                    <div className="btn-custom">
                        <a type="button" className={ButtonClass} onClick={this.onClickBtn}>{this.props.btnName}</a>
                    </div>
                    <div className="checkbox checkbox-custom">
                        <label>
                            <input type="checkbox" checked={this.state.checked} onChange={this.checkedChange}/>
                            匿名
                        </label>
                    </div>

                </div>
            </div>
        );
    }
}

UserInputPanel.propTypes = {
    btnName: PropTypes.string.isRequired,
    onClickBtn: PropTypes.func.isRequired
};

export default UserInputPanel;