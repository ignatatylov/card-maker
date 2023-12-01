import { CSSProperties } from "react";
import { LineBlock } from "../../../../types";
import useDraggable from "../../utils/useDragAndDrop";

type Props = {
  object: LineBlock;
  style: string;
};

function LineType({ object, style }: Props) {
  const { position, onMouseDown, onMouseMove, onMouseUp } = useDraggable();
  const styleObj: CSSProperties = {
    position: "absolute",
    top: object.y ? `${position.y}px` : "auto",
    left: object.x ? `${position.x}px` : "auto",
    width: object.width,
    height: 0,
    transform: `rotate(${0}deg)`,
    transformOrigin: "top",
    backgroundColor: object.color ?? "black",
    border: "",
  };
  styleObj.border = style;
  const height = Math.sqrt(
    (object.endCoordinateX - object.x) * (object.endCoordinateX - object.x) +
      (object.endCoordinateY - object.y) * (object.endCoordinateY - object.y),
  );
  const y = object.endCoordinateY - object.y;
  styleObj.height = height;
  let angle = (Math.asin(y / height) * 180) / Math.PI - 90;
  if (object.endCoordinateX < object.x) {
    angle += 180;
    if (object.endCoordinateY < object.y) {
      angle += 90;
    }
  }
  styleObj.transform = `rotate(${angle}deg)`;
  return (
    <div
      style={styleObj}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    ></div>
  );
}

export { LineType };
