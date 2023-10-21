"use client";
import { useState, useEffect } from "react";
import { WishListDatum } from "@/src/utils";
import { WishList } from "@/src/api";
import { useAuthContext } from "@/src/hooks/useAuth";
import { Icon } from "semantic-ui-react";
import classNames from "classnames";
import styles from "./wishListIcon.module.scss";
import { boolean } from "yup";

const wishListController = new WishList();

type WishListIconProps = {
  className?: any;
  gameId: number;
};
export const WishListIcon = ({ gameId, className }: WishListIconProps) => {
  const [hasWishList, setHasWishList] = useState<boolean | WishListDatum>();
  const { user } = useAuthContext();

  const addWishList = async () => {
    if (!user) return setHasWishList(false);
    const response = await wishListController.add(user.id, gameId);
    setHasWishList(response);
  };

  const deleteWishList = async () => {
    try {
      if (!hasWishList || typeof hasWishList === "boolean") return null;
      await wishListController.delete(hasWishList.id);
      setHasWishList(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        if (!user) return setHasWishList(false);
        const response = await wishListController.check(user.id, gameId);
        setHasWishList(response);
      } catch (error) {
        setHasWishList(false);
        console.log(error);
      }
    })();
  }, []);
  if (hasWishList === null) return null;
  return (
    <Icon
      name={hasWishList ? "heart" : "heart outline"}
      onClick={hasWishList ? deleteWishList : addWishList}
      className={classNames(styles.wishListIcon, { [className]: classNames })}
    />
  );
};
