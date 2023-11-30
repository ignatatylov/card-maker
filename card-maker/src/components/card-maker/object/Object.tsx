import { Block } from "../../../types";
import { TextType } from "./objectTypes/TextType";
import { ImageType } from "./objectTypes/ImageType";
import { LineType } from "./objectTypes/LineType";
import { ArtType } from "./objectTypes/ArtType";

type Props = {
  object: Block;
  selected: Array<number> | undefined;
  selectedChange: (sel: Array<number> | undefined) => void;
};

function Object({ object, selected, selectedChange }: Props) {
  let style = "";
  if (selected != undefined && selected.includes(object.id)) {
    style = "dashed red";
  }
  if (object.type == "text") {
    return (
      <TextType
        object={object}
        style={style}
        selected={selected}
        selectedChange={selectedChange}
      />
    );
  }
  // if (object.type == "square") {
  //   return <SquareType object={object} />;
  // }
  if (object.type == "image") {
    return (
      <ImageType
        object={object}
        style={style}
        selected={selected}
        selectedChange={selectedChange}
      />
    );
  }
  if (object.type == "line") {
    return <LineType object={object} style={style} />;
  }
  if (object.type == "art") {
    return (
      <ArtType
        object={object}
        style={style}
        selected={selected}
        selectedChange={selectedChange}
      />
    );
  }
  return <></>;
}

export { Object };
