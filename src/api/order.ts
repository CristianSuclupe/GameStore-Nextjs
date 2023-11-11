import { ENV, authFetch, CartData, AddressData } from "../utils";
export class Order {
  async createOrder(car: CartData[]) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENT_ORDER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: car,
        }),
      };
      const response = await authFetch(url, params);
      if (!response) throw new Error("No response");
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async saveOrder(
    car: CartData[],
    address: AddressData | undefined,
    userId: number,
    paymentID: string,
    totalPayment: number
  ) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.SAVE_ORDER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            products: car,
            addressShipping: address,
            user: userId,
            idPayment: paymentID,
            totalPayment: totalPayment,
          },
        }),
      };
      const response = await authFetch(url, params);
      if (!response) throw new Error("No response");
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getAll(userId: number) {
    try {
      const filters = `filters[user][id][$eq]=${userId}`;
      const sort = "sort[0]=createdAt:DESC";
      const urlParams = `${filters}&${sort}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.SAVE_ORDER}?${urlParams}`;
      const response = await authFetch(url);
      if (!response) throw new Error("No response");
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
