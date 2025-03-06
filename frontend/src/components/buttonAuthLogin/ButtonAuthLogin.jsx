import styles from "./styles.module.css";

export default function ButtonAuthLogin({ value, type }) {
  return (
    <div>
      <button type={type} className={styles["button"]}>
        {value}
      </button>
    </div>
  )
};
