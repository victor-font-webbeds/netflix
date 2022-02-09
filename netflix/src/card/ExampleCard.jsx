import React from "react";
import PropTypes from "prop-types";
import "./exampleCard.css";

/**
 * Primary UI component for user interaction
 */
export const Card = ({ image, text, darkMode, size, genre, actor }) => {
  const cardMode = darkMode ? "card--dark-mode" : "card--default-mode";
  return (
    <div className={`card card--${size} ${cardMode}`}>
      <img src={image} />
      <p className="card-text">{text}</p>
      <p className="card-genre">{genre}</p>
      <p className="card-actor">{actor}</p>
    </div>
  );
};

Card.propTypes = {
  /**
   * El modo de colores de la tarjeta
   */
  darkMode: PropTypes.bool,
  /**
   * El tamaño de la tarjeta
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * El contenido de la tarjeta
   */
  text: PropTypes.string.isRequired,

  genre: PropTypes.string.isRequired,

  actor: PropTypes.string.isRequired,
};

Card.defaultProps = {
  darkMode: false,
  size: "medium",
};
