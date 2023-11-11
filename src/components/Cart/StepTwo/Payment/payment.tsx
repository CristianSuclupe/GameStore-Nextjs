"use client";
import { Order } from "@/src/api";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const orderController = new Order();
export const Payment = () => {
  const createOrder = async () => {
    const order = await orderController.createOrder();
    return order.id;
  };
  const onApprove = async (data: any, actions: any) => {
    console.log(data);
    actions.order.capture();
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
