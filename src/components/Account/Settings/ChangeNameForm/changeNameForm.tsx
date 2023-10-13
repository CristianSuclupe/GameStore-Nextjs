"use client";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useAuthContext } from "@/src/hooks/useAuth";
import { initialValues, validationSchema } from "./changeNameForm.form";
import { User } from "@/src/api";
import styles from "./changeNameForm.module.scss";

const userController = new User();

const ChangeNameForm = () => {
  const { user } = useAuthContext();
  const lastName = user?.lastname ?? "";
  const firstName = user?.firstname ?? "";
  const id = user?.id ?? 0;
  const formik = useFormik({
    initialValues: initialValues(firstName, lastName),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userController.updateMe(id, formValue);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <label htmlFor="">Nombre y apellidos</label>
      <div className={styles.content}>
        <Form.Input
          name="firstname"
          placeholder="Nombre"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.errors.firstname}
        />
        <Form.Input
          name="lastname"
          placeholder="Apellidos"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.errors.lastname}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
          Actualizar
        </Form.Button>
      </div>
    </Form>
  );
};

export default ChangeNameForm;
