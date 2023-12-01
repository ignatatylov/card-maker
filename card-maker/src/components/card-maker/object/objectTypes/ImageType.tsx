import { CSSProperties } from "react";
import { ImageBlock } from "../../../../types";
import useDraggable from "../../utils/useDragAndDrop";

type Props = {
  object: ImageBlock;
  style: string;
  selected: Array<number> | undefined;
  selectedChange(sel: Array<number> | undefined): void;
};

function ImageType({ object, style, selected, selectedChange }: Props) {
  const { position, onMouseDown, onMouseMove, onMouseUp } = useDraggable();
  const styleObj: CSSProperties = {
    position: "absolute",
    width: object.width,
    height: object.height,
    top: object.y ? `${position.y}px` : "auto",
    left: object.x ? `${position.x}px` : "auto",
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
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onClick={() => {
        const newSelectedObjects = [...(selected ?? [])];
        newSelectedObjects.push(object.id);
        selectedChange(newSelectedObjects);
      }}
    ></div>
  );
}

export { ImageType };
