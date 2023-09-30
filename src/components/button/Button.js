import React from "react";
import "./Button.scss";

const Button = ({
  children,
  onClick,
  className,
  theme = "info",
  name,
  type = "button",
  disabled,
}) => {
  const classNameProps = `button button--${theme} ${
    disabled ? "button-disabled" : ""
  } ${className}`;

  return (
    <button
      type={type}
      name={name}
      className={classNameProps}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
