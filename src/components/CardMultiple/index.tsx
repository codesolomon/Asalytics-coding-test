import React from "react";
import Card, { AsalistProps } from "@components/Card";
import styles from "./cardMultiple.module.css";

const CardMultiple = (Asalist: any) => {
  return (
    <div className={styles.cardContainer}>
      {Asalist?.AsaList?.length > 0 &&
        Array.isArray(Asalist.AsaList) &&
        Asalist?.AsaList?.map((card: AsalistProps, index: number) => (
          <div key={index}>
            <Card
              name={card.name}
              available={card.available}
              logo={card.logo}
            />
          </div>
        ))}
    </div>
  );
};

export default CardMultiple;
