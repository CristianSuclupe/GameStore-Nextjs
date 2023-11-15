"use client";
import { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";
import { Game } from "@/src/api";
import { GameDatum } from "@/src/utils";
import { fn } from "@/src/utils";
import { Label } from "../../Shared";
import styles from "./bannerLastGame.module.scss";

const gameController = new Game();

export const BannerLastGame = () => {
  const [game, setGame] = useState<GameDatum>();

  useEffect(() => {
    (async () => {
      try {
        const response = await gameController.getLastGamePublished();
        setGame(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (!game) return null;
  const wallpaper = game.attributes.wallpaper;
  const releaseDate = new Date(game.attributes.releaseDate).toISOString();
  const price = fn.calcDiscountedPrice(
    game.attributes.price,
    game.attributes.discount
  );

  return (
    <div className={styles.container}>
      <Image
        src={wallpaper.data.attributes.url}
        width={wallpaper.data.attributes.width}
        height={wallpaper.data.attributes.height}
        alt="Imagen ultimo juego"
        className={styles.wallpaper}
        priority
      />
      <Link className={styles.infoContainer} href={game.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>
          <h2>{game.attributes.title}</h2>
          <p className={styles.price}>
            {game.attributes.discount > 0 && (
              <Label.Discount>-{game.attributes.discount}%</Label.Discount>
            )}
            <span
              className={`${
                game.attributes.discount > 0 && styles.marginLeft
              } ${styles.finalPrice}`}
            >
              {price}$
            </span>
          </p>
        </Container>
      </Link>
    </div>
  );
};
