"use client";
import { useState } from "react";
import { User } from "@/src/api";
import { useAuthContext } from "@/src/hooks/useAuth";
import { useFormik } from "formik";
import { Form, Icon } from "semantic-ui-react";
import { initialValues, validationSchema } from "./changePasswordForm.form";
import styles from "./changePasswordForm.module.scss";
import { set } from "lodash";

const userController = new User();

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const { user, logout } = useAuthContext();
  const id = user?.id ?? 0;
  const formik = useFormik({
    initialValues: initialValues("", ""),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userController.updateMe(id, { password: formValue.password });
        logout();
        formik.handleReset(initialValues("", ""));
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowRepeatPassword = () => {
    setShowRepeatPassword((prev) => !prev);
  };
  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>Cambiar contraseña</label>
      <Form.Input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Nueva contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        icon={
          <Icon
            name={showPassword ? "eye slash" : "eye"}
            link
            onClick={handleShowPassword}
          />
        }
      />
      <Form.Input
        type={showRepeatPassword ? "text" : "password"}
        name="repeatPassword"
        placeholder="Confirmar nueva contraseña"
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        error={formik.errors.repeatPassword}
        icon={
          <Icon
            name={showRepeatPassword ? "eye slash" : "eye"}
            link
            onClick={handleShowRepeatPassword}
          />
        }
      />
      <Form.Button type="submit" loading={formik.isSubmitting}>
        Actualizar
      </Form.Button>
    </Form>
  );
};

export default ChangePasswordForm;
