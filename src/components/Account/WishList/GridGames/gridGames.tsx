"use client";
import Link from "next/link";
import Image from "next/image";
import { map } from "lodash";
import { Label, WishListIcon } from "@/src/components/Shared";
import { fn } from "@/src/utils";
import { WishListDatum } from "@/src/utils";
import styles from "./gridGames.module.scss";

type GridGamesProps = {
  wishList: WishListDatum[];
  onReloadWishList: () => void;
};
export const GridGames = ({ wishList, onReloadWishList }: GridGamesProps) => {
  return (
    <div className={styles.gridGames}>
      {map(wishList, (item) => {
        const game = item.attributes.game.data;
        return (
          <div key={item.id} className={styles.game}>
            <Link href={`/${game.attributes.slug}`}>
              <div>
                <Image
                  src={game.attributes.cover.data.attributes.url}
                  alt="Imagen juego"
                  width={game.attributes.cover.data.attributes.width}
                  height={game.attributes.cover.data.attributes.height}
                />
                {game.attributes.discount > 0 && (
                  <Label.Discount className={styles.discount}>
                    -{game.attributes.discount}%
                  </Label.Discount>
                )}
              </div>
              <div>
                <span>{game.attributes.title}</span>
                <span className={styles.price}>
                  {fn.calcDiscountedPrice(
                    game.attributes.price,
                    game.attributes.discount
                  )}
                  $
                </span>
              </div>
            </Link>
            <WishListIcon
              gameId={game.id}
              className={styles.wishListIcon}
              onReloadWishList={onReloadWishList}
            />
          </div>
        );
      })}
    </div>
  );
};
