import React, { useState } from 'react';
import { InputForm, BtnForm } from "../../components";
import styles from "./styles.module.css";

const RegistrationForm = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = (event) => {
    event.preventDefault();
    if (step === 1) {
      setStep(2);
    }
  };

  return (
    <div>
      <form className={styles["reg-form"]} >
        <div>
          <h2 className={styles["reg-form__title"]}>
            Регистрация
          </h2>
          <p className={styles["reg-form__text"]}>
            Уже есть учётная запись?
            <a href="/login" className={styles["reg-form__link"]}>
              Войти
            </a>
          </p>
        </div>
        {step === 1 && (
          <div className={styles["reg-form__container"]}>
            <div className={styles["reg-form__wrapper-inputs"]}>
              <InputForm
                type="text"
                label="ФИО"
                placeholder="Введите ФИО"
              />
              <InputForm
                type="email"
                label="Email"
                placeholder="Введите email"
              />
              <InputForm
                type="tel"
                label="Телефон"
                placeholder="Введите номер телефона"
              />
            </div>
            <div className={styles["reg-form__consent-checkbox"]}>
              <input
                type="checkbox"
                className={styles["reg-form__checkbox-input"]}
              />
              <label className={styles["reg-form__checkbox-label"]}>
                Даю
                <a href="/privacy-policy" className={styles["reg-form__checkbox-link"]}>
                  согласие на обработку моих персональных данных.
                </a>
              </label>
            </div>
            <div className={styles["reg-form__wrapper-btn"]}>
              <BtnForm value="Дальше" onClick={handleNextStep} />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className={styles["reg-form__container"]}>
            <div className={styles["reg-form__wrapper-inputs"]}>
              <InputForm
                type="password"
                label="Пароль"
                placeholder="Введите пароль"
              />
              <InputForm
                type="password"
                label="Повторите пароль"
                placeholder="Введите пароль"
              />
            </div>
            <div className={styles["reg-form__wrapper-btn"]}>
              <BtnForm value="Зарегистрироваться" />
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm
