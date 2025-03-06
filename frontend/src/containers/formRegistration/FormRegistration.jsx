import { useState } from "react";
import InputAuthLogin from "../../components/inputAuthLogin/InputAuthLogin";
import styles from "./styles.module.css";
import input_img from "../../assets/inputAuthLogin/input_img.svg";
import ButtonAuthLogin from "../../components/buttonAuthLogin/ButtonAuthLogin";

export default function FormRegistration() {
  const [step, setStep] = useState(1);

  const handleFirstStepSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSecondStepSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles["registration"]}>
      <div className={styles["registration__group"]}>
        <h2 className={styles["registration__title"]}>
          Регистрация
        </h2>
        <p className={styles["registration__text"]}>
          Уже есть учётная запись?&nbsp;
          <a href="!#" className={styles["registration__link"]}>
            Войти
          </a>
        </p>
      </div>
      {step === 1 ? (
        <form action="" onSubmit={handleFirstStepSubmit} className={styles["form"]}>
          <div className={styles["form__input-group"]}>
            <InputAuthLogin label="ФИО" name="fullName" value="" type="text" placeholder="Введите ФИО" />
            <InputAuthLogin label="E-mail" name="email" value="" type="email" placeholder="Введите E-mail" />
            <InputAuthLogin label="Телефон" name="phone" value="" type="tel" placeholder="Введите номер телефона" />
          </div>
          <div className={styles["checkbox-container"]}>
            <input type="checkbox" id="consent" className={styles["checkbox-input"]} />
            <label htmlFor="consent" className={styles["checkbox-label"]}>
              Даю&nbsp;
              <a href="!#" className={styles["checkbox-link"]}>
                согласие на обработку моих персональных данных.
              </a>
            </label>
          </div>
          <div className={styles["button__block"]}>
            <ButtonAuthLogin type="submit" value="Дальше" />
          </div>
        </form>
      ) : (
        <form action="" onSubmit={handleSecondStepSubmit} className={styles["form"]}>
          <div className={styles["form__input-group"]}>
            <InputAuthLogin label="Пароль" name="password" value="" type="password" placeholder="Введите пароль" srcImg={input_img} />
            <InputAuthLogin label="Повторите пароль" name="password_repeat" value="" type="password" placeholder="Введите пароль" srcImg={input_img} />
          </div>
          <div className={styles["button__block"]}>
            <ButtonAuthLogin type="submit" value="Зарегистрироваться" />
          </div>
        </form>
      )}
    </div>
  )
};
