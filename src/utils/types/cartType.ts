import { GameAttributes } from "./gameType";
export type CartData = {
  id: number;
  attributes: GameAttributes;
  quantity: number;
};

export type CartAux = {
  id: number;
  quantity: number;
};
