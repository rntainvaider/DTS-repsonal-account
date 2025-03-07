import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Header from "../../containers/header/Header";
import Footer from "../../containers/footer/Footer";
import FormForgoutPassword from "../../containers/formForgoutPassword/FromForgoutPassword";

export default function ForgoutPassword() {
  return (
    <div className={styles["forgout-password"]}>
      <Header />
      <div className={styles["main"]}>
        <FormForgoutPassword />
      </div>
      <Footer />
    </div>
  )
};
