import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputAuthLogin from "../../components/inputAuthLogin/InputAuthLogin";
import styles from "./styles.module.css";
import input_img from "../../assets/inputAuthLogin/input_img.svg";
import ButtonAuthLogin from "../../components/buttonAuthLogin/ButtonAuthLogin";
import axios from "axios";

export default function FormRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: ""
  });

  const [message, setMessage] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Обработчик изменений в инпутах
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFirstStepSubmit = async (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSecondStepSubmit = async (e) => {
    e.preventDefault();

    // Проверка на совпадение паролей
    if (formData.password !== formData.repeatPassword) {
      setMessage("Пароли не совпадают!");
      alert("Пароли не совпадают!")
      return;
    }

    try {
      // Отправляем данные на сервер при клике на "Зарегистрироваться"
      const data = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      }
      const response = await axios.post("http://127.0.0.1:8000/registration/", data);
      setMessage(`Пользователь ${response.data.username} зарегистрирован!`);
      navigate("/information"); // Переход на другую страницу после успешной регистрации
    } catch (error) {
      setMessage(error.response?.data?.detail || "Ошибка регистрации");
    }
  };

  return (
    <div className={styles["registration"]}>
      <div className={styles["registration__group"]}>
        <h2 className={styles["registration__title"]}>
          Регистрация
        </h2>
        <p className={styles["registration__text"]}>
          Уже есть учётная запись?&nbsp;
          <Link to="/login" className={styles["registration__link"]}>
            Войти
          </Link>
        </p>
      </div>
      {step === 1 ? (
        <form action="" onSubmit={handleFirstStepSubmit} className={styles["form"]}>
          <div className={styles["form__input-group"]}>
            <InputAuthLogin label="ФИО" name="fullName" value={formData.fullName} onChange={handleChange} type="text" placeholder="Введите ФИО" />
            <InputAuthLogin label="E-mail" name="email" value={formData.email} type="email" onChange={handleChange} placeholder="Введите E-mail" />
            <InputAuthLogin label="Телефон" name="phone" value={formData.phone} type="tel" onChange={handleChange} placeholder="Введите номер телефона" />
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
            <InputAuthLogin label="Пароль" name="password" value={formData.password} type="password" onChange={handleChange} placeholder="Введите пароль" srcImg={input_img} />
            <InputAuthLogin label="Повторите пароль" name="repeatPassword" value={formData.repeatPassword} type="password" onChange={handleChange} placeholder="Введите пароль" srcImg={input_img} />
          </div>
          <div className={styles["button__block"]}>
            <ButtonAuthLogin type="submit" value="Зарегистрироваться" />
          </div>
        </form>
      )}
    </div>
  )
};
