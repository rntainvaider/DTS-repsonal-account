import React from 'react';
import { Header, Footer, RegistrationForm } from "../../containers";
import styles from "./styles.module.css";

const Registration = () => {
  return (
    <div className={styles["container"]}>
      <Header />
      <div className={styles["content"]}>
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  )
}

export default Registration
