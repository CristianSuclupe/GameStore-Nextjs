"use client";
import { useState } from "react";
import { AddressForm } from "../AddressForm";
import { BasicModal } from "@/src/components/Shared";
import { Button } from "semantic-ui-react";
import styles from "./addAddress.module.scss";

type AddAddressProps = {
  onReload: () => void;
};

export const AddAddress = ({ onReload }: AddAddressProps) => {
  const [show, setShow] = useState(false);
  const onOpenClose = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Crear
      </Button>
      <BasicModal show={show} onClose={onOpenClose} title="Nueva direccion">
        <AddressForm onClose={onOpenClose} onReload={onReload} />
      </BasicModal>
    </>
  );
};
