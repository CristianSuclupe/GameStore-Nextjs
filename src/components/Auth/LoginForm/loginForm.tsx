"use client";
import { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./loginForm.form";
import { Auth } from "@/src/api/auth";
import { useAuthContext } from "@/src/hooks/useAuth";

const AuthControl = new Auth();

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { login } = useAuthContext();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        const response = await AuthControl.login(formValues);
        login(response.jwt);
        //router.push("/");
      } catch (error) {
        throw error;
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="identifier"
        type="text"
        placeholder="Correo electronico o nombre de usuario"
        values={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />
      <Form.Input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        icon={
          <Icon
            name={showPassword ? "eye slash" : "eye"}
            link
            onClick={() => setShowPassword((prev) => !prev)}
          />
        }
      />
      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Ingresar
      </Form.Button>
    </Form>
  );
};
