"use client";
import { useState, useEffect, use } from "react";
import { useAuthContext } from "@/src/hooks/useAuth";
import { Order } from "@/src/api";
import { NoResult } from "../../Shared";
import { Order as OrderComponent } from "./Order/order";
import { OrderData } from "@/src/utils";
import { map } from "lodash";

const orderController = new Order();

export const Orders = () => {
  const { user } = useAuthContext();
  const [orders, setOrders] = useState<OrderData[]>([]);

  useEffect(() => {
    (async () => {
      try {
        if (!user) return;
        const response = await orderController.getAll(user.id);
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  if (orders.length < 1) return <NoResult text="No hay pedidos" />;
  return (
    <div>
      {map(orders, (order) => (
        <OrderComponent key={order.id} order={order} />
      ))}
    </div>
  );
};
