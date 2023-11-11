import { ENV, authFetch } from "../utils";
export class Order {
  async createOrder() {
    try {
      const url = `${ENV.API_URL}/${ENV.ORDER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await authFetch(url, params);
      console.log(response);
      if (!response) throw new Error("No response");
      const result = await response.json();
      if (response.status !== 200) throw result;
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
