"use client";
import { Icon, Modal } from "semantic-ui-react";
import styles from "./fullModal.module.scss";

type FullModalProps = {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
};
export const FullModal = ({ children, show, onClose }: FullModalProps) => {
  return (
    <Modal open={show} className={styles.fullModal}>
      <Modal.Content>{children}</Modal.Content>
      <Icon name="close" className={styles.close} onClick={onClose} />
    </Modal>
  );
};
