"use client";
import { Button, Icon } from "semantic-ui-react";
import Link from "next/link";
import styles from "./stepThree.module.scss";
export const StepThree = () => {
  return (
    <div className={styles.stepThree}>
      <Icon name="check circle outline" />
      <h2>Compra exitosa</h2>
      <Button as={Link} href="/account" primary>
        Ver pedido
      </Button>
    </div>
  );
};
