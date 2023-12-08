import { CSSProperties, ChangeEvent } from "react";
import { Object } from "../object/Object";
import styles from "./Canvas.module.css";
import { ArtBlock, CanvasType, ImageBlock, Sticker } from "../../../types";

type ArtElemets = {
  src: string;
  shape: string;
};

type CanvasProps = {
  canvas: CanvasType;
  canvasChange(canv: CanvasType): void;
  selectedObjects: Array<number> | undefined;
  selectedChange: (sel: Array<number> | undefined) => void;
  isOnImgInput: boolean;
  isOnImgInputChange(isOnImgInput: boolean): void;
  isOnArtInput: boolean;
  isOnArtInputChange(isOnArtInput: boolean): void;
  artElemets: ArtElemets[];
};

function Canvas({
  canvas,
  canvasChange,
  selectedObjects,
  selectedChange,
  isOnImgInput,
  isOnImgInputChange,
  isOnArtInput,
  isOnArtInputChange,
  artElemets,
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

  const openImgFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", async () => {
      try {
        const result = reader.result;

        if (typeof result === "string" && result !== null) {
          const newCanvas = { ...canvas };
          const img = new Image();
          img.src = URL.createObjectURL(file);
          img.crossOrigin = "use-credentials";

          await new Promise((resolve) => {
            img.onload = resolve;
          });

          const canvasImg = document.createElement("canvas");
          const ctx = canvasImg.getContext("2d");

          const blockWidth = 100; // Установите ширину блока
          const blockHeight = 100; // Установите высоту блока

          const scaleFactor = Math.min(
            blockWidth / img.width,
            blockHeight / img.height,
          );

          canvasImg.width = img.width * scaleFactor;
          canvasImg.height = img.height * scaleFactor;

          if (ctx) {
            ctx.drawImage(img, 0, 0, canvasImg.width, canvasImg.height);
          }

          const uri = canvasImg.toDataURL("image/png", 1.0);

          console.log("Result URI:", uri);

          imgObj.path.src = uri;
          newCanvas.objects.push(imgObj);
          canvasChange(newCanvas);
          isOnImgInputChange(false);
        } else {
          console.error("Ошибка декодирования");
        }
      } catch (error) {
        console.error("Reading error:", error);
        // Дополнительная обработка ошибки, если необходимо
      }
    });

    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.body} style={canvasObj}>
      <div className={isOnImgInput ? styles.input_active : styles.input}>
        <input
          type="file"
          onChange={openImgFile}
          name="file"
          id="field__file"
          className={styles.input__file}
        />
        <label
          htmlFor="field__file"
          className={
            isOnImgInput ? styles.content__p_active : styles.content__p
          }
        >
          Загрузить картинку
        </label>
      </div>

      <div className={isOnArtInput ? styles.input_active : styles.input}>
        {artElemets.map((artElement, index) => (
          <div
            key={index}
            style={
              isOnArtInput
                ? {
                    background: `url(${artElement.src}) no-repeat center center/cover fixed`,
                    padding: "5%",
                    margin: "3%",
                    cursor: "pointer",
                  }
                : {}
            }
            onClick={() => {
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
              if (artElement.shape == "Star") {
                artObj.shape = Sticker.STAR;
              }
              if (artElement.shape == "Flower") {
                artObj.shape = Sticker.FLOWER;
              }
              if (artElement.shape == "Heart") {
                artObj.shape = Sticker.HEART;
              }
              if (artElement.shape == "Snowman") {
                artObj.shape = Sticker.SNOWMAN;
              }
              if (artElement.shape == "Emoji") {
                artObj.shape = Sticker.EMOJI;
              }
              if (artElement.shape == "Winter") {
                artObj.shape = Sticker.WINTER;
              }
              const newCanvas = { ...canvas };
              newCanvas.objects.push(artObj);
              canvasChange(newCanvas);
              isOnArtInputChange(false);
            }}
          ></div>
        ))}
      </div>

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
