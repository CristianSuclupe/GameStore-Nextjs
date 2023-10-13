import * as Yup from "yup";

export const initialValues = (email: string, repeatEmail: string) => {
  return {
    email,
    repeatEmail,
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("El email no es válido")
      .required("Este campo es requerido"),
    repeatEmail: Yup.string()
      .email("El email no es válido")
      .required("Este campo es requerido")
      .oneOf([Yup.ref("email")], "Los emails no coinciden"),
  });
};
