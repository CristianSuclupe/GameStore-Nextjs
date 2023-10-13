"use client";
import Link from "next/link";
import { Icon, Image } from "semantic-ui-react";

export const JoinLayoutButtons = () => {
  return (
    <>
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" />
      </Link>
      <Link href="/">
        <Icon name="close" />
      </Link>
    </>
  );
};
