import { ENV, authFetch } from "../utils";

export type IAddressData = {
  title: string;
  name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  phone: string;
};

export class Address {
  async create(data: IAddressData, addressId: number) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            ...data,
            user: addressId,
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

  async getAll(addressId: number) {
    try {
      const filters = `filters[user][id][$eq]=${addressId}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}?${filters}`;
      const response = await authFetch(url);
      if (!response) throw new Error("No response");
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async update(addressId: number, data: Partial<IAddressData>) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`;
      const params = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
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

  async delete(addressId: number) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESS}/${addressId}`;
      const params = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
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
}
