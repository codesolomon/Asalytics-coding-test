import React from "react";
import Button from "../Button";
import styles from "./card.module.css";
import CardLogo from "./cardLogo/cardLogo";

export interface AsalistProps {
  name: string;
  available: Boolean;
  logo: string;
}
const Card: React.FC<AsalistProps> = ({ name, available, logo }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContainer__cardFlex}>
        <CardLogo logo={logo} name={name} />
        <div className={styles["cardContainer__cardFlex--cardItem"]}>
          <h2 className={styles["cardContainer__cardFlex--cardText"]}>
            {name}
          </h2>
          <Button
            text={available ? "Available" : "Unavailable"}
            variant={available ? "primary" : "secondary"}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
