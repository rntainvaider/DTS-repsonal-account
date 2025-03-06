import React from 'react';
import Header from "../../containers/header/Header";
import Footer from "../../containers/footer/Footer";
import FormRegistration from '../../containers/formRegistration/FormRegistration';
import styles from "./styles.module.css";

export default function Registration() {
  return (
    <div className={styles["registration"]}>
      <Header />
      <FormRegistration />
      <Footer />
    </div>
  )
};
