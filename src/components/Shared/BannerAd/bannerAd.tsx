"use client";
import { Button, Container } from "semantic-ui-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./bannerAd.module.scss";

type BannerAdProps = {
  title: string;
  subtitle: string;
  btnTitle: string;
  btnLink: string;
  image: string;
};

export const BannerAd = ({
  title,
  subtitle,
  btnTitle,
  btnLink,
  image,
}: BannerAdProps) => {
  return (
    <div className={styles.container}>
      <Container className={styles.containerImage}>
        <Image src={image} width={623} height={611} alt="Imagen Banner" />
      </Container>
      <div className={styles.infoContainer}>
        <Container>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <Button as={Link} href={btnLink} primary>
            {btnTitle}
          </Button>
        </Container>
      </div>
    </div>
  );
};
