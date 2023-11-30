import {
  Editor,
  CanvasType,
  TextBlock,
  ImageBlock,
  LineBlock,
  ArtBlock,
  Sticker,
} from "./types";
const textBlock: TextBlock = {
  id: 1,
  type: "text",
  width: 100,
  height: 50,
  x: 100,
  y: 200,
  rotation: 45,
  value: "Hello",
  fontFamily: "Times New Roman",
  fontSize: 100,
  bold: false,
  italic: false,
  underline: false,
  color: "black",
};

const imageBlock: ImageBlock = {
  id: 2,
  type: "image",
  width: 200,
  height: 200,
  x: 400,
  y: 400,
  rotation: 0,
  path: {
    scrType: "imageLink",
    src: "./static/img.png",
  },
};

const lineBlock: LineBlock = {
  id: 3,
  type: "line",
  x: 100,
  y: 100,
  width: 5,
  endCoordinateX: 400,
  endCoordinateY: 400,
  color: "black",
};

const artBlock: ArtBlock = {
  id: 4,
  type: "art",
  width: 300,
  height: 300,
  x: 400,
  y: 100,
  rotation: 0,
  shape: Sticker.SNOWMAN,
};

const canvas: CanvasType = {
  height: 600,
  width: 800,
  backType: {
    type: "ColorPath",
    color: "white",
    opacity: 0.5,
  },
  objects: [textBlock, artBlock, lineBlock, imageBlock],
};

const midEditor: Editor = {
  canvas: canvas,
};

export { midEditor };
