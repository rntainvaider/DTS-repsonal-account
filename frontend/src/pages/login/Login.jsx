import Header from "../../containers/header/Header";
import Footer from "../../containers/footer/Footer";
import FormLogin from "../../containers/formLogin/FormLogin";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <div className={styles["login"]}>
      <Header />
      <div className={styles["main"]}>
        <FormLogin />
      </div>
      <Footer />
    </div>
    )
};
