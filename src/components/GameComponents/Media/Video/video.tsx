import ReactPlayer from "react-player";
import styles from "./video.module.scss";
type VideoProps = {
  video: string;
};
export const Video = ({ video }: VideoProps) => {
  return (
    <ReactPlayer
      url={video}
      className={styles.video}
      width="100%"
      height={634}
    />
  );
};
