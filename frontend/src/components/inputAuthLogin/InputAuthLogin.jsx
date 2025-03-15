import styles from "./styles.module.css";

export default function InputAuthLogin({ label, type, name, value, placeholder, srcImg, onChange }) {
  return (
    <div className={styles["input-block"]}>
      <label htmlFor="" className={styles["label"]}>
        {label}
      </label>
      <div className={styles["input__wrapper"]}>
        <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} className={styles["input"]} />
        {srcImg && <button className={styles["button"]}>
          <img src={srcImg} alt="Показать пароль" title="Показать пароль" className={styles["icon"]} />
        </button>}
      </div>
    </div>
  )
};
