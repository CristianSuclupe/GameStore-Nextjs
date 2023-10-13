import * as Yup from "yup";

export const initialValues = (firstname: string, lastname: string) => {
  return {
    firstname,
    lastname,
  };
};

export const validationSchema = () => {
  return Yup.object({
    firstname: Yup.string().required("Este campo es requerido"),
    lastname: Yup.string().required("Este campo es requerido"),
  });
};
