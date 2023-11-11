"use client";
import { useState } from "react";
import { Separator } from "../../Shared";
import { AddressData, CartData } from "@/src/utils/types";
import { Addresses } from "./Addresses";
import { Resume } from "./Resume";
import styles from "./stepTwo.module.scss";
type StepTwoProps = {
  cartInfo: CartData[];
};
export const StepTwo = ({ cartInfo }: StepTwoProps) => {
  const [addressSelected, setAddressSelected] = useState<AddressData>();
  return (
    <div className={styles.stepTwo}>
      <div className={styles.center}>
        <Addresses
          addressSelected={addressSelected}
          setAddressSelected={setAddressSelected}
        />
        <Separator height={50} />
      </div>
      <div className={styles.right}>
        <Resume carInfo={cartInfo} addressSelected={addressSelected} />
      </div>
    </div>
  );
};
