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
    src: "./static/filter.png",
    text: "фильтр",
  },
];

const artElemets = [
  {
    src: "./static/star.svg",
    shape: "Star",
  },
  {
    src: "./static/flower.svg",
    shape: "Flower",
  },
  {
    src: "./static/heart.svg",
    shape: "Heart",
  },
  {
    src: "./static/snowman.svg",
    shape: "Snowman",
  },
  {
    src: "./static/emoji.svg",
    shape: "Emoji",
  },
  {
    src: "./static/winter.svg",
    shape: "Winter",
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

  const [isOnImgInput, isOnImgInputChange] = useState(false);

  const [isOnArtInput, isOnArtInputChange] = useState(false);

  const handleClick = ({ event, sel }: hadleClickProps) => {
    if (event.key === "Escape") {
      selectedChange([]);
    }
    if (event.key === "Delete") {
      const newCanvas = { ...canv };
      if (sel) {
        newCanvas.objects = newCanvas.objects.filter(
          (object) => !sel.includes(object.id),
        );
        canvasChange(newCanvas);
      }
      canvasChange(newCanvas);
    }
  };
  useEffect(() => {
    canvasChange(edit.canvas);
    selectedChange(edit.selectedObjects);
  }, [edit]);

  useEffect(() => {
    isOnImgInputChange(isOnImgInput);
  });

  useEffect(() => {
    isOnArtInputChange(isOnArtInput);
  });

  return (
    <div
      className={styles.cardMaker}
      onKeyDown={(event) => {
        handleClick({ event, sel });
      }}
      tabIndex={0}
    >
      <TopBar
        editor={edit}
        editorChange={editorChange}
        isOnImgInput={isOnImgInput}
      ></TopBar>
      <div className={styles.container}>
        <ToolBar
          elements={toolBarElemets}
          canvas={canv}
          canvasChange={canvasChange}
          isOnImgInputChange={isOnImgInputChange}
          isOnArtInputChange={isOnArtInputChange}
        ></ToolBar>
        <div className={styles.canvasField}>
          <button className={styles.changeBackground}>
            <p className={styles.text}>Изменить фон</p>
          </button>
          <Canvas
            canvas={canv}
            canvasChange={canvasChange}
            selectedObjects={sel}
            selectedChange={selectedChange}
            isOnImgInput={isOnImgInput}
            isOnImgInputChange={isOnImgInputChange}
            isOnArtInput={isOnArtInput}
            isOnArtInputChange={isOnArtInputChange}
            artElemets={artElemets}
          ></Canvas>
        </div>
      </div>
    </div>
  );
}
export { CardMaker };
