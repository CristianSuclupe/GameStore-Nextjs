"use client";
import { useEffect, useState, createContext } from "react";
import { CartAux } from "../utils";
import { Cart } from "../api";

type CartContextType = {
  cart: CartAux[] | undefined;
  addToCart: (id: number) => void;
  total: number;
  deleteItem: (id: string) => void;
  deleteAllItems: () => void;
  changeQuantityItem: (id: string, quantity: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);
const cartController = new Cart();

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartAux[] | undefined>([]); // [{id: 1, quantity: 1}, {id: 2, quantity: 2}
  const [total, setTotal] = useState(cartController.count()); // 0
  useEffect(() => {
    const response = cartController.getAll();
    setCart(response);
  }, []);

  const addToCart = (id: number) => {
    cartController.add(id.toString());
    refreshTotalCart();
  };

  const refreshTotalCart = () => {
    setTotal(cartController.count());
    setCart(cartController.getAll());
  };

  const deleteItem = (id: string) => {
    cartController.delete(id);
    refreshTotalCart();
  };

  const deleteAllItems = () => {
    cartController.deleteAll();
    refreshTotalCart();
  };

  const changeQuantityItem = (id: string, quantity: number) => {
    cartController.changeQuantity(id, quantity);
    refreshTotalCart();
  };
  const data = {
    cart,
    addToCart,
    total,
    deleteItem,
    deleteAllItems,
    changeQuantityItem,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
