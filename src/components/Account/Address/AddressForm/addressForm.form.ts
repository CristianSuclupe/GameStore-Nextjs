import * as yup from "yup";
import { AddressData } from "../ListAddresses";

export const initialValues = (address?: AddressData) => {
  return {
    title: address?.attributes.title || "",
    name: address?.attributes.name || "",
    address: address?.attributes.address || "",
    city: address?.attributes.city || "",
    state: address?.attributes.state || "",
    postal_code: address?.attributes.postal_code || "",
    phone: address?.attributes.phone || "",
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
