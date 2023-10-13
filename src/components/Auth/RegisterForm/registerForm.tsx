"use client";
import { useRouter } from "next/navigation";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./registerForm.form";
import { Auth } from "@/src/api/auth";

const AuthControl = new Auth();

export const RegisterForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await AuthControl.register(formValue);
        router.push("/join/sign-in");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="email"
        type="text"
        placeholder="Correo Electronico"
        values={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Group widths="equal">
        <Form.Input
          name="firstname"
          type="text"
          placeholder="Nombre"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.errors.firstname}
        />
        <Form.Input
          name="lastname"
          type="text"
          placeholder="Apellidos"
          values={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.errors.lastname}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="username"
          type="text"
          placeholder="Nombre de Usuario"
          values={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        <Form.Input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </Form.Group>
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Registrarse
      </Form.Button>
    </Form>
  );
};
