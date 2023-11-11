"use client";
import { useState, useEffect } from "react";
import { Address } from "@/src/api";
import { AddressData } from "@/src/utils";
import { useAuthContext } from "@/src/hooks/useAuth";
import { map } from "lodash";
import classNames from "classnames";
import styles from "./addresses.module.scss";

type AddressesProps = {
  addressSelected: AddressData | undefined;
  setAddressSelected: (address: AddressData) => void;
};

const addressController = new Address();
export const Addresses = ({
  addressSelected,
  setAddressSelected,
}: AddressesProps) => {
  const { user } = useAuthContext();
  const [addresses, setAddresses] = useState<AddressData[]>();

  useEffect(() => {
    (async () => {
      try {
        if (!user) return;
        const response = await addressController.getAll(user.id);
        setAddresses(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className={styles.addresses}>
      <h2>Dirección</h2>
      {map(addresses, (address) => (
        <div
          key={address.id}
          className={classNames(styles.address, {
            [styles.active]: address.id === addressSelected?.id,
          })}
          onClick={() => setAddressSelected(address)}
        >
          <p>
            {address.attributes.name} {address.attributes.title}
          </p>
          <p>
            {address.attributes.address}, {address.attributes.postal_code},{" "}
            {address.attributes.state}, {address.attributes.city}
          </p>
        </div>
      ))}
    </div>
  );
};
