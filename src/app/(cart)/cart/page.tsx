"use client";
import { useState, useEffect } from "react";
import { Game } from "@/src/api";
import { useCart } from "@/src/hooks/useCart";
import { CartData } from "@/src/utils";
import { Cart } from "@/src/components/Cart";
type CartPageProps = {
  searchParams: {
    step: number;
  };
};

const gameController = new Game();

const CartPage = ({ searchParams }: CartPageProps) => {
  const { step = 1 } = searchParams;
  const currentStep = Number(step);
  const [cartInfo, setCartInfo] = useState<CartData[]>([]);
  const { cart } = useCart();

  const renderComponent = () => {
    if (currentStep === 1) return <Cart.StepOne cartInfo={cartInfo} />;
    else if (currentStep === 2) return <Cart.StepTwo cartInfo={cartInfo} />;
    else if (currentStep === 3) return <Cart.StepThree />;
  };

  useEffect(() => {
    (async () => {
      try {
        if (!cart) return;
        const data: CartData[] = [];
        for await (const item of cart) {
          const response = await gameController.getGameById(item.id);
          data.push({ ...response.data, quantity: item.quantity });
        }
        setCartInfo(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [cart]);

  return <>{renderComponent()}</>;
};

export default CartPage;
