"use client";
import { useState } from "react";
import Image from "next/image";
import { BasicModal } from "@/src/components/Shared";
import { OrderData } from "@/src/utils";
import { DateTime } from "luxon";
import { forEach, map } from "lodash";
import { fn } from "@/src/utils";
import styles from "./order.module.scss";

type OrderProps = {
  order: OrderData;
};
export const Order = ({ order }: OrderProps) => {
  const [showModal, setShowModal] = useState(false);
  const createdAt = new Date(order.attributes.createdAt).toISOString();
  const address = order.attributes.addressShipping;

  const openCloseModal = () => setShowModal((prevState) => !prevState);

  const getTotalProducts = () => {
    let total = 0;
    forEach(order.attributes.products, (product) => {
      total += product.quantity;
    });
    return total;
  };
  return (
    <>
      <div className={styles.order} onClick={openCloseModal}>
        <div>
          <span>
            {DateTime.fromISO(createdAt, { locale: "es" }).toFormat(
              "dd/MM/yyyy"
            )}
          </span>
          <p>{getTotalProducts()} productos</p>
        </div>
        <p>{order.attributes.totalPayment}$</p>
      </div>
      <BasicModal
        show={showModal}
        onClose={openCloseModal}
        title="Información del pedido"
      >
        {map(order.attributes.products, (product) => (
          <div className={styles.product} key={product.id}>
            <Image
              src={product.attributes.cover.data.attributes.url}
              width={product.attributes.cover.data.attributes.width}
              height={product.attributes.cover.data.attributes.height}
              alt="Portada juego"
            />
            <div>
              <div className={styles.info}>
                <p>{product.attributes.title}</p>
                <p>{product.attributes.platform.data.attributes.title}</p>
              </div>
              <div className={styles.quantity}>
                <span>x{product.quantity}</span>
                <span>
                  {fn.calcDiscountedPrice(
                    product.attributes.price,
                    product.attributes.discount
                  )}
                  $
                </span>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.address}>
          <div>
            <p className={styles.title}>{address.attributes.title}</p>
            <p className={styles.addressInfo}>
              {address.attributes.name}, {address.attributes.address},{" "}
              {address.attributes.state}, {address.attributes.city},{" "}
              {address.attributes.postal_code}
            </p>
          </div>
        </div>
        <div className={styles.total}>
          <p>Total: {order.attributes.totalPayment}$</p>
        </div>
      </BasicModal>
    </>
  );
};
