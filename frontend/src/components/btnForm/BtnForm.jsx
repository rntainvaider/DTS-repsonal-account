import React from 'react';
import styles from "./styles.module.css";

const BtnForm = ({value, onClick = () => {} }) => {
  return (
    <button className={styles["button"]} onClick={onClick}>
        {value}
    </button>
  )
}

export default BtnForm
