import { ToolBarElement } from "./toolBarElement/ToolBarElement";
import styles from "./ToolBar.module.css";
import { CanvasType } from "../../../types";

type ToolBarElementType = {
  src: string;
  text: string;
};

type ToolBarElemetsType = {
  elements: ToolBarElementType[];
  canvas: CanvasType;
  canvasChange: (canv: CanvasType) => void;
  isOnImgInputChange: (isOnImgInput: boolean) => void;
};

function ToolBar({
  elements,
  canvas,
  canvasChange,
  isOnImgInputChange,
}: ToolBarElemetsType) {
  return (
    <div className={styles.toolBar}>
      {elements.map((toolBarElement, index) => (
        <ToolBarElement
          key={index}
          element={toolBarElement}
          height={100 / elements.length}
          canvas={canvas}
          canvasChange={canvasChange}
          isOnImgInputChange={isOnImgInputChange}
        />
      ))}
    </div>
  );
}

export { ToolBar };
export type { ToolBarElementType };
