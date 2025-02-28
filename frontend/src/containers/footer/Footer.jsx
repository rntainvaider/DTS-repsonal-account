import React from 'react';
import styles from "./styles.module.css";
import logo from "../../assets/images/logo.svg"

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer__logo"]}>
          <img src={logo} alt="Логотип" className={styles["footer__logo-img"]} />
          <p className={styles["footer__logo-title"]}>
            ©ООО “ДТС”, 2025
          </p>
        </div>
        <div className={styles["footer__info-office"]}>
          <p className={styles["footer__info-office__title"]}>
            Офис обслуживания
          </p>
          <p className={styles["footer__info-office__text"]}>
            г. Батайск, ул. Козлова, д. 32
          </p>
          <p className={styles["footer__info-office__text"]}>
            Тел:&nbsp;
            <a href="tel:+78695224252" className={styles["footer__info-office__link"]}>
              +7 (86352) 24-25-2
            </a>
          </p>
          <p className={styles["footer__info-office__text"]}>
            Пн- Пт: 17:00 - 22:00
          </p>
          <p className={styles["footer__info-office__text"]}>
            Сб-Вс: выходной
          </p>
          <p className={styles["footer__info-office__text"]}>
            <a href="mailto:mail@mail.ru" className={styles["footer__info-office__link"]}>
              mail@mail.ru
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
