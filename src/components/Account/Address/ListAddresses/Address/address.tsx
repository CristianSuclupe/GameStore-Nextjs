"use client";
import { useState } from "react";
import { AddressData } from "@/src/components/Account/Address/ListAddresses";
import { AddressForm } from "../../AddressForm";
import { BasicModal, ModalConfirm } from "@/src/components/Shared";
import { Button, Icon } from "semantic-ui-react";
import { Address } from "@/src/api";
import styles from "./address.module.scss";

type AddressInfoProps = {
  address: AddressData;
  onReload: () => void;
};

const addressController = new Address();

export const AddressInfo = ({ address, onReload }: AddressInfoProps) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onOpenClose = () => setShowEdit((prev) => !prev);
  const onOpenCloseConfirm = () => setShowConfirm((prev) => !prev);

  const onDelete = async () => {
    try {
      await addressController.delete(address.id);
      onReload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{address.attributes.title}:</p>
          <p className={styles.addressInfo}>
            {address.attributes.name}, {address.attributes.address},{" "}
            {address.attributes.state},{address.attributes.city},{" "}
            {address.attributes.postal_code}
          </p>
        </div>
        <div className={styles.actions}>
          <Button primary icon onClick={onOpenClose}>
            <Icon name="pencil" />
          </Button>
          <Button primary icon onClick={onOpenCloseConfirm}>
            <Icon name="delete" />
          </Button>
        </div>
      </div>
      <ModalConfirm
        open={showConfirm}
        onCancel={onOpenCloseConfirm}
        onConfirm={onDelete}
        content="¿Estás seguro de eliminar la dirección?"
      />
      <BasicModal
        show={showEdit}
        onClose={onOpenClose}
        title="Editar dirección"
      >
        <AddressForm
          onClose={onOpenClose}
          onReload={onReload}
          address={address}
        />
      </BasicModal>
    </>
  );
};
