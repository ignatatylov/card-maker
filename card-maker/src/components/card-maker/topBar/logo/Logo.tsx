import styles from "./Logo.module.css";
function Logo() {
  return (
    <div className={styles.body}>
      <p className={styles.text}>Card-Maker</p>
    </div>
  );
}
export { Logo };
