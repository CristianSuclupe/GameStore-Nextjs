"use client";
import { Form } from "semantic-ui-react";
import { initialValues, validationSchema } from "./changeEmailForm.form";
import { useAuthContext } from "@/src/hooks/useAuth";
import { useFormik } from "formik";
import { User } from "@/src/api";
import styles from "./changeEmailForm.module.scss";

const userController = new User();

const ChangeEmailForm = () => {
  const { user, updateUser } = useAuthContext();
  const id = user?.id ?? 0;
  const formik = useFormik({
    initialValues: initialValues("", ""),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userController.updateMe(id, { email: formValue.email });
        updateUser("email", formValue.email);
        formik.handleReset(initialValues("", ""));
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form className={styles.form} onSubmit={formik.handleSubmit}>
      <label>Cambiar correo electronico</label>
      <Form.Input
        name="email"
        placeholder="Nuevo correo electronico"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
      />
      <Form.Input
        name="repeatEmail"
        placeholder="Confirmar nuevo correo electronico"
        value={formik.values.repeatEmail}
        onChange={formik.handleChange}
        error={formik.errors.repeatEmail}
      />
      <Form.Button type="submit" loading={formik.isSubmitting}>
        Actualizar
      </Form.Button>
    </Form>
  );
};

export default ChangeEmailForm;
