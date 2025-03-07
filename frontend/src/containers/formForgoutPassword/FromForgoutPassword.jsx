import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import InputAuthLogin from "../../components/inputAuthLogin/InputAuthLogin";
import ButtonAuthLogin from "../../components/buttonAuthLogin/ButtonAuthLogin";

export default function FormForgoutPassword() {
  const [step, setStep] = useState(1);
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  const handleFirstStepSubmit = (e) => {
    e.preventDefault();
    setStep(2);

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      navigate("/login");
    }, 3000);
  };

  return (
    <div className={styles["forgout-password"]}>
      <div className={styles["forgout-password__group"]}>
        <h2 className={styles["forgout-password__title"]}>
          Восстановление пароля
        </h2>
        <p className={styles["forgout-password__text"]}>
          Уже есть учётная запись?&nbsp;
          <Link to="/login" className={styles["forgout-password__link"]}>
            Войти
          </Link>
        </p>
      </div>
      {step === 1 ? (
        <form action="" onSubmit={handleFirstStepSubmit} className={styles["form"]}>
          <InputAuthLogin
            label="Email"
            type="email"
            name="email"
            value=""
            placeholder="Введите email" />
          <div className={styles["form-links"]}>
            <p className={styles["form__text"]}>
              Нет учётной записи?&nbsp;
              <Link to="/registration" className={styles["form__link"]}>
                Зарегистрироваться
              </Link>
            </p>
            <p className={styles["form__text"]}>
              Забыли e-mail?&nbsp;
              <Link to="/registration" className={styles["form__link"]}>
                Восстановить
              </Link>
            </p>
          </div>
          <div className={styles["form__button"]}>
            <ButtonAuthLogin type="submit" value="Восстановить пароль" />
          </div>
        </form>
      ) : (
        <form action="" onSubmit={handleFirstStepSubmit} className={styles["form"]}>
          <p className={styles["form__text-email"]}>
            Ссылка для<br />восстановления пароля<br />направлена на вашу почту
          </p>
          <p className={styles["form__text-email"]}>
            Перенаправление через {countdown} секунды...
          </p>
        </form>
      )}
    </div>
  )
};
