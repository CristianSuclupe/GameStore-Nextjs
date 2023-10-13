"use client";
import { useState, useEffect } from "react";
import { Container, Image } from "semantic-ui-react";
import { DateTime } from "luxon";
import Link from "next/link";
import { GameData, Game } from "@/src/api";
import { fn } from "@/src/utils";
import { Label } from "../../Shared";
import styles from "./bannerLastGame.module.scss";

const gameController = new Game();

export const BannerLastGame = () => {
  const [game, setGame] = useState<GameData>();

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
        alt="Imagen ultimo juego"
        className={styles.wallpaper}
      />
      <Link className={styles.infoContainer} href={game.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(releaseDate).minus({ days: 1 }).toRelative()}
          </span>
          <h2>{game.attributes.title}</h2>
          <p className={styles.price}>
            <Label.Discount>-{game.attributes.discount}%</Label.Discount>
            <span className={styles.finalPrice}>${price}</span>
          </p>
        </Container>
      </Link>
    </div>
  );
};
