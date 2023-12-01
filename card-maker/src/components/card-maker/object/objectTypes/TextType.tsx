import { CSSProperties } from "react";
import { TextBlock } from "../../../../types";
import useDraggable from "../../utils/useDragAndDrop";

type Props = {
  object: TextBlock;
  style: string;
  selected: Array<number> | undefined;
  selectedChange(sel: Array<number> | undefined): void;
};

function TextType({ object, style, selected, selectedChange }: Props) {
  const { position, onMouseDown, onMouseMove, onMouseUp } = useDraggable();
  const styleObj: CSSProperties = {
    position: "absolute",
    width: object.width,
    height: object.height,
    top: object.y ? `${position.y}px` : "auto",
    left: object.x ? `${position.x}px` : "auto",
    transform: `rotate(${object.rotation}deg)`,
    color: object.color ?? "black",
    fontSize: object.fontSize ?? 14,
    fontFamily: object.fontFamily ?? "Times New Roman",
    fontStyle: "normal",
    fontWeight: "normal",
    textDecoration: "normal",
    border: "",
  };
  styleObj.border = style;
  if (object.italic) {
    styleObj.fontStyle = "italic";
  }
  if (object.bold) {
    styleObj.fontWeight = "bold";
  }
  if (object.underline) {
    styleObj.textDecoration = "underline";
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
    >
      <span>{object.value}</span>
    </div>
  );
}

export { TextType };
