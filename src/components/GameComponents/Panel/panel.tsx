"use client";
import { useState } from "react";
import { Button, Container, Icon } from "semantic-ui-react";
import { fn } from "@/src/utils";
import { useCart } from "@/src/hooks/useCart";
import { GameAttributes } from "@/src/utils/types/gameType";
import Image from "next/image";
import { WishListIcon } from "../../Shared";
import styles from "./panel.module.scss";

type PanelProps = {
  gameId: number;
  game: GameAttributes;
};
export const Panel = ({ gameId, game }: PanelProps) => {
  const [loading, setLoading] = useState(false);
  const buyPrice = fn.calcDiscountedPrice(game.price, game.discount);
  const { addToCart } = useCart();

  const addCartWrapper = () => {
    setLoading(true);
    addToCart(gameId);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <Container className={styles.panel}>
      <div className={styles.imgContainer}>
        <Image
          src={game.cover.data.attributes.url}
          alt="Imagen juego"
          width={game.cover.data.attributes.width}
          height={game.cover.data.attributes.height}
        />
      </div>
      <div className={styles.actionsContainer}>
        <div>
          <h2>{game.title}</h2>
          <div className={styles.moreInfo}>
            <span>
              <Image
                src={game.platform.data.attributes.icon.data.attributes.url}
                alt="Icono plataforma"
                width={game.platform.data.attributes.icon.data.attributes.width}
                height={
                  game.platform.data.attributes.icon.data.attributes.height
                }
              />
              {game.platform.data.attributes.title}
            </span>
            <span>
              <Icon name="check" />
              En stock
            </span>
          </div>
          <div className={styles.price}>
            {game.discount > 0 && (
              <>
                <span className={styles.originalPrice}>
                  <Icon name="tag" />
                  {game.price}$
                </span>
                <span className={styles.discount}>-{game.discount}%</span>
              </>
            )}
            <span className={styles.price}>{buyPrice}$</span>
          </div>
          <Button primary fluid onClick={addCartWrapper} loading={loading}>
            Comprar
          </Button>
          <WishListIcon className={styles.heart} gameId={gameId} />
        </div>
      </div>
    </Container>
  );
};
