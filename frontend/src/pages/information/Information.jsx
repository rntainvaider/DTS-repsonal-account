import AsideBar from "../../containers/asideBar/AsideBar";
import Footer from "../../containers/footer/Footer";
import Header from "../../containers/header/Header";
import styles from "./styles.module.css";

export default function Information() {
  return (
    <div className={styles["information"]}>
      <Header />
      <div className={styles["main"]}>
        <AsideBar />
      </div>
      <Footer />
    </div>
  )
};
