import styles from "./styles.module.css";

export default function AsideBlock({ srcImg, value, srcImgAside }) {
  return (
    <div>
      {srcImg ? (
        <div className={styles["aside-block__one"]} >
          <a href="" className={styles["aside__link"]}>
            <div className={styles["icon__container"]}>
              <img src={srcImg} alt="Фото" className={styles["icon"]} />
            </div>
            <p className={styles["aside__text"]}>
              {value}
            </p>
            {srcImgAside && <img src={srcImgAside} alt="Стрелка" className={styles["aside-icon"]} />}
          </a>
        </div>
      ) : (
        <div className={styles["aside-block__two"]}>
          <a href="!#" className={styles["aside__link"]}>
            <p className={styles["vertical__text"]}>
              {value}
            </p>
            {srcImgAside && <img src={srcImgAside} alt="Стрелка" className={styles["aside-icon"]} />}
          </a>
        </div>
      )}
    </div>
  )
};
