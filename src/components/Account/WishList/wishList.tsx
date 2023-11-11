"use client";
import { useState, useEffect, use } from "react";
import { size } from "lodash";
import { WishList as WishListApi } from "@/src/api";
import { useAuthContext } from "@/src/hooks/useAuth";
import { WishListDatum } from "@/src/utils";
import { NoResult } from "../../Shared";
import { GridGames } from "./GridGames";

const wishListController = new WishListApi();

export const WishList = () => {
  const { user } = useAuthContext();
  const [wishList, setWishList] = useState<WishListDatum[]>([]);
  const [reloadWishList, setReloadWishList] = useState(false);

  const onReloadWishList = () => setReloadWishList((prevState) => !prevState);

  useEffect(() => {
    (async () => {
      try {
        if (!user) return;
        const response = await wishListController.getAll(user.id);
        setWishList(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [reloadWishList]);

  useEffect(() => {}, [reloadWishList]);
  return size(wishList) === 0 ? (
    <NoResult text="No tienes juegos en la lista de deseos" />
  ) : (
    <GridGames wishList={wishList} onReloadWishList={onReloadWishList} />
  );
};
