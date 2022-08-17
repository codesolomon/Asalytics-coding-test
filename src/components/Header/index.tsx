import React from "react";
import Button from "../Button";
import HeaderLogo from "./headerLogo";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContainer__item}>
        <HeaderLogo />
        <Button text="ANALYZE ASAs" variant="tertiary" />
      </div>
    </div>
  );
};

export default Header;
