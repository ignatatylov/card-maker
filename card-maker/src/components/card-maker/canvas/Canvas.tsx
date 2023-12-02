import { CSSProperties, ChangeEvent } from "react";
import { Object } from "../object/Object";
import styles from "./Canvas.module.css";
import { CanvasType, ImageBlock } from "../../../types";

type CanvasProps = {
  canvas: CanvasType;
  canvasChange(canv: CanvasType): void;
  selectedObjects: Array<number> | undefined;
  selectedChange: (sel: Array<number> | undefined) => void;
  isOnImgInput: boolean;
  isOnImgInputChange(isOnImgInput: boolean): void;
};

function Canvas({
  canvas,
  canvasChange,
  selectedObjects,
  selectedChange,
  isOnImgInput,
  isOnImgInputChange,
}: CanvasProps) {
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
  // const imgObj: ImageBlock = {
  //   id: canvas.objects.length,
  //   type: "image",
  //   width: 100,
  //   height: 100,
  //   x: Math.abs(canvas.width / 2),
  //   y: Math.abs(canvas.height / 2),
  //   rotation: 0,
  //   path: {
  //     scrType: "imageLink",
  //     src: "./static/img.png",
  //   },
  // };

  // const openImgFile = (event: ChangeEvent<HTMLInputElement>) => {
  //   if (!event.target.files) {
  //     return null;
  //   }
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.addEventListener(
  //     "load",
  //     () => {
  //       try {
  //         const result = reader.result;
  //         console.log("result = ", result);
  //         if (typeof result === "string" && result != null) {
  //           console.log(URL.createObjectURL(file));
  //           const newCanvas = { ...canvas };
  //           const img: HTMLImageElement = new Image(100, 100);
  //           img.src = URL.createObjectURL(file);
  //           img.crossOrigin = "use-credentials";
  //           const canvasImg = document.createElement("canvas");
  //           const ctx = canvasImg.getContext("2d");
  //           canvasImg.width = 100;
  //           canvasImg.height = 100;
  //           if (ctx) {
  //             ctx.drawImage(img, 0, 0);
  //           }
  //           const uri = canvasImg.toDataURL("image/png", 1.0);
  //           console.log(uri);
  //           imgObj.path.src = uri;
  //           newCanvas.objects.push(imgObj);
  //           canvasChange(newCanvas);
  //           isOnImgInputChange(false);
  //         } else {
  //           console.log("Ошибка декодирования");
  //         }
  //       } catch {
  //         alert("reading err");
  //       }
  //     },
  //     false,
  //   );
  //   reader.readAsText(file);
  // };
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
      {/* <div className={isOnImgInput ? styles.input_active : styles.input}>
        <input
          type="file"
          onChange={openImgFile}
          name="file"
          id="field__file"
          className={styles.input__file}
        />
        <label htmlFor="field__file" className={styles.content__p}>
          Загрузить картинку
        </label>
      </div> */}
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
