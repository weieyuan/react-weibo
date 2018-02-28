import React, {Component} from "react";
import CardItem from "./CardItem.js";
import PropTypes from "prop-types";

class Cards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let CardElements = this.props.cards.map((oCard) => {
            return <CardItem key={oCard.id} card={oCard}/>
        });

        return (
            <div>
                {CardElements}
            </div>
        );
    }
}

Cards.propTypes = {
    cards: PropTypes.array.isRequired
};

export default Cards;