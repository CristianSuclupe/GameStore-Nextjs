import { usePathname } from "next/navigation";
import { GameDatum } from "@/src/utils";
import Link from "next/link";
import Image from "next/image";
import { map } from "lodash";
import { fn } from "@/src/utils";
import { Label } from "../../Shared";
import styles from "./gridGames.module.scss";

export const GridGames = ({ games }: { games: GameDatum[] }) => {
  return (
    <div className={styles.gridGames}>
      {map(games, (game) => (
        <Link
          key={game.id}
          href={`/${game.attributes.slug}`}
          className={styles.game}
        >
          <div>
            <Image
              src={game.attributes.cover.data.attributes.url}
              alt="Imagen del juego"
              width={game.attributes.cover.data.attributes.width}
              height={game.attributes.cover.data.attributes.height}
              priority
            />
            {game.attributes.discount > 0 && (
              <Label.Discount className={styles.discount}>
                {`-${game.attributes.discount}%`}
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
      ))}
    </div>
  );
};
