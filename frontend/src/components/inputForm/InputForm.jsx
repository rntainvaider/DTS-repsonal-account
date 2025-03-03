import React from "react";
import { IMaskInput } from "react-imask";
import styles from "./styles.module.css";

const InputForm = ({ type, label, placeholder, value, onChange, name, img }) => {
  return (
    <div className={styles["input-group"]}>
      <label className={styles["input-group__label"]}>{label}</label>
      <div className={styles["input-group__wrapper"]}>
        {type === "tel" ? (
          <IMaskInput
          mask="+7 (000) 000-00-00"
          placeholder="+7 (999) 999-99-99"
          value={value}
          className={styles["input-group__input"]}
          onChange={onChange}
          name={name}
        />
        ) : (
          <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className={styles["input-group__input"]} />
        )}
        {img && (
          <button className={styles["input-group__btn"]}>
            <img src={img} alt="глаз" />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputForm;
