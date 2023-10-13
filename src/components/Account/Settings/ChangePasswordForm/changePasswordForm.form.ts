import * as Yup from "yup";

export const initialValues = (password: string, repeatPassword: string) => {
  return {
    password,
    repeatPassword,
  };
};

export const validationSchema = () => {
  return Yup.object({
    password: Yup.string().required("Este campo es requerido"),
    repeatPassword: Yup.string()
      .required("Este campo es requerido")
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  });
};
