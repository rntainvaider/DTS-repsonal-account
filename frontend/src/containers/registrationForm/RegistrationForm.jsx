import React, { useState } from 'react';
import { InputForm, BtnForm } from "../../components";
import styles from "./styles.module.css";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password:"",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      console.log("Пароли не совпадают");
      return;
    }
    console.log("Форма отправлена", form);
  };

  const [step, setStep] = useState(1);

  const handleNextStep = (event) => {
    event.preventDefault();
    if (step === 1) {
      setStep(2);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit} className={styles["reg-form"]} >
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
                name="fullName"
                label="ФИО"
                placeholder="Введите ФИО"
                value={form.fullName}
                onChange={handleChange}
              />
              <InputForm
                type="email"
                name="email"
                label="Email"
                placeholder="Введите email"
                value={form.email}
                onChange={handleChange}
              />
              <InputForm
                type="tel"
                name="phone"
                label="Телефон"
                placeholder="Введите номер телефона"
                value={form.phone}
                onChange={handleChange}
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
                name="password"
                label="Пароль"
                placeholder="Введите пароль"
                value={form.password}
                onChange={handleChange}
              />
              <InputForm
                type="password"
                name="confirmPassword"
                label="Повторите пароль"
                placeholder="Введите пароль"
                value={form.confirmPassword}
                onChange={handleChange}
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
