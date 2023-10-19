import * as yup from "yup";
import { AddressAttributes } from "@/src/utils";

export const initialValues = (address?: AddressAttributes) => {
  return {
    title: address?.title || "",
    name: address?.name || "",
    address: address?.address || "",
    city: address?.city || "",
    state: address?.state || "",
    postal_code: address?.postal_code || "",
    phone: address?.phone || "",
  };
};

export const validationSchema = () => {
  return yup.object().shape({
    title: yup.string().required("Este campo es requerido"),
    name: yup.string().required("Este campo es requerido"),
    address: yup.string().required("Este campo es requerido"),
    city: yup.string().required("Este campo es requerido"),
    state: yup.string().required("Este campo es requerido"),
    postal_code: yup.string().required("Este campo es requerido"),
    phone: yup
      .string()
      .required("Este campo es requerido")
      .matches(/^\d{9}$/, "El número de teléfono debe tener 9 dígitos"),
  });
};
