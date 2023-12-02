import {
  ArtBlock,
  CanvasType,
  ImageBlock,
  Sticker,
  TextBlock,
} from "../../../../types";
import { ToolBarElementType } from "../ToolBar";
import styles from "./ToolBarElement.module.css";

type Props = {
  element: ToolBarElementType;
  height: number;
  canvas: CanvasType;
  canvasChange(canv: CanvasType): void;
  isOnImgInputChange(isOnImgInput: boolean): void;
};

function ToolBarElement({
  element,
  height,
  canvas,
  canvasChange,
  isOnImgInputChange,
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
  const artObj: ArtBlock = {
    id: canvas.objects.length,
    type: "art",
    width: 100,
    height: 100,
    x: Math.abs(canvas.width / 2),
    y: Math.abs(canvas.height / 2),
    rotation: 0,
    shape: Sticker.STAR,
  };

  const imgObj: ImageBlock = {
    id: canvas.objects.length,
    type: "image",
    width: 100,
    height: 100,
    x: Math.abs(canvas.width / 2),
    y: Math.abs(canvas.height / 2),
    rotation: 0,
    path: {
      scrType: "imageLink",
      src: "./static/img.png",
    },
  };

  return (
    <div
      className={styles.toolBarElement}
      onClick={() => {
        const newCanvas = { ...canvas };
        if (element.text == "картинка") {
          newCanvas.objects.push(imgObj);
          // isOnImgInputChange(true);
        }
        if (element.text == "текст") {
          newCanvas.objects.push(textObj);
        }
        if (element.text == "арт") {
          newCanvas.objects.push(artObj);
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
