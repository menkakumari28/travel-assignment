import React from "react";

import styles from "./Card.module.scss";

const Card = ({ url, name, description, cardID, gridlayout = false }) => {
  return (
    <div
      className={styles.cardItem + " " + (gridlayout && styles.cardLayout)}
      id={cardID}
    >
      <img src={url} alt={name} />
      <div className={styles.cardTitle}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
