import { useState } from "react";
import { DAT } from "@/src/utils/types";
import { FullModal } from "@/src/components/Shared";
import Slider from "react-slick";
import Image from "next/image";
import _ from "lodash";
import styles from "./gallery.module.scss";

type GalleryProps = {
  screenshots: DAT[];
};
export const Gallery = ({ screenshots }: GalleryProps) => {
  const [show, setShow] = useState(false);
  const screenshotsClone = [...screenshots];
  const principalImage = screenshotsClone.shift() ?? {
    attributes: { url: "", width: 0, height: 0 },
  };
  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    slidersToShow: 1,
    sliderToScroll: 1,
    arrows: false,
    customPaging: (index: number) => (
      <Image
        src={screenshots[index].attributes.url}
        alt="Imagen del juego"
        width={screenshots[index].attributes.width}
        height={screenshots[index].attributes.height}
      />
    ),
  };
  const onOpenClose = () => setShow((prevState) => !prevState);
  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.principal}>
          <Image
            src={principalImage.attributes.url}
            alt="Primera Imagen"
            width={principalImage.attributes.width}
            height={principalImage.attributes.height}
            onClick={onOpenClose}
          />
        </div>
        <div className={styles.grid}>
          {_.map(screenshotsClone, (screenshot) => (
            <div key={screenshot.id}>
              <Image
                src={screenshot.attributes.url}
                alt="Imagen del juego"
                width={screenshot.attributes.width}
                height={screenshot.attributes.height}
                onClick={onOpenClose}
              />
            </div>
          ))}
        </div>
      </div>
      <FullModal show={show} onClose={onOpenClose}>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {_.map(screenshots, (screenshot) => (
              <div key={screenshot.id}>
                <Image
                  src={screenshot.attributes.url}
                  alt="Imagen del juego"
                  width={screenshot.attributes.width}
                  height={screenshot.attributes.height}
                />
              </div>
            ))}
          </Slider>
        </div>
      </FullModal>
    </>
  );
};
