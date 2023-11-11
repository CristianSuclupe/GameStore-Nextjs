"use client";
import { Icon, Dropdown } from "semantic-ui-react";
import Image from "next/image";
import { map } from "lodash";
import { fn } from "@/src/utils";
import { useCart } from "@/src/hooks/useCart";
import { CartData } from "@/src/utils";
import styles from "./basket.module.scss";

type BasketProps = {
  cartInfo: CartData[];
};
export const Basket = ({ cartInfo }: BasketProps) => {
  const { changeQuantityItem, deleteItem } = useCart();
  const options = Array.from({ length: 20 }, (_, index) => {
    const number = index + 1;
    return {
      key: number,
      text: String(number),
      value: number,
    };
  });
  return (
    <div className={styles.basket}>
      <h2>Cesta</h2>
      <div className={styles.block}>
        {map(cartInfo, (item) => (
          <div key={item.id} className={styles.item}>
            <Image
              src={item.attributes.cover.data.attributes.url}
              alt="Juego"
              width={item.attributes.cover.data.attributes.width}
              height={item.attributes.cover.data.attributes.height}
            />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{item.attributes.title}</p>
                  <p>{item.attributes.platform.data.attributes.title}</p>
                </div>
                <Icon
                  name="trash alternate outline"
                  link
                  onClick={() => deleteItem(item.id.toString())}
                />
              </div>
              <div className={styles.quantity}>
                <Dropdown
                  className="number"
                  options={options}
                  selection
                  value={item.quantity}
                  compact
                  onChange={(_, data) =>
                    changeQuantityItem(item.id.toString(), Number(data.value))
                  }
                />
                <span>
                  {fn.calcDiscountedPrice(
                    item.attributes.price,
                    item.attributes.discount
                  )}
                  $
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
