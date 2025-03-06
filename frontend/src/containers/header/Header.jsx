import styles from "./styles.module.css";
import header_img_one from "../../assets/header/header_img_one.svg";
import header_img_two from "../../assets/header/header_img_two.svg";
import header_img_three from "../../assets/header/header_img_three.svg";

export default function Header() {
  return (
    <header className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["header__logo-group"]}>
          <img src={header_img_one} alt="Логотип" className={styles["header__logo"]} />
          <p className={styles["header__title"]}>
            Личный кабинет<br />потребителя
          </p>
        </div>
        <nav className={styles["header__nav"]}>
          <ul className={styles["header__nav-list"]}>
            <li className={styles["header__nav-item"]}>
              <button className={styles["header__nav-button"]}>
                <img src={header_img_two} alt="Помощь" className={styles["header__nav-icon"]} />
              </button>
            </li>
            <li className={styles["header__nav-item"]}>
              <button className={styles["header__nav-button"]}>
                <img src={header_img_three} alt="Оповещения" className={styles["header__nav-icon__notif"]} />
                <div className={styles["notification-counter"]}>
                  <span className={styles["notification-counter__content"]}>
                    12
                  </span>
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};
