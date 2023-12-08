import { ArtBlock, CanvasType, Sticker, TextBlock } from "../../../../types";
import { ToolBarElementType } from "../ToolBar";
import styles from "./ToolBarElement.module.css";

type Props = {
  element: ToolBarElementType;
  height: number;
  canvas: CanvasType;
  canvasChange(canv: CanvasType): void;
  isOnImgInputChange(isOnImgInput: boolean): void;
  isOnArtInputChange(isOnArtInput: boolean): void;
};

function ToolBarElement({
  element,
  height,
  canvas,
  canvasChange,
  isOnImgInputChange,
  isOnArtInputChange,
}: Props) {
  const button = {
    height: height.toString() + "%",
  };
  const textObj: TextBlock = {
    id: canvas.objects.length,
    type: "text",
    width: 100,
    height: 50,
    x: Math.abs(canvas.width / 2),
    y: Math.abs(canvas.height / 2),
    rotation: 0,
    value: "Text",
    fontFamily: "Times New Roman",
    fontSize: 20,
    bold: false,
    italic: false,
    underline: false,
    color: "black",
  };

  return (
    <div
      className={styles.toolBarElement}
      onClick={() => {
        const newCanvas = { ...canvas };
        if (element.text == "картинка") {
          isOnArtInputChange(false);
          isOnImgInputChange(true);
        }
        if (element.text == "текст") {
          newCanvas.objects.push(textObj);
        }
        if (element.text == "арт") {
          isOnImgInputChange(false);
          isOnArtInputChange(true);
        }
        canvasChange(newCanvas);
      }}
      style={button}
    >
      <img className={styles.button} src={element.src} />
      <p className={styles.text}>{element.text}</p>
    </div>
  );
}
export { ToolBarElement };
