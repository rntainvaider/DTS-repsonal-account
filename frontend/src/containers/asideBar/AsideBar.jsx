import AsideBlock from "../../components/asideBlock/AsideBlock";
import styles from "./styles.module.css";
import steps from '../../constants/asideBar';

export default function AsideBar() {
  return (
    <aside className={styles["aside"]}>
      {steps.map((step, index) => (
        <AsideBlock key={index} srcImg={step.srcImg} srcImgAside={step.srcImgAside} value={step.title} />
      ))}
    </aside>
  )
};
