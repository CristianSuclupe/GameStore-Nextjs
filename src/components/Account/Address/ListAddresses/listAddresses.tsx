"use client";
import { useState, useEffect } from "react";
import { Address } from "@/src/api";
import { AddressInfo } from "./Address";
import { useAuthContext } from "@/src/hooks/useAuth";
import { AddressData } from "@/src/utils";
import { map } from "lodash";
import styles from "./listAddresses.module.scss";

const addressController = new Address();

type ListAddressesProps = {
  reload: boolean;
  onReload: () => void;
};

export const ListAddresses = ({ reload, onReload }: ListAddressesProps) => {
  const [addresses, setAddresses] = useState<AddressData[]>([]);
  const { user } = useAuthContext();
  const id = user?.id ?? 0;

  useEffect(() => {
    (async () => {
      try {
        const response = await addressController.getAll(id);
        setAddresses(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [reload]);

  if (!addresses) return null;
  return (
    <div className={styles.addresses}>
      {map(addresses, (address) => (
        <AddressInfo key={address.id} address={address} onReload={onReload} />
      ))}
    </div>
  );
};
