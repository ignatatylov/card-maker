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
  x: 300,
  y: 100,
  rotation: 0,
  value: "Hello",
  fontFamily: "Times New Roman",
  fontSize: 50,
  bold: false,
  italic: false,
  underline: false,
  color: "black",
};

const textBlock_2: TextBlock = {
  id: 2,
  type: "text",
  width: 100,
  height: 50,
  x: 500,
  y: 300,
  rotation: 0,
  value: "New Year!",
  fontFamily: "Times New Roman",
  fontSize: 100,
  bold: true,
  italic: true,
  underline: true,
  color: "green",
};

const imageBlock: ImageBlock = {
  id: 15,
  type: "image",
  width: 100,
  height: 100,
  x: 100,
  y: 500,
  rotation: 0,
  path: {
    scrType: "imageLink",
    src: "./static/img.png",
  },
};

const imageBlock_2: ImageBlock = {
  id: 6,
  type: "image",
  width: 150,
  height: 150,
  x: 100,
  y: 300,
  rotation: 40,
  path: {
    scrType: "imageLink",
    src: "./static/img.png",
  },
};

const lineBlock: LineBlock = {
  id: 3,
  type: "line",
  width: 10,
  x: 400,
  y: 100,
  endCoordinateX: 450,
  endCoordinateY: 50,
  color: "black",
};

const lineBlock_2: LineBlock = {
  id: 7,
  type: "line",
  width: 10,
  x: 100,
  y: 100,
  rotation: 0,
  endCoordinateX: 500,
  endCoordinateY: 500,
  color: "yellow",
};

const artBlock: ArtBlock = {
  id: 4,
  type: "art",
  width: 100,
  height: 100,
  x: 400,
  y: 400,
  rotation: 20,
  shape: Sticker.STAR,
};

const artBlock_2: ArtBlock = {
  id: 8,
  type: "art",
  width: 100,
  height: 100,
  x: 600,
  y: 100,
  rotation: 0,
  shape: Sticker.EMOJI,
};

const artBlock_3: ArtBlock = {
  id: 9,
  type: "art",
  width: 100,
  height: 100,
  x: 400,
  y: 200,
  rotation: 0,
  shape: Sticker.FLOWER,
};

const artBlock_4: ArtBlock = {
  id: 10,
  type: "art",
  width: 100,
  height: 100,
  x: 300,
  y: 200,
  rotation: 0,
  shape: Sticker.HEART,
};

const artBlock_5: ArtBlock = {
  id: 11,
  type: "art",
  width: 100,
  height: 100,
  x: 100,
  y: 200,
  rotation: 0,
  shape: Sticker.SNOWMAN,
};

const artBlock_6: ArtBlock = {
  id: 12,
  type: "art",
  width: 100,
  height: 100,
  x: 100,
  y: 100,
  rotation: 0,
  shape: Sticker.WINTER,
};

const canvas: CanvasType = {
  height: 600,
  width: 800,
  backType: {
    type: "ImgPath",
    scrType: "imageLink",
    src: "./img1.png",
  },
  objects: [
    textBlock,
    artBlock,
    lineBlock,
    imageBlock,
    artBlock_2,
    artBlock_3,
    artBlock_4,
    artBlock_5,
    artBlock_6,
    textBlock_2,
    imageBlock_2,
    lineBlock_2,
  ],
};

const largeEditor: Editor = {
  canvas: canvas,
  selectedObjects: [1, 2, 4, 11, 7, 6],
  hisory: [
    [textBlock, artBlock],
    [textBlock, artBlock, lineBlock],
  ],
};

export { largeEditor };
