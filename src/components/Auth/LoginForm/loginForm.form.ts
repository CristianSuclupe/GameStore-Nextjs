import * as Yup from "yup";

export const initialValues = () => {
  return {
    identifier: "",
    password: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    identifier: Yup.string().required("Este campo es obligatorio"),
    password: Yup.string().required("Este campo es obligatorio"),
  });
};
