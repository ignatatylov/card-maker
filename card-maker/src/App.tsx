import React from "react";
import { CardMaker } from "./components/card-maker/CardMaker";
import { minEditor } from "./testA";
import { midEditor } from "./testB";
import { largeEditor } from "./testC";
import { CanvasType } from "./types";

function App() {
  return <CardMaker editor={minEditor} />;
}

export default App;
