import React from "react";
import ModalHeader from "../../modal/ModalHeader";
import ModalBottom from "../../modal/ModalBottom";
import Button from "../button/Button";
import "./Info.scss";

const Info = ({
  children,
  closeModal,
  theme = "info",
  title,
  className = "",
  additionalButton,
}) => {
  return (
    <div className={`info info--${theme} ${className}`}>
      <ModalHeader title={title} closeModal={closeModal} theme={theme} />
      <p className="text">{children}</p>
      <ModalBottom theme={theme}>
        {additionalButton && (
          <Button
            onClick={() => additionalButton.onClick()}
            name={additionalButton.name}
            theme={additionalButton.theme}
          >
            {additionalButton.children}
          </Button>
        )}
        <Button onClick={closeModal} theme={theme}>
          OK
        </Button>
      </ModalBottom>
    </div>
  );
};

export default Info;
