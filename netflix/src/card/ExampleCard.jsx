import React from "react";
import PropTypes from "prop-types";
import "./exampleCard.css";

/**
 * Primary UI component for user interaction
 */
export const Card = ({ image, text, darkMode, size, genre, actor, company }) => {
  const cardMode = darkMode ? "card--dark-mode" : "card--default-mode";
  return (
    <div className={`card card--${size} ${cardMode}`}>
      <div>
        <div className={`gradient--${cardMode}`}>
          <img src={image}/>
        </div>
        <button type="button" className={`watch-now--${cardMode}`}><a href="https:\\www.google.com" className={`button-text--${cardMode}`}>Ver ahora</a></button>
      </div>
      <p className="card-text">{text}</p>
      <p className="card-genre">Género: {genre}</p>
      <p className="card-actor">Reparto: {actor}</p>
      <p className="card-company">Compañías: {company}</p> <br/>
      <li>
      <span class="font-awesome-icons star"></span> AYUDA, ME RINDO, ESTE ES UN PROBLEMA PARA EL YO FUTURO
      </li>
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

  company: PropTypes.string.isRequired,
};

Card.defaultProps = {
  darkMode: false,
  size: "medium",
};
