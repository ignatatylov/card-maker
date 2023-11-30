import styles from "./SaveButton.module.css";

type Props = {
  menuActive: boolean;
  setMenuActive: (menuActive: boolean) => void;
};
function SaveButton(props: Props) {
  return (
    <div
      onClick={() => props.setMenuActive(!props.menuActive)}
      className={styles.body}
    >
      <p className={styles.text}>Файл</p>
    </div>
  );
}
export { SaveButton };
