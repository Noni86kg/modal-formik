import React from "react";
import { CgAsterisk } from "react-icons/cg";
import "./InputField.scss";

const InputField = (props) => {
  const { name, label, className, required, touched, errors, labelClassName } =
    props;
  const inputProps = { ...props };

  delete inputProps.label;
  delete inputProps.labelClassName;
  delete inputProps.required;
  delete inputProps.touched;
  delete inputProps.errors;

  return (
    <div className="input-field-wraper">
      <label htmlFor={name} className={`label ${labelClassName}`}>
        {label} {required && <CgAsterisk className="required-asterisk" />}
      </label>
      <input
        {...inputProps}
        className={`${className} input-field ${
          touched && errors ? "input-field-error" : ""
        }`}
      />
      <div className="error-message">{touched && errors && errors}</div>
    </div>
  );
};

export default InputField;
