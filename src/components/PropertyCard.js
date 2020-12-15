import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo.png";

const PropertyCard = ({
  title,
  city,
  type,
  bedrooms,
  bathrooms,
  price,
  email,
}) => {
  return (
    <div className="property-card">
      <img className="card-logo" src={Logo} alt="card logo" />
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="city">
        <span>{city}</span>
      </div>
      <div className="type">
        <span>{type}</span>
      </div>
      <div className="bedrooms">
        <span>{bedrooms}</span>
      </div>
      <div className="bathrooms">
        <span>{bathrooms}</span>
      </div>
      <div className="price">
        <span>{price}</span>
      </div>
      <div className="email">
        <span>{email}</span>
      </div>
      <p>
        <a className="email-button" href="mailto:someone@example.com">
          Email
        </a>
      </p>
    </div>
  );
};

PropertyCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  bathrooms: PropTypes.string.isRequired,
  bedrooms: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default PropertyCard;
