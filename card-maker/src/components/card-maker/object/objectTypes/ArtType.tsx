import { CSSProperties } from "react";
import { ArtBlock } from "../../../../types";
import useDraggable from "../../utils/useDragAndDrop";

type Props = {
  object: ArtBlock;
  style: string;
  selected: Array<number> | undefined;
  selectedChange(sel: Array<number> | undefined): void;
};

function ArtType({ object, style, selected, selectedChange }: Props) {
  const { position, onMouseDown, onMouseMove, onMouseUp } = useDraggable();
  const styleObj: CSSProperties = {
    position: "absolute",
    width: object.width,
    height: object.height,
    top: object.y ? `${position.y}px` : "auto",
    left: object.x ? `${position.x}px` : "auto",
    transform: `rotate(${object.rotation}deg)`,
    backgroundImage: "",
    backgroundRepeat: "no-repeat",
    border: "",
  };
  styleObj.border = style;
  if (object.shape == "Star") {
    styleObj.background =
      "url(./static/star.svg) no-repeat center center/cover fixed";
  }
  if (object.shape == "Flower") {
    styleObj.background =
      "url(./static/flower.svg) no-repeat center center/cover fixed";
  }
  if (object.shape == "Heart") {
    styleObj.background =
      "url(./static/heart.svg) no-repeat center center/cover fixed";
  }
  if (object.shape == "Snowman") {
    styleObj.background =
      "url(./static/snowman.svg) no-repeat center center/cover fixed";
  }
  if (object.shape == "Emoji") {
    styleObj.background =
      "url(./static/emoji.svg) no-repeat center center/cover fixed";
  }
  if (object.shape == "Winter") {
    styleObj.background =
      "url(./static/winter.svg) no-repeat center center/cover fixed";
  }
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

export { ArtType };
