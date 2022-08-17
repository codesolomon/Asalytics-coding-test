import React from "react";
import styles from "@styles/Layout.module.css";
import Meta from "./Meta";
import Header from "@components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <div className={styles.main}>
          <Header />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
