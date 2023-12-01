import { ChangeEvent } from "react";
import { Editor } from "../../../../types";
import styles from "./BurgerMenu.module.css";

type Props = {
  editor: Editor;
  menuActive: boolean;
  setMenuActive: (menuActive: boolean) => void;
  editorChange(edit: Editor): void;
};

function BurgerMenu(props: Props) {
  const saveFile = () => {
    console.log("editor = ", props.editor);
    const text = JSON.stringify(props.editor);
    const a = document.createElement("a");
    const file = new Blob([text], { type: "application/json" });
    a.href = URL.createObjectURL(file);
    a.download = "Card-Maker.json";
    a.click();
  };

  const openFile = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return null;
    }
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        try {
          const result = reader.result;
          console.log("result = ", result);
          if (typeof result === "string" && result != null) {
            const parsedResult = JSON.parse(result);
            console.log("parsedResult = ", parsedResult);
            props.editorChange(parsedResult);
          } else {
            console.log("Ошибка декодирования");
          }
        } catch {
          alert("reading err");
        }
      },
      false,
    );
    reader.readAsText(file);
  };

  return (
    <div className={props.menuActive ? styles.menu.active : styles.menu}>
      <div className={styles.menu__content}>
        <input
          type="file"
          onChange={openFile}
          name="file"
          id="field__file"
          className={styles.input__file}
          multiple
        />
        <label htmlFor="field__file" className={styles.content__p}>
          Загрузить как
        </label>
        <p onClick={saveFile} className={styles.content__p}>
          Сохранить как
        </p>
        <p className={styles.content__p}>Экспортировать как</p>
      </div>
    </div>
  );
}
export { BurgerMenu };
