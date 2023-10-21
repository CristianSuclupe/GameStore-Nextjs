"use client";
import { Container } from "semantic-ui-react";
import { GameAttributes } from "@/src/utils";
import styles from "./info.module.scss";

type InfoProps = {
  game: GameAttributes;
};
export const Info = ({ game }: InfoProps) => {
  return (
    <Container className={styles.info}>
      <div className={styles.summary}>
        <p>{game.summary}</p>
      </div>
      <div className={styles.more}>
        <ul>
          <li>
            <span>Fecha de lanzamiento: </span>
            {game.releaseDate}
          </li>
        </ul>
      </div>
    </Container>
  );
};
