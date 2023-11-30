import { Editor } from "./types";

const minEditor: Editor = {
  canvas: {
    height: 600,
    width: 800,
    backType: {
      type: "ColorPath",
      color: "white",
    },
    objects: [],
  },
};

export { minEditor };
