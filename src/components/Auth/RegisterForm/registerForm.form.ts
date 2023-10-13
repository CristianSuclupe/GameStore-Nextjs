import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    password: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Este campo es obligatorio"),
    username: Yup.string().required("Este campo es obligatorio"),
    firstname: Yup.string().required("Este campo es obligatorio"),
    lastname: Yup.string().required("Este campo es obligatorio"),
    password: Yup.string().required("Este campo es obligatorio"),
  });
};
