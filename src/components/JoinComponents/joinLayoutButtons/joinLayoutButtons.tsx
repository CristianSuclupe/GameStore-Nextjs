"use client";
import Link from "next/link";
import { Icon } from "semantic-ui-react";
import Image from "next/image";
import styles from "./joinLayoutButtons.module.scss";

export const JoinLayoutButtons = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={486}
          height={90}
          className={styles.logo}
        />
      </Link>
      <Link href="/">
        <Icon name="close" />
      </Link>
    </>
  );
};
