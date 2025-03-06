import styles from "./styles.module.css";
import footer_img from "../../assets/footer/footer_img.svg";

export default function Footer() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["container"]}>
        <div className={styles["footer__block"]}>
          <div className={styles["footer__logo-group"]}>
            <img src={footer_img} alt="Логотип" className={styles["footer__logo-icon"]} />
            <p className={styles["footer__logo-text"]}>
              ©ООО “ДТС”, 2025
            </p>
          </div>
          <div className={styles["footer__address"]}>
            <p className={styles["address__title"]}>
              Офис обслуживания
            </p>
            <p className={styles["address__text"]}>
              г. Батайск, ул. Козлова, д. 32
            </p>
            <p className={styles["address__text"]}>
              Тел:&nbsp;
              <a href="tel:+78635224252" className={styles["address_link"]}>
                +7 (86352) 24-25-2
              </a>
            </p>
            <p className={styles["address__text"]}>
              Пн- Пт: 17:00 - 22:00
            </p>
            <p className={styles["address__text"]}>
              Сб-Вс: выходной
            </p>
            <a href="mailto:mail@mail.ru" className={styles["address_link"]}>
              mail@mail.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
};
