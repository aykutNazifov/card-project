import React from "react";
import PropTypes from "prop-types";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} className="card-img-top" alt="place" />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardText}</p>
          <p className="card-text">
            <small className="text-muted">{this.props.updatedTime}</small>
          </p>
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  cardTitle: "Default Card Title",
};

Card.propTypes = {
  cardText: PropTypes.string,
};

export default Card;

/* const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.image} className="card-img-top" alt="place" />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <p className="card-text">
          <small className="text-muted">{props.updatedTime}</small>
        </p>
      </div>
    </div>
  );
}; */
