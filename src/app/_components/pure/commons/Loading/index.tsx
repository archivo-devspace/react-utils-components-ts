import ReactLoading from "react-loading";
import styles from "./index.module.css";

interface Props {
  type?:
    | "balls"
    | "bars"
    | "bubbles"
    | "cubes"
    | "cylon"
    | "spin"
    | "spinningBubbles"
    | "spokes";
  color?: string;
  width?: number;
  height?: number;
  isFullScreen?: boolean;
}

const Loading = ({
  type = "cylon",
  color = "#0d6efd",
  width = 150,
  height = 200,
  isFullScreen = false,
}: Props) => (
  <>
    {isFullScreen ? (
      <div className={styles.container}>
        <ReactLoading type={type} color={color} height={height} width={width} />
      </div>
    ) : (
      <ReactLoading type={type} color={color} height={height} width={width} />
    )}
  </>
);

export default Loading;
