"use client";
import { useEffect, useState } from "react";
import { CartData } from "@/src/utils/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "semantic-ui-react";
import { forEach } from "lodash";
import { fn } from "@/src/utils";
import styles from "./resume.module.scss";

type ResumeProps = {
  cartInfo: CartData[];
};

type Total = {
  original: number;
  discount: number;
  finalPrice: number;
};
export const Resume = ({ cartInfo }: ResumeProps) => {
  const router = useRouter();
  const [total, setTotal] = useState<Total>();
  useEffect(() => {
    let total = {
      original: 0,
      discount: 0,
      finalPrice: 0,
    };

    forEach(cartInfo, (game) => {
      const price = fn.calcDiscountedPrice(
        game.attributes.price,
        game.attributes.discount
      );
      total.original += game.attributes.price * game.quantity;
      total.discount += (game.attributes.price - Number(price)) * game.quantity;
      total.finalPrice += Number(price) * game.quantity;
    });
    setTotal(total);
  }, [cartInfo]);

  const goToStepTwo = () => {
    router.push("/cart?step=2");
  };
  if (!total) return null;
  return (
    <div className={styles.resume}>
      <h2>Resumen</h2>
      <div className={styles.block}>
        <div className={styles.prices}>
          <div>
            <span>Precio Normal</span>
            <span>{total.original.toFixed(2)}$</span>
          </div>
          <div>
            <span>Descuento</span>
            <span>{total.discount.toFixed(2)}$</span>
          </div>
          <div>
            <span>Subtotal</span>
            <span>{total.finalPrice.toFixed(2)}$</span>
          </div>
        </div>
        <Button primary fluid onClick={goToStepTwo}>
          Proceder con el pago
        </Button>
        <Link href="/">Continuar comprando</Link>
      </div>
    </div>
  );
};
