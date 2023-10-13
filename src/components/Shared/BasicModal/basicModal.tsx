"use client";
import { Modal } from "semantic-ui-react";

type BasicModalProps = {
  children: React.ReactNode;
  show: boolean;
  onClose: () => void;
  title: string;
};

export const BasicModal = ({
  children,
  show,
  onClose,
  title,
}: BasicModalProps) => {
  return (
    <Modal open={show} onClose={onClose} size="small">
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>{children}</Modal.Content>
    </Modal>
  );
};
