import { CSSProperties } from "react";
import { ImageBlock } from "../../../../types";

type Props = {
  object: ImageBlock;
  style: string;
  selected: Array<number> | undefined;
  selectedChange(sel: Array<number> | undefined): void;
};

function ImageType({ object, style, selected, selectedChange }: Props) {
  const styleObj: CSSProperties = {
    position: "absolute",
    width: object.width,
    height: object.height,
    top: object.y,
    left: object.x,
    transform: `rotate(${object.rotation}deg)`,
    background: "",
    backgroundRepeat: "no-repeat",
    border: "",
  };
  styleObj.border = style;
  if (object.path.scrType == "imageLink") {
    styleObj.background =
      "url(" + object.path.src + ") no-repeat center center/cover fixed";
  }
  // if (canvas.backType.scrType == "imageBase64") {
  //   canvasObj.background = canvas.backType.src;
  // }
  return (
    <div
      style={styleObj}
      onClick={() => {
        const newSelectedObjects = [...(selected ?? [])];
        newSelectedObjects.push(object.id);
        selectedChange(newSelectedObjects);
      }}
    ></div>
  );
}

export { ImageType };
