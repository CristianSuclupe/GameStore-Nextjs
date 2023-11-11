"use client";
import { Order } from "@/src/api";
import { CartData, AddressData, UserData } from "@/src/utils";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

type PaymentProps = {
  goToStepEnd: () => void;
  carInfo: CartData[];
  addressSelected: AddressData | undefined;
  user: UserData | null;
  total: number;
  deleteAllItems: () => void;
};
const orderController = new Order();
export const Payment = ({
  goToStepEnd,
  carInfo,
  addressSelected,
  user,
  total,
  deleteAllItems,
}: PaymentProps) => {
  if (!user) return null;
  const createOrder = async () => {
    const order = await orderController.createOrder(carInfo);
    return order.id;
  };
  const onApprove = async (data: any, actions: any) => {
    const { paymentID } = data;
    await orderController.saveOrder(
      carInfo,
      addressSelected,
      user.id,
      paymentID,
      total
    );
    actions.order.capture();
    setTimeout(() => {
      deleteAllItems();
      goToStepEnd();
    }, 2000);
  };

  return (
    <div>
      <div>
        <PayPalScriptProvider
          options={{
            clientId:
              "Af0_0ArwQBVL3ENxC5lZ0vOtfJuoJ_ubXJ1fqTEvpv9v_VXofA6ZTzfLC_nvxe9aKvkHKwq1BbzmZrDN",
          }}
        >
          <PayPalButtons
            style={{
              shape: "pill",
              tagline: false,
              disableMaxWidth: true,
              layout: "horizontal",
              label: "pay",
            }}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};
