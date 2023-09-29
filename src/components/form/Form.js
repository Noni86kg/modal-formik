import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ModalHeader from "../../modal/ModalHeader";
import ModalBottom from "../../modal/ModalBottom";
import InputField from "../inputField/InputField";
import Button from "../button/Button";
import "./Form.scss";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const Form = ({ closeModal }) => (
  <Formik
    initialValues={{
      firstName: "",
      lastName: "",
      email: "",
    }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isValid,
      dirty,
    }) => {
      return (
        <form onSubmit={handleSubmit}>
          <ModalHeader title="Form" closeModal={closeModal} />

          <div className="form">
            <InputField
              name="firstName"
              label="First Name"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              touched={touched.firstName}
              errors={errors.firstName}
            />

            <InputField
              name="lastName"
              label="Last Name"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              touched={touched.lastName}
              errors={errors.lastName}
            />

            <InputField
              name="email"
              label="Email"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              touched={touched.email}
              errors={errors.email}
            />
          </div>

          <ModalBottom>
            <Button theme="primary" type="submit" disabled={!isValid || !dirty}>
              Submit
            </Button>
          </ModalBottom>
        </form>
      );
    }}
  </Formik>
);

export default Form;
