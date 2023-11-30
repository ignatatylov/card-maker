import styles from "./CanvasSize.module.css";
import { CanvasType } from "./../../../../types";

type Props = {
  canvas: CanvasType;
};

function CanvasSize({ canvas }: Props) {
  return (
    <div className={styles.body}>
      <p className={styles.text}>
        Размер холста: {canvas.width}x{canvas.height}
      </p>
    </div>
  );
}
export { CanvasSize };
