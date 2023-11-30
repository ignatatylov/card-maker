import { CSSProperties } from "react";
import { ArtBlock } from "../../../../types";

type Props = {
  object: ArtBlock;
};

function SquareType({ object }: Props) {
  const styleObj: CSSProperties = {
    position: "absolute",
    width: object.width,
    height: object.height,
    top: object.y,
    left: object.x,
    transform: `rotate(${object.rotation}deg)`,
    backgroundColor: object.color ?? "black",
  };
  return <div style={styleObj}></div>;
}

export { SquareType };
