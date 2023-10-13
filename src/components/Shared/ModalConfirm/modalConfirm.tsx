"use client";
import { Confirm } from "semantic-ui-react";

export const ModalConfirm = ({ ...rest }) => {
  return <Confirm className="confirm" size="mini" {...rest} />;
};
