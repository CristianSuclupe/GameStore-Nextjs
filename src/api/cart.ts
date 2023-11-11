import { ENV } from "../utils";
import { forEach } from "lodash";

export class Cart {
  add = (gameId: string) => {
    const shoppingCart = this.getAll();
    const gameExist = shoppingCart.findIndex((item: any) => item.id === gameId);
    if (gameExist < 0) {
      shoppingCart.push({ id: gameId, quantity: 1 });
    } else {
      const game = shoppingCart[gameExist];
      shoppingCart[gameExist].quantity = game.quantity + 1;
    }

    localStorage.setItem(ENV.CART, JSON.stringify(shoppingCart));
  };

  getAll = () => {
    const response = localStorage.getItem(ENV.CART);
    if (!response) return [];
    else return JSON.parse(response);
  };

  count = () => {
    const shoppingCart = this.getAll();
    let count = 0;
    forEach(shoppingCart, (item) => {
      count += item.quantity;
    });
    return count;
  };

  changeQuantity = (gameId: string, quantity: number) => {
    const games = this.getAll();
    const gameIndex = games.findIndex((item: any) => item.id === gameId);
    games[gameIndex].quantity = quantity;
    localStorage.setItem(ENV.CART, JSON.stringify(games));
  };

  delete = (gameId: string) => {
    const games = this.getAll();
    const updateGames = games.filter((item: any) => item.id !== gameId);
    localStorage.setItem(ENV.CART, JSON.stringify(updateGames));
  };

  deleteAll = () => {
    localStorage.removeItem(ENV.CART);
  };
}
