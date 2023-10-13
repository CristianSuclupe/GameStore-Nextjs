"use client";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./addressForm.form";
import { Address } from "@/src/api";
import { AddressData } from "../ListAddresses";
import { useAuthContext } from "@/src/hooks/useAuth";

const addressController = new Address();

type AddressFormProps = {
  address?: AddressData;
  onClose: () => void;
  onReload: () => void;
};

export const AddressForm = ({
  address,
  onClose,
  onReload,
}: AddressFormProps) => {
  const { user } = useAuthContext();
  const id = user?.id ?? 0;
  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formData) => {
      try {
        if (address) {
          await addressController.update(address.id, formData);
        } else {
          await addressController.create(formData, id);
        }
        formik.handleReset("");
        onReload();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="title"
        placeholder="Titulo de la direccion"
        value={formik.values.title}
        onChange={formik.handleChange}
        error={formik.errors.title}
      />
      <Form.Group widths="equal">
        <Form.Input
          name="name"
          placeholder="Nombre y apellidos"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <Form.Input
          name="address"
          placeholder="Direccion"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.errors.address}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="state"
          placeholder="Provincia"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.errors.state}
        />
        <Form.Input
          name="city"
          placeholder="Ciudad"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          name="postal_code"
          placeholder="Código postal"
          value={formik.values.postal_code}
          onChange={formik.handleChange}
          error={formik.errors.postal_code}
        />
        <Form.Input
          name="phone"
          placeholder="Número de celular"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
      </Form.Group>
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
};
