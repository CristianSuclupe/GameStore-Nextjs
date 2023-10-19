import Image from "next/image";
import styles from "./headerWallpaper.module.scss";

type HeaderWallpaperProps = {
  image: string;
  width: number;
  height: number;
};
export const HeaderWallpaper = ({
  image,
  width,
  height,
}: HeaderWallpaperProps) => {
  return (
    <div className={styles.headerWallpaper}>
      <Image src={image} alt="Imagen juego" width={width} height={height} />
    </div>
  );
};
