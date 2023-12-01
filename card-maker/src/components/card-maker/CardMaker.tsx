import { TopBar } from "./topBar/TopBar";
import { Canvas } from "./canvas/Canvas";
import { ToolBar } from "./toolBar/ToolBar";
import styles from "./CardMaker.module.css";
import { Editor } from "../../types";
import { useEffect, useState } from "react";

const toolBarElemets = [
  {
    src: "./static/img.png",
    text: "картинка",
  },
  {
    src: "./static/text.png",
    text: "текст",
  },
  {
    src: "./static/art.png",
    text: "арт",
  },
  {
    src: "./static/line.png",
    text: "линия",
  },
];

type Props = {
  editor: Editor;
};

type hadleClickProps = {
  event: React.KeyboardEvent<HTMLDivElement>;
  sel?: Array<number> | undefined;
};

function CardMaker({ editor }: Props) {
  const [edit, editorChange] = useState<Editor>(editor);
  const [canv, canvasChange] = useState(edit.canvas);
  const [sel, selectedChange] = useState(edit.selectedObjects);

  const handleClick = ({ event, sel }: hadleClickProps) => {
    if (event.key === "Escape") {
      selectedChange([]);
    }
    if (event.key === "Delete") {
      const newCanvas = { ...canv };
      if (sel != undefined) {
        newCanvas.objects.map((object) => {
          if (sel.includes(object.id)) {
            newCanvas.objects.splice(newCanvas.objects.indexOf(object), 1);
          }
        });
        canvasChange(newCanvas);
      }
    }
  };
  useEffect(() => {
    canvasChange(edit.canvas);
    selectedChange(edit.selectedObjects);
  }, [edit]);

  return (
    <div
      className={styles.cardMaker}
      onKeyDown={(event) => {
        handleClick({ event, sel });
      }}
      tabIndex={0}
    >
      <TopBar editor={edit} editorChange={editorChange}></TopBar>
      <div className={styles.container}>
        <ToolBar
          elements={toolBarElemets}
          canvas={canv}
          canvasChange={canvasChange}
        ></ToolBar>
        <div className={styles.canvasField}>
          <button className={styles.changeBackground}>
            <p className={styles.text}>Изменить фон</p>
          </button>
          <Canvas
            canvas={canv}
            selectedObjects={sel}
            selectedChange={selectedChange}
          ></Canvas>
        </div>
      </div>
    </div>
  );
}
export { CardMaker };
