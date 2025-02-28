import React from 'react';
import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg";
import help from "../../assets/images/header/help.svg";
import notifications from "../../assets/images/header/notifications.svg";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <div className={styles["header-container"]}>
        <div className={styles["header-flex"]}>
          <img src={logo} alt="Логотип" className={styles["header__logo-img"]} />
          <p className={styles["header__logo-title"]}>
            Личный кабинет потребителя
          </p>
        </div>
        <div className={styles["header-flex"]}>
          <img src={help} alt="Помощь" className={styles["header__actions-img"]} />
          <img src={notifications} alt="Оповещения" className={styles["header__actions-img"]} />
        </div>
      </div>
    </div>
  )
}

export default Header
