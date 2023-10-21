import { ENV, authFetch } from "@/src/utils";

export class WishList {
  async check(userId: number, gameId: number) {
    try {
      const filterUser = `filters[user][id][$eq][0]=${userId}`;
      const filterGame = `filters[game][id][$eq][1]=${gameId}`;
      const urlParams = `${filterUser}&${filterGame}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${urlParams}`;
      const response = await authFetch(url);
      if (!response) throw new Error("No response");
      const result = await response.json();
      if (response.status !== 200) throw result;
      if (result.data.length === 0) return false;
      return result.data[0];
    } catch (error) {
      throw error;
    }
  }

  async add(userId: number, gameId: number) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            user: userId,
            game: gameId,
          },
        }),
      };
      const response = await authFetch(url, params);
      if (!response) throw new Error("No response");
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(wishListId: number) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}/${wishListId}`;
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
