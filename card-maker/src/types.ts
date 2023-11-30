type ObjectBlock = {
  id: number;
  width: number;
  height: number;
  x: number;
  y: number;
  rotation: number;
};

type ImgPath = {
  type?: "ImgPath";
  scrType: "imageLink" | "imageBase64";
  src: string;
};

type ColorPath = {
  type?: "ColorPath";
  color: string;
  opacity?: number;
};

type ImageBlock = ObjectBlock & {
  type: "image";
  path: ImgPath;
};

type TextBlock = ObjectBlock & {
  type: "text";
  value?: string;
  fontFamily?: string;
  fontSize?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string;
};

type LineBlock = {
  id: number;
  width: number;
  height?: number;
  x: number;
  y: number;
  rotation?: number;
  type: "line";
  endCoordinateX: number;
  endCoordinateY: number;
  color: string;
};

enum Sticker {
  STAR = "Star",
  FLOWER = "Flower",
  HEART = "Heart",
  SNOWMAN = "Snowman",
  EMOJI = "Emoji",
  WINTER = "Winter",
  SQUARE = "Square",
}
type ArtBlock = ObjectBlock & {
  type: "art";
  shape: Sticker;
  color?: string;
  opacity?: number;
};

type Block = TextBlock | ImageBlock | LineBlock | ArtBlock;

type CanvasType = {
  height: number;
  width: number;
  backType: ImgPath | ColorPath;
  objects: Array<Block>;
};

type Editor = {
  canvas: CanvasType;
  selectedObjects?: Array<number>;
  hisory?: Array<Array<Block>>;
};

export type {
  Editor,
  CanvasType,
  Block,
  ObjectBlock,
  TextBlock,
  ImageBlock,
  LineBlock,
  ArtBlock,
};
export { Sticker };
