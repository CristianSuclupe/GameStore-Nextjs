import { GameData } from "./gameType";

export interface WishListData {
  data: WishListDatum;
  meta: WishListMeta;
}

export interface WishListDatum {
  id: number;
  attributes: WishListAttributes;
}

export interface WishListAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  game: GameData;
}

export interface WishListMeta {
  pagination: WishListPagination;
}

export interface WishListPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
