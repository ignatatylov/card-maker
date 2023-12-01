import { CSSProperties } from "react";
import { Object } from "../object/Object";
import styles from "./Canvas.module.css";
import { CanvasType } from "../../../types";

type CanvasProps = {
  canvas: CanvasType;
  selectedObjects: Array<number> | undefined;
  selectedChange: (sel: Array<number> | undefined) => void;
};

function Canvas({ canvas, selectedObjects, selectedChange }: CanvasProps) {
  const canvasObj: CSSProperties = {
    width: canvas.width,
    height: canvas.height,
    background: "",
    opacity: 1,
  };
  if (canvas.backType.type == "ColorPath") {
    canvasObj.background = canvas.backType.color;
    if (canvas.backType.opacity) {
      canvasObj.opacity = canvas.backType.opacity;
    }
  }
  if (canvas.backType.type == "ImgPath") {
    if (canvas.backType.scrType == "imageLink") {
      canvasObj.background =
        "url(" + canvas.backType.src + ") no-repeat center center/cover fixed";
    }
    // if (canvas.backType.scrType == "imageBase64") {
    //   canvasObj.background = canvas.backType.src;
    // }
  }

  return (
    <div
      className={styles.body}
      style={canvasObj}
      onClick={(event: React.MouseEvent) => {
        let flag = false;
        canvas.objects.map((object) => {
          if (
            object.x <= event.clientX &&
            event.clientX <= object.x + object.width &&
            object.y <= event.clientY &&
            event.clientY <= object.y + (object.height ?? object.width)
          ) {
            flag = true;
          }
        });
        if (flag) {
          selectedChange([]);
        }
      }}
    >
      {canvas.objects.map((object) => (
        <Object
          selected={selectedObjects}
          object={object}
          selectedChange={selectedChange}
        />
      ))}
    </div>
  );
}

export { Canvas };
