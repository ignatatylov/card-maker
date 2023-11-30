import styles from "./TopBar.module.css";
import { Logo } from "./logo/Logo";
import { CanvasSize } from "./canvasSize/CanvasSize";
import { SaveButton } from "./saveButton/SaveButton";
import { Editor } from "./../../../types";
import { BurgerMenu } from "./burgerMenu/BurgerMenu";
import { useState } from "react";

type Props = {
  editor: Editor;
  editorChange(edit: Editor): void;
};

function TopBar({ editor, editorChange }: Props) {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div>
      <div className={styles.body}>
        <SaveButton
          menuActive={menuActive}
          setMenuActive={setMenuActive}
        ></SaveButton>
        <CanvasSize canvas={editor.canvas}></CanvasSize>
        <Logo></Logo>
      </div>
      <BurgerMenu
        editor={editor}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        editorChange={editorChange}
      ></BurgerMenu>
    </div>
  );
}
export { TopBar };
