import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import InputAuthLogin from "../../components/inputAuthLogin/InputAuthLogin";
import ButtonAuthLogin from "../../components/buttonAuthLogin/ButtonAuthLogin";

export default function FormLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/information");
  };

  return (
    <div className={styles["form-login"]}>
      <div className={styles["form-login__group"]}>
        <h2 className={styles["form-login__title"]}>
          Вход в<br />личный кабинет
        </h2>
        <p className={styles["form-group__text"]}>
          Нет учётной записи?&nbsp;
          <Link to="/registration" className={styles["form-group__link"]}>
            Зарегистрироваться
          </Link>
        </p>
      </div>
      <form action="" onSubmit={handleSubmit} className={styles["form"]}>
        <div className={styles["form__group"]}>
          <InputAuthLogin
            label="E-mail"
            type="email"
            name="email"
            value=""
            placeholder="Введите email" />
          <InputAuthLogin
            label="Пароль"
            type="password"
            name="password"
            value=""
            placeholder="Введите пароль" />
          <div className={styles["form__block"]}>
            <label className={styles["checkbox__label"]}>
              <input type="checkbox" className={styles["checkbox__input"]} />
              Запомнить меня
            </label>
            <Link to="/forgout_password" className={styles["forgot__password"]}>
              Забыли пароль?
            </Link>
          </div>
          <div className={styles["form__button-wrapper"]}>
            <ButtonAuthLogin type="submit" value="Войти" />
          </div>
        </div>
      </form>
    </div>
  )
};
