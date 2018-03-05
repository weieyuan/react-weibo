import React, {Component} from "react";
import CardItem from "./CardItem.js";
import PropTypes from "prop-types";

class Cards extends Component {
    constructor(props) {
        super(props);

        this.onClickRemark = this.onClickRemark.bind(this);
    }

    onClickRemark(oCard){
        this.props.onClickRemark(oCard);
    }

    render() {
        let CardElements = this.props.cards.map((oCard) => {
            return <CardItem key={oCard.id} card={oCard} onClickRemark={this.onClickRemark}/>
        });

        return (
            <div>
                {CardElements}
            </div>
        );
    }
}

Cards.propTypes = {
    cards: PropTypes.array.isRequired,
    onClickRemark: PropTypes.func
};

export default Cards;