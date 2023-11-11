"use client";
import { CartData, AddressData } from "@/src/utils";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { forEach, map } from "lodash";
import { Payment } from "../Payment";
import { useAuthContext } from "@/src/hooks/useAuth";
import { useCart } from "@/src/hooks/useCart";
import { fn } from "@/src/utils";
import styles from "./resume.module.scss";

type ResumeProps = {
  carInfo: CartData[];
  addressSelected: AddressData | undefined;
};
export const Resume = ({ carInfo, addressSelected }: ResumeProps) => {
  const { user } = useAuthContext();
  const { deleteAllItems } = useCart();
  const router = useRouter();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalTemp = 0;
    forEach(carInfo, (game) => {
      const price = fn.calcDiscountedPrice(
        game.attributes.price,
        game.attributes.discount
      );
      totalTemp += Number(price) * game.quantity;
    });
    setTotal(Number(totalTemp.toFixed(2)));
  }, [carInfo]);

  const goToStepEnd = () => {
    router.replace("/cart?step=3");
  };

  if (!total) return null;
  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>
      <div className={styles.block}>
        <div className={styles.products}>
          {map(carInfo, (game) => (
            <div key={game.id} className={styles.product}>
              <div>
                <p>{game.attributes.title}</p>
                <span>{game.attributes.platform.data.attributes.title}</span>
              </div>
              <span>
                {game.quantity > 0 && `${game.quantity}x`}
                {fn.calcDiscountedPrice(
                  game.attributes.price,
                  game.attributes.discount
                )}
                $
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.blockTotal}>
        <div>
          <span>Total</span>
          <span>{total}$</span>
        </div>
      </div>
      {addressSelected && (
        <Payment
          goToStepEnd={goToStepEnd}
          carInfo={carInfo}
          addressSelected={addressSelected}
          user={user}
          total={total}
          deleteAllItems={deleteAllItems}
        />
      )}
    </div>
  );
};
